---
title: 'Configurar mensaje personalizado de regalo'
id: tutorials_291
status: PUBLISHED
createdAt: 2017-04-27T22:09:47.349Z
updatedAt: 2023-03-29T20:29:25.846Z
publishedAt: 2023-03-29T20:29:25.846Z
firstPublishedAt: 2017-04-27T23:03:13.676Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurar-mensaje-personalizado-de-regalo
locale: es
legacySlug: configurando-cartao-de-presente-com-mensagem-personalizada
subcategoryId: pwxWmUu7T222QyuGogs68
---

La tarjeta de regalo con mensaje personalizado es muy usada principalmente en tiendas que disponen listas de regalos, casamientos, etc.

Para hacer disponible este producto a su cliente es necesario configurar en el _Admin_ un nuevo Servicio de SKU. Para saber cómo crear servicios, lea [Crear servicio para un SKU](https://help.vtex.com/es/tutorial/crear-servicio-para-un-sku--tutorials_252).

Después de haber creado el Servicio y agregar un Valor a este servicio, registre un tipo de servicio para los SKUs y luego, vincule este servicio al SKU. Siga los pasos abajo para realizar esa tarea:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic em __Campos personalizados__.
3. Haga clic em __Tipos de servicio__.
4. Registre o seleccione el Tipo de Servicio.
5. Haga clic em __Valores de servicio__.
6. Registre una Nueva Tabla de Valores seleccionando el tipo de servicio registrado anteriormente.
7. En el VTEX Admin, todavía en el menú __Catálogo__, vaya a __Todos los productos__.
8. Seleccione un Producto.
9. Entre en la lista de SKUs de ese producto.
10. En la flechita al lado del botón `Alterar`, haga clic en __Servicio__.
11. Cree un Nuevo Servicio. En la pantalla de creación, seleccione el tipo de servicio creado y la tabla de valores.

Para más información sobre creación de servicios y vincular valores, vea el artículo [Crear servicio para un SKU](https://help.vtex.com/es/tutorial/crear-servicio-para-un-sku--tutorials_252).

## Validar la configuración

En el sitio es posible validar si la configuración se ha efectuado correctamente. Para eso, siga los pasos abajo:

1. Entre en el SKU configurado.
2. Agregue al carrito.
3. En este momento el tipo de servicio debe estar disponible para selección. El mensaje debe ser escrito en hasta 150 caracteres.
4. Seleccione el servicio en el carrito y haga clic en el link para agregar mensaje.

![](https://images.contentful.com/alneenqid6w5/3txxLHOWtqguWu4qmAqumA/e68ef2cf4881d3b9a01199244567c790/mensagem-carrinho.png)

Puede ver el mensaje escrito en la página de __Mi Cuenta > Mis Pedidos__:

![](https://images.contentful.com/alneenqid6w5/6h7iGpA880OgaemumSsEiG/10764ef2d3113be498fb24802e5d35c5/mensagem-meus-pedidos.png)

>ℹ️ Después de configurar el servicio en el SKU aguarde la indexación para que el registro tenga efecto en el sitio. Después de esto ya será posible probar la compra con este servicio activo.
