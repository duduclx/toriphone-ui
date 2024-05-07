import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useRegistrars = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ registrars, setRegistrars ] = useState()

    // functions
    const registrarsGet = async () => {
        //requester.setTenant(tenantCurrent.uuid)
        requester.fetchOptions = {}
        const registrarsList = await requester.get('confd/1.1/registrars');
        setRegistrars(registrarsList)
    }

    return { registrars, registrarsGet }
}

/*
{
  "total": 1,
  "items": [
    {
      "id": "default",
      "deletable": false,
      "name": "local",
      "main_host": "10.0.2.15",
      "main_port": null,
      "backup_host": null,
      "backup_port": null,
      "proxy_main_host": "10.0.2.15",
      "proxy_main_port": null,
      "proxy_backup_host": null,
      "proxy_backup_port": null,
      "outbound_proxy_host": null,
      "outbound_proxy_port": null,
      "links": [
        {
          "rel": "registrars",
          "href": "https://10.94.101.195/api/confd/1.1/registrars/default"
        }
      ]
    }
  ],
  "_headers": {}
}
*/