---
title: 'Using Orders Managment filters in API'
id: tutorials_753
status: DRAFT
createdAt: 2017-04-27T21:58:17.338Z
updatedAt: 2022-10-21T00:14:29.132Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.267Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: using-orders-managment-filters-in-api
locale: en
legacySlug: using-oms-filters-in-api
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

The purpose of this article is to show how to use the filters applied by the Orders Managment API in API queries.

The list containing all APIs available on Orders Managment can be checked in [the documentation for developers](https://developers.vtex.com "the documentation for developers").

The example used is the query API related to orders: [http://{STORENAME}.vtexcommercestable.com.br/api/oms/pvt/orders/](http://nomedaloja.vtexcommercestable.com.br/api/oms/pvt/orders/ "http://nomedaloja.vtexcommercestable.com.br/api/oms/pvt/orders/"), where all orders are listed on pages showing 15 orders each.

### Applying the filters

1. Access the Orders Managment module;
2. Click on the filters icon.

We will use a filter based on the date of creation of the order, within a range that may bring all orders marked as “**há um mês**” and whose status is “**pronto para manuseio.”**

![](https://images.contentful.com/alneenqid6w5/53zjSDeDBe20MkAQa2iqk0/ba1b8b24ddb63e121dd060a79aa1a534/OMS_Filtro5.png)

![](https://images.contentful.com/alneenqid6w5/3AS1rSk36MAwSIMGkaqsSm/1c496620f9c9669b7c9ccd6078681f8e/OMS_Filtro.png)

![](https://images.contentful.com/alneenqid6w5/jj5tYpFP8WkYicAAIymCa/5157cf41ab647f31e20db895669eabea/OMS_Filtro2.png)

After checking the filters, a URL will be generated in the browser with the parameters selected:![](https://images.contentful.com/alneenqid6w5/WYPqJKIjwkuCO86SMU6sy/d5ad173798f8103c19990eed35709ecf/OMS_Filtro3.png)

Then, you will need to decode the URL so that it can be interpreted by the REST interface.
Using the [URL dencoder](http://meyerweb.com/eric/tools/dencoder/ "URL dencoder") tool, you can make adjustments manually and quickly.

![](https://images.contentful.com/alneenqid6w5/4j6WPSCXq084cMaIcQ8QsE/8dcab3bc07fd714af788cea586293f57/OMS_Filtro4.png)

Then, just copy the URL extension from “?” and paste it in the structure of origin to the URL of request.
Ex.:` http://nomedaloja.vtexcommercestable.com.br/api/oms/pvt/orders/?orderBy=creationDate,desc&amp;f_creationDate=creationDate:[2014-09-03T03:00:00.000Z TO 2014-10-04T02:59:59.999Z]&amp;f_statusDescription=Pronto para o manuseio`

In order to use paging and determine the number of records per page, add the parameters `_&amp;page=1&amp;per_page=100_`.
