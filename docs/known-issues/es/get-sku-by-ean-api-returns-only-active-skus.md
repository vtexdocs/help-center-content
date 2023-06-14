---
title: 'La API GET SKU by EAN sólo devuelve las SKU activas'
id: 5NiuB1Lgf3CM5kXSSVdfuu
status: PUBLISHED
createdAt: 2020-03-23T15:10:23.842Z
updatedAt: 2022-11-25T22:00:19.153Z
publishedAt: 2022-11-25T22:00:19.153Z
firstPublishedAt: 2020-03-27T19:32:53.914Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-get-sku-by-ean-solo-devuelve-las-sku-activas
locale: es
kiStatus: Backlog
internalReference: 699007
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cuando se utiliza la ruta https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/, la respuesta de la API devuelve el mensaje "SKU not Found" o "Dados inconsistentes no cadastro de EAN para esse sku" cuando el SKU está inactivo o no está disponible en el indexador, incluso cuando ese SKU existe con ese EAN en la tienda.



## Simulación



Llame a la ruta https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/ para un SKU inactivo/no disponible con EAN.



## Workaround




Utilice las rutas **GET SKU by RefID** o **GET SKU by ID** para obtener la misma información.

