import React, { useEffect } from 'react'

import { useApi } from '../../../../services/ApiProvider'

const LdapContent = () => {
    const { tenantCurrent, ldap, ldapGet } = useApi()

    useEffect(() => {
        if (tenantCurrent) {
            ldapGet();
        }
      }, [tenantCurrent]);

  return (
    <div>
        <p>{ldap.host}</p>
        <p>{ldap.port}</p>
        <p>{ldap.protocol_security}</p>
        <p>{ldap.protocol_version}</p>
        <p>{ldap.bind_dn}</p>
        <p>{ldap.user_base_dn}</p>
        <p>{ldap.user_email_attribute}</p>
        <p>{ldap.user_login_attribute}</p>
    </div>
  )
}

export default LdapContent