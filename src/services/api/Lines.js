import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useLines = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [lines, setLines] = useState({})

    // functions
    const linesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const lines = await requester.get('confd/1.1/lines?recurse=false');
        setLines(lines)
    }

    const ALPHANUMERIC_POOL = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const generateString = (length = 8) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += ALPHANUMERIC_POOL.charAt(Math.floor(Math.random() * ALPHANUMERIC_POOL.length));
        }
        return result;
    };

    const lineCreate = async (line) => {
        requester.setTenant(tenantCurrent.uuid)
        const name = generateString()
        const password = generateString()
        const lineOptions = {
            caller_id_name: line.firstname + " " + line.lastname,
            caller_id_num: line.extensions.exten.toString(),
            context: line.extensions.context,
            firstname: line.firstname,
            lastname: line.lastname,
            registrar: "default",
            extensions: [
              {
                context: line.extensions.context,
                exten: line.extensions.exten.toString(),
              }
            ],
            endpoint_sip: {
              auth_section_options: [
                [
                  "username",
                  name
                ],
                [
                    "password",
                    password
                  ]
              ],
              label: name,
              name: name,
              templates: [
                {
                  label: line.sipTemplate.label,
                  uuid: line.sipTemplate.uuid
                }
              ],
            }
          }

        try{
            const newLine = await requester.post('confd/1.1/lines', lineOptions)
            return newLine
        } catch (e) {
            console.log(e)
        }
    }

    return { lines, linesGet, lineCreate }
}