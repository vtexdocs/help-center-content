---
title: Integrating with Netshoes
id: 3hnIjBAOkM2moqkG86kmsU
status: DRAFT
createdAt: 2017-11-29T15:03:17.240Z
updatedAt: 2020-03-06T13:58:00.166Z
publishedAt: 
firstPublishedAt: 2017-12-01T14:11:11.825Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrating-with-netshoes
legacySlug: integrating-with-netshoes
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Netshoes is one of the largest marketplaces of sporting goods and is available for integration through a native VTEX feature.

## Registering the integration

1. From the Admin menu, click __Integrations__.
2. Access __Settings__.
3. Search for the __Netshoes__ box and click __Integrate__.
4. Fill in the fields displayed on the screen. Below, we'll detail how to fill each one of them.
5. With everything filled in correctly, click on the __Save Configuration__ button.

### Fields details

- __Integration*:__ Check `Enabled` for the integration to start operating. If you check `Disabled`, the entire configuration of the integration will be deleted, including the affiliate.

- __Affiliate ID*:__ this field must be filled in with an [affiliate](/en/faq/what-is-affiliate) ID that doesn't already exist in the Orders management affiliates registration. The ID accepts only three digits (all must be consonants). Suggestion: `NTS`. If you have [multi-domain integration settings](/en/tutorial/creating-multi-store-multi-domain), pay special attention to the affiliate ID because this field should have a different value for each domain.

- __Sales Channel*:__ Sales policy ID that will be used for the integration with Netshoes. It is the products of this sales policy that will be sent to the marketplace.

- __Netshoes API access key*:__ this field must be filled in with your store's marketplace __token__. This information is provided directly by Netshoes after hiring.

- __SKU name*:__ sets the format in which brands, products and SKUs names from your store will be sent to Netshoes.

- __Percentual of tolerance in the divergence of the order's value*:__ it is the acceptance rate for the difference of value of an order. Any order that has a difference between the marketplace's selling price and the price determined by the seller [will be compared to this value](/en/faq/why-was-the-order-closed-with-the-wrong-price). If the percentage divergence is less than the value set in this field, the order will be integrated. Otherwise, the order will not be integrated and you will be able to view it in the [orders tab (within the integrations section in the Admin)](/en/tutorial/checking-integrations-in-bridge).

- __E-mails to create the Affiliate*:__ fill it in with an e-mail address.

- __Delivery Type Mapping (SLA) -> Normal:__ here you must enter the [type of carrier](/en/tutorial/how-does-the-type-of-delivery-work) that you want to use for __normal__ deliveries.

_`Example:` suppose you use Correios (PAC) as a carrier and your Carrier Type in the Carriers dashboard is named "Normal". Then, you should write in the field the name __Normal__. Remember that the word should be exactly the same as the one registered in the Inventory & shipping section._

<div class="alert alert-warning">
<strong>Note:</strong> If the field is left blank, the integration will use the <strong>cheapest carrier available</strong> when integrating the order.
</div>

- __Delivery Type Mapping (SLA) -> Express:__ the [type of carrier](/en/tutorial/how-does-the-type-of-delivery-work) that you want to use for __express__ deliveries.

_`Example:` Suppose  you use the XPTO carrier, which delivers faster but is more expensive. Your Carrier Type in the Carriers dashboard is called "Fast Delivery." Then, you must write in the field the name __Fast Delivery__. Remember that the word should be exactly the same as the one registered in the Inventory & shipping section_.

<div class="alert alert-warning">
<strong>Note:</strong> If the field is left blank, the integration will use the <strong>cheapest carrier available</strong> at the time of the order.
</div>

_Subtitle:_<br />
`*` Required fields.<br />

This is the _first step_ of the integration. In the next step, we will perform the registration of the APIs that are essential for its operation.


## APIs registration

In order to work, integration with Netshoes requires the shipping API to be registered in the marketplace dashboard.

### Approved Products Notification API

For the integration to be able to send price and inventory of a Netshoes-approved product, it's recommended that you enable the Approved Products Notification API in their panel. Just follow the steps in this [Netshoes documentation](https://developers.netshoes.com.br/api-portal/content/notificacao) and use the URL below (replacing `{AccountName}` with the name of your store):

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/product/approved/notification`

### Orders Import API

To enable importing Netshoes orders into VTEX, we recommend enabling the API below (replacing `{AccountName}` with the name of your store's environment). Just follow the steps described in this [Netshoes documentation](https://developers.netshoes.com.br/api-portal/content/notificacao).

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/order/notification`


### Shipping API

