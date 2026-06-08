---
title: 'Roles de usuario predefinidos'
id: jGDurZKJHvHJS13LnO7Dy
status: PUBLISHED
createdAt: 2022-04-07T21:34:06.385Z
updatedAt: 2025-04-09T19:03:02.620Z
publishedAt: 2025-04-09T19:03:02.620Z
firstPublishedAt: 2022-04-07T21:48:28.951Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: predefined-roles
legacySlug: perfiles-de-acceso-predefinidos
locale: es
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

[Roles de usuario](/es/docs/tutorials/roles) agrupan los [recursos del License Manager](/es/docs/tutorials/recursos-del-license-manager), siendo que cada recurso representa una permisión en la plataforma VTEX.

En este documento, se enumeran roles que están predefinidos para las nuevas tiendas VTEX y sus respectivos recursos. Para acceder a ellos directamente, utilice la lista a continuación.

> ℹ️ Para obtener más información sobre cada recurso listado en los perfiles a continuación, consulte el artículo [Recursos del License Manager](/es/docs/tutorials/recursos-del-license-manager).

* [Admin - Start page only](#admin-start-page-only)
* [Ad Network Advertiser](#ad-network-advertiser)
* [Billing](#billing)
* [Checkout Admin](#checkout-admin)
* [Call center operator](#call-center-operator)
* [Content Administrator](#content-administrator)
* [Finance](#finance)
* [Finance - Full access](#finance-full-access)
* [inStore Sales Person](#instore-sales-person)
* [Sales App - Sales Associate](#sales-app-sales-associate)
* [IntegrationProfile - Fulfillment](#integrationprofile-fulfillment)
* [IntegrationProfile - Fulfillment Gateway](#integrationprofile-fulfillment-gateway)
* [IntegrationProfile - Fulfillment Gateway GetOrder](#integrationprofile-fulfillment-gateway-getorder)
* [IntegrationProfile - Fulfillment Gateway Oms](#integrationprofile-fulfillment-gateway-oms)
* [IntegrationProfile - Fulfillment Oms](#integrationprofile-fulfillment-oms)
* [IntegrationProfile - OrderSimulation](#integrationprofile-ordersimulation)
* [Logistics - Full access](#logistics-full-access)
* [Logistics - Read only](#logistics-read-only)
* [OMS - Full access](#oms-full-access)
* [OMS - Read only](#oms-read-only)
* [Owner (Admin Super)](#owner-admin-super)
* [Payments Notifier](#payments-notifier)
* [Seller Manager](#seller-manager)
* [User Administrator - RESTRICTED](#user-administrator-restricted)
* [VTEX IO Admin](#vtex-io-admin)
* [VTEX Payment - Account Holder](#vtex-payment-account-holder) *(obsoleto)*
* [VTEX Payment - Bookkeeper](#vtex-payment-bookkeeper) *(obsoleto)*

## Ad Network Advertiser

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Insights Metrics | Insights | Analysis | Permite visualizar de forma irrestricta todas las métricas y datos presentes en los dashboards del Admin VTEX, incluyendo las páginas: Rendimiento de Ventas, Home page del Admin, Insights y Audit. |
| View Advertiser's details | VTEX Ad Network | Advertisers | Visualizar información del anunciante relacionada con VTEX Ad Network. |
| View Advertiser's campaigns | VTEX Ad Network | Advertisers | Visualizar información de las campañas de un anunciante de VTEX Ad Network. |
| Edit Advertiser's campaigns | VTEX Ad Network | Advertisers | Editar información de las campañas de un anunciante de VTEX Ad Network. |

## Billing

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Invoices List | Billing | Invoice | Visualización del listado de facturas del cliente, así como el detalle de la factura, que incluye información como GMV y take rate. |
| Edit Company Information | Billing | Company | Editar la información de registro de un cliente, que incluye: razón social, nombre comercial, branch, sales region, tier, estado de facturación y dirección. |
| Display Company info | Billing | Company | Visualizar la información de registro de un cliente, que incluye: razón social, nombre comercial, branch, sales region, tier, estado de facturación y dirección. |
| Contracts List | Billing | Contracts | Visualizar contratos y condiciones de facturación registrados en el módulo de Facturas de la plataforma VTEX. |
| Contacts List | Billing | Contacts | Visualizar qué contactos reciben notificaciones por correo electrónico cuando se genera una factura para un determinado cliente. |
| Edit Contacts | Billing | Contacts | Agregar o editar un contacto. |

## Admin - Start page only

Rol básico que da acceso a la página de inicio del ambiente administrativo.
Mínimo requerido para que un usuario no sea recibido con un mensaje de error al entrar en el ambiente administrativo.  

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Homepage | Catalog | Admin | Página inicial. |
| Help page | Catalog | Admin | Página de ayuda inicial. |
| View Product | Catalog API | General | Ver detalles de productos y SKUs. |
| Edit Product | Catalog API | General | Editar detalles del producto y SKU. |
| View Category | Catalog API | General | Ver detalles de la categoría. |
| Edit Category | Catalog API | General | Editar detalles de la categoría. |
| View Collection | Catalog API | General | Ver detalles de la colección. |
| Edit Collection | Catalog API | General | Editar detalles de la colección. |
| View Brand | Catalog API | General | Ver detalles de la marca. |
| Edit Brand | Catalog API | General | Editar detalles de la marca. |
| Import Spreadsheet | Catalog API | General | Importar productos y SKUs mediante hoja de cálculo. |
| Export Spreadsheet | Catalog API | General | Hoja de cálculo para exportar información del catálogo. |

## Content Administrator

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Save to main branch | Commerce Content | Branch | Agrega cambios directamente en la branch main. |
| Remove from main branch | Commerce Content | Branch | Eliminar cambios de la branch main. |
| Merge branch | Commerce Content | Branch | Combina cambios de una branch con la main. |
| Delete entry | Commerce Content | Entry | Elimina permanentemente una entrada de todo el historial y branches. |
| Create Store | Commerce Content | Stores | Crea una nueva tienda de Commerce Content en la cuenta. |
| Upload Image | Commerce Content | Media Gallery | Permite a los usuarios añadir imágenes a la Galería multimedia, creando entradas multimedia reutilizables para su uso en Tipos de contenido y componentes en el Panel de administración. |

## Checkout Admin

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Shopping Cart Full Access | Checkout | CheckoutResources | Acceso de lectura y escritura para todos los carritos de compra. Permite visualizar los datos del carrito en su totalidad (sin enmascaramiento). También permite solicitudes de simulación de carritos privados. |
| Orders Full Access | Checkout | CheckoutResources | Acceso de lectura y escritura a todos los pedidos a través de la API de pago. No se permite el acceso a los pedidos mediante el módulo de gestión de pedidos. |
| Order Cancellation | Checkout | CheckoutResources | Cancela los pedidos a través de la API de pago. No está permitido cancelar pedidos mediante el flujo de cancelación del módulo de gestión de pedidos. |

## Call center operator

Se trata de un rol dedicado a los teleoperadores, ya que permite acceder a las funcionalidades de televenta de VTEX y consultar los pedidos.

El recurso __Assisted Sales__ hace que el usuario sea redirigido automáticamente a la página de televenta de la tienda, lo que dejará al usuario que acceda a una cuenta con este perfil sin acceso a importantes funcionalidades del menú administrativo.

Por lo tanto, recomendamos utilizar dos cuentas separadas (con correos electrónicos separados) para los usuarios de televenta: una cuenta para el rol de __Call center operator__ (con los recursos *Assisted Sales* y *View order*) y otra cuenta para realizar operaciones en Admin, si es necesario.

> ⚠️ Al crear un [rol](/es/docs/tutorials/roles), evita incluir [recursos](/es/docs/tutorials/recursos-del-license-manager) de televentas junto con otros recursos. De lo contrario, puede que el rol no funcione de forma esperada.

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Assisted Sales | Catalog | Televentas | Funcionalidades de televenta. Tras iniciar sesión, el usuario es redirigido al sitio web de televenta `www.{nombredetienda}.com.br/a/televendas`. De esta forma, el operador puede utilizar las funcionalidades de televenta, como navegar por la tienda en nombre del cliente.Como este recurso provoca la redirección automática a la tienda, el usuario que entre en una cuenta con un perfil con este recurso no tendrá acceso a importantes funcionalidades del Admin. |
| View order | OMS | AccesoOMS | Permite la visualización de pedidos en el OMS. |

## Finance  

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| UI - Account list | License Manager | Control de Acceso Web | Uso interno de VTEX. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| View store sales stats | OMS | AccesoOMS | Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos. |
| Invoices List | Billing | Invoice | Clientes, responsables de billing y financiero tienen acceso. Permite la visualización de las facturas. |
| Edit Company Information | Billing | Company | Solamente responsables de billing y financiero tienen acceso. Permite editar datos de una Company. |
| Contracts List | Billing | Contracts | Clientes, responsables de billing y financiero tienen acceso.  Visualización  de todos los contratos (activos e inactivos) de una Company. |
| Display Company info | Billing | Company | Clientes, responsables de billing y financiero tienen acceso.  Permite visualizar datos de una Company. |
| Contacts List | Billing | Contacts | Clientes, responsables de billing y financiero tienen acceso.  Permite a visualización de la lista de Contactos que reciben notificación por correo electrónico del cobro generado. |
| Edit Contacts | Billing | Contacts | Solamente responsables de billing y financiero tienen acceso. Permite editar contactos que reciben la notificación del cobro generado. |
| Generate new Invoice | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. El sector financiero puede generar un cobro en la Factura manualmente a través de los contratos. |
| Recalc Invoice | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. Generar nuevo cobro con interés. Sí, con interés. |

## Finance - Full access  

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Save account | License Manager | Control de Acceso Servicios | Guarda una cuenta. |
| Get account by identifier | License Manager | Control de Acceso Servicios | Consulta que devuelve cuenta por el identificador, que puede ser el id de la cuenta o el host de la aplicación de la cuenta. |
| UI - Account list | License Manager | Control de Acceso Web | Uso interno de VTEX. |
| UI - Edit account | License Manager | Control de Acceso Web | Uso interno de VTEX. |
| UI - Edit role | License Manager | Control de Acceso Web | Uso interno de VTEX. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| View store sales stats | OMS | AccesoOMS | Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de pedidos. Muestra total de ventas, además de los detalles de los pedidos. |
| Invoices List | Billing | Invoice | Clientes, responsables de billing y financiero tienen acceso. Permite la visualización de facturas. |
| Edit Company Information | Billing | Company | Solamente responsables de billing y financiero tienen acceso. Permite editar datos de una Company. |
| Contracts List | Billing | Contracts | Clientes, responsables de billing y financiero tienen acceso. Visualización de todos los contratos (activos e inactivos) de una Company. |
| Display Company info | Billing | Company | Clientes, responsables de billing y financiero tienen acceso.  Permite visualizar datos de una Company. |
| Contacts List | Billing | Contacts | Clientes, responsables de billing y financiero tienen acceso.  Permite la visualización de la lista de contactos que reciben notificación por correo electrónico del cobro generado. |
| Edit Contacts | Billing | Contacts | Solamente responsables de billing y financiero tienen acceso. Permite editar contactos que reciben notificación del cobro generado. |
| Generate new Invoice | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. Sector financiero puede generar un cobro en la Factura manualmente a través de los  contratos. |
| Edit Company's Document | Billing | Company | Solamente responsables de billing y financiero tienen acceso. Permite editar los datos de documento (CNPJ o CPF) de la Company, para donde se generará la factura. |
| Add Account | Billing | Company | Solamente responsables de billing y financiero tienen acceso. Permite agregar cuenta (account) para agrupar otras cuentas ya vinculadas con este cliente en un único billing. |
| Delete Account | Billing | Company | Solamente responsables de billing y financiero tienen acceso. Permite eliminar cuenta asociada con una Company. Company es la entidad creada para englobar diversas cuentas de la misma tienda. |
| Save contracts | Billing | Contracts | Solamente responsables de billing, sales operations/growth y financiero tienen acceso. Permite crear nuevo contrato. |
| Cancel Invoice Document | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. Cancelar documento fiscal en las prefecturas, permite cancelar un documento fiscal aunque la factura ya se haya generado. |
| Issue Invoice Document | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. Se utiliza en casos específicos de países donde aún no existe la generación automática de documentos fiscales, dependiendo del sistema financiero. En este caso, puede ser generado manualmente. |
| Conciliate Invoice | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. El default es marcar como pagado automáticamente, pero el cliente puede pagar aparte, dependiendo de la negociación. En este caso, el sector financiero tiene la facultad de marcar como pagado manualmente, conciliando las facturas. |
| Generate Invoice Overdue without Interest | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. Generar nuevo cobro con interés. Sí, con interés. |
| Cancel Invoice | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. Cancelar cobro en billing, permite cancelar una factura aunque ya haya sido generada. |
| Change payment status | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. El sector financiero tiene la facultad de cambiar el status de pago de una Company, dependiendo de la negociación que haga con el cliente. |
| Recalc Invoice | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. Generar nuevo cobro con interés. Sí, con interés. |
| Get Unscrewed Dashboard Charges | Billing | Dashboard | Solamente responsables de billing y financiero tienen acceso. Acceso a dashboard externo al Admin, que visualiza facturas emitidas en ese momento, y qué cuentas son provisionadas en ese momento. |
| Merge companies | Billing | Company | Solamente responsables de billing y financiero tienen acceso. Permite la fusión entre dos Companies, unificando su billing. |
| Split companies | Billing | Company | Solamente responsables de billing y financiero tienen acceso. Permite separar una Company única en Companies diferentes. |
| Unpaid invoices | Billing | Invoice | Solamente responsables de billing y financiero tienen acceso. El sector financiero puede cancelar el pago de un cobro manualmente, en caso de que no se haya realizado o se haya realizado de manera equivocada. |
| Get App | Log | Log Admin | Uso interno de VTEX. |
| Create Table | Log | Log Admin | Uso interno de VTEX. |

## inStore Sales Person

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Assisted Sales | Catalog | Telesales | Funcionalidades de televenta. Tras iniciar sesión, el usuario es redirigido al sitio web de televenta www.{nombredetienda}.com.br/a/televendas. De esta forma, el operador puede utilizar las funcionalidades de televenta, como navegar por la tienda en nombre del cliente. Como este recurso provoca la redirección automática a la tienda, el usuario que entre en una cuenta con este recurso en su rol no tendrá acceso a importantes funcionalidades del Admin. |
| View order | OMS | OMS access | Visualizar todos los pedidos de la cuenta. |
| CMS GraphQL API | CMS | GraphQL | Usar la API CMS GraphQL de VTEX IO. |

## Sales App - Sales Associate

> ⚠️ Los vendedores registrados en Sales App no tienen acceso a VTEX Admin, sólo a Sales App.

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Assisted Sales | Catalog | Televendas | Después de iniciar sesión, el usuario es redirigido a la tienda (accountname.myvtex.com). |
| View order | OMS | AcessoOMS | Permite la visualización de todos los pedidos en el OMS. |

## IntegrationProfile - Fulfillment

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Place Orders | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Order Details | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |

## IntegrationProfile - Fulfillment Gateway

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Representa las operaciones transaccionales de la pasarela de pago. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera una transacción. |
| Notify payment | OMS | AccesoOMS | Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Order Details | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Cancel order | OMS | AccesoOMS | Permite Cancelar pedido en el OMS. |

## IntegrationProfile - Fulfillment Gateway GetOrder

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Representa las operaciones transaccionales de la pasarela de pago. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera una transacción. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Order Details | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |

## IntegrationProfile - Fulfillment Gateway Oms

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Representa las operaciones transaccionales de la pasarela de pago. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera una transacción. |
| Change order workflow status | OMS | AccesoOMS | Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow. |
| Notify payment | OMS | AccesoOMS | Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido. |
| Notify invoice | OMS | AccesoOMS | Permite informar facturas (NF) y datos para rastreo manualmente en el OMS. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Order Details | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Notify reemburse | OMS | AccesoOMS | Permite notificar una factura de entrada, indicando la entrada de nuevo de algo que ha sido reembolsado. Permite el input de una factura de devolución. |
| Cancel order | OMS | AccesoOMS | Permite Cancelar pedido en el OMS. |
| Order feed subscription | OMS | AccesoOMS | Permite que el usuario se inscriba para recibir actualizaciones de los status de los pedidos en el Order Feed. |
| Change order | OMS | AccesoOMS | Permite registrar alteraciones en el pedido (descuentos y/o cambios). |
| View store sales stats | OMS | AccesoOMS | Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos. |

## IntegrationProfile - Fulfillment Oms

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Change order workflow status | OMS | AccesoOMS | Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow. |
| Notify payment | OMS | AccesoOMS | Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido. |
| Notify invoice | OMS | AccesoOMS | Permite informar facturas (NF) y datos para rastreo manualmente en el OMS. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| List Orders | OMS | AcessoOMS | Permite listar todos los pedidos de la cuenta. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Order Details | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |
| Notify reemburse | OMS | AccesoOMS | Permite notificar una factura de entrada, indicando la entrada de nuevo de algo que ha sido reembolsado. Permite el input de una factura de devolución. |
| Cancel order | OMS | AccesoOMS | Permite Cancelar pedido en el OMS. |
| Order feed subscription | OMS | AccesoOMS | Permite que el usuario se inscriba para recibir actualizaciones de los status de los pedidos en Order Feed. |
| Change order | OMS | AccesoOMS | Permite registrar alteraciones en el pedido (descuentos y/o cambios). |
| View store sales stats | OMS | AccesoOMS | Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos. |

## IntegrationProfile - OrderSimulation

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Order Details | VTEX Fulfilment | Fulfilment Resources | Obsoleto. |

## Logistics - Full access

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Homepage | Catalog | Admin | Página inicial. |
| Help page | Catalog | Admin | Página de ayuda inicial. |
| Logistics full access | Logistics | Acceso a Logistics | Permite acceso pleno a todos los recursos de logística (visualización, creación, edición y cancelación de configuraciones). |
| Logistics viewer | Logistics | Acceso a Logistics | Permiso de visualización del área inicial del módulo de logística. |
| Logistics inventory full access | Logistics | Acceso a Logistics | Permite el acceso pleno al inventario logístico (visualización, creación, edición y cancelación de configuraciones). |
| Logistics inventory read only | Logistics | Acceso a Logistics | Permite solo la visualización del módulo de inventario. |
| Logistics shipping full access | Logistics | Acceso a Logistics | Permite el acceso pleno a todas las funciones de envío del módulo de logística (creación, edición y cancelación de configuraciones). |
| Logistics shipping read only | Logistics | Acceso a Logistics | Consulte el módulo de logística. |

## Logistics - Read only

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Logistics viewer | Logistics | Acceso a Logistics | Permiso de visualización del área inicial del módulo de logística. |
| Logistics inventory read only | Logistics | Acceso a Logistics | Permite solo la visualización del módulo de inventario. |
| Logistics shipping read only | Logistics | Acceso a Logistics | Consulte el módulo de logística. |

## OMS - Full access

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Homepage | Catalog | Admin | Página inicial. |
| Help page | Catalog | Admin | Página de ayuda inicial. |
| Change order workflow status | OMS | AccesoOMS | Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow. |
| Notify payment | OMS | AccesoOMS | Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido. |
| Notify invoice | OMS | AccesoOMS | Permite informar facturas (NF) y datos para rastreo manualmente en el OMS. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| Logistics full access | Logistics | Acceso a Logistics | Permite acceso pleno a todos los recursos de logística (visualización, creación, edición y cancelación de configuraciones). |
| Notify reemburse | OMS | AccesoOMS | Permite notificar una factura de entrada, indicando la entrada de nuevo de algo que ha sido reembolsado. Permite el input de una factura de devolución. |
| Cancel order | OMS | AccesoOMS | Permite Cancelar pedido en el OMS. |
| Order feed subscription | OMS | AccesoOMS | Permite que el usuario se inscriba para recibir actualizaciones de los status de los pedidos en el Order Feed. |
| Change order | OMS | AccesoOMS | Permite registrar alteraciones en el pedido (descuentos y/o cambios). |
| View store sales stats | OMS | AccesoOMS | Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos. |
| Logistics inventory full access | Logistics | Acceso a Logistics | Permite acceso pleno al inventario logístico (visualización, creación, edición y cancelación de configuraciones). |
| Logistics shipping full access | Logistics | Acceso a Logistics | Permite acceso pleno a todas las funciones de envío del módulo de logística (creación, edición y cancelación de configuraciones). |

## OMS - Read only

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| View store sales stats | OMS | AccesoOMS | Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos. |

## Owner (Admin Super)

Este rol otorga acceso a todos los recursos del License Manager, excepto **Save user**.

## Payments Notifier

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
| :---- | :---- | :---- | :---- |
| Payments Notification | PCI Gateway | Payment-NotifyPayments | Notificación de aprobación de pago mediante la API de Payments Gateway. |

## Seller Manager

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| View Seller | Seller Register | Seller Administration | Podrá ver todos los vendedores vinculados a la cuenta de la plataforma descrita en la página de Gestión de vendedores, incluyendo la posibilidad de recuperar datos de los vendedores, ya sea de la lista de vendedores o de un vendedor específico. |
| Save Seller | Seller Register | Seller Administration | Crea nuevos vendedores y edita los datos de todos los vendedores vinculados a la cuenta del marketplace desde la página de Gestión de vendedores. |

## User Administrator - RESTRICTED

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Save user | License Manager | Services access control | Cree usuarios, agregue o elimine roles de usuarios, edite datos de usuario, cree y cambie claves de aplicación. |

## VTEX IO Admin

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Get resource by key | License Manager | Control de Acceso Servicios | Verifica permisos de acceso. |
| Read Workspace Apps | VTEX IO | Infrastructure | Permite leer las apps instaladas en el workspace y sus dependencias directas e indirectas. |
| Link App | VTEX IO | Infrastructure | Permite listar los enlaces existentes y vincular y desvincular apps. |
| Install App | VTEX IO | Infrastructure | Permite la instalación y desinstalación de apps. |
| Vbase Read Only | VTEX IO | Infrastructure | Acceso de solo lectura a vbase. |
| Vbase Read Write | VTEX IO | Infrastructure | Acceso de lectura y escritura a vbase. |
| Read Workspace Services | VTEX IO | Infrastructure | Permite leer las apps de infraestructura en el workspace. |
| Install Service | VTEX IO | Infrastructure | Permite la instalación y desinstalación de apps. |
| Log Access - Read-only | VTEX IO | Infrastructure | Permite leer logs de todas las aplicaciones. |
| Read Published Service | VTEX IO | Infrastructure | Permite leer los datos de los servicios del registro de infraestructura. |
| Debug App | VTEX IO | Infrastructure | Permite conectar un debugger a una app vinculada. |
| Workspace CRUD | VTEX IO | Infrastructure | Permite crear, eliminar y modificar workspaces. |
| Import Redirects | VTEX IO | Infrastructure | Permite al usuario gestionar redirecciones con la interfaz de línea de comando de VTEX IO. |
| Manage A/B Test | VTEX IO | A/B Test | Permite iniciar, terminar u obtener status de una prueba A/B. |
| Read logs | Application Logs Stream | Logs | Leer logs de apps de VTEX IO que pertenecen a esta cuenta. |

## Roles obsoletos

* VTEX Payment - Account Holder
* VTEX Payment - Bookkeeper
