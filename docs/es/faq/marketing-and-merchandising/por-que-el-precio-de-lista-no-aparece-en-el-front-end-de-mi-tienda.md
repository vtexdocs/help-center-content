---
title: '¿Por qué el precio de lista no aparece en el front-end de mi tienda?'
id: 7zB1S10crK6QXiWcDTUFtE
status: PUBLISHED
createdAt: 2019-03-25T20:41:57.520Z
updatedAt: 2020-11-27T19:40:10.985Z
publishedAt: 2019-12-31T14:24:12.007Z
firstPublishedAt: 2019-03-25T20:46:55.655Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 6JCq5z9N5xvlHKhhoEcvjM
slugEN: why-the-price-list-does-not-appear-on-my-store-fron-end
locale: es
legacySlug: untitled-entry-2019-03-25-at-08-41-57
---

Eventualmente, es posible que el Precio de Lista no se muestre en el front-end de la tienda. Esto se debe a errores en la configuración del módulo [Precios](/es/tutorial/--tutorials_4394 "Precios").

El Precio de Lista es apenas una de las configuraciones posibles al establecer un precio de un SKU. En general, las primeras reglas definidas son Precio Base, Precio de Costo y Markup.

Ahora, lo que sucede es que, al fijar un precio para un SKU, esa configuración se sobrepone  a las demás reglas de modificación de precio antes registradas. En otras palabras, el precio de lista o precio base se "borra" ya que el administrador de la tienda aplica un precio fijo a un SKU.

Para que el Precio de Lista vuelva a mostrarse en el front-end de la tienda, se necesita eliminar el precio fijo de las configuraciones.

Dicho esto, siga el procedimiento: 

1. Acceda al módulo __Productos__ 
2. Haga clic en __Precios__
3. Haga clic en __Lista de Precios__ 
4. Digite en la búsqueda el __Nombre, Id__ o __SKU__ del producto que desea configurar.
Una vez que el producto aparece en la búsqueda, basta con hacer clic en cualquiera de los cards que indican el precio y el markup del ítem.  

A continuación, aparecerá una pestaña al lado izquierdo de la pantalla mostrando algunas especificaciones en cuanto al precio.  
De este modo, continúe con el proceso:

5. Acceda a la sesión __Precios Fijos__
6. Elimine el(los) __Precio(s) Fijo(s)__  
7. Guarde las configuraciones haciendo clic en __Enter__

¡Listo! Sus SKUs se mostrarán nuevamente en la tienda.

