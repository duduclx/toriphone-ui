import React from 'react'

import { useApi } from '../../../services/ApiProvider'
import { Box, Text } from '@chakra-ui/react';

const ServerInfos = () => {
    const {serverInfos} = useApi();
    return (
      <Box pr={4} textAlign="right">
          <Text>{serverInfos.wazo_version}</Text>
      </Box>
    )
}

export default ServerInfos