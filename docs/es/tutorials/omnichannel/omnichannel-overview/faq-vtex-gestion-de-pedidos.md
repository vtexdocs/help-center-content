---
title: 'FAQ VTEX Gestión de Pedidos'
id: 4vddUgU784wyGYQ64cw6I8
status: DRAFT
createdAt: 2018-07-20T17:27:48.286Z
updatedAt: 2022-01-21T19:44:39.976Z
publishedAt: 
firstPublishedAt: 2018-07-20T19:26:49.496Z
contentType: tutorial
productTeam: Post-purchase
author: D0eIlynYFqaWQOMM6mmY6
slugEN: vtex-orders-management-faq
legacySlug: faq-vtex-oms
locale: es
subcategoryId: 3vhg10rO4MSmy06KeIYMIa
---

__1. Crédito: el consumidor compra en la tienda física (en otro punto de venta) y tiene crédito disponible. ¿Es posible integrar este crédito para que se pueda utilizar en todos los canales integrados con el Gestión de Pedidos, principalmente en el e-commerce?__

__Respuesta:__ Sí, es posible integrarlo para que el cliente pueda usar el crédito en cualquier canal de ventas que desee (comercio electrónico, tienda física o ventas por teléfono, por ejemplo).

__2. En el caso de una venta realizada a través de un pick-up point, el cliente compró en línea y obtendrá el producto en la tienda junto con la factura. ¿El pedido realizado en el e-commerce generará una DANFE?__

__Respuesta:__ Depende de lo que quiera la tienda. Por ejemplo, algunas tiendas imprimen el cupón de impuestos en el punto de venta de la tienda, otras implementan una solución sin usar el PDV de la tienda (por regla comercial, ya que en la tienda el precio es diferente del sitio) y luego imprimen la DANFE o NF-e como en el proceso ya aplicado por el warehouse. Recuerde que para el envío (ship from store) es necesario una NF-e para evitar problemas fiscales durante el transporte. Eso significa que para la recogida usted puede utilizar cupones, pero no para el envío.

__2.1. El cliente recogerá el producto en la tienda y, al mismo tiempo, se emitirá DANFE sin pasar por el PDV de la tienda. ¿Es asi?__

__Respuesta:__ Sí, el proceso se diseñó para que el pedido llegue a la tienda y se realice el pick & packing, así como la emisión de la factura, lo que permite a la tienda esperar el retiro por parte del cliente. No pasará por el punto de venta de la tienda en el momento del retiro por razones sistémicas (el punto de venta es Zanthus, que no acepta un precio diferente al de la tienda; además, el sitio web tiene una política de precios diferente). Sin embargo, existe una implicación fiscal en este proceso de impresión de la factura antes del retiro. Significa que fiscalmente el producto ya salió y ya no está en su poder. Legalmente hablando este producto ya no puede estar dentro de la tienda. La tienda necesita una licencia de régimen especial para hacerlo. Además, la emisión temprana de la factura implica la recaudación de impuestos. Si el cliente cancela la compra después de 24 horas, los impuestos recaudados no se revierten, lo que hace que sea más complejo controlarlos. Estas son variables que pueden cambiar de negocio a negocio. Recuerde que el pick-up no debe emitir un cupón mucho antes del retiro. Hay un límite de 24 horas para una factura emitida con producto aún en la tienda (esto sería un escenario de venta al descubierto).

__3. Documentación para Puntos de Retiro (Pick-up Store)?__

__Respuesta:__ [Configurar Puntos de Recogida](/es/tutorial/configurar-puntos-de-recogida-pickup-points) o [Configurar Seller White Label como punto de retirada](/es/tutorial/configurar-seller-white-label-como-punto-de-retirada-pickup-point).

__4. ¿Qué métodos de pago están disponibles para usar en InStore?__

__Respuesta:__ Simplemente acceda a nuestra documentación sobre [VTEX inStore](/es/tutorial/vtex-instore-vision-general) y busque métodos de pago compatibles.

__5. ¿Es posible registrar el vendedor que realizó la venta a través de Estante Infinito para que pueda recibir su comisión?__

__Respuesta:__ Sí, esto es posible a través del campo `código del vendedor` o si hay un login individualizado en InStore.

__6. ¿Es posible registrar/integrar una venta de PDV relacionada con una lista de regalos?__

__Respuesta:__ La inserción del ID de la lista cuando se realiza el pedido en su PDV junto con la solución Omnichannel Fulfillment es suficiente para que VTEX identifique en qué tienda física se compró el artículo de la lista y para continuar con el pedido. Lo que usted deberá definir es cómo se asignará el ID de la lista en el pedido, si es un campo que el vendedor puede escribir después de consultar el e-commerce o si usted prefiere realizar una integración en la que el PDV lea y comprenda las listas. De todos modos, esta integración no es algo que dependa de VTEX, porque tenemos APIs abiertas y usted puede decidir cómo proceder.

__7. ¿El Checkout de InStore puede utilizar el gateway de pago de VTEX?__

__Respuesta:__ Esto no es posible. Para pagos físicos usted necesitará un adquirente.
