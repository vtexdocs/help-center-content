---
title: 'Cómo funciona la integración de CNova/Via Varejo'
id: 1vFbUZUL80SQ0SoySGO8E6
status: PUBLISHED
createdAt: 2018-07-09T17:57:16.106Z
updatedAt: 2021-03-05T20:19:54.695Z
publishedAt: 2021-03-05T20:19:54.695Z
firstPublishedAt: 2018-07-09T18:32:09.384Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-la-integracion-de-cnova-via-varejo
legacySlug: como-funciona-la-integracion-de-cnova-via-varejo
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este artículo tiene como objetivo describir todo el flujo de integración con CNova/Via Varejo. De esta forma, queda más claro cómo funciona la integración y el comportamiento esperado en cada etapa. El tutorial está dividido en cinco etapas:

1. Productos.
2. Stock 
3. Precio
4. Promociones 
5. Pedido

## 1. Productos

### Campos enviados

La integración envía producto, stock y precios en entidades separadas. Una vez que los productos se envían con éxito, ya es posible encontrarlos en CNova/Via Varejo. La integración envía los siguientes campos:
<br />

| Producto     | SKU     |
| ---------- | ---------- |
|    Nombre*    | EAN       |   
| Descripción*  | Peso*       |    
|     Marca*  | Altura*       | 
| Categoría en VTEX* | Anchura* |
| Especificaciones  | Longitud* |
|     -     | Imágenes*       |      
| -       | Especificaciones |

<br />

**En asterisco los campos obligatorios.**

Al ser enviados con éxito por primera vez, CNova/Via Varejo recibe los productos y realiza un proceso de catalogación interno. Una vez que son aprobados por CNova/Via Varejo, estos __no__ permiten que ningún campo de este sea actualizado a través de VTEX. Si desea hacer alguna alteración en las informaciones del producto, es necesario alterar directamente en CNova/Via Varejo. O bien, borrar el producto en CNova/Via Varejo y rehacer todo el proceso de integración desde el principio ya con las informaciones actualizadas.

_`Ej.:` si se cambia la descripción del producto, la integración no actualizará la descripción que se encuentra en el marketplace.

En CNova/Via Varejo, los productos poseen dos estados posibles:

- __Activo:__ disponible para la venta
- __Inactivo:__ no disponible para la venta, haciendo que el producto no aparezca en el marketplace.

Allí, ellos se agrupan por un producto que posee diversas variaciones/skus.

_`Ej.:` Cafetera Negra (producto) | 127V y 220V (variaciones/skus)_.

La categoría se envía en formato de breadcrumb.

_`Ej.:` Cocina> Utensilios> Cafeteras_.

## 2. Stock

Cuando un producto se envía por primera vez, el stock también se envía. Sin embargo, es descartado por CNova/Via Varejo, pues estos solamente aceptan recibir los stocks para productos ya catalogados. Esta política existe para que el stock disponible en el marketplace sea siempre el más actualizado.

Sin embargo, cuando se hace esta aprobación, CNova/Via Varejo no notifica a VTEX de esto. Entonces, nuestra integración no tiene cómo saber cuándo podemos enviar los stocks de nuevo. De esta forma, la integración del stock depende de alguna actualización hecha directamente en Inventario y envio. 

Una vez que los productos reciben la primera carga de stock, la actualización se realiza SKU por SKU cada vez que se produce algún cambio de stock en VTEX.

## 3. Precio

Cuando un producto se envía por primera vez, también se envía el precio. Sin embargo, es descartado por CNova/Via Varejo, pues solamente se aceptan recibir los precios para productos ya catalogados. Esta política existe para que el precio disponible en el marketplace sea siempre el más actualizado.

Sin embargo, cuando se hace esta aprobación, CNova/Via Varejo  no notifica a VTEX de esto. Entonces, nuestra integración no tiene cómo saber cuándo podemos enviar los precios nuevamente. De esta forma, la integración de los precios depende de alguna actualización hecha directamente en Precios. 

Después de que los productos reciben la primera carga de precio, la actualización se realiza SKU por SKU cuando se produce alguna modificación de precios en VTEX. Sin embargo, para precios con validez, cuando la fecha expira el sistema no notifica a los afiliados. De esta forma, el precio base solamente será enviado en la próxima modificación de precios.

La integración envía los __precios de lista y el __precio final__ para cada SKU. El precio final se envía de acuerdo con el retorno de la simulación de fulfillment. En un escenario estándar, el precio enviado siempre será el determinado para la política comercial asociada a la integración. Sin embargo, existen factores que pueden influenciar en el precio final, como __promociones__ y __precios fijos__.

_`Ej.1:` promoción del 10% de descuento para una categoría determinada_.

