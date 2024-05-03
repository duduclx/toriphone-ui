import React, { useEffect } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
    Flex,
    Td,
  } from "@chakra-ui/react";

import { useApi } from '../../../../services/ApiProvider';

import ProfilesTableContent from './ProfilesTableContent';

const ProfilesTable = () => {
    const { tenantCurrent, dirdProfiles, dirdProfilesGet } = useApi()
    console.log('sources', dirdProfiles)

    useEffect(() => {
      if (tenantCurrent) {
        dirdProfilesGet();
      }
    }, [tenantCurrent]);
  
    return (
      <>
      {dirdProfiles?.items && (
      <Flex
        flexDirection="column"
        justifyContent="center"
        flex={1}
        alignItems="center"
        mt={8}
      >
        <TableContainer
          width="100%"
          height="calc(100vh - 240px)"
          overflowY="auto"
        >
          <Table variant="simple">
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>label</Th>
                <Th>name</Th>
                <Th>type</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dirdProfiles.items.length == 0 ? (
                <Tr>
                  <Td colSpan="5" textAlign="center">Aucun résultat</Td>
                </Tr>
              ) : (
                dirdProfiles.items.map((profile, index) => (
                  <ProfilesTableContent profile={profile} key={index} />
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      )}
      </>
    )
}

export default ProfilesTable