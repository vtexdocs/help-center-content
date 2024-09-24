---
title: 'Autorizar su app'
id: 6dBA6pSMRa4MqYmIkcQKwY
status: ARCHIVED
createdAt: 2018-06-19T19:45:53.378Z
updatedAt: 2020-01-14T19:34:52.911Z
publishedAt: 
firstPublishedAt: 2018-06-19T19:47:07.125Z
contentType: tutorial
productTeam: VTEX IO
author: 5dYWGfGKUwkI86Gomk6AcQ
slugEN: authorizing-your-app
locale: es
legacySlug: autorizar-su-app
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

## Token
### GraphQL
En node/graphql/index.ts siempre hay un objeto `ctx` de que se puede extraer el __authToken__ necesario para colocar en el header de su request HTTP (recomendamos el uso de [Axios](https://github.com/axios/axios)). Ejemplo:

```json
//node/graphql/index.ts

export const resolvers = {
 Mutation: {
 enable: async (_root, _args, ctx) => {
     const {vtex: ioContext} = ctx
     const {account, authToken} = ioContext
     await enableExtension(account, authToken)
    return ‘Enabled’
   },
 }
}
```

### Node
Para cada ruta que declara en su `service.json`, usted puede importar el objeto `ctx` en `node/index.ts`. Ejemplo:

```json
//node/index.ts

export default {
  routes: {
    pingApp: async (ctx) => {
      const { request: req, response: res, vtex: ioContext } = ctx
      const { account, workspace, authToken } = ioContext
      
      try {
        const { url } = req
        setDefaultHeaders(res)
        res.status = 200
        res.body = {url, account, workspace, authToken}
      } catch (err) {
        res.body = err
        res.status = 500
      }
    },
  }
}
```

## Políticas
### Rutas públicas
Las políticas se deben declarar en el `manifest.json` de la aplicación en el campo _policies_. Para llamadas externas (outbound requests), usted debe __siempre__ separar el *host* del *path*. Además, sea lo más específico posible al definir el *path*. Ejemplo:

```json
"policies": [{
  "name": "vbase-read-write"
  },
  {
  "name": "outbound-access",
  "attrs": {
    "host": "cdn.contentful.com",
    "path": "*"
    }
  },
  {
  "name": "outbound-access",
  "attrs": {
    "host": "{{account}}.vtexcommercestable.com.br",
    "path": "/api/license-manager/*"
    }
  }
]
```

Algunos atributos se rellenan automáticamente, como `{{account}}` en el ejemplo anterior. Ellos son:
- account
- workspace
- region
- partialId
- appId


Hay también algunos recursos que requieren políticas específicas. Son ellas:
- colossus-send-metrics: Registrar métricas.
- outbound-access: Acceder a un host externo
- update-app-settings: Actualizar configuración de aplicaciones.
- vbase-read-only: Leer del [VBase](/es/tutorial/guardar-datos-en-vbase)
- vbase-read-write: Leer y escribir en [VBase](/es/tutorial/guardar-datos-en-vbase)
- read-private-registry-assets: Permite leer assets del registro privado. Recurso: `GET: /:account/master/registry/*`

### Rutas privadas
Si una aplicación tiene una ruta privada (vtex.io) y otro servicio necesita acceder a ella, éste debe utilizar una política declarada por la aplicación. Las directivas deben ser declaradas en un archivo en la raíz llamado `policies.json`. Ejemplo:

app-server:

```json
// ./policies.json
[
 {
   "name": "resolve-graphql",
   "description": "Allows access to resolve a graphql request",
   "statements": [
     {
       "actions": ["post"],
       "effect": "allow",
       "resource":
         "vrn:vtex.app-server:{{region}}:{{account}}:{{workspace}}:/graphql"
     }
   ]
 }
]
```

La aplicación que necesita acceder al recurso /graphql necesita especificar la política en su `manifest.json`:

```json
"policies": [{
	{
		"name": "vtex.app-server:resolve-graphql"
	}]
```

## Headers
### Llamadas Externas (Outbound)

Para llamadas externas, usted siempre debe incluir en sus headers su authToken:

```json
{
'Proxy-Authorization': authToken
}
```

Usted puede utilizar libremente headers adicionales, como el header `Authorization`, necesario para varios servicios externos.

Para las llamadas a `vtexcommercestable` o` vtexcommercebeta` usted debe __ademas de eso__ incluir el header `VtexIdclientAutCookie`. Usted puede recogerlo desde el objeto `ctx`:

```json
const idToken = ctx.cookies.get('VtexIdclientAutCookie')
```

De modo que sus headers quedan así:
```json
{
'Proxy-Authorization': authToken
'VtexIdclientAutCookie': idToken
}
```

### HTTPS
Para llamadas externas a endpoints que usan HTTPS, usted debe agregar el header `X-Vtex-Use-Https` y estabelecer su valor en `true`.

#### Ejemplo
Suponga que desea llamar a `https://www.google.com/search?q=banana`. Si simplemente lo llama directamente, recibirá el siguiente error:

```info: Intercepting https://*/ through HTTP router. Switch to HTTP with an X-Vtex-Use-Https header if possible.```

Lo que debe hacer es llamar a `http://www.google.com/search?q=banana` con el header:

```json
{
'X-Vtex-Use-Https': true
}
```

__Observación__: Usted necesitará el header `Proxy-Authorization` mencionado anteriormente.

### Puertas
Para llamadas a puertas diferentes de `80`, usted debe usar el header `X-Vtex-Remote-Port`.

#### Ejemplo

Suponga que desea llamar a `http://www.myhost.com:9090/some_path`.

Lo que usted debe hacer es llamar a `http://www.myhost.com/some_path` con el header:

```json
{
'X-Vtex-Remote-Port': 9090
}
```

__Observación__: Usted necesitará el header `Proxy-Authorization` mencionado anteriormente.

### Llamadas internas
Para las llamadas internas (para las aplicaciones del IO), usted debe __siempre__ incluir _somente_ el header de autorización que contiene su `authToken`:

```json
{
'Authorization': authToken
}
```
