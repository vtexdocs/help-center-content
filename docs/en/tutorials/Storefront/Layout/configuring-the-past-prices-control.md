---
title: 'Configure the price history control'
id: tutorials_4288
status: ARCHIVED
createdAt: 2017-04-27T21:51:18.726Z
updatedAt: 2022-09-08T16:44:13.097Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:15.959Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: configuring-the-past-prices-control
locale: en
legacySlug: configuring-the-past-prices-control
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

The past prices control in VTEX is intended to show the lowest price invoiced for an item per month. In other words, it can show the lowest price for which a particular item was sold in your store.

### How to configure it

The control should be included in the product page's template, as follows:

```
<!--Price History Inicio v1-->
<b style="font-family: Inconsolata, monospace;"><vtex.cmc:StockKeepingUnitPriceHistory Months="6" Percentile="100"/>
<!--Price History Fim-->
```

See the complete list of controls for templates [here](http://help.vtex.com/tutorial/lista-de-controles-para-templates/ "here").

### Showing the prices

The default exhibition method for the values looks like the image below. The year, month and lowest amount invoiced this month are shown in sequence.

![HistPrecos](https://images.contentful.com/alneenqid6w5/2AX7uKU4zW66sA0AICcEM2/81042cedd7d0ef937b1c56a8878d8d0c/HistPrecos.png)

If you want to show these details in another way, you will have to get a layout agency to customize the model.

### The parameters _Months_ and _Percentile_

To allow more flexibility in showing values in the product page, you can use the **_Months _**parameter to define the number of months to be taken into account by the control. 

If the parameter is "6", for example, the control will show the lowest amount invoiced for the item in each of the last six months.

In addition, it can happen that the lowest amount invoiced for the item is below the price usually applied by the store, for example because of a specific promotion. To avoid showing this value, you can use the parameter **_Percentile_**. 

This allows you to ignore peripheral values. For example: using the parameter with a value of 95 (Percentile="95"), 5% of the amounts are ignored.

Using the parameter with a value of 90 (Percentile="90"), 10% of the amounts are ignored. 

In cases like that, prices much below those normally applied will not be shown.

_If there are price variations in a particular month, the control shows the lowest value invoiced for the item during the month._

_If there were no sales of an item during the month, the control will not show a value for it._
