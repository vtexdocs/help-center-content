---
title: 'Telesales app not working properly with RequiresAuthenticationToLoadProfile'
id: 4L79woOuaUM2Ip5vG1Kp7D
status: PUBLISHED
createdAt: 2023-04-26T17:20:58.399Z
updatedAt: 2023-05-08T18:18:42.798Z
publishedAt: 2023-05-08T18:18:42.798Z
firstPublishedAt: 2023-04-26T17:20:59.230Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: telesales-app-not-working-properly-with-requiresauthenticationtoloadprofile
kiStatus: Backlog
internalReference: 797651
---

## Summary


When using the flag RequiresAuthenticationToLoadProfile from checkout APIs with a telesales app to impersonate users, it's not being triggered any kind of feedback to the user if the impersonation was made with success and causes some inconsistencies in the flow


##

## Simulation



For the simulation, you must have RequiresAuthenticationToLoadProfile turned on, which means that you must use an authorized token to access some APIs

You must also implement telesales functionallity: https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R

https://developers.vtex.com/docs/guides/vtex-telemarketing

After that, try to impersonate a user with a call center operator, you will see some inconsistencies in the platform


##

## Workaround



For some parts of the flow, a refresh might solve the issue, other functionalities are not prepared to work with RequiresAuthenticationToLoadProfile, so, if a refresh doesn't solve the problem, then, the only possible solution is to turn off the flag




