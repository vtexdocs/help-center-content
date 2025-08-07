---
title: "Falta de información de pago para integrar pedidos (cuando se produce retentación con el conector)"
id: 5WMBV2GRuo2mqmyCkKmwsG
status: PUBLISHED
createdAt: 2018-03-19T13:30:56.334Z
updatedAt: 2022-12-22T15:07:53.227Z
publishedAt: 2022-12-22T15:07:53.227Z
firstPublishedAt: 2018-03-19T13:43:48.205Z
contentType: knownIssue
productTeam: Shopping
author: authors_41
tag: Checkout,Payments
slugEN: falta-de-informacion-de-pago-para-integrar-pedidos
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En los casos en que el pago no es directamente aprobado en el cierre de la compra, pero sólo después de algunas retentaciones del conector, los datos del conector guardados en el lado del Checkout no quedan completos, imposibilitando así algunas integraciones.

Este dato sólo se actualiza en el Checkout al llamar al método completeOrder (que no necesariamente ocurre cuando el pago está aprobado) y en la captura.

## Simulación

El ERP rechaza la falta de información. Ejemplo: acquirer, authorizationcode
Abra el pedido rechazado en el Pagos.
Vea que ocurrieron retentaciones en la aprobación en los logs de la línea del tiempo del Pagos.

## Workaround

Realizar esta consulta: https://documenter.getpostman.com/view/322855/pci/Hs3y#d7bc5f1e-a39b-834c-04dc-824a778edb42
GET Payment Details
https://{{accountName}}.vtexpayments.com.br/api/pvt/transactions/{{transactionId}}/payments/{{paymentId}}

