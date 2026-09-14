---
title: 'Import customer data'
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
legacySlug: import-customer-data-brazil
locale: en
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

The import of customer data must be made in Master Data. To find out more about sending data, use this article on [Importing data to Master Data](/en/tutorial/importing-data-into-master-data).

> ❗ You can see the guide on [how to import customer information programattically using the Master Data v1 API](https://developers.vtex.com/docs/guides/import-customer-data).

The checkout works with CL (customer) and AD (address) entities data.

Please note that, for checkout to display the customer's data in the chart based on the email, you must ensure that all the following data is correctly registered in Master Data.

> ⚠️ The field names in the checkout and Master Data differ, but their values are equivalent—for example, `addressId` and `addressName`. For more details on this equivalence, refer to the [Master Data API](https://developers.vtex.com/docs/api-reference/masterdata-api?endpoint=overview) documentation.

The tables below include the data and the formats required for the import.  

### Personal information fields

<DataTable
  src="data-tables/checkout-profile-personal.json"
  columns={[
    { key: 'country', label: 'Country', type: 'country', sortable: true, filterable: true },
    { key: 'fieldName', label: 'Field name', type: 'code', sortable: true, filterable: true },
    { key: 'description', label: 'Description' },
    { key: 'type', label: 'Type' },
  ]}
/>

### Address fields

<DataTable
  src="data-tables/checkout-profile-address.json"
  columns={[
    { key: 'country', label: 'Country', type: 'country', sortable: true, filterable: true },
    { key: 'fieldName', label: 'Field name', type: 'code', sortable: true, filterable: true },
    { key: 'description', label: 'Description' },
    { key: 'type', label: 'Type' },
  ]}
/>

### Corporate fields

<DataTable
  src="data-tables/checkout-profile-corporate.json"
  columns={[
    { key: 'country', label: 'Country', type: 'country', sortable: true, filterable: true },
    { key: 'fieldName', label: 'Field name', type: 'code', sortable: true, filterable: true },
    { key: 'description', label: 'Description' },
    { key: 'type', label: 'Type' },
  ]}
/>

### Learn more

 * [SmartCheckout - Customer information automatic fill-in](/en/docs/tutorials/smartcheckout-customer-information-automatic-fill-in)
 * [`orderForm` fields](https://developers.vtex.com/docs/guides/orderform-fields#clientprofiledata)
