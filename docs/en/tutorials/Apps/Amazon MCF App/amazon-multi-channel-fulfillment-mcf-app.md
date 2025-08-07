---
title: 'Amazon Multi-Channel Fulfillment (MCF) App'
id: X4b62PHi80OK3YwywZStG
status: PUBLISHED
createdAt: 2021-09-20T13:50:23.210Z
updatedAt: 2023-03-29T15:00:56.198Z
publishedAt: 2023-03-29T15:00:56.198Z
firstPublishedAt: 2021-09-20T14:18:16.966Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: amazon-multi-channel-fulfillment-mcf-app
locale: en
legacySlug: amazon-multi-channel-fulfillment-mcf-app
subcategoryId: 1P1vFnzQ4TQJsBRDoPVKUI
---


<div class="alert alert-info">
This App is in beta, which means we are working to improve it. If you have any questions, please contact <a href= "https://support.vtex.com/hc/en-us/requests">our Support</a>.
</div>

The app allows you to integrate your business with the Amazon Multi-Channel Fulfillment (MCF) program. With the integration, VTEX clients can use Amazon's logistics network in their own stores. This way, you can sell items that are stored in Amazon fulfillment centers, and after each sale in your ecommerce, the VTEX platform sends the order information to Amazon, where it is picked, packed, and shipped to the shoppers.

With the solution, your shipping fees and delivery times will be calculated by Amazon, received by VTEX, and displayed to the shopper at checkout. With each order made in your store, the information is sent to Amazon and the order flow is automatically updated between both platforms: VTEX and Amazon Seller Central.

MCF enables a faster delivery experience to the end customer, a simpler logistics operation and a reduction in logistics costs.

This tutorial contains the necessary information to install and configure the application.

## Requirements

Before installing the app:

- Make sure you have an [Amazon seller](https://sell.amazon.com/) account. Please refer to the article [Amazon account configuration](/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf) to learn more about required account settings.
- Verify if the products in your store meet [Amazon's restriction policies](https://sellercentral.amazon.com/gp/help/external/200164330)
- Ensure that your store is located in one of the countries where MCF is available. Amazon MCF is available in some countries, such as the United States, Australia, Mexico, Germany and Canada. Check out the updated list of countries where MCF is available on [Amazon's page](https://sell.amazon.com/fulfillment-by-amazon/fba-multi-channel).

<div class="alert alert-danger">
Once the app is installed, the VTEX platform will treat the integration as an Amazon external store and uses marketplace-type integration with Amazon.
<p> The app must be installed on all VTEX accounts in which you want to use the feature.
<p> We recommend using Checkout V6.
</div>

## Installation, configuration and access:

Once the minimum requirements have been met, please follow the steps below to install the app.

- [Configure location settings](#configuring-location-settings):
Custom checkout with Google Address Form ensure that the shopper inputs the correct delivery address, meeting Amazon's fulfillment requirements, with the correct shipping fee calculation.
- [Install the MCF app from the VTEX App Store](#installing-the-app):
Access the app in the VTEX App Store.
- [Authorize the integration](#authorizing-the-integration):
Integrate your Amazon seller account with VTEX, at the first time you access the application, after installing it, you will need to log in to your Amazon seller account and authorize the connection with VTEX.
- [Integrate your store's item catalog with Amazon's catalog](#integrating-the-catalog):
 Your store SKUs must be the same on both Amazon Seller Central and VTEX. In addition, the integration is done via marketplace, and there are configurations required to integrate a VTEX store with Amazon Seller Central.

### Configuring location settings

In order to have a better customer experience at checkout, when using Amazon MCF we highly recommend the use of Google Address Form Format. In this way the shopper will type full shipping address and checkout will get the shipping fees and delivery times from Amazon. Follow the steps below to activate the Google Address Form Format.

To configure this, please go to Admin and follow the steps below:

1. Install the **Checkout Customizer** app:
    - Visit the VTEX App Store;
    - Search for `Checkout Custom`;
    - Click on Install;
2. Click on the `Store Settings` icon button on the left menu;
3. Find the **Storefront** section and click on `Checkout UI Custom`;
4. Scroll down the page and enable the <i class="fas fa-toggle-on"></i> **Google Address Form Format field.**
5. On the same page, in the upper right corner, click on `PUBLISH`;
6. Click on the `Store Settings` icon button on the left menu;
7. On the left side menu, go to the **Storefront** section and click on `Checkout`.
8. Click on the <i class="fas fa-cog"></i> on the **Checkout** configuration card;
9. To fill in the **Google Maps API Key** field:
10. On the left side menu, go to **Shipping** and click on `Geolocation Shipping`.
11. Fill in the** Google Geolocation API** key;
12. Click on `Register Key`.

In both steps 8 and 10, the key to be filled in is the Google geolocation key. To generate a key, [please refer to Google's developer guide on how to generate a key](https://developers.google.com/maps/documentation/geocoding/overview).

<div class="alert alert-info">
If you have questions about Google geolocation key, please read in detail how the VTEX platform uses this configuration in the articles <a href="https://help.vtex.com/en/tutorial/geolocation-at-checkout--tutorials_4345">Setting up geolocation at checkout</a>
 and <a href="https://help.vtex.com/en/tutorial/registering-geolocation--tutorials_138">Registering geolocation</a>.
</div>

### Installing the app

To install the app, go to the VTEX App Store:

1. Search for the **Amazon MCF** app;
2. Click on `Install`.
3. Fill in the fields:

    - **Automatic Invoice:** Select <i class="fa-toggle-on"></i> to **Activate** or **Deactivate**.
        - Use `Activate` for automatic invoice generation (when the store does not send the order invoices);
        - Use `Deactivate` to include order invoices manually or via ERP.
    - **Blank Packaging:** Select <i class="fa-toggle-on"></i> to **Activate** or **Deactivate**.
        - Use `Activate` to have orders shipped in packaging that does not have the Amazon logo. he order will be cancelled if the items cant be shipped in non-Amazon packaging - blank boxes.
        - Use `Deactivate` to have orders shipped with Amazon packaging.
    - **Amazon Logistics:** Select <i class="fa-toggle-on"></i> to **Activate** or **Deactivate**.
        - Use `Activate` to use the Amazon carrier - Amazon Logistics as one of the carriers.
        - Use `Deactivate` to not use the Amazon shipping service.
    - **ERP URL:** the address of the ERP that will include the order invoices (in case the **Automatic Invoice** field is set to Deactivated).
    - **Amazon Marketplace:** country where you will use Amazon MCF.

<div class="alert alert-warning">
The configurations made in the Automatic Invoice field will be applied to all orders.
</div>

![MCF](https://images.contentful.com/alneenqid6w5/1fPmofbBRr6kge5qzfHvXV/e26c0d8fc1ec3a9069d09e027e36aa98/Amazon_MCF_EN.PNG)

### Integrating the catalog

For items registered in one platform to be available in both, it is necessary to integrate the catalogs via marketplace.

To integrate the platforms, please refer to and follow the steps in the tutorial [Configuring the Amazon integration](/en/tracks/amazon-integration-setup--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan).

### Authorizing the integration

Once the app is installed, you must authorize access to your Amazon account. To do this, please follow the steps below:

1. On the left side menu, click on the Apps icon;
2. Under **Apps management**, click on `My apps`;
3. Select Amazon MCF (Multi-Channel Fulfillment);
4. Click on `Authorize`;
5. You will be redirected to Amazon's page. Log in to your account.
6. Authorize MCF VTEX, read the terms, select the <i class="far fa-check-square"></i> and accept the conditions;
7. Click on `Confirm`.

## Useful links

- [Multi-Channel Fulfillment FAQs](https://supplychain.amazon.com/support) (Amazon)
- [Guide to Seller Central for MCF](https://supplychain.amazon.com/learn/seller-central-guide) (Amazon)

