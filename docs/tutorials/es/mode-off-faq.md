---
title: 'Mode-Off: FAQ'
id: 6hbd7PuvoxuRbPCvTqjxeB
status: PUBLISHED
createdAt: 2021-01-21T17:29:10.793Z
updatedAt: 2021-04-06T20:20:55.582Z
publishedAt: 2021-04-06T20:20:55.581Z
firstPublishedAt: 2021-01-21T17:54:12.941Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: mode-off-faq
legacySlug: mode-off-faq
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Mode-off es una funcionalidad del [Payment Provider Protocol](https://developers.vtex.com/vtex-developer-docs/docs/payment-provider-protocol "Payment Provider Protocol") - protocolo de integración para pagos de VTEX.

Esta funcionalidad permite que VTEX controle la salud y la estabilidad de sus partners de pagos, garantizando que no se cancelen pedidos debido a inestabilidades. 

Dicho esto, mode-off funciona de la siguiente manera: cuando VTEX identifica algún tipo de error consecutivo en las integraciones de los partners de pagos, el status mode-off se activa para retener las transacciones de las tarjetas de crédito. 

Una vez que la integración o el partner vuelva a estabilizarse, el status mode-off se desactiva y nuestro sistema comienza a realizar reintentos de procesamiento para las transacciones que han sido retenidas.

En este artículo, hemos recogido las principales dudas sobre el funcionamiento de mode-off.

Consulte las siguientes preguntas.

## ¿Todos los partners tienen esta funcionalidad habilitada?

Sí, todos los partners de pagos de VTEX tienen mode-off habilitado.

## ¿Para cuáles medios de pago funciona mode-off?

Solo para los medios de pago que puedan ser procesados de forma asíncrona; es decir, tarjetas de crédito.

## ¿Mode-off funciona para medios de pago como: boleto bancario, código QR o redireccionamiento?

No, estos medios de pago requieren una respuesta en línea y no pueden ser procesados de forma asíncrona.

Por lo tanto, para estos medios de pago, las transacciones no serán reprocesadas.

## ¿Cuál es la regla actual para activar mode-off?

Mode-off se activa cuando el partner o la integración presentan una inestabilidad que se identifica a partir de la respuesta de mensajes de error del tipo 500, 408 o timeout superior a 30 segundos en los últimos cinco minutos. Esta regla es válida para todos los medios de pago que mode-off procesa.

<div class="alert alert-warning">
Cabe recordar que los medios de pago sincrónos <strong>no</strong> se pueden volver a procesar. Sin embargo, entran en el recuento de errores para identificar si un partner es inestable o no.
</div>

## ¿Cuál es la regla para desactivar mode-off?

Las transacciones se liberarán normalmente cuando el partner deje de presentar la misma tasa de cinco errores en los últimos cinco minutos. 

## ¿Por cuánto tiempo VTEX intenta procesar de nuevo las transacciones retenidas?

El tiempo de reintento lo define cada partner en el momento de la integración con Payment Provider Protocol.

Si este período no se ha definido previamente, el tiempo estándar es de __cuatro horas__.

## ¿Cómo identificar mode-off y qué hacer cuando esté activo?

El partner de pagos empieza a ver una tasa de errores alta y una reducción en el volumen de pagos con tarjeta. 

En ese momento, es importante trabajar para corregir la inestabilidad y asegurar a los clientes que los pagos se procesarán tan pronto como el sistema recupere su estabilidad.

## ¿Cómo el administrador de la tienda identifica este comportamiento de inestabilidad y qué debe hacer?

El administrador de la tienda verá varios pagos con tarjeta de crédito con el status de «pendiente», que no han sido procesados. 

El log de la transacción devolverá la *etiqueta* "mode-off".

## Una vez que mode-off esté activado, ¿el administrador de la tienda necesita hacer algo?

Del lado de VTEX no, solo tiene que esperar el reintento.

Si lo desea, el administrador de la tienda también puede ponerse en contacto con su partner de pagos para entender el escenario de inestabilidad.

## ¿Dónde puedo obtener más detalles técnicos sobre cómo funciona la funcionalidad Mode-off?

Para más información sobre cómo funciona mode-off, verifique nuestra documentación en el [Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows#mode-off "").

