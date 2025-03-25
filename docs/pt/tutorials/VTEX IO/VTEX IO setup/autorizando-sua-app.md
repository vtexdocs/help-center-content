---
title: 'Autorizar sua app'
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
locale: pt
legacySlug: autorizando-sua-app
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

## Token
### GraphQL
No node/graphql/index.ts existe sempre um objeto `ctx` a partir do qual você pode extrair o __authToken__ necessário para colocar no header do seu request http (nós recomendamos o uso do [Axios](https://github.com/axios/axios)). Exemplo:

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
Para cada rota que você declara no seu `service.json`, você pode importar o objeto `ctx` no `node/index.ts`. Exemplo:

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

## Policies
### Rotas públicas
Policies devem ser declaradas no `manifest.json` da app no campo _policies_. Para chamadas externas (outbound requests), você deve __sempre__ separar o *host* do *path*. Além disso, seja o mais específico possível quando definir o *path*.  Exemplo:

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

Alguns atributos são preenchidos automaticamente, como `{{account}}` no exemplo acima. Eles são:
- account
- workspace
- region
- partialId
- appId


Há também alguns recursos que requerem policies específicas. São elas:
- colossus-send-metrics: Registrar métricas. [Read more](http://help.vtex.com/en/tutorial/app-pricing-options)
- outbound-access: Acessar um host externo
- update-app-settings: Atualizar [configurações de apps](http://help.vtex.com/pt/tutorial/configuracoes-de-apps)
- vbase-read-only: Ler do [VBase](http://help.vtex.com/en/tutorial/using-vbase-to-store-data)
- vbase-read-write: Ler e escrever no [VBase](http://help.vtex.com/en/tutorial/using-vbase-to-store-data)
- read-private-registry-assets: Permite ler assets do registro privado. Recurso: `GET: /:account/master/registry/*`

### Rotas Privadas
Se uma app possui uma rota privada (vtex.io) e outro serviço precisa acessá-lo, este precisa utilizar uma policy declarada pela app. As policies devem ser declaradas num arquivo na raiz chamado `policies.json`. Exemplo:

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

A app que precisa acessar o recurso /graphql precisa especificar a policy no seu `manifest.json`:

```json
"policies": [{
	{
		"name": "vtex.app-server:resolve-graphql"
	}]
```

## Headers
### Chamadas Externas (Outbound)

Para chamadas externas, você deve sempre incluir nos seus headers o seu authToken:

```json
{
'Proxy-Authorization': authToken
}
```

Você pode utilizar livremente headers adicionais, como o header `Authorization`, necessário para vários serviços externos.

Para chamadas para `vtexcommercestable` ou `vtexcommercebeta` você deve __além disso__ incluir o header `VtexIdclientAutCookie`. Você pode pegá-lo a partir do objeto `ctx`:

```json
const idToken = ctx.cookies.get('VtexIdclientAutCookie')
```

De modo que seus headers ficam:
```json
{
'Proxy-Authorization': authToken
'VtexIdclientAutCookie': idToken
}
```

### HTTPS
Para chamadas externas para endpoints que usam HTTPS, você deve usar o header `X-Vtex-Use-Https` passando o valor `true`.

#### Exemplo
Suponha que você queira chamar `https://www.google.com/search?q=banana`. Se você simplesmente chamá-lo diretamente, você vai receber o seguinte erro:

```info: Intercepting https://*/ through HTTP router. Switch to HTTP with an X-Vtex-Use-Https header if possible.```

O que você deve fazer é chamar `http://www.google.com/search?q=banana` com o header:

```json
{
'X-Vtex-Use-Https': true
}
```

__Observação__: Você vai precisar também do header `Proxy-Authorization` mencionado acima.

### Portas
Para chamadas para portas diferentes de `80`, você deve usar o header `X-Vtex-Remote-Port`.

#### Exemplo

Suponha que você queira chamar `http://www.myhost.com:9090/some_path`.

O que você deve fazer é chamar `http://www.myhost.com/some_path` com o header:

```json
{
'X-Vtex-Remote-Port': 9090
}
```

__Observação__: Você vai precisar também do header `Proxy-Authorization` mencionado acima.

### Chamadas Internas
Para chamadas internas (para apps do IO), você deve __sempre__ incluir _somente_ o header Authorization contendo seu `authToken`:

```json
{
'Authorization': authToken
}
```
