---
title: 'Mejora en la visualización de precios con descuentos'
id: 2qU1yejVHL8xbLjxmNrXvk
status: DRAFT
createdAt: 2021-04-19T13:06:53.118Z
updatedAt: 2021-04-19T13:59:58.942Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-04-19-improvement-of-discount-price-viewing-experience
locale: es
legacySlug: mejora-en-la-visualizacion-de-precios-con-descuentos
announcementImageID: ''
announcementSynopsisES: ' Mejora en la visualización de precios en el Checkout cuando hay descuentos aplicables a un número limitado de cuotas.  '
---

Mejoramos la forma de calcular y mostrar los precios de cuotas a usuarios en el Checkout para que los descuentos solo se muestren en los contextos adecuados.

## ¿Qué cambió?

Antes de este cambio, podían producirse errores de visualización en el resumen del pedido si se [configuraba un descuento](https://developers.vtex.com/vtex-developer-docs/docs/using-checkout-api-to-set-a-discount) que solo se aplicaba a los pedidos pagados con un número limitado de cuotas.

Considere, por ejemplo, un usuario que ve un producto que cuesta  US$ 600, con un descuento del 10% pagando al contado. La persona continúa para el checkout y llega a la página de resumen del pedido, donde debe seleccionar las opciones de pago. Estos son los tres principales errores que pueden producirse:

- El usuario aún no ha seleccionado un número de cuotas y el precio se muestra sin descuentos, incluso en la opción elegible.
![O usuário ainda não selecionou um número de parcelas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-04-19-mejora-en-la-visualizacion-de-precios-con-descuentos_1.png)

- El cliente ha seleccionado un número de cuotas no elegibles para el descuento, y el precio se muestra solo sin descuentos, incluso en la opción elegible para el descuento.
![O usuário selecionou um número de parcelas não elegível para desconto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-04-19-mejora-en-la-visualizacion-de-precios-con-descuentos_2.png)

- El usuario seleccionó un número de cuotas válido para aplicar el descuento y el descuento se muestra incluso en las opciones no elegibles.
![O usuário selecionou um número de parcelas elegível para desconto (à vista)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-04-19-mejora-en-la-visualizacion-de-precios-con-descuentos_3.png)

Con este cambio, el descuento se mostrará siempre solo en las opciones de pago en cuotas  elegibles.
![O desconto será sempre exibido corretamente apenas nas opções de parcelamento elegíveis.](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-04-19-mejora-en-la-visualizacion-de-precios-con-descuentos_4.png)

## ¿Por qué realizamos este cambio?  

Este cambio mejora la experiencia de compra de los usuarios. También reduce las discrepancias y las reclamaciones después de la compra, ya que el consumidor sabe exactamente lo que puede esperar. Discrepancias como éstas pueden incluso acarrear consecuencias legales, que deben mitigarse con la actualización.

## ¿Qué se necesita hacer?

La mejora en la visualización de los precios se implementará automáticamente en la interfaz del Checkout para todas las cuentas. No se requiere ninguna acción para las tiendas que utilizan la interfaz nativa del Checkout de VTEX.

Sin embargo, esto no se aplica si su tienda utiliza nuestra API de Checkout conectada a otra interfaz de usuario, como con aplicaciones o sitios web propietarios. En este caso, ya se puede implementar la mejora utilizando la nueva [ruta de API orderForm installments](https://developers.vtex.com/vtex-developer-docs/reference/orderform#orderforminstallments). De este modo, ya no se producirán las discrepancias descritas anteriormente.