_`Ej.2:` SKU X está R$ 10,00 en la política comercial usada en CNova/Via Varejo y tiene un precio fijo de R$ 15,00 para esta misma política. La integración enviará R$ 15,00.

<div class="alert alert-warning">
OBS: como la forma de pago se hace en el marketplace, las reglas de pago son determinadas por este. Por eso, no conseguimos enviar precios diferenciales en función de la forma de pago.
<br />
<em>Ej.: si en VTEX existen intereses configurados para pagos en cuotas, el precio enviado continuará siendo lo que la simulación de fulfillment devuelve.</em>
</div>

## 4. Promociones

Solamente se aplican promociones que se pueden calcular en la simulación de fulfillment. En este caso, se pueden aplicar las siguientes condiciones:

| Tipo de descuento | Ítem | Condiciones |
| ---------- | ---------- | ---------- |
| Porcentaje | Categorías | Valor mínimo/máximo del Pedido |
| Nominal    | Marcas      | Valor mínimo/máximo del ítem |
| Flete Nominal | Colecciones | Precio de/por |
| Flete Porcentual | Productos | Código Postal |
| Flete Máximo | - | Tipo de Flete |
| Flete Gratis | - | - |

## 5. Pedidos

### A) Haciendo el pedido

Cuando se hace un pedido en el marketplace hay algunos puntos que influyen en sus detalles, como entrega, precio y disponibilidad.

#### Entrega:

En esta integración existen dos puntos que influenciarán en la entrega: __Cálculo del Flete__ y el __Tiempo de Preparación de Envío__. La suma de los dos será el __Tiempo de Entrega Total__.

<div class="alert alert-info">
Ej.:
<br />
Flete Normal = 3 días.
<br />
Tiempo de Costo = 2 días.
<br />
Tiempo Total de Entrega = 5 días.
</div>

- __Flete__

