---
title: '¿Cómo funciona la integración de Netshoes?'
id: 4WnhtMXAw0EgmEwiqgaOIu
status: PUBLISHED
createdAt: 2018-07-09T13:24:54.048Z
updatedAt: 2021-02-01T17:26:34.657Z
publishedAt: 2021-02-01T17:26:34.657Z
firstPublishedAt: 2018-07-09T14:27:03.889Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: como-funciona-a-integracao-da-netshoes
locale: es
legacySlug: como-funciona-a-integracao-da-netshoes
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Este artículo tiene como objetivo describir todo el flujo de la integración con Netshoes. De esta forma, quedará más claro cómo funciona la integración y el comportamiento esperado en cada etapa. El tutorial está dividido en cinco etapas:

1. Flujo de Productos
2. Inventario
3. Precios
4. Promociones
5. Flujo de pedidos

## 1 - Flujo de Productos

La integración envía producto, inventario y precios en entidades separadas. Una vez que los productos se envían con éxito, ya es posible encontrarlos en Netshoes. La integración envía los siguientes campos:
<br />

| Producto | SKU |
| ---------- | ---------- |
| Nombre* | EAN |
| Descripción* | Peso* |
| Especificaciones¹ | Altura* |
| - | Ancho* |
| - | Longitud* |
| - | Imágenes* |
| - | Especificaciones¹ |

<br />

**Con asterisco están los campos obligatorios.*

