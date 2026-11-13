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

You can activate [Delivery Promise](https://help.vtex.com/en/docs/tutorials/delivery-promise) directly in the VTEX Admin by following a guided flow. During this flow, you can test the feature without affecting your production store, review the delivery options used in the filters, configure the storefront components, and finally publish Delivery Promise for your shoppers.

In this article, you'll learn about each activation step:

1. [Activate test mode](#step-1-activate-test-mode): Select the sales channels and confirm the conditions of use to test Delivery Promise without affecting your production store.
2. [Review the delivery options](#optional-step-2-review-delivery-options): Choose which shipping options buyers can use as filters in the store.
3. [Configure the store](#step-3-configure-store): Implement or configure the Delivery Promise components for your store technology.
4. [Publish to production](#step-4-publish-to-production): Publish the store version with your changes and activate Delivery Promise for buyers.

You can also learn [how to deactivate Delivery Promise](#deactivating-delivery-promise) and [what to do when the account isn't compatible](#account-not-compatible-with-delivery-promise).

## Before you begin

Review the following before you start the activation:

- **Account compatibility:** When you open the **Delivery Promise** page in the VTEX Admin, the platform automatically checks whether the account meets the [Delivery Promise requirements](https://help.vtex.com/en/docs/tutorials/delivery-promise#requirements). Review these requirements to confirm that your account is compatible. If the account is eligible, you can use Delivery Promise at no additional cost.
- **Access to the store code:** [Step 3](#step-3-configure-store) and [step 4](#step-4-publish-to-production) require changes to the storefront code. To access the code, contact the team developing your store or an [implementation partner](https://help.vtex.com/en/docs/tracks/accounts-and-architecture). If you don't have access to the code, ask that team to make the changes.
- **Permission to publish:** Only users with the Super Admin role on the account can publish Delivery Promise to production. Learn more in [Roles](https://help.vtex.com/en/docs/tutorials/roles).

To get started, go to the **Storefront > Delivery Promise** page in the VTEX Admin. On this page, you can check the account compatibility and start the activation flow.

> ℹ️ You can log out of the flow and come back later. Completed steps remain marked on the left side of the page, along with a summary of your choices, such as the selected sales channels and highlighted delivery options.

## Step 1: Activate test mode

In this step, you choose where Delivery Promise will be used and accept the Terms of Use. Test mode doesn't affect your production store.

Complete the following sections:

1. **Sales channels:** Select the [sales channels](https://help.vtex.com/en/docs/tutorials/how-trade-policies-work) where Delivery Promise will be used. You can select up to four sales channels.
2. **Terms of Use:** Check the **I am aware that I won't be able to activate these features while Delivery Promise is active** option. Delivery Promise isn't compatible with the following features, and using them can cause issues in your store:

   - [Multilevel Omnichannel Inventory](https://help.vtex.com/en/docs/tutorials/multilevel-omnichannel-inventory)
   - [Operational Capacity](https://help.vtex.com/en/docs/tutorials/operational-capacity)
   - VTEX Shipping Network
   - [Assembly Options](https://help.vtex.com/en/docs/tutorials/assembly-options) for external sellers

   To understand how each unsupported feature affects your store and what to do before using Delivery Promise, contact [VTEX Support](https://help.vtex.com/en/support).
3. **External seller integration:** Check the **I agree with this requirement** option. If your account has external sellers, they must report product availability through the [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api). Without this integration, products from these sellers may be unavailable in the store.
4. Click `Activate`.

> ⚠️ After you complete this step, you can't change the sales channels in the VTEX Admin. To add sales channels or change the ones you selected, contact [VTEX Support](https://help.vtex.com/en/support).

## (Optional) Step 2: Review delivery options

This step is optional to activate Delivery Promise. However, to display shipping target filters in the store, you need to configure the delivery options.

Delivery Promise uses the [delivery options](https://help.vtex.com/en/docs/tutorials/delivery-options) added to your account to build the filters displayed to buyers. In this step, review and activate the suggestions:

1. Click `Access Delivery Options`.
2. On the Delivery Options preferences page, choose which options appear as filters in the store (up to three) and set the display order. The first option in the list is highlighted when the filter is active on the storefront.
3. Save the changes and return to the **Delivery Promise** page.
4. Click `Next`.

## Step 3: Configure store

In this step, configure Delivery Promise on the storefront. The instructions depend on your store's technology. Select the corresponding tab: **VTEX IO**, **FastStore**, or **Headless**.

> ⚠️ This step requires access to the store code.

### Store Framework (VTEX IO)

1. **Activate test mode:** Create a development workspace and, in the **GraphQL resolver for the VTEX store APIs** app, activate the `enableDeliveryPromisePreview` option. To do this, go to the following URL, replacing `{workspace}` with the workspace name and `{conta}` with your account name:

    ```
    https://{workspace}--{conta}.myvtex.com/admin/apps/vtex.search-resolver/setup
    ```

2. **Install and adapt the components to your store theme:** Choose which components will be displayed in the store, such as location selection, delivery method, and pickup point, and adjust each component's behavior. For example, whether the postal code is required or geolocation is allowed. Learn more in [Setting up Delivery Promise components](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components).

### FastStore

> ⚠️ FastStore doesn't have an isolated test version. To see Delivery Promise working in the store, complete [step 4](#step-4-publish-to-production).

1. **Activate in your store code:** Activate Delivery Promise in the store `discovery.config.js` file. Learn more in [Delivery Promise for FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise).
2. **Install and adapt the components to your store theme:** In Headless CMS, choose which components will be displayed in the store, such as location selection, delivery method, and pickup point, and adjust each component's behavior. For example, whether the postal code is required or geolocation is allowed.

### Headless

1. **Implement the API in test mode:** In the store's search requests, include the `dpPreview=true` parameter together with the buyer location parameters (`deliveryZonesHash` and `pickupPointsHash`). It allows you to preview Delivery Promise in test mode. Here is an example:

    ```
    https://{{accountName}}.vtexcommercestable.com.br/api/intelligent-search/v1/product-search?sc=1&deliveryZonesHash=0ecce2ea9d3b57d4ef994efba4fe3ee9&pickupPointsHash=0b79d8a9979a5f4f5f30a7849da5da16&dpPreview=true
    ```

   The example values are for illustration only. The location parameters are generated from the location provided by the buyer.

   > ❗ Use the `dpPreview=true` parameter only in a test environment, never in production calls.

2. **Implement the components:** Capture the buyer's location to generate the Delivery Promise parameters, and build the delivery and pickup filter interface with the data returned by the Intelligent Search API. Learn more in [Delivery Promise for headless stores](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores).

Once you've completed the configuration, click `Next`.

## Step 4: Publish to production

In this step, you'll publish Delivery Promise for your store's buyers.

> ⚠️ This step requires access to the store's code. Only users with the Super Admin role on the account can publish Delivery Promise to production.

1. **Publish your store version to production:** Publish the store version that includes the postal code capture component, so the buyer's postal code is sent in the search.
2. **Activate Delivery Promise in production search:** Select **I am aware that external sellers must report availability through the protocol for Delivery Promise to work correctly**.
3. Click `Activate in production`.
4. In the confirmation window, click `Publish`.

> ⚠️ Delivery Promise is published to all storefronts of the sales channels selected in step 1. You can't publish it to only one storefront at a time. To learn how to revert the publication, see [Deactivating Delivery Promise](#deactivating-delivery-promise).

Activation may take up to five minutes. When it finishes, the page shows the message **Delivery Promise is in production in the store**, along with the sales channels where the feature is active. Click `Done` to finish.

From then on, when the store identifies the buyer's location (by postal code or other location data), search results show only the products available for delivery to that address.

> ℹ️ If activation fails, the page shows the message **Something went wrong**. Click `Try again`. If the error continues, contact [VTEX Support](https://help.vtex.com/en/support).

To activate Delivery Promise on other sales channels, contact [VTEX Support](https://help.vtex.com/en/support).

## Deactivating Delivery Promise

Currently, you can't deactivate Delivery Promise from the **Delivery Promise** page in the VTEX Admin. To revert the publication, take one of the following actions:

- Contact [VTEX Support](https://help.vtex.com/en/support) and request deactivation.
- Remove the postal code capture component from the storefront, or stop sending the buyer's postal code and location parameters in the search. This requires access to the store code.

## Account not compatible with Delivery Promise

If your account doesn't meet the Delivery Promise requirements, the page shows the message **Your account isn't compatible with Delivery Promise at the moment**, and the activation steps are unavailable. The table below lists the possible reasons and what to do in each case:

| Reason                                                                                                                          | What to do                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| The account doesn't use [Intelligent Search](https://help.vtex.com/en/docs/tutorials/intelligent-search-overview). | Start using Intelligent Search and request activation again.                                                              |
| [Operational capacity](https://help.vtex.com/en/docs/tutorials/operational-capacity) is active.                    | Deactivate Operational capacity and contact [VTEX Support](https://help.vtex.com/en/support) to request a new evaluation. |
| One or more sellers connected to the account aren't compatible with Delivery Promise.                           | Adjust the seller settings and contact [VTEX Support](https://help.vtex.com/en/support) to request a new evaluation.      |

## Learn more

- [Delivery Promise](https://help.vtex.com/en/docs/tutorials/delivery-promise)
- [Delivery Promise: FAQ](https://help.vtex.com/en/docs/tutorials/delivery-promise-faq)
- [Delivery Options (Beta)](https://help.vtex.com/en/docs/tutorials/delivery-options)
