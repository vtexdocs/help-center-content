---
title: 'Disponibilidad de carrito Data Pipeline'
id: 1TU6rsMUlwmSoVVLs6Oom0
status: PUBLISHED
createdAt: 2025-10-29T19:55:21.659Z
updatedAt: 2025-10-29T21:24:36.539Z
publishedAt: 2025-10-29T21:24:36.539Z
firstPublishedAt: 2025-10-29T21:24:36.539Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: cart-availability-data-pipeline
legacySlug: 
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El modelo de datos de **Disponibilidad de carritos** contiene la información más reciente sobre el rendimiento de una tienda en cuanto a su métrica de disponibilidad de carrito, evaluando qué porcentaje de carritos creados están realmente disponibles para el comprador durante el checkout.

Esta sección incluye la siguiente información:
- [Características de los datos](#características-de-los-datos)  
- [Tabla: cart_availability_silver_by_sku](#tabla-cart_availability_silver_by_sku)  
- [Tabla: cart_availability_silver](#tabla-cart_availability_silver)  
- [Análisis con cart availability](#análisis-con-cart-availability)  
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)  

## Características de los datos

| Característica | Descripción |
|---|---|
| Fuente de datos | Obtenida de la información en el formulario de pedido. |
| Disponibilidad | Esta métrica solo está disponible a través del Data Pipeline. |
| Historial | El historial de datos comienza en octubre de 2025. |
| Intervalo mínimo de actualización | Una hora. |

### Tabla: cart_availability_silver_by_sku

Los campos de la tabla se describen a continuación:

| Nombre de columna | Tipo de columna | Descripción de columna |
|---|---|---|
| main_account_name | varchar(50) | La main_account en la que se creó el carrito. Esta es la main_account del marketplace en el que se está creando el pedido, no del vendedor que cumple el pedido. |
| account_name | varchar(50) | El store_name (o subcuenta) en el que se creó el carrito. Este es el store_name del marketplace en el que se crea el `order_form`, no del vendedor que cumple el pedido. |
| order_form_id | varchar(40) | Identificador único del carrito donde se están agregando los artículos. |
| updated_at | timestamp | Marca de tiempo del evento de agregar el artículo al carrito. Tenga en cuenta que: <ol> 1. Si un artículo se elimina y se agrega nuevamente al carrito, solo se considera el primer evento. </ol> <ol> 2. Es posible en algunos casos raros que se agreguen múltiples entradas del mismo artículo a un carrito (como en promociones, regalos y kits). </ol> En estos casos, solo se considera el primer evento para el artículo. |
| af_session_id | varchar(127) | ID de sesión de la aplicación Activity Flow relacionada con el carrito. |
| sales_channel | integer | Atributo utilizado por el comerciante para definir las condiciones para ofrecer un producto. También conocido como política comercial. |
| sku_id | varchar(50) | Identificador único del SKU agregado al carrito. También conocido como item_id. |
| quantity | double | Cantidad del sku agregado. |
| seller_id | varchar(50) | ID del vendedor asignado para ese artículo. |
| item_price | double | Precio del artículo. Es el precio real al que se ofreció un artículo al comprador. |
| added_price | double | Valor total de los artículos agregados al carrito. |
| postal_code | varchar(100) | Código postal proporcionado por el comprador en el carrito. |
| country | varchar(50) | País de la dirección del comprador. Código ISO de tres letras. |
| item_availability | varchar(40) | La disponibilidad del artículo. Si la disponibilidad es diferente de 'available', el artículo no está disponible. La disponibilidad se mide en el momento en que se agrega un artículo al carrito, siempre que el carrito tenga un código postal. Si se agrega un artículo antes de que el comprador haya proporcionado un código postal, la disponibilidad se calcula en el momento en que el comprador proporciona el código postal. Valores posibles: <ul> available: el artículo está disponible</ul> <ul> withoutStock: ningún vendedor tiene inventario para este artículo </ul> <ul> cannotBeDelivered: algunos vendedores tienen inventarios para este artículo, pero no hay una ruta de entrega disponible al código postal</ul> <ul> withoutPriceFulfillment: el vendedor asignado tiene un precio mal configurado para el artículo </ul> <ul> maxNumberOfSellersReached: el número total de vendedores en el carrito está por encima del parámetro maxNumberOfSellers </ul> <ul> unavailableItemFulfillment: el vendedor que cumple el artículo no devolvió una respuesta válida para el artículo </ul> |
| has_delivery_channel_delivery | boolean | Si ese artículo está disponible para entrega o no. |
| has_delivery_channel_pickup | boolean | Si ese artículo está disponible para recogida o no. |
| is_item_addition | boolean | Campo obsoleto. |
| is_item_unavailability | boolean | Campo obsoleto. |
| is_last_state | boolean | Columna auxiliar utilizada para la carga incremental. |
| batch_id | varchar(13) | Columna auxiliar utilizada para la carga incremental. |
| record_created_at | timestamp | Marca de tiempo en que se agregó la entrada a la tabla. |

### Tabla: cart_availability_silver

Los campos de la tabla se describen a continuación:

| Nombre de columna | Tipo de columna | Descripción de columna |
|---|---|---|
| main_account_name | varchar(50) | La main_account en la que se creó el carrito. Esta es la main_account del marketplace en el que se está creando el pedido, no del vendedor que cumple el pedido. |
| account_name | varchar(50) | El store_name (o subcuenta) en el que se creó el carrito. Este es el store_name del marketplace en el que se crea el `order_form`, no del vendedor que cumple el pedido. |
| order_form_id | varchar(40) | Identificador único del carrito donde se están agregando los artículos. |
| updated_at | timestamp | Marca de tiempo del evento de agregar el artículo al carrito. Tenga en cuenta que: <ol> 1. Si un artículo se elimina y se agrega nuevamente al carrito, solo se considera el primer evento.</ol> <ol> 2. Es posible en algunos casos raros que se agreguen múltiples entradas del mismo artículo a un carrito. </ol> En estos casos, solo se considera el primer evento para el artículo. |
| af_session_id | varchar(127) | ID de sesión de la aplicación Activity Flow relacionada con el carrito. |
| country | varchar(50) | País de la dirección del comprador. Código ISO de tres letras. |
| postal_code | varchar(100) | Código postal proporcionado por el comprador en el carrito. |
| sales_channel | integer | Atributo utilizado por el comerciante para definir las condiciones para ofrecer un producto. También conocido como política comercial. |
| added_price | double | El valor total de los artículos agregados a ese carrito. Es la suma del valor de todos los artículos, si se agregaron múltiples artículos. |
| cart_availability | varchar(50) | El carrito se considera "available" solo si todos los artículos en él también están available. Esta disponibilidad se verifica cuando se agrega un artículo al carrito, siempre que el comprador ya haya ingresado un código postal. Si el código postal aún no se ha ingresado, la disponibilidad se determina en el momento en que el comprador lo proporciona. Si al menos un artículo no está disponible, el carrito mismo se marca como no disponible. En ese caso, la disponibilidad del carrito coincidirá con el estado de disponibilidad del artículo no disponible, excepto cuando existan múltiples razones de no disponibilidad diferentes, entonces el estado del carrito será multipleUnavailableReasons. <br> Ejemplos: <ol> 1. Si se agregan dos artículos disponibles, el estado del carrito es available.</ol> <ol> 2. Si se agrega un artículo disponible y un artículo withoutStock, el estado del carrito es withoutStock.</ol> <ol>3. Si se agrega un artículo withoutStock y un artículo cannotBeDelivered, el estado del carrito es multipleUnavailableReasons. </ol> <ul> Valores posibles: - available: todos los artículos están disponibles. - withoutStock: ningún vendedor tiene inventario para este artículo. - cannotBeDelivered: algunos vendedores tienen inventario para el artículo, pero no hay ruta de entrega disponible para el código postal. - withoutPriceFulfillment: el vendedor asignado tiene un precio mal configurado para el artículo.  - maxNumberOfSellersReached: el número de vendedores en el carrito excede el máximo permitido. - unavailableItemFulfillment: el vendedor que cumple el artículo no devolvió una respuesta válida. - multipleUnavailableReasons: se aplica más de una razón de no disponibilidad diferente al mismo tiempo. <br> |
| delivery_channel | varchar(33) | Los canales de entrega disponibles para el carrito se determinan considerando las opciones de entrega de todos los artículos en él. <br> Ejemplo: <ul>Si el Artículo 1 está disponible solo para pickup-in-point, y el Artículo 2 está disponible tanto para pickup-in-point como para delivery, entonces el canal de entrega del carrito se establece en delivery. </ul></br>  Opciones posibles: <ul>- both-delivery-and-pickup-in-point: todos los artículos pueden ser entregados o recogidos en un punto de recogida.</ul> <ul>- delivery: la entrega es la única opción disponible para el carrito.</ul> <ul>- not-delivered: no hay canal de entrega disponible, lo que significa que el carrito no está disponible.</ul> <ul>- pickup-in-point: pickup-in-point es la única opción disponible para el carrito.</ul> <ul>- mixed-channel-only: algunos artículos solo pueden ser entregados, mientras que otros solo pueden ser recogidos en un punto de recogida.</ul> |
| has_item_unavailability | boolean | Campo obsoleto. |
| has_item_addition | boolean | Campo obsoleto. |
| is_single_item_simulation | boolean | Booleano que identifica si el carrito tiene solo un artículo o no. |
| batch_id | varchar(13) | Columna auxiliar utilizada para la carga incremental. |
| record_created_at | timestamp | Marca de tiempo en que se agregó la entrada a la tabla. |

### Análisis con cart availability

Estos son algunos análisis que puede realizar utilizando las tablas de cart availability:

- **Medir tasas de éxito del carrito**: Calcule el porcentaje de carritos creados que permanecen completamente disponibles durante el checkout, segmentados por tienda, canal de ventas o geografía.  
- **Identificar patrones de no disponibilidad**: Realice un seguimiento de qué SKUs, categorías o vendedores (incluidos los Vendedores Externos) causan con mayor frecuencia que los carritos no estén disponibles, y cuantifique el impacto financiero de esas fallas.  
- **Evaluar restricciones de entrega**: Compare con qué frecuencia las restricciones del canal de entrega (por ejemplo, solo pickup-in-point disponible) contribuyen al abandono, y analice las diferencias entre códigos postales.  
- **Monitorear errores de precio y configuración**: Detecte cuándo precios mal configurados o problemas de cumplimiento están haciendo que los productos no estén disponibles sistemáticamente, permitiendo una remediación más rápida.  
- **Comparar tendencias estacionales**: Compare las tasas de disponibilidad del carrito durante períodos de compras pico (por ejemplo, Black Friday) con las operaciones normales para anticipar puntos de presión.  

### Correlaciones con otros datos

La disponibilidad del carrito también se vuelve más poderosa cuando se combina con otras fuentes de datos:

- **Con Inventario**: Vincular la disponibilidad del carrito con datos de stock en vivo le permite identificar con qué frecuencia los carritos fallan debido a situaciones de falta de stock y cuantificar las ventas potenciales perdidas.  
- **Con Pedidos**: Al comparar los carritos no disponibles con los pedidos exitosos, puede estimar cuántos ingresos se pierden porque los carritos no pudieron cumplirse. Esto también ayuda a identificar vendedores o regiones que tienen un rendimiento inferior.  
- **Con Navegación**: Al correlacionar las rutas de navegación con los resultados del carrito, puede comprender si ciertos recorridos de usuario son más propensos a terminar en carritos no disponibles, lo cual es crucial para la optimización del embudo.  

