import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useConferences = () => {
  // requirements
  const { requester } = useAuth();
  const { tenantCurrent } = useTenants();

  // values
  const [conferencesSources, setConferencesSources] = useState({});
  const [conferences, setConferences] = useState({});
  const [conferencesList, setConferencesList] = useState({});
  const [conferencesContactsList, setConferencesContactsList] = useState({});
  const [conferenceWazoDefaultBridge, setConferenceWazoDefaultBridge] =
    useState({});
  const [conferenceWazoDefaultUser, setConferenceWazoDefaultUser] = useState(
    {}
  );

  // functions
  /*
    il y a un endpoint
    confd/1.1/conferences?recurse=false
    https://10.94.101.195/api/#!/conferences/list_conferences
    cela devrait m'éviter de chercher les sources, et boucler dessus !!
  */
  const conferencesSourcesGet = async () => {
    requester.setTenant(tenantCurrent.uuid);
    const conferencesSourcesList = await requester.get(
      "dird/0.1/backends/conference/sources?recurse=false"
    );
    setConferencesSources(conferencesSourcesList);
    // sources list
    return conferencesSourcesList;
  };

  const conferencesGet = async (sourceUuid) => {
    requester.setTenant(tenantCurrent.uuid);
    const conferencesList = await requester.get(
      `dird/0.1/backends/conference/sources/${sourceUuid}`
    );
    setConferences(conferencesList);
    // conference for a source
    return conferencesList;
  };

  const conferenceContactGet = async (sourceUuid) => {
    requester.setTenant(tenantCurrent.uuid);
    const contactsList = await requester.get(
      `dird/0.1/backends/conference/sources/${sourceUuid}/contacts`
    );
    setConferences(contactsList);
    // conference for a source
    return contactsList;
  };

  const conferencesContactsListGet = async () => {
    try {
      const sources = await conferencesSourcesGet();
      const conferencesContacts = [];
      for (const source of sources.items) {
        const contact = await conferenceContactGet(source.uuid);
        conferencesContacts.push(...contact.items);
      }
      const contactsObject = {
        total: conferencesContacts.length,
        items: conferencesContacts,
      };
      setConferencesContactsList(contactsObject);
    } catch (error) {
      //
    }
  };

  const conferencesListGet = async () => {
    try {
      const sources = await conferencesSourcesGet();
      const conferencesList = [];

      for (const source of sources.items) {
        const conferences = await conferencesGet(source.uuid);
        conferencesList.push(...conferences.items);
      }
      const conferencesObject = {
        total: conferencesList.length,
        items: conferencesList,
      };

      setConferencesList(conferencesObject);
    } catch (error) {
      console.error("Error fetching external config list:", error);
    }
  };

  const conferenceWazoDefaultBridgeGet = async () => {
    requester.setTenant(tenantCurrent.uuid);
    const defaultBridge = await requester.get(
      `confd/1.1/asterisk/confbridge/wazo_default_bridge`
    );
    setConferenceWazoDefaultBridge(defaultBridge);
    // conf bridge default
    return defaultBridge;
  };

  const conferenceWazoDefaultUserGet = async () => {
    requester.setTenant(tenantCurrent.uuid);
    const defaultUser = await requester.get(
      `confd/1.1/asterisk/confbridge/wazo_default_user`
    );
    setConferenceWazoDefaultUser(defaultUser);
    // conf bridge user
    return defaultUser;
  };

  return {
    conferencesSources,
    conferencesSourcesGet,
    conferences,
    conferencesGet,
    conferencesList,
    conferencesListGet,
    conferencesContactsList,
    conferencesContactsListGet,
    conferenceWazoDefaultBridge,
    conferenceWazoDefaultBridgeGet,
    conferenceWazoDefaultUser,
    conferenceWazoDefaultUserGet
  };
};
