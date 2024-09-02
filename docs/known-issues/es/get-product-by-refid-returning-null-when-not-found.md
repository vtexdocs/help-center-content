---
title: 'GET Product by Refid Devuelve "Null" cuando no se encuentra'
id: 6yiM9gJT5DB77pZSBNfGZ3
status: PUBLISHED
createdAt: 2023-05-16T19:35:46.743Z
updatedAt: 2024-07-01T18:49:03.498Z
publishedAt: 2024-07-01T18:49:03.498Z
firstPublishedAt: 2023-05-16T19:35:47.468Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-product-by-refid-devuelve-null-cuando-no-se-encuentra
locale: es
kiStatus: No Fix
internalReference: 826702
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La ruta get product by refid (/catalog_system/pvt/products/productgetbyrefid) devuelve un null en lugar de una simple respuesta 404 cuando no se encuentra un id válido en el catálogo de una tienda determinada.




##

## Simulación


1) Ejecute el siguiente cURL

curl --location --request GET 'https://mystore.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/667' \
--header 'Content-Type: application/json' \
--header 'Cookie: janus_sid=beb23e63-ccb5-4619-9ee7-f1f61deb0683'

Debería obtener la siguiente respuesta si el id dado no existe

 ![](https://vtexhelp.zendesk.com/attachments/token/zLUjULwrXOEEd8hX9P0pTq8op/?name=inline-1138166273.png)

Esto es incorrecto ya que lo esperado es un `404 - Not Found`.





## Workaround


Usar otras APIs para GET product como Get Product by ID si esta respuesta 404 es imperativa para cualquier cosa con la que estés trabajando.






