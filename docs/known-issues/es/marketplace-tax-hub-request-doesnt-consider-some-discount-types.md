---
title: 'La solicitud del centro tributario del mercado no tiene en cuenta algunos tipos de descuentos'
id: 630nSPu8y5G6CSFtiH3MOL
status: PUBLISHED
createdAt: 2023-11-30T21:14:13.709Z
updatedAt: 2023-12-06T19:27:05.930Z
publishedAt: 2023-12-06T19:27:05.930Z
firstPublishedAt: 2023-11-30T21:14:14.259Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-solicitud-del-centro-tributario-del-mercado-no-tiene-en-cuenta-algunos-tipos-de-descuentos
locale: es
kiStatus: Fixed
internalReference: 945580
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando la cuenta tiene configurado isMarketplaceResponsibleForTaxes, la solicitud del hub de impuestos no considera algunos tipos de descuento: Nominal, Porcentaje y Precio máximo por artículo. Esto afecta al cálculo de impuestos, y el precio final es más alto de lo esperado.


##

## Simulación



- Configure taxConfiguration.isMarketplaceResponsibleForTaxes en la configuración de orderForm;
- Configure uno de los tipos de descuento Nominal, Porcentaje o Precio máximo por artículo de la promoción regular;
- La solicitud del centro de impuestos no aplicará el descuento.


##

## Workaround


N/A



