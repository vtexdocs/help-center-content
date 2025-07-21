---
title: 'Marketplace in Data Pipeline'
id: 4L3hlSqsnxGqVyxmoYvjTV
status: PUBLISHED
createdAt: 2024-11-22T18:54:14.211Z
updatedAt: 2025-03-07T11:30:02.324Z
publishedAt: 2025-03-07T11:30:02.324Z
firstPublishedAt: 2024-11-22T20:13:33.475Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: marketplace-in-data-pipeline
locale: es
legacySlug: marketplace-in-data-pipeline
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos `marketplace_in` contiene información histórica sobre cada vendedor de un marketplace, incluyendo su información más importante, como pedidos e inventario.

Esta sección incluye la siguiente información:

- [Características de los datos del Marketplace in](#caracteristicas-de-los-datos)
- [Tabla: sellers_latest](#tabla-sellers-latest)  
- [Tabla: sellers_inventory](#tabla-sellers-inventory)  
- [Tabla: sellers_pricing](#tabla-sellers-pricing)  
- [Tabla: sellers_orders](#tabla-sellers-orders)  
- [Análisis con Marketplace in](#analisis-con-marketplace-in)  
- [Correlaciones con otros datos](#correlacioines-con-otros-datos)  

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
|integration_type | character varying(25) | Las integraciones se clasifican como, <p>VTEX Seller: El vendedor es otra cuenta VTEX.</p><p>VTEX Seller Portal: El vendedor usa el Portal de Vendedores de VTEX.</p><p>Vendedor Externo: El vendedor usa una conexión externa no relacionada con VTEX.</p><p>No Configurado: El vendedor aún no ha configurado la integración.</p>|
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
|creation_date|timestamp con zona horaria|Fecha y hora de la creación del pedido, incluyendo la zona horaria.|
|authorized_date|timestamp con zona horaria|Fecha y hora de autorización del pedido.|
|invoiced_date|timestamp con zona horaria|Fecha y hora de emisión de la factura del pedido.|
|last_change|timestamp con zona horaria|Fecha y hora de la última modificación al pedido.|
|shippingdata_address_city|character varying(65535)|Ciudad de envío del pedido.|
|shippingdata_address_state|character varying(65535)|Estado de envío del pedido.|
|shippingdata_address_country|character varying(65535)|País de envío del pedido.|

## Análisis con marketplace_in

Algunos de los análisis que se pueden realizar utilizando la tabla de precios se mencionan a continuación:

- **Lista actual de vendedores:** Evaluar vendedores actualmente activos o determinar cuántos están conectados pero aún no activos.  
- **Vendedores de alto rendimiento:** Analizar los vendedores con el mayor número de pedidos y su respectivo Valor Bruto (GMV).  
- **Inventario del vendedor:** Revisar el inventario de cada vendedor activo.  

## Correlaciones con otros datos

Los datos de marketplace in están estrechamente relacionados con los datos de pedidos, lo que permite un análisis más profundo de las compras y ventas. Un ejemplo es analizar los datos de pedidos junto con esta tabla ofrece aún más valiosos conocimientos sobre los detalles de los pedidos realizados por cada vendedor.

### Descubre otros Conjuntos de datos  

- [Catálogo](/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventario](/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Navegación](/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)  
- [Pagos](/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs) 
- [Pedidos](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Precios](/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promociones](/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  
- [Tarjetas de Regalo](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)  
[Registros del Bridge](/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

