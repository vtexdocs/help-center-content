---
title: 'Improved permission management in the Promotions module'
id: 4SS5gsIGGYiABjWdjL0uPO
status: PUBLISHED
createdAt: 2025-08-11T11:55:15.551Z
updatedAt: 2025-08-11T15:54:22.969Z
publishedAt: 2025-08-11T15:54:22.969Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-08-11-improved-permission-management-in-the-promotions-module
locale: en
legacySlug: improved-permission-management-in-the-promotions-module
announcementImageID: 'undefined'
announcementSynopsisEN: 'Change in Admin permissions to edit promotions with shipping and payment methods.'
---

To strengthen platform security and ensure proper role management, we’ve updated the permissions required to edit certain promotion conditions. From now on, specific actions in the promotions form require [additional License Manager resources](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

## What has changed?

Now, users need specific permissions to **add or edit promotion conditions** related to **shipping methods** and **payment methods**. See the requirements below:

- **Shipping methods**: Requires a [role](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) with the [resource](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **LogisticsInternal**, related to the **Logistics** product.
- **Payment Methods**: Requires a [role](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) with the [resource](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **View Payment Data,** related to the **PCI Gateway** product.

> ⚠️ These resources and those used to edit promotion conditions are now required.

Users without these permissions can still view settings applied by other users, but they won't be able to change them.

## What needs to be done?

We recommend reviewing your store roles and ensuring that users who configure promotions have the resources mentioned above and those previously required for these operations.

Without these permissions, users won’t be able to edit the shipping method and payment conditions for promotions in the VTEX Admin.

For more information on permission management, go to:

- [License Manager resources](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3)
- [Roles](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)

