import { Select, useColorModeValue } from '@chakra-ui/react'

import { useApi } from '../../../services/ApiProvider';
import { useEffect } from 'react';

const Tenants = () => {
  const {tenants, tenantCurrent, setTenantCurrent} = useApi();
  const cardContentBg = useColorModeValue(
    "cardContentBg.light",
    "cardContentBg.dark"
  );

  console.log('tenant', tenantCurrent)

  const handleTenantChange = (e) => {
    const tenant = tenants.items.find(item => item.uuid === e.target.value)
    setTenantCurrent(tenant)
  }

  return (
    <Select
      variant="filled"
      bg={cardContentBg}
      sx={{
        "> option": {
          background: cardContentBg,
        },
      }}
      value={tenantCurrent.uuid}
      onChange={(e) => handleTenantChange(e)}
    >
      {tenants.items.map((option) => (
        <option
          key={option.uuid}
          value={option.uuid}
          selected={option.uuid === tenantCurrent.uuid}
        >
          {option.name}
        </option>
      ))}
    </Select>
  )
}

export default Tenants