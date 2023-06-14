---
title: Configuración de Apps
id: 3CadrdhjCwc0Y8Ywua42qW
status: DRAFT
createdAt: 2018-06-12T23:47:59.815Z
updatedAt: 2020-03-06T13:58:47.397Z
publishedAt: 
firstPublishedAt: 2018-06-12T23:52:22.765Z
contentType: tutorial
productTeam: Others
author: 5dYWGfGKUwkI86Gomk6AcQ
slug: configuracion-de-apps
legacySlug: configuracion-de-apps
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Para que su app tenga una parte de configuración, usted necesita configurar dos campos en su `manifest.json`:
- `settingsSchema`: Especifica los campos de configuración y sus tipos, respetando la sintaxis JSON-schema; usted puede leer más sobre JSON-schema [aquí](http://json-schema.org/latest/json-schema-validation.html).
- `settingsUiSchema`: Especifica cómo será la visualización de esta configuración. Usted puede definir diferentes opciones de visualización,   Você pode setar diferentes opções de exibição, como ocultar los caracteres de contraseña o ordenar los campos que se van a rellenar. El formulario se genera utilizando el paquete react-jsonschema-form. Usted encuentra más sobre su uso [aquí](https://github.com/mozilla-services/react-jsonschema-form).

La página de configuración estará disponible en el menú lateral "Apps" después de usted _linkar_ o _instalar_ su aplicación.

Aquí hay un ejemplo de cómo configurar su `settingsSchema`:
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

Para recuperar estos datos en el backend, usted debe utilizar un resolver GraphQl:

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
Para recuperar estos datos en su frontend, usted necesita crear una consulta e importarla donde sea necesario:

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

Usted puede acceder a la página de configuración en `/admin/apps/{appVendor}.{appName}@0.0.1/setup` después de _linkar_ o _instalar_ su app.
