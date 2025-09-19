---
title: 'Pedidos Data Pipeline (Beta)'
id: 2f3GlRJ5L5IRGVIxOmzrFv
status: PUBLISHED
createdAt: 2024-02-02T17:58:53.962Z
updatedAt: 2025-09-04T16:18:29.713Z
publishedAt: 2025-09-04T16:18:29.713Z
firstPublishedAt: 2024-05-27T19:26:59.238Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: orders-data-pipeline-beta
legacySlug: pedidos
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de pedidos se compone de dos tablas principales:

`orders_historical` y `orders_latest`. Las tablas incluyen distintos campos `SUPER` que engloban información variada como ítems comprados, detalles de envío, sellers implicados y pagos, entre otros.

Debido a la naturaleza de la relación 1 a N entre muchos de estos campos SUPER y los pedidos, y a la cantidad de información que contienen, hemos implementado tablas auxiliares especializadas, como `orders_shipping` y `orders_items`, para facilitar la gestión de estos datos.

Para realizar análisis, es habitual hacer selecciones directas dentro de los campos SUPER, destacando partes concretas que queremos extraer. También podemos unir una de las tablas principales (`orders` o `latest`) con las tablas auxiliares, utilizando `orderid como clave.

Este método permite extraer eficazmente información específica, lo que facilita analizar en detalle los pedidos y sus componentes asociados.

En esta sección puedes consultar la siguiente información:

- [Características de los datos de pedidos](#características-de-los-datos)
- [Tabla orders_latest](#tabla-orders_latest)
- [Tabla orders_historical](#tabla-orders_historical)
- [Tabla orders_totals](#tabla-orders_totals)
- [Tabla orders_shipping](#tabla-orders_shipping)
- [Tabla orders_sellers](#tabla-orders_sellers)
- [Tabla orders_rateandbenefitsidentifiers](#tabla-orders_rateandbenefitsidentifiers)
- [Tabla orders_payments](#tabla-orders_payments)
- [Tabla orders_packages](#tabla-orders_packages)
- [Tabla orders_items](#tabla-orders_items)
- [Tabla orders_extra_info](#tabla-orders-extra-info)
- [Tabla orders_custom_fields](#tabla-orders-custom-fields)
- [Tabla orders_custom_apps](#tabla-orders-custom-apps)
- [Análisis con datos de pedidos](#analisis-con-datos-de-pedidos)
- [Correlaciones con otros datos](#correlacioines-con-otros-datos)

## Características de los datos

|**Característica**|**Descripción**|
| - | - |
|**Origen**|Los datos del conjunto de pedidos proceden del [OMS (Order Management System)](/es/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201).|
|**Disponibilidad**|Se puede acceder a los datos de pedidos a través del [informe de pedidos](/es/tutorial/exportacao-de-pedidos-no-modulo-pedidos--tutorials_6417) en el Admin VTEX y también por las [API de Orders](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders?endpoint=get-/api/oms/pvt/orders). Es importante tener en cuenta que los datos facilitados por la API pueden no estar estructurados exactamente de la misma manera que en este conjunto de datos de Data Pipeline.|
|**Historial**|Los datos se conservan durante dos años, a partir de 2022 para los clientes que ya utilizan la plataforma VTEX.|
|**Intervalo mínimo de actualización**|Una hora.|

## Tabla `orders_latest`

La tabla `latest` almacena el status más reciente de cada pedido, incluyendo detalles como fecha de actualización, ID del pedido y la información del cliente.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único de pedido. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido. |
| **value** | double precision | Valor total del pedido. |
| **totals** | super | Detalles adicionales sobre los totales del pedido, como subtotal, impuestos, descuentos, etc. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido. |
| **items** | super | Información detallada sobre los ítems del pedido. |
| **clientprofiledata_userprofileid** | character varying(65535) | ID del perfil de usuario en el sistema de gestión de clientes. |
| **shippingdata_address_city** | character varying(65535) | Ciudad de envío del pedido. |
| **shippingdata_address_state** | character varying(65535) | Estado de envío del pedido. |
| **shippingdata_address_country** | character varying(65535) | País de envío del pedido. |
| **shippingdata_logisticsinfo** | super | Información logística sobre el envío del pedido. |
| **sellers** | super | Datos de los sellers asociados al pedido. |
| **storepreferencesdata_countrycode** | character varying(65535) | Código de país de la tienda. |
| **storepreferencesdata_timezone** | character varying(65535) | Zona horaria de la tienda. |
| **storepreferencesdata_currencycode** | character varying(65535) | Código de la moneda utilizada en la tienda. |
| **packages** | super | Detalles sobre el embalaje de los ítems del pedido. |
| **origin** | character varying(16383) | Origen del pedido. |
| **iscompleted** | boolean | Indica si el pedido está completo. |
| **affiliateid** | character varying(16383) | ID de afiliado asociado al pedido. |
| **status** | character varying(16383) | Status actual del pedido. |
| **authorizeddate** | timestamp with time zone | Fecha y hora de autorización del pedido. |
| **invoiceddate** | timestamp with time zone | Fecha y hora de emisión de la factura del pedido. |
| **marketplaceorderid** | character varying(16383) | ID del pedido en el marketplace. |
| **marketplaceserviciosendpoint** | character varying(16383) | Endpoint de servicios del marketplace. |
| **lastchange** | timestamp with time zone | Fecha y hora de la última modificación en el pedido. |
| **marketingdata_utmsource** | character varying(65535) | Fuente UTM para fines de marketing. |
| **marketing_data_output_media** | character varying(65535) | Medio UTM para fines de marketing. |
| **marketingdata_utmcampaign** | character varying(65535) | Campaña UTM para fines de marketing. |
| **marketingdata_utmpartner** | character varying(65535) | Partner UTM para fines de marketing. |
| **marketing_data_outmipage** | character varying(65535) | Página UTM para fines de marketing. |
| **marketingdata_outmipart** | character varying(65535) | Parte UTM para fines de marketing. |
| **marketingdata_utmicampaign** | character varying(65535) | Campaña UTM alternativa para fines de marketing. |
| **marketingdata_coupon** | character varying(65535) | Código del cupón de descuento aplicado al pedido. |
| **marketingdata_marketingtags** | super | Tags de marketing asociadas al pedido. |
| **marketplace_name** | character varying(65535) | Nombre del marketplace asociado al pedido. |
| **marketplace_iscertified** | super | Indica si el marketplace está certificado. |
| **marketplace_baseurl** | character varying(65535) | URL base del marketplace. |
| **contextdata_loggedin** | super | Indica si el usuario había iniciado sesión durante la realización del pedido. |
| **contextdata_useragent** | character varying(65535) | User-agent utilizado durante la realización del pedido. |
| **contextdata_userid** | character varying(65535) | ID del usuario que realizó el pedido. |
| **rateandbenefitsidentifiers** | super | Identificadores de cargos y promociones aplicados al pedido. |
| **transactions** | super | Detalles de las transacciones financieras del pedido. |
| **giftcards** | super | Información sobre las tarjetas de regalo utilizadas en el pedido. |
| **saleschannel** | character varying(16383) | Canal de venta a través del cual se realizó el pedido. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |
| **sellerorderid** | character varying(16383) | ID de pedido asignado por el seller. |
| **ordergroup** | character varying(16383) | Grupo de pedidos al que pertenece este pedido. |
| **workflowisinerror** | boolean | Indica si se ha producido un error en el flujo de trabajo del pedido. |
| **clientprofiledata_email** | character varying(256) | Email del perfil de cliente asociado al pedido. |
| **changesattachment_id** | character varying(256) | ID del anexo de personalización del pedido. |
| **changesattachment_changesdata** | super | Datos de los cambios realizados en el pedido. |
| **shippingdata_postal_code** | character varying(256) | Código postal de la dirección de envío del pedido. |  

## Tabla `orders_historical`

La tabla `historical` almacena un registro completo de todas las actualizaciones de pedidos.  
Consulta a continuación los campos que componen la tabla:

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido, normalmente utilizado como clave primaria. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido, indicando el servidor o dominio que gestiona el pedido. |
| **value** | double precision | Valor monetario total del pedido. Puede incluir impuestos, descuentos y costos de envío. |
| **totals** | super | Detalles adicionales sobre los totales del pedido, que pueden incluir información desglosada en subtotal, impuestos, descuentos, entre otros. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **items** | super | Información detallada sobre ítems del pedido, que puede incluir SKU, cantidad, precio y descuentos específicos de los ítems. |
| **clientprofiledata_userprofileid** | character varying(65535) | Identificador del perfil de usuario del cliente que ha realizado el pedido. |
| **shippingdata_address_city** | character varying(65535) | Parte de la dirección referida a la ciudad de envío del pedido. |
| **shippingdata_address_state** | character varying(65535) | Parte de la dirección referida al estado o región de envío del pedido. |
| **shippingdata_address_country** | character varying(65535) | Parte de la dirección referida al país de envío del pedido. |
| **shippingdata_logisticsinfo** | super | Información logística relativa al envío del pedido, que puede incluir datos de la transportadora e información de seguimiento. |
| **sellers** | super | Información de los sellers asociados al pedido. Puede incluir los ID y los nombres de los sellers. |
| **storepreferencesdata_countrycode** | character varying(65535) | Código de país de la tienda donde se realizó el pedido. |
| **storepreferencesdata_timezone** | character varying(65535) | Zona horaria de la tienda donde se realizó el pedido. |
| **storepreferencesdata_currencycode** | character varying(65535) | Código de la moneda utilizada en la transacción del pedido. |
| **packages** | super | Detalles sobre el embalaje de los ítems del pedido, que pueden incluir tipos de embalaje y dimensiones. |
| **origin** | character varying(16383) | Origen del pedido, que indica dónde y cómo se inició. |
| **iscompleted** | boolean | Indica si se completó el pedido. |
| **affiliateid** | character varying(16383) | Identificador de un afiliado o fuente de referencia asociada al pedido. |
| **status** | character varying(16383) | Status actual del pedido, como 'pendiente', 'enviado' o 'completado'. |
| **authorizeddate** | timestamp with time zone | Fecha y hora en que se autorizó el pedido. |
| **invoiceddate** | timestamp with time zone | Fecha y hora de emisión de la factura del pedido. |
| **marketplaceorderid** | character varying(16383) | Identificador del pedido en un marketplace, si procede. |
| **marketplaceserviciosendpoint** | character varying(16383) | Endpoint o URL para servicios de marketplace relacionados con el pedido. |
| **lastchange** | timestamp with time zone | Fecha y hora de la última modificación realizada en el pedido. |
| **marketingdata_utmsource** | character varying(65535) | Parámetro de origen UTM en datos de marketing, que indica el origen del tráfico o de la campaña. |
| **marketing_data_output_media** | character varying(65535) | Parámetro UTM de medio en datos de marketing, indicando el medio utilizado en la campaña (por ejemplo, email o redes sociales). |
| **marketingdata_utmcampaign** | character varying(65535) | Parámetro UTM de campaña en datos de marketing, que especifica el nombre o código concreto de la campaña. |
| **marketingdata_utmpartner** | character varying(65535) | Parámetro UTM de partner, que indica una asociación o colaboración en esfuerzos de marketing. |
| **marketing_data_outmipage** | character varying(65535) | Parámetro UTM de página, que puede indicar la página específica o ubicación de la campaña. |
| **marketingdata_outmipart** | character varying(65535) | Parámetro UTM de parte, que puede indicar un componente o sección específica de la campaña de marketing. |
| **marketingdata_utmicampaign** | character varying(65535) | Parámetro UTM de campaña alternativo para un seguimiento adicional de la campaña. |
| **marketingdata_coupon** | character varying(65535) | Código de cupón utilizado, en su caso, para descuentos en el pedido. |
| **marketingdata_marketingtags** | super | Tags o palabras clave asociadas a los esfuerzos de marketing del pedido. |
| **marketplace_name** | character varying(65535) | Nombre del marketplace en el que se realizó el pedido, si procede. |
| **marketplace_iscertified** | super | Indica si el marketplace en el que se realizó el pedido está certificado o es reconocido. |
| **marketplace_baseurl** | character varying(65535) | URL base del marketplace donde se realizó el pedido. |
| **contextdata_loggedin** | super | Indica si el usuario tenía una sesión iniciada al realizar el pedido. |
| **contextdata_useragent** | character varying(65535) | String de user-agent del navegador o dispositivo utilizado al realizar el pedido. |
| **contextdata_userid** | character varying(65535) | ID del usuario que realizó el pedido. |
| **rateandbenefitsidentifiers** | super | Identificadores de cargos y promociones aplicadas al pedido, como valor de fidelidad o descuentos para socios. |
| **transactions** | super | Información detallada sobre las transacciones financieras asociadas al pedido. |
| **giftcards** | super | Información sobre las tarjetas de regalo utilizadas en el pedido. |
| **saleschannel** | character varying(16383) | Canal de venta a través del cual se realizó el pedido (tienda online, tienda física u otras). |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |
| **sellerorderid** | character varying(16383) | Un ID de pedido asignado por el seller, diferente del ID principal de pedido. |
| **ordergroup** | character varying(16383) | El grupo de pedidos al que este pedido pertenece, utilizado para agrupar varios pedidos. |
| **workflowisinerror** | boolean | Indica si se produjo un error en el flujo de trabajo de procesamiento del pedido. |
| **clientprofiledata_email** | character varying(256) | La dirección de email del cliente asociado al pedido. |
| **changesattachment_id** | character varying(256) | Identificador único para una operación de cambio asociada al pedido. |
| **changesattachment_changesdata** | super | Detalles de los cambios realizados en el pedido, como agregar o remover ítems, así como otras modificaciones. |
| **shippingdata_postal_code** | character varying(256) | Código postal de la dirección de envío del pedido. |

## Tabla `orders_totals`

La tabla `totals` proporciona un resumen de los valores totales asociados a cada pedido, incluido el valor total del pedido, descuentos aplicados e impuestos.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido. Suele estar unido a la columna 'orderid' de la tabla 'vtex.orders_latest' para realizar análisis cruzados. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido, indicando el servidor o dominio que gestiona el pedido. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **lastchange** | timestamp with time zone | Fecha y hora de la última modificación realizada en el pedido, que refleja la actualización más reciente de status o contenido. |
| **status** | character varying(16383) | Status actual del pedido. Suele estar unido a la columna 'status' de la tabla 'vtex.orders_latest' para realizar un seguimiento de los cambios de status. |
| **totals_id** | character varying(65535) | Identificador único para los totales de pedido, utilizado para hacer referencia a detalles específicos del total de pedido. |
| **totals_name** | character varying(65535) | Nombre o descripción de los totales de pedido, proporcionando una visión general de lo que representa el total (por ejemplo, subtotal, impuestos, descuentos). |
| **totals_value** | double precision | Valor numérico asociado a los totales de pedido, como valor total, subtotal, impuestos, descuentos, etc. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |  

## Tabla `orders_shipping`  

En la tabla `shipping` se detalla la información de envío de pedidos, como dirección de entrega, gastos de envío y proveedores de servicios logísticos.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido. Suele estar unido a 'hostname' de la tabla 'vtex.client_registry_gold'. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **lastchange** | timestamp with time zone | Fecha y hora de la última modificación en el pedido. |
| **status** | character varying(16383) | Status actual del pedido. |
| **shippingdata_address_city** | character varying(65535) | Ciudad en la dirección de envío del pedido. |
| **shippingdata_address_state** | character varying(65535) | Estado en la dirección de envío del pedido. |
| **shippingdata_address_country** | character varying(65535) | País en la dirección de envío del pedido. |
| **deliveryids** | super | Identificadores asociados al envío del pedido. |
| **shippingestimate** | character varying(65535) | Tiempo estimado de envío del pedido. |
| **pickupstoreinfo_ispickupstore** | boolean | Indica si el punto de recogida es una tienda física. |
| **pickupstoreinfo_friendlyname** | character varying(65535) | Nombre descriptivo del punto de recogida. |
| **pickupstoreinfo_dockid** | character varying(65535) | Identificador del punto de recogida. |
| **deliverychannel** | character varying(65535) | Canal de entrega utilizado para el pedido. |
| **deliverywindow** | character varying(65535) | Plazo estimado de entrega. |
| **sellingprice** | double precision | Precio de venta del ítem en el pedido. |
| **listprice** | double precision | Precio de lista del ítem en el pedido. |
| **price** | double precision | Precio final del ítem en el pedido. |
| **shippingestimatedate** | timestamp with time zone | Fecha estimada de envío del pedido. |
| **selecteddeliverychannel** | character varying(65535) | Canal de entrega seleccionado para el pedido. |
| **selectedsla** | character varying(65535) | Acuerdo de nivel de servicio (SLA) seleccionado para el pedido. |
| **deliverychannels** | super | Canales de entrega disponibles para el pedido. |
| **slas** | super | SLA disponibles para el pedido. |
| **pickupdistance** | double precision | Distancia al punto de recogida del pedido. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |
| **shippingdata_postal_code** | character varying(256) | Código postal de la dirección de envío del pedido. |

## Tabla `orders_sellers`  

La tabla `sellers` almacena la lista de sellers relacionados con cada pedido. Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido. Suele estar unido a la columna 'orderid' de la tabla 'vtex.orders_historical' para realizar análisis cruzados. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido, indicando el servidor o dominio que gestiona el pedido. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **lastchange** | timestamp with time zone | Fecha y hora del último cambio realizado en el pedido, que refleja la actualización más reciente de status o contenido. |
| **status** | character varying(16383) | Status actual del pedido. |
| **id** | character varying(65535) | Identificador único, generalmente utilizado para referirse a un elemento específico dentro de un contexto más amplio. |
| **name** | character varying(65535) | Nombre o título del elemento referenciado, que proporciona una identificación legible por humanos. |
| **logo** | character varying(65535) | Ruta o URL al logotipo asociado, a menudo utilizado en contextos de branding o identificación visual. |
| **fulfillmentendpoint** | character varying(65535) | Endpoint o URL de los servicios de fulfillment, que indica dónde se gestionan las operaciones de cumplimiento de pedidos. |
| **subsellerid** | character varying(65535) | Identificador de un subseller o seller secundario asociado al pedido u operación. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |

## Tabla `orders_rateandbenefitsidentifiers` 

La tabla `rateandbenefitsidentifiers` contiene datos sobre promociones aplicadas a los pedidos.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido, indicando el servidor o dominio que gestiona el pedido. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **lastchange** | timestamp with time zone | Fecha y hora de la última modificación realizada en el pedido, que refleja la actualización más reciente de status o contenido. |
| **status** | character varying(16383) | Status actual del pedido. |
| **rateandbenefitsidentifiers_id** | character varying(65535) | Identificador único para identificadores de cargos y promociones asociados al pedido. |
| **rateandbenefitsidentifiers_name** | character varying(65535) | Nombre o título de los identificadores de cargos y promociones, para proporcionar una identificación precisa del cargo o promoción. |
| **rateandbenefitsidentifiers_featured** | boolean | Indica si los identificadores de cargos y promociones están destacados o tienen una característica especial. |
| **rateandbenefitsidentifiers_description** | character varying(65535) | Descripción detallada de los identificadores de cargos y promociones, explicando sus recursos o beneficios. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |

## Tabla `orders_payments`

La tabla `payments` registra los detalles de los medios de pago utilizados.   Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido. Suele estar unido a la columna 'orderid' de la tabla 'vtex.orders_latest'. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido, indicando el servidor o dominio que gestiona el pedido. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **lastchange** | timestamp with time zone | Fecha y hora de la última modificación realizada en el pedido, que refleja la actualización más reciente de status o contenido. |
| **status** | character varying(16383) | Status actual del pedido. |
| **transactions_merchantname** | character varying(65535) | Nombre del retailer asociado a la transacción del pedido. |
| **group** | character varying(65535) | Grupo o categoría a la que pertenece el pedido o elemento. |
| **installments** | integer | Número de cuotas para el pago del pedido. |
| **value** | double precision | Valor monetario asociado a la transacción o elemento del pedido. |
| **transactions_paymentsystemname** | character varying(65535) | Nombre del sistema de pago utilizado en la transacción. |
| **transactions_paymentsystem** | character varying(65535) | Identificador del sistema de pago utilizado en la transacción. |
| **giftcards_id** | character varying(65535) | Identificador único de la tarjeta de regalo utilizada en el pedido. |
| **giftcards_name** | character varying(65535) | Nombre de la tarjeta de regalo utilizada. |
| **giftcards_caption** | character varying(65535) | Descripción o leyenda de la tarjeta de regalo utilizada. |
| **giftcards_value** | double precision | Valor monetario de la tarjeta de regalo. |
| **giftcards_balance** | double precision | Saldo remanente en la tarjeta de regalo después de utilizarla. |
| **giftcards_provider** | character varying(65535) | Proveedor o emisor de la tarjeta de regalo. |
| **giftcards_groupname** | character varying(65535) | Nombre del grupo o categoría a la que pertenece la tarjeta de regalo. |
| **giftcards_inuse** | boolean | Indica si la tarjeta de regalo está en uso o ha sido utilizada en el pedido. |
| **giftcards_isspecialcard** | boolean | Indica si la tarjeta de regalo es especial o promocional. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |
| **transactions_transactionid** | character varying(65535) | Identificador único de la transacción financiera asociada al pedido. |
| **transactions_referencevalue** | double precision | Valor de referencia de la transacción. Puede reflejar el valor total antes de descuentos o cargos. |  

## Tabla `orders_packages`  

La tabla `packages` almacena información sobre embalaje y envío de productos.   
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido, indicando el servidor o dominio que lo gestiona. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **lastchange** | timestamp with time zone | Fecha y hora del último cambio realizado en el pedido, que refleja la actualización más reciente de status o contenido. |
| **status** | character varying(16383) | Status actual del pedido. |
| **courier** | character varying(65535) | Nombre de la empresa transportadora o del servicio de envío asociado al pedido. |
| **invoicenumber** | character varying(65535) | Número de factura asociado al pedido. |
| **invoicevalue** | double precision | Valor total indicado en la factura del pedido. |
| **invoiceurl** | character varying(65535) | URL para acceder a la factura electrónica del pedido. |
| **issuancedate** | timestamp with time zone | Fecha de emisión de la factura del pedido. |
| **trackingnumber** | character varying(65535) | Número de seguimiento asociado al envío del pedido. |
| **invoicekey** | character varying(65535) | Clave única que identifica la factura del pedido. |
| **trackingurl** | character varying(65535) | URL para el seguimiento del envío del pedido. |
| **embeddedinvoice** | character varying(65535) | Información insertada o detalles de la factura del pedido. |
| **type** | character varying(65535) | Tipo o categoría del elemento o servicio asociado al pedido. |
| **courierstatus_delivereddate** | timestamp with time zone | Fecha de envío del pedido registrada por el servicio de la transportadora. |
| **courierstatus_status** | character varying(65535) | Status actual del envío registrado por el servicio de la transportadora. |
| **courierstatus_finished** | boolean | Indica si se ha completado el proceso de envío. |
| **courierstatus_data** | super | Datos detallados sobre el status de envío facilitados por el servicio de la transportadora. |
| **cfop** | character varying(65535) | Código Fiscal de Operações e Prestações (CFOP) asociado a la transacción del pedido en Brasil. |
| **packages_lastchange** | timestamp with time zone | Fecha y hora de la última modificación registrada en los paquetes del pedido. |
| **volumes** | integer | Número total de paquetes en el pedido. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |

## Tabla `orders_items`  

La tabla `items` almacena detalles de ítems individuales en cada pedido, incluyendo SKU, cantidad, precio y descuentos.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **orderid** | character varying(16383) | Identificador único para cada pedido. Suele estar unido a la columna 'orderid' de la tabla 'vtex.orders_latest'. |
| **hostname** | character varying(16383) | Nombre del host asociado al pedido; suele estar unido a columnas de otras tablas como 'vtex.client_registry_gold.hostname'. |
| **creationdate** | timestamp with time zone | Fecha y hora de creación del pedido, incluida la zona horaria. |
| **lastchange** | timestamp with time zone | Fecha y hora de la última modificación realizada en el pedido. |
| **status** | character varying(16383) | Status actual del pedido. |
| **tax** | double precision | Valor del impuesto aplicado al pedido. |
| **id** | character varying(65535) | Identificador único; suele estar unido a 'sku_id' de la tabla 'vtex.fulfilment_simulations_ca_silver'. |
| **productid** | character varying(65535) | Identificador del producto asociado al pedido. |
| **quantity** | integer | Cantidad del producto en el pedido. |
| **seller** | character varying(65535) | Identificador o nombre del seller del producto. |
| **sellersku** | character varying(65535) | SKU del producto como figura en la lista del seller. |
| **pricevaliduntil** | timestamp with time zone | Fecha y hora de vigencia del precio del producto. |
| **name** | character varying(65535) | Nombre del producto. |
| **additionalinfo_brandname** | character varying(65535) | Marca del producto. |
| **additionalinfo_brandid** | character varying(65535) | Identificador de la marca del producto. |
| **additionalinfo_caregoriesid** | character varying(65535) | Identificadores de las categorías asociadas al producto. |
| **additionalinfo_dimension_cubicweight** | double precision | Peso cúbico del producto a efectos de envío. |
| **additionalinfo_dimension_height** | double precision | Altura del producto. |
| **additionalinfo_dimension_length** | double precision | Longitud del producto. |
| **peso_dimension_adicional** | double precision | Peso del producto. |
| **additionalinfo_dimension_width** | double precision | Anchura del producto. |
| **price** | double precision | Precio del producto. |
| **pricetags** | super | Tags de precios asociados al producto. Pueden incluir descuentos y ofertas. |
| **sellingprice** | double precision | Precio de venta del producto. |
| **listprice** | double precision | Precio de lista del producto. |
| **imageurl** | character varying(65535) | URL de la imagen del producto. |
| **unidad de medida** | character varying(65535) | Unidad de medida del producto. |
| **unitmultiplier** | double precision | Multiplicador unitario del producto, utilizado en cálculos de precio y cantidad. |
| **batch_id** | character varying(13) | Identificador referente a la carga de datos en la tabla para control de calidad de la ingesta de datos. |

## Tabla `orders_extra_info`

Contiene información general del pedido registrada en el sistema OMS, incluyendo datos de creación, última modificación, identificación del cliente, artículos del pedido, datos personalizados, archivos adjuntos de cambios y control de lote.  

| Nombre de la Columna               | Tipo de Columna              | Descripción                                                                                             |
|------------------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------|
| orderid                             | character varying(255)        | Identificador único del pedido en el sistema OMS.                                                       |
| hostname                            | character varying(255)        | Host donde se creó el pedido. Usado junto con orderid como clave de enlace.                            |
| creationdate                        | timestamp with time zone      | Fecha y hora en que se creó el pedido en el sistema OMS.                                               |
| lastchange                          | timestamp with time zone      | Fecha y hora de la última modificación realizada al pedido.                                            |
| clientprofiledata_corporatename    | character varying(65535)      | Razón social del cliente en ventas B2B o persona jurídica.                                             |
| clientprofiledata_corporatedocument| character varying(65535)      | Documento corporativo del cliente (CNPJ/ID fiscal) en ventas B2B.                                      |
| clientprofiledata_iscorporate      | boolean                       | Indica si el pedido es de un cliente corporativo o una persona física.                                |
| items                               | super                         | Estructura JSON con información detallada de los artículos del pedido.                                 |
| customdata_customapps              | super                         | Estructura JSON con datos personalizados de apps específicos del pedido.                               |
| customdata_customfields            | super                         | Estructura JSON con campos personalizados adicionales del pedido.                                      |
| changesattachment_id               | character varying(65535)      | Identificador único de los archivos adjuntos relacionados con cambios en el pedido.                    |
| changesattachment_changesdata      | super                         | Estructura JSON con datos detallados sobre cambios y adjuntos del pedido.                             |
| batch_id                            | character varying(13)         | Identificador del lote de procesamiento para control e ingestión de datos.                             |
| changesattachment_href             | character varying(65535)      | URL o referencia al adjunto relacionado con cambios en el pedido.                                      |
| has_change_v2                       | boolean                       | Indica si hay cambios en la nueva versión (v2) del adjunto de cambios.                                 |

## Tabla `orders_custom_fields`

Almacena los campos personalizados configurados para pedidos en el OMS. Incluye el tipo y valor de cada campo, vinculados a entidades específicas como pedidos o artículos, permitiendo mayor flexibilidad en el modelado de datos.

| Nombre de la Columna     | Tipo de Columna              | Descripción                                                                                             |
|--------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------|
| orderid                  | character varying(255)        | Identificador único del pedido en el OMS.                                                                |
| hostname                 | character varying(255)        | Nombre del host o cuenta donde se creó el pedido.                                                       |
| creationdate             | timestamp with time zone      | Fecha y hora de creación del pedido.                                                                    |
| lastchange               | timestamp with time zone      | Fecha y hora de la última modificación del pedido.                                                      |
| linked_entity_id         | character varying(65535)      | Identificador de la entidad vinculada al campo personalizado.                                           |
| linked_entity_type       | character varying(65535)      | Tipo de entidad vinculada (por ejemplo: pedido, artículo, etc.).                                        |
| field_key                | character varying(65535)      | Nombre/clave del campo personalizado (generado vía UNPIVOT).                                            |
| field_value              | character varying(65535)      | Valor correspondiente a la clave del campo.                                                             |
| batch_id                 | character varying(13)         | Identificador del lote de procesamiento.                                                                |

## Tabla `orders_custom_apps`

Registra datos personalizados provenientes de aplicaciones específicas integradas al pedido. Cada entrada representa un campo de la aplicación con su versión, valor y clave, permitiendo rastrear extensiones personalizadas del OMS.

| Nombre de la Columna     | Tipo de Columna              | Descripción                                                                                             |
|--------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------|
| orderid                  | character varying(255)        | Identificador único del pedido en el OMS.                                                                |
| hostname                 | character varying(255)        | Nombre del host o cuenta donde se creó el pedido.                                                       |
| creationdate             | timestamp with time zone      | Fecha y hora de creación del pedido.                                                                    |
| lastchange               | timestamp with time zone      | Fecha y hora de la última modificación del pedido.                                                      |
| customapps_id            | character varying(65535)      | Identificador único de la aplicación personalizada.                                                     |
| customapps_major         | character varying(65535)      | Versión principal o categoría de la aplicación personalizada.                                           |
| field_key                | character varying(65535)      | Clave del campo en el objeto JSON de la aplicación (generado vía UNPIVOT).                             |
| field_value              | character varying(65535)      | Valor correspondiente a la clave del campo.                                                             |
| batch_id                 | character varying(13)         | Identificador del lote de procesamiento.                                                                |

## Análisis con datos de pedidos  

Los datos de los pedidos pueden utilizarse en los siguientes análisis:  

- **Análisis de ventas de ecommerce:** evaluar volumen de ventas, identificar productos más vendidos, analizar tendencias estacionales y comprender el comportamiento de los consumidores.  
- **Análisis de la tasa de cancelación de pedidos:** investigar los motivos de las cancelaciones, identificar patrones relacionados con productos específicos o problemas logísticos y desarrollar estrategias para reducir las tasas de cancelación.  
- **Desempeño de SKU**: analizar el desempeño de SKU individuales, comprender la demanda del mercado y realizar ajustes en el stock y en las estrategias de marketing.  

## Correlaciones con otros datos  

El conjunto de datos de pedidos se correlaciona con los siguientes conjuntos del ecosistema de datos de VTEX:  

- **Navegación:** los datos de navegación pueden correlacionarse con los pedidos para analizar el comportamiento del consumidor y la jornada de compra, lo que ayuda a optimizar la experiencia del usuario.  
- **Promociones:** la interacción con datos de promociones es fundamental para evaluar la eficacia de las campañas promocionales en el volumen y tipos de pedidos.  
- **Transacciones:** el análisis conjunto con datos de transacciones puede revelar patrones de pago, preferencias de los consumidores y eficiencia en el procesamiento de pagos.  

### Descubra otros conjuntos de datos

- [Stock](/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Navegación](/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagos](/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Precios](/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promociones](/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Tarjeta de regalo](/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Registro del Bridge](/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

