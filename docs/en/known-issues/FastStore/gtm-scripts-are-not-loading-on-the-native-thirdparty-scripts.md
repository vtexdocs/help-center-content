---
title: 'GTM scripts are not loading on the native third-party scripts'
id: 4hTYThw8092OCHhUIvpCAa
status: PUBLISHED
createdAt: 2024-08-23T12:16:07.174Z
updatedAt: 2024-08-23T13:50:26.219Z
publishedAt: 2024-08-23T13:50:26.219Z
firstPublishedAt: 2024-08-23T12:16:08.213Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: gtm-scripts-are-not-loading-on-the-native-thirdparty-scripts
locale: en
kiStatus: Backlog
internalReference: 1086165
---

## Summary


Stores that are using Faststore v2 (repositories starting from `starter.store` and using the app `admin-faststore`) are not loading the GTM script when using the native third-party scripts. This is related to the Partytown.


##

## Simulation


If your store is using the Faststore V2, try to add the GTM script by following [this documentation](https://developers.vtex.com/docs/guides/faststore/project-structure-handling-third-party-scripts). The events will not be correctly sent.


##

## Workaround


The client can load the script using a custom component instead of the native one without Partytown. It would be an override of our native component.





