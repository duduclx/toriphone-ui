import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useExternals = () => {
  // requirements
  const { user, requester } = useAuth();
  const { tenantCurrent } = useTenants();

  // values
  const [externalsServices, setExternalsServices] = useState({});
  const [externalsConfig, setExternalsConfig] = useState({});
  const [externalsConfigList, setExternalsConfigList] = useState([]);

  // functions
  const externalsServicesGet = async () => {
    requester.setTenant(tenantCurrent.uuid);
    const externalsServicesList = await requester.get(
      `auth/0.1/users/${user.uuid}/external`
    );
    setExternalsServices(externalsServicesList);
    // service is google, microsoft, mobile
    return externalsServicesList;
  };

  const externalsConfigGet = async (service) => {
    requester.setTenant(tenantCurrent.uuid);
    const externalsConfig = await requester.get(
      `auth/0.1/external/${service}/users?recurse=false`
    );
    setExternalsConfig(externalsConfig);
    // existing configurations for a service
    return externalsConfig;
  };

  const externalsConfigListGet = async () => {
    try {
      const services = await externalsServicesGet();
      const configList = [];

      for (const service of services.items) {
        const config = await externalsConfigGet(service.type);
        configList.push(...config.items);
      }
      const configObject = {
        total: configList.length,
        items: configList,
      };

      setExternalsConfigList(configObject);
    } catch (error) {
      console.error("Error fetching external config list:", error);
    }
  };

  return {
    externalsServices,
    externalsServicesGet,
    externalsConfig,
    externalsConfigGet,
    externalsConfigList,
    externalsConfigListGet,
  };
};
