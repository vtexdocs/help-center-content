---
title: 'Marketplace in Data Pipeline'
id: 4L3hlSqsnxGqVyxmoYvjTV
status: PUBLISHED
createdAt: 2024-11-22T18:54:14.211Z
updatedAt: 2025-02-11T12:01:02.324Z
publishedAt: 2025-03-07T11:30:02.324Z
firstPublishedAt: 2024-11-22T20:13:33.475Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: marketplace-in-data-pipeline
legacySlug: marketplace-in-data-pipeline
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos `marketplace_in` contiene información histórica sobre cada vendedor de un marketplace, incluyendo su información más importante, como pedidos e inventario.
Solo la tabla `sellers_latest` incluye todos los vendedores (Sellers externos, Seller Portal y VTEX Sellers). Las demás tablas incluyen datos solo de vendedores del Seller Portal.

Esta sección incluye la siguiente información:

- [Características de los datos del Marketplace in](#caracteristicas-de-los-datos)
- [Tabla: sellers_latest](#tabla-sellers-latest)  
- [Tabla: sellers_inventory](#tabla-sellers-inventory)  
- [Tabla: sellers_pricing](#tabla-sellers-pricing)  
- [Tabla: sellers_promotions](#tabla-sellers-promotions)  
- [Tabla: sellers_orders](#tabla-sellers-orders)  
- [Tabla: sellers_orders_items](#tabla-sellers-orders-items)  
- [Tabla: sellers_orders_rateandbenefitsidentifiers](#tabla-sellers-orders-rateandbenefitsidentifiers)  
- [Análisis con Marketplace in](#analisis-con-marketplace-in)  
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)  

## Características de los Datos

| **Característica** | **Descripción** |
|:------:|:-----:|
| Fuente de Datos | Obtenidos del módulo marketplace. |
| Disponibilidad | Admin VTEX |
| Historial | El historial de datos comienza en septiembre de 2024. Los datos se conservan durante dos años a partir de 2024.|
| Intervalo Mínimo de Actualización| Una hora.|

## Tabla sellers_latest

Los campos de la tabla se describen a continuación:

|**Nombre de la Columna** | **Tipo de Columna** | **Descripción de la Columna**|
|:---: |:---: |:---:|
|pk | bigint | Clave primaria que identifica exclusivamente cada fila.|
|main_account | character varying(100) | Nombre de la cuenta principal asociada al vendedor.|
|seller_id| character varying(100) | ID del vendedor.|
|seller_name| character varying(200) | Nombre del vendedor.|
|is_better_scope | boolean | Solo relevante para vendedores whitelabel. Define si un vendedor whitelabel es integral (true) o no (false). Un vendedor integral no está limitado a una ubicación, lo que significa que si se accede a una tienda sin definir una ubicación, solo se considerarán los vendedores integrales.|
|is_active | boolean | Indica si el vendedor está activo (true) o no (false).|
|allow_hybrid_payments | boolean | Indica si los clientes pueden usar tarjetas de regalo del vendedor para comprar productos en el marketplace (true) o no (false). Si es true, identifica las compras realizadas con tarjeta de regalo para que solo se pague el precio final (con descuentos aplicados) al vendedor.|
|seller_type | character varying(25) | Determina si el vendedor es predeterminado o whitelabel.|
|trust_policy | character varying(50) | Política de confianza utilizada por el vendedor.|
|sales_channels | character varying(65535) | Canales de ventas del vendedor.|
|integration | character varying(50) | Nombre de la integración utilizada por el vendedor.|
|integration_type | character varying(25) | Las integraciones se clasifican como, VTEX Seller: El vendedor es otra cuenta VTEX.VTEX Seller Portal: El vendedor usa el Portal de Vendedores de VTEX.Vendedor Externo: El vendedor usa una conexión externa no relacionada con VTEX.No Configurado: El vendedor aún no ha configurado la integración.|
|created_at | timestamp | Fecha de creación del vendedor.|
|updated_at | timestamp | Fecha de la última actualización del vendedor.|
|batch_id | character(13) | ID del lote donde llegaron estos datos. Permite saber cuándo se entregaron estos datos.|

## Tabla sellers_inventory

Los campos de la tabla se describen a continuación:

|**Nombre de la Columna** | **Tipo de Columna** | **Descripción de la Columna**|
|:---:|:---:|:---:|
|main_account | character varying(100) | Nombre de la cuenta principal asociada al vendedor.|
|seller_id | character varying(100) | ID del vendedor.|
|seller_is_active | boolean | Indica si el vendedor está activo (true) o no (false).|
|warehouse_id | character varying(400) | ID del almacén.|
|item_id | character varying(400) | Identificador del artículo.|
|is_unlimited_quantity | boolean | Indicador booleano que indica si un SKU siempre está disponible, independientemente de su cantidad.|
|quantity| bigint | Cantidad de SKU en stock.|
|reserved_quantity | bigint | Unidades reservadas del SKU. Los pedidos para estas reservas aún no han sido aprobados para el pago.|
|last_update | timestamp | Fecha de la última actualización del inventario.|
|batch_id | character(13) | ID del lote donde llegaron estos datos. Permite saber cuándo se entregaron estos datos.|

## Tabla sellers_pricing

Los campos de la tabla se describen a continuación:

|**Nombre de la Columna**|**Tipo de Columna**|**Descripción de la Columna**|
|:---:|:---:|:---:|
|main_account|character varying(100)|Nombre de la cuenta principal asociada al vendedor.|
|seller_id|character varying(100)|ID del vendedor.|
|seller_is_active|boolean|Indica si el vendedor está activo (true) o no (false).|
|item_id|character varying(255)|Identificador del artículo.|
|list_price|double precision|Precio de lista del SKU.|
|cost_price|double precision|Precio de costo del SKU.|
|base_price|double precision|Precio base del SKU.|
|fixed_price|super|Precio fijo del SKU.|
|markup|double precision|Margen del SKU.|
|last_date|date|Fecha y hora de la última actualización del precio.|
|batch_id|character(13)|ID del lote donde llegaron estos datos. Permite saber cuándo se entregaron estos datos.|

## Tabla sellers_promotions

Los campos de la tabla se describen a continuación:

|**Nombre de la Columna**|**Tipo de Columna**|**Descripción de la Columna**|
|:---:|:---:|:---:|
|main_account|character varying(100)|Nombre de la cuenta principal asociada al vendedor.|
|seller_id|character varying(100)|ID del vendedor.|
|seller_is_active|boolean|Indica si el vendedor está activo (true) o no (false).|
|id_calculator_configuration|character varying(256)|ID de la promoción.|
|begin_date_utc|timestamp sin zona horaria|Fecha de inicio de la promoción.|
|end_date_utc|timestamp sin zona horaria|Fecha de finalización de la promoción.|
|last_modified|timestamp sin zona horaria|Fecha y hora de la última actualización de la promoción.|
|is_active|boolean|Verdadero si la promoción está activa actualmente.|
|is_archived|boolean|Verdadero si la promoción está archivada.|
|is_featured|boolean|Verdadero si la promoción está destacada.|
|offset|numeric(18,0)|El desplazamiento a aplicar a las fechas de inicio y finalización de la promoción.|
|cumulative|boolean|Determina si la promoción puede combinarse con otras promociones del mismo tipo de descuento.|
|apply_to_all_shippings|boolean|Especifica si la promoción se aplica a todos los métodos de envío o solo al más barato.|
|total_value_mode|character varying(256)|Define qué artículos se consideran para calcular el valor total del carrito.|
|item_max_price|numeric(18,0)|Configuración del precio máximo para un artículo para activar la promoción.|
|item_min_price|numeric(18,0)|Configuración del precio mínimo para un artículo para activar la promoción.|
|is_first_buy|boolean|Indica si la promoción es válida solo para la primera compra del usuario.|
|batch_id|character(13)|ID del lote donde llegaron estos datos. Permite saber cuándo se entregaron estos datos.|

## Tabla sellers_orders

Los campos de la tabla se describen a continuación:

|**Nombre de la Columna**|**Tipo de Columna**|**Descripción de la Columna**|
|:---:|:---:|:---:|
|main_account|character varying(100)|Nombre de la cuenta principal asociada al vendedor.|
|seller_id|character varying(100)|ID del vendedor.|
|seller_is_active|boolean|Indica si el vendedor está activo (true) o no (false).|
|hostname|character varying(16383)|Nombre del host relacionado con el pedido.|
|order_id|character varying(16383)|Identificador único del pedido.|
|seller_order_id|character varying(16383)|Identificador único del pedido dentro de un vendedor.|
|order_group|character varying(16383)|Grupo de pedidos al que pertenece este pedido.|
|value|double precision|Valor monetario total del pedido, incluyendo impuestos, descuentos y costos de envío.|
|is_completed|boolean|Especifica si el pedido fue completado.|
|status|character varying(16383)|Estado actual del pedido, como 'pendiente', 'enviado' o 'facturado'.|
|sales_channel|character varying(16383)|Canal de ventas a través del cual se realizó el pedido (tienda online, tienda física, etc.).|
|marketplace_name|character varying(16383)|Nombre del marketplace asociado al pedido.|
|creation_date|timestamp con zona horaria|Fecha y hora de la creación del pedido, incluyendo la zona horaria.|
|authorized_date|timestamp con zona horaria|Fecha y hora de autorización del pedido.|
|invoiced_date|timestamp con zona horaria|Fecha y hora de emisión de la factura del pedido.|
|last_change|timestamp con zona horaria|Fecha y hora de la última modificación al pedido.|
|shippingdata_address_city|character varying(65535)|Ciudad de envío del pedido.|
|shippingdata_address_state|character varying(65535)|Estado de envío del pedido.|
|shippingdata_address_country|character varying(65535)|País de envío del pedido.|

## Tabla: sellers_orders_items

La tabla *sellers_orders_items* almacena detalles de los ítems en pedidos realizados por vendedores del VTEX Seller Portal. Los campos de la tabla se describen a continuación:

|**Nombre de la Columna** | **Tipo de Columna** | **Descripción de la Columna**|
|:---:|:---:|:---:|
|item_id | character varying(65535) | Identificador único del ítem dentro del pedido. Puede asociarse con la tabla sellers_inventory para detalles adicionales.|
|product_id | character varying(65535) | Identificador del producto asociado al ítem.|
|order_id | character varying(16383) | Identificador único del pedido. Puede asociarse con las tablas de pedidos para detalles adicionales.|
|seller_id | character varying | Identificador del vendedor en `sellers_latest`.|
|main_account | character varying | Cuenta principal asociada al vendedor.|
|hostname | character varying(16383) | Nombre del host asociado al pedido, que indica el servidor o dominio que gestiona el pedido.|
|marketplace_name | character varying(16383) | Nombre del marketplace donde se realizó el pedido.|
|seller_integration_type | character varying | Tipo de integración del vendedor. En esta tabla, siempre es 'VTEX Seller Portal'.|
|seller_is_active | boolean | Indica si el vendedor está activo en este momento.|
|status | character varying(16383) | Estado actual del pedido.|
|tax | double precision | Valor de impuestos aplicado al ítem (convertido de centavos a unidades monetarias).|
|quantity | integer | Cantidad del producto en el pedido.|
|seller | character varying(65535) | Identificador o nombre del vendedor del producto conforme registrado en el pedido.|
|sellersku | character varying(65535) | SKU del producto conforme listado por el vendedor.|
|pricevaliduntil | timestamp with time zone | Fecha y hora hasta cuando el precio del producto es válido.|
|name | character varying(65535) | Nombre del producto.|
|additionalinfo_brandname | character varying(65535) | Marca del producto.|
|additionalinfo_brandid | character varying(65535) | Identificador de la marca del producto.|
|additionalinfo_categoriesid | character varying(65535) | Identificadores de categorías asociadas al producto.|
|additionalinfo_dimension_cubicweight | double precision | Peso cúbico del producto para fines de envío.|
|additionalinfo_dimension_height | double precision | Altura del producto.|
|additionalinfo_dimension_length | double precision | Longitud del producto.|
|additionalinfo_dimension_weight | double precision | Peso del producto.|
|additionalinfo_dimension_width | double precision | Ancho del producto.|
|price | double precision | Precio del producto (convertido de centavos a unidades monetarias).|
|pricetags | super | Price tags asociadas al producto, incluyendo descuentos y ofertas.|
|sellingprice | double precision | Precio de venta del producto (convertido de centavos a unidades monetarias).|
|listprice | double precision | Precio de lista del producto (convertido de centavos a unidades monetarias).|
|imageurl | character varying(65535) | URL de la imagen del producto.|
|measurementunit | character varying(65535) | Unidad de medida del producto.|
|unitmultiplier | double precision | Multiplicador de unidad del producto, usado en cálculos de precio y cantidad.|
|creationdate | timestamp with time zone | Fecha y hora de creación del pedido, incluyendo la zona horaria.|
|lastchange | timestamp with time zone | Fecha y hora de la última modificación al pedido.|
|batch_id | character varying(13) | Identificador usado cuando los datos se cargan para control de calidad de la ingestión.|
|uniqueid | character varying(65535) | Identificador único del ítem, que puede usarse para relacionar esta fila con otras tablas.|

## Tabla: sellers_orders_rateandbenefitsidentifiers

La tabla *sellers_orders_rateandbenefitsidentifiers* contiene datos sobre promociones aplicadas a pedidos de vendedores. Los campos de la tabla se describen a continuación:

|**Nombre de la Columna** | **Tipo de Columna** | **Descripción de la Columna**|
|:---:|:---:|:---:|
|orderid | character varying(16383) | Identificador único de cada pedido.|
|hostname | character varying(16383) | Nombre del host asociado al pedido, que indica el servidor o dominio que gestiona el pedido.|
|marketplace_name | character varying(16383) | Nombre del marketplace asociado al pedido.|
|creationdate | timestamp with time zone | Fecha y hora de creación del pedido, incluyendo la zona horaria.|
|lastchange | timestamp with time zone | Fecha y hora de la última modificación al pedido, reflejando el estado o contenido más reciente.|
|status | character varying(16383) | Estado actual del pedido.|
|rateandbenefitsidentifiers_id | character varying(65535) | Identificador único de los rate and benefits identifiers asociados al pedido.|
|rateandbenefitsidentifiers_name | character varying(65535) | Nombre de los rate and benefits identifiers, que identifica la promoción o recargo.|
|rateandbenefitsidentifiers_featured | boolean | Indica si los rate and benefits identifiers están destacados o tienen alguna característica especial.|
|rateandbenefitsidentifiers_description | character varying(65535) | Descripción detallada de los rate and benefits identifiers y sus beneficios.|
|batch_id | character varying(13) | Identificador usado cuando los datos se cargan en la tabla para control de calidad de la ingestión.|

## Análisis con marketplace_in

Algunos de los análisis que se pueden realizar utilizando la tabla de precios se mencionan a continuación:

- **Lista actual de vendedores:** Evaluar vendedores actualmente activos o determinar cuántos están conectados pero aún no activos.  
- **Vendedores de alto rendimiento:** Analizar los vendedores con el mayor número de pedidos y su respectivo Valor Bruto (GMV).  
- **Inventario del vendedor:** Revisar el inventario de cada vendedor activo.  

## Correlaciones con otros datos

Los datos de marketplace in están estrechamente relacionados con los datos de pedidos, lo que permite un análisis más profundo de las compras y ventas. Un ejemplo es analizar los datos de pedidos junto con esta tabla ofrece aún más valiosos conocimientos sobre los detalles de los pedidos realizados por cada vendedor.

### Descubre otros Conjuntos de datos  

- [Catálogo](/es/docs/tutorials/catalogo-data-pipeline)
- [Inventario](/es/docs/tutorials/stock-data-pipeline-beta)  
- [Navegación](/es/docs/tutorials/navegacion-data-pipeline)  
- [Pagos](/es/docs/tutorials/pagos) 
- [Pedidos](/es/docs/tutorials/pedidos-data-pipeline-beta) 
- [Precios](/es/docs/tutorials/precios-data-pipeline-beta)  
- [Promociones](/es/docs/tutorials/promociones)  
- [Tarjetas de Regalo](/es/docs/tutorials/tarjeta-de-regalo-data-pipeline)  
- [Registros del Bridge](/es/docs/tutorials/registros-del-bridge-data-pipeline)