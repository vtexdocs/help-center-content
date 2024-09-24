---
title: '¿Por qué el pedido no factura en el marketplace?'
id: frequentlyAskedQuestions_715
status: PUBLISHED
createdAt: 2017-04-27T22:28:23.898Z
updatedAt: 2020-05-11T15:48:16.337Z
publishedAt: 2020-05-11T15:48:16.337Z
firstPublishedAt: 2017-04-27T23:02:33.970Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-el-pedido-no-factura-en-el-marketplace
locale: es
legacySlug: por-que-el-pedido-no-factura-en-el-marketplace
---

Este escenario se caracteriza por la inserción del albarán y la factura del pedido en VTEX, más la permanencia del status anterior en el marketplace. Como causa, tenemos 2 más comunes:

## Verifique el Bridge

Como en cualquier paso de la compra, algo puede ocurrir con la integración. Sin embargo, eso siempre estará registrado en el bridge, para ayudar a comprender y saber cómo corregir.

[Sepa cómo analizar errores de integración en el Bridge.](/es/tutorial/como-verificar-la-integracion-en-bridge)

## Inserte la clave de acceso con el albarán

Para realizar la facturación de los pedidos en la CNova es necesario el suministro de la clave de acceso de la factura fiscal ** ** en el momento de la inserción de la factura en la solicitud. Sin esto, no puede insertar datos de seguimiento en VTEX por CNova.

El impacto de esto es que conseguimos ir hasta el status facturado sólo en VTEX, siendo necesaria la actualización manual directamente en el backoffice de Nova.com.

La clave de acceso de la factura es un instrumento auxiliar para la consulta de la NF-y que permite al titular de ese documento confirmar su efectiva existencia, nombre del campo Invoice Key:

[]![ChaveDeAcesso](//images.contentful.com/alneenqid6w5/447ljGvDxuW0mmQoAumGOg/f1f246378401f4c9a56655974300ab04/ChaveDeAcesso-1.png)

__ ¡Recuerde! __ Este elemento de información se crea cuando se genera la factura fiscal y funciona en ERP. Si tiene uno, solicítelo.

Este valor puede ser ingresado manualmente por el administrador o por el [API de notificación de factura](https://developers.vtex.com/reference/invoice#invoicenotification), en el campo **invoiceKey**.

