---
title: 'La solicitud del centro tributario del mercado no tiene en cuenta el precio manual para los descuentos'
id: 2pGgbPB7Qm4dXtQauohvx7
status: PUBLISHED
createdAt: 2023-11-08T17:59:41.102Z
updatedAt: 2023-12-06T19:27:50.006Z
publishedAt: 2023-12-06T19:27:50.006Z
firstPublishedAt: 2023-11-08T17:59:41.695Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-solicitud-del-centro-tributario-del-mercado-no-tiene-en-cuenta-el-precio-manual-para-los-descuentos
locale: es
kiStatus: Fixed
internalReference: 932657
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la cuenta tiene configurado isMarketplaceResponsibleForTaxes, la solicitud del centro de impuestos no tiene en cuenta los precios manuales para los descuentos de artículos.


##

## Simulación



- Configure taxConfiguration.isMarketplaceResponsibleForTaxes en la configuración de orderForm;
- Establecer el precio manual de un artículo;
- La solicitud del centro de impuestos no aplicará la diferencia como descuento.



## Workaround


NA




