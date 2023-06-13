---
title: Eventos disponibles en Audit
id: 6r1Mzcu5NmkmmDLJlz9CCZ
status: PUBLISHED
createdAt: 2022-06-22T16:05:16.214Z
updatedAt: 2023-04-25T14:51:35.871Z
publishedAt: 2023-04-25T14:51:35.871Z
firstPublishedAt: 2022-06-22T16:28:52.801Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: eventos-disponibles-en-audit
legacySlug: eventos-disponibles-en-audit
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---

A continuación, verás la lista de posibles eventos disponibles en [Audit] (https://help.vtex.com/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA#) para cada aplicación.

<div class = "alert alert-info">
Si, en Audit, ves algún evento no incluido en esta lista, por favor, envíanos más información a través de la <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmnotPvPjw-SjiE7lt2Nt3RQgNUe10ixXZmuO2v9enOJReoQ/viewform">página de feedback sobre documentación</a>.
</div>

<div class="alert alert-warning">
En el módulo Audit, al hacer clic en los filtros de auditoría puedes encontrar <code>Profile System</code>, además de otras aplicaciones citadas a continuación. Esta opción se refiere a funcionalidades en beta cerrada, por lo que la mayoría de las cuentas no tendrán eventos asociados.
</div>

## Catalog admin

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Product Activation
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Activación de producto.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del producto.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Product Commercial Condition Change
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cambios en las condiciones comerciales de un producto.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del producto y lista de las condiciones modificadas.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Attachment Association    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Asociación de un adjunto a un SKU.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del SKU, nombre e ID del adjunto.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Archive Upload    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Envío de archivo.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre de archivo.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Field Activation    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Activación de campo de catálogo.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre, ID y status del campo.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Seller Binding    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Conexión de un SKU con un <em>seller</em>.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del <em>seller</em>, ID del SKU en el catálogo del <em>seller </em>e ID del SKU en el catálogo del <em>marketplace</em>.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Seller Unbinding
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación de la conexión entre un SKU y un <em>seller</em>.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del <em>seller</em>, ID del SKU en el catálogo del <em>seller </em>e ID del SKU en el catálogo del <em>marketplace</em>.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Seller Removal
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación del SKU del <em>seller</em>.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del SKU en el catálogo del <em>seller</em>.
   </td>
  </tr>
</table>

## Pricing

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Put Price
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación o modificación del precio de un SKU determinado.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del SKU.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Price Table
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación o modificación de la tabla de precios.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación de la tabla creada o modificada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Price Tables
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación o modificación de varias tablas de precios.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación de las tablas creadas o modificadas.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Price Deleted
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación del precio de un SKU determinado.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del SKU.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Config
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación o modificación de la configuración del precio.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación de la configuración creada o modificada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Fixed Price Modified
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación del precio fijo.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación del precio fijo modificado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Put Catalog Step
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación o modificación de una regla de precio.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Regla de precio creada o modificada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Deleted Fixed Prices From Table
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación del precio fijo de la lista de precios correspondiente.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación de la lista y del precio eliminado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Compatibility Post Prices
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación del precio utilizando la API de compatibilidad con el contrato de PricingV1.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación del precio modificado.
   </td>
  </tr>

</table>

## Logistics

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Carrier Create
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de la transportadora.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Carrier Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Actualización de transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de la transportadora.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Carrier Delete
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación de la transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de la transportadora.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Dock Create
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de almacén.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del almacén.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Dock Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Actualización de almacén.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del almacén.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Dock Delete
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación de almacén.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del almacén.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse Create
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de stock.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del stock.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Actualización de stock.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del stock.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse Delete
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación de stock.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del stock.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Pickup Point Save
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación o modificación del punto de recogida.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del punto de recogida.
   </td>
  </tr>
</table>

## OMS

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Start Handling
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Acción que le indica a VTEX que la tienda comenzó a preparar determinado pedido. Esto desencadena la continuidad del flujo de dicho pedido.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del pedido.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Status
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cambio en el status de un pedido.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del pedido.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Payment Notification
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Envío de notificación de pago de un pedido determinado.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del pedido.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cambio en la configuración del módulo de pedidos.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Breve descripción del cambio.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resend Last Email
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Reenvío del último email relacionado con el pedido en el Centro de mensajes.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del pedido.
   </td>
  </tr>
</table>

## Promotions

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Rate Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación de la configuración de la tasa.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de la configuración de la tasa.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Promotion Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación de la configuración de la promoción.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de la configuración de la promoción.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Coupon Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cambio en el cupón.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Código de cupón.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Unarchived Calculator
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Desarchivar promoción o tasa.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de la configuración de la promoción o tasa.
   </td>
  </tr>
</table>

## Checkout

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Configurated OrderForm
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cambio de la configuración de OrderForm, que se encarga del funcionamiento del checkout de la tienda.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Descripción de la acción (”configurated OrderForm”)
   </td>
  </tr>
</table>

## Portalv2

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Configuration Updated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación de la configuración del portal.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">“*”
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Saved
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación del archivo del portal.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre del archivo modificado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Site Created
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de sitio web.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre del sitio web creado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Template Updated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación de plantilla del portal.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre de la plantilla modificada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Page Updated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación de la página.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre de la página.
   </td>
  </tr>
</table>

## Portal CMS

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Modificación del archivo del portal.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre e ID del archivo modificado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Upload
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Carga del archivo del portal.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre del archivo modificado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Deleted
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminación de archivo.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Nombre e ID del archivo modificado.
   </td>
  </tr>
</table>

## Conditions

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PutCondition
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de condición.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificación de la condición creada.
   </td>
  </tr>
</table>

## VTEX ID

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordCreated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">El usuario registra una contraseña por primera vez en la tienda o en el Admin VTEX.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordUpdated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">El usuario cambia su contraseña de la tienda o del Admin VTEX.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">IdentityProviderChanged
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cambios en la configuración del proveedor de identidad. Por ejemplo, cuando se crea una integración OAuth personalizada, o se modifica la información de una configuración OAuth existente.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Proveedor de identidad.
   </td>
  </tr>
</table>

## License Manager

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Acción</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Descripción del evento</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Detalles del evento</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Block AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Bloqueo de clave de aplicación.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave de aplicación bloqueada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Accept Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Aceptación de invitaciones para ser usuario titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del usuario que aceptó la invitación.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de nuevo usuario o modificar sus datos.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Account
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de cuenta o modificar la información de la misma.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cuenta creada o modificada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Editar rol.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Rol editado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminar rol.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Rol eliminado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Unblock AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Bloqueo de clave de aplicación.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave de aplicación bloqueada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Allowed
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Acceso al recurso permitido.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave del recurso e ID del usuario al que se le ha dado acceso.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Cancel Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cancelación de invitación para usuario titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID de usuario invitado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Eliminar usuario.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del usuario eliminado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Update Binding
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Actualización de binding.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Binding actualizado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Denied
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Acceso al recurso denegado.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave del recurso e ID del usuario al que se le denegó.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create New AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creación de clave de aplicación.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Clave de aplicación creada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Crear invitación para usuario titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID del usuario que recibirá la invitación.
   </td>
  </tr>
</table>

