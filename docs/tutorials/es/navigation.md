---
title: 'Navegación Data Pipeline (Beta)'
id: 4X4hK0zdIHN0Xn5x2MLYYd
status: PUBLISHED
createdAt: 2024-02-02T17:48:16.639Z
updatedAt: 2024-09-02T19:28:13.230Z
publishedAt: 2024-09-02T19:28:13.230Z
firstPublishedAt: 2024-05-27T19:26:59.542Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: navegacion
locale: es
legacySlug: navegacion
subcategory: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de navegación opera con dos tablas principales: `pageviews` y `sessions`. `Pageview` se refiere a cada nueva página a la que accede el usuario mientras navega por la tienda, mientras que `session` se define como el conjunto de todas las pageviews realizadas por un usuario en una única visita.
Cada `session` permanece activa si no se produce una nueva `pageview` durante un periodo de 30 minutos.

<div class="alert alert-warning">
El conjunto de datos de navegación no captura todos los tipos de eventos que ocurren durante la navegación. Por ejemplo, no se registran clics específicos, eventos especiales ni interacciones con el minicarrito.
</div>  

En esta sección puedes consultar la siguiente información:

- [Características de los datos de navegación](#caracteristicas-de-los-datos)
- [Tabla sessions](#tabla-sessions)
- [Tabla pageviews](#tabla-pageviews)
- [Análisis con datos de navegación](#analisis-con-datos-de-navegacion)
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)

## Características de los datos

| **Característica** | **Descripción** |
|:---:|:---:|
| **Origen** | El conjunto de datos tiene lugar desde un script ejecutado en el frontend de la tienda, que registra información sobre las sesiones y actividades de los usuarios. |
| **Disponibilidad** | Puedes acceder a los datos de navegación de dos formas: a través del dashboard Vista general en el Admin VTEX, donde se concentran el total de sesiones y el embudo de conversión, o a través de herramientas de terceros como Google Analytics. |
| **Historial** | Los datos se conservan durante dos años, a partir de 2022 para los clientes que ya utilizan la plataforma VTEX. |
| **Intervalo mínimo de actualización** | Una hora. |

<div class="alert alert-warning">
Data Pipeline solo proporciona datos de sesiones originadas en las soluciones de <i>storefront</i> de VTEX: CMS Legado, Store Framework y FastStore. VTEX no tiene acceso a sesiones originadas en marketplaces de terceros o storefronts de tiendas propietarias. Además, las personalizaciones realizadas en el <i>frontend</i> de la tienda pueden interferir o incluso desactivar el <i>script,</i> provocando que algunas sesiones no se registren o que la tasa de conversión observada en el dashboard no sea precisa.
<p>Para minimizar el impacto en el desempeño de la tienda, el <i>script</i> está configurado para ser el último elemento en cargarse en la página. Esto significa que es posible que no se capturen sesiones muy breves.</p>
  </div>  

## Tabla sessions  

Esta tabla contiene solo las sesiones finalizadas, ya sea por inactividad o porque culminaron en una compra. Se ordena por `session_id`, `session_end_time` y `store_name`. Por este motivo, evita filtrar grandes intervalos de datos por columnas que no están relacionados con esta estrategia de ordenación.   
Consulta a continuación los campos que componen la tabla.  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **batch_id** | character varying(13) | ID de control de ingesta de datos. |
| **session_id** | character varying(127) | UUID (identificador único universal) de la sesión, correspondiente a la cookie VtexRCSessionIdv7. |
| **store_name** | character varying(127) | Nombre de la tienda que originó las vistas de página durante esta sesión. |
| **account_name** | character varying(127) | Cuenta VTEX de la tienda que está generando esta sesión. |
| **economic_group_id** | character varying(127) | Identificador del grupo económico para facturación. |
| **economic_group_name** | character varying(1024) | Nombre del grupo económico para facturación. |
| **company_id** | character varying(127) | Identificador de la empresa para facturación. |
| **company_name** | character varying(1024) | Nombre de la empresa para facturación. |
| **main_account_name** | character varying(127) | Nombre de la cuenta VTEX principal relacionada con la tienda que generó esta sesión. |
| **os_family** | character varying(1023) | Familia del sistema operativo, extraída del user_agent. |
| **os_major** | character varying(1023) | Versión principal del sistema operativo, extraída del user_agent. |
| **os_minor** | character varying(1023) | Versión menor del sistema operativo, extraída del user_agent. |
| **os_patch** | character varying(1023) | Parche del sistema operativo, extraído del user_agent. |
| **os_patch_minor** | character varying(1023) | Parche menor del sistema operativo, extraído del user_agent. |
| **device_brand** | character varying(1023) | Marca del dispositivo, extraída del user_agent. |
| **device_family** | character varying(1023) | Familia del dispositivo, extraída del user_agent. |
| **device_model** | character varying(1023) | Modelo del dispositivo, extraído del user_agent. |
| **browser_family** | character varying(1023) | Familia del navegador, extraída de user_agent. |
| **browser_major** | character varying(1023) | Versión principal del navegador, extraída del user_agent. |
| **browser_minor** | character varying(1023) | Versión menor del navegador, extraída del user_agent. |
| **browser_patch** | character varying(1023) | Parche del navegador, extraído del user_agent. |
| **user_id** | character varying(16383) | Identificador único del comprador, mapeado por la cookie VtexRCMacIdv7. |
| **pageviews_count** | integer | Recuento de páginas vistas en esta sesión. |
| **views_home** | integer | Recuento de páginas de inicio vistas en esta sesión. |
| **views_category** | integer | Recuento de vistas de páginas de [categoría](https://help.vtex.com/es/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) en esta sesión. |
| **views_department** | integer | Recuento de páginas de [departamento](https://help.vtex.com/es/tutorial/o-que-e-um-departamento--22rKjmYWVmmKAK8CWa8yKw) vistas en esta sesión. |
| **views_search** | integer | Recuento de páginas de búsqueda vistas en esta sesión. |
| **views_product** | integer | Recuento de páginas de producto vistas en esta sesión. |
| **views_checkout** | integer | Recuento de páginas de checkout vistas en esta sesión. |
| **views_other** | integer | Recuento de páginas vistas que no sean de [producto](https://help.vtex.com/es/tutorial/o-que-e-um-produto--2zrB2gFCHyQokCKKE8kuAw), búsqueda, [categoría](https://help.vtex.com/es/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg), [departamento](https://help.vtex.com/es/tutorial/o-que-e-um-departamento--22rKjmYWVmmKAK8CWa8yKw) o checkout en esta sesión. |
| **views_checkout_cart** | integer | Recuento de páginas de checkout vistas en la fase de carrito. |
| **views_checkout_payment** | integer | Recuento de páginas de checkout vistas en la fase de pago. |
| **views_checkout_shipping** | integer | Recuento de páginas de checkout vistas en la fase de envío. |
| **views_checkout_profile** | integer | Recuento de páginas de checkout vistas en la fase de perfil. |
| **views_checkout_orderplaced** | integer | Recuento de páginas de checkout vistas en la fase de pedido realizado. |
| **views_checkout_email** | integer | Recuento de páginas de checkout vistas en la fase de email. |
| **workspace** | character varying(16383) | Workspace de VTEX. |
| **user_agent** | character varying(16383) | String de user_agent extraída del servidor del request. |
| **is_first_visit** | boolean | Indica si es la primera visita del usuario. No cuenta para visitantes recurrentes en diferentes navegadores. |
| **session_start_time** | timestamp without time zone | Fecha y hora de inicio de sesión. |
| **entrance_page_url** | character varying(16383) | URL de la primera página vista en esta sesión. |
| **entrance_page_type** | character varying(16383) | Tipo de página de la primera página vista en esta sesión. |
| **entrance_page_checkout_step** | character varying(16383) | Fase de checkout de la primera página vista en esta sesión. |
| **session_end_time** | timestamp without time zone | Fecha y hora de fin de sesión. |
| **exit_page_url** | character varying(16383) | URL de la última página vista en esta sesión. |
| **exit_page_type** | character varying(16383) | Tipo de página de la última página vista en esta sesión. |
| **exit_page_checkout_step** | character varying(16383) | Fase de checkout de la última página vista en esta sesión. |  

## Tabla pageviews  

Cada ítem de esta tabla corresponde a una página vista por el comprador, como la página de inicio, la página de producto y la fase de checkout.
Una página vista se cuenta después de que el navegador del comprador haya cargado la página. Cada página tiene atributos específicos y, como esta tabla lo reúne todo en un único esquema, aparecerán muchos valores nulos. Por ejemplo, se espera que los atributos de las páginas de producto sean nulos cuando la vista de la página corresponde a una fase de carrito.  
Consulta a continuación los campos que componen la tabla.  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **client_date** | timestamp without time zone | Fecha y hora de la página vista. |
| **session_id** | character varying(127) | Identificador único de una sesión, que se mapea directamente a la cookie VtexRCSessionIdv7. |
| **page_type** | character varying(127) | Tipo da página visitada, con valores predefinidos como 'home', 'category', 'product', entre otros. |
| **checkout_step** | character varying(127) | Fase de checkout de la página, válida cuando page_type es 'checkout'. |
| **economic_group_id** | character varying(127) | Identificador del grupo económico para facturación. |
| **economic_group_name** | character varying(1024) | Nombre del grupo económico para facturación. |
| **company_id** | character varying(127) | Identificador de la empresa para facturación. |
| **company_name** | character varying(1024) | Nombre de la empresa para facturación. |
| **main_account_name** | character varying(127) | Cuenta principal de Licence Manager a la que la tienda está asociada. |
| **account_name** | character varying(127) | Cuenta de Licence Manager a la que la tienda está asociada. |
| **store_name** | character varying(127) | Nombre de la tienda que produjo el evento de página vista. |
| **url** | character varying(16383) | URL completa de la página vista. |
| **store_host** | character varying(127) | Nombre de host extraído de la URL. |
| **page_url** | character varying(16383) | URL limpia de la página vista, sin parámetros de consulta. |
| **ref** | character varying(16383) | URL de la página que remitió al comprador a esta página. |
| **workspace** | character varying(127) | Workspace de VTEX, generalmente 'master'. |
| **workspace_ab_test_id** | character varying(127) | ID de prueba AB extraído del nombre del workspace. |
| **user_agent** | character varying(16383) | String del User-Agent extraída del lado del servidor. |
| **os_family** | character varying(1023) | Familia de SO extraída del user_agent. |
| **os_major** | character varying(1023) | Versión principal del SO, extraída del user_agent. |
| **os_minor** | character varying(1023) | Versión menor del SO, extraída del user_agent. |
| **os_patch** | character varying(1023) | Parche del SO extraído del user_agent. |
| **os_patch_minor** | character varying(1023) | Parche menor del SO extraído del user_agent. |
| **device_brand** | character varying(1023) | Marca del dispositivo extraída del user_agent. |
| **device_family** | character varying(1023) | Familia del dispositivo, extraída del user_agent. |
| **device_model** | character varying(1023) | Modelo del dispositivo, extraído del user_agent. |
| **browser_family** | character varying(1023) | Familia del navegador, extraída de user_agent. |
| **browser_major** | character varying(1023) | Versión principal del navegador, extraída del user_agent. |
| **browser_minor** | character varying(1023) | Versión menor del navegador, extraída del user_agent. |
| **browser_patch** | character varying(1023) | Parche del navegador, extraído del user_agent. |
| **user_id** | character varying(127) | Identificador único del comprador. |
| **is_first_visit** | boolean | Indica si es la primera visita del usuario. |
| **category_id** | character varying(127) | Identificador de la categoría. |
| **nombre_categoría** | character varying(16383) | Nombre de la categoría. |
| **department_id** | character varying(127) | Identificador del departamento. |
| **department_name** | character varying(16383) | Nombre del departamento. |
| **product_id** | character varying(127) | Identificador del producto. |
| **product_reference_id** | character varying(1024) | Referencia del producto. |
| **product_name** | character varying(16383) | Nombre del producto. |
| **product_brand_id** | integer | Identificador de la marca del producto. |
| **product_brand_name** | character varying(1024) | Nombre de la marca del producto. |
| **product_department_id** | integer | Identificador del departamento del producto. |
| **product_department_name** | character varying(1024) | Nombre del departamento del producto. |
| **product_category_id** | integer | Identificador de la categoría del producto. |
| **product_category_name** | character varying(1024) | Nombre de la categoría del producto. |
| **product_list_price** | numeric(22,4) | Precio de lista del producto. |
| **product_price** | numeric(22,4) | Precio del producto. |
| **seller_id** | character varying(127) | Identificador del seller. |
| **seller_ids** | character varying(16383) | Identificadores del seller. |
| **site_search_term** | character varying(16383) | Término de búsqueda en el sitio web. |
| **site_search_form** | character varying(16383) | Formulario de búsqueda en el sitio web. |
| **site_search_category** | character varying(127) | Categoría de búsqueda en el sitio web. |
| **site_search_results** | integer | Resultados de búsqueda en el sitio web. |
| **sales_channel** | character varying(10) | Canal de ventas. |
| **order_form_id** | character varying(127) | Identificador del formulario de pedido. |
| **order_form_shipping** | numeric(22,4) | Costo de envío en el formulario de pedido. |
| **order_form_total** | numeric(22,4) | Total en el formulario de pedido. |
| **order_form_tax** | numeric(22,4) | Impuesto en el formulario de pedido. |
| **campaign_name** | character varying(16383) | Nombre de la campaña. |
| **campaign_source** | character varying(16383) | Fuente de la campaña. |
| **campaign_medium** | character varying(16383) | Medio de la campaña. |
| **internal_campaign_name** | character varying(16383) | Nombre de la campaña interna. |
| **internal_campaign_part** | character varying(16383) | Parte de la campaña interna. |
| **order_form_payment_type** | character varying(127) | Tipo de pago en el formulario de pedido. |
| **order_group** | character varying(127) | Grupo de pedido. |
| **transaction_id** | character varying(127) | Identificador de la transacción. |
| **visitor_login_state** | character varying(16383) | Status de inicio de sesión del visitante. |
| **visitor_type** | character varying(16383) | Tipo de visitante. |
| **visitor_optin_newsletter** | boolean | Consentimiento del visitante para recibir newsletter. |
| **profile_id** | character varying(127) | ID del perfil de comprador, recibido del sistema VTEX Profile. |
| **batch_id** | character varying(13) | ID de control de ingesta de datos. |
| **id** | character varying(36) | UUID generado durante la ingesta de datos. |
| **transaction_products** | super | Productos en la transacción. |
| **transaction_total** | numeric(22,4) | Total de la transacción. |  

## Análisis con datos de navegación  

Los datos de navegación pueden utilizarse para los siguientes análisis:

- **Tasa de conversión general:** calcula la proporción de sesiones que resultaron en una compra con relación al total de sesiones, para evaluar la eficacia general del sitio web para convertir visitantes en compradores.  
- **Análisis del embudo de conversión:** agrupa las páginas vistas por etapas del embudo (página de inicio, búsqueda, producto, carrito, checkout) y cuenta cuántas sesiones pasaron por cada etapa, identificando dónde abandonan los usuarios.  
- **Páginas más visitadas:** cuenta el número de páginas vistas para cada tipo de página (página de inicio, categoría, producto) para identificar las páginas que más captan la atención y optimizarlas para la conversión.  
- **Seguimiento de rutas del usuario:** hace un seguimiento de la secuencia de las páginas vistas en cada sesión para comprender la trayectoria del usuario y descubrir patrones de navegación comunes.  
- **Fuente del tráfico:** analiza la URL de referencia de cada sesión para determinar el origen del tráfico y conocer los canales de marketing que son más eficaces.  
- **Tasa de rebote por tipo de página:** identifica las sesiones que finalizan tras una única pageview y calcula la tasa de rebote por tipo de página para mejorar el contenido o el diseño de esas páginas.  

## Correlaciones con otros datos

En los datos de navegación de VTEX observamos importantes interacciones con otros conjuntos de datos que enriquecen el análisis del comportamiento de los usuarios, por ejemplo:  

- **Interacción con datos de pedidos:** el análisis comparativo entre navegación y conversiones de pedidos revela el impacto de las jornadas de usuario en las decisiones de compra.  
- **Relación con los SKU:** la interacción de los usuarios con páginas de producto y categorías ofrece insights sobre la popularidad y eficacia de la presentación de los productos.  
- **Datos de marketing y campañas:** la correlación entre la navegación y las campañas de marketing ayuda a evaluar la eficiencia de estas campañas a la hora de atraer tráfico y generar conversiones.  

### Descubra otros conjuntos de datos

- [Stock](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Pagos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Precios](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promociones](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
