---
title: 'Actions for a VTEX marketplace operation'
id: 2SdIflvwywiOqCpczKCfev
status: PUBLISHED
createdAt: 2022-01-26T23:13:10.828Z
updatedAt: 2023-04-17T22:08:54.822Z
publishedAt: 2023-04-17T22:08:54.822Z
firstPublishedAt: 2022-01-26T23:23:49.548Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: actions-for-vtex-marketplace-operation
legacySlug: actions-for-vtex-marketplace-operation
locale: en
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

VTEX's architecture allows stores hosted on the platform to offer products from other stores, whether they are VTEX stores or not. When a VTEX store starts selling products from other sellers, it becomes a VTEX marketplace. Learn more about the possibilities for this business model in [Marketplace strategies on VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).

After [configuring your VTEX environment](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb) to become a marketplace, you must perform the routine operations required to operate a marketplace. We suggest including the tools below, developed by VTEX, in your team's routine. For each action in your operation, we will recommend a VTEX feature.

- [Seller hunting](#seller-hunting)  
- [Analyzing seller results](#analyzing-seller-results)  
- [Configuring offer curation](#configuring-offer-curation)
- [Cataloging offers](#cataloging-offers)  
- [Creating promotions](#creating-promotions)  
- [Managing your storefront](#managing-your-storefront)  
- [Managing orders](#managing-orders)  

## Seller hunting

When planning your operation as a VTEX marketplace, set aside some time to identify and recruit a number of [sellers](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) that cover your desired product variety, inventory availability, and logistics coverage. In addition, it is important to continually expand your portfolio of sellers, to ensure that there is always a healthy flow of new sellers to complement your assortment of products and services.

If you want to find new partners to sell in your marketplace, use the __Find sellers__ which facilitates the identification of and communication between marketplaces and sellers operating in the VTEX ecosystem. To access this page, log in to your VTEX Admin and go to **Marketplace > Sellers > Find sellers.**

To add new sellers to your marketplace from the VTEX Admin, follow the instructions in [Adding a seller](https://help.vtex.com/en/tutorial/configurando-seller/). You can also do this using API integration. To use the API, follow the instructions in the [External seller integration guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide). 

## Analyzing seller results

The [Sales performance](https://help.vtex.com/en/tutorial/sales-performance--3DMube0sEsK9vPcRYGas72) page in your Admin is a dashboard for unified commerce that helps stores grow their business and make decisions more accurately. The dashboard facilitates the process of seller farming, which means it allows marketplaces to analyze order data from their store and sellers to monitor the health of their business, understand reasons for variations in sales volume or conversion rate, and find opportunities to improve the results of specific sellers. 

To access the page, log in to your VTEX Admin and go to **Dashboards > Sales Performance**.  

## Configuring offer curation

The [Seller Portal](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) is a component of the VTEX platform that allows sellers to connect and sell their products on marketplaces. The Seller Portal's [Shared products](https://help.vtex.com/en/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) feature allows marketplaces to export their own catalog architecture so that sellers can send offers for the products already registered in the marketplace.

This tool is recommended for marketplaces that want to have more control over the curation of products they offer. 

<div class="alert alert-info">
To activate the Seller Portal for their sellers, the marketplace must request this feature by contacting their VTEX account CSM. 
</div>

## Cataloging offers

A product submitted by a seller to a marketplace with price and inventory information becomes an offer. However, before the product is available for sale, the marketplace needs to review and approve the offer in a process called offer cataloging. Cataloging allows you to create new products and associate offers with SKUs or existing products to make them available for sale.

The cataloging process is performed on the [Received SKUs](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus/) page, in the **MARKETPLACE > Sellers** menu of your VTEX Admin, or using the [Match Received SKUs](https://developers.vtex.com/vtex-rest-api/reference/match) API. 

<div class="alert alert-info">
Before approving an offer, it is important to ensure that the product information submitted by the seller matches your business strategy. When listing offers, consider the quality of the information submitted by the seller, such as price, product description, and image.
</div>

[VTEX Matcher](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) is a tool used by marketplaces to analyze offers submitted by sellers and accelerate their cataloging process. You can configure VTEX Matcher to operate on rules other than the default configuration using the [Save Account's Approval Settings API](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).

## Creating promotions

VTEX marketplaces can create a series of rules for promotions and determine, according to the context of the purchase, if and how a discount will be applied. You can create promotions for free shipping, nominal price, and percentage price. Promotions can be created for products, collections, or categories. For more information, read the article [Configuring promotions for marketplaces](https://help.vtex.com/en/tutorial/configurar-promocao-para-marketplace--tutorials_406).

## Managing your storefront

Managing the content that is displayed on your storefront allows you to maintain a cohesive editorial line for your marketplace. We suggest establishing clear guidelines on what kind of content is approved in your marketplace content strategy. 

You can configure your marketplace's [Legacy CMS](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z) according to the content you want to promote, so that your marketplace shopping experience reflects your brand identity. For stores hosted on VTEX IO, you can [customize CSS handles](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) to change the look of your marketplace storefront.

## Managing orders 

Marketplace order management is directly connected to customer satisfaction with your marketplace. Establishing and following up on the SLA (Service Level Agreement) between sellers and marketplaces is key to a positive rating of your marketplace. The SLA is the service agreement between the seller and the marketplace, and includes details about shipping policies, customer service, and exchanges and returns, for example. 

On the VTEX platform, the **Order management** section allows sellers and marketplaces to track [order flow](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8). You can differentiate between [orders from the marketplace and orders from your sellers](https://help.vtex.com/en/tutorial/o-que-sao-pedidos-com-origem-marketplace-e-origem-fulfillment--6eVYrmUAwMOeKICU2KuG06). 

[Marketplaces that process payments](https://help.vtex.com/en/tutorial/pagamentos-em-marketplaces-vtex--2kYOfWCZYweJkYl18bw9yD) must follow the [transaction flow in Payments](https://help.vtex.com/en/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ). Sellers, on the other hand, are responsible for the [fulfillment](https://help.vtex.com/en/tutorial/o-que-sao-pedidos-com-origem-marketplace-e-origem-fulfillment--6eVYrmUAwMOeKICU2KuG06) of the orders, so they must [add the invoice](https://help.vtex.com/en/tutorial/como-inserir-a-nota-fiscal) to the platform.

