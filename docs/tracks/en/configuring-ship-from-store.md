---
title: 'Ship From Store'
id: 50GAmxxFsJoLWqcnMysWdl
status: PUBLISHED
createdAt: 2020-06-30T21:36:43.926Z
updatedAt: 2023-05-31T14:45:10.189Z
publishedAt: 2023-05-31T14:45:10.189Z
firstPublishedAt: 2020-06-30T21:45:36.187Z
contentType: trackArticle
productTeam: Shopping
slug: configuring-ship-from-store
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugEN: unified-commerce-strategies
---

The **Ship From Store** strategy allows a customer who wants to receive the products at home to receive them from the warehouse of a physical store. In other words, in this scenario, the store functions as a mini distribution center.

![35. Setting up Shipping From Store - 1](//images.ctfassets.net/alneenqid6w5/7uHIuX10TvTGJS1kkwPmBb/6847796e390c9d18123eea24f87469c4/35._Setting_up_Shipping_From_Store_-_1.png)

This type of logistics helps your operation to reduce costs and shipping time. Instead of having only the main warehouses - usually away from the central areas of cities - you now have a more capillary delivery network.

Consider this example: a customer who is at homeplaces an order on the e-commerce and wants to receive the products at home. Let's say you have a physical store in their neighborhood, 500 meters from the customer's home. If the store has the products they ordered in their local inventory, the Shipping From Store strategy allows these products to be shipped to the customer from that store - at a lower cost for you and with a better delivery time for the customer.

## Prerequisites

First of all, you must consider the prerequisites that your store needs to ensure in order to start implementing a Ship From Store strategy. Check our article on [Prerequisites for using VTEX Sales App](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Prerequisites for using VTEX Sales App").

## How to implement Ship From Store

<div class="alert alert-info">
Although it is possible to implement Ship From Store in other ways, in this article we will explain how to do it using the Franchise Account and Seller White Label features. This is the architecture most recommended by VTEX for this type of project.
</div>

These are the steps to implement __Ship From Store__:

1. [Create franchise accounts](#create-franchise-accounts).
2. [Configure the logistics](#configure-the-logistics).

### Create franchise accounts

We recommend using the [franchise account feature](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd) to implement __Ship From Store__. With them, each of your physical stores will have a separate environment, with their own logistics, but all will inherit the catalog from the main environment.

### Configure the logistics

With __Ship From Store__, your physical stores will be able to deliver from their local inventory. To allow this, you need to enable these stores to make product deliveries. See how in the steps below.

#### Add carriers to franchise accounts

Let's set up a carrier to deliver from the local warehouse of one of your physical stores.

1. In the VTEX Admin of the desired franchise account, go to **Shipping** > __Shipping Strategy__, or type __Shipping Strategy__ in the search bar at the top of the page.
2. Click the `Create shipping policy` button.
3. Fill in the carrier's data according to the article [Adding a carrier](https://help.vtex.com/en/tutorial/cadastrar-transportadora--tutorials_140).

#### Connect carriers to the physical store inventory

Now you need to inform the VTEX system which is the warehouse from which products will leave to be delivered by the carrier added in the previous step.

1. Add a loading dock, as described in [this article](https://help.vtex.com/en/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW?locale=en). In the __Associated shipping policies__ field, add the carrier that you created in the previous section of this guide.
2. Create a warehouse following the steps in the article [Adding a warehouse](https://help.vtex.com/en/tutorial/geristar-estoque--tutorials_137). In the __Origin__ section, link the loading dock you created in the previous step.
