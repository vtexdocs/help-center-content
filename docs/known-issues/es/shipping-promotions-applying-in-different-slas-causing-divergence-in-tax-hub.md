---
title: 'Las promociones de envío que se aplican en distintos SLA provocan divergencias en el Tax Hub'
id: 3uI0b4FmXUh4uue5kFyFNy
status: PUBLISHED
createdAt: 2023-10-09T13:42:08.767Z
updatedAt: 2023-10-23T11:59:12.329Z
publishedAt: 2023-10-23T11:59:12.329Z
firstPublishedAt: 2023-10-09T13:42:09.636Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: las-promociones-de-envio-que-se-aplican-en-distintos-sla-provocan-divergencias-en-el-tax-hub
locale: es
kiStatus: Fixed
internalReference: 916423
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando las promociones de envío aplican para diferentes SLAs, siendo uno de ellos el envío gratuito, causa divergencia en la solicitud enviada por el Tax Hub, impidiendo que el pedido sea realizado.


##

## Simulación



- Crear una promoción de envío gratuito para un SLA específico;
- Crear cualquier otra promoción de envío para otro ANS;
- Intentar realizar un pedido, aparece el mensaje "No se ha podido crear el pedido solicitado. Por favor, inténtelo de nuevo".


##

## Workaround


N/A