*¹ Algunas especificaciones son obligatorias. Para saber más, [haga clic aquí](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc#otras-especificaciones). *

Las especificaciones se envían si están conforme los valores esperados por Netshoes. Es decir, al enviar un producto, la integración explora sus especificaciones y, si encuentra alguna que coincida con el valor esperado por la categoría del producto en Netshoes, envía la especificación. Si la especificación no tiene el valor esperado, la integración no la envía.

_`Ej:` para una camisa que tenga la especificación "Material" registrada, la integración enviará los valores usados en ella._

_`Ej:` Material - Algodón_

Al ser enviados con éxito por primera vez, Netshoes recibe los productos y realiza un proceso de catalogación interno. Una vez que son aprobados por Netshoes, la integración __no actualiza__ la información de producto porque esto eliminaría las que ya se han registrado. Si desea hacer algún cambio en la información del producto, usted debe cambiar directamente en Netshoes.

_`Ej:` si se cambia la descripción del producto, la integración no actualizará la descripción que se encuentra en el marketplace._

>⚠️ Nota: el producto no se puede borrar en el panel de Netshoes, porque así no podría ser enviado por la integración de nuevo.

En Netshoes, los productos tienen dos status posibles:
- __Activo:__ disponible para la venta
- __Inactivo:__ no disponible para la venta, haciendo que el producto no aparezca en el marketplace.

Allí ellos se agrupan por un producto que tiene diversas variaciones/SKUs.

_`Ej:` Camisa Azul (producto) | P, M, G (variaciones/SKUs)_

La categoría se envía de acuerdo con el Departamento rellenado en la [planilla de mapeo](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc).

## 2 - Inventario

Netshoes sólo acepta recibir los inventarios para productos que ya se han enviado con éxito. Antes de esto, los envíos de inventario son rechazados. 

Una vez que el proceso de catalogación es finalizado en Netshoes, la integración envía automáticamente los inventarios de los productos, siempre que la __API de Notificación de Productos Aprobados__ esté configurada ([sepa más aquí](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#api-de-notificacion-de-productos-aprobados).

Una vez que los productos reciben la primera carga de inventario, la actualización se realiza SKU por SKU cada vez que se produce algún cambio de stock en VTEX.

>⚠️ **Nota:** los datos de inventario enviados a Netshoes quedan registrados en nuestro sistema por sólo **3 meses**.

## 3 - Precios

Netshoes sólo acepta recibir precios para productos que ya se han enviado con éxito. Antes de esto, los envíos de precio son rechazados. 

Una vez que el proceso de catalogación es finalizado en Netshoes, la integración envía automáticamente los precios de los productos, siempre que la __API de Notificación de Productos Aprobados__ esté configurada.

Después de que los productos reciben la primera carga de precio, la actualización se realiza SKU por SKU cuando se produce alguna modificación de precios en VTEX. Sin embargo, para los precios con validez, cuando la fecha expira el sistema no notifica a los afiliados. De esta forma, el precio base sólo será enviado en la próxima modificación de precios.

La integración envía los __precios de lista__ y el __precio final__ para cada SKU. El precio final se envía de acuerdo con el retorno de la simulación de fulfillment. En un escenario estándar, el precio enviado siempre será el indicado para la política comercial asociada a la integración. Sin embargo, existen factores que pueden influir en el precio final, como __promociones__ y __precios fijos__.

_`Ej1:` promoción del 10% de descuento para una categoría determinada_

_`Ej2:` SKU X está con precio de $ 10,00 en la política comercial usada en Netshoes y tiene un precio fijo de $ 15,00 para esa misma política. La integración enviará el precio de $ 15,00._

>⚠️ Nota: Como la forma de pago se hace en el marketplace, las reglas de pago son determinadas por él. Por eso, no conseguimos enviar precios diferenciados en función de la forma de pago.
>
>
> 
> *Ej: si en VTEX existen intereses configurados para pagos parcelados, el precio enviado todavía será lo que la simulación de fulfillment devuelve.*

## 4 - Promociones

Sólo se aplican promociones que se pueden calcular en la simulación de fulfillment. En este caso, se pueden aplicar las siguientes condiciones:

| Tipo de descuento | Artículos | Condiciones |
| ---------- | ---------- | ---------- |
| Porcentaje | Categorías | Valor mínimo/máximo del Pedido |
| Nominal | Marcas | Valor mínino/máximo del Artículo |
| Envío Nominal | Colecciones | Precio de/por |
| Envío Percentual | productos | Código postal |
| Envío Máximo | - | Tipo de Envío |
| Envío Gratis | - | - |

>ℹ️ No es posible aplicar **ninguna condición** en las promociones cuyos campos se completaron como **-**, es decir, no se contemplará ninguna condición en la integración.

## 5 - Flujo de Pedidos

### 1 - Haciendo el pedido

Cuando un pedido se hace en el marketplace hay algunos puntos que influencian en sus detalles, como entrega, precio y disponibilidad.

#### Entrega:

En esta integración existen dos puntos que influenciarán en la entrega: __Cálculo del envío__ y el __Tiempo de Preparación de Envío__. La suma de los dos será el __Tiempo de Entrega Total__.

>ℹ️ Ej:
>
>
> 
> Envío normal = 3 días
>
>
> 
> Tiempo de Costo = 2 días
>
>
> 
> Tiempo Total de Entrega = 5 días

- __Envío__

En el momento del pedido, de forma predeterminada, Netshoes consulta la tabla de flete registrada en VTEX y nosotros les devolvemos las opciones de flete. Es importante destacar que para que sea posible realizar la consulta, es necesario registrar la [API de envío](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#api-de-flete) en el panel de Netshoes.

La tienda tiene también la posibilidad de registrar en Netshoes una __tabela de contingencia__. De esta forma, si por alguna casualidad la integración no consigue consultar el envío en VTEX o la API de Envío no está registrada en su panel, Netshoes utiliza las informaciones de esta tabla. En este caso, Netshoes nos envía el pedido y la integración intenta hacer un *match* del envío calculado con la transportista que más se adecua en VTEX (usamos el __tipo__ de transportista como parámetro). 

Si la integración no puede encontrar un tipo de transportista igual, nosotros integramos el pedido usando la transportista más barata disponible.

- __Tiempo de preparación de envío__

El tiempo de preparación de envío se basa en la suma del campo `Tiempo de coste` en el Inventario con el `Tiempo de Coste` en el muelle. Y enviamos el mismo tiempo de preparación de forma masiva para todos los productos.

>ℹ️ Ej:
>
>
> 
> **Inventario A**
>
>
> 
> - Muelle 1: Tiempo de Costo = 3 días
>
>
> 
> **Inventario B**
>
>
> 
> - Muelle 1: Tiempo de Costo = 5 días
>
>
> 
>
>
> 
> **Muelle 1:**
>
>
> 
> - Tiempo de Costo = 2 días
>
>
> 
>
>
> 
> Un pedido con tiempo de envío = 3 días se quedará con un total de entrega diferente dependiendo de dónde salga el producto.
>
>
> 
>
>
> 
> **Saliendo del inventario A:**
>
>
> 
> - Tiempo de preparación = 3 + 2 (muelle 1) = 5 días
>
>
> 
> - Tiempo de envío = 3 días
>
>
> 
> - Tiempo total de entrega = 8 días
>
>
> 
> **Saliendo del inventario B:**
>
>
> 
> - Tiempo de preparación = 5 + 2 (muelle 1) = 7 días
>
>
> 
> - Tiempo de envío = 3 días
>
>
> 
> - Tiempo total de entrega = 10 días

>⚠️ Nota: En el caso de usar la tabla de contingencia para hacer el cálculo del envío, Netshoes no consulta a VTEX. De esta forma, el único factor que se tendrá en cuenta para el **Tiempo total de entrega** será el **envío** proporcionado por ellos, ignorando el **Tiempo de preparación**. Se debe tener cuidado con esto, porque puede generar divergencias en el **Tiempo total de entrega**.

#### Precio/Disponibilidad:

En el momento del pedido, Netshoes no consulta el precio del producto y tampoco si tiene stock. Se considera sólo el último precio/stock enviado.

### 2º - Integrando el pedido

Los pedidos en Netshoes disponen de los propios estatus. Sigue una explicación de ellos comparando con los estatus dentro de VTEX. [Entienda más sobre el status de los pedidos de VTEX aquí.](/es/tutorial/flujo-de-pedido-en-el-oms#flujo-del-pedido-del-seller)
<br />

| Status VTEX | Status Netshoes | Descripción del status Netshoes |
| ---------- | ---------- | ---------- |
| Esperando la autorización para despachar | Created | Pedido nuevo en que el pago no ha sido aprobado todavía |
| Carencia para cancelación / Listo para el manejo / Preparando entrega | Approved | Pago aprobado |
| Facturado | Invoiced | Nota fiscal emitida |
| Facturado | Shipped | Pedido despachado |
| Facturado | Delivered | Pedido entregado |
| Cancelado | Canceled | Pedido cancelado |

<br />

Netshoes notifica a VTEX a través de la __API de Importación de Pedidos__ [(configure ahora esta API!)](https://help.vtex.com/es/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/4XEVWU4XIQimY4swYuaOoE#api-de-importacion-de-pedidos) cada vez que un pedido se realiza en su plataforma, y entonces intentamos integrarlo. 

Aunque la API no está registrada, VTEX lee un feed de pedidos en Netshoes para asegurarse de que no haya pedidos perdidos! Pero de todas maneras sugerimos que la API sea catastrada, pues garantiza mucho más rapidez para integrar los pedidos, reduciendo posibilidades de ruptura en el stock.

Integramos sólo aquellos que están en los status __Created__ y __Approved__ (sea un pedido normal o pedido de cambio). Cualquier pedido que ya haya pasado de este status no será integrado ni aparecerá en los registros de integración de pedidos.

Los pedidos se integran con el mismo ID utilizado en Netshoes. Las solicitudes de cambio tendrán su ID complementado con un `"T"` al final.

_`Ej:` pedido orignial - 6704259 | solicitud de cambio - 6704259T_

Si un pedido no se integra en el primer intento, hay un retry automático para errores no conocidos por la integración o temporales (throttling, servicios no disponibles 503, entre otros). Si es un error que se conoce, como divergencia en el valor del pedido, errores de SLA, etc., la integración no hace retry. 

Para que los pedidos con estos errores sean integrados, será necesario hacer alguna acción ([ver más sobre errores conocidos de Netshoes aquí](/es/faq/errores-en-bridge-como-solucionar#netshoes)).

### 3º - Interacciones en el pedido

Una vez que el pedido está integrado, algunas interacciones, en el panel de VTEX o en la propia Netshoes, serán aplicadas de los dos lados. Esto vale para:

- Cancelar un pedido en Netshoes - la integración cancela el pedido en VTEX
- Facturación de un pedido en VTEX - la integración facturará y actualizará el status del pedido en Netshoes (como explica el tema 5.4)

Sin embargo, otras acciones tomadas no se reflejan entre las plataformas:
- Cancelar un pedido en VTEX - la integración no cancela el pedido en Netshoes
- Facturación del pedido en Netshoes - la integración no le factura en VTEX

### 4º - Facturación del pedido

Al facturar el pedido en VTEX, la integración actualiza el status en Netshoes a __invoiced__, __shipped__ y, por último, __delivered__. Sin embargo, para que esto suceda, es necesario que algunos campos específicos se rellenen de acuerdo con cada status. [Entenda más sobre el llenado de estos campos aquí](https://developers.vtex.com/vtex-developer-docs/docs/erp-integration-guide).

- Para cambiar el status a __invoiced__ será necesario:
  - `invoiceKey`, `invoiceNumber` y `issuanceDate`

- Para cambiar el status a __shipped__ será necesario:
  - `trackingNumber`, `trackingUrl` y `courier`

- Para cambiar el status a __delivered__ será necesario:
  - `courierStatus`: este es un campo que puede ser populado automáticamente (vía [actualizaciones de rastreo de los propios transportistas](https://help.vtex.com/es/tutorial/quais-transportadoras-disponibilizam-o-rastreio-de-frete)) o manualmente (vía API o interfaz del OMS).
