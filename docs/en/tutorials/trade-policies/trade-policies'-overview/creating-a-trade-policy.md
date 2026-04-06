---
title: 'Creating a sales channel (trade policy)'
id: 563tbcL0TYKEKeOY4IAgAE
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.369Z
updatedAt: 2025-08-27T17:00:49.320Z
publishedAt: 2025-08-27T17:00:49.320Z
firstPublishedAt: 2019-01-24T22:14:00.848Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: creating-a-trade-policy
legacySlug: what-is-a-sales-policy
locale: en
subcategoryId: 6J3wx7KM4oysymsWuUACyY
---

[Sales channels (trade policies)](https://help.vtex.com/pt/docs/tutorials/como-funciona-uma-politica-comercial) are used on VTEX to group catalog, pricing, promotion, inventory, logistics, customer segmentation, and payment settings. Channels can include marketplaces, your own ecommerce site, physical stores, or B2B stores.

Managing sales channels

The Sales channels section of your Admin displays a table with all existing sales channels. You can also filter results, search by keyword, and sort all sales channels in the table. The sales channel ID is automatically determined by the system based on the chronological order in which new sales channels are created.

To define the logistics settings applied to this sales channel, you need to [create or edit a loading dock](https://help.vtex.com/docs/tutorials/managing-loading-docks) related to the desired carriers and enter the sales channel ID in the form.

To use the same catalog in more than one sales channel, see the [Associate product with sales channel](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/salespolicy/-tradepolicyId-) documentation.

## Adding a sales channel

To add a new sales channel, go to the VTEX Admin. If you have the Owner (admin) role, you can create new sales channels directly in the interface.

All create actions are logged in the Admin audit logs, which allows you to identify who performed the action. For more information, see [Understanding the Security report](https://help.vtex.com/docs/tutorials/understanding-the-security-report).

> ℹ️ Creating a new sales channel may generate additional costs as stipulated in the client contract. If you have any questions, check your contract or contact [VTEX Support](https://supporticket.vtex.com/support).

To add a sales channel, follow these steps:

1. In the VTEX Admin, go to **Store Settings \> Channels \> Sales channels** or type **Sales channels** in the search bar.  
2. Click New trade policy.  
3. Review the information displayed in the notification and confirm to proceed.  
4. Complete the sales channel fields:

| Field | Description |
| :---- | :---- |
| **Name:** | Internal identification name for the sales channel. |
| **Collection:** | This field has been deprecated and is not available for use. |
| **Sellers:** | Defines the sellers associated with the sales channel. If no seller is selected, all sellers from the account will be considered by default. |
| **Currency code:** | Currency code used in the sales channel, such as USD or EUR. This field is used for price internationalization. When the user's **locale** doesn't match the currency of the sales channel, prices are shown with the ISO currency code instead of the local symbol. |
| **Currency symbol:** | Symbol of the currency, such as $ or €. It is displayed to users whose **locale** matches the one set in the sales channel. If left blank, the system uses the default symbol of the selected currency code. |
| **Currency decimal places:** | Number of decimal places for the currency. Use this field only to override the default defined by ISO standards. If left blank, the system uses the default of the selected currency code. |
| **Country code:** | Country associated with the sales channel. |
| **Locale:** | Language and region of the sales channel, such as en-US. This field is used together with **Currency code** for price internationalization. |
| **Time zone:** | Time zone of the sales channel. |
| **Active?:** | Defines whether the sales channel is active. |
| **Conditional rule:** | Optional field that allows restricting the sales channel to specific customers based on Master Data information. If you add one, only users who meet the defined condition have access to the sales channel. For example, isPremium=true applies the sales channel only to customers marked as premium. Leave the field blank if you don't want to restrict access. |
| **Inherit trade policy catalog:** | Allows inheriting the catalog from another existing sales channel. |

5. Click `Save`.

Learn more

- [How trade policies work](/en/docs/tutorials/how-trade-policies-work)  
- [Trade policy for marketplaces](/en/docs/tutorials/configuring-a-marketplace-trade-policy)  
- [Requesting an additional trade policy](/en/docs/tutorials/requesting-an-additional-trade-policy)  
- [Adding a loading dock](/en/docs/tutorials/managing-loading-docks)

