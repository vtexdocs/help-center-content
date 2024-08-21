---
title: 'inStore as a POS'
id: 5XWo7q35jkDDq3PxUs1EVi
status: DRAFT
createdAt: 2020-07-01T12:46:45.819Z
updatedAt: 2022-02-21T16:56:37.470Z
publishedAt: 
firstPublishedAt: 2020-07-01T13:10:52.289Z
contentType: trackArticle
productTeam: Shopping
slug: setting-up-instore-as-a-pos
locale: en
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugEN: unified-commerce-strategies
---

The purpose of this guide is to teach you the steps required to use the inStore application as a point of sale (POS) in your physical stores. That is, after reading these guidelines, your physical store salespeople should be able to close purchases through inStore - which means that it must be integrated with a card machine and must be able to issue invoices.

## Prerequisites

First of all, you must consider the prerequisites that your store needs to ensure. Check our article on [Prerequisites for using inStore](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Prerequisites for using inStore").

## Implement inStore as a POS

>ℹ️ Although it is possible to implement inStore as a POS in other ways, in this article we explain how to do it using the franchise account and White Label Seller features. This is the architecture most recommended by VTEX for this type of project.

These are the steps to implement inStore as a POS:

1. Create franchise accounts.
2. Create pick-up points for your physical stores.
3. Connect the pick-up points to the local warehouses of the physical stores.
4. Build an integration with an invoice issuing system.

### Create franchise accounts

We recommend using the [franchise account feature](https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label) to implement inStore as a POS. With them, each of your physical stores will have a separate environment, with their own logistics, but all will inherit the catalog from the main environment.

To request the creation of a franchise account, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).

Your franchise accounts will function as White Label Sellers. This means that when an order is placed on any channel, be it a physical store or an online store, the system will search among all those who can deliver with the best SLA.

The logistics and inventory of each franchise account can be managed in their own separate VTEX environment. To access this environment, enter the URL `{{AccountName}}.myvtex.com/admin`, where `{{AccountName}}` should be replaced with the name of the franchise account.

### Create pick-up points

In order for your customer to be able to buy (either at the store itself or through another channel) and pick up products at the store, you must set up physical stores as pick-up points. To do this, follow the steps below.

1. Log in to the Admin of the desired franchise account and, in the side menu, click __Inventory & shipping__.
2. Click __Pick-up Points__.
3. Click the __Add__ button.
4. Fill in the information about the store (name, address and opening hours).

### Connect pick-up points to warehouses

Now, you need to connect the pick-up point to the physical store's local warehouse. That is, you need to inform the system that the products that will be picked up at that pick-up point (the store itself) will come out of the local inventory (that is, also the store's own warehouse). To do this, follow the steps below.

1. In the Admin side menu, click __Inventory & shipping__, if you are not there already.
2. Click on the __Warehouse__ tab.
3. Select the local warehouse of the physical store (or create one, if you haven't already).
4. In the inStore warehouse section, select the __pick-up point__ you just created from the dropdown menu.

With that, your warehouse is connected to the pick-up point, and customers can already pick up products at this physical store.

### Build an integration with an invoice issuing system

To use inStore as a point of sale, in addition to [the acquirer and the card machine](https://help.vtex.com/en/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) connected to the system, it is necessary to integrate with a system capable of issuing invoices.
