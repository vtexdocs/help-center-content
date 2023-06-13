---
title: Misconfigured VTable app breaks other apps of the same type
id: cxsyuFBHRmG2mweiiC66Y
status: PUBLISHED
createdAt: 2019-01-03T21:10:51.083Z
updatedAt: 2022-12-22T20:45:09.551Z
publishedAt: 2022-12-22T20:45:09.551Z
firstPublishedAt: 2019-01-04T15:33:52.071Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: misconfigured-vtable-app-breaks-other-apps-of-the-same-type
kiStatus: Backlog
internalReference: 
---

## Summary

A broken app (in red) prevents other apps from working properly.

Main causes of a badly configured app:
1. Non-existent JSON Schema (field "Model" in the app's JSON);
2. Apps with the same name;
3. Discrepancy between the entity's JSON Schema and the fields in the app's JSON.

## Simulation

In the case of a non-existent JSON Schema, insert the correct JSON Schema's name in the `model` field.

For example: ![Screen Shot 2019-01-03 at 19.31.53](//images.ctfassets.net/alneenqid6w5/EVwmyhWMmGmcs2Y8wEQiw/ddbf9f821818f2c061a5f262ee43e675/Screen_Shot_2019-01-03_at_19.31.53.png)

Notice how the app's border turns red and the error message on the console indicates "Error to get jsonschema by name": ![Screen Shot 2019-01-03 at 19.24.22](//images.ctfassets.net/alneenqid6w5/62I23QUXPauQGGcUcoCucK/b484536ae3e462823b7715ff52a737ea/Screen_Shot_2019-01-03_at_19.24.22.png)

## Workaround

The broken app will be in red. To solve it, just delete this app.

