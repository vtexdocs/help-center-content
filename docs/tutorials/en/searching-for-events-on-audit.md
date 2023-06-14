---
title: Searching for events on Audit
id: 5RXf9WJ5YLFBcS8q8KcxTA
status: PUBLISHED
createdAt: 2021-10-21T16:51:06.108Z
updatedAt: 2022-11-01T12:53:46.283Z
publishedAt: 2022-11-01T12:53:46.283Z
firstPublishedAt: 2021-10-21T21:55:42.939Z
contentType: tutorial
productTeam: Others
author: 4SqDPmUJIIz2KMMKgiyqKl
slug: searching-for-events-on-audit
legacySlug: searching-for-events-on-audit
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---


To increase transparency and trust among your store's admin users, you can see the records of multiple transactions and their respective times on Audit — a module used to search and investigate the store's transaction history with the help of filters. 

![Screenshot for Audit UI for announcement](https://images.ctfassets.net/alneenqid6w5/1CwFsrYwjxCIhyqcc6ei86/1cae72785358e9622b3bbf0c481bd998/Audit_EN.png)

To access the Audit page, click _Store setup_ > _Audit_. On this page, you can use filters to search, check the last actions performed, and see examples of filters that can be used as a template.

## Performing a search for events on Audit

To start your search in Audit, select the **Audit events** tab. From the **Application** dropdown menu, choose the application you want to search.

By clicking on the **Selected date** button, you can choose a pre-defined date for the search. To select an exact period, click the toggle the **Use custom dates.**

<div class="alert alert-warning">
The system only stores records for the last three months.
</div>

You can add more filters to search for events more precisely. Click the **+ Add Filter** button. Select the filtering parameter (_Action_, _Event Details_, or _Author_) and to which value this topic should be compared. 

<div class="alert alert-info">
The search results will match exactly the value entered in the field. To avoid unexpected results, make sure there are no extra spaces in the search terms.
</div>

Note that you can add more than one filter, even with the same value. In this case, search results will return events matching any of the values you have entered. 

For example, the search corresponding to the figure below returned results whose actions are _Payment Notification_ or _Change Status_ and whose author is _[email@email.com](mailto:email@email.com)_.

![Filtros no Audit](https://images.ctfassets.net/alneenqid6w5/2Bl1FZuuaa3ZeHT52FEcMD/0b57df78228a0c06aa9d2c1ff302d7d4/Audit_filters_EN.png)

After selecting the application, the date, and other search filters, click the **Search** button to get the events that were found. 

Every search you perform will be saved in the **Last searches** tab. To redo a search, go to this tab, and click the <img src="https://images.ctfassets.net/alneenqid6w5/4gWsOnbLMOUeWh0r5YRDz/9b7148d995c03ca84b39473f266b46a9/refresh.png" width="15"> button corresponding to the search you want to perform again.

<div class="alert alert-warning">
This page shows only the last 50 searches. If you want to save a search indefinitely, perform the same search and add it to your browser favorites.
</div>

<div class = "alert alert-info">
You may find the full <a href="https://help.vtex.com/en/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ">list of events in Audit</a>.
</div>

## Examples of search filters 

* Follow the instructions below to search if a product was enabled in the Catalog on a certain date: 

1. Select the desired date.
2. In **Application**, select _Catalog (Admin)_.
3. Add a filter whose **Action** should equal _Product Activation_.
4. Add a filter whose **Event Details** should equal `product id "X" activated`  where `X` must be replaced by the ID of the searched product.

* To search if the price of a SKU has been changed on a particular date:
1. Select the desired date.
2. In **Application**, select _Prices_.
3. Add a filter whose **Action** should equal _Put Price_.
4. Add a filter whose **Event Details** should equal the SKU ID of the searched item.
* To search if a warehouse was deleted on a certain date:
1. Select the desired date.
2. In **Application**, select _Logistics_.
3. Add a filter whose **Action** should equal _Warehouse Delete_.
4. Add a filter whose **Event Details** should equal the ID of the searched item.
* To search if a carrier was deleted on a certain date:
1. Select the desired date.
2. In **Application**, select _Logistics_.
3. Add a filter whose **Action** should equal _Carrier Delete_. 
4. Add a filter whose **Event Details** should equal the ID of the searched carrier.

To see some more examples of filters you can use, click on the **Guide ** tab. 

<div class = "alert alert-info">
In the Audit application, <a href="https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">License Manager resources</a> are identified by the corresponding keys.
</div>

