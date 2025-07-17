---
title: '[Catálogo] API Get Product by RefId devuelve "no encontrado" para algunos productos/RefId'
id: 1hVZC2kSCnsURW3k8w53Ef
status: PUBLISHED
createdAt: 2025-01-02T18:27:05.040Z
updatedAt: 2025-06-13T17:38:19.706Z
publishedAt: 2025-06-13T17:38:19.706Z
firstPublishedAt: 2025-01-02T18:27:05.832Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogo-api-get-product-by-refid-devuelve-no-encontrado-para-algunos-productosrefid
locale: es
kiStatus: Backlog
internalReference: 1157371
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


API Get Product by RefId devuelve "no encontrado" para algunos productos/RefId, incluso con ref registrada en el catálogo VTEX

✅️ si se busca el refid en la UI devuelve el producto
❌️ búsqueda utilizando la ruta "/productgetbyrefid", devuelve no encontrado

*Nota: este problema también se produce al buscar skubyrefid


##

## Simulación



https://VTEX.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/

 ![](https://vtexhelp.zendesk.com/attachments/token/BksgxlJ6S9SSqeullsdgcvnUm/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/vpk2h8A9N3j95Cw6XF7CL3cbt/?name=image.png)




##

## Workaround


n/a

