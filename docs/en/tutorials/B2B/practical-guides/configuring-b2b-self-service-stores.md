---
title: 'Configuring B2B self-service stores'
id: 4576nMaRKk4madDZ7liiXS
status: PUBLISHED
createdAt: 2021-03-30T13:11:03.141Z
updatedAt: 2022-10-25T13:15:21.263Z
publishedAt: 2022-10-25T13:15:21.263Z
firstPublishedAt: 2021-03-30T19:15:32.844Z
contentType: tutorial
productTeam: B2B
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: configuring-b2b-self-service-stores
legacySlug: configuring-b2b-self-service-stores
locale: en
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

The self-service scenario is the most flexible in B2B. It allows the customer to go through the purchase flow without interacting with sales reps, which reduces friction. For this reason, the self-service process is similar to buying in B2C. 

This scenario offers advantages for users since they can explore the catalog, inventory, and prices freely, according to their user roles. In addition, they can view information and place orders at any time, without intermediaries.

> ℹ️ For B2C clients who want to set up a B2B scenario, please contact [our Support](https://support.vtex.com/hc/pt-br/requests).

One of the first decisions you must make when setting a B2B store is whether it will be open or closed to the public.

If the __store is open to the public__, any user can view all the products. This option is handy for those who want to make their website stand out and implement SEO strategies focused on ecommerce. 

The companies that choose this scenario are usually the manufacturers of a particular product since they already have product references and information — such as images and descriptions — for each item they produce.

In a __store closed to the public__, only allowed users can view the products. Companies that choose this option usually do not want to publicly display the items they sell. One of the main reasons for this is that some companies opt to create stores designed for a specific purpose, such as exclusive sales to employees.  

By default, __VTEX stores are open to the public__.  It also applies to B2B.  

However, you can change the default configuration and set your store as:

- [Closed to anonymous users](#fechada-a-usuarios-anonimos)
- [Public with restrictions](#publica-com-restricoes)

## Closed to anonymous users
Anonymous users are unauthenticated users who have no access to a particular store. 

Anonymous users are also internally called “unauthenticated” users because seeing the product catalog requires authentication.

To restrict catalog viewing to authenticated users only, you will need to [configure permissions to acess the store](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-configuring-a-b2b-environment "configure permissions to acess the store").

## Public with restrictions

Public stores with restrictions limit store access to users who are authenticated and meet specific predefined requirements. If the user does not fulfill both conditions, they will not view the product catalog.

To define the access criteria, please follow the steps below:

1. [Adding users](#cadastro-de-usuarios)
2. [Approving users](#aprovacao-de-usuarios)
3. [Configuring the product catalog](#configuracao-do-catalogo-de-produtos)
4. [Configuring the logistics strategy](#configuracao-da-estrategia-de-logistica)
5. [Configuring prices](#configuracao-de-precos)
6. [Configuring payment methods](#configuracao-de-meios-de-pagamento)

### Adding users

You can add users using a form, which you should create according to your needs.

It should require essential information about the user to help you assess whether they can browse the store considering factors such as those detailed below.

| Context               | Store operation                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sales channel        | This decision is usually made to strengthen a particular sales channel. For example, an industry can create a B2B ecommerce platform to serve its distributors, large resellers, and some large companies.                                                                                |
| Legal issues        | Some companies only sell their products to customers who act as resellers. This is common in cases where products have many technical specifications. In this case, the reseller needs to be familiar with the characteristics of the products. They can also act as a sales consultant and assist in installing the product.                                                                                                                                                          |
| Geographical location | Initially, stores can serve only certain regions to facilitate their operational and logistical control. |

In the B2B scenario, it is common to use basic information such as name, email, phone number, street name, and city. You can use a form to get this information. 

> ❗ The field used as a conditional rule in the trade policy **cannot be in this form** because user approval is the store's responsibility.

On VTEX, you can create forms through [Master Data](https://help.vtex.com/pt/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw "Master Data") — the store's database —, which stores information of the store's customer database and organizes the data received through forms.

To create a form, please follow the instructions below:

1. Create a data entity with all the information you want on the form. If you have questions, check out the article on [how to create a data entity in Master Data](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265?&utm_source=autocomplete "how to create a data entity in Master Data").

2. Create the form using the tutorial [Creating a form in Master Data](https://help.vtex.com/pt/tutorial/criando-formulario-no-master-data/ "Creating a form in Master Data").

So when a customer fills out the form, their data will be included in the Master Data customer table.

> ℹ️ You can choose to create a form with more features, such as ZIP code autofill, multiple tabs, or NAICS (North American Industry Classification System) code. If you choose this type of form, check out the [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-new-custom-page) technical documentation.

### Approving users
You can approve or add users in the [Master Data](https://help.vtex.com/pt/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw "Master Data"). Ecommerce managers are the ones responsible for approving customer access to store content. 

To approve customer access to the store, it is necessary to approve each of the customers who filled out the form. Customer approvals can be done in the Admin or via API.

### Configuring the product catalog

To determine which products each group of users will be able to view, you must configure your store’s trade policies. Each trade policy has its own catalog and pricing and logistics specifications. You can [create a new trade policy](https://help.vtex.com/pt/faq/como-contratar-nova-politica-comercial--frequentlyAskedQuestions_700 "create a new trade policy") specifically for this purpose or configure an existing one. 

When creating or configuring a trade policy for the B2B context, you’ll need to select the products that will be associated with it. On VTEX, you can associate SKUs individually through the Admin or in bulk using the [Catalog API](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview "Catalog API").

> ℹ️ We recommend configuring SKUs using the [Catalog API](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview) — association or creation in bulk or individually — for companies that already have a mature ecommerce operation and manage and maintain their own product catalog in ecommerce. This infrastructure allows you to import the entire catalog with all current configurations via [ERP integration](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide).

### Configuring the logistics strategy

Like the catalog, logistics must be configured in the trade policy. 

You have to associate the trade policy configured for the B2B scenario with the shipping strategies related to ecommerce logistics, including loading docks, warehouses and shipping/carrier strategies.

You can configure loading docks, warehouses and shipping strategies using the [Logistics API](https://developers.vtex.com/vtex-developer-docs/reference/logistics-api-overview "Logistics API") or in the [Admin](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx "Admin").

To configure it in the Admin, you must:

1. __Associate the B2B trade policy with a loading dock:__ fill in the field 'Shipping policies and sales channels' on the page for adding/editing loading docks. If there are no docks listed in your store, you must [add a loading dock](https://help.vtex.com/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW?&utm_source=autocomplete "add a loading dock"). In this field, you must enter the trade policy you have configured for the B2B scenario.

2. __Associate a carrier with a loading dock__\: fill in the field 'Shipping policies and sales channels' on the page for adding/editing loading docks, in which you must select the trade policy configured for the B2B scenario. If there are no carriers listed in your store, you must [add a carrier](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/55MezrFTw2limlgT7KUg6l "add a carrier").

3. __Define a warehouse and associate it with a loading dock__\: choose a loading dock on the page for adding/editing warehouses. If there are no warehouses listed in your store, you must [add a warehouse](https://help.vtex.com/pt/tutorial/gerenciar-estoque "add a warehouse"). 

In the configuration via [Logistics API](https://developers.vtex.com/vtex-developer-docs/reference/logistics-api-overview "Logistics API"), you must follow these exact instructions. However, you can use the [POST Create/Update Dock](https://developers.vtex.com/vtex-developer-docs/reference/docks#createupdatedock "POST Create/Update Dock")</code> endpoint to  associate a trade policy with a loading dock and a carrier with a loading dock by filling in the `salesChannels` and `freightTableIds` parameters, respectively.  

To associate a warehouse with a loading dock, fill in the `warehouseDock` parameter of the `[POST Create/Update Warehouse](https://developers.vtex.com/vtex-developer-docs/reference/warehouses#createupdatewarehouse "POST Create/Update Warehouse")` endpoint.

### Configuring prices

You can configure prices through [price tables](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8 "price tables"), a set of prices applied to certain SKUs in a given context. To configure prices, follow the steps below:

1. [Create a new price table](https://help.vtex.com/pt/tutorial/creating-price-tables--58YmY2Iwggyw4WeSCGg24S "Create a new price table").
2. Edit the pricing spreadsheet settings.
3. Import the pricing spreadsheet you have configured.

You can also create and edit price tables via the `[POST Create/Edit Fixed Prices on a price table (or trade policy)](https://developers.vtex.com/vtex-developer-docs/reference/prices-and-fixed-prices#createeditfixedpricesonapricetableortradepolicy "POST Create/Edit Fixed Prices on a price table (or trade policy)")` endpoint.

### Configuring payment methods

In the B2B business model, a common practice is to grant credit to some of your trusted customers, usually resellers, so that they use that credit to buy items from the retailer.

Credit management is a versatile resource and, as a result, you can use it in different B2B scenarios. Check out some business contexts in which you can employ this strategy in the article [Credit management through Customer Credit](https://help.vtex.com/pt/tutorial/gestao-de-credito-por-meio-do-customer-credit--5lihi3WBsV5mSIDqNvnoK0 "Credit management through Customer Credit").

On VTEX, retailers can use [Customer Credit](https://help.vtex.com/pt/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0 "Customer Credit"), an app in which they can offer and manage the credits granted to their customers. To install the app, check out the complete step-by-step guide in [Installing Customer Credit ](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs "Installing Customer Credit").

> ℹ️ Standard payment methods, such as credit card and debit card, can also be configured for the B2B context. Credit management is the method most frequently used by customers.

After installing the app in your store, you must configure Customer Credit as an available payment method. This way, your customers will be able to make their purchases using the credit granted to them. To configure Customer Credit as a payment method in your store, check out [this tutorial](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/21ok0GBwmcIeaY2IukYMOg#condicoes-de-pagamento "this tutorial"). 

## Additional content: tax differences

In Brazil, one of the particularities of B2B businesses is that it is common to have different taxes applied to the total price of each item.  

For more information, check out the article [Surcharges](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/3DcO1XrLqlbZsq80zxSgZS "Surcharges").

### Simple tax system 

For stores with a simple tax system — in which only one type of tax is applied to the SKU price — there are two recommended methods for configuring the pricing model:

- Configuring [price tables](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8 "price tables"). For tax purposes, you must create price tables with full prices since promotional price tables are not applicable in this context.

- Applying [taxes](https://help.vtex.com/pt/tutorial/como-criar-taxaimposto/ "taxes") to SKU prices to prevent them from being displayed in the store window.

### Complex tax system

For stores with complex tax systems, in which there are many variables for calculating taxes on products and extensive catalogs, the best way to calculate taxes is through integration with an external system.

VTEX provides an [integration protocol for external tax services](https://developers.vtex.com/vtex-rest-api/docs/tax-service-integration-guide "integration protocol for external tax services") that connects to the system and sends the shopping cart information — such as the region of origin of the products and the buyer — to calculate the taxes for each SKU.  

For more details on the protocol, check out the documentation below:

- [System overview](https://developers.vtex.com/vtex-rest-api/docs/tax-services-overview "System overview") 
- [How the protocol works](https://developers.vtex.com/vtex-rest-api/docs/tax-services-specification "How the protocol works") 
- [How to implement Tax Service](https://developers.vtex.com/vtex-rest-api/docs/tax-services-recipe "How to implement Tax Service") 
- [Implementation example](https://github.com/vtex-apps/tax-protocol-example "Implementation example")

## Additional content: VTEX Intelligent Search

[VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb "VTEX Intelligent Search") is a search application that helps customers during their shopping journey by suggesting products that are related to their profile. 

In the B2B context, VTEX Intelligent Search is an essential feature that can be used to search for items by part number — the code referring to the product model. 

Besides, it offers benefits such as adding keyword synonyms and changing keyword relevance.

You can integrate this application with your ecommerce website via VTEX IO settings. Learn how to do that in our step-by-step [guide on how to configure VTEX Intelligent Search](https://vtex.io/docs/app/vtex.search@2.4.0/ "guide on how to configure VTEX Intelligent Search").
