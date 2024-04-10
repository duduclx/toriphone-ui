POST confd/1.1/users 

body (-d)
{
  "incalls": [
    {
      "caller_id_mode": "prepend",
      "caller_id_name": "string",
      "extensions": [
        {
          "context": "string",
          "exten": "string"
        }
      ],
      "greeting_sound": "string",
      "preprocess_subroutine": "string"
    }
  ],
  "agent": {
    "agent": {
      "firstname": "string",
      "lastname": "string",
      "number": "string"
    }
  },
  "auth": {
    "email_address": "string",
    "enabled": true,
    "firstname": "string",
    "lastname": "string",
    "password": "string",
    "purpose": "user",
    "username": "string"
  },
  "call_permission_password": "string",
  "call_record_enabled": false,
  "call_record_incoming_external_enabled": false,
  "call_record_incoming_internal_enabled": false,
  "call_record_outgoing_external_enabled": false,
  "call_record_outgoing_internal_enabled": false,
  "call_transfer_enabled": false,
  "caller_id": "string",
  "description": "string",
  "dtmf_hangup_enabled": false,
  "email": "string",
  "enabled": true,
  "fallbacks": {
    "busy_destination": {
      "group_id": 2,
      "type": "group"
    },
    "congestion_destination": {
      "ivr_id": 3,
      "type": "ivr"
    },
    "fail_destination": {
      "type": "voicemail",
      "voicemail_id": 4
    },
    "noanswer_destination": {
      "type": "user",
      "user_id": 1
    }
  },
  "firstname": "string",
  "forwards": {
    "busy": {
      "destination": "string",
      "enabled": true
    },
    "noanswer": {
      "destination": "string",
      "enabled": true
    },
    "unconditional": {
      "destination": "string",
      "enabled": true
    }
  },
  "groups": [
    {
      "id": 0,
      "uuid": "string"
    }
  ],
  "language": "de_DE",
  "lastname": "string",
  "lines": [
    {
      "device_id": "string"
    }
  ],
  "mobile_phone_number": "string",
  "music_on_hold": "string",
  "online_call_record_enabled": false,
  "outgoing_caller_id": "default",
  "password": "string",
  "preprocess_subroutine": "string",
  "ring_seconds": 30,
  "simultaneous_calls": 5,
  "supervision_enabled": true,
  "switchboards": [
    {
      "uuid": "string"
    }
  ],
  "timezone": "string",
  "userfield": "string",
  "username": "string",
  "voicemail": "string"
}


lines

POSt confd/1.1/lines

{
  "caller_id_name": "string",
  "caller_id_num": "string",
  "context": "string",
  "position": 0,
  "provisioning_code": "string",
  "registrar": "string",
  "extensions": [
    {
      "context": "string",
      "exten": "string"
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
        "uuid": "string"
      }
    ],
    "transport": {
      "uuid": "string"
    }
  },
  "endpoint_sccp": "string",
  "endpoint_custom": "string"
}