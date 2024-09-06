---
title: 'Identificar si UTMs de marketing se están pasando al checkout'
id: 6kjHHfOWIgeI26qcQSU4Wg
status: ARCHIVED
createdAt: 2018-02-08T11:52:38.471Z
updatedAt: 2022-07-26T15:37:13.447Z
publishedAt: 
firstPublishedAt: 2018-02-08T18:18:09.369Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: identificar-si-utms-de-marketing-se-estan-pasando-al-checkout
locale: es
legacySlug: identificar-si-utms-de-marketing-se-estan-pasando-al-checkout
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Cuando se utiliza el parámetro `utm_source`, `utm_campaign` o `utm_medium` para cargar una página de la tienda, el sistema crea un cookie llamado __IPS__, cuyo valor es igual al valor del parámetro.

El orderForm de los pedidos cerrados por el usuario mientras este cookie no caduque recibirá el cookie en el header del request enviado al checkout.

Es decir, en el momento en que el usuario haga clic en el botón Comprar, el control nativo del botón de compra (`<vtex.cmc:BuyButton/>`) hará un POST pasando el valor del parámetro `utm_source` para el checkout.

Con eso el checkout podrá montar el orderForm considerando el marketingData usado en la compra.

### Simulación

Para asegurarse de que el contenido del parámetro `utm_source`, por ejemplo, se está pasando al checkout, usted puede seguir estos pasos:
1. Acceda a cualquier página de la tienda con una utm en la querystring (ej: {AccountName}.com.br`?utm_source=facebook`).
2. Ingrese al __developer tools__ (F12 en Chrome, si está en Windows, o Cmd+Opt+I, en el Mac), acceda a la pestaña __Application__, abra los cookies del sitio de la tienda y busque el cookie __IPS__.![utmSource1](https://images.contentful.com/alneenqid6w5/2tGleKs2b2Gge8oEoquSGm/17efaf14e42cd655b037c2bd009eb0d6/utmSource1.png)
3. Entre en una página de producto e inserte un producto en el carrito.
4. Entre en el carrito.
5. Actualice la página y, en la pestaña __Network__ de developer tools, monitoree los requests.
6. Seleccione el request __orderForm__.
7. En el preview, abra el nodo `marketingData`.
8. Compruebe el valor del campo `utmSource`.![utmSource2](https://images.contentful.com/alneenqid6w5/3k5685cAUwy4uk4S2I6qGm/6595f50415b17965047c2023ffb46658/utmSource2.png)

En el ejemplo de la imagen anterior, usted puede ver que el valor del parámetro `utm_source` fue correctamente pasado al checkout, que introdujo ese parámetro en el orderForm, dentro del campo `utmSource`.

Pero si el campo `utmSource` del orderForm está vacío, es porque el valor no se ha pasado al checkout.

Cuando el valor no se pasa al checkout, las promociones vinculadas a la utm_source __no__ se aplican a los pedidos, y el OMS __no__ registra estas UTMs como parámetros de los pedidos.

### ¿Por qué el valor no se ha pasado al checkout?

Uno de los motivos más comunes de que el contexto de marketing no se pasa al checkout está en la __customización de la llamada de compra__.

Como dicimos anteriormente, el control nativo del botón de compra (`<vtex.cmc:BuyButton/>`) hace un POST pasando todos los datos necesarios para el checkout, incluyendo el valor de los parámetros `utm_source`, `utm_campaign` y `utm_medium `.

Pero si, en lugar de usar ese control, su tienda ha adaptado la llamada y, por lo tanto, hace el POST del pedido de compra por cuenta propia, __es necesario pasar todos los datos que puedan ser útiles para montar el orderForm__, incluyendo el contexto de marketing.

Este valor se puede pasar como querystring o en el body del request, en el campo `marketingData`. Para más información, vaya a [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/why-are-the-utms-not-being-applied-to-the-cart).
