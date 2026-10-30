---
title: 'Activating Delivery Promise'
createdAt: 2026-10-05T12:00:00.000Z
updatedAt: 2026-10-05T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: activate-delivery-promise
locale: en
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

You can activate [Delivery Promise](https://help.vtex.com/en/docs/tutorials/delivery-promise) directly in the VTEX Admin through a guided flow. In this flow, you test the feature without affecting your production store, review the delivery options used in the filters, configure the storefront components, and then publish Delivery Promise for your customers.

In this article, you'll learn how to:

1. [Activate test mode](#step-1-activating-test-mode): select the sales channels and confirm the conditions of use to test Delivery Promise without affecting your production store.
2. [Review delivery options](#optional-step-2-reviewing-delivery-options): choose which delivery options customers can use as filters in the store.
3. [Configure the storefront](#step-3-configuring-the-storefront): implement or configure the Delivery Promise components according to your store's technology.
4. [Publish to production](#step-4-publishing-to-production): publish the store version with your changes and activate Delivery Promise for customers.

You can also find [how to deactivate Delivery Promise](#deactivating-delivery-promise) and [what to do when the account isn't compatible](#account-not-compatible-with-delivery-promise).

## Before you begin

Review the following points before you start the activation:

* **Account compatibility:** when you open the **Delivery Promise** page in the VTEX Admin, the platform automatically checks whether the account meets the [Delivery Promise requirements](https://help.vtex.com/en/docs/tutorials/delivery-promise#requirements). Review these requirements to confirm that your account is compatible. If the account is eligible, you can use Delivery Promise at no additional cost.
* **Access to the store code:** [step 3](#step-3-configuring-the-storefront) and [step 4](#step-4-publishing-to-production) require changes to the storefront code. To access the code, contact the team responsible for developing the store or an [implementation partner](https://help.vtex.com/en/docs/tracks/accounts-and-architecture#implementation-partners). If you don't have access to the code, ask that team to make the necessary changes.
* **Permission to publish:** only users with the Super Admin role on the account can publish Delivery Promise to production. Learn more in [Roles](https://help.vtex.com/en/docs/tutorials/roles).

To start, in the VTEX Admin, go to **Storefront > Delivery Promise**. On this page, you can check the account compatibility and start the activation flow.

>ℹ️ You can leave the flow and come back later. Completed steps remain marked on the left side of the page, along with a summary of your choices, such as the selected sales channels and the highlighted delivery options.

## Step 1: Activating test mode

In this step, you choose where Delivery Promise will be used and confirm the conditions of use. Test mode doesn't affect your production store.

Complete the following sections:

1. **Sales Channels:** select the [sales channels](https://help.vtex.com/en/docs/tutorials/how-trade-policies-work) where Delivery Promise will be used. You can select up to four sales channels.
2. **Conditions of use:** select **I understand that I won't be able to activate these features while Delivery Promise is active**. Delivery Promise isn't compatible with the following features, and using them can cause problems in the store:
    * [Multilevel Omnichannel Inventory](https://help.vtex.com/en/docs/tutorials/multilevel-omnichannel-inventory)
    * [Operational capacity](https://help.vtex.com/en/docs/tutorials/operational-capacity)
    * VTEX Shipping Network
    * [Assembly Options](https://help.vtex.com/en/docs/tutorials/assembly-options) for external sellers

    To understand how each unsupported feature affects your store and what to do before using Delivery Promise, contact [VTEX Support](https://help.vtex.com/en/support).
3. **External seller integration:** select **I agree with this requirement**. If your account has external sellers, they must report product availability through the [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api). Without this integration, products from these sellers may be unavailable in the store.
4. Click `Activate`.

>⚠️ After you complete this step, you can't change the sales channels in the Admin. To add sales channels or change the ones you selected, contact [VTEX Support](https://help.vtex.com/en/support).

## (Optional) Step 2: Reviewing delivery options

This step is optional for activating Delivery Promise. However, to display shipping time filters in the store, you need to configure the delivery options.

Delivery Promise uses the [delivery options](https://help.vtex.com/en/docs/tutorials/delivery-options) registered in your account to build the filters displayed to customers. To make this configuration easier, the platform analyzes the logistics of your account and all its sellers and automatically generates delivery options.

In this step, review the generated options and define which ones will be used as filters:

1. Click `Go to Delivery option`.
2. Check the automatically generated delivery options. If needed, edit them to reflect your operation.
3. On the Delivery Options preferences page, choose which options should appear as filters in the store (up to three) and set the display order. The first option in the list is highlighted when the filter is active on the storefront.
4. Save the changes and go back to the **Delivery Promise** page.
5. Click `Next`.

## Step 3: Configuring the storefront

In this step, you configure Delivery Promise on the storefront. The instructions vary according to the technology your store uses. Select the corresponding tab: **VTEX IO**, **FastStore**, or **Headless**.

>⚠️ This step requires access to the store code.

### Store Framework (VTEX IO)

1. **Activate in the test version:** create a development workspace and, in the **GraphQL resolver for the VTEX store APIs** app, enable the **Enable Delivery Promises Preview for Intelligent Search** option. To do this, go to the following URL, replacing `{workspace}` with the workspace name and `{account}` with your account name:

    ```
    https://{workspace}--{account}.myvtex.com/admin/apps/vtex.search-resolver/setup
    ```

2. **Install the components and adapt them to your store theme:** choose which components will appear in the store, such as location selection, delivery method, and pickup point, and adjust the behavior of each one, for example, whether the postal code is required or geolocation is allowed. Learn more in [Setting up Delivery Promise components](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components).

### FastStore

>⚠️ FastStore doesn't have an isolated test version. To see Delivery Promise working in the store, complete [step 4](#step-4-publishing-to-production).

1. **Activate in the store code:** activate Delivery Promise in the store's `discovery.config.js` file. Learn more in [Delivery Promise for FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise).
2. **Install the components and adapt them to your store theme:** in the Headless CMS, choose which components will appear in the store, such as location selection, delivery method, and pickup point, and adjust the behavior of each one, for example, whether the postal code is required or geolocation is allowed.

### Headless

1. **Implement the API in test mode:** in the store's search requests, include the `dpPreview=true` parameter together with the customer location parameters (`deliveryZonesHash` and `pickupPointsHash`). This allows you to preview Delivery Promise in test mode. See an example:

    ```
    https://{{accountName}}.vtexcommercestable.com.br/api/intelligent-search/v1/product-search?sc=1&deliveryZonesHash=0ecce2ea9d3b57d4ef994efba4fe3ee9&pickupPointsHash=0b79d8a9979a5f4f5f30a7849da5da16&dpPreview=true
    ```

    The example values are for illustration only. The location parameters are generated from the location provided by the customer.

    >❗ Use the `dpPreview=true` parameter only in a test environment, never in production calls.

2. **Implement the components:** capture the customer's location to generate the Delivery Promise parameters, and build the delivery and pickup filter interface with the data returned by the Intelligent Search API. Learn more in [Delivery Promise for headless stores](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores).

After you finish the configuration, click `Next`.

## Step 4: Publishing to production

In this step, you publish Delivery Promise for your store's customers.

>⚠️ This step requires access to the store code. Only users with the Super Admin role on the account can publish Delivery Promise to production.

1. **Publish your store version to production:** publish the store version that contains the postal code capture component, so the customer's postal code is sent in the search.
2. **Activate Delivery Promise in production for search:** select **I understand that external sellers need to report availability through the protocol for Delivery Promise to work correctly**.
3. Click `Activate in production`.
4. In the confirmation window, click `Publish`.

>⚠️ Delivery Promise is published to all storefronts of the sales channels selected in step 1. You can't publish it to only one storefront at a time. To learn how to revert the publication, see [Deactivating Delivery Promise](#deactivating-delivery-promise).

Activation can take up to five minutes. When it finishes, the page displays the message **Delivery Promise is live in the store**, with the list of sales channels where the feature is active. Click `Finish` to complete the flow.

From that moment on, when the store identifies the customer's location (by postal code or other location data), search results show only the products available for delivery to that address.

>ℹ️ If activation fails, the page displays the message **Something went wrong**. Click `Try again`. If the error continues, contact [VTEX Support](https://help.vtex.com/en/support).

To activate Delivery Promise on other sales channels, contact [VTEX Support](https://help.vtex.com/en/support).

## Deactivating Delivery Promise

Currently, you can't deactivate Delivery Promise from the **Delivery Promise** page in the Admin. To revert the publication, take one of the following actions:

* Contact [VTEX Support](https://help.vtex.com/en/support) and request deactivation.
* Remove the postal code capture component from the storefront, or stop sending the customer's postal code and location parameters in the search. This requires access to the store code.

## Account not compatible with Delivery Promise

If your account doesn't meet the Delivery Promise requirements, the page displays the message **Your account isn't compatible with Delivery Promise at this time**, and the activation steps are unavailable. The table below lists the possible reasons and what to do in each case:

| Reason | What to do |
| ----- | ----- |
| The account doesn't use [Intelligent Search](https://help.vtex.com/en/docs/tutorials/intelligent-search-overview). | Start using Intelligent Search and request activation again. |
| The [Operational capacity](https://help.vtex.com/en/docs/tutorials/operational-capacity) feature is active. | Deactivate Operational capacity and contact [VTEX Support](https://help.vtex.com/en/support) to request a new evaluation. |
| One or more sellers connected to the account aren't compatible with Delivery Promise. | Adjust the sellers' configuration and contact [VTEX Support](https://help.vtex.com/en/support) to request a new evaluation. |

## Learn more

* [Delivery Promise](https://help.vtex.com/en/docs/tutorials/delivery-promise)
* [Delivery Promise: FAQ](https://help.vtex.com/en/docs/tutorials/delivery-promise-faq)
* [Delivery Options](https://help.vtex.com/en/docs/tutorials/delivery-options)
