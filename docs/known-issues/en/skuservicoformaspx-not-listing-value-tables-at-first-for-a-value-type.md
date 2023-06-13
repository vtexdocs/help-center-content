---
title: SkuServicoForm.aspx not listing Value Tables at first for a Value type
id: 2QrjRVvJXiWmRXTYf8DrMK
status: PUBLISHED
createdAt: 2022-06-28T16:55:32.216Z
updatedAt: 2022-11-25T21:50:15.511Z
publishedAt: 2022-11-25T21:50:15.511Z
firstPublishedAt: 2022-06-28T16:55:32.529Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: skuservicoformaspx-not-listing-value-tables-at-first-for-a-value-type
kiStatus: Backlog
internalReference: 335819
---

## Summary


When associating a service for an SKU in our catalog, for a store that has multiple service types and service values (Value type field), at first, when a user enters the UI, the list of options for a given "Service Type" is currently only listing the associated options in the Value table of the first selected service type.

For instance, in the image below there are 3 service types: "Garantia", "seguros" and "Plan Tigo":

 ![](https://vtexhelp.zendesk.com/attachments/token/Rdyzxu0tAANzE5KykiV0oMjzm/?name=inline2069937537.png)

After selecting the option in this field, no matter which one, the field "Value Table" only displays the service values associated with the first shown option in the "Service type" listing:

 ![](https://vtexhelp.zendesk.com/attachments/token/Oir3SDEuyyHpavfyvjWVvzloD/?name=inline-854668487.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/tacfiTTFBD2gaHDsIFFqQh5nx/?name=inline-89998349.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/MHHcoIPlLX1S6sFbR1qU4PUgs/?name=inline-213983669.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/R5mVI5AJWsyCRMLsq3AQHssC4/?name=inline-775900967.png)

The user must first select the service type and save the configuration even with an incorrect value table and then when revisiting it, the first value will again be listed, but this time, since the first value will be the previously selected one, it will list the desired options:

 ![](https://vtexhelp.zendesk.com/attachments/token/D4bKJTmOebjtNL9K8YkUuZdUC/?name=inline1891813417.png)

This is the selection that's currently not working:
 ![](https://vtexhelp.zendesk.com/attachments/token/3jCJvZUdD88zwNiQMtQN6KKh0/?name=inline-1019394985.png)

Here: https://github.com/vtex/vcs.commerce/blob/blaster/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx#L88
back: https://github.com/vtex/vcs.commerce/blob/blaster/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx.cs#L186
problem is most likely here: https://github.com/vtex/vcs.commerce/blob/657c58015196fd3422b1972ed0b82b144049e238/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx.cs#L387

## Simulation


1) In the SkuServicoTipo.aspx UI create 2+ service types
2) Create, in the SkuServicoValor.aspx UI 2+ service values and associate each to a different service type.
3) Go to the SkuServicoForm.aspx?IdSku= UI for any SKU of the store.
4) Select a service type in this listing other than the 1st one in the list:
 ![](https://vtexhelp.zendesk.com/attachments/token/rbcX4EHqomHdq6jbBLh6Ug9sN/?name=inline-260448758.png)
5) Check the value tables, the associated values won't be the correct ones, but the listing for the first value, which in our example above is "Serviço 1".


## Workaround


Saving the incorrect value table for a service type in the UI, revisiting it afterward, and then changing it to the desired listed value table.

For instance, in the example in the Summary section of this KI, we've selected 'Seguros' in the service type and initially, the listed value tables were the ones for 'Garantia'.

If I save it as 'seguros', even with an incorrect value in the Value Table:
 ![](https://vtexhelp.zendesk.com/attachments/token/MVgY0cQ8thPq7qyiHOk49fLw9/?name=inline-949921420.png)

After saving and then revisiting this UI, the correct value tables for 'seguros' should now be listed and selectable:

 ![](https://vtexhelp.zendesk.com/attachments/token/DZPRFPWvxmgO7HICXgfeRodNU/?name=inline-1837217771.png)

