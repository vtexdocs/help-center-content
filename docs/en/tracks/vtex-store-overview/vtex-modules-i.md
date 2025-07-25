---
title: 'VTEX modules I'
id: 75MX4aorniD0BYAB8Nwbo7
status: PUBLISHED
createdAt: 2024-01-17T19:53:53.326Z
updatedAt: 2025-01-13T14:57:00.646Z
publishedAt: 2025-01-13T14:57:00.646Z
firstPublishedAt: 2024-02-22T14:07:05.427Z
contentType: trackArticle
productTeam: Others
slugEN: vtex-modules-i
locale: en
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: vtex-store-overview
---

The VTEX platform is structured in modules for each part of the store's operation. This article provides an overview and describes the main settings of the following modules:

- [Catalog](#catalog)
- [Prices](#prices)
- [Promotions](#promotions)
- [Logistics](#logistics)

<div class="alert alert-info">
The <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ">VTEX modules II</a> article describes the <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#payments">Payments</a>, <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#orders">Orders</a>, and <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/3MYcZaojb5HSUg6ufm6GxQ#checkout">Checkout</a> modules.
</div>

## Catalog

[Catalog](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) is the VTEX module where merchants configure their products to make them available in the store. The catalog structure defines the customers' experience when navigating the product categories in the store. Check out the [Catalog](https://developers.vtex.com/docs/guides/catalog-overview) guide for an [overview](/en/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe) of the [Catalog API](https://developers.vtex.com/docs/guides/catalog-overview) for developers.

### Before you begin with Catalog

There are no prior settings to make before configuring the Catalog, but the following should be noted:

- __Customer navigation on the site__: You need to plan how you want to arrange your [category tree](#category-tree) and know in advance what browsing experience you want to offer to customers in the category hierarchy.
- __Making products available to customers__: To [make a product available in the store](/en/faq/why-is-the-product-not-visible-on-the-website--frequentlyAskedQuestions_382), after the Catalog settings, you must add a [price](#prices) and shipping [logistics](#logistics) to the SKU. Also, the store's CMS must be correctly configured.

### Catalog architecture

The Catalog architecture has some key concepts: category, brand, product, SKU (_Stock Keeping Unit_) and specification. The image below shows the relation between these concepts:

![arquitetura-catalogo-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-store-overview/vtex-modules-i_1.png)

The store catalog must be created following the steps below:

1. Create a [category tree](#category-tree).
2. Add [brands](#brands).
3. Add [specifications](#specifications).
4. Import [produts](#products).
5. Import [SKUs](#skus).

The following table shows the store's main Catalog settings based on their creation order:

| **Topic** | **Configuration via VTEX Admin** | **Configuration via API** |
| :--- | :--- | :--- |
| 1. [Category tree](/en/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categories) | [Add a category](/en/tutorial/registering-a-category--tutorials_206) | - [Categories](https://developers.vtex.com/docs/guides/categories) <br> - [Create Category](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category) |
| 2. [Brands](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) | [Add brands](/en/tutorial/registering-brands--tutorials_1414) | - [Brands](https://developers.vtex.com/docs/guides/brands) <br> - [Create Brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/brand) |
| 3.1. [Product specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#product-specification) | [Add product specifications or fields](/en/tutorial/adding-specifications-or-product-fields--tutorials_106) | - [Product specifications](https://developers.vtex.com/docs/guides/product-specifications) <br> - [Create Specification](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification) |
| 3.2. [SKU specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#sku-specifications) | [Add SKU specifications or fields](/en/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119) | - [SKU specifications](/en/tutorial/adding-sku-specifications-or-fields--tutorials_119) <br> - [Create Specification](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification) |
| 4. [Products](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) | [Add products](/en/tutorial/cadastrando-produtos--tutorials_2567) | - [Products](/en/tutorial/adding-products--tutorials_2567) <br> - [Create Product with Category and Brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product) |
| 5. [SKUs](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) | [Complete the SKU fields](/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY) | - [SKUs](https://developers.vtex.com/docs/guides/skus) <br> - [Create SKU](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit) |

<br>

<div class="alert alert-warning">
To learn how to import products from an ERP (Enterprise Resource Planning) or PIM (Product Information Manager) system to the VTEX platform, read the <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu">Backend integrations</a> article.
</div>

#### Category tree

The [category tree](/en/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categories) defines the Catalog's basic structure. The categories act as hierarchical levels for classifying products, which simplify the customer's search and keep the store's catalog organized.

We recommend creating a three-level hierarchy, including [Departaments](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf#department), [Categories](/en/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe#categories) and [Subcategorias](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf#subcategory). However, some stores may benefit from a two-level structure with Departments and Categories. This depends on the operation's complexity and the types of products offered.

__Example__: Department `Women`, Category `Shirts and T-shirts`, and Sub-category `T-shirts`.

Before importing the store catalog to VTEX, we recommend that you start working on the category tree by creating a table such as the one below. This allows you to better view the tree's organization and the display of specifications.

![catalog_arquitecture_table_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-store-overview/vtex-modules-i_2.png)

<div class="alert alert-info">
For more information on how to import back-office specifications, read the <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu">Backend integrations</a> article.
</div>

#### Brands

[Brands](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) generally refer to the company that manufactures or resells the products. On VTEX, brands must be created independently, and when creating a product, it must be associated with a brand already listed in the store.

#### Specifications

[Specifications](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) are additional properties that can be added to the products and SKUs, such as size, color, voltage, or material. In other words, there are [product specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#product-specification) and [SKU specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#sku-specifications).

In the VTEX __Catalog__, specifications are created as follows:

1. __Specification groups__: These are specification field groups. They must be linked to categories. Usually, only one group is created at the root level, and all the specification fields are associated with this group.
2. __Specification fields__: Fields with additional product and SKU information. They must be linked to categories and specification groups.
3. __Specification values__: Values you can choose to add to the specification fields.

The specifications follow the Catalog hierarchy, so when one of these groups is created in a Department or Category, it follows the levels below.

#### Products

[Products](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) is the level of catalog organization that is located in the hierarchy below Categories and above SKUs. As the product is above the SKU in the catalog hierarchy, we can understand it as a generic definition of the items sold in your store. A product must have at least one SKU associated with it.

#### SKUs

[SKU](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) (_Stock Keeping Unit_) is a product variation and represents the physical unit in stock that can be purchased by the customer. The SKU is the last level in the catalog organization, and in order to be active, the SKU must have an image and specifications.

### Optional Catalog settings

The following table shows optional Catalog settings on VTEX:

| **Feature** | **Description** | **Learn more** |
| :---: | :--- | :--- |
| Collections | A collection is a combination of two or more products that may or may not share specific characteristics. <br> Collections can be created to associate products based on different criteria, such as commemorative dates, launches, or best-selling products. | __Help Center__ <br> - [Collections - Concept definition](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/4hN41yU8IPeb8HKmmaXoca) <br> - [Creating Collections (Beta)](/en/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye)  <br> __Developer Portal__  <br> - [Create Collection](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection/) <br> - [Get All Inactive Collections](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/collection/inactive) <br> - [Get All Collections](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search) <br> - [Get Collections by search terms](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search/-searchTerms-) <br> - [Import File Example](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/collection/stockkeepingunit/importfileexample) <br> - [Add products to Collection by imported file](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection/-collectionId-/stockkeepingunit/importinsert) |
| Attachments | An attachment is an optional and free product customization used to add information to a SKU. | __Help Center__ <br> - [Adding an attachment](/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU) <br> - [How to create a subscription attachment](/en/tutorial/how-to-create-a-subscription-attachment--2bUuKyPflA8cOGLv8OvaKK) <br> - [What is an Attachment?](/en/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm)  <br> __Developer Portal__ <br> - [Catalog API - Attachment](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/attachment/-attachmentid-) <br> - [Catalog API - SKU attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuattachment) |
| Assembly Options | Assembly Options are a type of attachment for complex cases, such as product customization, in which you can manage different combinations of products, quantity, additional items, costs, and inventory. Then, you will be able to display these options on the product page. | __Developer Portal__ <br> - [Assembly Options](/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) <br> - [Assembly Option App](https://developers.vtex.com/docs/guides/assembly-options-app) |
| Services | Service with extra cost, offered optionally with a product. It is used to add an additional service to an SKU, such as gift wrapping, customization, or special warranty agreements. | __Help Center__ <br> - [What is a Service?](/en/tutorial/what-is-a-service--46Ha8CEEQoC6Y40i6akG0y) <br> - [Service Management](/en/tutorial/service-management--3sGqSI93t878ETAWzCZ0E2) <br> - [Services Import](/en/tutorial/services-import--2LRgMnGbX0af7krrs6tXy3) <br> - [Services Report](/en/tutorial/services-report--7djPWfxtf9qb6hFTOgKDE8) <br> - [Services scheduling](/en/tutorial/services-scheduling--78HPYBxDCmpCfa8i40zo7R)  <br> __Developer Portal__ <br> - [Catalog API - SKU service](https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-) <br> - [Catalog API - SKU service attachment](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetypeattachment) <br> - [Catalog API - SKU service type](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetype) <br> - [Catalog API - SKU service value](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicevalue) |
| Kits | A kit is a set of SKUs sold together, i.e., an SKU consisting of one or more SKUs. | __Help Center__ <br> - [What is a kit?](/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28) <br> - [Kit registration](/en/tutorial/kit-registration--tutorials_215) <br> __Developer Portal__ <br> - [Catalog API - SKU Kit](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-kit) |

## Prices

[Prices](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) is the VTEX module for creating, editing, and storing price details for the store's SKUs. For a product to be sold, the customer needs to know the price of each item displayed in the store. The pricing module has features that allow you to use different pricing strategies in your business.

###  Before you begin with Prices

Before configuring the store's prices, you need to create a [catalog](#catalog) with your products. The store catalog must contain [categories](/en/tutorial/registering-a-category--tutorials_206), [brands](/en/tutorial/registering-brands--tutorials_1414), [products](/en/tutorial/adding-products--tutorials_2567) and [SKUs](/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY) already added and active. If the catalog was created via [ntegration with an ERP system](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu#erp-integration), you should check the information before proceeding.

### How the Prices module works

It is important to familiarize yourself with the main terms related to the module. These terms are outlined in the table below:

| **Term** | **Definition** |
| :---: | :--- |
| Prices | Information on the sales values of the store's SKUs. |
| [Price tables](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) | Set of SKU prices that can be applied to a given context, such as a [trade policy](/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV). These tables contain the price information displayed on the store's storefront. |
| Cost price | Price paid by the store when purchasing the SKU. |
| Markup | The store's desired profit margin from selling the SKU. |
| [Base price](hhttps://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) | Amount calculated by combining the __cost price__ and the __markup__. This is the SKU's reference price for all price tables. |
| [List price](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#list-price) | Suggested selling price for an SKU. This price will be displayed on the product page as the __From__ price, while the base price will be displayed as the __To__ price. |
| [Price rule](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/2rBirbpB7wLnei4dQ9KGMW) | Changes the SKU price on a specific price table without changing the base price on other tables. To do so, you need to create a price rule and associate it with the desired table. |
| [Fixed price](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) | Price that overrides all other price settings in a price table. |
| [Price rounding](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1tUIUvF6BUkDgMsknGaMkF) | A pricing strategy based on price rounding. This method aims to influence the consumer's purchasing decision by displaying prices in a more user-friendly and intuitive format. |
| [Price variation limiter](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/7JZhLmI3mjBVu0RMOueoy3) | Sets the maximum and minimum price variations for an item. This feature ensures that SKU prices are not changed to undesirable values. |

For more information on pricing architecture, read the [Pricing System Architecture](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx) article.

### Creating price tables

The Pricing module's architecture is structured based on three key concepts:

- Prices
- Price tables
- Contexts for applying price tables

Prices are the sales value information for your SKUs. These prices are stored in price tables, which can be applied to different contexts.

The image below illustrates the relationship between prices, the price table, and the context in which they will be applied:

![Conceito de Preços-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-store-overview/vtex-modules-i_3.png)

You can create price tables for your SKUs in three ways:

- [Via Admin VTEX](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/2WQ3pVYfQpXkJnHr7VTFBv#admin)
- [Via spreadsheet](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- [Via API](https://developers.vtex.com/docs/api-reference/pricing-api)

Prices can be scheduled for special events, as described in the [Scheduling prices](/en/tutorial/agendar-preco--4vVha6TGzYkguWuMOqCcCk) article.

### Relationship between price tables and trade policies

There is a difference between price tables created for [trade policies](/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) and price tables created for other contexts.

Price tables not associated with trade policies can be used in contexts such as __promotions__ and __customer clusters__. Tables created for trade policies can only be associated with the trade policy itself. Thus, the price table associated with a trade policy shows the SKU price specific to that policy and cannot be associated with other contexts.

<div class="alert alert-warning">
The concepts of <b>price table</b> and <a href="LINK">trade policy</a> are different. Trade policy is the context with which a price list is associated.
</div>

When setting up a trade policy, you must [specify the currency that will be used in the store](/en/tutorial/creating-a-trade-policy--563tbcL0TYKEKeOY4IAgAE). Creating different trade policies associated with a different currency allows the store to display prices in different currencies to customers. 

## Promotions

On VTEX, the merchant can create a set of rules to indicate if customers can have discounts applied to certain shopping contexts. [Promotions](/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N) is the VTEX module for creating, editing, and applying discounts to customers' shopping carts.

### Before you begin with Promotions

Before configuring your store's promotions, you must create a [Catalog](/en/tutorial/catalog-overview--77M8ItLhDXs6aBdQTqToVe) with your products and enter the [prices](/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) of the store's SKUs.

### How the Promotions module works

In this context, it is important to be familiar with the main terms related to the module. These terms are outlined in the table below:

| **Term** | **Definition** |
| :---: | :--- |
| Promotion | Discount given to customers, which can be linked to one or more products in the cart, to shipping or a gift. |
| Coupon | Promotional code consisting of a sequence of letters and numbers. Coupons are associated with promotions applied to the cart total amount. Thus, by entering a valid coupon at checkout, the customer can get discounts on the order total amount. |
| Campaign audience | Campaign audience is a feature that allows you to define the [target audience](/en/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m#target-audience) or a promotion. It consists of setting up criteria to segment customers from which the VTEX platform automatically validates whether customers are eligible for a particular campaign audience and, consequently, for the associated [campaign promotions](/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume). |
| Campaign promotion | A campaign promotion is always linked to a campaign audience, i.e., a specific target audience. This type of promotion will only be applied to the target audience of the campaign. |

### Creating promotions

On VTEX, merchants can create rules that determine the application of discounts based on the purchase context. These rules take into account various parameters, including product lists, customer lists, postal code ranges, minimum value of items in the cart, and others.

Discounts can be of two main types:

- __Nominal__: Discount of the gross amount, such as $20.
- __Percentage__: Discount of a percentage value, such as 10% of the total amount of the cart.

There are six types of promotion, each related to a different scenario:

| **Promotion type** | **Definition** |
| :---: | :--- |
| [Regular Promotion](/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) | Promotion that allows the store to offer flexible discounts, combining multiple conditions, restrictions, and benefits. |
| [Buy Together](/en/tutorial/buy-together--tutorials_323) | Promotion used to give a discount on products added together in the cart. The discount can be applied to both products. There's also the option to only apply the discount if a specific quantity of one of the product is added to the cart. |
| [More for Less](/en/tutorial/creating-a-more-for-less-promotion--tutorials_325) | Promotion used to give a discount when the customer adds multiple units of the same product to the cart. |
| [Progressive Discount](/en/tutorial/progressive-discount--tutorials_324) | Promotion used when you want to offer a percentage discount for a specific number of products in the cart. |
| [Buy One Get One](/en/tutorial/buy-one-get-one--tutorials_322) | Promotion used to provide free shipping or a giveaway when a specific product is purchased. |
| [Campaign Promotion](/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume) | A campaign promotion is always linked to a campaign audience, i.e., a specific target audience. |

For all promotions, you can define their duration, restrictions, and limitations on usage. Promotions can also be scheduled for special events, as described in the [Scheduling features for special events](/en/tutorial/agendamento-para-eventos-especiais--2nd50tPWdKK4waXRZLg0JI#scheduling-promotions) article.

For more information on how promotions can be applied, read the [Promotion examples](/en/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD) article.

### Creating coupons

You can create discount coupons through the [VTEX Admin](/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU) ou via [API](https://developers.vtex.com/docs/guides/creating-and-managing-coupons-with-promotions-api). A coupon must be linked to at least one promotion to be applicable. 

<div class="alert alert-warning">
There is a maximum number of active coupons. We strongly recommend reusing coupons, as a large number of coupons can compromise the performance of the Promotions module.
</div>

### Creating campaign promotions

Creating campaign promotions [campaign audience](/en/tutorial/creating-a-campaign-audience--6cnuDZJzIkIeocewAQQK4K) to set the promotion's target audience. You can then choose eligible customer segments for the promotion. These segments act as a trigger based on criteria defined by the merchant.

Once the campaign audience has been created, it needs to be linked to a [Regular Promotion](/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), thus creating a campaign promotion. This type of promotion encompasses all the possibilities available in the [Regular Promotion](hhttps://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) and a few more options:

- Specific target audience.
- Free shipping for all available shipping options.
- Promotional price table.
- Giveaways delivered by sellers.

### Highlighting promotions on the product page

You can highlight a promotion on the product page (PDP). To do so, follow the steps below:

1. [Create a promotion](/en/tutorial/lista-de-promocoes-beta--4yB7nNdliiFxBTXE19GCIi#creating-promotions) of any type, except for the Buy Together promotion.
2. Activate the __Promotion is highlighted__ field in the promotion form.
3. Save the promotion.
4. In the [Legacy CMS](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), enter the promotion display control in the template: `<vtex.cmc:discountHightLight/>`. 

### Syncing promotion dates, banners, and digital assets

Ensure that you sync your promotion timeline with the delivery dates on your banners and digital assets to ensure perfect coordination. To do so, you should check the dates on both promotions and banners. This strategic alignment ensures that promotional campaigns are supported by relevant visual materials, maximizing their impact and effectiveness.

## Logistics

On VTEX, the [Logistics](/en/tracks/logistics-101--13TFDwDttPl9ki9OXQhyjx/6Y8C1JuPtO5E61Ew91tq1a) module is responsible for the store's [logistics and order fulfillment](/en/tutorial/fulfillment-logistics-vtex--53udnvI5eBy8DKo8FOjMoP). It includes planning, transportation, storage, and shipping orders to customers.

### Before you begin with Logistics

To configure the logistics settings, you must have completed the following steps:

- __Creating catalog__: As the order fulfillment is related to storing items, the store's products and SKUs must be listed in the [Catalog](#catalog).
- __Configuring trade policies__: [Trade policies](/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) shape the customer experience on a store's website. They encompass sales conditions for each audience, the products offered, pricing, promotions, and shipping methods.

Besides, if the business model includes international stores and [cross-border](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/5qgXy9Erm7FDP3UB5Ox8Bs) sales, you should first consider the [store's architectural](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#store-architecture) model.

### Logistics required settings

The set of essential logistics settings for a VTEX store is called [Shipping Strategy](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3) and consists of three main concepts: shipping policy, warehouse, and loading dock.

- __[Shipping policy](#shipping-policy)__: set of rules that define the order's shipping options and conditions.
- __[Loading dock](#loading-dock)__: distribution location for the items to be sold.
- __[Warehouse](#warehouse)__: physical storage space for the products to be sold.

The image below shows how these concepts relate to each other when selling a product:

![shipping_strategy_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-store-overview/vtex-modules-i_4.png)

The following table shows the store's main logistics settings on VTEX:

<div class="alert alert-INFO">
We recommend configuring the shipping policy first, followed by the loading dock, and then the warehouse.
</div>

| **Topic** | **Configuration via VTEX Admin** | **Configuration via API** |
| :---: | :--- | :--- |
| [Shipping policy](#shipping-policy) | [Shipping Policy](/en/tutorial/shipping-policy--tutorials_140) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| [Loading dock](#loading-dock) | [Managing Loading Docks](/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| [Warehouse](#warehouse) | [Managing Warehouses](/en/tutorial/managing-warehouses--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |
| [Inventory](#inventory-management) | [Inventory Management](/en/tutorial/managing-stock-items--tutorials_139) | [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-) |

#### Shipping policy

[Shipping policy](/en/tutorial/shipping-policy--tutorials_140) is a set of rules that define the shipping options and conditions that will be displayed to customers at checkout. These conditions include carriers, delivery times, shipping costs, etc. The shipping policy is linked to the warehouse by the loading dock.

The [carrier](/en/tutorial/carries-on-vtex--7u9duMD5UQa2QQwukAWMcE) delivering the order is defined via the shipping policy. First, carriers are added to the [shipping rate template](/en/tutorial/shipping-rate-template--tutorials_127), then the shipping rate template is associated when a shipping policy is created.

#### Loading dock

The [loading dock](/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) is where items are distributed and shipped from and is the intermediate step between the warehouse and the carriers. The loading dock integrates the warehouse, trade policy, and shipping policy. Some use cases are:

- Different distribution centers for a single warehouse.
- Loading dock as a distribution center.
- Loading dock and warehouse correspond to the same physical space.

For certain products, you may not need a physical distribution center. Even so, configuring the loading dock is essential for the proper functioning of the VTEX platform's operations.

#### Warehouse

The logistics route starts with the [warehouse](/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb). It corresponds to the physical storage space for the products the store sells. Once the items sold are picked from the warehouse, they are sent to the loading dock.

### Inventory management

Store [inventory](/en/tutorial/managing-stock-items--tutorials_139) corresponds to the stored items available for sale. Warehouse is the identification of the physical location of storage location, while inventory is the set of SKUs in stock that are available for sale.

<div class="alert alert-danger">
On VTEX, the store must manage inventory updates after selling items. Thus, after a sale, the merchant ensures proper control of the remaining items and invoice operations with ERP. Information on inventory import via the back office can be found in the <a href="https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu">Backend integrations</a> article.
</div>

### Lead time

In the VTEX Admin, under __Catalog > Inventory > Inventory Management__, existe you can configure the [Lead time](/en/tutorial/lead-time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B), an optional setting that allows you to assign a shipping time at SKU level.  Configuring the lead time means adding a period of time to the order shipping [calculation](#order-shipping-calculation) which is strategic in some contexts.

The [main use cases](/en/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B#main-use-cases), include products from external suppliers, _dropshipping_ scenarios, and the sale of custom items. Having the option to configure the lead time means having more flexibility to set deadlines for handling and shipping products by third parties.

### Order shipping calculation

The VTEX platform considers the following settings to [calculate the order shipping time](/en/tutorial/how-shipping-calculation-works--tutorials_116):

![Shipping Calculation_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-store-overview/vtex-modules-i_5.png)

- [Lead time](/en/tutorial/lead-time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B): Configurable amount of time for an SKU in stock. This configuration is optional and is set to zero days by default.
- [Warehouse time](/en/tutorial/managing-warehouses--tutorials_137): time it takes for an SKU to move from a warehouse to a [loading dock](/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj). This configuration is required, but you can set the time to zero.
- [Loading dock time](/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW): time it takes for an SKU to leave the dock and be shipped to the customer. This configuration is required, but you can set the time to zero.
- [Shipping policy](/en/tutorial/shipping-policy--tutorials_140): groups together the shipping rules and conditions displayed to customers at checkout, including carriers, shipping costs, carrier business hours, delivery windows, and delivery capacity.

The [shipping simulator](/en/tutorial/shipping-simulation--tutorials_144) allows merchants to simulate and analyze the delivery options available for an order in a given location. The simulation checks the viability and shipping conditions of the order, such as item availability, shipping methods, costs, and shipping time.

### Logistics optional settings

To serve different business models, the VTEX platform offers many optional settings, as shown in the table below:

| **Feature** | **Description** |
| :---: | :--- |
| Pickup points | [Pickup points](/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) are physical locations set up by the store for customers to pick up their orders. Setting up pickup points is interesting for omnichannel operations, especially when there are many physical stores, as each can be used as a pickup option for customers, increasing the flexibility of your logistics network. |
| Holidays | [Holidays](/en/tutorial/registering-holidays--2ItOthSEAoyAmcwsuiO6Yk) is a feature that allows the store to set up days that are not valid for shipping, which will be considered when calculating the order's shipping time. |
| Reservation | [Reservation](/en/tutorial/how-does-reservation-work--tutorials_92) is a solution that prevents the same item from being sold more than once. When the customer only adds the product to the cart, this does not generate a reservation; your priority over the item only occurs once the order has been placed. |
| Delivery capacity | [Delivery capacity](/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi#delivery-capacity) is the limit of shipments that can be made by the store in a given period. Being able to delimit the number of items or orders that can be shipped in each shipping window means having more control over order handling and increasing the chances of fulfilling the delivery agreement made with the customer at checkout. |
| Geolocation | [Geolocation](/en/tutorial/registering-geolocation--tutorials_138) involves adding delivery locations based on the latitude and longitude of addresses. This feature is often used for addresses in rural and industrial areas, which are divided into lots or risk areas, and when it's necessary to remove certain delivery locations within a region. |

For more information on logistics concepts on VTEX, read the [Logistics Glossary](/en/tutorial/logistics-glossary--16DSSiXn548rsidi0A8Hby) article. For developer content on the [Logistics API](https://developers.vtex.com/docs/api-reference/logistics-api#overview), read the  [Fulfillment and Logistics](https://developers.vtex.com/docs/guides/fulfillment) article.
