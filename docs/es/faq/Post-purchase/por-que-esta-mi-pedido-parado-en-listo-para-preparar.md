---
title: '¿Por qué está mi pedido parado en  "Listo para preparar"?'
id: frequentlyAskedQuestions_301
status: PUBLISHED
createdAt: 2017-04-27T22:38:27.319Z
updatedAt: 2023-03-20T18:45:54.181Z
publishedAt: 2023-03-20T18:45:54.181Z
firstPublishedAt: 2017-04-27T23:01:44.420Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-has-my-order-stopped-on-ready-for-handling
locale: es
legacySlug: por-que-esta-mi-pedido-parado-en-listo-para-preparar
---

En el status `Listo para preparar`, ele flujo del pedido espera el catastro de la nota fiscal para la factura. El pedido quedará en ese status hasta que se realice su [factura](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), o sea, hasta que la nota fiscal sea insertada en el pedido.

## Facturación en el módulo Pedidos

Para cambiar el status, debes agregar la factura a través de la API de [Order Invoice Notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification) o [manualmente](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) en el Admin VTEX. 

Ten en cuenta la siguiente información para asegurarte de que la facturación se ha realizado correctamente:

* La factura debe contener el valor total del pedido, incluido el flete.  
* Si la factura ya contiene el valor total correcto del pedido, es necesario reenviarla.  
* Si la factura insertada no contiene el valor completo, es necesario insertar una nueva [factura parcial](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) con el valor que falta. Esta nueva factura debe tener un número diferente al que ya está registrado en el pedido.  

### Integración con marketplace

Si un pedido se ha facturado con éxito en su ERP, pero sigue detenido en el status `Preparando Entrega`, puede que el producto no esté disponible en la API del marketplace. En este caso, consulta el artículo [El pedido fue facturado en el ERP pero continúa en el status "Preparando Entrega". ¿Que hacer?](/es/faq/the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status).