En el momento del pedido, por estándar, CNova/Via Varejo consulta la tabla de flete registrada en VTEX y nosotros regresamos apenas una opción de flete para estos, siempre ordenando por la opción más barata. Es importante destacar que, para que sea posible realizar la consulta, es necesario registrar la [API de Flete] (https://help.vtex.com/es/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/69cLhDK7PGOqgSs2EyqMke#api-de-frete) en el panel de CNova/Via Varejo.

El comerciante tiene también la posibilidad de registrar en CNova/Via Varejo una __tabla de contingencia__. De esta forma, si por ventura la integración no consigue consultar el flete en VTEX (Ej.: inestabilidad momentánea) o la API de Flete no está registrada en el panel de estos, CNova/Via Varejo utiliza las informaciones de esta tabla. En este caso, CNova/Via Varejo nos pasa el pedido y la integración intenta hacer un *match* del flete calculado con el transportista que más se adecua dentro de VTEX (usamos el nombre del transportista elegido como parámetro). Si la integración no logra encontrar un transportista igual, nosotros integramos el pedido usando el transportista más barato disponible.

- __Tiempo de preparación de envío__

El tiempo de preparación de envío se basa en la suma del campo `Tiempo de Costo` en el Stock con el `Tiempo de Costo` en el Muelle. Y nosotros enviamos el mismo tiempo de preparación de forma masiva para todos los productos.

<div class="alert alert-info">
Ej.:
<br />
<strong>Stock A</strong>
<br />
- Muelle 1: Tiempo de Costo = 3 días.
<br />
<strong>Stock B</strong>
<br />
- Muelle 1: Tiempo de Costo = 5 días.
<br />
<br />
<strong>Muelle 1:</strong>
<br />
- Tiempo de Costo = 2 días.
 <br />
<br />
Un pedido con Tiempo de Flete = 3 días, se quedará con un Tiempo Total de Entrega diferente dependiendo de dónde salga el producto.
<br />
<br />
<strong>Saliendo del Muelle A:</strong>
<br />
- Tiempo de preparación = 3 + 2 (muelle 1) = 5 días.
<br />
- Tiempo de flete = 3 días.
<br />
- Tiempo total de entrega = 8 días.
<br />
<strong>Saliendo del Muelle B:</strong>
<br />
- Tiempo de preparación = 5 + 2 (muelle 1) = 7 días
<br />
- Tiempo de flete = 3 días.
<br />
- Tiempo total de entrega = 10 días.
</div>

<div class="alert alert-warning">
OBS: en caso de utilizar la tabla de contingencia para hacer el cálculo del flete, CNova no consulta a VTEX. De esta forma, el único factor que se tendrá en cuenta para el <strong>Tiempo Total de Entrega</strong>, será el <strong>Flete</strong> proporcionado por ellos, ignorando el <strong>Tiempo de Preparación</strong>. Se debe tener cuidado con esto, pues puede generar divergencias en el <strong>Tiempo Total de Entrega</strong>.
</div>

#### Precio y disponibilidad:

En el momento del pedido, CNova/Via Varejo no consulta el precio del producto ni si tiene stock. Se considera apenas el último precio/stock enviado.

### B) Integrando el pedido

Los pedidos en CNova/Via Varejo disponen de los propios estados. Sigue una explicación de estos comparando con los estados dentro de VTEX. [Entienda más sobre los estados de los pedidos de VTEX aquí.](http://help.vtex.com/es/tutorial/flujo-de-pedido-en-el-oms#flujo-del-pedido-del-seller)

<br />
| Estado VTEX | Estado CNova/Via Varejo | Descripción Estado CNova/Via Varejo |
| ---------- | ---------- | ---------- |
| Esperando la autorización para despachar | NEW | Nuevo pedido |
| Esperando la autorización para despachar | RAA | Riesgo de aprobación - pago pendiente |
| Esperando la autorización para despachar | PEN | Pago pendiente |
| Periodo para cancelación / Listo para preparación / Preparando entrega       | PAY | Pago aprobado|
| Facturado       | SHP       | Factura emitida + Pedido despachado       |
| Facturado       | DLV       | Pedido entregado       |
| Cancelado       | CAN       | Pedido cancelado       |

<br />

Incluso antes de integrar un pedido, CNova/Via Varejo hace la reserva del mismo ([entienda aquí cómo funciona la reserva de VTEX](https://help.vtex.com/es/tutorial/como-se-maneja-la-reserva)). Al mismo tiempo, VTEX lee un feed de pedidos en CNova/Via Varejo e integra apenas aquellos que están en los estados __NEW__ y __PAY__. Cualquier pedido que ya haya pasado de estos estados no será integrado ni aparecerá en los logs de pedido en la pestaña de Integraciones.

Los pedidos se integran con el mismo ID utilizado en CNova/Via Varejo.

Si un pedido no se integra en el primer intento, la integración hace infinitos reintentos automáticos mientras el estado del pedido está en Pay o New. [Vea más acerca de los errores conocidos de CNova/Via Varejo aquí.](https://help.vtex.com/es/faq/errores-en-bridge-como-solucionar#cnovavia-varejo)

### C) Interacción con el pedido

Una vez que el pedido está integrado, todas las acciones hechas en CNova/Via Varejo (antes del estado Facturado) que correspondan con el progreso de la solicitud se reflejan en VTEX.  CNova/Via Varejo está activa en este aspecto.

_`Ej.1:` al aprobar el pagamento en CNova/Via Varejo, el flujo sigue en VTEX._

_`Ej.2:` al cancelar el pedido en CNova/Via Varejo, se cancela en VTEX._

_`Ej.3:` al facturar un pedido en CNova/Via Varejo, este __no__ se factura en VTEX._

El único caso de interacción activa en VTEX es en el momento de facturar el pedido. Entonces, al insertar la factura y facturar el pedido en VTEX, el pedido es facturado en CNova/Via Varejo.

Sin embargo, no todas las acciones hechas en VTEX se reflejarán en CNova/Via Varejo.

_`Ej.1:` si un pedido es cancelado en VTEX, la integración no conseguirá cancelarlo en CNova/Via Varejo.


_`Ej.2:` si un pagamento no fue aprobado todavía en CNova/Via Varejo, y usted intenta forzar el progreso del flujo del pedido en VTEX, el pedido avanzará en VTEX, pero continuará en el mismo estado en CNova/Via Varejo.


### D) Facturación del pedido

Al facturar el pedido en VTEX, la integración actualiza el estado en CNova/Via Varejo a __SHP__ y posteriormente a __DLV__. Sin embargo, para que esto suceda, es necesario que algunos campos específicos se rellenen de acuerdo con cada estado. [Entienda más sobre el rellenado de estos campos aquí.](http://help.vtex.com/pt/tutorial/guia-de-integracao-de-erps-pedidos#fatura)

- Para cambiar el estado a __SHP__ será necesario:

  - `invoiceKey`,` trackingNumber`, `courier` y` CNPJ` (este campo se debe rellenar en las [configuraciones de integración] (https://help.vtex.com/pt/faq/integrando-com-viavarejo-cnova)).

- Para cambiar el estado a __DLV__ será necesario:
  - `courierStatus:` este es un campo que puede ser completado automáticamente (vía [actualizaciones de rastreo de los propios transportistas](https://help.vtex.com/es/faq/cuales-transportistas-ponen-a-disposicion-el-rastreo-de-flete)) o manualmente (vía API o interfaz de Gestión de pedidos). Cuando el campo __finished=true__ entonces el estado del pedido se declara como delivered y la integración envía esto al marketplace. Si el campo __finished=false__, el estado del pedido no cambiará a __delivered__, permaneciendo en el estado anterior.

