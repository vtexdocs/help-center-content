---
title: La API de precios permite valores negativos
id: 64gkWnDs5pvv8Ny1TJtTI0
status: PUBLISHED
createdAt: 2023-03-20T20:09:54.998Z
updatedAt: 2023-03-20T20:09:55.649Z
publishedAt: 2023-03-20T20:09:55.649Z
firstPublishedAt: 2023-03-20T20:09:55.649Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-precios-permite-valores-negativos
kiStatus: Backlog
internalReference: 774548
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la API de precio PUT permite la entrada de valores negativos a través de la carga útil de la API PUT, si establece el margen y el precio base en valores negativos, establecerá el producto como no disponible.




##

## Simulación


En la API https://api.vtex.com/account/pricing/prices/1

Fije el siguiente precio:

`{`
` "itemId": "1",`
` "listPrice": null,`
` "costPrice": 11.9,`
` "markup": -100,`
"precio base": null,`
` "fixedPrices": [ ]`
`}`

La respuesta será:

 ![](https://vtexhelp.zendesk.com/attachments/token/P3rVVQbx6nfqtX2W1UMAbb0V8/?name=image.png)

Lo que rompe la lógica de precios y hace que el producto no esté disponible, ya que las aplicaciones de pago y catálogo no son capaces de tratar con valores de precio negativos.




## Workaround


n/a





