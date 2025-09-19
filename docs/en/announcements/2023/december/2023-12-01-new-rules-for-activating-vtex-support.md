---
title: 'New rules for activating VTEX Support in Brazil'
id: 18xfVJM9tbzpyqAUzIsBC1
status: PUBLISHED
createdAt: 2023-12-01T17:11:24.955Z
updatedAt: 2023-12-13T14:03:46.024Z
publishedAt: 2023-12-13T14:03:46.024Z
contentType: updates
productTeam: Billing
author: 5l3eEiSz8MpcppCxcnijGz
slugEN: 2023-12-01-new-rules-for-activating-vtex-support
locale: en
legacySlug: new-rules-for-activating-vtex-support
announcementImageID: 'undefined'
announcementSynopsisEN: "For accounts in Brazil, it's now required the Open Support Ticket feature in the access profile to use VTEX support."
---

Now, for Brazil accounts to contact VTEX Support, the  **Open Support Ticket** resource of the **VTEX - Support** product must be enabled in their role. A user with the *User Administrator - Restricted* role must configure this permission in [License Manager](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

> ℹ️ Admin users with the ** Owner (Admin Super) ** role are automatically associated with the * Open Support Ticket* resource. 

## What has changed?

The configuration is only valid for Brazil accounts and restricts the ability to open support tickets to users with permission. To open a request to the support team, the user must have the **Open Support Ticket** resource of the **VTEX - Support** product in their [role](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

## Why did we make this change?

In terms of best security practices, this step aims to enhance the protection of the store's sensitive information.

## What needs to be done?

A user with the *User Administrator - Restricted* role needs to assign the **Open Support Ticket** resource of the **VTEX - Support** product in [License Manager](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to the [roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) of the users that should have permission to open support tickets.

