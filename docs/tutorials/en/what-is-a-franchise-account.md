---
title: What is a franchise account?
id: kWQC6RkFSCUFGgY5gSjdl
status: PUBLISHED
createdAt: 2021-10-13T20:38:07.014Z
updatedAt: 2023-05-31T15:20:29.177Z
publishedAt: 2023-05-31T15:20:29.177Z
firstPublishedAt: 2021-10-13T20:57:01.457Z
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slug: what-is-a-franchise-account
legacySlug: what-is-a-franchise-account
subcategory: 3vhg10rO4MSmy06KeIYMIa
---

On the VTEX platform, you have the option to register physical stores, franchisees and representatives of your network as franchise accounts. This is one way to expand your [Unified Commerce](https://help.vtex.com/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) or Omnichannel strategy.

The franchise account is associated with a main account. In the case of a brand that has several physical stores, franchisees or representatives, each of them can have a franchise account linked to the brand's main account. This allows them to deliver the products sold by the brand's ecommerce.

![diagrama contas v2 - en](//images.ctfassets.net/alneenqid6w5/6KC4yvWh08WZ3DMcGRJS4I/bf1a348a817eb6a839db435d5dce1a9c/diagrama_contas_v2_-_en.png)

In this article, we will cover the following topics:

- [Characteristics of the franchise account](#characteristics-of-the-franchise-account)
- [Relationship between franchise account and White Label Seller](#relationship-between-franchise-account-and-white-label-seller)
- [Franchise account configuration](#franchise-account-configuration)
    -  [Pricing](#pricing)    
    -  [Payments](#payments)
- [Request the creation of a franchise account](#request-the-creation-of-a-franchise-account)

## Characteristics of the franchise account

The franchise account inherits the **Catalog** from the main account, but it has its own **Logistics** and performs its own **Order Management**, so that the physical store can manage the orders and deliver the products.

In addition, when using the franchise account you can manage prices and payment methods or you can choose to inherit them from the main account. See the [Configurations](#franchise-account-configuration) section to understand the usage possibilities.

A franchise account does not have its own website. Consumers browse directly on the main account website, which functions as a marketplace in this situation. Customer data is stored in the Master Data of the main account.

![diagrama admin contas - en](//images.ctfassets.net/alneenqid6w5/226ePm8TzkWPFnTvJj2Sej/34a3ac170c1d3f7db9f4f03d27fa2a03/diagrama_admin_contas_-_en.png)

## Relationship between franchise account and White Label Seller

Each franchise account automatically operates as a White Label Seller of the main account. This means that when the consumer adds a product to the cart and simulates the shipping cost in the main account store, the system automatically selects the White Label Seller that has that product in stock and displays the delivery methods of the sellers that offer the best conditions. To learn more about the White Label Sellers selection algorithm, read our [article](https://help.vtex.com/en/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) on the subject.

End customers do not choose or acknowledge the existence of White Label Sellers at any point in the process. In this logic, the consumers have a relationship with the brand (main account) and not with the physical stores (franchise accounts).

<div class="alert alert-info">
<p>Although all franchise accounts operate as White Label Sellers of the main account, these concepts do not mean the same thing. The franchise account is a type of account, while being White Label is a property of the seller.
<ul>
<li><strong>Account</strong>: can be a franchise account or a regular account.</li>
<li><strong>Seller</strong>: can be of White Label type or non-White Label type.</li>
</ul>
As these concepts are independent, it is <strong>eventually</strong> possible that a franchise account operates as a non-White Label Seller of a marketplace other than the main account.</p>
</div>

## Franchise account configuration

You can access and configure the [Logistics](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/7k4SWtm3EIvLQ3aGXWC07), [Order management](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa), [Prices](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP),[Payments](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) and [Promotions & Taxes](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) modules directly in the Admin of each of the franchise accounts or using [VTEX APIs](https://developers.vtex.com/vtex-rest-api/reference/get-to-know-vtex-apis).

To access the Admin of each franchise account, enter the URL `{{franchiseaccountname}}.myvtex.com/admin`, replacing the `{{franchiseaccountname}}` with the name of the franchise account you wish to manage.

There are several possible configurations for pricing and payment methods related to franchise accounts on VTEX, as described below. You can choose the form of use that best suits your business.

### Prices

#### Using the prices of the main account

In order for the franchise account to use the prices configured in the main account, it is necessary to select the option **Inherit prices from parent account** in the Settings of the **Prices** module of the franchise account, as described in [this article](https://help.vtex.com/en/tutorial/price-configuration--3hbBtCzNUBrj8GaWgCtSWN).

#### Configuring prices specific to the franchise account

To configure specific prices for the franchise account, you must deselect the option **Inherit prices from parent account** in the Settings of the **Prices** module of the franchise account, as described in [this article](https://help.vtex.com/en/tutorial/price-configuration--3hbBtCzNUBrj8GaWgCtSWN#price-general-settings). In addition, it is necessary to configure the desired prices in the [Prices module](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) or via the [Pricing API](https://developers.vtex.com/vtex-rest-api/reference/pricing-api-overview).

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

VTEX offers split payment solutions that can make the distribution of receivables to sellers automatic. For more information, please refer to the article about [Split payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx).

<div class="alert alert-warning">
<p>If you want to implement VTEX Sales App in your physical stores, we do not recommend setting up specific payment methods for franchise accounts. Ideally, franchise accounts should use the payment methods of the main account to avoid payment conflicts.</p>
</div>

## Request the creation of a franchise account

To open a franchise account, contact our Growth Operations team through [*Support*](https://help.vtex.com/en/support) by selecting **Commercial** and `Create a white label environment`.

The additional cost for the franchise account is specified in your contract. If not, please mention it in your request so that we can add an amendment to your contract.

You must fill in the fields with the following information:

- Master User email
- Name of the sellers: Main VTEX account + suffix

If the number of accounts is greater than 10, please include them in an attached table.

## Learn more

-	[Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4)
-	[Choosing between standard account, franchise account or Seller Portal](https://help.vtex.com/en/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78)

