---
title: 'Import customer data'
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

<iframe src="https://help.vtex.com/tables/checkoutprofilepersonal/en" title="Required personal information fields" frameBorder="0" width="100%" height="850"></iframe>

### Address fields

<iframe src="https://help.vtex.com/tables/checkoutprofileaddress/en" title="Required address fields" frameBorder="0" width="100%" height="850"></iframe>

### Corporate fields

<iframe src="https://help.vtex.com/tables/checkoutprofilecorporate/en" title="Required corporate fields" frameBorder="0" width="100%" height="850"></iframe>

### Learn more

 * [SmartCheckout - Customer information automatic fill-in](/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan)
 * [`orderForm` fields](https://developers.vtex.com/docs/guides/orderform-fields#clientprofiledata)
