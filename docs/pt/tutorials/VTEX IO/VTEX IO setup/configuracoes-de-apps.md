---
title: 'Configurações de Apps'
id: 3CadrdhjCwc0Y8Ywua42qW
status: ARCHIVED
createdAt: 2018-06-12T23:47:59.815Z
updatedAt: 2020-03-06T13:58:47.397Z
publishedAt: 
firstPublishedAt: 2018-06-12T23:52:22.765Z
contentType: tutorial
productTeam: Others
author: 5dYWGfGKUwkI86Gomk6AcQ
slugEN: settings-schema
locale: pt
legacySlug: configuracoes-de-apps
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Para que sua app tenha uma seção de configuração, você precisa setar dois campos no seu `manifest.json`:
- `settingsSchema`: Especifica os campos de configuração e seus tipos, respeitando a sintaxe JSON-schema; você pode ler mais sobre JSON-schema [aqui](http://json-schema.org/latest/json-schema-validation.html).
- `settingsUiSchema`: Especifica como será a exibição dessa configuração. Você pode setar diferentes opções de exibição, como esconder os caracteres de senha ou ordenar os campos a serem preenchidos. Por baixo dos panos, o formulário é gerado usando o pacote react-jsonschema-form. Você encontra mais sobre seu uso [aqui](https://github.com/mozilla-services/react-jsonschema-form).

A página de configuração ficará disponível no menu lateral "Apps" depois que você _linkar_ ou _instalar_ sua app.

Aqui está um exemplo de como setar seu `settingsSchema`:
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

Para recuperar esses dados no backend, você precisa usar um resolver GraphQl:

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
Para recuperar esses dados no seu frontend, você precisa criar uma Query e importá-la onde necessário:

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

Você pode acessar a página de configuração em `/admin/apps/{appVendor}.{appName}@0.0.1/setup` após _linkar_ or _instalar_ sua app.
