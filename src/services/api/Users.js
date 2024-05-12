import { useState } from "react"

import { useAuth } from "../AuthProvider"
import { useTenants } from "./Tenants"

export const useUsers = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ users, setUsers ] = useState({})
    const [ userCurrent, setUserCurrent ] = useState({})

    // functions
    const usersGet = async (tenantCurrent) => {
        if (tenantCurrent && tenantCurrent.uuid) {
            try {
                requester.setTenant(tenantCurrent.uuid)
                const usersList = await requester.get('confd/1.1/users?recurse=false')
                setUsers(usersList)
            } catch (e) {
                // error
            }
        }
    }

    const userCreate = async (user) => {
        requester.setTenant(tenantCurrent.uuid)

        const userOptions = {
            auth: {
              email_address: user.email,
              enabled: true,
              firstname: user.firstname,
              lastname: user.lastname,
              password: user.password,
              purpose: 'user',
              username: user.email
            },
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            //call_record_enabled: true,
            call_record_incoming_external_enabled: true,
            call_record_incoming_internal_enabled: true,
            call_record_outgoing_external_enabled: true,
            call_record_outgoing_internal_enabled: true,
            //call_transfer_enabled: true,
            //online_call_record_enabled: true,
            outgoing_caller_id: "default"
          }

        try{
            const newUser = await requester.post('confd/1.1/users', userOptions, null, requester.successResponseParser)
            // update users
            setUsers(prevState => ({
                ...prevState,
                items: [...prevState.items, newUser]
            }));
            return newUser
        } catch (e) {
            console.log(e)
        }
    }

    const userDelete = async () => {
        requester.setTenant(tenantCurrent.uuid)
    }

    const userAssociateLine = async (user, line) => {
        requester.setTenant(tenantCurrent.uuid)
        const userId = user.id.toString()
        const lineId = line.id.toString()
        try {
            requester.put(`confd/1.1/users/${userId}/lines/${lineId}`);
            return true
        } catch (e) {
            console.log('error', e)
        }
    }

    const userCreateVoicemail = async (user, line) => {
        requester.setTenant(tenantCurrent.uuid)

        const userId = user.id.toString()

        const voicemailOptions = {
            ask_password: false,
            attach_audio: false,
            context: line.extensions[0].context,
            delete_messages: false,
            email: user.email,
            enabled: true,
            language: "fr_FR",
            number: line.extensions[0].exten,
            tenant_uuid: user.tenant_uuid,
            timezone: "eu-fr",
            name: user.firstname + " " + user.lastname,
            users: [
              {
                firstname: user.firstname,
                lastname: user.lastname,
                uuid: user.uuid
              }
            ]
          }
        
        try {
            const voicemail = await requester.post(`confd/1.1/users/${userId}/voicemails`, voicemailOptions, null, requester.successResponseParser)
            return voicemail
        } catch (e) {
            console.log('error', e)
        }
        
    }

    return { users, usersGet, userCurrent, setUserCurrent, userCreate, userAssociateLine, userCreateVoicemail }
    
}