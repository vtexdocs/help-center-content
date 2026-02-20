---
title: 'What is a franchise account?'
id: kWQC6RkFSCUFGgY5gSjdl
status: PUBLISHED
createdAt: 2021-10-13T20:38:07.014Z
updatedAt: 2024-05-24T16:38:26.710Z
publishedAt: 2024-05-24T16:38:26.710Z
firstPublishedAt: 2021-10-13T20:57:01.457Z
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slugEN: what-is-a-franchise-account
legacySlug: what-is-a-franchise-account
locale: en
subcategoryId: 3vhg10rO4MSmy06KeIYMIa
order: 1
---

On the VTEX platform, you have the option to register physical stores, franchisees and representatives of your network as franchise accounts. This is one way to expand your [Unified Commerce](/en/docs/tracks/unified-commerce-101) or Omnichannel strategy.

The franchise account is associated with a main account. In the case of a brand that has several physical stores, franchisees or representatives, each of them can have a franchise account linked to the brand's main account. This allows them to deliver the products sold by the brand's ecommerce.

![diagrama contas v2 - en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/omnichannel/omnichannel-overview/what-is-a-franchise-account_1.png)

In this article, we will cover the following topics:

- [Characteristics of the franchise account](#characteristics-of-the-franchise-account)
- [Relationship between franchise account and White Label Seller](#relationship-between-franchise-account-and-white-label-seller)
- [Franchise account configuration](#franchise-account-configuration)
  - [Pricing](#pricing)
  - [Payments](#payments)
- [Request the creation of a franchise account](#request-the-creation-of-a-franchise-account)

## Characteristics of the franchise account

The franchise account inherits the **Catalog** from the main account, but it has its own **Logistics** and performs its own **Order Management**, so that the physical store can manage the orders and deliver the products.

In addition, when using the franchise account you can manage prices and payment methods or you can choose to inherit them from the main account. See the [Configurations](#franchise-account-configuration) section to understand the usage possibilities.

A franchise account does not have its own website. Consumers browse directly on the main account website, which functions as a marketplace in this situation. Customer data is stored in the Master Data of the main account.

![diagrama admin contas - en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/omnichannel/omnichannel-overview/what-is-a-franchise-account_2.png)

## Relationship between franchise account and White Label Seller

Each franchise account automatically operates as a White Label Seller of the main account. This means that when the consumer adds a product to the cart and simulates the shipping cost in the main account store, the system automatically selects the White Label Seller that has that product in stock and displays the delivery methods of the sellers that offer the best conditions. To learn more about the White Label Sellers selection algorithm, read our [article](/en/docs/tutorials/white-label-sellers-selection) on the subject.

End customers do not choose or acknowledge the existence of White Label Sellers at any point in the process. In this logic, the consumers have a relationship with the brand (main account) and not with the physical stores (franchise accounts).

> ℹ️ Although all franchise accounts operate as White Label Sellers of the main account, these concepts do not mean the same thing. The franchise account is a type of account, while being White Label is a property of the seller. <ul> <li>**Account**: can be a franchise account or a regular account.</li> <li>**Seller**: can be of White Label type or non-White Label type.</li> </ul> As these concepts are independent, it is **eventually** possible that a franchise account operates as a non-White Label Seller of a marketplace other than the main account.

## Franchise account configuration

You can access and configure the [Logistics](/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/7k4SWtm3EIvLQ3aGXWC07), [Order management](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa), [Prices](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP),[Payments](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) and [Promotions &amp; Taxes](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) modules directly in the Admin of each of the franchise accounts or using [VTEX APIs](https://developers.vtex.com/vtex-rest-api/reference/get-to-know-vtex-apis).

To access the Admin of each franchise account, enter the URL `{{franchiseaccountname}}.myvtex.com/admin`, replacing the `{{franchiseaccountname}}` with the name of the franchise account you wish to manage.

There are several possible configurations for pricing and payment methods related to franchise accounts on VTEX, as described below. You can choose the form of use that best suits your business.

### Prices

#### Using the prices of the main account

In order for the franchise account to use the prices configured in the main account, it is necessary to select the option **Inherit prices from parent account** in the Settings of the **Prices** module of the franchise account, as described in [this article](/en/docs/tutorials/prices-settings).

#### Configuring prices specific to the franchise account

To configure specific prices for the franchise account, you must deselect the option **Inherit prices from parent account** in the Settings of the **Prices** module of the franchise account, as described in [this article](/en/docs/tutorials/prices-settings#price-general-settings). In addition, it is necessary to configure the desired prices in the [Prices module](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) or via the [Pricing API](https://developers.vtex.com/vtex-rest-api/reference/pricing-api-overview).

When prices vary across franchise accounts, you should [configure regionalization](/en/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw?&utm_source=autocomplete) to ensure a consistent shopping experience. 
By adopting regionalization, you can request the customer postal code before they navigate your store.This will allow you to display the products and prices available to their franchise account before proceeding to checkout.
If regionalization is not implemented, a certain product price may be displayed in the store, but when the customer proceeds to checkout and enters their postal code, the price might differ for the franchise account fulfilling the order, resulting in another price.
This discrepancy occurs because the catalog with the lowest price is prioritized during store navigation. However, at checkout, if the franchise account with the lowest price does not have the product in stock, the seller that has the product available will be selected, and the price will adjust to that seller's price.

### Payments

#### Using the payment methods of the main account

The default behavior of the platform is for the franchise account to use the payment methods configured in the main account.

Once you have [changed this configuration](#configuring-payment-methods-specific-to-the-franchise-account), if you want to return to the default behavior, you must follow the steps below.

1. Go to **Settings** in the **Order Management **module.
2. Go to the **Affiliates** tab.
3. Click on the affiliate that represents the main account, if there are any.
4. Deselect the **Use my payment method** option.
5. Click on `Save`.

#### Configuring payment methods specific to the franchise account

VTEX offers split payment solutions that can make the distribution of receivables to sellers automatic. For more information, please refer to the article about [Split payment](/en/docs/tutorials/split-payment).

> ⚠️ If you wish to implement the VTEX Sales App, it is necessary for physical stores to use the payment methods from the main account.

## Request the creation of a franchise account

To open a franchise account, contact our Growth Operations team through [*Support*](https://supporticket.vtex.com/support) by selecting **Commercial** and `Create a white label environment`.

The additional cost for the franchise account is specified in your contract. If not, please mention it in your request so that we can add an amendment to your contract.

You must fill in the fields with the following information:

- Master User email
- Name of the sellers: Main VTEX account + suffix

If the number of accounts is greater than 10, please include them in an attached table.

## Learn more

- [Multilevel Omnichannel Inventory](/en/docs/tutorials/multilevel-omnichannel-inventory)
- [Choosing between standard account, franchise account or Seller Portal](/en/docs/tutorials/choosing-between-standard-account-franchise-account-or-seller-portal)

