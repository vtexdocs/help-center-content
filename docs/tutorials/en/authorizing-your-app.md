---
title: Authorizing your app
id: 6dBA6pSMRa4MqYmIkcQKwY
status: DRAFT
createdAt: 2018-06-19T19:45:53.378Z
updatedAt: 2020-01-14T19:34:52.911Z
publishedAt: 
firstPublishedAt: 2018-06-19T19:47:07.125Z
contentType: tutorial
productTeam: VTEX IO
author: 5dYWGfGKUwkI86Gomk6AcQ
slug: authorizing-your-app
legacySlug: authorizing-your-app
subcategory: Z46a6rHVAaAucoiW0skQQ
---

## Token
### GraphQL
In node/graphql/index.ts there is always a `ctx` object from which you can extract the required __authToken__ to use in your HTTP (we recommend using [Axios](https://github.com/axios/axios)) request header. Example:

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
For every route you declare in your `service.json`, you can import the `ctx` object in `node/index.ts`. Example:

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
### Public routes
Policies must be declared in your app's `manifest.json` using the _policies_ field. For outbound requests, you should __always__ separate the *host* from the *path*. Also, be as specific as possible when defining your *path*.  Example:

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

Some attributes are filled automatically, like `{{account}}` in the example above. They are:
- account
- workspace
- region
- partialId
- appId


There are also some particular resources that require specific policies. These policies are:
- colossus-send-metrics: Register metrics. [Read more](/en/tutorial/app-pricing-options)
- outbound-access: Access outbound host
- update-app-settings: Update [app settings](/en/tutorial/settings-schema)
- vbase-read-only: Read from [VBase](/en/tutorial/using-vbase-to-store-data)
- vbase-read-write: Read and write to [VBase](/en/tutorial/using-vbase-to-store-data)
- read-private-registry-assets: Allows reading assets from the private registry. Resource: `GET: /:account/master/registry/*`

### Private routes
If an app contains a private route (vtex.io) and other service needs to access it, the later must use a policy declared by the first one. The policies should be declared in a root file called `policies.json`. Example:

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

The app which needs to access the resource /graphql should specify the policy on its `manifest.json`:

```json
"policies": [{
	{
		"name": "vtex.app-server:resolve-graphql"
	}]
```

## Headers
### Outbound

For outbound requests, you should always include in your headers your authToken:

```json
{
'Proxy-Authorization': authToken
}
```

You can use additional headers freely, like the `Authorization` header required by many external services.

For requests to `vtexcommercestable` or `vtexcommercebeta` you should __also__ include the `VtexIdclientAutCookie` header. You can extract it from the `ctx` object:

```typescript
const idToken = ctx.cookies.get('VtexIdclientAutCookie')
```

So your headers would be
```json
{
'Proxy-Authorization': authToken
'VtexIdclientAutCookie': idToken
}
```

### HTTPS
For oubound requests to endpoints using HTTPS, you should add the header `X-Vtex-Use-Https` and set it's value to `true`.

#### Example
Suppose you want to call `https://www.google.com/search?q=banana`. If you do that directly you are going to get the following error:

```info: Intercepting https://*/ through HTTP router. Switch to HTTP with an X-Vtex-Use-Https header if possible.```

What you should do is call `http://www.google.com/search?q=banana` with the header:

```json
{
'X-Vtex-Use-Https': true
}
```

__Note__: You will also need the `Proxy-Authorization` header mentioned above.

### Ports
For requests on ports other than `80`, you should use the `X-Vtex-Remote-Port` header.

#### Example

Suppose you want to call `http://www.myhost.com:9090/some_path`.

What you should do is call `http://www.myhost.com/some_path` with the header:

```json
{
'X-Vtex-Remote-Port': 9090
}
```

__Note__: You will also need the `Proxy-Authorization` header mentioned above.

### Inbound
For inbound requests (for apps in IO), you should always include _only_ your `authToken` in the Authorization header:

```json
{
'Authorization': authToken
}
```
