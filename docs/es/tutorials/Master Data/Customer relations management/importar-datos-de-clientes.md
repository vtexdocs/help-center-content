---
title: 'Importar datos de clientes'
id: 2zWYVOyj0sISYQmeUwCsI0
status: PUBLISHED
createdAt: 2017-06-22T20:55:49.745Z
updatedAt: 2025-03-21T18:34:06.692Z
publishedAt: 2025-03-21T18:34:06.692Z
firstPublishedAt: 2017-06-27T14:40:29.106Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slugEN: import-customer-data
locale: es
legacySlug: importar-datos-de-clientes-brasil
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

La importación de datos de clientes debe hacerse en el Master Data. Para el envío de datos, use el artículo [Importando datos en el Master Data](/es/tutorial/importar-datos-en-el-master-data).

<div class="alert alert-danger">
   <p>Vea <a href="https://developers.vtex.com/docs/guides/import-customer-data">importar datos de clientes con la API de Master Data v1</a>.</p>
</div>

El checkout trabaja con los datos de las entidades CL (cliente) y AD (dirección).

Pero es importante notar que para que el checkout ya traiga los datos del cliente en el carrito con base en el email, es fundamental asegurar que todos los datos a continuación estén correctamente registrados en el Master Data.

<div class="alert alert-warning">
<p>Los nombres de los campos en el checkout y en Master Data son diferentes, pero sus valores son equivalentes; por ejemplo, <code>addressId</code> y <code>addressName</code>. Para más detalles sobre esta equivalencia, consulta la documentación de la  <a href="https://developers.vtex.com/docs/api-reference/masterdata-api?endpoint=overview">Master Data API</a>.</p>
</div>

Las siguientes tablas representan los datos o formatos necesarios para la importación. 

### Campos personales

<iframe src="https://help.vtex.com/tables/checkoutprofilepersonal/es" title="Campos personales obligatorios" frameBorder="0" width="100%" height="850"></iframe>

### Campos de dirección

<iframe src="https://help.vtex.com/tables/checkoutprofileaddress/es" title="Campos de dirección obligatorios" frameBorder="0" width="100%" height="850"></iframe>

### Campos corporativos

<iframe src="https://help.vtex.com/tables/checkoutprofilecorporate/es" title="Campos corporativos obligatorios" frameBorder="0" width="100%" height="850"></iframe>

### Más información

 * [SmartCheckout - Rellenado automático de los datos del cliente](/es/tutorial/smartcheckout-rellenado-automatico-de-los-datos-del-cliente--2Nuu3xAFzdhIzJIldAdtan)
 * [`orderForm` fields](https://developers.vtex.com/docs/guides/orderform-fields#clientprofiledata)
