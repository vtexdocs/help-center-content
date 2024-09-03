---
title: 'Cómo funciona la integración con Carrefour'
id: UbtveAQnoQGKOkQIYG0uQ
status: PUBLISHED
createdAt: 2018-09-26T13:35:41.191Z
updatedAt: 2023-09-22T20:09:43.231Z
publishedAt: 2023-09-22T20:09:43.231Z
firstPublishedAt: 2018-10-11T20:58:12.080Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slug: como-funciona-la-integracion-de-carrefour
locale: es
legacySlug: como-funciona-la-integracion-con-carrefour
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Este artículo tiene el objetivo de describir el flujo de la integración del __Carrefour__ con VTEX. Explicando cómo funciona, es más fácil entender el comportamiento esperado de cada uno de los pasos:

1. [Productos](#1-productos)
2. [Inventario](#2-stock)
3. [Precio](#3-precio)
4. [Promociones](#4-promociones)
5. [Pedido](#5-pedido)

## 1. Productos

### Envío de productos
El envío de productos se realiza de forma automática, aproximadamente 8 horas después de que se haya realizado con éxito la [configuración de la integración](https://help.vtex.com/es/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2). Para ello, se basa en la política comercial registrada y envía la primera carga de productos.

Los campos de producto y SKU se envían juntos, en un lote separado del lote de ofertas (que reúne información de precio y inventario de los SKUs). Los dos lotes pueden subir al mismo tiempo y el sistema de Carrefour hace la validación.

### Campos enviados
Para que los productos se muestren en Carrefour, la integración envía los siguientes campos de _producto_ y _SKU_:

| Producto | SKU |
| ---------- | ---------- |
| Nombre* | Nombre* |
| Descripción* | EAN* |
| Marca (dependiendo de la elección en la configuración de la integración, la información se agregará en el título del producto) | Peso* |
| Especificaciones | Altura* |
| - | Ancho* |
| - | Longitud* |
| - | Imágenes* (hay límite de 5 imágenes por SKU) |
| - | Especificaciones |

_Leyenda: _
`*` Campos obligatorios.<br />

>⚠️ Carrefour no acepta productos con variación (más de uno SKU).

### Visualización del producto
Una vez que los lotes de producto y oferta se envían con éxito y validados por Carrefour, todas las variaciones / SKU de un mismo producto se muestran juntas en una misma agrupación.

>ℹ️ Ex: Camisa Azul (producto) | P, M, G (variaciones/SKUs)

### Status del producto
Con todos los productos procesados correctamente y catalogados por Carrefour, sus ofertas pueden tener los siguientes status:

- __Activo:__ disponible para la venta;
- __Inactivo:__ no disponible para la venta (cuando el producto se queda sin inventario), pero sigue apareciendo en los resultados de búsqueda.

### Actualizaciones de producto
Al ser enviados con éxito por primera vez, los productos pasan por un proceso de catalogación interno del Carrefour. Con todo hecho correctamente, la integración no actualiza las informaciones de producto, para no deshacer las que ya han sido registradas.

Por ejemplo, si se cambia la descripción del producto, la integración no se actualizará en el marketplace. Para hacer algún tipo de cambio, usted necesitará entrar en contacto directo con Carrefour.

>⚠️ El producto no se puede borrar en el panel de Carrefour. Si esto ocurre, la integración no podrá enviarlo de nuevo.

## 2. Inventario
Cuando un producto se envía por primera vez, el inventario también se envía. Sin embargo, es descartado por Carrefour, porque el marketplace sólo acepta recibir los inventarios para productos ya catalogados. Esta política existe para que el inventario disponible en el marketplace sea siempre el más actualizado.

Sin embargo, cuando se completa la catalogación, Carrefour no notifica a VTEX. Esto significa que nuestra integración no tiene como saber cuándo es posible enviar los inventarios nuevamente, dependiendo de las actualizaciones realizadas directamente en Inventario y envío (módulo de VTEX). En el momento en que Carrefour confirme la catalogación de sus productos, el marketplace solicitará a VTEX el envío de los inventarios. Pero usted puede forzar el envío de esa información, bastando, para ello, hacer un cambio cualquiera de inventario en cada uno de sus SKUs.

Una vez que los productos reciben la primera carga de inventario, la actualización se realiza SKU por SKU cada vez que el inventario en VTEX sufre algún cambio. Esta actualización se envía en lotes de 6 en 6 minutos. Esto significa que la integración acumula todas las actualizaciones de su tienda durante 6 minutos y lo manda todo a la vez. Si la actualización de inventario tarda más de lo esperado, es probable que haya mucha información en la cola para que se actualice.

## 3. Precio
Cuando un producto se envía por primera vez, el precio también se envía. Sin embargo, es descartado por Carrefour, porque el marketplace sólo acepta recibir precios de productos que ya han sido catalogados. Esta política existe para que el precio disponible en el marketplace sea siempre el más actualizado.

Sin embargo, Carrefour no notifica a VTEX cuando todo ha sido aprobado. Esto significa que nuestra integración no tiene como saber cuándo es posible enviar los precios nuevamente, quedando dependiente de las actualizaciones hechas directamente en el Precios (módulo de VTEX). En el momento en que Carrefour confirme la catalogación de sus productos, el marketplace va a solicitar a VTEX el envío de los precios. Pero usted puede forzar el envío de esa información, bastando, para ello, hacer un cambio cualquiera de precio en cada uno de sus SKUs.

Después de que los productos reciben la primera carga de precio, la actualización se hace SKU por SKU siempre que los precios en VTEX sufren algún cambio. Esta actualización se envía en lotes de 6 en 6 minutos. Esto significa que la integración acumula todas las actualizaciones de su tienda durante 6 minutos y envia todo a la vez. Si la actualización de precios tarda más de lo esperado, es probable que haya mucha información en la cola para que se actualice.

>⚠️ Tenga en cuenta que, para los precios con validez, el sistema no notifica a los afiliados cuando la fecha expira. Así, el precio base sólo será enviado en la próxima modificación de precios.

Para cada SKU, la integración envía sólo el precio final, basado en el retorno de la simulación de fulfillment. En un escenario estándar, el precio enviado va a ser siempre el determinado para la política comercial asociada a la integración. Sin embargo, existen factores que pueden influir en el precio final, como promociones y precios fijos.

_`Ejemplo 1:` una promoción que ofrece un 10% de descuento para una determinada categoría_

_`Ejemplo 2:` En la política comercial utilizada en Carrefour, un SKU tiene un precio de $ 10 y un precio fijo de $ 15. El valor que la integración envía al marketplace es $ 15._

>⚠️ **Atención:** como la forma de pago se da en el marketplace, las reglas de pago también se determinan por él. A causa de ello, la integración no consigue enviar precios diferenciados de acuerdo con la forma de pago.
> <br/ >
> *Ejemplo: si en VTEX está configurada la incidencia de interés para pagos parcelados, el precio enviado seguirá siendo el que fue devuelto por la simulación de fulfillment.*

## 4. Promociones
A diferencia de una promoción que se utiliza para el sitio web de su tienda, una promoción para el marketplace sólo descuenta el valor del producto, pero sin indicar que es una promoción. Es decir, el precio enviado ya está modificado y no hay un sello de promoción.

La integración de VTEX con Carrefour sólo aplica las promociones que se pueden calcular en la simulación de fulfillment. En estos casos, se aplican las siguientes condiciones:

| Tipo de descuento | Artículos | Condiciones |
| ---------- | ---------- | ---------- |
| Porcentual | Categorías | Valor mín/máx del pedido |
| Nominal | Marcas | Valor mín/máx del artículo |
| Envío Nominal | Colecciones | Precio de/por |
| Envío Porcentual | Productos | Código postal |
| Envío Máximo | - | Tipo de Envío |
| Envío Gratis | - | - |

## 5. Pedido
### 5.1 - Haciendo el pedido
Los detalles del pedido se influencian directamente por factores como la entrega, el precio y la disponibilidad.

#### Envío
Carrefour consulta, en el momento del pedido, la tabla de envío registrada en VTEX. Nuestra plataforma devuelve para ellos las opciones de envío disponibles, de acuerdo con el mapeo informado en la configuración de la integración. Es importante tener en cuenta que la consulta sólo es posible si la API de Envío está registrada en el panel del Carrefour.

>⚠️ NOTA: Si ninguno de los campos del mapeo se rellena correctamente, no será posible simular el envío en VTEX. En consecuencia, los pedidos de Carrefour no se integrarán.

Si la API de envío no está registrada, Carrefour utilizará una __tabla de contingencia__ para realizar el cálculo. En este caso, Carrefour envía la información del pedido y la integración intenta hacer un _match_ del envío calculado con el transportista que más se adecua dentro de VTEX (usamos el __tipo__ de transportista como parámetro). Si no hay una coincidencia, habrá un error en la integración del pedido. Para solucionarlo, usted tendrá que hacer primero el mapeo y, a continuación, volver a procesar el pedido.

#### Precio/Disponibilidad:
En el momento en que se hace el pedido, Carrefour no consulta en tiempo real el precio o la disponibilidad en inventario de los productos en VTEX. El marketplace sólo considera la última información enviada sobre _precio_ y _inventario_.

### 5.2 - Integrando el pedido
Los pedidos realizados en Carrefour tienen un status propio. En la siguiente tabla se explica cada uno de ellos y la correspondencia con el status de los pedidos en VTEX.

| Status en VTEX | Status en Carrefour | Descripción del status en Carrefour |
| ---------- | ---------- | ---------- |
| Esperando la autorización para enviar | STAGING | Pedido nuevo en que el pago no ha sido aprobado todavía |
| Carencia para la cancelación / Listo para el manejo / Preparando entrega | SHIPPING | Pago Aprobado |
| Facturado | SHIPPED / CLOSED | Nota fiscal emitida |
| Facturado | SHIPPED / CLOSED | Pedido enviado |
| Facturado | No tiene status | Pedido entregado |
| Cancelado | Canceled | Pedido cancelado |

VTEX lee el feed de pedidos de Carrefour y hace la integración de aquellos que están con status __Staging__ en el marketplace. Los pedidos que están con cualquier otro status __no se integran__ y __no aparecen en los logs__ de integración de pedido (sección Integraciones en el Admin de VTEX).

Durante el proceso, puede que el pedido no sea integrado por algún motivo. Usted puede comprobar lo que ha estado mal haciendo clic en la opción _Pedidos_, que está debajo del ítem _Integraciones_ de la sección _Marketplace_ en el menú lateral del Admin. Para resolver el problema, descubra qué se debe hacer en cada uno de los [principales errores de integración de pedidos con Carrefour](/es/faq/erros-de-pedidos-no-bridge-como-resolver--3LmQY3zPfiMYy4m2M0Ak2y#carrefour) y tome la acción necesaria. Con todo hecho, basta reprocesar el pedido.

Una vez que la integración ocurre, los pedidos continúan siendo tratados con el mismo ID utilizado en Carrefour.

>⚠️ Pedidos con algún tipo de incidente no serán integrados. En caso de que el incidente ocurra después de la integración del pedido, un aviso se mostrará en la pestaña de rastreo en el Admin de VTEX.

### 5.3 Interacción del pedido
Una vez que el pedido se ha integrado correctamente, usted puede interactuar con él tanto por el Admin de VTEX como por el panel de administrador de Carrefour. Sin embargo, algunas acciones pueden o no aplicarse a ambos lados.

#### Acciones que se reflejan tanto en VTEX como en Carrefour:
- Cancelación de pedido en Carrefour (la integración cancela en VTEX también);
- Facturación de pedido en VTEX (la integración factura y actualiza el status del pedido en Carrefour, como se explica en el ítem `D`).

#### Acciones que no se reflejan en las dos plataformas:
- Cancelación de pedido en VTEX (la integración __no logra cancelar__ en Carrefour);
- Facturación de pedido en Carrefour (la integración __no logra facturarlo__ también en VTEX).

### 5.4 Facturación del pedido
Cuando un pedido que viene de Carrefour se factura en VTEX, la integración actualiza el status en el marketplace a __Shipped__ y, por último, incluye un campo que corresponde a `pedido entregado`. Pero, para que esto ocurra, campos específicos deben llenarse. Usted puede ver más detalles sobre el llenado de estos campos en nuestro [Guía de Integración de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

__1-__ Para cambiar el status a __Shipped__, será necesario:
`invoiceKey`, `invoiceNumber`, `trackingUrl`, `trackingNumber`, `courier`, `issuanceDate`.

__2-__ Para cambiar el pedido con la información de __entregado al cliente__, será necesario:
`courierStatus`: ese campo puede ser populado de modo automático (vía [actualizaciones de rastreo de las propias transportadoras](/es/faq/quais-transportadoras-disponibilizam-o-rastreio-de-frete)) o manual, vía API o interfaz del Pedidos (en Gestión de pedidos). Cuando el campo devuelve `finished=true`, la integración envía la información al marketplace. Si el campo devuelve `finished=false`, el pedido no se cambia con la información de envío.
