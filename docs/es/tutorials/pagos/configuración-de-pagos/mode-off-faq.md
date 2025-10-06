---
title: 'Mode-Off: FAQ'
id: 6hbd7PuvoxuRbPCvTqjxeB
status: PUBLISHED
createdAt: 2021-01-21T17:29:10.793Z
updatedAt: 2024-04-11T19:26:47.407Z
publishedAt: 2024-04-11T19:22:34.569Z
firstPublishedAt: 2021-01-21T17:54:12.941Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: mode-off-faq
legacySlug: mode-off-faq
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Mode-off es una funcionalidad del [Payment Provider Protocol](https://developers.vtex.com/vtex-developer-docs/docs/payment-provider-protocol) - protocolo de integración para pagos de VTEX.

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

> ⚠️ Cabe recordar que los medios de pago sincrónos **no** se pueden volver a procesar. Sin embargo, entran en el recuento de errores para identificar si un partner es inestable o no.

## ¿Cuál es la regla para desactivar mode-off?

Las transacciones se liberarán normalmente cuando el partner deje de presentar la misma tasa de cinco errores en los últimos cinco minutos. 

## ¿Por cuánto tiempo VTEX intenta procesar de nuevo las transacciones retenidas?

El partner puede definir el tiempo entre los reintentos de procesamiento de transacciones (_retries_) al enviar la información de pago. Al configurar el tiempo de cancelación de pago (campo delayToCancel) por un período inferior a 1 día, los reintentos se realizarán cada 1 hora. Si el tiempo para cancelar el pago se establece como igual o mayor a 1 día, los reintentos se realizarán cada 4 horas. Para obtener más información, visite [Create Payment endpoint](https://developers.vtex.com/docs/api-reference/payment-provider-protocol?endpoint=post-/payments).

> ℹ️ Si el pago se realiza mediante [PIX (Método de pago instantáneo brasileño)](/es/tutorial/configurar-pix-como-meio-de-pagamento--5sbNavMSJY4jyLmLKRHiOf) o el tiempo de cancelación de pago se configura entre 5 minutos y 1 hora, los reintentos se realizarán cada 5 minutos.

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

Para más información sobre cómo funciona mode-off, verifique nuestra documentación en el [Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows#mode-off).

