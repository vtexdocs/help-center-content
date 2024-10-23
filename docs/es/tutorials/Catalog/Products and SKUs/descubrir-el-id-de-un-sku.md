---
title: 'Descubrir el ID de un SKU'
id: 4VQZsYeb3igGK2YowuEYWW
status: PUBLISHED
createdAt: 2018-02-07T13:04:01.334Z
updatedAt: 2023-03-29T18:17:03.976Z
publishedAt: 2023-03-29T18:17:03.976Z
firstPublishedAt: 2018-02-07T17:21:00.652Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-to-find-an-sku-id
locale: es
legacySlug: descubrir-el-id-de-un-sku
subcategoryId: pwxWmUu7T222QyuGogs68
---

El ID del SKU es el número que identifica un determinado SKU. Esta información se puede utilizar en llamadas de API y en investigaciones de escenarios sobre un determinado SKU, por ejemplo. 

Este número de identificación es extremadamente importante para cualquier acción que desee tomar con respecto a un determinado SKU.

Hay algunas maneras de descubrir el ID de un SKU:

## Admin VTEX

Para descubrir el ID de un SKU por el Admin VTEX, siga estos pasos:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Todos los productos__.
3. Usted verá una lista con todos los productos y SKUs registrados en su tienda. En la columna central, verá todos los SKUs de su tienda.
4. Vaya al SKU que quiere y verifique el número entre paréntesis. Este número es el ID de su SKU.

### Ejemplo

En el ejemplo siguiente, el ID del SKU es __18__.

![skuId-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products and SKUs/descubrir-el-id-de-un-sku_1.png)

## URL de registro de SKU

Para descubrir el ID de un SKU por la URL de registro de SKU, siga los pasos abajo:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Todos los productos__. Usted verá una lista con todos los productos y SKUs registrados en su tienda.
3. Haga clic en el nombre del SKU que quiere.
4. Observe la dirección URL de la página cargada. Usted verá una URL con el siguiente formato: `https://{accountName}.myvtex.com/admin/Site/SkuForm.aspx?IdSku={number}`
 El ID del SKU será el número mostrado en lugar de `{number}`.

>❗ Para garantizar que los ítems agregados al stock estén disponibles para venta en la tienda, el [ID del SKU](url) no debe contener **el número cero a la izquierda**. Por ejemplo, el sistema no reconoce ID con el formato `01`, `02` , `021`, ya que espera el formato `1`, `2`, `21`.

