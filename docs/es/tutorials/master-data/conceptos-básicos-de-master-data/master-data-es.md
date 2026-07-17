---
title: 'Master Data'
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2026-07-08T18:37:00.000Z
contentType: tutorial
productTeam: Master Data
slugEN: master-data
locale: es
---

Master Data es una solución de la plataforma VTEX para bases de datos, altamente personalizable, que también permite la creación de aplicaciones.

De forma predeterminada, Master Data se usa para almacenar y organizar datos de clientes de tu tienda. Cuenta con un potente motor de búsqueda que te permite almacenar, buscar, expandir y personalizar datos.

En este artículo encontrarás más detalles sobre cada versión disponible de Master Data, conceptos importantes y cómo se utiliza.

> ℹ️ Ten en cuenta que, dependiendo de la funcionalidad y la versión que desees utilizar, deberás ponerte en contacto con el equipo de desarrollo de tu operación.

## Versiones disponibles

Actualmente existen dos versiones disponibles y puedes elegir la que mejor se adapte a las necesidades de tu operación. La principal diferencia entre las dos es que la versión v2 no tiene interfaz gráfica y solo puede utilizarse a través de la [Master Data API - v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2), aunque cuenta con otras funcionalidades relevantes, como el uso de [JSON schemas](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema).

> ℹ️ VTEX guarda automáticamente los datos de clientes de tu tienda en Master Data v1.

Consulta la tabla a continuación para saber más sobre las funcionalidades de cada versión.

