---
title: 'Guardar datos en VBase'
id: 5xu89l7jxu6W8Q64kS8Cag
status: DRAFT
createdAt: 2018-03-22T20:29:42.112Z
updatedAt: 2020-03-13T21:24:59.842Z
publishedAt: 
firstPublishedAt: 2018-03-23T21:00:44.093Z
contentType: tutorial
productTeam: VTEX IO
author: 1iryp847AQgmKGKIASeW8Y
slug: guardar-datos-en-vbase
legacySlug: guardar-datos-en-vbase
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Si su App necesita guardar datos para recuperación posterior, VTEX ofrece el VBase, que es una base de datos clave-valor.

El primer paso es establecer su cliente VBase. En la carpeta `/node`, cree un código como este:

```
import { VBase } from '@vtex/api'
    
const service: string = process.env.VTEX_APP_NAME
    
export default function VBaseClient(ioContext: ReqContext) {
    
  const client = new VBase(ioContext)
  const fileName = `myData.txt`
    
  return {
    saveFile: (data) => {
        var Readable = require('stream').Readable;
        var s = new Readable()
        s._read = () => undefined
        s.push(JSON.stringify(data))
        s.push(null)
    
        return client.saveFile(service, fileName, s, false)
    },
    getFile: () => {
        return client.getFile(service, fileName)
    },
  }
}
```

En el archivo de tipos, típicamente `/node/typings.d.ts` se declara este tipo:

```
interface ReqContext {
    account: string,
    workspace: string,
    authToken: string,
    region: string,
    production: boolean,
    userAgent: string
}
```

Añada también una política de acceso al VBase en su `manifest.json`:

```
{
  "name": "vbase-read-write"
}
```

Ahora basta con usar el siguiente código para leer y escribir sus datos:

```
import VBaseClient from '../vbase'

...

// vbase initialization
const vbase = VBaseClient(ioContext)

// error handler
const notFound = (fallback = {}) => (error) => {
  if (error.response && error.response.status === 404) {
    return fallback
  }
  throw error
}

// write on vbase
await vbase.saveFile({
    myKey: "myValue"
})

// read from vbase
const response = await vbase.getFile().catch(notFound())
if (response.data) {
   const result = JSON.parse(response.data.toString())
   console.log(result)
}
```
