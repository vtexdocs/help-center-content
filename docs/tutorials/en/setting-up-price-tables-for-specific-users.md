---
title: Configuring price tables for specific users
id: 5S9oDOMHNmY4K0kAewAiWY
status: PUBLISHED
createdAt: 2018-08-21T13:30:27.663Z
updatedAt: 2023-03-30T15:54:24.193Z
publishedAt: 2023-03-30T15:54:24.193Z
firstPublishedAt: 2018-08-21T16:04:20.758Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: setting-up-price-tables-for-specific-users
legacySlug: setting-up-price-tables-for-specific-users-using-session
subcategory: 4id9W3RDyw02CasOm2C2iy
---

A price table is a set of SKU prices that can be applied to specific contexts. These tables store the price information that is displayed on a store's page.

Unlike trade policies, which can also be used to segment prices, there is no limit to the number of Price Tables that can be created. **The only limitation is a maximum of 100 fixed prices for the same SKU**.

For example, let's say you want customers in São Paulo to see a price different from the price seen by customers in Rio de Janeiro. In this case, you can create two different price lists, and associate the first one to the customers in São Paulo, and the second to those in Rio de Janeiro.

<div class="alert alert-info">
<p>You can define fixed prices or price rules to modify the price of an SKU in a price table.</p>
</div>

This gives the retailer more freedom to handle contextual information from their customers. 

## How to set up Price Tables

To set up Price Tables, you need to:

1. [Set up the `priceTables` field in Master Data](#set-up-the-pricetables-field-in-master-data)
2. [Define prices in the Prices module](#define-the-prices-in-the-prices-module) 

Please follow the instructions detailed below.

### Setting up the `priceTables` field in Master Data

To use Price Tables, you must enable the `priceTables` field in the __Client__ entity in __Master Data__, which means that each customer in your store will have an attribute that indicates if it is associated with a specific price table.

To do this, follow the steps below.

1. In the VTEX Admin, go to *Store Settings > Storefront > Master Data*, or type *Master Data* in the search bar at the top of the page.
2. Click on the gear icon next to __Profile System__.
3. In the __Clientes__ row, click on the __pencil button__.
4. Check the box next to __priceTables__.
5. Now click on the __Schemas de Layout__ tab and drag the `priceTables` field from the __Campos disponíveis__ section to wherever you want - for example, to the box __Campos da coluna 1__. 
6. Click on __Save__.

Now let's configure the new field for your __Customers__ entity.

1. In Master Data, click on __Advanced settings__.
2. Click on __Estrutura de dados__.
3. Select the __Data entities__ tab.
4. On the CL (Customers) entity row, click on the __pencil button__.
5. In the priceTables row, click on the __gear icon__.
6. Check the box next to __Is filterable?__.
7. In the __Domain__ field, you can enter a domain name for each price table. Press Enter to display additional fields. In the example in the image below, we entered two domains: `Gold` and` Silver`.
Another way to use Price Tables is by declaring them directly on the customer form. If a new Price Table value is entered for a customer, that Price Table will be automatically created, without having been previously declared in Domains. To create more than one, separate them by commas. For example: `gold, silver`.
9. When you finish, click on __Save__.
10. In the row of the entity you have edited, click on the floppy disk icon to publish it.
11. Then, click on the arrows icon to reindex it.

<div class="alert alert-info">
<p>Each customer can have up to 5 Price Tables associated with them.
When the customer has more than one Price Table linked to them, the system will follow the order in which the Price Tables were created to determine the price of each SKU. If the SKU does not have a price configured in the first Price Table, the system will look for a price in the second one, and so on. In case there is no price configured in any of the Price Tables, the base price will be applied.</p></div>

Now your Customers entity has a `priceTables` attribute, which can be populated directly in the Master Data UI or via API.

### Defining prices in the Prices module

Once you have created your price tables, you can see the price of each product in the store separated by price table, in the same way as with trade policies.

In the Admin, go to __Prices__ > __Price List__.

In the search filter, enter the names of the tables created in __Master Data__.

![Filters](https://images.ctfassets.net/alneenqid6w5/4l7cEOha360ceaegCA4Ws6/17ea17f13d6dd9e399f07c4cefe1888a/Filters.png)

Price tables are shown as columns of the price list, as are trade policies.

![Prices](https://images.ctfassets.net/alneenqid6w5/31kElv6oD6KksC8wyUoCgU/815d607e3cdcd2d7c15239d202a81ad0/Prices.png)

To update a fixed price in a specific table, on the column corresponding to that table, and then on __Define fixed prices__. 

To enter and update prices from a specific table via API, check out the [Pricing API documentation](https://developers.vtex.com/reference/prices-and-fixed-prices#createeditfixedpricesonapricetableortradepolicy).

<div class="alert alert-info">
<p>The Price Table has priority over the prices from the trade Policy. If a given Price Table applies to a user's context, the price set in it will be used, even if that customer is also within the context of a trade policy with a different price.</p>
</div>

## Displaying different prices for different users

When a user is not logged into your store, the default prices set by the trade policy will be displayed.

If the user is logged in, they will see the prices corresponding to the price table with which their email is associated.

For example, these two clients are linked to different price tables:
![Clients](https://images.ctfassets.net/alneenqid6w5/4YanVck2GswcKKEEamO6gs/d1a2bc5603716c485dd000239a49fb41/Clients.png)

When Daniel, who is linked to the Silver price table, is logged into the store, he will see the prices set on this table. The backpack in the example above will cost USD 50.00.

Breno, who is linked to the Gold price table, will see the prices set on this table. He would pay USD 60.50 for the same backpack.

<div class="alert alert-warning">
The customer <strong> must </ strong> be authenticated — through token, password, Google, or Facebook — to see the prices that apply to them. Otherwise, the price shown will be the default price. Please note that entering the email address at checkout is not enough, since in this process the customer is identified, but not authenticated.
</div>
