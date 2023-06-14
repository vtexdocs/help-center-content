---
title: '¿Qué transportadoras ponen a disposición el rastreo de pedido?'
id: frequentlyAskedQuestions_303
status: PUBLISHED
createdAt: 2019-01-24T20:45:52.473Z
updatedAt: 2023-03-31T01:16:49.121Z
publishedAt: 2023-03-31T01:16:49.121Z
firstPublishedAt: 2019-01-24T22:12:09.421Z
contentType: tutorial
productTeam: Post-purchase
author: authors_2
slug: que-transportadoras-ponen-a-disposicion-el-rastreo-de-pedido
locale: es
legacySlug: cuales-transportistas-ponen-a-disposicion-el-rastreo-de-flete, que-transportadoras-ponen-a-disposicion-el-rastreo-de-pedido
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Después de [informar la factura](/es/tutorial/como-insertar-la-nota-fiscal), también es posible obtener los datos de entrega en el pedido. Estos datos corresponden al nombre de la transportadora, el código de rastreo y la URL de rastreo, y pueden ser ingresados tanto por la interfaz como por la API del módulo de Gestión de pedidos.

## Integración con las transportadoras

Como se detalla en [en este problema conocido](https://help.vtex.com/es/known-issues/la-integracion-de-rastreo-no-esta-realizando-la-actualizacion-automatica), la actualización automática de rastreo por transportadoras integradas **está actualmente deshabilitada** en las tiendas VTEX.

Por lo tanto, las verificaciones automáticas del status de la entrega **no se están realizando** y los correos electrónicos con el status actualizado **no se están enviando** a los clientes, incluso si las tiendas han configurado previamente las transportadoras integradas de forma nativa en VTEX.

Por esta razón, independientemente de la transportadora elegida, recomendamos seguir el paso a paso a continuación para actualizar los datos de rastreo activamente.

## Cómo enviar actualizaciones de entrega

Puede actualizar activamente los datos de rastreo utilizando el endpoint [Update Order Tracking Status](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-/tracking) de Orders API. En este caso, la información se registrará en Gestión de pedidos y se enviará por correo electrónico a los clientes.

Estos datos pueden ser enviados por cualquier sistema externo que siga el status de la entrega del paquete, ya sea un ERP, un middleware o la propia transportadora.

También es posible [incluir variable](https://help.vtex.com/es/tutorial/incluir-variaveis-do-pedido-no-template-de-e-mail-transacional--694Bn8eOeAWYQeaWGaOISe#outras-variaveis-de-e-mails-de-pedido) `trackingURL` en algunos [templates del Centro de Mensajes](https://help.vtex.com/es/tutorial/lista-de-templates-de-e-mail-no-message-center--3g2S2kqBOoSGcCaqMYK2my), como **Order invoiced** y **Order shipped**, y el cliente podrá efectuar el rastreo mediante el enlace.

## Integración con la oficina de Correos

Como se detalla [en este problema conocido](https://help.vtex.com/es/known-issues/actualizacion-automatica-del-rastreo-de-entregas-via-correios--7hKUU5Qp4AyCW2QaMQC0S6), la integración de rastreo nativa con la oficina de correos está actualmente deshabilitada.

Una alternativa es utilizar soluciones desarrolladas por parceros para el seguimiento de las entregas de Correios, como el [rastreo de XP Agência](https://rastreio.xpagencia.com.br/).
