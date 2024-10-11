---
title: 'Configurar el tipo de interés de financiamiento'
id: 3h9ollbIS9YTXWcsmz8iF8
status: ARCHIVED
createdAt: 2019-02-13T16:48:24.960Z
updatedAt: 2022-01-27T19:56:23.586Z
publishedAt: 
firstPublishedAt: 2019-02-13T16:51:05.020Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: setting-up-the-type-of-interest-rate
locale: es
legacySlug: configurar-el-tipo-de-interes-de-financiamiento
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

## Identificar el id de la forma de pago

El ID de la forma de pago que se configurará a Interés Simple se obtiene del siguiente modo:

- Ingresar al menú Pagos
- Ingresar al ícono de Configuracion
- Ingresar a la pestaña de Planes de Pago
- Ingresar a la Forma de Pago que se desea configurar para que utilice Interés Simple
- Copiar el último parámetro de la URL, que indica el ID de esa Forma de Pago (ver imagen)

![Interes Simple - Obtener ID Transaccion](https://images.contentful.com/alneenqid6w5/19PugiXjNssA6c48WoqoSC/808db9360d3dbb5dd12466882ce3e852/interes-simple-id-transaccion.png)

## Configurar el tipo de interés mediante la API

El campo "interestRateMethod" es donde se deberá configurar si utilizaremos el algoritmo de cálculo de Interés Simple o Interés Compuesto:
- **Interés Simple** será "interestRateMethod": 1.
- **Interés Compuesto** será "interestRateMethod": null.

Inicialmente se hará una llamada a "GET Rule by ID" para obtener la configuración actual la Forma de Pago mediante la siguiente API:

https://developers.vtex.com/reference/configuration-1#rulebyid

El response que devolvió la llamada "GET Rule by ID" anterior, será el request de la siguiente llamada "POST Rule by ID", para grabar la nueva configuración, en donde se deberá modificar únicamente el valor "interestRateMethod": 1:

https://developers.vtex.com/reference/configuration-1#putrulebyid

>❗ IMPORTANTE: Actualmente, solo se logra modificar la forma de pago mediante API. En caso de necesitar modificar la forma de pago desde la interfáz de usuario, se deberá repetir el proceso de configuración por API, ya que al Guardar los cambios, se irá a tomar valor vacío por defecto.
