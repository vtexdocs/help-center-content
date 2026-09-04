---
title: 'Events available in Audit'
id: 6r1Mzcu5NmkmmDLJlz9CCZ
status: PUBLISHED
createdAt: 2022-06-22T16:05:16.214Z
updatedAt: 2026-08-25T00:00:00.000Z
publishedAt: 2025-08-25T18:20:54.585Z
firstPublishedAt: 2022-06-22T16:28:52.801Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: events-available-in-audit
legacySlug: events-available-in-audit
locale: en
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

Below, you will find a list of the potential events available in [Audit](/en/docs/tutorials/audit) for each app.

* [OMS](#oms)
* [Orders](#orders)
* [Order Authorization](#order-authorization)
* [Inventory & Shipping](#inventory-shipping)
* [Catalog (Admin)](#catalog-admin)
* [Catalog (API)](#catalog-api)
* [Catalog (Control Plane)](#catalog-control-plane)
* [Prices](#prices)
* [Promotions](#promotions)
* [Subscriptions](#subscriptions)
* [Wallets](#wallets)
* [Gift Card](#gift-card)
* [Checkout](#checkout)
* [Portal CMS](#portal-cms)
* [Profile System](#profile-system)
* [License Manager](#license-manager)
* [VTEX ID](#vtex-id)
* [Master Data](#master-data)
* [Headless CMS (Legacy)](#headless-cms)
* [Seller Management](#seller-management)
* [Site Editor](#site-editor)
* [Ad Network](#ad-network)
* [Card tokens](#card-tokens)
* [Organizational units](#organizational-units)

> ℹ️ In case you encounter an event in Audit which has not been included in this list, please inform us through the [documentation feedback page](https://docs.google.com/forms/d/e/1FAIpQLSfmnotPvPjw-SjiE7lt2Nt3RQgNUe10ixXZmuO2v9enOJReoQ/viewform).

> ⚠️ In the Audit filter options, you can find **Shipping Options**, **Profile System**, and **Billing** options besides the applications listed in this guide. Since these options refer to internal resources or features in closed beta, most accounts will not have events associated with them.

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
| GetUnmaskedPersonalInformation | Reading of unmasked personal information in an order. | ID do pedido. |
| UpdatePersonalInformation | Update of personal information in an order. | ID do pedido. |

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
| Item Availability Update | Item availability update. | Previous and new item quantity, SKU ID, and warehouse ID. Example: `The quantity of 17_andreia-estoque-sp was updated from 30.0 to 200.0.` |
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
| GiftCard Create | Creation of a native gift card. | Gift card ID and action author ID. |
| GiftCard List All Paged | Query for listing gift cards. | Action author ID and gift card IDs. |

## Catalog (Control Plane)

| Action | Event description | Event details |
|---|---|---|
| Product Activation | Product activation. | Product ID. |
| Product Deactivation | Product deactivation. | Product ID. |
| Admin Product Import | Product import via Admin. | Import file name. |
| Admin Image Import | Image import via Admin. | Import file name. |
| Admin SkuSpecification Import | SKU specification import via Admin. | Import file name. |
| Admin ProductSpecification Import | Product specification import via Admin. | Import file name. |
| Create Brand | Brand creation. | Brand ID. |
| Update Brand | Brand update. | Brand ID. |
| Create Category | Category creation. | Category ID. |
| Update Category | Category update. | Category ID. |
| Create Attachment | Attachment creation. | Attachment ID. |
| Update Attachment | Attachment update. | Attachment ID. |
| Delete Attachment | Attachment deletion. | Attachment ID. |
| Create Field | Catalog field creation. | Field ID. |
| Update Field | Catalog field update. | Field ID. |
| Create Field Group | Field group creation. | Field group ID. |
| Update Field Group | Field group update. | Field group ID. |
| Create Field Value | Field value creation. | Field value ID. |
| Update Field Value | Field value update. | Field value ID. |
| Delete Non Structured Field | Non-structured field deletion. | Field ID. |
| Create Product | Product creation. | Product ID. |
| Update Product | Product update. | Product ID. |
| Create Sales Policy | Sales policy creation. | Sales policy ID. |
| Delete Sales Policy | Sales policy deletion. | Sales policy ID. |
| Create Similar Category | Similar category creation. | Similar category ID. |
| Delete Similar Category | Similar category deletion. | Similar category ID. |
| Create Product Specification | Product specification creation. | Product specification ID. |
| Upsert Product Specification | Product specification creation or update. | Product specification ID. |
| Delete Product Specification | Product specification deletion. | Product specification ID. |
| Delete All Product Specifications | Deletion of all product specifications. | Product ID. |
| Create Sku Kit | SKU kit creation. | SKU kit ID. |
| Delete Sku Kit | SKU kit deletion. | SKU kit ID. |
| Create Sku Service | SKU service creation. | SKU service ID. |
| Update Sku Service | SKU service update. | SKU service ID. |
| Delete Sku Service | SKU service deletion. | SKU service ID. |
| Create Sku Service Type | SKU service type creation. | SKU service type ID. |
| Update Sku Service Type | SKU service type update. | SKU service type ID. |
| Delete Sku Service Type | SKU service type deletion. | SKU service type ID. |
| Create Sku Service Value | SKU service value creation. | SKU service value ID. |
| Update Sku Service Value | SKU service value update. | SKU service value ID. |
| Delete Sku Service Value | SKU service value deletion. | SKU service value ID. |
| Create Sku Service Type Attachment | SKU service type attachment creation. | SKU service type attachment ID. |
| Delete Sku Service Type Attachment | SKU service type attachment deletion. | SKU service type attachment ID. |
| Create Sku Attachment | SKU attachment creation. | SKU attachment ID. |
| Delete Sku Attachment | SKU attachment deletion. | SKU attachment ID. |
| Create Sku Complement | SKU complement creation. | SKU complement ID. |
| Delete Sku Complement | SKU complement deletion. | SKU complement ID. |
| Create Supplier | Supplier creation. | Supplier ID. |
| Update Supplier | Supplier update. | Supplier ID. |
| Delete Supplier | Supplier deletion. | Supplier ID. |
| Update Report Status | Report status update. | Report ID. |
| Create Sku | SKU creation. | SKU ID. |
| Update Sku | SKU update. | SKU ID. |
| Create Sub Collection | Sub collection creation. | Sub collection ID. |
| Update Sub Collection | Sub collection update. | Sub collection ID. |
| Delete Sub Collection | Sub collection deletion. | Sub collection ID. |
| Create Brand Sub Collection | Brand sub collection creation. | Brand sub collection ID. |
| Delete Brand Sub Collection | Brand sub collection deletion. | Brand sub collection ID. |
| Create Category Sub Collection | Category sub collection creation. | Category sub collection ID. |
| Delete Category Sub Collection | Category sub collection deletion. | Category sub collection ID. |
| Create Field Value Sub Collection | Field value sub collection creation. | Field value sub collection ID. |
| Delete Field Value Sub Collection | Field value sub collection deletion. | Field value sub collection ID. |
| Create Sku Sub Collection | SKU sub collection creation. | SKU sub collection ID. |
| Delete Sku Sub Collection | SKU sub collection deletion. | SKU sub collection ID. |
| Create Collection | Collection creation. | Collection ID. |
| Update Collection | Collection update. | Collection ID. |
| Delete Collection | Collection deletion. | Collection ID. |
| Bulk Sku Collection | Bulk SKU collection update. | Collection ID and SKU IDs. |
| Import Insert Sku In Collection | Import to insert SKUs in a collection. | Collection ID and import file name. |
| Import Delete Sku In Collection | Import to delete SKUs from a collection. | Collection ID and import file name. |
| Create Sku Ean | SKU EAN creation. | SKU ID and EAN. |
| Delete Sku Ean | SKU EAN deletion. | SKU ID and EAN. |
| Create Sku Specification | SKU specification creation. | SKU specification ID. |
| Upsert Sku Specification Value | SKU specification value creation or update. | SKU specification value ID. |
| Update Sku Specification | SKU specification update. | SKU specification ID. |
| Delete Sku Specification | SKU specification deletion. | SKU specification ID. |
| Delete All Sku Specifications | Deletion of all SKU specifications. | SKU ID. |
| Create Sku Attribute | SKU attribute creation. | SKU attribute ID. |
| Update Sku Attribute | SKU attribute update. | SKU attribute ID. |
| Delete Sku Attribute | SKU attribute deletion. | SKU attribute ID. |
| Delete All Sku Attributes | Deletion of all SKU attributes. | SKU ID. |
| Create Sku File | SKU file creation. | SKU file ID. |
| Update Sku File | SKU file update. | SKU file ID. |
| Delete Sku File | SKU file deletion. | SKU file ID. |
| Delete All Sku Files | Deletion of all SKU files. | SKU ID. |
| Associate Sku File | SKU file association. | SKU ID and SKU file ID. |
| Disassociate Sku File | SKU file disassociation. | SKU ID and SKU file ID. |
| Reorder Sku Files | SKU file reordering. | SKU ID. |
| Copy Sku Files | SKU file copy. | Source and destination SKU IDs. |
| Create Product Form | Product form creation. | Product form ID. |
| Update Product Form | Product form update. | Product form ID. |
| Move Skus To Product | SKU move to another product. | SKU IDs and destination product ID. |
| Enqueue Translation | Translation enqueue. | Translation ID. |
| Enqueue Product Translation | Product translation enqueue. | Product ID. |
| Create Assortment | Assortment creation. | Assortment ID. |
| Update Assortment | Assortment update. | Assortment ID. |
| Delete Assortment | Assortment deletion. | Assortment ID. |
| Add Included Collection Assortment | Included collection added to assortment. | Assortment ID and collection ID. |
| Remove Included Collection Assortment | Included collection removed from assortment. | Assortment ID and collection ID. |
| Add Excluded Collection Assortment | Excluded collection added to assortment. | Assortment ID and collection ID. |
| Remove Excluded Collection Assortment | Excluded collection removed from assortment. | Assortment ID and collection ID. |
| Brand Activation | Brand activation. | Brand ID. |
| Brand Deactivation | Brand deactivation. | Brand ID. |
| Category Activation | Category activation. | Category ID. |
| Category Deactivation | Category deactivation. | Category ID. |

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
|---|---|---|
| LIST_GIFT_CARD | Visualization of the gift card list. | list-gift-card |
| EXPORT_GIFT_CARD | Export of gift cards. | export-gift-card |
| EDIT_GIFT_CARD | Change in gift card value. | add-gift-card-value |
| CREATE_GIFT_CARD | Creation of gift cards. | create-multiple-gift-cards |
| LIST_CARDS_FROM_API | Search for native gift cards. | list-gift-card-api |
| LIST_GIFT_CARD_TRANSACTIONS | Viewed gift card transactions. | Gift card ID. |
| VIEW_GIFT_CARD_CONDITIONS | Viewed gift card conditions. | Gift card ID. |
| CREATE_GIFT_CARD_CONDITIONS | Created gift card conditions. | Gift card ID. |
| EDIT_GIFT_CARD_CONDITIONS | Edited gift card conditions. | Gift card ID. |
| EDIT_GIFT_CARD_CONFIGURATION | Edited gift card setting. | Gift card ID. |
| CREATE_GIFT_CARD_CANCELLATION | Gift card cancellation record. | Gift card ID. |
| CREATE_GIFT_CARD_SETTLEMENT | Gift card settlement record. | Gift card ID. |
| INSERT_GIFT_CARD_CREDITS | Added credit to gift card. | Gift card ID. |
| GET_UNMASKED_PII | Viewed unmasked personally identifiable information (PII). | Gift card ID. |
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

## Profile System

| Action | Event description | Event details |
| ---- | ---- | ---- |
| EmailRectification | Change existing email address. | ID of user whose email was rectified. |

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
| Create Storefront Custom Resource | Creation of a storefront custom resource. | Storefront custom resource created. |
| Delete Storefront Custom Resource | Deletion of a storefront custom resource. | Storefront custom resource deleted. |
| Create Storefront Custom Role | Creation of a storefront custom role. | Storefront custom role created. |
| Delete Storefront Custom Role | Deletion of a storefront custom role. | Storefront custom role deleted. |
| Update Storefront Custom Role | Update of a storefront custom role. | Storefront custom role updated. |

## VTEX ID

| Action | Event description | Event details |
|---|---|---|
| PasswordCreated | Creation of a first-time password in the store or the VTEX Admin | User ID. |
| PasswordUpdated | Change of store or VTEX Admin password by the user. | User ID. |
| UserLogin | User login to the VTEX Admin. | User ID, user login, IP address, audience, whether the user is an admin, identity provider, whether MFA was used, host, X-Forwarded-For header, user agent, and referer. |
| UserLogout | User logout from the VTEX Admin. | User ID, user login, audience, whether the user is an admin, host, X-Forwarded-For header, user agent, and referer. |
| IdentityProviderChanged | Identity provider configuration change. For example: Creating a customized OAuth integration and changing information in an existing OAuth configuration. | Identity provider. |

## Master Data

| Action | Event description | Event details |
|---|---|---|
| ReadPersonalInformation | Personal information read. Applicable only for interactions with the CL and AD data entities in the CRM interface. | Document ID. |
| CreatePersonalInformation | Personal information creation. Applicable only for interactions with the CL and AD data entities in the CRM interface. | Document ID. |
| UpdatePersonalInformation | Personal information update. Applicable only for interactions with the CL and AD data entities in the CRM interface. | Document ID. |
| DeleteDocument | Deleted document. | Document ID. |
| DeletePersonalInformation | Deleted personal information. | Document ID. |
| SearchPersonalInformation | Personal information search. Applicable only for interactions with the CL and AD data entities in the CRM interface. | Search query details. |
| UpdateSchema | Created or updated schema on Master Data v2. | Schema name. |
| DeleteSchema | Deleted schema on Master Data v2. | Schema name. |

## Headless CMS (Legacy)

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

In the **Action** column, all Headless CMS (Legacy) events also display the following information:

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
|---|---|---|
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

## Card tokens

| Action | Event description | Event details |
|---|---|---|
| CreateToken | Creation of a new card token. | Card token ID, customer profile associated with the token, and action performed. |
| GetToken | Reading of a card token. | Card token ID, customer profile associated with the token, and action performed. |
| UpdateToken | Update of a card token. | Card token ID, customer profile associated with the token, and action performed. |
| DeleteToken | Deletion of a card token. | Card token ID, customer profile associated with the token, and action performed. |

## Organizational units

| Action | Event description | Event details |
|---|---|---|
| RemoveValueFromScope | Removal of values from a scope of an organizational unit. | Scope ID. |
| DeleteOrganizationScope | Deletion of a scope of an organizational unit. | Scope ID and organizational unit ID. |
| DeleteOrganizationScopes | Deletion of all scopes of an organizational unit. | Organizational unit ID. |
| SaveOrganizationUnitScope | Creation of a scope for an organizational unit. | Created scope ID and organizational unit ID. |
| UpdateOrganizationUnitScope | Update of a scope of an organizational unit. | Updated scope ID and organizational unit ID. |
| DeleteOrganizationUnit | Deletion of an organizational unit. | Organizational unit ID. |
| SaveOrganizationUnit | Creation of an organizational unit. | Organizational unit ID. |
| UpdateOrganizationUnit | Update of the name of an organizational unit. | Organizational unit ID. |
| MoveOrganizationUnit | Creation of a hierarchy between organizational units. | Parent organizational unit ID and child organizational unit ID. |

