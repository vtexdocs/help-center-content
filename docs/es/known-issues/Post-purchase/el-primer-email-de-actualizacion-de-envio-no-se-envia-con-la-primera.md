---
title: "El primer email de actualización de envío no se envía con la primera actualización"
id: 55EJ7SR18hEeLXOP0TF9j3
status: PUBLISHED
createdAt: 2021-08-25T12:19:02.034Z
updatedAt: 2022-12-22T14:53:07.109Z
publishedAt: 2022-12-22T14:53:07.109Z
firstPublishedAt: 2021-08-25T22:23:26.627Z
contentType: knownIssue
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
tag: Message Center,Order Management
slugEN: el-primer-email-de-actualizacion-de-envio-no-se-envia-con-la-primera
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El primer email de actualización de envío no se envía hasta que la segunda actualización de envío se realiza mediante la API, y solo si esa segunda actualización es diferente de la primera.

## Simulación

1. Cree un pedido y siga el [flujo normal](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) hasta el status **Facturado**
2. Envíe una actualización a través de la [API de actualización de envío](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus)
3. Observe que el primer email de actualización de envío no se envía
4. Envíe otra actualización de envío idéntica a la primera
5. Observe que el primer email de actualización de envío no se envía
6. Cree otro pedido y siga el [flujo normal](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) hasta el status **Facturado**
7. Envíe una actualización a través de la [API de actualización de envío](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus)
8. Observe que el primer email de actualización de envío no se envía
9. Envíe otra actualización de envío que sea diferente de la primera
10. Observe que ahora se envía el primer email de actualización de envío


## Workaround

Para solucionar este problema, asegúrese de que la segunda actualización enviada [API de actualización de envío](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) sea diferente de la primera. De este modo, el email se enviará.

