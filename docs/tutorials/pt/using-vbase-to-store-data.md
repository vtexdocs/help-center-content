---
title: 'Guardar dados no VBase'
id: 5xu89l7jxu6W8Q64kS8Cag
status: DRAFT
createdAt: 2018-03-22T20:29:42.112Z
updatedAt: 2020-03-13T21:24:59.842Z
publishedAt: 
firstPublishedAt: 2018-03-23T21:00:44.093Z
contentType: tutorial
productTeam: VTEX IO
author: 1iryp847AQgmKGKIASeW8Y
slug: guardar-dados-no-vbase
legacySlug: guardar-dados-no-vbase
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Caso seu App precise guardar dados para recuperação posterior, a VTEX disponibiliza o VBase, que é uma base de dados chave-valor.

O primeiro passo é definir o seu cliente VBase. Na pasta `/node` crie um código como este:

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
No arquido de tipos, tipicamente `/node/typings.d.ts` declara-se esse tipo:

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
Adicione também uma policy de acesso ao VBase em seu `manifest.json`:

```
{
  "name": "vbase-read-write"
}
```

Agora basta usar o seguinte código para ler e escrever seus dados:

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