The implementation of this API allows Netshoes to consult, in real time, the price and shipping deadline for its products (according to the zip code). To enable this step, you must go to the Netshoes panel and follow the steps described in this [documentation](https://developers.netshoes.com.br/api-portal/content/apidefrete). The URL below (replacing `{AccountName}` with the name of your store's environment) will be registered:

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/freight`

<div class="alert alert-warning">
<strong>Note:</strong> If Delivery Mappings are not made, there will be no return of shipping and delivery information for this API.</div>

<div class="alert alert-warning">
<strong>Note 2:</strong> For the API query to be successful, the carrier ID and the warehouse dock ID in VTEX must be a value that contains only numbers.</div>

This is the _second step_ of the integration. In order to complete the process, you must send the specifications of your products to Netshoes.


## Sending product specifications to Netshoes

Once you have made the initial settings for integration with Netshoes, you will need to send the data of the product attributes to the marketplace. To send such information, you will need to __upload the mapping spreadsheet__.

With this feature, you can properly categorize your products in Netshoes and also create variations and attributes for them.

Mapping should be done whenever a product is first sent to Netshoes. This means that once you have done the mapping once, products that have already been integrated don't need to go through this process again. New products should always go through the mapping.

1. [Download here](https://s3.amazonaws.com/Marketplace-Integration/NetshoesIntegration/Template/Mapeamento.xlsx) the __Netshoes Mapping Spreadsheet__ in `.xlsx` format.
2. [Download here](https://s3.amazonaws.com/Marketplace-Integration/NetshoesIntegration/Template/Atributos.xlsx) the __Netshoes Query Spreadsheet__ to check the accepted values according to each column in the Mapping Spreadsheet of the previous step. This spreadsheet is __exclusive for queries__.


### Filling in the Mapping Spreadsheet

Follow the step-by-step below making the correspondence in the __Mapping Spreadsheet__ between what is registered in your product in VTEX and the values specified according to the Netshoes __Query Spreadsheet__.

<div class="alert alert-warning">
<strong>Note:</strong> Any value that is not in the Query Spreadsheet will lead to an integration error.
</div>

1. __SKU ID:__ it is the SKU ID in VTEX. This is the SKU ID that you want to send to Netshoes.

2. __Department:__ fill in the value of the Department to which your SKU belongs in Netshoes.
<br/>_`Example:` if a product is registered in VTEX in the `Moto` department, in the Mapping Spreadsheet the corresponding value in column __Department__ should be `motorcycling`._

3. __Product Type:__ fill in the value of the Product Type of your SKU. According to the department chosen in the previous step, check the spreadsheet for the possible Product Types for that department.
<br/>_`Example:` you are mapping a casual sneaker. According to the Query Spreadsheet, it would belong to the "Casual" Department and the __Product Type__ column would be filled with the value of `Sneaker`._

4. __Brand:__ fill in the value corresponding to the Product Brand in VTEX.
<br/>_`Example:` You are mapping a Nike shirt. According to the Query Spreadsheet, the __Brand__ column must be filled with the value `Nike`._
<br/>

<div class="alert alert-warning">
<strong>Note:</strong> if the brand you have in your products is not on the Query Spreadsheet, contact Netshoes and ask them to include it in the system. As soon as they confirm the registration, you can use the brand in the mapping. If they have not yet registered it, there will be an integration error for that product.</div>

5. __Color__: fill it in with the SKU Color value.
<br/>_`Example:` you are mapping a blue and white shorts. According to the Query Spreadsheet, the __Color__ column must be filled with the value `Blue+White`._

6. __Flavor__: fill it in with the value of the SKU's flavor.
<br/>_`Example:` you are mapping a vitamin supplement with strawberry flavor. According to the Query Spreadsheet, the __Flavor__ column must be filled with the value `Strawberry`._

7. __Size__: fill it in with the SKU's size value.
<br/>_`Example:` you are mapping a small shorts. According to the Query Spreadsheet, the column __Size__ must be filled with the value `s`._

8. __Gender__: fill it in with the value of the SKU's gender.
<br/>_`Example:` you are mapping a female shoe. According to the Query Spreadsheet, the column __Gender__ must be filled in with the value `Female`._


### Other Specifications

There are some __other__ attributes of products listed in the "Attributes" tab of the Query Spreadsheet that are __required__ but that are not sent through the Mapping Spreadsheet explained in the previous step.

In order to send these attributes, the [product specifications](/en/tutorial/creating-a-product-field) indicated as mandatory in the Query Spreadsheet must be registered in VTEX.

_`Example`: a product of the __Basketball__ Department, of Product Type __Sneakers__, must have the `Sneakers Hight` attribute registered as a product specification in VTEX. In this example, the allowed values for the attribute are `High Top`, `Medium Top` and `Low Top`. If the specification in VTEX does not have the values expected by Netshoes, the product will be rejected in the integration._

### Uploading

After filling out the spreadsheet, access __Integrations__ from the Admin menu:

1. Click __Settings__.
2. Look for the Netshoes card and click on the __gear icon__.
3. Then click __Upload Mapping__.
4. Choose the worksheet with the data and click __Send File__.

With the upload completed, the integration automatically sends all of the spreadsheet products to Netshoes.

After completing this step, your store will be fully integrated with Netshoes.
