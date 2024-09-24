---
title: 'Configuring the connector'
id: wWyl0Njxgs5KfXvxYZJrl
status: PUBLISHED
createdAt: 2021-04-14T21:01:49.270Z
updatedAt: 2023-10-13T19:52:02.877Z
publishedAt: 2023-10-13T19:52:02.877Z
firstPublishedAt: 2021-04-15T17:41:17.442Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-connector
locale: en
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugEN: integrating-with-google-shopping
---

You must configure the integration with Google Shopping in the Admin. Please follow the instructions below:

1. Access the Admin.
2. In the Marketplace module, click __Marketplace and Integrations.__
3. In the __Google Shopping__ row, click `Connect`.
4. Complete the fields displayed on the screen as described below, and then, at the top right of the screen, click `Connect` (the fields with * are required).

- **Integration*:** click _ON_ to enable the integration.
- **Ignore sending EAN (GTIN):** if you click _ON_, SKUs will be sent without their barcodes. If your product has a barcode, we recommend selecting _OFF_ to include this information in the integration. See the article[ Filling in the EAN field](https://help.vtex.com/en/tutorial/cadastrar-o-codigo-de-barra-dos-skus-para-o-instore--2jkOdRB4XSMG2ke0uUQIKS#cadastrar-o-campo-ean) for further details.
- **Merchant Id*:** code assigned to your Google Merchant Center profile. It is a numeric sequence that appears in the upper right corner of your screen when you access your account.
- **Trade Policy***: number of the trade policy that will define the catalog assortment and the price of the items used in the integration.
- **Google Merchant email*:** the email used to create the Google Merchant Center account.
- **Apply discount to price sent*:** The seller must choose which type of discount they will send to Google Shopping, __Do not apply__ (sends the price set up on the VTEX platform), __To payment method configured in the Checkout API__ (must be selected if the seller has configured the discount), or, __Biggest discount configured__.
- **Remove out-of-stock SKUs*:** if you select _OFF_, when a product is out of stock it will appear as unavailable on your Google Shopping feed, instead of being removed from it. If you select _ON_, the SKU temporarily removed for being out of stock will be displayed in the feed again as soon as the inventory is replenished.
- **Merchant Id (Multi-Client):** this field should only be used when an advanced account is configured in Google Merchant Center. Advanced accounts are designed for the management of multiple sellers and domains on a large scale. You must fill in this field with the code assigned to your advanced account on Google Merchant Center, which can be identified in the same way as the Merchant Id (a numeric sequence in the upper right corner of the screen). See the Google article on how to [convert to an advanced account](https://support.google.com/merchants/answer/188487?hl=en) for more details.
- **Send price*:** there are two options available — _without unit multiplier_, in which the product is sold by price per unit, and _with unit multiplier,_ when the product is sold by square footage.
<br/><br/>
Example: if the product is a ceramic tile sold by square feet, the appropriate option is _with unit multiplier_.

## Configuring your Google Merchant Center account

No specific configurations in your Google Merchant Center account are necessary to enable the integration. However, to minimize the occurrence of errors, we recommend **that you disable the automatic update of items.**

By disabling automatic updates, Google will not have permission to change your product prices. These changes must be made exclusively on the VTEX Platform. Therefore, after logging into[ Google Merchant Center](https://www.google.com/intl/en_us/retail/solutions/merchant-center/), make sure your account preferences are in line with this orientation.
