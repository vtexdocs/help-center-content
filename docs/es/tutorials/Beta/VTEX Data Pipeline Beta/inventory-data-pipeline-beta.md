---
title: 'Stock Data Pipeline '
id: 2IvKMZV9SNrE6ipBRQr8h2
status: PUBLISHED
createdAt: 2024-02-02T17:41:24.979Z
updatedAt: 2024-09-02T19:28:13.286Z
publishedAt: 2024-09-02T19:28:13.286Z
firstPublishedAt: 2024-05-27T19:26:59.588Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: stock-data-pipeline-beta
locale: es
legacySlug: inventario
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos compuesto por la tabla `item_inventory` proporciona información sobre la disponibilidad de ítems en stock. Detalla la cantidad total y disponible de ítems, las reservas activas, la posibilidad de stock ilimitado, además de incluir identificaciones de SKU y stock. La tabla también registra actualizaciones con marcas de tiempo e ID de control.  

En esta sección puedes consultar la siguiente información:

- [Características de los datos de stock](#características-de-los-datos-de-stock)
- [Tabla item_update_latest](#tabla-item-update-latest)
- [Tabla item_update_historical](#tabla-item-update-historical)
- [Análisis con item_inventory](#analisis-con-inventory)
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)

## Características de los datos

| **Característica** | **Descripción** |
|:---:|:---:|
| **Origen** | Alimentado por información del  módulo de logística. |
| **Disponibilidad** | Admin VTEX. |
| **Historial** | Los datos se conservan durante dos años, a partir de 2024 para clientes que ya utilizan la plataforma VTEX. |
| **Intervalo mínimo de actualización** | Una hora. |

## Tabla item_update_latest

Estos son los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|:---:|:---:|:---:|
| __batch_id__ |	character varying(13) |	Identificador utilizado cuando los datos se cargan en la tabla para el control de calidad de la ingestión de datos.|
| __last_date__ |	timestamp without time | zone	Fecha y hora del último cambio en el inventario.|
| __item_availabilty_id__| character varying(65535) |	ID del esquema de inventario del SKU. |
| __item_id__ |	character varying(65535) | Identificador del artículo. |
|__main_account_name__|	character varying(65535)|	Nombre de la cuenta principal asociada con el artículo.|
|__account_name__|	character varying(65535)|	Nombre de la cuenta relacionada con el artículo.|
|__is_unlimited_quantity__|	boolean	| Indicador booleano que indica si un SKU está siempre disponible, independientemente de su cantidad. |
| __quantity__ | integer | Cantidad de SKU en stock. |
| __reserved_quantity__ |	integer |	Unidades de SKU reservadas. Los pedidos para estas reservas aún no han sido aprobados para el pago. |
|__reservation_id__|	character varying(65535) | Identificación de una reserva para ese artículo. |

## Tabla item_update_historical

| **Nombre de la Columna** | **Tipo de Columna** | **Descripción de la Columna** |
|:---:|:---:|:---:|
| **batch_id** | character varying(13) | Identificador utilizado cuando los datos se cargan en la tabla para el control de calidad de la ingestión de datos. |
| **created_at** | timestamp without time zone | Fecha y hora del cambio en el inventario. |
| **item_availabilty_id** | character varying(65535) | ID del esquema de inventario del SKU |
| **item_id** | character varying(65535) | Identificador del artículo |
| **main_account_name** | character varying(65535) | Nombre de la cuenta principal asociada con el artículo. |
| **account_name** | character varying(65535) | Nombre de la cuenta relacionada con el artículo. |
| **author_id** | character varying(65535) | Autor del cambio en el inventario |
| **event_type** | character varying(65535) | Tipo de cambio en la disponibilidad (por ejemplo, creación de reserva, cancelación de reserva, actualización de disponibilidad del artículo) |
| **metadata_created_at** | timestamp without time zone | Hora en que se generó un evento |
| **is_unlimited_quantity** | boolean | Indicador booleano que indica si un SKU está siempre disponible, independientemente de su cantidad. |
| **quantity** | integer | Cantidad de SKU en stock |
| **reserved_quantity** | integer | Unidades de SKU reservadas. Los pedidos para estas reservas aún no han sido aprobados para el pago. |
| **reservation_id** | character varying(65535) | Identificación de una reserva para ese artículo |

## Análisis con inventory

A continuación se indican algunos de los análisis posibles con la tabla de stock:

- **Análisis de niveles de stock:** evalúa si el stock cubre la demanda e identifica ítems en riesgo de agotarse.  
- **Tendencias de reserva de stock:** analiza la cantidad de ítems reservados a lo largo del tiempo para identificar patrones y ajustar las estrategias de gestión de stock.  
- **Análisis de la distribución del stock por cuenta:** optimiza la gestión de stock en varias cuentas para entender cómo se distribuye.  

## Correlaciones con otros datos  

Los datos de stock se correlacionan con los conjuntos de pedidos y productos, y proporcionan análisis más completos para compras, ventas y marketing. Consulta a continuación algunos ejemplos:  

- **Interacción con datos de pedidos:** el análisis conjunto con los datos de pedidos ofrece insights sobre la eficiencia en atender las demandas de los clientes y ayuda a predecir las necesidades de reposición.  
- **Relación con SKU:** la integración con los datos de SKU ayuda a gestionar el stock en función de la popularidad y disponibilidad de los productos.  
- **Datos de compras y proveedores:** la coordinación con los datos de compras permite mantener un equilibrio ideal en el stock, evitando los excesos de stock o la escasez.  
- **Análisis de ventas y marketing:** la comprensión del stock impacta directamente las estrategias de marketing y ventas, alineando promociones y campañas con la disponibilidad de productos.  

### Descubra otros conjuntos de datos

- [Navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Precios](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)
- [Promociones](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
