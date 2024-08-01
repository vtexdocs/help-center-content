---
title: 'Configuring the Amazon integration'
id: 5J9CWPIbYQdAegJJWGsxan
status: PUBLISHED
createdAt: 2019-02-28T23:11:28.346Z
updatedAt: 2023-09-22T20:17:01.064Z
publishedAt: 2023-09-22T20:17:01.064Z
firstPublishedAt: 2019-02-28T23:12:37.347Z
contentType: trackArticle
productTeam: Channels
slug: configuring-the-amazon-integration
locale: en
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: amazon-integration
---

Once you have configured your VTEX store and your Amazon account, you must configure the integration between them. You must configure the integration with Amazon in the Admin. To do this, please follow the instructions below:

1. Access the VTEX Admin.
2. In the *MARKETPLACE module*, click on **Integrations**.
3. Click on **Settings**.
4. In the Amazon card, click on `Integrate`.
5. Fill in the fields according to the descriptions below, then click on the `Save configuration` button. Fields marked with an asterisk are mandatory.

- __Affiliate Id*__: identification code for creating an [affiliate](https://help.vtex.com/en/tutorial/o-que-e-afiliado) bthat is not yet registered in your system. The code must consist of three consonants, repeated or not. Vowels are not accepted. Suggestion: MZN. Once the connector is created, the affiliate is automatically created.
- __Affiliate Email*__: fill in an email address for the affiliate you are creating.
- __Sales Channel*__: the [trade policy](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#defining-the-trade-policy-in-amazon) that will define the catalog assortment and the prices of the items that will be sent to Amazon. 
- __Amazon Seller Id*__: fill in the **seller ID** informed by Amazon at the step in which you [Authorize VTEX in your Amazon dashboard](https://help.vtex.com/en/tracks/amazon-integration-setup--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf). 
- __Amazon Auth Token*__: fill in the MWS authorization token provided by Amazon at the step in which you [Authorize VTEX in your Amazon dashboard](https://help.vtex.com/en/tracks/amazon-integration-setup--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf).
- __Mininum Stock*__: determines the minimum safety stock value. If the quantity of items of a product in stock is below the quantity entered, your ad will be paused in order to prevent out-of-stock sales while Amazon is being updated by VTEX. The minimum stock value applies to all products, so please check if there are any products that would not be advertised due to their initial stock.
- __Name for the type of freight__: shipping type name on the Amazon platform. The shipping type name can be found in `Shipping Settings` in the **Shipping Templates** section, under the *Amazon Default Template*.
- __Default ZIP Code__:  If you want to activate this feature, fill in this field with a ZIP code of your choice. It will be used to check stock availability and SLAs when reserving stock for pending orders. This feature allows Amazon orders with `Pending` status to reserve their stock on VTEX, in order to avoid out-of-stock sales for orders approved on Amazon. If the order is canceled on Amazon, the existing stock reservation on VTEX for this order will be canceled.
- __Don't send the variations of skus:__ It is currently not possible to send consolidated SKUs to Amazon. This flag must only be used for stores in the Office category. If your store is in the Office category, we recommend selecting the *ON* option. 
- __Not send price to Amazon:__ Amazon allows you to use their own system to parameterize product prices. To use this service, toggle the *ON* option so that the integration does not submit VTEX prices. If prices are sent through the integration, they will overwrite the ones in Amazon's system.
- **Send KIT*:** if you click *No*, SKUs [registered as kits](https://help.vtex.com/en/tutorial/cadastrando-kit--tutorials_215) will not be sent to Amazon. By clicking Yes, all items in your trade policy will be sent to the marketplace, including SKUs created as kits. Changes to the connector configuration can be made at any time. This does not affect SKUs that have already been sent. For example, if you changed the setting from *Yes* to *No*, SKUs previously sent to Amazon would not be deleted or modified.

<div class="alert alert-info">
  If the <i>No</i> option is enabled, attempts to send SKUs registered as kits to Amazon will result in the following warning: "The connector is configured not to send SKUs of the Kit type". This message can be viewed in the Admin, in <b>Marketplace > Integrations > Products</b>, when you click on the SKU.
</div>

- **Notify by email if an error occurs in an order:** enter the email address of the responsible technician. If any error occurs when integrating an order, a message will be sent to this email address.

<div class="alert-info">
If the configuration is successful, the integrated SKU will be displayed in VTEX Admin with the letter "p" at the end of its code. Example: SKU 13737p.
The letter "p" identifies the sending of a product. As the SKU will only integrated if your product is also integrated. This is expected behavior in the Amazon integration process.
</div>
