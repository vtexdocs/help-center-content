---
title: 'Cómo funciona la integración con Buscapé'
id: 689SI30FCEGYAeiIY66yAe
status: DRAFT
createdAt: 2018-09-28T17:13:22.994Z
updatedAt: 2021-08-16T13:40:18.167Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:21:14.733Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-la-integracion-con-buscape
locale: es
legacySlug: como-funciona-la-integracion-con-buscape
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Este artículo tiene el objetivo de describir el flujo de la integración de VTEX con __Buscapé__. Explicando cómo funciona, será más fácil entender el comportamiento esperado de cada uno de los pasos:

1. [Productos](/es/tutorial/como-funciona-la-integracion-con-buscape#1-productos)
2. [Inventario](/es/tutorial/como-funciona-la-integracion-con-buscape#2-stock)
3. [Precio](/es/tutorial/como-funciona-la-integracion-con-buscape##3-precio)
4. [Promociones](/es/tutorial/como-funciona-la-integracion-con-buscape##4-promociones)
5. [Pedido](/es/tutorial/como-funciona-la-integracion-con-buscape##5-pedido)

Esta división fue pensada para facilitar el entendimiento, ya que la integración envía al Buscapé _producto_, _inventario_ y _precio_ como entidades separadas.

También es importante destacar que Buscapé trabaja de dos formas diferentes:

__Comparador de anuncios:__ en esta modalidad, Buscapé sólo redirige al usuario a su sitio, donde se realizará la compra.
__Marketplace:__ operando en esta modalidad, la venta del producto anunciado por el seller es realizada directamente por Buscapé y el pedido es integrado en VTEX.

Esto significa que algunos de los flujos citados en este artículo se aplican sólo a una de las modalidades, mientras que otros son comunes a las dos.


## 1. Productos
### Campos enviados
Para los productos que se muestran en Buscapé, la integración envía los siguientes campos de _producto_ y _SKU_:

| Producto | SKU |
| ---------- | ---------- |
| Nombre* | Nombre* |
| Descripción* | EAN |
| Categoría¹ | Peso* |
| Especificaciones | Altura* |
| - | Ancho* |
| - | Longitud* |
| - | Imágenes* |
| - | Especificaciones |
| - | Código del fabricante |

_Leyenda:_<br />
`*` Campos obligatorios.<br />
`¹` La categoría se envía en formato de breadcrumb. _Ex: Hombre > Camisas > Manga Larga_

Si el envío se realiza con éxito, el SKU pasará también por un proceso de catalogación por el equipo de Buscapé. Sólo después de eso el SKU estará disponible para la venta en el marketplace.


### Visualización del producto
Con el envío correcto y el proceso de catalogación de Buscapé concluido, todas las variaciones/SKUs de un mismo producto se muestran juntas, en una misma agrupación (siempre que se registre correctamente en VTEX).

>ℹ️ Ex: Camisa Azul (producto) | P, M, G (variaciones/SKUs)


### Actualizaciones de producto
Una vez que la integración envía por primera vez la información de producto y SKU, ellos se pueden actualizar posteriormente.

Sólo hay que hacer las modificaciones por el Admin de VTEX (o por su ERP) como normalmente lo hace. La integración envía todas las actualizaciones automáticamente: si, por ejemplo, se cambia en VTEX la descripción de un producto que se envió a Buscapé, la integración reflejará automáticamente ese cambio en el marketplace. Las imágenes también se contemplan en el proceso de actualización.


### Status del producto
Si todo ha pasado bien, los productos enviados al Buscapé pueden tener los siguientes status:

- __Activo:__ cuando el artículo está disponible para la venta;
- __Indisponible:__ cuando el ítem _no_ está disponible para la venta.

Los status de Buscapé reflejan los cambios de stock del producto en VTEX. Esto significa que mientras haya inventario, el producto estará activo en el marketplace.


## 2. Inventario
Los inventarios se envían por primera vez junto con el primer envío de productos. A partir de ahí, los inventarios de los anuncios en Buscapé se actualizan automáticamente, SKU por SKU, siempre que haya algún cambio en VTEX. La actualización tarda sólo unos segundos para reflejarse en el marketplace, pero los logs de inventario pueden tardar unos minutos en aparecer en el Admin de VTEX.

>ℹ️ Para acceder a los logs, haga clic en la sección **Integraciones** del menú lateral del Admin. Una lista de opciones se abrirá y, a continuación, usted debe hacer clic en la opción **inventario**.

## 3. Precio
Los precios se envían por primera vez junto con el primer envío de productos. A partir de ahí, los precios de los anuncios en Buscapé se actualizan automáticamente, SKU por SKU, siempre que haya algún cambio en VTEX. La actualización tarda sólo unos segundos para reflejarse en el marketplace, pero los logs de precios pueden tardar unos minutos en aparecer en el Admin de VTEX.

Sin embargo, el sistema __no__ notifica a los afiliados cuando llega la fecha final de un precio con validez. Esto significa que cuando la validez expira, la integración no actualiza el precio mostrado en Buscapé. El cambio sólo ocurrirá cuando el precio base se modifique manualmente en VTEX.

Para cada SKU, la integración envía el __precio final__ y el __precio de lista__ (también conocido como `precio de`), basado en el retorno de la simulación de checkout. Normalmente, el precio enviado es siempre el que fue determinado por la política comercial asociada a la integración. Sin embargo, __Promociones__ y __Precios fijos__ pueden influenciar el precio final.

>ℹ️ **Ejemplo 1:**
>
>
> 
> Una promoción que ofrezca un 10% de descuento para el pago en boleto.

>ℹ️ **Ejemplo 2:**
>
>
> 
> En la política comercial usada en Buscapé, un SKU tiene un precio de $ 10 y un precio fijo de $ 15. El valor que la integración envía al marketplace es de $ 15.

La integración envía precios de acuerdo con la forma de pago. Esto significa que, si hay intereses configurados para pagos parcelados, el precio enviado al Buscapé también va a tener intereses.


## 4. Promociones
Como la integración envía el __precio de lista__ del producto al marketplace, las promociones pueden ser identificadas por los usuarios de Buscapé.

En cuanto a los tipos de promoción, la integración sólo aplica las que se pueden calcular en la simulación de checkout. En estos casos, se aplican las siguientes condiciones:

| Tipo de descuento | Artículos | Condiciones |
| ---------- | ---------- | ---------- |
| Porcentaje | Categorías | Valor mín/máximo del pedido |
| Nominal | Marcas | Valor mín/máximo del artículo |
| - | Colecciones | Precio de/por |
| - | Productos | Por medio de pago¹ |

`¹` Funciona sólo en el caso de Boleto Bancario. Si se realiza una promoción basada en tarjetas de crédito, por ejemplo, no funcionará.



## 5. Pedido
### A) Haciendo el pedido
Los detalles del pedido se influencian directamente por factores como la entrega, el precio y la disponibilidad.


#### Envío
Buscapé __no__ hace simulaciones de envío en tiempo real en VTEX. El cálculo se basa en una planilla de flete, que debe ser registrada directamente en el marketplace. Para saber cómo hacerlo, póngase en contacto con el equipo de Buscapé.

El marketplace ofrece el pedido ya con el envío calculado a partir de la planilla y con el tipo de entrega elegido (en el checkout de Buscapé, es posible elegir los tipos de entrega `Normal` y `Expressa`). Estos tipos de entrega se renderizan de acuerdo con los valores registrados en su planilla de envío. De esta manera, la integración intenta encontrar al transportista que más se adecua a ese valor (el parámetro utilizado es el _[tipo de transportadora](/tutorial/como-funciona-o-tipo-de-entrega?locale=es)_), siguiendo la lógica abajo:

- Pedido con entrega `Normal` = la integración elige la transportadora con el envío más _barato_ en VTEX;
- Pedido con entrega `Expressa` = la integración elige la transportadora con el envío más _rápido_ en VTEX.

#### Precio y disponibilidad
En el momento en que se realiza el pedido, Buscapé __no consulta en tiempo real__ el precio o la disponibilidad de inventario de los productos en VTEX. El marketplace sólo considera la última información enviada sobre _precio_ y _inventario_.

### B) Integrando el pedido
Los pedidos realizados en Buscapé tienen un status propio. En la siguiente tabla están las explicaciones de cada uno de ellos y la correspondencia con el status de pedidos en VTEX.


| Status en VTEX | Status en Buscapé | Descripción del status en Buscapé |
| ---------- | ---------- | ---------- |
| Esperando la autorización para enviar | new / accept / pending | Pedido nuevo / Pendiente de aprobación del pago / Esperando medio de pago |
| Carencia para la cancelación / Listo para el manejo / Preparando entrega | approved | Pago aprobado |
| Facturado | invoiced | Factura emitida |
| Facturado | sent | Pedido enviado |
| Facturado | delivered | Pedido entregado |
| Cancelado | canceled | Pedido cancelado |


VTEX lee el feed de pedidos de Buscapé y hace la integración de aquellos que tienen status __New__, __Accept__, __Pending__ o __Approved__ en el marketplace. Los pedidos que están con cualquier otro status no se integran y no aparecen en los logs de integración de pedido (sección Integraciones en el Admin de VTEX).

Una vez que la integración ocurre, los pedidos continúan siendo tratados con el mismo ID utilizado en Buscapé.

Durante el proceso, puede que el pedido no sea integrado por algún motivo. Usted puede comprobar lo que le dio mal haciendo clic en la opción _Pedidos_, que está debajo del ítem _Integraciones_ de la sección _Marketplace_ en el menú lateral del Admin. Para resolver el problema, siga las recomendaciones para los [principales errores de integración de pedidos en Buscapé](/faq/erros-de-pedidos-no-bridge-como-resolver?locale=es#buscape) y tome la acción necesaria. __Con todo hecho, es necesario solicitar al Buscapé que envíe nuevamente el pedido a VTEX, pues no es posible reprocesarlo directamente en el panel de integraciones del Admin.__


### C) Interacción con el pedido

Una vez que el pedido se ha integrado correctamente, usted puede interactuar con él tanto por el Admin de VTEX como por el panel de administrador de Buscapé. Sin embargo, algunas acciones pueden o no aplicarse a ambos lados.

#### Acciones que se reflejan tanto en VTEX como en Buscapé:

- Cancelación de pedido en Buscapé (la integración cancela en VTEX también);
- Facturación de pedido en VTEX (la integración factura y actualiza el status del pedido en Buscapé, como se explica a continuación en el ítem `D`).

#### Acciones que no se reflejan en las dos plataformas:
- Cancelación de pedido en VTEX (la integración __no logra cancelar__ en Buscapé);
- Facturación de pedido en Buscapé (la integración __no logra facturar__ en VTEX).


### D) Facturación del pedido
Al facturar el pedido en VTEX, la integración actualiza el status en Buscapé para __invoiced__, __sent__ y, por último, __delivered__. Sin embargo, para que esto suceda, es necesario que algunos campos específicos se rellenen de acuerdo con cada status. Usted puede ver más detalles sobre el llenado de estos campos en nuestro [Guía de Integración de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

Para cambiar el status a __invoiced__ será necesario:
- `invoiceKey`,` invoiceNumber` y `issuanceDate`

Para cambiar el status a __sent__ será necesario:
- `trackingNumber` y` courier`

Para cambiar el status a __delivered__ será necesario:
- `courierStatus`: este campo puede ser populado automáticamente (a través de [actualizaciones de rastreo de las propias transportadoras](/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete?locale=es) o manualmente (a través de la API o interfaz de usuario del Orders). Cuando el campo devuelve `finished=true`, el status del pedido se declara como __delivered__ y la integración envía esa información al marketplace. Si el campo devuelve `finished=false`, el status del pedido no se cambiará a __delivered__, permaneciendo en el anterior.
