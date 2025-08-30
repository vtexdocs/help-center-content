---
title: 'Precios Data Pipeline'
id: 3NMGJ8dtv73Bwvo9PSz1fz
status: PUBLISHED
createdAt: 2024-06-21T14:58:43.084Z
updatedAt: 2025-01-29T19:45:12.726Z
publishedAt: 2025-01-29T19:45:12.726Z
firstPublishedAt: 2024-06-21T15:27:43.768Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: prices-data-pipeline-beta
legacySlug: precios-data-pipeline-beta
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de precios incluye información histórica de los precios de cada SKU de la tienda de un retailer, lo que permite analizar los valores de markup y las tendencias mensuales de los precios.  

En este artículo puedes consultar la siguiente información:  

- [Características de los datos](#caracteristicas-de-los-datos)  
- [Tabla pricing_latest](#tabla-pricing-latest)  
- [Tabla pricing_historical](#tabla-pricing-historical)  
- [Análisis con datos de precios](#analisis-con-datos-de-precios)  
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)  

## Características de los datos

| **Característica** | **Descripción**	|
|:---------:|:-----:|
| Origen del dato | Módulo Precios. |
| Disponibilidad | Admin VTEX y APIs de precios. Es importante tener en cuenta que los datos facilitados por la API pueden no estar estructurados exactamente de la misma manera que en este conjunto de datos de Data Pipeline. |
| Historial  | El historial de datos comienza en agosto de 2023. Para clientes que ya utilizan la plataforma VTEX, los datos se conservan durante dos años a partir de 2024. 	|
| Menor intervalo de actualización posible | 1 hora. | 

## Tabla pricing_latest  

La tabla `pricing_latest` contiene datos correspondientes a los precios actuales de los productos de la tienda. Consulta a continuación los campos que componen la tabla.  

| **Nombre de la columna**  | **Tipo de columna** | **Descripción de la columna** |
|:----------:|:------------:|:-----------:|
| account_name | character varying(255) | Nombre de la cuenta asociada al ítem. |
| last_date  | date 	| Fecha y hora de la última modificación en el precio. |
| sku_id | character varying(255)| Identificador del SKU.	|
| batch_id  | character varying(255) 	| Identificador utilizado cuando los datos se cargan en la tabla para control de calidad de la ingesta de datos. |
| listPrice | double precision | Precio de lista del SKU.|
| costPrice | double precision  | Precio de costo del SKU. |
| markup  | double precision | Markup del SKU. |
| basePrice | double precision | Precio base del SKU.|
| fixedPrices | super | Precio fijo.|

## Tabla pricing_historical

La tabla `pricing_historical` muestra un registro histórico de los precios de tu tienda. Consulta a continuación los campos que componen la tabla.  

| **Nombre de la columna**  | **Tipo de columna** | **Descripción de la columna** |
|:--------:|:---------:|:--------:|
| account_name  | character varying(255) 	| Nombre de la cuenta asociada al ítem. |
| date | date  | Fecha y hora de la última modificación en el precio.|
| sku_id  | character varying(255) 	| Identificador del SKU. |
| author_id | character varying(255) 	|Identificación del usuario que realizó modificaciones en el precio. |
| batch_id | character varying(255) | Identificador utilizado cuando los datos se cargan en la tabla para control de calidad de la ingesta de datos. |
| id  | character varying(255) 	| ID de la modificación de precio. |
| listPrice | double precision  | Precio de lista del SKU. |
| costPrice | double precision  | Precio de costo del SKU. |
| markup    | double precision  | Markup del SKU.   |
| basePrice | double precision  | Precio base del SKU.   |
| fixedPrices| super  | Precio fijo. |

## Análisis con datos de precios  

Los datos de precios pueden utilizarse en los siguientes análisis:  
- __Precio actual del SKU:__ evalúa el precio actual de un SKU específico o para toda una gama de productos.  
- __Historial de precios de SKU:__ analiza el historial de precios de un SKU específico o de toda una gama de productos.  
- __Precio del SKU por cuenta:__ para tiendas con varias cuentas VTEX, estos datos ayudan a comparar precios en varias tiendas.  

## Correlaciones con otros datos  

El conjunto de datos de precios se correlaciona con los siguientes conjuntos del ecosistema de datos de VTEX:  

- **Interacción con datos de pedidos:** el análisis conjunto de los datos de pedidos proporciona información valiosa sobre las ventas de un producto en función del precio, lo que permite analizar su elasticidad.  
- **Relación con el stock:** la integración con los datos del stock permite evaluar con precisión el valor total de tus activos.  
- **Impacto en la tasa de conversión:** mediante el análisis de los datos de navegación y del embudo de conversión, se adquiere una comprensión más clara del impacto del precio en las tasas de conversión.  

### Descubra otros conjuntos de datos

- [Inventario](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Promociones](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Tarjeta de regalo](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Registro del Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
