---
title: App settings schema
id: 3CadrdhjCwc0Y8Ywua42qW
status: DRAFT
createdAt: 2018-06-12T23:47:59.815Z
updatedAt: 2020-03-06T13:58:47.397Z
publishedAt: 
firstPublishedAt: 2018-06-12T23:52:22.765Z
contentType: tutorial
productTeam: Others
author: 5dYWGfGKUwkI86Gomk6AcQ
slug: settings-schema
legacySlug: settings-schema
subcategory: Z46a6rHVAaAucoiW0skQQ
---

If you want your app to have a settings page, you need to set two fields in your `manifest.json`:
- `settingsSchema`: Specifies the settings fields and its types, as per the JSON-schema syntax; you can read more about JSON-schema [here](http://json-schema.org/latest/json-schema-validation.html).
- `settingsUiSchema`: Specifies how this settings are going to be displayed. You can set specific display options, like hiding the password and ordering the input fields. Under the hood, the form is generated using the react-jsonschema-form package. You can read more about its usage [here](https://github.com/mozilla-services/react-jsonschema-form).

The settings page will be availble in the "Apps" admin sidebar menu after it is either _linked_ or _installed_.

This is an example of how to setup your `settingsSchema`:
```
"settingsSchema": {
  "title": "VTEX Pay",
  "description": "VTEX Pay payment method.",
  "type": "object",
  "properties": {
    "merchantSetup": {
      "title": "Merchant contract information",
      "type": "object",
      "properties": {
        "username": {
          "title": "Full Name",
          "type": "string"
        },
        "email": {
          "title": "E-mail",
          "type": "string"
        },
        "password": {
          "title": "Password",
          "type": "string"
        }
      }
      "required": [
          "email",
          "password"
        ]
    }
  }
  "required": [
    "merchantSetup"
  ]
}
```

```
"settingsUiSchema": {
  "ui:order": [
    "merchantSetup"
  ],
  "merchantSetup": {
    "ui:order": [
      "username",
      "email",
      "password"
    ],
    "password": {
      "ui:widget": "password"
    },
    "email": {
      "ui:widget": "email"
    }
  }
}
```

To retrieve this settings in your backend, you need to create a GraphQl resolver:

```
//node/graphql/index.ts

import { Apps } from '@vtex/api'

export const resolvers = {
  Query: {
    getConfig: async (_, __, ctx) => {
      const apps = new Apps(ctx.vtex)
      const app = process.env.VTEX_APP_ID
      const settings = await apps.getAppSettings(app)
      return settings
    },
  },
}

//graphql/schema.graphql

type Query {
  getConfig: GetConfigResponse @cacheControl(scope: PRIVATE)
}

//graphql/configresponse.graphql

type GetConfigResponse {
    adminSetup: AdminSetupResponse
}
 type AdminSetupResponse {
    savedConfig1: String
    savedConfig2: Int
}

//node/package.json

"dependencies": {
    "@vtex/api": "^0.47.0"
}
````
To retrieve this settings in your frontend, you need to create a Query and import it where needed:

```
//react/graphql/getConfig.graphql

query getConfig {
  getConfig {
    adminSetup {
      savedConfig1
      savedConfig2
    }
  }
}

//react/index.js
import { graphql, compose } from 'react-apollo'
import getConfig from './graphql/getConfig.graphql'

class Hello extends Component {
  static propTypes = {
    getConfig: PropTypes.object,
  }
...

  render() {
    if (this.props.getConfig.loading) {
      return null
    }
    const { getConfig: { getConfig: { adminSetup } } } = this.props
    const { savedConfig1, savedConfig1 } = adminSetup
    ...
  }
}
    
export default graphql(getConfig)(Hello)
```

You can access the settings page in `/admin/apps/{appVendor}.{appName}@0.0.1/setup` while _linked_ or after _installing_ your app.
