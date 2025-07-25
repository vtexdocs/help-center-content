---
title: 'Events available in Audit'
id: 6r1Mzcu5NmkmmDLJlz9CCZ
status: PUBLISHED
createdAt: 2022-06-22T16:05:16.214Z
updatedAt: 2024-09-19T19:45:23.075Z
publishedAt: 2024-09-19T19:45:23.075Z
firstPublishedAt: 2022-06-22T16:28:52.801Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: events-available-in-audit
locale: en
legacySlug: events-available-in-audit
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

Below, you will find a list of the potential events available in [Audit](https://help.vtex.com/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA#) for each app.

* [OMS](#oms)
* [Orders](#orders)
* [Order Authorization](#order-authorization)
* [Inventory & Shipping](#inventory-shipping)
* [Catalog (Admin)](#catalog-admin)
* [Catalog (API)](#catalog-api)
* [Prices](#prices)
* [Promotions](#promotions)
* [Subscriptions](#subscriptions)
* [Wallets](#wallets)
* [Gift Card](#gift-card)
* [Checkout](#checkout)
* [Portal CMS](#portal-cms)
* [License Manager](#license-manager)
* [VTEX ID](#vtex-id)
* [Master Data](#master-data)
* [Headless CMS](#headless-cms)
* [Seller Management](#seller-management)
* [Site Editor](#site-editor)
* [Ad Network](#ad-network)

>ℹ️ In case you encounter an event in Audit which has not been included in this list, please inform us through the [documentation feedback page](https://docs.google.com/forms/d/e/1FAIpQLSfmnotPvPjw-SjiE7lt2Nt3RQgNUe10ixXZmuO2v9enOJReoQ/viewform).

>⚠️ In the Audit filter options, you can find **Shipping Options**, **Profile System**, and **Billing** options besides the applications listed in this guide. Since these options refer to internal resources or features in closed beta, most accounts will not have events associated with them.

## OMS

| Action | Event description | Event details |
|---|---|---|
| Start Handling | Informs VTEX that the store has started handling an order. This helps order workflow. | Order ID. |
| Change Status | Change in order status. | Order ID. |
| Shipping Notification  | Shipping notification of a certain order.  | Order ID.  |
| Payment Notification | Payment notification of a certain order. | Order ID. |
| Save Configuration | Change in price module settings. | Short description of the change. |
| Resend Last Email | Resending the last email related to the order in the Message Center. | Order ID. |

## Orders

| Action | Event description | Event details |
|---|---|---|
| Change State | Change in order status. | Order ID. |
| Order Cancellation | Cancellation of an order. | Order ID. |
| Start Handling  | Action that signals to VTEX that the store has started handling a given order. This triggers the continuation of the flow of this order.  | Order ID.  |
| Notify Payment | Payment notification for a given order. | Order ID. |

## Order Authorization

| Action | Event description  | Event details  |
|---|---|---|
| Create Rule | Creation of a price divergence rule.  | Rule ID. |
| New Dimension | Creation of dimensions for order approvals, such as order value range, list of emails authorized to carry out order approval, among others.  | Dimension ID. |
| Delete Dimension | Exclusion of dimensions for order approvals, such as order value range, list of emails authorized to carry out order approval, among others.  | Dimension ID. |
| Update Dimension | Update in dimensions for order approvals, such as order value range, list of emails authorized to carry out order approval, among others.  | Dimension ID. |
| Update Rule | Edition of a price divergence rule.  | Rule ID. |
| Delete Rule | Exclusion of a price divergence rule.  | Rule ID. |

## Inventory & Shipping

| Action | Event description | Event details |
|---|---|---|
| Carrier Create | Carrier creation. | Carrier ID. |
| Carrier Update | Carrier update. | Carrier ID. |
| Dock Create | Loading dock creation. | Loading dock ID. |
| Dock Update | Loading dock update. | Loading dock ID. |
| Warehouse Update | Warehouse update. | Warehouse ID. |
| warehouse deactivate | Warehouse deactivation. | Warehouse ID. |
| Pickup Point Save | Pickup point creation or update. | Pickup point ID. |
| UPDATE-ITEM-AVAILABILITY | Item availability update. | Previous and new item quantity, SKU ID, and warehouse ID. Example: `The quantity of 17_andreia-estoque-sp was updated from 30.0 to 200.0.` |
| item-availability-delete | Item availability deletion. | SKU ID and warehouse ID. Example: `112233_andreia-estoque-sp was deleted.` |
| Pickup Point Delete | Pickup point deletion. | Pickup point ID. |
| Carrier New Freight Values | Freight table update. | Shipping policy ID. |
| Holiday Update | Holiday update. | Holiday ID. |
| Polygon Create | Polygon creation. | Polygon ID. |
| Holiday Create | Holiday creation. | Holiday ID. |
| Holiday Delete | Holiday deletion. | Holiday ID. |
| Reservation Create | SKU reservation creation. | Item quantity, SKU ID, and warehouse ID. Example: `A quantity of 1.0 from 1_1_1 was reserved.` |
| Reservation Cancel | SKU reservation cancellation. | Item quantity, SKU ID, and warehouse ID. Example: `The reservation of 1.0 from 2000534_1_1 was canceled.` |

## Catalog (Admin)

| Action | Event description | Event details |
|---|---|---|
| Product Activation | Product activation. This event is recorded only when changes are made in the Admin. Changes made via spreadsheet are not recorded in this event. | Product ID. |
| Product Commercial Condition Change | Change in product commercial condition. | Product ID and changed list of conditions. |
| SKU Attachment Association | SKU Attachment Association. | SKU ID, name and attachment ID. |
| Archive Upload | File delivery. | File name. |
| Field Activation | Catalog field activation. | Field name, ID and status. |
| SKU Seller Binding | SKU and seller binding. | Seller’s ID, SKU ID in seller’s catalog and SKU ID in the marketplace catalog. |
| SKU Seller Unbinding | Removal of SKU and seller binding. | Seller’s ID, SKU ID in seller’s catalog and SKU ID in the marketplace catalog. |
| SKU Seller Removal | Removal of seller SKU. | SKU ID in seller’s catalog. |

## Catalog (API)

| Action | Description | Event details |
|---|---|---|
| SKU Seller Binding Removal | SKU Binding Removal. | SKU ID in seller and seller ID. |
| Seller Update | Seller update. | Seller ID. |
| Seller Creation | Seller creation. | Seller ID. |
| SKU Seller Binding Activation | SKU binding activation. | SKU ID in seller and seller ID. |
| SKU Seller Binding Inactivation | SKU binding inactivation. | SKU ID in seller and seller ID. |

## Prices

| Action | Description | Event details |
|---|---|---|
| Put Price | Creation or change of a SKU price. | SKU ID. |
| Save Price Table | Creation or change of a price table. | Identifies the created or changed table. |
| Save Price Tables | Creation or change of multiple price tables. | Identifies the created or changed tables. |
| Price Deleted | Deletion of a SKU price. | SKU ID. |
| Save Config | Creation or change of price settings. | Identifies the created or changed configuration. |
| Fixed Price Modified | Change of fixed price. | Identification of the fixed price changed. |
| Put Catalog Step | Creation or change of a price rule. | Price rule created or changed. |
| Deleted Fixed Prices From Table | Deletion of fixed price from the related price table. | Identification of the table and the deleted price. |
| Compatibility Post Prices | Change of price using the compatibility API with the PricingV1 contract | Identification of the changed price. |
| Change Rnb Config  | Change in price settings for new accounts.  | Name of the account that made the change.  |

## Promotions

| Action | Event description | Event details |
|---|---|---|
| Archive Coupon | Archived a coupon. | Coupon code. |
| Unarchive Coupon | Unarchived a coupon. | Coupon code. |
| Change Rate Configuration | Change in fee settings. | Fee configuration ID. |
| Change Promotion Configuration | Change in promotion settings. | Promotion configuration ID. |
| Change Coupon Configuration | Coupon change. | Coupon code. |
| Unarchived Calculator | Unarchived promotion or fee. | Promotion or fee configuration ID. |
| Archived Calculator | Archived promotion or fee. | Promotion or fee configuration ID. |

## Subscriptions

| Action | Event description | Event details |
|---|---|---|
| SubscriptionGroup Update | Update of a subscription group. | Subscription group ID. |
| Subscription Create | Creation of a subscription. | Subscription ID. |
| SubscriptionGroup Place Order | Creation of a subscription order within a subscription group. | Subscription group ID. |
| SubscriptionGroup Retry | Execution of an attempt to generate a subscription cycle. | Subscription group ID. |
| Subscription Delete | Deletion of a subscription. | Subscription ID. |
| Plan Create | Creation of a subscription plan, where stores can associate different items and SKUs. | Subscription plan ID. |
| Plan Update | Update of a subscription plan, where stores can associate different items and SKUs. | Subscription plan ID. |
| Subscriber Fetch By Email | Audit of who has searched the profile data of a store customer who has subscriptions, based on the customer's email. | ID of the user who carried out the search. |
| SubscriptionGroup Create For Order | Creation of a subscription group for an existing order. | Subscription group ID. |
| Plan Delete | Deletion of a subscription plan. | Subscription plan ID. |
| Store Payments Update | Update in the payment methods that the store accepts for subscriptions. | Account name. |

## Wallets

| Action | Event description | Event details |
|---|---|---|
| TOGGLE_WALLET | Activate or deactivate a digital wallet. | toggle-wallet-action |

## Gift Card

| Action | Event description	 | Event details |
|:---:|:---:|:---:|
| LIST_GIFT_CARD | Visualization of the gift card list. | list-gift-card |
| EXPORT_GIFT_CARD | Export of gift cards. | export-gift-card |
| EDIT_GIFT_CARD | Change in gift card value. | add-gift-card-value |
| CREATE_GIFT_CARD | Creation of gift cards. | create-multiple-gift-cards |

## Checkout

| Action | Event description | Event details |
|---|---|---|
| SaveOrderFormConfiguration | Change in OrderForm settings, which is in charge of running the store checkout. | Action description (“configurated OrderForm”) |

## Portal CMS

| Action | Event description | Event details |
|---|---|---|
| File Update | Change in portal file. | File name and ID changed. |
| File Upload | Portal file upload. | File name changed. |
| File Deleted | File removal. | File name and ID changed. |

## License Manager

| Action | Event description | Event details |
|---|---|---|
| Block AppToken | Application key blocking. | Application key blocked. |
| Accept Sponsor Invite | Accept the invitation to become the sponsor user. | ID of the user who accepted the invitation. |
| Save User | Create a user or change user information. | User ID. |
| Save Account | Create an account or edit account information. | Created or changed account. |
| Change Role | Access role editing. | Role edited. |
| Delete Role | Deletion of a role. | Role deleted. |
| Unblock AppToken | Application key unlocking. | Unblocked application key. |
| Resource Access Allowed | Resource access allowed. | Resource key and user ID to which access has been allowed. |
| Cancel Sponsor Invite | Cancellation of sponsor user invitation. | ID of invited user. |
| Delete User | Deletion of a user. | ID of deleted user. |
| Update Binding | Binding update. | Binding updated. |
| Resource Access Denied | Resource access denied. | Resource key and user ID to which access was denied. |
| Create New AppToken | Creation of application key. | Application key created. |
| Create Sponsor Invite | Creation of a sponsor user invitation. | ID of invited user. |

## VTEX ID

| Action | Event description | Event details |
|---|---|---|
| PasswordCreated | Creation of a first-time password in the store or the VTEX Admin | User ID. |
| PasswordUpdated | Change of store or VTEX Admin password by the user. | User ID. |
| IdentityProviderChanged | Identity provider configuration change. For example: Creating a customized OAuth integration and changing information in an existing OAuth configuration. | Identity provider. |

## Master Data

| Action | Event description | Event details |
|---|---|---|
| DeleteDocument | Deleted document. | Document ID. |
| UpdateSchema | Created or updated schema on Master Data v2. | Schema name. |
| DeleteSchema | Deleted schema on Master Data v2. | Schema name. |

## Headless CMS

| Action | Event description | Event details |
|---|---|---|
| TRY_PUBLISHING | Attempt to publish a page. | Event ID. |
| TRY_PUBLISH_IN_RELEASE | Attempt to publish a release. | Event ID. |
| TRY_UNPUBLISHING | Attempt to unpublish a page. | Event ID. |
| RESTORE_CONTENT | Content restore. | Event ID. |
| TRY_UPDATING_DRAFT | Attempt to update a draft. | Event ID. |
| TRY_UNPUBLISHING_AND_OVERWRITING | Attempt to unpublish and overwrite a page. | Event ID. |
| done.invoke.deleteContent | Delete content. | Event ID. |
| done.invoke.deleteContentVariant | Delete content version. | Event ID. |
| Create new media | Create media file. | Event ID. |
| Delete media | Delete media file. | Event ID. |

In the **Action** column, all Headless CMS events also display the following information:

* **CONTENT_ID:** unique identifier of the content.
* **VARIANT_ID:** unique identifier of the content version.
* **WORKSPACE**: workspace where the action occurred.

## Seller Management

| Action | Event details | Event description |
|---|---|---|
| Update Seller | Change in a seller. | Seller ID. |
| Save Seller | Seller creation. | Seller ID. |

## Site Editor

| Action | Event description | Event details |
|:---:|:---:|:---:|
| Schedule change | Schedules content editing. | Changed entity ID. |
| Edit content block | Edits the content block. | Changed entity ID. |
| Create content block | Creation of a content block. | Changed entity ID. |
| Activate content block version | Activates the content block version. | Changed entity ID. |
| Reset content block version | Resets the content block version. | Changed entity ID. |
| Delete content block version | Deletes the content block version. | Changed entity ID. |
| Edit style | Edits the style. | Changed entity ID. |
| Create new style | Creates a new style. | Changed entity ID. |
| Select main style | Selects the main style. | Changed entity ID. |
| Delete style | Deletes the style. | Changed entity ID. |
| Copy binding content | Copies the binding content. | Changed entity ID. |

## Ad Network

| Action | Event description | Event details |
|---|---|---|
| Create ads | Creation of a new ad. | Ad ID. |
| Create campaign | Creation of a new campaign. | Campaign ID. |
| Update ads | Update of an ad. | Ad ID. |
| Update campaign | Update of a campaign. | Campaign ID. |
