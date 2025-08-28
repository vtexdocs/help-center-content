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

[Roles de usuario](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) agrupan los [recursos del License Manager](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#), siendo que cada recurso representa una permisión en la plataforma VTEX.

En este documento, se enumeran roles que están predefinidos para las nuevas tiendas VTEX y sus respectivos recursos. Para acceder a ellos directamente, utilice la lista a continuación.

> ℹ️ Para obtener más información sobre cada recurso listado en los perfiles a continuación, consulte el artículo [Recursos del License Manager](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

* [Admin - Start page only](#admin-start-page-only)
* [Checkout Admin](#checkout-admin)
* [Call center operator](#call-center-operator)
* [Finance](#finance)
* [Finance - Full access](#finance-full-access)
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
* [Payments Notifier](#payments-notifier)
* [Seller Manager](#seller-manager)
* [User Administrator - RESTRICTED](#user-administrator-restricted)
* [VTEX IO Admin](#vtex-io-admin)
* [Webservice - Full access](#webservice-full-access)

## Admin - Start page only

rol básico que da acceso a la página de inicio del ambiente administrativo.
Mínimo requerido para que un usuario no sea recibido con un mensaje de error al entrar en el ambiente administrativo.  

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Home-page | Catalog | Administración | Página inicial |
| Help-page | Catalog | Administración | Página de ayuda inicial |

## Checkout Admin

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Shopping Cart Full Access | Checkout | CheckoutResources |
| Orders Full Access | Checkout | CheckoutResources | Acceso a todos los pedidos |
| Order Cancelation | Checkout | CheckoutResources |

## Call center operator

Se trata de un rol dedicado a los teleoperadores, ya que permite acceder a las funcionalidades de televenta de VTEX y consultar los pedidos.

El recurso __Assisted Sales__ hace que el usuario sea redirigido automáticamente a la página de televenta de la tienda, lo que dejará al usuario que acceda a una cuenta con este perfil sin acceso a importantes funcionalidades del menú administrativo.

Por lo tanto, recomendamos utilizar dos cuentas separadas (con correos electrónicos separados) para los usuarios de televenta: una cuenta para el rol de __Call center operator__ (con los recursos *Assisted Sales* y *View order*) y otra cuenta para realizar operaciones en Admin, si es necesario.

> ⚠️ Al crear un [rol](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#), evita incluir [recursos](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#) de televentas junto con otros recursos. De lo contrario, puede que el rol no funcione de forma esperada.

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Assisted Sales | Catalog | Televentas | Funcionalidades de televenta. Tras iniciar sesión, el usuario es redirigido al sitio web de televenta www.{nombredetienda}.com.br/a/televendas. De esta forma, el operador puede utilizar las funcionalidades de televenta, como navegar por la tienda en nombre del cliente.Como este recurso provoca la redirección automática a la tienda, el usuario que entre en una cuenta con un perfil con este recurso no tendrá acceso a importantes funcionalidades del Admin. |
| View order | OMS | AccesoOMS | Permite la visualización de pedidos en el OMS. |

## Finance  

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| UI - Account list | License Manager | Control de Acceso Web |
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
| Save account | License Manager | Control de Acceso Servicios | Guarda una cuenta |
| Get account by identifier | License Manager | Control de Acceso Servicios | Consulta que devuelve cuenta por el identificador, que puede ser el id de la cuenta o el host de la aplicación de la cuenta. |
| UI - Account list | License Manager | Control de Acceso Web |
| UI - Edit account | License Manager | Control de Acceso Web |
| UI - Edit role | License Manager | Control de Acceso Web |
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

## Sales App - Sales Associate

> ⚠️ Los vendedores registrados en Sales App no tienen acceso a VTEX Admin, sólo a Sales App.

Tabla de recursos:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Assisted Sales | Catalog | Televendas | Después de iniciar sesión, el usuario es redirigido a la tienda (accountname.myvtex.com). |
| View order | OMS | AcessoOMS | Permite la visualización de todos los pedidos en el OMS. |

## IntegrationProfile - Fulfillment

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |

## IntegrationProfile - Fulfillment Gateway

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Representa las operaciones transaccionales del gateway de pagos. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera una transacción. |
| Notify payment | OMS | AccesoOMS | Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |
| Cancel order | OMS | AccesoOMS | Permite Cancelar pedido en el OMS. |

## IntegrationProfile - Fulfillment Gateway GetOrder

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Representa las operaciones transaccionales del gateway de pagos. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera una transacción. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |

## IntegrationProfile - Fulfillment Gateway Oms

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Representa las operaciones transaccionales del gateway de pagos. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera una transacción. |
| Change order workflow status | OMS | AccesoOMS | Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow. |
| Notify payment | OMS | AccesoOMS | Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido. |
| Notify invoice | OMS | AccesoOMS | Permite informar facturas (NF) y datos para rastreo manualmente en el OMS. |
| View order | OMS | AccesoOMS | Permite la visualización de todos los pedidos en el OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |
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
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |
| Notify reemburse | OMS | AccesoOMS | Permite notificar una factura de entrada, indicando la entrada de nuevo de algo que ha sido reembolsado. Permite el input de una factura de devolución. |
| Cancel order | OMS | AccesoOMS | Permite Cancelar pedido en el OMS. |
| Order feed subscription | OMS | AccesoOMS | Permite que el usuario se inscriba para recibir actualizaciones de los status de los pedidos en Order Feed. |
| Change order | OMS | AccesoOMS | Permite registrar alteraciones en el pedido (descuentos y/o cambios). |
| View store sales stats | OMS | AccesoOMS | Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos. |

## IntegrationProfile - OrderSimulation

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |

## Logistics - Full access

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Home-page | Catalog | Administración | Página inicial |
| Help-page | Catalog | Administración | Página de ayuda inicial |
| Logistics full access | Logistics | Acceso a Logistics | Permite acceso pleno a todos los recursos de logística (visualización, creación, edición y cancelación de configuraciones). |
| Logistics viewer | Logistics | Acceso a Logistics | Permiso de visualización del área inicial del módulo de logística. |
| Logistics inventory full access | Logistics | Acceso a Logistics | Permite el acceso pleno al inventario logístico (visualización, creación, edición y cancelación de configuraciones). |
| Logistics inventory read only | Logistics | Acceso a Logistics | Permite solo la visualización del módulo de inventario. |
| Logistics shipping full access | Logistics | Acceso a Logistics | Permite el acceso pleno a todas las funciones de envío del módulo de logística (creación, edición y cancelación de configuraciones). |
| Logistics shipping read only | Logistics | Acceso a Logistics | Probar |

## Logistics - Read only

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Logistics viewer | Logistics | Acceso a Logistics | Permiso de visualización del área inicial del módulo de logística. |
| Logistics inventory read only | Logistics | Acceso a Logistics | Permite solo la visualización del módulo de inventario. |
| Logistics shipping read only | Logistics | Acceso a Logistics | Probar |

## OMS - Full access

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Home-page | Catalog | Administración | Página inicial |
| Help-page | Catalog | Administración | Página de ayuda inicial |
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

## Payments Notifier

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
| :---- | :---- | :---- | :---- |
| Payments Notification | PCI Gateway | Payment-NotifyPayments | Notificación de aprobación de pago mediante la API de Payments Gateway. |

## Seller Manager

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| View Seller | Seller Register | Seller Administration | Permite visualizar todos los sellers de la cuenta. |
| Save Seller | Seller Register | Seller Administration | Permite crear y editar todos los sellers de la cuenta. |

## User Administrator - RESTRICTED

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
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

## Webservice - Full access

Tabla de recursos:

| Nombre del recurso | Producto | Categoría | Descripción |
|---|---|---|---|
| Webservice access | WebService | webservice | Permiso para utilizar cualquier request de SOAP. |