| Funcionalidad | v1 | v2 | Más información |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Interfaz gráfica                              | Sí                                                                                                                                                                                                                                          | No                                                                                                                                                  | -                                                                                                                                                                                                                                                                                                                                                                                                        |
| API                                           | Sí                                                                                                                                                                                                                                          | Sí                                                                                                                                                  | - [Master Data API v1](https://developers.vtex.com/docs/api-reference/masterdata-api)<br>- [Master Data API v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#overview)                                                                                                                                                                                                              |
| Importación y exportación de hojas de cálculo | Sí                                                                                                                                                                                                                                          | No                                                                                                                                                  | - [Importar datos en Master Data v1](https://help.vtex.com/es/docs/tutorials/importar-datos-en-master-data-v1)<br>- [Exportación de datos de Master Data v1](https://help.vtex.com/es/docs/tutorials/exportacion-de-datos)                                                                                                                                                                               |
| Adjuntos (imágenes)        | Sí                                                                                                                                                                                                                                          | No                                                                                                                                                  | -                                                                                                                                                                                                                                                                                                                                                                                                        |
| Triggers                                      | Sí                                                                                                                                                                                                                                          | Sí                                                                                                                                                  | - [Triggers](#triggers)<br>- [Crear trigger en Master Data v1](https://help.vtex.com/es/docs/tutorials/creando-trigger-en-el-master-data)<br>- [Setting up triggers on Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2)                                                                                                                                    |
| JSON Schemas                                  | No                                                                                                                                                                                                                                          | Sí                                                                                                                                                  | - [JSON Schemas](http://json-schema.org/)<br>- [JSON Schema reference](https://json-schema.org/understanding-json-schema)<br>- [Working with JSON Schemas in Master Data v2](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema)<br>- [Schema Lifecycle (Master Data v2)](https://developers.vtex.com/docs/guides/master-data-schema-lifecycle) |
| Propiedades anidadas                          | No                                                                                                                                                                                                                                          | Sí                                                                                                                                                  | - [Propiedades anidadas](#propiedades-anidadas)                                                                                                                                                                                                                                                                                                                                                          |
| Entidades de datos                            | Referenciadas por acrónimos compuestos de dos letras mayúsculas. Por ejemplo, la entidad 'CL' almacena datos de clientes de la tienda y 'AD' los de direcciones. No pueden crearse por API. | Referenciadas por sus nombres. Por ejemplo, 'Notification'. Solo pueden crearse por API.            | - [Entidades de datos](#entidades-de-datos)<br>- [Entidades de datos en Master Data v1](https://help.vtex.com/es/docs/tutorials/entidade-de-datos)<br>- [Creating relationships between data entities using Master Data v2](https://developers.vtex.com/docs/guides/creating-relationships-between-data-entities-using-api)                                                                              |
| Campos                                        | Deben llenarse en el formato específico configurado en la entidad de datos.                                                                                                                                                 | En principio, no hay restricción de campos ni formatos. La validación del formato se realiza mediante JSON schemas. | - [Tipos de campos en Master Data v1](https://help.vtex.com/es/docs/tutorials/entidade-de-datos#tipos-de-datos)<br>- [JSON schemas](#v2-schemas)                                                                                                                                                                                                                                                         |
| Índices                                       | Sí                                                                                                                                                                                                                                          | Sí                                                                                                                                                  | - [Índices en Master Data v1](https://help.vtex.com/es/docs/tutorials/indices-en-master-data)<br>- [Create index (Master Data v2)](https://developers.vtex.com/docs/api-reference/master-data-api-v2#put-/api/dataentities/-dataEntityName-/indices)                                                                                                                                  |

> ❗ Ten en cuenta que las entidades de datos de las dos versiones son independientes, aunque algunas pueden ser análogas. Un dato creado en una entidad de la v1 no puede consultarse ni editarse usando recursos de la v2 y viceversa.

## Componentes básicos

Ambas versiones de Master Data utilizan algunos componentes básicos que pueden corresponder a conceptos conocidos con otros nombres en otras soluciones de bases de datos, como registro o tabla. A continuación encontrarás más detalles sobre:

- [Entidades de datos](#entidades-de-datos)
- [Documentos](#documentos)
- [Campos](#campos)
- [Índices](#indices)

### Entidades de datos

Las entidades de datos son como tablas donde se registran documentos y campos.

Las entidades de datos de Master Data v1 se referencian por acrónimos compuestos de dos letras mayúsculas. En la v2, puedes usar el nombre de la entidad de datos. Por ejemplo, en la v1 la entidad `CL` almacena datos de clientes de la tienda y `AD` guarda los datos de las direcciones de los clientes. Las entidades equivalentes en la v2 pueden referenciarse con nombres como `Client` y `Address`.

En una entidad de datos, la información se estructura en [documentos](#documentos) y [campos](#campos).

### Documentos

Los documentos son registros en una entidad de datos. Si las entidades de datos equivalen a tablas, cada documento corresponde a una fila de la tabla.

Por ejemplo, dentro de una entidad que almacena datos de clientes de la tienda, como `CL` o `Client`, cada documento contiene información de un cliente.

Cada documento tiene un ID generado automáticamente por la plataforma en el momento de su creación, un código único que identifica ese registro.

### Campos

Los atributos que componen los documentos de Master Data se denominan campos. Al comparar las entidades de datos con tablas, podemos pensar en los campos como las columnas de una tabla.

Por ejemplo, en una entidad que guarda datos de clientes de la tienda, como `CL` o `Client`, podemos llenar campos como **nombre**, **email**, **fecha de nacimiento** y **documento**.

En Master Data v1, los campos deben llenarse en el formato específico configurado en la entidad de datos. Consulta más información sobre los [tipos de campos en Master Data v1](https://help.vtex.com/es/docs/tutorials/entidade-de-datos#tipos-de-datos).

En la v2, en principio no hay restricción de campos ni formatos. La validación de formato se realiza mediante [JSON schemas](#v2-schemas).

#### Propiedades anidadas

Master Data v2 te permite estructurar los datos con propiedades anidadas, una estructura que se encuentra frecuentemente en formato [JSON](https://www.json.org/json-en.html). Este concepto permite crear campos compuestos por otros campos para estructurar mejor los datos. Por ejemplo, un perfil de cliente puede tener el campo `Documento` que a su vez está compuesto de las propiedades `Tipo` y `Número`. También es posible crear [triggers](#triggers) anidados.

### Índices

Los índices se usan para especificar un documento al que se desea acceder, indicado por un campo indexado en lugar de su ID.

Como se mencionó anteriormente, cada documento tiene un ID generado automáticamente por la plataforma en el momento de su creación. Si deseas consultar un documento y no sabes su ID, puedes usar índices.

Por ejemplo, puedes consultar un documento con información de un cliente especificando el valor del campo `email` correspondiente al cliente.

> ℹ️ Consulta cómo configurar [Índices en Master Data v1](https://help.vtex.com/es/docs/tutorials/indices-en-master-data) o configurar índices con la Master Data API - v2 [Create index](https://developers.vtex.com/vtex-rest-api/reference/putindices).

## Triggers

Un trigger de Master Data es un mecanismo que ejecuta una acción tras la creación o actualización de un documento, siempre que se cumplan las condiciones establecidas en la configuración. Estas acciones pueden ser de tres tipos:

- Enviar solicitud HTTP.
- Enviar email.
- Guardar documento en otra entidad de datos.

Consulta cómo [Crear triggers en Master Data v1](https://help.vtex.com/es/docs/tutorials/creando-trigger-en-el-master-data) o cómo configurarlos con [Master Data API - v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)

## v2 schemas

Master Data v2 te permite definir formatos de datos con JSON schemas. Este formato indica cómo Master Data debe validar e indexar documentos.

> ℹ️ Consulta más información sobre [JSON schemas](https://json-schema.org/).

Puedes guardar un documento en cualquier entidad de datos si el contenido es un JSON válido. Una entidad de datos puede tener uno o más JSON schemas asociados.

![Master Data schemas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/conceitos-básicos-do-master-data/master-data_1.jpg)

> ℹ️ Un documento puede ser compatible con múltiples JSON Schemas, pero también puede no ser compatible con ninguno.

## Entidades nativas de Master Data

VTEX crea automáticamente algunas entidades de datos para admitir funcionalidades nativas de la plataforma.

### Entidades nativas de Master Data v1

| **Entidad** | **Descripción** |
|-----------|----------|
| `ad` | Domicilios de clientes |
| `ae` |  |
| `al` |  |
| `AS` | Availability Notifier (fuente más probable) |
| `au` | Registro de auditoría |
| `bb` | Buzz billing |
| `bk` | Bucket (clave/valor genérico) |
| `bo` | BridgeOrder |
| `bx` | Buzz extract |
| `cl` | Cuentas de clientes (clients) |
| `CS` | Casino Gift Card |
| `gc` | Gift cards |
| `gt` | Restricciones de gift card |
| `hl` | Feriados |
| `il` | Logs internos |
| `iw` | Advertencias internas |
| `iy` | Ítem de disponibilidad |
| `mb` | BridgeOrderMarketplace |
| `od` | Pedidos |
| `rd` | Pedido (espejo) |
| `sb` | BridgeOrderSeller |
| `se` | - |
| `sl` | - |
| `so` | Tiendas |
| `SP` | Middleware Smiles Checkout |

### Entidades nativas de Master Data v2

| **Entidad** | **Descripción** |
|-----------|----------|
| `account` | Moneda digital |
| `affiliates` | Afiliados |
| `affiliatesOrders` | Servicio de comisión de afiliados |
| `agentchangeappstate` | Cambio de estado de la app por el agente |
| `aggregateddayorders` | Pedidos agregados por día |
| `audit` | Entidad de auditoría de la v2 |
| `b2b_profiles` | Permisos de storefront |
| `b2b_quote_marketplace` | b2b_quote_marketplace |
| `b2b_roles` | Permisos de storefront |
| `b2b_seller_quote` | b2b_seller_quote |
| `b2b_users` | Permisos de storefront (owner) |
| `badges` | Badges |
| `bulkstatus` | Estado masivo |
| `business` | Servicio de piloto automático de ventas |
| `BusinessOrganization` | Easy Setup (seeder B2B heredado) |
| `BusinessPermission` | Easy Setup (seeder B2B heredado) |
| `BusinessRole` | Easy Setup (seeder B2B heredado) |
| `buyerOrgConfiguration` | VTEX B2B Core |
| `buyerOrgMember` | VTEX B2B Core |
| `campaigns` | Servicio de campañas de opt-in (compartido con el listener de campañas de opt-in) |
| `CANCEL_ORDER_FISCAL_CODE` | Notificación de pedidos por SMS |
| `charge` | Moneda digital |
| `checkoutcustom` | Checkout UI Custom |
| `clients` | Clientes |
| `commissionBySKU` | Servicio de comisión de afiliados |
| `commissioningreportentry` | Entrada de informe de comisiones |
| `commissioninvoices` | Comisiones financieras del marketplace |
| `contact_information` | contact_information |
| `cost_centers` | B2B Organizations GraphQL |
| `creditAccount` | Moneda digital |
| `custom_prices` | Precios personalizados (B2B) |
| `customFieldSettings` | Configuraciones de campos personalizados de la v2 |
| `customFieldValues` | Valores de campos personalizados de la v2 |
| `dataentitysettings` | Configuraciones de la entidad de datos |
| `defaultValues` | defaultValues |
| `eventinfo` | Worldline Global Collect |
| `eventRegistry` | Spreadsheet Event Broadcaster |
| `evolutionAppsUpdateEvent` | Account Updates |
| `evolutiondeloreanupdateevent` | Evento de actualización de Delorean (Evolution) |
| `evolutionworkspacepromotion` | Promoción de workspace (Evolution) |
| `exemption` | Avalara |
| `externalinvoices` | Comisiones financieras del marketplace |
| `fbeconfiguration` | Configuración de FBE |
| `fulfillment-points` | Admin de capacidad operativa |
| `giftCardList` | Lista de gift cards |
| `import_session` | Importación de productos |
| `import_session_config` | Importación de productos |
| `instoreSettings` | Admin de inStore (POS) |
| `interaction` | Rastreador de envíos |
| `inventory` | Inventario |
| `itemavailability` | Disponibilidad de ítem |
| `leyGondolas` | Admin de la Ley de Góndolas ARG |
| `logisticsorderinfo` | Información logística del pedido |
| `mcf_admin_app` | Amazon MCF Admin |
| `module` | Servicio de piloto automático de ventas |
| `multiTransaction` | Smiles Payment Provider MD |
| `myWishlist` | Lista de deseos v2 |
| `myWishlists` | myWishlists |
| `notify` | Availability Notifier |
| `onboarding` | Adyen Platforms |
| `onboarding_modifications` | Orders GraphQL |
| `ORDER_FISCAL_CODE` | Notificación de pedidos por SMS |
| `orderInfo` | Octopia (casino) |
| `orders` | Entidad de pedidos de la v2 |
| `orders_items` | Ítems de pedidos |
| `orders_logistics` | Logística de pedidos |
| `ordersWithExternalPromotions` | External Promotion Monitoring GraphQL |
| `organization_requests` | B2B Organizations GraphQL |
| `organizations` | B2B Organizations GraphQL |
| `packages` | Paquetes |
| `paymentid2c2p` | Pago 2C2P |
| `payuStatus` | Conector PayU Europa |
| `pickup_points` | Puntos de retiro |
| `pins` | Sales Performance GraphQL |
| `productInfo` | Octopia (casino) |
| `productReviews` | Reseñas y calificaciones |
| `productsWithError` | Servicio de monitoreo de productos |
| `promotionsCron` | Servicio de campañas de opt-in |
| `promotionsTrack` | Servicio de campañas de opt-in |
| `proposal` | Servicio de piloto automático de ventas |
| `queuemessagevo` | Objeto de valor de mensaje de cola de la v2 |
| `quotes` | B2B Quotes GraphQL |
| `rangeSafelist` | Listener de campañas de opt-in |
| `report_generations` | Generaciones de informes |
| `report_maps` | Mapas de informes |
| `Reseller` | Easy Setup (seeder B2B heredado) |
| `ReturnApp` | ReturnApp |
| `returnRequest` | Return App |
| `scheduler` | Programador de la v2 |
| `schema` | Esquema |
| `sellerInfo` | Vertex O Series |
| `sellersdashboards` | Comisiones financieras del marketplace |
| `shipment` | Rastreador de envíos |
| `shopper` | Perfil del comprador de la v2 |
| `smilesProductMapping` | Smiles Payment Provider MD |
| `smilesSellerConfiguration` | Smiles Payment Provider MD |
| `smilesTransaction` | Smiles Payment Provider MD |
| `smsMessagesSchema` | Integración de SMS Orange |
| `SNA` | Seller Notification App |
| `srapi` | SRAPI |
| `statisticsdashboards` | Comisiones financieras del marketplace |
| `stores` | Tiendas |
| `subscription` | Suscripción de la v2 (recurrent commerce) |
| `subscription_cohort` | Cohorte de suscripciones |
| `subscription_history` | Historial de suscripciones |
| `subscription_metric` | Métrica de suscripciones |
| `subscription_orders` | Pedidos de suscripciones |
| `subscription_preferences` | Preferencias de suscripciones |
| `subscriptions` | Suscripciones |
| `subscriptions_execution` | Ejecución de suscripciones |
| `subscriptions_group` | Grupo de suscripciones |
| `subscriptions_thin` | Suscripciones (versión reducida) |
| `templates` | Servicio de piloto automático de marketing |
| `tms_orders` | Pedidos del TMS |
| `tradePolicyConfig` | Vertex O Series |
| `trainingBanners` | Training Banners App |
| `transaction` | Moneda digital |
| `transportation_order` | Pedido de transporte |
| `undefined` |  |
| `userAffiliation` | Afiliados |
| `UserOrganization` | Easy Setup (seeder B2B heredado) |
| `vendors` | Vendors |
| `vendors_carts` | Carritos de vendors |
| `views` | Sales Performance GraphQL |
| `vtable` |  |
| `vtex_admin_cms_graphql_builder` | Admin CMS GraphQL builder |
| `vtex_admin_cms_graphql_content` | Admin CMS GraphQL (declarada como nativa de la v2) |
| `vtex_admin_cms_graphql_contentVariant` | Admin CMS GraphQL (declarada como nativa de la v2) |
| `vtex_admin_media_image` | Admin de medios (imagen) |
| `vtex_affiliates_affiliates` | Afiliados |
| `vtex_affiliates_commission_service_affiliatesorders` | Servicio de comisión de afiliados |
| `vtex_affiliates_commission_service_commissionbysku` | Servicio de comisión de afiliados |
| `vtex_affiliates_useraffiliation` | Afiliados |
| `vtex_b2b_core_buyerorgconfiguration` | VTEX B2B Core |
| `vtex_b2b_core_buyerorgmember` | VTEX B2B Core |
| `vtex_badges_badges` | Badges |
| `vtex_builder_hub_appid_to_schema` | Builder Hub |
| `vtex_builder_hub_appversion_to_mostrecentschema` | Builder Hub |
| `vtex_connector_payu_payustatus` | Conector PayU Europa |
| `vtex_defense_mode_threats` | Amenazas del Defense Mode |
| `vtex_gift_card_list_giftcardlist` | Lista de gift cards |
| `vtex_innoship` | Innoship |
| `vtex_list_graphql_userlistitems` | Ítems de listas de usuarios (List GraphQL) |
| `vtex_list_graphql_userlists` | Listas de usuarios (List GraphQL) |
| `vtex_list_graphql_users` | Usuarios (List GraphQL) |
| `vtex_onboarding_seller_sellerinvitations` | Invitaciones de sellers (onboarding de sellers) |
| `vtex_orders_graphql_onboardingusers` | Usuarios de onboarding (Orders GraphQL) |
| `vtex_pagespeed_graphql_top_pages` | Páginas principales (PageSpeed GraphQL) |
| `vtex_pagespeed_graphql_toppages` | Páginas principales (PageSpeed GraphQL) |
| `vtex_pagespeed_graphql_tracked_pages` | Páginas monitoreadas (PageSpeed GraphQL) |
| `vtex_pagespeed_graphql_trackedpages` | Páginas monitoreadas (PageSpeed GraphQL) |
| `vtex_ppp_stripe_connect_sellerorders` | Pedidos de sellers (Stripe Connect) |
| `vtex_products_monitoring_service_productswitherror` | Servicio de monitoreo de productos |
| `vtex_return_app_returnrequest` | Return App |
| `vtex_sales_performance_graphql_pins` | Sales Performance GraphQL |
| `vtex_sales_performance_graphql_views` | Sales Performance GraphQL |
| `vtex_spreadsheet_event_broadcaster_eventregistry` | Spreadsheet Event Broadcaster |
| `vtex_wishlist_io_wishlistitems` | Wishlist IO |
| `vtex_wishlist_io_wishlists` | Wishlist IO |
| `wishlist` | Lista de deseos (heredado .NET) |
| `wishlistitems` | Wishlist IO |
| `wishlists` | Wishlist IO |

## Entidades de datos personalizadas

Además de las [entidades nativas](#entidades-nativas-del-master-data) que VTEX crea automáticamente, como `CL` (clientes), `AD` (direcciones) y demás entidades predeterminadas de la plataforma de comercio, tu operación puede crear entidades de datos personalizadas para almacenar información específica de tu negocio.

Las entidades personalizadas se pueden crear:

- En la v1, vía Admin VTEX. Consulta cómo [Crear una entidad de datos](https://help.vtex.com/es/docs/tutorials/entidade-de-datos).
- En la v2, exclusivamente vía [Master Data API - v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2).

### Facturación

El uso de entidades nativas es gratuito. El uso de entidades personalizadas se factura mensualmente, en rangos que varían según el volumen total de documentos almacenados. Para fines de facturación, cada archivo de hasta 100 KB se contabiliza como un documento.

Para ver los valores aplicables a tu operación, consulta tu contrato comercial o ponte en contacto con el [Soporte de VTEX](https://support.vtex.com/).

Por cada pago realizado durante la vigencia del contrato, se concede un crédito de facturación equivalente al 2% del valor neto pagado por los productos VTEX Commerce Platform y CX Commerce Platform. Los créditos se acumulan durante la vigencia del contrato y están disponibles para utilizarlos hasta su finalización.

Tanto la medición como la facturación siguen un ciclo mensual:

- Al final de cada mes, se genera un snapshot del volumen de documentos almacenados en entidades no nativas.
- Hasta el día 30 de cada mes, VTEX calcula los valores correspondientes al uso de Master Data y los créditos aplicables para la próxima factura.

> ℹ️ Para hacer seguimiento del volumen de documentos en entidades personalizadas a lo largo del mes, consulta el dashboard **Uso de Master Data** en el Admin VTEX. Este dashboard se actualiza semanalmente y está destinado únicamente al seguimiento del uso. Las instrucciones de acceso están disponibles en Consultar el uso de Master Data en el Admin VTEX.

### Eliminar entidad vs. eliminar documentos

Al intentar reducir el volumen contabilizado en el snapshot mensual de facturación, es importante distinguir la eliminación de la **entidad de datos** (estructura en Admin VTEX) de la eliminación de los **documentos** (registros almacenados).

> ⚠️ Eliminar una entidad de datos personalizada a través de la interfaz de Master Data v1 elimina la definición de la entidad, pero no elimina los documentos (registros) ya almacenados. El volumen facturado permanece sin cambios hasta que los registros se eliminen mediante la API. Para eliminar documentos y reducir la facturación, consulta la guía [Deleting documents in Master Data v1](https://developers.vtex.com/docs/guides/deleting-documents-in-master-data-v1) en el portal de desarrolladores.

## Aplicaciones

## Casos de uso

Ambas versiones de Master Data son nativamente adecuadas para administrar datos de clientes de tu tienda. Pero como se mencionó anteriormente, son extremadamente flexibles y permiten atender diversas necesidades de tu tienda. Consulta a continuación algunos ejemplos de aplicación de las funcionalidades de Master Data más allá de la administración básica de datos de clientes.

### Pruebas A/B

Con los triggers de la v2, puedes establecer múltiples acciones para un mismo trigger, configurando el porcentaje de carga que cada acción debe recibir. Esto permite comparar el impacto de diferentes automatizaciones en tu tienda.

Consulta cómo configurar pruebas A/B con Master Data v2 en [A/B testing Master Data v2 trigger actions](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Carrito abandonado

Master Data también puede utilizarse para crear integraciones de carrito abandonado. Es decir, la ejecución de acciones automáticas siempre que un cliente agregue productos al carrito de tu tienda y termine su sesión sin finalizar la compra.

Para saber más, consulta la guía [Configurar carrito abandonado](https://help.vtex.com/es/docs/tutorials/configurar-carrito-abandonado)
