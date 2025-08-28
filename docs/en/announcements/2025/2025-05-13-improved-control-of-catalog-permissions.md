---
title: 'Improved control of Catalog permissions'
id: 7f2oJiK1j4EYeZBikTHihh
status: PUBLISHED
createdAt: 2025-05-13T20:43:35.895Z
updatedAt: 2025-06-06T21:15:25.435Z
publishedAt: 2025-06-06T21:15:25.435Z
contentType: updates
productTeam: Management
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2025-05-13-improved-control-of-catalog-permissions
locale: en
legacySlug: improved-control-of-catalog-permissions
announcementImageID: 'undefined'
announcementSynopsisEN: 'New resources in the Catalog License Manager, now more intuitive and with unified access via VTEX Admin or API.'
---

We've updated the [License Manager resources](https://help.vtex.com/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) associated with Catalog to enhance permission management. See the main changes below:

- Simpler and more intuitive resources related to actions in Catalog.
- Unified access control for tasks carried out in the VTEX Admin or via API.

## What has changed?

Considering the product organization in License Manager, we made changes to two products:

- The resources previously allocated to the **Catalog** product are now allocated to **Catalog Legacy**.
- The **View Product** resource, previously allocated to the **Catalog API** product, is now allocated to **Catalog**.

In addition, we have added new resources in License Manager related to the **Catalog** product and the **General** category. Below are the details of the permissions granted:

| **Resource** | **Key** | **Description** |
|---|---|---|
| View Product | ViewProduct | View product and SKU details. |
| Edit Product | EditProduct | Edit product and SKU details. |
| View Category | ViewCategory | View category details. |
| Edit Category | Edit Category | Edit category details. |
| View Collection | View Collection | View collection details. |
| Edit Collection | Edit Collection | Edit collection details. |
| View Brand | ViewBrand | View brand details. |
| Edit Brand | EditBrand | Edit brand details. |
| Import Spreadsheet | ImportSpreadsheet | Import products and SKUs with a spreadsheet. |
| Export Spreadsheet | ExportSpreadsheet | Export catalog information spreadsheet. |

These resources give you access to specific tasks on the platform, regardless of the interface. For example, a user with any role that includes the **Edit Category** resource can edit category details from the VTEX Admin or the [catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#overview).

> ℹ️ The **Catalog Legacy** (previously **Catalog**) product remain active, but only give access to the old catalog management screens if they are still being used in your store.

## What needs to be done?

The new resources are already active, have been documented in this [License Manager article](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3), and were automatically assigned to all access profiles that used the Catalog product. However, it is necessary for stores to review their access permissions until July 1, 2025. After this date, any attempt to access without the mentioned resources will be blocked.

However, we recommend taking this opportunity to review store permissions and keeping only the necessary permissions for each user.

To learn more about managing user permissions and application keys, check out the following articles:

- [Roles](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
- [How to manage users](https://help.vtex.com/en/tutorial/gerenciando-usuarios--tutorials_512)
- [Create application keys](https://help.vtex.com/en/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet)
- [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3)

