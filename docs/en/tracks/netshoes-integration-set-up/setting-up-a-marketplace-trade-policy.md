---
title: 'Setting up a marketplace trade policy'
id: 6mokL50ny8gYK2S4ImOy2w
status: PUBLISHED
createdAt: 2018-08-13T12:08:39.183Z
updatedAt: 2021-02-24T15:53:02.071Z
publishedAt: 2021-02-24T15:53:02.071Z
firstPublishedAt: 2018-08-13T14:29:58.221Z
contentType: trackArticle
productTeam: Channels
slug: setting-up-a-marketplace-trade-policy
locale: en
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugEN: netshoes-integration-set-up
---

The first step of any integration is to set up the sales policy that will be used in it.

One of the functions of sales policies is to make a differentiation of __catalog__ and/or __logistics__ between the different sales channels of your store. That is, a new sales policy is only necessary when one of these factors is different between the sales channels.

A single sales policy can be shared by more than one marketplace or between the main store and the marketplace. To do this, simply use the same sales policy ID in the [settings](/en/tutorial/integrating-with-marketplace). By doing so, the same catalog and the same logistics will be used for the stores or channels that are configured with the same sales policy.

![carrefour.en2](https://images.ctfassets.net/alneenqid6w5/5ZpCw7QeOoLULQmVMx1qil/ac520788fc2a7f4c7455c21fb9eb7a06/carrefour.en2.png)

In other words, if there is no need to define a specific catalog or logistics type for different sales channels, then you will not need to use separate sales policies. Simply associate your integration with the marketplace to the sales policy ID that already exists.

![carrefour.en3](https://images.ctfassets.net/alneenqid6w5/8lImGnaG3epR5OtYHyykP/7c11964cda1bfc0eab26adec48027cc4/carrefour.en3.png)

So before setting up a new sales policy in your store, make sure you need to do that. If the answer is yes, follow the guidelines in the article [How to hire a new sales policy](https://help.vtex.com/en/faq/how-to-configure-a-new-trade-policy--frequentlyAskedQuestions_700) before moving on to the next configuration step. If your sales policy already meets the conditions you need for integration with the marketplace, follow the instructions below.


## Defining product catalog

In order to define the product catalog that will be sent to the marketplace, the store must mark the flag __Sales Policies__ in the product registration screen, selecting the desired sales policies. If no sales policy is selected, the product will be considered for all of them.

1. Access the catalog.
2. Access the __Products and SKUs__ tab.
3. Choose a product and click the __Change__ button.
4. Check the __Sales Policies__ flag for the chosen sales policies.
5. Click __Save__.

>❗ VTEX does not recommend performing product catalog management for marketplace through collections. This mechanism brings many complexities in the organization. We recommend managing it through the Sales Policies flag instead.

## Defining the logistics

The simulation of shipping and inventory update depends on a previous configuration of the logistics that will meet the sales policy associated with the marketplace. The required settings are the default settings for store logistics. However, it is at the warehouse dock that you must associate the sales policy linked to the marketplace.

1. [Create or edit a warehouse dock](/en/tutorial/how-to-register-a-dock) in association with the sales policy.
2. Associate a [carrier](/en/tutorial/registering-a-carrier) to that warehouse dock.
3. Check if there is any [inventory](/en/tutorial/registering-a-stock) associated with that warehouse dock.
