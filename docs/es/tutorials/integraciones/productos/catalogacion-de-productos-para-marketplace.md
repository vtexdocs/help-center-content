---
title: 'Enviar productos para marketplace'
id: tutorials_388
status: PUBLISHED
createdAt: 2017-04-27T22:07:33.486Z
updatedAt: 2020-01-07T22:09:30.400Z
publishedAt: 2020-01-07T22:09:30.400Z
firstPublishedAt: 2017-04-27T23:03:22.814Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: sending-products-to-the-marketplace
legacySlug: catalogacion-de-productos-para-marketplace
locale: es
subcategoryId: 4HBbKdnwneGew2qGGykSM8
---

Al integrarse con un marketplace, es necesario definir qué productos serán enviados para venta en esta otra tienda. [Usted puede enviar todos los productos o un catálogo personalizado](/es/docs/tutorials/configurar-politica-comercial-para-marketplace). Todas estas configuraciones son posibles a través de la política comercial, como verá a continuación.

## Definición del surtido de productos

Una posibilidad es trabajar todo el catálogo de productos junto al marketplace. Para ello, basta con asociar el ID de la política comercial de la tienda principal, que será siempre la de **ID 1**, [cuando solicitado en la configuración](/es/tutorial/integrando-con-marketplace).

![ExemploPoliticaComercial](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/productos/catalogacion-de-productos-para-marketplace_1.png)

Esta política comercial no demanda una colección de productos configurada, porque el sistema ya entiende que se refiere a todos los productos.

Otra posibilidad es trabajar con un surtido específico por alguna política comercial diferenciada. Para eso, será necesario crear y definir una nueva colección de productos y [asociarla a una nueva política comercial](/es/tutorial/configuring-a-marketplace-sales-policy/).

1. En el menú del Admin, acceda al __Catálogo__.
2. Haga clic en **Productos y SKU**.
3. Haga clic en **Cambiar** en el producto que desea dirigir a la política comercial.
4. Marque el checkbox de las políticas comerciales a las que este producto deberá pertenecer.
5. Haga clic en __Guardar__.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/productos/catalogacion-de-productos-para-marketplace_2.gif)

_Cuando existan productos que no tienen ningún valor marcado en el campo **tienda** en el registro de productos o en el registro de precios, esos productos serán enviados a todas las políticas comerciales configuradas sin colección.

## Indexación del producto

Una vez realizadas las configuraciones de integración al marketplace, los productos no se indexarán automáticamente para atender sólo a este nuevo canal disponible.

Esto es porque la indexación se realiza cuando hay cambios en el registro del producto/SKU, o en el registro de precio/stock.

El acto de crear una colección ya sería suficiente para la indexación de los productos elegidos para la exportación, ya que al guardar una colección, se indexan todos los productos asociados a ella.

Es decir, finalizadas las configuraciones, es importante guardar una vez más su colección de la política comercial del marketplace para [garantizar la replicación de los nuevos productos para el marketplace](/es/docs/tutorials/entendiendo-el-funcionamento-de-la-indexacion).

Para comprobar si el producto se ha indexado realmente en la política comercial del marketplace, realice los siguientes pasos:

1. Acceda al catálogo.
2. Acceda a la pestaña __Productos y SKUs__.
3. Haga clic en __Filtrar resultados o realizar una búsqueda__.
4. Introduzca el ID del SKU o el nombre del producto y haga clic en __Buscar__.
5. En el botón azul a la derecha, haga clic en la flecha abajo y, a continuación, haga clic en __Indexed Info__.
6. Busque `Active sales channels` y compruebe que se muestran los números de las políticas comerciales para los marketplaces.

Después de la indexación es necesario que los productos sean catalogados en el markerplace. El tiempo para que esta acción se complete depende del proceso interno del markerplace.

Si el markerplace es una tienda VTEX, basta con hacer el [mapeo de marcas y categorías](/es/docs/tutorials/mapeo-de-categorias-y-marcas-para-marketplace/) y la [aprobación de SKUs](/es/tutorial/aprobacion-de-sugerencias-de-skus).

El seguimiento de toda esta comunicación se registrará en el VTEX Bridge.
