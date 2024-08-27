---
title: 'Eventos disponibles en Audit'
id: 6r1Mzcu5NmkmmDLJlz9CCZ
status: PUBLISHED
createdAt: 2022-06-22T16:05:16.214Z
updatedAt: 2024-06-28T18:16:11.762Z
publishedAt: 2024-06-28T18:16:11.762Z
firstPublishedAt: 2022-06-22T16:28:52.801Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slug: eventos-disponibles-en-audit
locale: es
legacySlug: eventos-disponibles-en-audit
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---

A continuación, verás la lista de posibles eventos disponibles en [Audit] (https://help.vtex.com/es/tutorial/audit--5RXf9WJ5YLFBcS8q8KcxTA) para cada aplicación.

* [OMS](#oms)
* [Pedidos](#pedidos)
* [Autorización del pedido](#autorizacion-del-pedido)
* [Inventario y envio](#inventario-y-envio)
* [Catálogo (Admin)](#catalogo-admin)
* [Catálogo (API)](#catalogo-api)
* [Precios](#precios)
* [Promociones](#promociones)
* [Suscripciones](#suscripciones)
* [Carteras](#carteras)
* [Tarjeta de regalo](#tarjeta-de-regalo)
* [Checkout](#checkout)
* [Portal CMS](#portal-cms)
* [License Manager](#license-manager)
* [VTEX ID](#vtex-id)
* [Headless CMS](#headless-cms)
* [Gestión de sellers](#gestion-de-sellers)

>ℹ️ Si, en Audit, ves algún evento no incluido en esta lista, por favor, envíanos más información a través de la [página de feedback sobre documentación](https://docs.google.com/forms/d/e/1FAIpQLSfmnotPvPjw-SjiE7lt2Nt3RQgNUe10ixXZmuO2v9enOJReoQ/viewform).

>⚠️ En el módulo Audit, al hacer clic en los filtros de auditoría puedes encontrar **Opciones de envío**, **Profile System** y **Billing**, además de otras aplicaciones citadas a continuación. Estas opciónes se refieren a recursos internos o funcionalidades en beta cerrada, por lo que la mayoría de las cuentas no tendrán eventos asociados.

## OMS

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| Start Handling | Acción que le indica a VTEX que la tienda comenzó a preparar determinado pedido. Esto desencadena la continuidad del flujo de dicho pedido. | ID del pedido. |
| Change Status | Cambio en el status de un pedido. | ID del pedido. |
| Shipping Notification  | Notificación de envío de un pedido determinado.  | ID del pedido.  |
| Payment Notification | Envío de notificación de pago de un pedido determinado. | ID del pedido. |
| Save Configuration | Cambio en la configuración del módulo de pedidos. | Breve descripción del cambio. |
| Resend Last Email | Reenvío del último email relacionado con el pedido en el Centro de mensajes. | ID del pedido. |

## Pedidos

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| Change State | Cambio en el status de un pedido. | ID del pedido. |
| Order Cancellation | Cancelación de un pedido. | ID del pedido. |
| Start Handling  | Acción que le indica a VTEX que la tienda comenzó a preparar determinado pedido. Esto desencadena la continuidad del flujo de dicho pedido.  | ID del pedido.  |
| Notify Payment | Envío de notificación de pago de un pedido determinado. | ID del pedido. |

## Autorización del pedido

| Acción | Descripción del evento  | Detalles del evento  |
|---|---|---|
| Create Rule | Creación de una regla de divergencia de valores.  | ID de la regla. |
| New Dimension | Creación de dimensiones para la aprobación de pedidos, como el intervalo de valor del pedido, lista de correos electrónicos autorizados a realizar la aprobación de pedidos, entre otros.  | ID de la dimensión. |
| Delete Dimension | Exclusión de dimensiones para la aprobación de pedidos, como el intervalo de valor del pedido, lista de correos electrónicos autorizados a realizar la aprobación de pedidos, entre otros.  | ID de la dimensión. |
| Update Dimension | Actualización de dimensiones para la aprobación de pedidos, como el intervalo de valor del pedido, lista de correos electrónicos autorizados a realizar la aprobación de pedidos, entre otros.  | ID de la dimensión. |
| Update Rule | Edición de una regla de divergencia de valores.  | ID de la regla. |
| Delete Rule | Exclusión de una regla de divergencia de valores.  | ID de la regla. |

## Inventario y envio

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| Carrier Create | Creación de transportadora. | ID de la transportadora. |
| Carrier Update | Actualización de transportadora. | ID de la transportadora. |
| Carrier Delete | Eliminación de la transportadora. | ID de la transportadora. |
| Dock Create | Creación de almacén. | ID del almacén. |
| Dock Update | Actualización de almacén. | ID del almacén. |
| Dock Delete | Eliminación de almacén. | ID del almacén. |
| Warehouse Create | Creación de stock. | ID del stock. |
| Warehouse Update | Actualización de stock. | ID del stock. |
| Warehouse Delete | Eliminación de stock. | ID del stock. |
| Pickup Point Save | Creación o modificación del punto de recogida. | ID del punto de recogida. |

## Catálogo (Admin)

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| Product Activation | Activación del producto. Este evento se registra únicamente cuando se realizan cambios en el Admin. Los cambios realizados en plantillas no se registran en este evento. | ID del producto. |
| Product Commercial Condition Change | Cambios en las condiciones comerciales de un producto. | ID del producto y lista de las condiciones modificadas. |
| SKU Attachment Association | Asociación de un adjunto a un SKU. | ID del SKU, nombre e ID del adjunto. |
| Archive Upload | Envío de archivo. | Nombre de archivo. |
| Field Activation | Activación de campo de catálogo. | Nombre, ID y status del campo. |
| SKU Seller Binding | Conexión de un SKU con un seller. | ID del seller, ID del SKU en el catálogo del seller e ID del SKU en el catálogo del marketplace. |
| SKU Seller Unbinding | Eliminación de la conexión entre un SKU y un seller. | ID del seller, ID del SKU en el catálogo del seller e ID del SKU en el catálogo del marketplace. |
| SKU Seller Removal | Eliminación del SKU del seller. | ID del SKU en el catálogo del seller. |

## Catálogo (API)

| Acción | Descripción | Detalles del evento |
|---|---|---|
|  SKU Seller Binding Removal | Eliminación de enlace de SKU. | ID del SKU en seller y ID del seller. |
| Seller Update | Actualización de seller. | ID del seller. |
| Seller Creation | Creación de seller. | ID del seller. |
| SKU Seller Binding Activation | Activación de vinculación de SKU. | ID del SKU en seller y ID del seller. |
| SKU Seller Binding Inactivation | Inactivación de vinculación de SKU. |  ID del SKU en seller y ID del seller. |

## Precios

| Acción | Descripción | Detalles del evento |
|---|---|---|
| Put Price | Creación o modificación del precio de un SKU determinado. | ID del SKU. |
| Save Price Table | Creación o modificación de la tabla de precios. | Identificación de la tabla creada o modificada. |
| Save Price Tables | Creación o modificación de varias tablas de precios. | Identificación de las tablas creadas o modificadas. |
| Price Deleted | Eliminación del precio de un SKU determinado. | ID del SKU. |
| Save Config | Creación o modificación de la configuración del precio. | Identificación de la configuración creada o modificada. |
| Fixed Price Modified | Modificación del precio fijo. | Identificación del precio fijo modificado. |
| Put Catalog Step | Creación o modificación de una regla de precio. | Regla de precio creada o modificada. |
| Deleted Fixed Prices From Table | Eliminación del precio fijo de la lista de precios correspondiente. | Identificación de la lista y del precio eliminado. |
| Compatibility Post Prices | Modificación del precio utilizando la API de compatibilidad con el contrato de PricingV1. | Identificación del precio modificado. |
| Change Rnb Config  | Cambio en la configuración de precios para nuevas cuentas.  | Nombre de la cuenta que ha realizado el cambio. |

## Promociones

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| Archive Coupon | Archivar un cupón. | Código del cupón. |
| Unarchive Coupon | Desarchivar un cupón. | Código del cupón. |
| Change Rate Configuration | Modificación de la configuración de la tasa. | ID de la configuración de la tasa. |
| Change Promotion Configuration | Modificación de la configuración de la promoción. | ID de la configuración de la promoción. |
| Change Coupon Configuration | Cambio en el cupón. | Código de cupón. |
| Unarchived Calculator | Desarchivar promoción o tasa. | ID de la configuración de la promoción o tasa. |
| Archived Calculator | Archivar promoción o tasa. | ID de la configuración de la promoción o tasa. |

## Suscripciones

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| SubscriptionGroup Update | Actualización de un grupo de suscripción. | ID de grupo de suscripción. |
| Subscription Create | Creación de una suscripción. | ID de suscripción. |
| SubscriptionGroup Place Order | Creación de un pedido de suscripción dentro de un grupo de suscripción. | ID de grupo de suscripción. |
| SubscriptionGroup Retry | Ejecución de un intento de generar un ciclo de suscripción. | ID de grupo de suscripción. |
| Subscription Delete | Eliminación de una suscripción. | ID de suscripción. |
| Plan Create | Creación de un plan de suscripción en el que las tiendas pueden asociar diferentes artículos y SKU. | ID de plan de suscripción. |
| Plan Update | Actualización de un plan de suscripción, donde las tiendas pueden asociar diferentes artículos y SKUs. | ID de plan de suscripción. |
| Subscriber Fetch By Email | Auditoría de quién ha buscado los datos de perfil de un cliente de una tienda que se ha suscrito, a partir del correo electrónico del cliente. | ID del usuario que ha realizado la búsqueda. |
| SubscriptionGroup Create For Order | Creación de un grupo de suscripción para un pedido existente. | ID de grupo de suscripción. |
| Plan Delete | Eliminación de un plan de suscripción. | ID de plan de suscripción. |
| Store Payments Update | Actualización de los métodos de pago aceptados por la tienda para las suscripciones. | Nombre de la cuenta. |

## Carteras

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| TOGGLE_WALLET | Activar o desactivar una cartera digital. | toggle-wallet-action |

## Tarjeta de regalo

| Acción | Descripción | Detalles del evento |
|---|---|---|
| LIST_GIFT_CARD | Consultación de la lista de tarjetas de regalo. | list-gift-card |
| EXPORT_GIFT_CARD | Exportación de tarjetas de regalo. | export-gift-card |
| EDIT_GIFT_CARD | Edición del valor de la tarjeta de regalo. | add-gift-card-value |
| CREATE_GIFT_CARD | Creación de tarjeta de regalo. | create-multiple-gift-cards |

## Checkout

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| SaveOrderFormConfiguration | Cambio de la configuración de OrderForm, que se encarga del funcionamiento del checkout de la tienda. | Descripción de la acción (”configurated OrderForm”) |

## License Manager

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| Block AppToken | Bloqueo de clave de aplicación. | Clave de aplicación bloqueada. |
| Accept Sponsor Invite | Aceptación de invitaciones para ser usuario titular. | ID del usuario que aceptó la invitación. |
| Save User | Creación de nuevo usuario o modificar sus datos. | ID de usuario. |
| Save Account | Creación de cuenta o modificar la información de la misma. | Cuenta creada o modificada. |
| Change Role | Editar rol. | Rol editado. |
| Delete Role | Eliminar rol. | Rol eliminado. |
| Unblock AppToken | Bloqueo de clave de aplicación. | Clave de aplicación bloqueada. |
| Resource Access Allowed | Acceso al recurso permitido. | Clave del recurso e ID del usuario al que se le ha dado acceso. |
| Cancel Sponsor Invite | Cancelación de invitación para usuario titular. | ID de usuario invitado. |
| Delete User | Eliminar usuario. | ID del usuario eliminado. |
| Update Binding | Actualización de binding. | Binding actualizado. |
| Resource Access Denied | Acceso al recurso denegado. | Clave del recurso e ID del usuario al que se le denegó. |
| Create New AppToken | Creación de clave de aplicación. | Clave de aplicación creada. |
| Create Sponsor Invite | Crear invitación para usuario titular. | ID del usuario que recibirá la invitación. |

## VTEX ID

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| PasswordCreated | El usuario registra una contraseña por primera vez en la tienda o en el Admin VTEX. | ID de usuario. |
| PasswordUpdated | El usuario cambia su contraseña de la tienda o del Admin VTEX. | ID de usuario. |
| IdentityProviderChanged | Cambios en la configuración del proveedor de identidad. Por ejemplo, cuando se crea una integración OAuth personalizada, o se modifica la información de una configuración OAuth existente. | Proveedor de identidad. |

## Master Data

| Acción  | Descripción  | Detalles del evento |
|---|---|---|
| DeleteDocument | Eliminación de un documento. | ID del documento. |

## Headless CMS

| Acción | Descripción | Detalles del evento |
|---|---|---|
| TRY_PUBLISHING | Intento de publicar una página. | ID del evento. |
| TRY_PUBLISH_IN_RELEASE | Intento de publicar un release. | ID del evento. |
| TRY_UNPUBLISHING | Intento de despublicar una página. | ID del evento. |
| RESTORE_CONTENT | Restauración de contenido. | ID del evento. |
| TRY_UPDATING_DRAFT | Intento de actualizar un borrador. | ID del evento. |
| TRY_UNPUBLISHING_AND_OVERWRITING | Intento de despublicar y sobrescribir una página. | ID del evento. |
| done.invoke.deleteContent | Eliminación de contenido. | ID del evento. |
| done.invoke.deleteContentVariant | Eliminación de una versión del contenido. | ID del evento. |

En la columna **Acción**, todos los eventos de Headless CMS también muestran la siguiente información:

* **CONTENT_ID:** código identificador único de contenido.
* **VARIANT_ID:** código identificador único de la versión del contenido.
* **WORKSPACE**: workspace en el que se realizó el cambio.

## Gestión de sellers

| Acción | Descripción | Detalles del evento |
|---|---|---|
| Update Seller | Edición de seller. | Seller ID. |
| Save Seller | Creación de seller. | Seller ID. |
