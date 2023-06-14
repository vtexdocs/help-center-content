---
title: 'Using VBase To Store Data'
id: 5xu89l7jxu6W8Q64kS8Cag
status: DRAFT
createdAt: 2018-03-22T20:29:42.112Z
updatedAt: 2020-03-13T21:24:59.842Z
publishedAt: 
firstPublishedAt: 2018-03-23T21:00:44.093Z
contentType: tutorial
productTeam: VTEX IO
author: 1iryp847AQgmKGKIASeW8Y
slug: using-vbase-to-store-data
legacySlug: using-vbase-to-store-data
subcategory: Z46a6rHVAaAucoiW0skQQ
---

If your App needs to store data, the IO environment provides a key-value database called VBase.

In order to use it the first step is to define your VBase client. In the `/node` folder create a code such as this:

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
In the types file, typically `/node/typings.d.ts` you should declare the following type:

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

Add the VBase access policy to your `manifest.json`:

```
{
  "name": "vbase-read-write"
}
```

Now you just use this code to read and write data:

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
const response = await vBase.getFile().catch(notFound())
if (response.data) {
   const result = JSON.parse(response.data.toString())
   console.log(result)
}
```

