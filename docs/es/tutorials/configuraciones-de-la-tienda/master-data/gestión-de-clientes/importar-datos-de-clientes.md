---
title: 'Importar datos de clientes'
id: 2zWYVOyj0sISYQmeUwCsI0
status: PUBLISHED
createdAt: 2017-06-22T20:55:49.745Z
updatedAt: 2025-10-24T23:00:50.285Z
publishedAt: 2025-10-24T23:00:50.285Z
firstPublishedAt: 2017-06-27T14:40:29.106Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slugEN: import-customer-data
legacySlug: importar-datos-de-clientes-brasil
locale: es
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

La importación de datos de clientes debe hacerse en el Master Data. Para el envío de datos, use el artículo [Importando datos en el Master Data](/es/tutorial/importar-datos-en-el-master-data).

> ❗ Vea [importar datos de clientes con la API de Master Data v1](https://developers.vtex.com/docs/guides/import-customer-data).

El checkout trabaja con los datos de las entidades CL (cliente) y AD (dirección).

Pero es importante notar que para que el checkout ya traiga los datos del cliente en el carrito con base en el email, es fundamental asegurar que todos los datos a continuación estén correctamente registrados en el Master Data.

> ⚠️ Los nombres de los campos en el checkout y en Master Data son diferentes, pero sus valores son equivalentes; por ejemplo, `addressId` y `addressName`. Para más detalles sobre esta equivalencia, consulta la documentación de la  [Master Data API](https://developers.vtex.com/docs/api-reference/masterdata-api?endpoint=overview).

Las siguientes tablas representan los datos o formatos necesarios para la importación. 

### Campos personales

<DataTable
  src="data-tables/checkout-profile-personal.json"
  columns={[
    { key: 'country', label: 'País', type: 'country', sortable: true, filterable: true },
    { key: 'fieldName', label: 'Nombre del campo', type: 'code', sortable: true, filterable: true },
    { key: 'description', label: 'Descripción' },
    { key: 'type', label: 'Tipo' },
  ]}
/>

### Campos de dirección

<DataTable
  src="data-tables/checkout-profile-address.json"
  columns={[
    { key: 'country', label: 'País', type: 'country', sortable: true, filterable: true },
    { key: 'fieldName', label: 'Nombre del campo', type: 'code', sortable: true, filterable: true },
    { key: 'description', label: 'Descripción' },
    { key: 'type', label: 'Tipo' },
  ]}
/>

### Campos corporativos

<DataTable
  src="data-tables/checkout-profile-corporate.json"
  columns={[
    { key: 'country', label: 'País', type: 'country', sortable: true, filterable: true },
    { key: 'fieldName', label: 'Nombre del campo', type: 'code', sortable: true, filterable: true },
    { key: 'description', label: 'Descripción' },
    { key: 'type', label: 'Tipo' },
  ]}
/>

### Más información

 * [SmartCheckout - Rellenado automático de los datos del cliente](/es/docs/tutorials/smartcheckout-rellenado-automatico-de-los-datos-del-cliente)
 * [`orderForm` fields](https://developers.vtex.com/docs/guides/orderform-fields#clientprofiledata)
