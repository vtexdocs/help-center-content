---
title: 'SKUs'
id: 4zkfF1asM3ayvIigsySevw
status: DRAFT
createdAt: 2024-02-02T18:06:58.601Z
updatedAt: 2024-05-27T20:55:21.862Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: skus
legacySlug: skus
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

# SKU

El conjunto de datos de SKU se encuentra en la tabla `products_sku`. Esta tabla centraliza información detallada de los productos, incluidos identificadores, descripciones y datos de marca, lo que facilita la gestión y el análisis de los catálogos de productos.  

En esta sección puedes consultar la siguiente información:

- [Características de los datos de SKU](#características-de-los-datos)  
- [Tabla products_sku](#tabla-products-sku)  
- [Análisis con products_sku](#analisis-con-products-sku)  
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)  

## Características de los datos

|**Característica**|**Descripción**|
| - | - |
|**Origen**|Procedentes del **catálogo de productos**.|
|**Disponibilidad**|Se puede acceder a los datos del catálogo a través del informe del Admin VTEX y también a través de [API de catálogo](https://developers.vtex.com/docs/api-reference/catalog-api/).|
|**Historial**|Los datos se conservan durante dos años, a partir de 2024 para clientes que ya utilizan la plataforma VTEX.|
|**Intervalo mínimo de actualización**|Una hora.|

## Tabla products_sku

Además de la información ya mencionada sobre los datos de catálogo, la tabla centraliza información de identificación de producto, como descripción, marca y especificaciones.  
Estos son los campos que componen la tabla.  

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|:---:|:---:|:---:|
| **id** | integer | Identificador único del producto. |
| **product_id** | integer | Identificador único del producto en el sistema. |
| **name_complete** | character varying(255) | Nombre completo del producto. |
| **complement_name** | character varying(255) | Nombre adicional del producto. |
| **product_name** | character varying(255) | Nombre del producto. |
| **product_description** | character varying(1000) | Descripción detallada del producto. |
| **sku_name** | character varying(255) | Nombre del SKU del producto. |
| **producto_ref_id** | character varying(255) | Referencia externa o interna del producto. |
| **tax_code** | character varying(255) | Código fiscal asociado al producto. |
| **is_active** | boolean | Indica si el producto está activo. |
| **is_transported** | boolean | Indica si el producto es transportable. |
| **is_inventoried** | boolean | Indica si el producto está sujeto a stock. |
| **is_gift_card_recharge** | boolean | Indica si el producto es una recarga de tarjeta de regalo. |
| **image_url** | character varying(1024) | URL de la imagen del producto. |
| **image_url** | character varying(1024) | URL de detalles de producto. |
| **csc_identification** | character varying(255) | Identificación CSC del producto. |
| **brand_id** | character varying(255) | Identificador de la marca del producto. |
| **brand_name** | character varying(255) | Marca del producto. |
| **is_brand_active** | boolean | Indica si la marca del producto está activa. |
| **dimension** | super | Dimensiones del producto. |
| **real_dimension** | super | Dimensiones reales del producto. |
| **manufacturer_code** | character varying(255) | Código de fabricante del producto. |
| **is_kit** | boolean | Indica si el producto es un kit. |
| **kit_items** | super | Ítems incluidos en el kit del producto. |
| **services** | super | Servicios asociados al producto. |
| **categories** | super | Categorías a las que pertenece el producto. |
| **categories_full_path** | super | Ruta completa de las categorías del producto. |
| **attachments** | super | Anexos asociados al producto. |
| **collections** | super | Colecciones a las que pertenece el producto. |
| **sku_sellers** | super | Sellers del SKU del producto. |
| **sales_channels** | super | Canales de venta del producto. |
| **images** | super | Imágenes del producto. |
| **videos** | super | Videos del producto. |
| **sku_specifications** | super | Especificaciones de SKU del producto. |
| **product_specifications** | super | Especificaciones del producto. |
| **product_clusters_ids** | character varying(255) | ID de clústeres de productos. |
| **positions_in_clusters** | super | Posiciones en los clústeres de productos. |
| **product_cluster_names** | super | Nombre de los clústeres de productos. |
| **product_cluster_highlights** | super | Puntos destacados de los clústeres de productos. |
| **product_category_ids** | character varying(255) | ID de las categorías de producto. |
| **is_direct_category_active** | boolean | Indica si la categoría directa del producto está activa. |
| **product_global_category_id** | integer | ID de categoría global del producto. |
| **product_categories** | super | Categorías del producto. |
| **commercial_condition_id** | integer | ID de la condición comercial del producto. |
| **reward_value** | double precision | Valor de recompensa asociado al producto. |
| **alternate_ids** | super | ID alternativos del producto. |
| **alternate_id_values** | super | Valores de los ID alternativos del producto. |
| **estimated_date_arrival** | character varying(255) | Fecha estimada de llegada del producto. |
| **measurement_unit** | character varying(255) | Unidad de medida del producto. |
| **unit_multiplier** | double precision | Multiplicador de la unidad del producto. |
| **information_source** | character varying(255) | Fuente de información del producto. |
| **modal_type** | character varying(255) | Tipo de modal de producto. |
| **key_words** | character varying(1000) | Palabras clave asociadas al producto. |
| **release_date** | character varying(255) | Fecha de lanzamiento del producto. |
| **product_is_visible** | boolean | Indica si el producto es visible. |
| **show_if_not_available** | boolean | Indica si el producto debe mostrarse aunque no esté disponible. |
| **is_product_active** | boolean | Indica si el producto está activo. |
| **product_final_score** | integer | Puntuación final del producto. |
| **account_name** | character varying(255) | Nombre de la cuenta asociada al producto. |
| **batch_id** | character varying(13) | ID de control del lote de ingesta de datos. |  

## Análisis con products_sku

Consulta a continuación algunos de los distintos análisis posibles con la tabla del catálogo:  

- **Análisis de desempeño de producto:** calcula las ventas por SKU para identificar los productos más populares, orientando las estrategias de marketing y reposición.  
- **Tendencias de categoría de producto:** agrupa los SKU por categoría para analizar las tendencias de ventas en diferentes segmentos, ajustando el enfoque del catálogo según sea necesario.  
- **Análisis de precios y promociones:** examina los precios y las condiciones comerciales de cada SKU para identificar oportunidades de promociones y ajustes de precios.  
- **Monitoreo de stock:** comprueba la disponibilidad de cada SKU con respecto a las tendencias de ventas para gestionar el stock de manera eficiente.  

## Correlaciones con otros datos

Las correlaciones de datos de catálogo con otros conjuntos de datos son esenciales para realizar análisis en profundidad.  
Consulta a continuación algunos ejemplos de correlaciones:  

- **Interacción con datos de stock:** la correlación entre los SKU y el stock es clave para gestionar las operaciones de ventas y stock, alineando la disponibilidad de los productos con la demanda.  
- **Datos de pedidos:** el análisis conjunto del catálogo con datos de pedidos revela insights sobre las preferencias de compra, lo que ayuda a optimizar el catálogo.  
- **Datos de navegación:** la interacción con datos de navegación ofrece una visión de cómo los clientes exploran el catálogo, indicando los productos que captan más atención y guiando las estrategias de marketing y promoción.  

### Descubra otros conjuntos de datos

- [Stock](2IvKMZV9SNrE6ipBRQr8h2)  
- [Navegación](4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagos](7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](2f3GlRJ5L5IRGVIxOmzrFv) 
- [Promociones](3WZ1syNucDFdvVhfKtA6Qd)  
