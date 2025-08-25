---
title: 'Configurar la política comercial para marketplace'
id: 6mokL50ny8gYK2S4ImOy2w
status: PUBLISHED
createdAt: 2018-08-13T12:08:39.183Z
updatedAt: 2021-02-24T15:53:02.071Z
publishedAt: 2021-02-24T15:53:02.071Z
firstPublishedAt: 2018-08-13T14:29:58.221Z
contentType: trackArticle
productTeam: Channels
slugEN: setting-up-a-marketplace-trade-policy
locale: es
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugEN: configurar-integracion-netshoes
---

El primer paso de cualquier integración es definir la política comercial que se utilizará en el marketplace.

Una de las funciones de la política comercial es hacer una diferenciación de __catálogo__ y/o __logística__ entre los diferentes canales de venta de la tienda. Es decir, una nueva política comercial solo es necesaria cuando uno de estos factores es diferente entre los canales de venta.

![carrefour.1es](//images.ctfassets.net/alneenqid6w5/5K4NqjICKTJMoXWmaTDnpD/51afdc673afc6959b447a7c28a81f170/carrefour.1es.png)

La misma política comercial puede ser utilizada por más de un marketplace o entre tienda principal y marketplace. Para esto, basta con utilizar el mismo ID de política comercial en la [configuración](es/tutorial/integrando-con-marketplace). Al hacer esto, se utilizará el mismo catálogo y la misma logística para las tiendas o canales que están configurados con la misma política comercial.

![carrefour.2es](//images.ctfassets.net/alneenqid6w5/2F7jSO1EjBamKdt5ArgPjm/8a0835cd3f38702fe82c2fb187af3a11/carrefour.2es.png)

En otras palabras, si no es necesario definir un catálogo o un tipo de logística específicos para diferentes canales de ventas, usted tampoco necesitará utilizar políticas comerciales separadas. Basta asociar el ID de la política comercial que ya existe a su integración con el marketplace. 

![carrefour.3es](//images.ctfassets.net/alneenqid6w5/3SW2dNax736jMp5eZ54gpj/646492b31b365d60cbfebde8356a9018/carrefour.3es.png)

Luego de entender esto, evalúe si es necesario configurar una nueva política comercial en su tienda. Si la respuesta es sí, siga las instrucciones de [este artículo](https://help.vtex.com/es/faq/como-contratar-nueva-politica-comercial--frequentlyAskedQuestions_700) antes de pasar a la siguiente etapa de configuración. Si su política comercial ya cumple las condiciones que necesita para la integración con el marketplace, siga las próximas instrucciones.

## Definición de catálogo de productos


Para definir el catálogo de productos que será enviado al marketplace, el administrador de la tienda debe marcar el flag  __Tiendas__ en el registro del producto, seleccionando las políticas comerciales deseadas. Si no se selecciona ninguna política comercial, el producto se considerará para todas estas.

1. Acceda a la sección __Catálogo__.
2. Acceda a la pestaña __Productos y SKUs__.
5. Seleccione un producto y haga clic en el botón __Cambiar__.
6. Marque el flag __Tiendas__ para las políticas comerciales elegidas.
7. Haga clic en __Guardar__.

> ❗ VTEX no recomienda realizar la gestión de catálogo de productos para marketplace a través de colecciones. Este mecanismo genera muchas complejidades en la organización, siendo recomendada la gestión a través del flag tiendas.

## Definiendo la logística

La simulación de flete y actualización de stock depende de una previa configuración de la logística que atenderá a la política comercial asociada al marketplace. Las configuraciones necesarias son aquellas estándares para la logística de la tienda. Sin embargo, es en el muelle que usted debe asociar la política comercial vinculada al marketplace.

1. [Cree o edite un muelle](/es/tutorial/como-crear-muelle) asociando a la política comercial.
2. [Asocie una transportadora](/es/tutorial/gestionar-transportista) a este muelle.
3. Compruebe si hay algún [stock](/es/tutorial/gerenciar-inventario) que se asocie a este muelle.
