---
title: Roles de usuario predefinidos
id: jGDurZKJHvHJS13LnO7Dy
status: PUBLISHED
createdAt: 2022-04-07T21:34:06.385Z
updatedAt: 2023-06-06T21:37:23.798Z
publishedAt: 2023-06-06T21:37:23.798Z
firstPublishedAt: 2022-04-07T21:48:28.951Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slug: roles-de-usuario-predefinidos
legacySlug: perfiles-de-acceso-predefinidos
subcategory: 1HSqkejwuYcQSMC400uY84
---

En este documento haremos una lista de los [roles de usuario](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) que están predeterminados para las nuevas tiendas VTEX. Para acceder a estos de forma directa utilice la siguiente lista:

* [Admin - Start page only](#admin-start-page-only)
* [Checkout Admin](#checkout-admin)
* [Call center operator](#call-center-operator)
* [Finance](#finance)
* [Finance - Full access](#finance-full-access)
* [VTEX Sales App Sales Person](#instore-sales-person)
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
* [Seller Manager](#seller-manager)
* [User Administrator - RESTRICTED](#user-administrator-restricted)
* [VTEX IO Admin](#vtex-io-admin)
* [VTEX Payment - Account Holder](#vtex-payment-account-holder)
* [VTEX Payment - Bookkeeper](#vtex-payment-bookkeeper)
* [Webservice - Full access](#webservice-full-access)

## Admin - Start page only

rol básico que da acceso a la página de inicio del ambiente administrativo.
Mínimo requerido para que un usuario no sea recibido con un mensaje de error al entrar en el ambiente administrativo.  

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página de ayuda inicial</td>
  </tr>
</table>

## Checkout Admin

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:
<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Shopping Cart Full Access</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Full Access</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td>Acceso a todos los pedidos</td>
  </tr>
  <tr>
    <td>Order Cancelation</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td></td>
  </tr>
</table>

## Call center operator

Este es un rol que tiene características especiales. El recurso **Assisted sales** hace que el usuario sea redirigido automáticamente a la tienda,  con lo cual el usuario que inicie sesión en una cuenta con este rol no tiene acceso a recursos importantes del menú administrativo. Recomendamos el uso de dos cuentas para los usuarios de televentas. Una cuenta separada para el rol **Call center operator** y otra para otras operaciones que el usuario pueda necesitar realizar en el menú administrativo.  

<div class="alert alert-warning">Al crear un <a href="https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#">rol</a>, evita incluir <a href="https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#">recursos</a> de televentas junto con otros recursos. De lo contrario, puede que el rol no funcione de forma esperada.
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Assisted Sales</td>
    <td>Catalog</td>
    <td>Televentas</td>
    <td>Después de iniciar sesión, el usuario es redirigido al sitio de televentas www.sutienda.com/a/televentas. De esta manera, el operador puede hacer operaciones en la tienda en nombre del cliente. Aparecerá una barra en la parte superior de la pantalla.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de pedidos en el OMS.</td>
  </tr>
</table>

## Finance  

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>UI - Account list</td>
    <td>License Manager</td>
    <td>Control de Acceso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos.</td>
  </tr>
  <tr>
    <td>Invoices List</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Clientes, responsables de billing y financiero tienen acceso. Permite la visualización de las facturas.</td>
  </tr>
  <tr>
    <td>Edit Company Information</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite editar datos de una Company.</td>
  </tr>
  <tr>
    <td>Contracts List</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Clientes, responsables de billing y financiero tienen acceso.  Visualización  de todos los contratos (activos e inactivos) de una Company.</td>
  </tr>
  <tr>
    <td>Display Company info</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Clientes, responsables de billing y financiero tienen acceso.  Permite visualizar datos de una Company.</td>
  </tr>
  <tr>
    <td>Contacts List</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Clientes, responsables de billing y financiero tienen acceso.  Permite a visualización de la lista de Contactos que reciben notificación por correo electrónico del cobro generado.</td>
  </tr>
  <tr>
    <td>Edit Contacts</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite editar contactos que reciben la notificación del cobro generado.</td>
  </tr>
  <tr>
    <td>Generate new Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. El sector financiero puede generar un cobro en la Factura manualmente a través de los contratos.</td>
  </tr>
  <tr>
    <td>Recalc Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Generar nuevo cobro con interés. Sí, con interés.</td>
  </tr>
</table>

## Finance - Full access  

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Save account</td>
    <td>License Manager</td>
    <td>Control de Acceso Servicios</td>
    <td>Guarda una cuenta</td>
  </tr>
  <tr>
    <td>Get account by identifier</td>
    <td>License Manager</td>
    <td>Control de Acceso Servicios</td>
    <td>Consulta que devuelve cuenta por el identificador, que puede ser el id de la cuenta o el host de la aplicación de la cuenta.</td>
  </tr>
  <tr>
    <td>UI - Account list</td>
    <td>License Manager</td>
    <td>Control de Acceso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>UI - Edit account</td>
    <td>License Manager</td>
    <td>Control de Acceso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>UI - Edit role</td>
    <td>License Manager</td>
    <td>Control de Acceso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de pedidos. Muestra total de ventas, además de los detalles de los pedidos.</td>
  </tr>
  <tr>
    <td>Invoices List</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Clientes, responsables de billing y financiero tienen acceso. Permite la visualización de facturas.</td>
  </tr>
  <tr>
    <td>Edit Company Information</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite editar datos de una Company.</td>
  </tr>
  <tr>
    <td>Contracts List</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Clientes, responsables de billing y financiero tienen acceso. Visualización de todos los contratos (activos e inactivos) de una Company.</td>
  </tr>
  <tr>
    <td>Display Company info</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Clientes, responsables de billing y financiero tienen acceso.  Permite visualizar datos de una Company.</td>
  </tr>
  <tr>
    <td>Contacts List</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Clientes, responsables de billing y financiero tienen acceso.  Permite la visualización de la lista de contactos que reciben notificación por correo electrónico del cobro generado.</td>
  </tr>
  <tr>
    <td>Edit Contacts</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite editar contactos que reciben notificación del cobro generado.</td>
  </tr>
  <tr>
    <td>Generate new Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Sector financiero puede generar un cobro en la Factura manualmente a través de los  contratos.</td>
  </tr>
  <tr>
    <td>Edit Company's Document</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite editar los datos de documento (CNPJ o CPF) de la Company, para donde se generará la factura.</td>
  </tr>
  <tr>
    <td>Add Account</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite agregar cuenta (account) para agrupar otras cuentas ya vinculadas con este cliente en un único billing.</td>
  </tr>
  <tr>
    <td>Delete Account</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite eliminar cuenta asociada con una Company. Company es la entidad creada para englobar diversas cuentas de la misma tienda.</td>
  </tr>
  <tr>
    <td>Save contracts</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Solamente responsables de billing, sales operations/growth y financiero tienen acceso. Permite crear nuevo contrato.</td>
  </tr>
  <tr>
    <td>Cancel Invoice Document</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Cancelar documento fiscal en las prefecturas, permite cancelar un documento fiscal aunque la factura ya se haya generado.</td>
  </tr>
  <tr>
    <td>Issue Invoice Document</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Se utiliza en casos específicos de países donde aún no existe la generación automática de documentos fiscales, dependiendo del sistema financiero. En este caso, puede ser generado manualmente.</td>
  </tr>
  <tr>
    <td>Conciliate Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. El default es marcar como pagado automáticamente, pero el cliente puede pagar aparte, dependiendo de la negociación. En este caso, el sector financiero tiene la facultad de marcar como pagado manualmente, conciliando las facturas.</td>
  </tr>
  <tr>
    <td>Generate Invoice Overdue without Interest</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Generar nuevo cobro con interés. Sí, con interés.</td>
  </tr>
  <tr>
    <td>Cancel Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Cancelar cobro en billing, permite cancelar una factura aunque ya haya sido generada.
   </td>
  </tr>
  <tr>
    <td>Change payment status</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. El sector financiero tiene la facultad de cambiar el status de pago de una Company, dependiendo de la negociación que haga con el cliente.</td>
  </tr>
  <tr>
    <td>Recalc Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Generar nuevo cobro con interés. Sí, con interés.</td>
  </tr>
  <tr>
    <td>Get Unscrewed Dashboard Charges</td>
    <td>Billing</td>
    <td>Dashboard</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Acceso a dashboard externo al Admin, que visualiza facturas emitidas en ese momento, y qué cuentas son provisionadas en ese momento.</td>
  </tr>
  <tr>
    <td>Merge companies</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite la fusión entre dos Companies, unificando su billing.</td>
  </tr>
  <tr>
    <td>Split companies</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Solamente responsables de billing y financiero tienen acceso. Permite separar una Company única en Companies diferentes.</td>
  </tr>
  <tr>
    <td>Unpaid invoices</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Solamente responsables de billing y financiero tienen acceso. El sector financiero puede cancelar el pago de un cobro manualmente, en caso de que no se haya realizado o se haya realizado de manera equivocada.</td>
  </tr>
  <tr>
    <td>Get App</td>
    <td>Log</td>
    <td>Log Admin</td>
    <td>Uso interno de VTEX.</td>
  </tr>
  <tr>
    <td>Create Table</td>
    <td>Log</td>
    <td>Log Admin</td>
    <td>Uso interno de VTEX.</td>
  </tr>
</table>

## VTEX Sales App Sales Person  

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Product Form</td>
    <td>Catalog</td>
    <td>Contenido</td>
    <td>Acceso a la pantalla del producto.</td>
  </tr>
  <tr>
    <td>Store Texts</td>
    <td>Catalog</td>
    <td>Configuraciones</td>
    <td>Herramienta del desarrollador con todos los textos base de la tienda.</td>
  </tr>
  <tr>
    <td>Assisted Sales</td>
    <td>Catalog</td>
    <td>Televentas</td>
    <td>Después de iniciar sesión, el usuario es redirigido a la tienda (accountname.myvtex.com).</td>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página de ayuda inicial</td>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Representa las operaciones transaccionales del gateway de pagos.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera una transacción.</td>
  </tr>
  <tr>
    <td>Manage Store</td>
    <td>PCI Gateway</td>
    <td>Payment-ManageStore</td>
    <td>Permite modificar los ajustes de la configuración.</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow.</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite informar facturas (NF) y datos para rastreo manualmente en el OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite Cancelar pedido en el OMS.</td>
  </tr>
  <tr>
    <td>Full access in all documents</td>
    <td>Dynamic Storage</td>
    <td>Recursos genéricos para Dynamic Storage</td>
    <td>Recurso registrado automáticamente por Dynamic Storage.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Representa las operaciones transaccionales del gateway de pagos.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera una transacción.</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite Cancelar pedido en el OMS.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway GetOrder

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Representa las operaciones transaccionales del gateway de pagos.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera una transacción.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway Oms

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Representa las operaciones transaccionales del gateway de pagos.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera una transacción.</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow.</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite informar facturas (NF) y datos para rastreo manualmente en el OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Notify reemburse</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite notificar una factura de entrada, indicando la entrada de nuevo de algo que ha sido reembolsado. Permite el input de una factura de devolución.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite Cancelar pedido en el OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite que el usuario se inscriba para recibir actualizaciones de los status de los pedidos en el Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite registrar alteraciones en el pedido (descuentos y/o cambios).</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Oms

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow.</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite informar facturas (NF) y datos para rastreo manualmente en el OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Notify reemburse</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite notificar una factura de entrada, indicando la entrada de nuevo de algo que ha sido reembolsado. Permite el input de una factura de devolución.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite Cancelar pedido en el OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite que el usuario se inscriba para recibir actualizaciones de los status de los pedidos en Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite registrar alteraciones en el pedido (descuentos y/o cambios).</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos.</td>
  </tr>
</table>

## IntegrationProfile - OrderSimulation

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## Logistics - Full access

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página de ayuda inicial</td>
  </tr>
  <tr>
    <td>Logistics full access</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite acceso pleno a todos los recursos de logística (visualización, creación, edición y cancelación de configuraciones).</td>
  </tr>
  <tr>
    <td>Logistics viewer</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permiso de visualización del área inicial del módulo de logística.</td>
  </tr>
  <tr>
    <td>Logistics inventory full access</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite el acceso pleno al inventario logístico (visualización, creación, edición y cancelación de configuraciones).</td>
  </tr>
  <tr>
    <td>Logistics inventory read only</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite solo la visualización del módulo de inventario.</td>
  </tr>
  <tr>
    <td>Logistics shipping full access</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite el acceso pleno a todas las funciones de envío del módulo de logística (creación, edición y cancelación de configuraciones).</td>
  </tr>
  <tr>
    <td>Logistics shipping read only</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Probar</td>
  </tr>
</table>

## Logistics - Read only

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Logistics viewer</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permiso de visualización del área inicial del módulo de logística.</td>
  </tr>
  <tr>
    <td>Logistics inventory read only</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite solo la visualización del módulo de inventario.</td>
  </tr>
  <tr>
    <td>Logistics shipping read only</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Probar</td>
  </tr>
</table>

## OMS - Full access

Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administración</td>
    <td>Página de ayuda inicial</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite el acceso a las acciones dentro del workflow para cambiar el status del pedido, a través del botón de acciones en el workflow.</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Acceso al botón que notifica el pago al gateway manualmente en el área de pago dentro del pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite informar facturas (NF) y datos para rastreo manualmente en el OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>Logistics full access</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite acceso pleno a todos los recursos de logística (visualización, creación, edición y cancelación de configuraciones).</td>
  </tr>
  <tr>
    <td>Notify reemburse</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite notificar una factura de entrada, indicando la entrada de nuevo de algo que ha sido reembolsado. Permite el input de una factura de devolución.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite Cancelar pedido en el OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite que el usuario se inscriba para recibir actualizaciones de los status de los pedidos en el Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite registrar alteraciones en el pedido (descuentos y/o cambios).</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos.</td>
  </tr>
  <tr>
    <td>Logistics inventory full access</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite acceso pleno al inventario logístico (visualización, creación, edición y cancelación de configuraciones).</td>
  </tr>
  <tr>
    <td>Logistics shipping full access</td>
    <td>Logistics</td>
    <td>Acceso a Logistics</td>
    <td>Permite acceso pleno a todas las funciones de envío del módulo de logística (creación, edición y cancelación de configuraciones).</td>
  </tr>
</table>

## OMS - Read only

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Permite la visualización de todos los pedidos en el OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AccesoOMS</td>
    <td>Muestra totalizadores dentro de la sección Todos los pedidos de Gestión de Pedidos. Muestra total de ventas, además de los detalles de los pedidos.</td>
  </tr>
</table>

## Seller Manager

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>View Seller</td>
    <td>Seller Register</td>
    <td>Seller Administration</td>
    <td>Permite visualizar todos los sellers de la cuenta.</td>
  </tr>
  <tr>
    <td>Save Seller</td>
    <td>Seller Register</td>
    <td>Seller Administration</td>
    <td>Permite crear y editar todos los sellers de la cuenta.</td>
  </tr>
</table>

## User Administrator - RESTRICTED

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Save user</td>
    <td>License Manager</td>
    <td>Services access control</td>
    <td>Cree usuarios, agregue o elimine roles de usuarios, edite datos de usuario, cree y cambie claves de aplicación.</td>
  </tr>
</table>

## VTEX IO Admin

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Get resource by key</td>
    <td>License Manager</td>
    <td>Control de Acceso Servicios</td>
    <td>Verifica permisos de acceso.</td>
  </tr>
  <tr>
    <td>Read Workspace Apps</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite leer las apps instaladas en el workspace y sus dependencias directas e indirectas.</td>
  </tr>
  <tr>
    <td>Link App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite listar los enlaces existentes y vincular y desvincular apps.</td>
  </tr>
  <tr>
    <td>Install App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite la instalación y desinstalación de apps.</td>
  </tr>
  <tr>
    <td>Vbase Read Only</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Acceso de solo lectura a vbase.</td>
  </tr>
  <tr>
    <td>Vbase Read Write</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Acceso de lectura y escritura a vbase.</td>
  </tr>
  <tr>
    <td>Read Workspace Services</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite leer las apps de infraestructura en el workspace.</td>
  </tr>
  <tr>
    <td>Install Service</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite la instalación y desinstalación de apps.</td>
  </tr>
  <tr>
    <td>Log Access - Read-only</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite leer logs de todas las aplicaciones.</td>
  </tr>
  <tr>
    <td>Read Published Service</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite leer los datos de los servicios del registro de infraestructura.</td>
  </tr>
  <tr>
    <td>Debug App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite conectar un debugger a una app vinculada.</td>
  </tr>
  <tr>
    <td>Workspace CRUD</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite crear, eliminar y modificar workspaces.</td>
  </tr>
  <tr>
    <td>Import Redirects</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Permite al usuario gestionar redirecciones con la interfaz de línea de comando de VTEX IO.</td>
  </tr>
  <tr>
    <td>Manage A/B Test</td>
    <td>VTEX IO</td>
    <td>A/B Test
    </td>
    <td>Permite iniciar, terminar u obtener status de una prueba A/B.</td>
  </tr>
  <tr>
    <td>Read logs</td>
    <td>Application Logs Stream</td>
    <td>Logs</td>
    <td>Leer logs de apps de VTEX IO que pertenecen a esta cuenta.</td>
  </tr>
</table>

## VTEX Payment - Account Holder

Este rol da acceso completo de lectura y escritura de los datos de VTEX Payment y debería estar restringido a los usuarios que necesiten efectuar configuraciones.

## VTEX Payment - Bookkeeper

Este rol permite la lectura de información sobre la operación de VTEX Payment.

## Webservice - Full access

&nbsp;&nbsp;&nbsp;&nbsp;Tabla de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nombre del recurso</th>
    <th bgcolor="#efefef" >Producto</th>
    <th bgcolor="#efefef" >Categoría</th>
    <th bgcolor="#efefef" >Descripción</th>
  </tr>
  <tr>
    <td>Webservice access</td>
    <td>WebService</td>
    <td>webservice</td>
    <td>Permiso para utilizar cualquier request de SOAP.</td>
  </tr>
</table>    
