---
title: 'Configurar el Tipo de Interés de Financiamiento'
id: 3RarAwUYY0KmiSimYyiwee
status: DRAFT
createdAt: 2017-09-19T21:42:49.175Z
updatedAt: 2020-05-25T20:52:05.398Z
publishedAt: 
firstPublishedAt: 2017-09-20T14:30:04.768Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slug: configurar-el-tipo-de-interes-de-financiamiento
legacySlug: configurar-el-tipo-de-interes-de-financiamiento
---

## Identificar el id de la forma de pago

El ID de la forma de pago que se configurará a Interés Simple se obtiene del siguiente modo:

- Ingresar al menú PCI Gateway
- Ingresar a la derecha, al ícono de Configuraciones
- Ingresar a la pestaña de Formas de Pago
- Ingresar a la Forma de Pago que se desea configurar para que utilice Interés Simple
- Copiar el último parámetro de la URL, que indica el ID de esa Forma de Pago (ver imagen)

![Interes Simple - Obtener ID Transaccion](//images.contentful.com/alneenqid6w5/19PugiXjNssA6c48WoqoSC/808db9360d3dbb5dd12466882ce3e852/interes-simple-id-transaccion.png)

## Configurar el tipo de interés mediante la API

El campo "interestRateMethod" es donde se deberá configurar si utilizaremos el algoritmo de cálculo de Interés Simple o Interés Compuesto:
- **Interés Simple** será "interestRateMethod": 1.
- **Interés Compuesto** será "interestRateMethod": null.

Inicialmente se hará una llamada a "GET Rule by ID" para obtener la configuración actual la Forma de Pago mediante la siguiente API:
https://documenter.getpostman.com/view/322855/pci/Hs3y#56ae3651-0086-7cbc-faec-581063e6c10d

El response que devolvió la llamada "GET Rule by ID" anterior, será el request de la siguiente llamada "POST Rule by ID", para grabar la nueva configuración, en donde se deberá modificar únicamente el valor "interestRateMethod": 1:
https://documenter.getpostman.com/view/322855/pci/Hs3y#80db2e68-0913-668b-36ea-b484a839d9ab

<div class="alert alert-danger">IMPORTANTE: Actualmente, solo se logra modificar la forma de pago mediante API. En caso de necesitar modificar la forma de pago desde la interfáz de usuario, se deberá repetir el proceso de configuración por API, ya que al Guardar los cambios, se irá a tomar valor vacío por defecto.</div>
