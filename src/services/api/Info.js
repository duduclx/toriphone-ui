import { useState } from "react"
import { useAuth } from "../AuthProvider"

export const useInfos = () => {
    // requirements
    const {requester} = useAuth();

    // values
    const [serverInfos, setServerInfos] = useState({})

    // functions
    const serverInfosGet = async () => {
        const infos = await requester.get('confd/1.1/infos')
        setServerInfos(infos)
    }


    return { serverInfos, serverInfosGet}
}