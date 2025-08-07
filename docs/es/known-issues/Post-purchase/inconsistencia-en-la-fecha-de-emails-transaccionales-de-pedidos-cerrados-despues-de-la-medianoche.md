---
title: "Inconsistencia en la fecha de e-mails transaccionales de pedidos cerrados después de la medianoche"
id: 3D3FSEGDPykoUosW4wcwQS
status: PUBLISHED
createdAt: 2018-04-24T20:17:05.814Z
updatedAt: 2022-12-22T14:43:40.128Z
publishedAt: 2022-12-22T14:43:40.128Z
firstPublishedAt: 2018-04-24T20:28:37.511Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Checkout,Message Center,Order Management
slugEN: inconsistencia-en-la-fecha-de-emails-transaccionales-de-pedidos-cerrados-despues-de-la-medianoche
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Los pedidos que se realizan después de la medianoche del horario UTC pueden presentar un día más en los e-mails transaccionales de __Pedido Realizado__ y __Pagamento Aprobado__.

Este escenario se produce por cuenta de la hora UTC que puede variar según el huso horario.

## Simulación

- Cierre un pedido el día 23/04/2018 a las 23:56, hora de Brasil.
- Vea que el e-mail transaccional de pedido realizado tendrá la fecha 24/04/2018. Su prueba estará con un día más de la fecha real.
- En el e-mail de pago aprobado, que tiene la fecha de entrega, también va a constar un día más.
- En la API, realizando el `Get Order`, la información también estará con la fecha y hora UTC, por ejemplo: `"creationDate": "2018-04-13T02:57:19.2571842+00:00"`

## Workaround

Hoy en día no hay un workaround para este problema, pero estamos trabajando para ajustar el escenario.


