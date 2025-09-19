---
title: 'Catálogo Data Pipeline'
id: 7ARDELPaugrBu5dZT7Vx2b
status: PUBLISHED
createdAt: 2025-03-06T15:48:35.084Z
updatedAt: 2025-08-12T14:55:58.564Z
publishedAt: 2025-08-12T14:55:58.564Z
firstPublishedAt: 2025-03-07T11:30:01.994Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: catalog-data-pipeline
legacySlug: catalogo-data-pipeline
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos está compuesto por cinco tablas que proporcionan la información más reciente del catálogo de una cuenta VTEX. En este conjunto de datos está disponible información sobre **productos, SKUs, marcas, categorías** y **especificaciones**.  

> ⚠️ En el modelo de datos del Catálogo, solo las **Marcas** y **Categorías** que tengan al menos un producto o SKU vinculado en el catálogo son elegibles para envío, independientemente del estado activo.

En esta sección encontrarás la siguiente información:  

- [Características de los datos](#características-de-los-datos)  
- [Tabla productos](#tabla-productos)  
- [Tabla SKUs](#tabla-skus)  
- [Tabla marcas](#tabla-marcas)  
- [Tabla categorías](#tabla-categorías)  
- [Tabla especificaciones](#tabla-especificaciones) 
- [Tabla cluster](#tabla-cluster) 
- [Análisis con datos de catálogo](#análisis-con-datos-de-catálogo)  
- [Correlaciones con otros datos](#correlación-con-otros-datos)  

## Características de los datos  

| **Característica**       | **Descripción**  |
|--------------------------|-------------------------|
| **Origen de los datos**  | [Módulo de catálogo](/pt/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe). |
| **Disponibilidad**   | Acceso en el Admin VTEX.   |
| **Histórico**    | Datos disponibles desde febrero de 2025. |
| **Menor intervalo de actualización** | Una hora. |

## Tabla product  

La tabla `product` contiene información sobre los productos registrados en el catálogo VTEX, incluyendo identificadores, categorías, marcas, visibilidad, imágenes, SKUs relacionados, canales de venta y fechas importantes.  

| __Columna__ | __Tipo de columna__  | __Descripción__ |
|---------|---------------|-------------|
| account   | character varying(255) | Cuenta propietaria del producto. |
| product_id | integer | Identificador único del producto (generado por VTEX).|
| product_ref_id | character varying(255) | Código de referencia interno del comerciante. |
| brand_id | super | Identificador de la marca del producto. |
| category_id | super | Código de referencia interna de la categoría.|
| skus | super | Colección de SKUs asociados al producto. |
| clusters_id  | super | Identificador de los clusters del producto. |
| product_name | character varying(255) | Nombre del producto.  |
| product_image  | character varying(65535)| Imagen principal del producto.  |
| is_active  | boolean | Indica si el producto está activo en el catálogo. |
| is_visible | boolean  | Indica si el producto es visible en la tienda. |
| tax_code | character varying(255) | Código fiscal para cálculo de impuestos.  |
| product_path| character varying(255) | Parte de la URL de la página del producto.  |
| related_categories | super | Lista de categorías relacionadas.|
| similar_categories  | super  | Lista de categorías similares para agrupar productos.   |
| sales_channels | super | Canales de venta disponibles para el producto. |
| dt_first_release| timestamp with time zone| Fecha planeada de lanzamiento.  |
| dt_last_release| timestamp with time zone| Fecha del último lanzamiento. |
| dt_created| timestamp with time zone| Fecha de creación del registro. |
| dt_updated | timestamp with time zone| Fecha de la última actualización. |
| batch_id | character varying(13)  | Identificador del lote para seguimiento.  |
| sk_product | character varying(32)  | Clave sintética del producto (clave primaria).  |
| sk_brand| character varying(32)  | Clave foránea para asociación con la tabla de marcas.|
| sk_category| character varying(32)  | Clave foránea para asociación con la tabla de categorías. |
| sk_skus  | super| Información sobre los SKUs del producto. |
| sk_cluster | super | Información sobre los clusters asociados.|
| sk_related_categories  | super | Lista de categorías relacionadas (configuración jerárquica).|

## Tabla sku  

Esta tabla detalla los SKUs asociados a los productos, incluyendo identificadores, dimensiones, códigos de fabricante, EANs, imágenes, servicios, kits y fechas de creación/actualización.  

| __Columna__  | __Tipo de columna__ | __Descripción__ |
|----------|---------------|-------------|
| account | character varying(255) | Cuenta propietaria del SKU. |
| product_id| bigint | Identificador único del producto asociado. |
| sku_id | bigint | Identificador único del SKU.  |
| is_active| boolean  | Indica si el SKU está activo en el catálogo. |
| is_kit| boolean | Indica si el SKU es un kit compuesto.  |
| sku_ref_id| character varying(65535)| Código de referencia interna del SKU.  |
| sku_dimensions  | super  | Dimensiones del SKU para cálculos de envío. |
| sku_real_dimensions | super | Dimensiones reales del producto sin embalaje.  |
| sku_manufacturer_code  | character varying(65535)| Código de referencia del fabricante.|
| sku_eans  | super   | Códigos EAN asociados al SKU.  |
| sku_kit_items| super  | Ítems incluidos en el kit del SKU.|
| sku_image_url | character varying(65535)| URL de la imagen principal del SKU. |
| sku_image_gallery | super  | Galería de imágenes del SKU.   |
| sku_services           | super   | Servicios adicionales asociados (ej.: embalaje para regalo).|
| sku_attachments  | super   | Anexos relacionados (ej.: personalizaciones).   |
| sku_attributes         | super   | Atributos específicos del SKU.  |
| sku_videos  | super   | Vídeos relacionados con el SKU.  |
| sku_files  | super   | Archivos asociados al SKU.       |
| dt_created             | timestamp with time zone| Fecha de creación del registro.   |
| dt_updated | timestamp with time zone| Fecha de la última actualización.               |
| batch_id               | character varying(13)  | Identificador del lote para seguimiento.|
| sk_sku  | character varying(32)  | Identificador único del SKU (integración con productos).|
| sk_product | character varying(32)  | Identificador único del producto asociado.      |

## Tabla brand  

La tabla `brand` contiene información sobre las marcas registradas en el catálogo VTEX, incluyendo identificadores, nombres, estado de activación y fechas de creación/actualización. 

| __Columna__ | __Tipo de columna__ | __Descripción__ |
|---------|---------------|---------------|
| account | character varying(255) | Cuenta propietaria de la marca.   |
| brand_id  | bigint  | Identificador único de la marca.  |
| brand_name | character varying(65535)| Nombre de la marca.   |
| is_active | boolean | Indica si la marca está activa.   |
| dt_created | timestamp with time zone| Fecha de creación del registro.|
| dt_updated | timestamp with time zone| Fecha de la última actualización.|
| batch_id| character varying(13)  | Identificador del lote de procesamiento.|
| sk_brand | character varying(32)  | Identificador único de la marca en el catálogo.|

## Tabla category  

La tabla `category` organiza los productos en categorías jerárquicas, incluyendo identificadores, nombres, rutas completas y estado de activación.  

| __Columna__ | __Tipo de columna__ | __Descripción__ |
|---------|--------------|-------------|
| sk_category | character varying(32)  | Identificador único de la categoría (clave primaria).|
| account | character varying(255) | Cuenta propietaria de la categoría. |
| category_id  | bigint  | Identificador único de la categoría. |
| category_name  | character varying(65535)| Nombre de la categoría.  |
| category_full_path_uri_name | character varying(65535) | Ruta jerárquica de la categoría por nombre.  |
| category_full_path | character varying(65535)| Ruta jerárquica de la categoría por ID.|
| is_active | boolean | Indica si la categoría está activa.|
| dt_created  | timestamp with time zone| Fecha de creación del registro.   |
| dt_updated  | timestamp with time zone| Fecha de la última actualización.  |
| batch_id  | character varying(13)  | Identificador del lote de procesamiento. |

## Tabla specification  

La tabla `specification` almacena especificaciones técnicas de productos y SKUs, incluyendo grupos de especificación, valores asignados y fechas de creación/actualización.  

| __Columna__ | __Tipo de columna__ | __Descripción__ |
|---------|--------------|-------------|
| sk_specification| character varying(32)  | Identificador único de la especificación. |
| sk_product  | character varying(32)  | Identificador único del producto.  |
| sk_specification_group | character varying(32)  | Identificador único del grupo de especificación.  |
| sk_sku  | character varying(32)  | Identificador único del SKU.     |
| specification_name  | character varying(65535)| Nombre de la especificación. |
| specification_value| character varying(65535)| Valor de la especificación.      |
| dt_created  | timestamp with time zone| Fecha de creación del registro.   |
| dt_updated | timestamp with time zone| Fecha de la última actualización.|
| batch_id  | character varying(13)  | Identificador del lote de procesamiento.|

## Tabla cluster  

La tabla `cluster` guarda información sobre agrupaciones de cuentas, que representan conjuntos de tiendas o sellers.

| __Nombre de la Columna__  | __Tipo de columna__ | __Descripción__ |
|----------------------|----------------------------|-------------|
| sk_category  | character varying(32)      | Clave sintética creada mediante hash de la cuenta y category_id, utilizada como clave primaria. |
| account | character varying(255)     | Cuenta asociada al clúster, que representa al comerciante o tienda. |
| cluster_id  | bigint  | Identificador único del clúster dentro de la cuenta. |
| cluster_name | character varying(65535)   | Nombre del clúster, utilizado para visualización e identificación. |
| is_active   | boolean  | Indica si el clúster está activo y debe considerarse en las operaciones. |
| is_searchable      | boolean  | Indica si el clúster es buscable y puede encontrarse mediante funcionalidades de búsqueda. |
| cluster_date_from  | timestamp with time zone   | Fecha de inicio del clúster, indicando cuándo se vuelve activo. |
| cluster_date_to    | timestamp with time zone   | Fecha de finalización del clúster, indicando cuándo se vuelve inactivo. |
| dt_created  | timestamp with time zone   | Fecha y hora en que el registro fue creado en el datalake, en la zona horaria UTC. |
| dt_updated| timestamp with time zone   | Fecha y hora en que el registro fue actualizado en el datalake, en la zona horaria UTC. |
| batch_id  | character varying(13)      | Identificador del lote, utilizado para el procesamiento y seguimiento de actualizaciones. |

## Análisis con datos de catálogo  

Algunas opciones para analizar los datos del catálogo son:  

- **Verificar el estado de un producto**: use el campo `isActive` para verificar si el módulo de catálogo considera un producto activo.   
- **Identificar SKUs relacionados**: obtenga una lista de todos los SKUs vinculados a un producto principal.   
- **Detallar especificaciones del producto**: recupere todas las especificaciones de un producto, incluyendo su marca, categoría y otros detalles relevantes.   

## Correlación con otros datos  

Los datos del catálogo están conectados a varios otros modelos de datos. Aquí están algunas correlaciones importantes:  

- **Relación con inventario**: al integrar los datos del catálogo con la información de inventario, es posible determinar con precisión la cantidad disponible de cada producto.   
- **Relación con pedidos**: la combinación de los datos del catálogo con los detalles de los pedidos permite analizar con exactitud el número de pedidos asociados a cada producto en el catálogo.   
- **Impacto en la tasa de conversión**: la evaluación de los datos de navegación para determinar la tasa de conversión del funnel de la tienda ayuda a entender el papel de cada producto en el comportamiento de navegación de los usuarios.  

### Conozca otros Conjuntos de datos  

- [Inventario](/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Pagos](/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)  
- [Precios](/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promoción](/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)  
- [Tarjeta de regalo](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)  
- [Registro del Bridge](/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)  

