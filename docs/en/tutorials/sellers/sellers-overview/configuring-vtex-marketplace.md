---
title: 'Configuring a VTEX marketplace'
id: 7splyp5MqIyt2Iyz5jsNzb
status: PUBLISHED
createdAt: 2022-01-26T21:27:16.808Z
updatedAt: 2024-05-23T15:18:17.648Z
publishedAt: 2024-05-23T15:18:17.648Z
firstPublishedAt: 2022-01-26T23:06:58.565Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: configuring-vtex-marketplace
legacySlug: setting-up-vtex-marketplace
locale: en
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

The architecture of a VTEX store makes it possible to offer and sell products in other stores, whether they are VTEX or not. By selling products from other sellers in its environment, a VTEX store becomes a VTEX marketplace. A marketplace is a type of collaborative commerce, a model that offers advantages and benefits for the parties involved. You can find more information about partners and growth opportunities in the VTEX ecosystem in [Marketplace strategies at VTEX](/en/docs/tutorials/marketplace-strategies-at-vtex). 

To be a marketplace, you need to configure the following settings on the VTEX platform:

1. [Define the trade policy](#defining-the-trade-policy)  
2. [Integrate the seller](#integrating-the-seller)   
3. [Map the Catalog architecture](#mapping-the-catalog-architecture)  
4. [Configure the seller selection at checkout](#configuring-seller-selection-on-the-storefront-and-at-checkout)  
5. [Configure the storefront](#configuring-the-storefront)  
6. [Configure payments](#configuring-payments)  

## Defining the trade policy

The [trade policy](/en/docs/tutorials/how-trade-policies-work) is what determines the product assortment, prices, payments, promotions, customer segmentation and shipping strategy of your VTEX store in a sales channel. You need to [create a new trade policy](/en/docs/tutorials/creating-a-trade-policy) whenever one of these settings is different for the sellers in your window display. 

If you want the same settings to apply to your sales channels, you don’t need to create a new trade policy because the same trade policy can be used for different sales channels.

If you want to create more trade policies, you can [request additional trade policies](/en/docs/tutorials/requesting-an-additional-trade-policy). There are no charges for requesting additional trade policies to integrate VTEX stores with native connectors, certified connectors or other VTEX stores.

## Integrating the seller

The sellers are the stores that own the product and are responsible for fulfilling the orders placed in a marketplace. To be a marketplace on VTEX, you need to add the sellers you want. There are two ways to integrate a seller:

- **VTEX seller:** store hosted on the VTEX platform.  
- **External seller:** store hosted on another ecommerce platform or not yet hosted on any platform.  

To add sellers to your marketplace from the VTEX Admin, follow the instructions in [Adding a seller](/en/tutorial/configurando-seller/). You can also do this using API integration. To use the API, follow the instructions in the [External Seller Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide). If the seller you want to add does not have a VTEX account or is not hosted on any platform, we suggest adding it via the [Seller Portal](#seller-portal)

### Seller Portal

The [Seller Portal](/en/docs/tutorials/how-to-set-up-your-store-on-seller-portal) is a component of the VTEX platform that allows sellers to connect and sell their products on marketplaces. Marketplaces hosted on VTEX can invite sellers who have a VTEX account to connect through the Seller Portal. You can also invite sellers hosted on other platforms or those not yet hosted on any platform to create an account on the Seller Portal, which is quick and easy.

To activate the Seller Portal for your sellers, you have to request this feature by contacting your VTEX account CSM.

Once you have requested the Seller Portal, follow the instructions in [Inviting sellers](/en/docs/tutorials/marketplace-invited-sellers) to add sellers to a Seller Portal account.

## Mapping the Catalog architecture

The [catalog](/en/docs/tracks/catalog-architecture) of sellers who sell products in your marketplace has a different structure than yours, whether they are VTEX or external sellers. There are two instances when you need to map the catalogs to make them compatible: 

- When the seller sends products for the first time to a VTEX marketplace.  
- When there are seller products that have unmapped information.  

This allows adding the products sent by the seller to the catalog of the VTEX marketplace with the equivalent information. 

To complete this step, follow the instructions in [Mapping categories, brands and specifications for a marketplace](/en/tutorial/mapeando-categorias-e-marcas-para-marketplace/). 

## Configuring the seller selection on the storefront and at checkout

Different sellers can be displayed during the shopping experience in your marketplace, depending on how certain features are configured. The sellers displayed in the cart and storefront vary according to the [visibility](/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label) set for each and the [location](/en/docs/tutorials/setting-up-price-and-availability-of-skus-by-region) of the consumer. The [Seller selection algorithm](/en/docs/tutorials/white-label-sellers-selection), on the other hand, defines which sellers are displayed at checkout as fulfillment options.  

### Visibility

You can define whether the seller’s store will be visible in your marketplace shopping experience so that consumers can identify information about the seller from which they are buying. Sellers can be configured as:

- **Identifiable seller:** the seller is visible on your marketplace storefront and the consumer can choose them from the buy box during the shopping experience.  
- **Unidentifiable seller (white label):** [white label sellers](/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label) are franchise accounts on VTEX. They are not displayed in the storefront during the shopping experience and are automatically selected by the checkout system to fulfill the order.  

If you would like to add a white label seller, this model must be covered by your contract with VTEX. Once the VTEX business representative assigned to your marketplace has adjusted the contract, submit a request to add a franchise account by following the instructions in [Requesting the creation of a franchise account](/en/docs/tutorials/what-is-a-franchise-account#request-the-creation-of-a-franchise-account). Every franchise account is created as a white label seller. It is not possible to change the seller type after its creation. Learn more in [Adding sellers](/en/docs/tutorials/adding-a-seller). 

### Location

The location consumers are in when they access your marketplace affects their shopping experience. The different prices and products that appear in the storefront depend on the sellers available for that region. 

A marketplace can obtain the user’s location information in the storefront and during checkout by, for example, capturing coordinates or by getting the zip code entered by the customer. To do this, you need to use the _Region_ feature in [VTEX Session](/en/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ), which is your ecommerce session management system. The _Region_ feature allows a store to display different prices and availability depending on the regions served by your sellers. To configure sellers by location in _Region_, follow the instructions in [Setting up price and availability of SKUs by Region](/en/docs/tutorials/setting-up-price-and-availability-of-skus-by-region).

Even when VTEX Session does not have access to the consumer’s location, you still need to target an assortment of seller products in the shopping experience. In this scenario, the seller selection algorithm indicates [comprehensive sellers](/en/docs/tutorials/comprehensive-seller) that are able to deliver orders in all regions served by your marketplace.

> ℹ️ The Region feature is only adapted for stores using VTEX IO, and it is not valid for the Legacy CMS Portal.

## Configuring the storefront

You need to configure your storefront to use seller information during the shopping experience. This can be done through the Legacy CMS Portal and in stores using [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs).

For stores that still use the Legacy CMS Portal, configure the following controls in your ecommerce templates:

<table>
  <tr>
   <td>**Control**
   </td>
   <td>**Description**
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:sellerDescription />
   </td>
   <td>**SellerDescription:** name and image added for the seller of a given product.
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:SellerOptions />
   </td>
   <td>**SellerOptions:** displays the sellers that offer the product, the product’s price on each seller and installment options (shows up to three different prices).
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:sellerInfo />
   </td>
   <td>**SellerInfo:** displays the seller information. It should be used on the seller details page, in the seller-info folder.
   </td>
  </tr>
</table>

For stores using [VTEX IO](https://vtex.com/us-en/store-framework/), check the [Seller Selector](https://github.com/vtex-apps/seller-selector) app, which is used to indicate the number of sellers your marketplace has for each product. This way, buyers can compare the prices of each seller and add the desired product to their cart.

Stores using [VTEX IO](https://vtex.com/us-en/store-framework/) can create an [attachment](/en/docs/tutorials/what-is-an-attachment) to enable the [Assembly Options](/en/docs/tutorials/assembly-options) feature. This feature is suitable for sellers who manage complex scenarios, such as product customization, where there are different combinations of products, quantities, additional items, costs, and inventory. If the Assembly Option is installed in the seller's account, it will be displayed at checkout. For it to be displayed on the product page, it must be added to the marketplace account.

## Configuring payments

There are different payment scenarios on VTEX marketplaces, each having its own settings. Learn more about the payment split options and the required configuration for sellers or the marketplace to process payments in [Payments in VTEX Marketplace](/en/docs/tutorials/payments-in-vtex-marketplaces). 

_____________

Now that you have configured the VTEX platform to become a marketplace, you need to complete the [Actions for VTEX marketplace operations](/en/docs/tutorials/actions-for-vtex-marketplace-operation).

## Learn more

- [Approving received offers](/en/tutorial/sugerindo-e-aprovando-skus/)
- [Shared information between a marketplace and a seller on VTEX](/en/docs/tutorials/shared-information-between-a-marketplace-and-a-seller-on-vtex)
