import React, { useState, useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";

import { useApi } from "../../../../services/ApiProvider";

import UserCreateStepOne from "./UserCreateStepOne";
import UserCreateStepTwo from "./UserCreateStepTwo";
import UserCreateStepThree from "./UserCreateStepThree";

const UserCreateSteps = ({ steps, activeStep }) => {
  const { tenantUsersGroups, sipTemplates, extensions, contexts, userCreate } =
    useApi();
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [line, setLine] = useState(
    {
        "caller_id_name": "string",
        "caller_id_num": "string",
        "context": "string",
        "id": 0,
        "position": 0,
        "provisioning_code": "string",
        "registrar": "string",
        "extensions": [
          {
            "context": "string",
            "exten": "string",
            "id": 0
          }
        ],
        "endpoint_sip": {
          "aor_section_options": [
            [
              "option",
              "value"
            ]
          ],
          "asterisk_id": "string",
          "auth_section_options": [
            [
              "option",
              "value"
            ]
          ],
          "endpoint_section_options": [
            [
              "option",
              "value"
            ]
          ],
          "identify_section_options": [
            [
              "option",
              "value"
            ]
          ],
          "label": "string",
          "name": "string",
          "outbound_auth_section_options": [
            [
              "option",
              "value"
            ]
          ],
          "registration_outbound_auth_section_options": [
            [
              "option",
              "value"
            ]
          ],
          "registration_section_options": [
            [
              "option",
              "value"
            ]
          ],
          "templates": [
            {
              "label": "string",
              "uuid": "string"
            }
          ],
          "tenant_uuid": "string",
          "transport": {
            "uuid": "string"
          },
          "uuid": "string"
        },
        "endpoint_sccp": {
          "id": 0,
          "trunk": {
            "id": 0,
            "tenant_uuid": "string"
          },
          "line": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "options": [
            [
              "option",
              "value"
            ]
          ],
          "tenant_uuid": "string"
        },
        "endpoint_custom": {
          "id": 0,
          "interface": "string",
          "trunk": {
            "id": 0,
            "tenant_uuid": "string"
          },
          "line": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "enabled": true,
          "tenant_uuid": "string"
        }
      }
  )
  // si pas de context (master), contexts = undefined
  const initialContextName =
    contexts && contexts.items.length > 0 ? contexts.items[0].name : "";
  //const [selectedContext, setSelectedContext] = useState(contexts.items[0].name);
  const [selectedContext, setSelectedContext] = useState(initialContextName);

  const [availableExtensions, setAvailableExtensions] = useState([]);

  // obtenir une lite d'extensions attribuables
  useEffect(() => {
    if (selectedContext) {
      let allExtens = [];
      console.log('sected cont', selectedContext)

      contexts.items.forEach((item) => {
        if (item.name === selectedContext) {
          item.user_ranges.forEach((range) => {
            const start = parseInt(range.start);
            const end = parseInt(range.end);
            for (let exten = start; exten <= end; exten++) {
              allExtens.push(String(exten));
            }
          });
        }
      });

      extensions.items.forEach((item) => {
        if (item.context === selectedContext) {
          allExtens = allExtens.filter((exten) => exten !== item.exten);
        }
      });
      setAvailableExtensions(allExtens);
    }
  }, [selectedContext, contexts, extensions]);

  // wazo comm for bill const subscriptionTypes = ['Voice', 'Unified Communication', 'Collaboration', 'Customer Relationship']
  const protocoles = ["SIP", "SCCP", "CUSTOM"];

  return (
    <Flex flex="1" flexDirection="column" p="12">
      {steps[activeStep] && (
        <>
          {/* Contenu spécifique à chaque étape */}
          {activeStep === 0 && (
            <UserCreateStepOne newUser={newUser} setNewUser={setNewUser} />
          )}
          {activeStep === 1 && (
            <UserCreateStepTwo
              contexts={contexts}
              setSelectedContext={setSelectedContext}
              availableExtensions={availableExtensions}
              protocoles={protocoles}
              templates={sipTemplates}
            />
          )}
          {activeStep === 2 && <UserCreateStepThree />}
        </>
      )}
    </Flex>
  );
};

export default UserCreateSteps;
