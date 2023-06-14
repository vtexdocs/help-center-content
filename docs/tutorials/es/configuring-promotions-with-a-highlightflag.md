---
title: Configurar promoción con destaque / flag
id: tutorials_2295
status: PUBLISHED
createdAt: 2017-04-27T21:55:19.949Z
updatedAt: 2023-03-31T19:22:08.848Z
publishedAt: 2023-03-31T19:22:08.848Z
firstPublishedAt: 2017-04-27T23:03:51.539Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurando-promocion-con-destaque-flag
legacySlug: configurando-promocion-con-destaque-flag
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

El destaque en la promoción es un aviso que puede ser colocado en los estantes y en las páginas de los productos, informando que el producto es elegible para una promoción. Un ejemplo muy común es una imagen debajo de la imagen del producto indicando flete gratis.

![ExemploPromocaoDestaque2](//images.contentful.com/alneenqid6w5/jS31HBOW3YWsIYyUOE8o/3d0c108c84b2a7c5e6ae2d4254425e4b/ExemploPromocaoDestaque2.png)

No todas las promociones son elegibles para tener destaque. Esta posibilidad está disponible para los siguientes tipos:
- Porcentaje
- Flete porcentual
- Flete máximo
- Flete gratis
- Regalo

Además, **no se puede configurar un destaque cuando la promoción tiene alguna restricción en el carrito**, como: 

- Rango de código postal.
- Valor del pedido, a menos que el producto ya tenga un valor más alto o más bajo que el configurado en este campo.
- Valor acumulado en las compras.
- Restricción de promoción por BIN.
- Clúster de clientes.
- Tipo de flete. 
- Forma de pago.
- Número máximo de cuotas, apenas en la primera compra.

Esto ocurre porque todas estas promociones tienen alguna restricción, es decir, no son elegibles para todos los consumidores. Por lo tanto, es necesario que el consumidor dé alguna información (por ejemplo, código postal de entrega) para que la promoción sea aplicable.

Esta configuración se hace en 3 partes, una en Promociones y dos en las plantillas de su tienda, en el módulo CMS. Además, su CSS debe estar configurado para esta función. Vea a continuación cómo realizar estas configuraciones.

### Configure la promoción

1. En el Admin VTEX, accede a *Promociones > Promociones*, o escribe *Promociones* en la barra de búsqueda en la parte superior de la página.
2. Busque la promoción que desea configurar.
3. En la opción **Apareció en el producto**, seleccione **Destacado**.
4. Haga clic en el botón **Guardar**.

### Configure la plantilla de la página

Esta configuración consiste en la edición de la plantilla de la página utilizada para el layout de la página de producto e inclusión del tag  `<vtex.cmc:discountHightLight/>` en la misma.

1. En el Admin VTEX, accede a *Storefront > Layout*, o escribe *Layout* en la barra de búsqueda en la parte superior de la página.
3. Haga clic en la carpeta también llamada **CMS**. 
4. Haga clic en la carpeta **Sites and Channels**.
5. En el menú lateral, haga clic en el nombre del **sitio específico** deseado.
6. Haga clic en la carpeta **/**.
7. Haga clic en la carpeta **Producto**.
8. Haga clic en la carpeta **@Producto@**.
9. En la ventana, haga clic en la opción **New Layout**.
10. En el menú lateral, haga clic sobre el layout marcado con un check rojo y en el campo __template__, verifique cuál es el nombre de la plantilla utilizada.

![Layout com check - PT](https://images.ctfassets.net/alneenqid6w5/4GmSglkpk78c4M5hDZEgZX/ab47d3105213471fe370be0b11afcfab/image.png)

![Template](//images.contentful.com/alneenqid6w5/2OzzBkU2YwsgCGeICsgIcg/61aaf502c787cb4f0468ab8cee821072/Template.png)

11. Vuelva al menú lateral y haga clic en la carpeta **HTML Templates**.
12. Haga clic en la plantilla encontrada en @producto@.
13. Ingrese el código `<vtex.cmc:discountHightLight/>` de acuerdo con su estructura HTML.
14. Haga clic en **Save Template**.

### Configure la plantilla del estante

1. En el Admin VTEX, accede a *Storefront > Layout*, o escribe *Layout* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la carpeta también llamada **CMS**.
3. Haga clic en **Shelves Template**.
4. Haga clic sobre la plantilla deseada. 
5. Ingrese el código `$product.DiscountHightLight`.
6. Haga clic en el botón **Save Template**.

¡Listo! Después de estas configuraciones será creada una clase en el HTML con el nombre de la promoción. Luego, es necesario imprimir un texto o una imagen para el flag por CSS.
