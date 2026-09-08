---
title: 'Breaking change: New required permission for the Availability Notify app'
slug: '2026-08-17-breaking-change-availability-notify-new-required-permission'
hidden: false
createdAt: 2026-08-17T00:00:00.000Z
updatedAt: 2026-08-17T00:00:00.000Z
contentType: updates
productTeam: Apps
slugEN: 2026-08-17-breaking-change-availability-notify-new-required-permission
locale: en
announcementSynopsisEN: 'As of September 21, 2026, the Download Notification Requests permission will be required to download, process, or delete notification requests from the Availability Notify app'
tags:
  - Breaking change
  - Apps
  - Identity
---

As of **September 21, 2026**, administrative operations for the [Availability Notify](https://developers.vtex.com/docs/apps/vtex.availability-notify) app will require the [License Manager resource](https://help.vtex.com/en/docs/tutorials/license-manager-resources) **Download Notification Requests**. Users and [API keys](https://help.vtex.com/en/docs/tutorials/api-keys) without this resource will receive permission or authorization errors.

## What has changed?

The following Availability Notify administrative operations will now require the **Download Notification Requests** feature, in addition to an authenticated administrative session:

| Operation | Route/GraphQL | Action in the Admin |
| --- | --- | --- |
| `listRequests` | `/_v/availability-notify/list-requests` | Download requests |
| `processUnsentRequests` | `/_v/availability-notify/process-unsent` | Process unsent |
| `deleteRequest` | GraphQL mutation | - |

This change doesn't affect the **Notify me** flow on the product page. Only administrative and back-office operations are affected.

> ℹ️ Users with the **Owner (Super Admin)** role already have this feature and don't require any action.

## Why did we make this change?

To provide more granular access control and follow security best practices, we will require an explicit resource in License Manager to limit who can download, process, or delete notification request data.

## What needs to be done?

Before **September 21, 2026**, every account that uses the **Download Requests**, **Process Unsent**, or **Delete Request** operations must grant the **Download Notification Requests** feature to the relevant users and API keys:

1. In the VTEX Admin, go to **Account Settings > Users > Roles**.
2. [Create a custom role](https://help.vtex.com/en/docs/tutorials/creating-roles) or [edit an existing role](https://help.vtex.com/en/docs/tutorials/roles) and add the **Download Notification Requests** resource (**Availability Notify** product).
3. Assign this profile to every [admin user](https://help.vtex.com/en/docs/tutorials/managing-admin-users) who needs to download or process notification requests.
4. Assign this role to each [API key](https://help.vtex.com/en/docs/tutorials/generated-keys) used by integrations that call these routes.

As of **September 21, 2026**, users and API keys without the feature will be blocked. Users who attempt to perform any of these operations will receive an alert in the Admin indicating that they don't have the required permission. Integrations that call these routes will receive an HTTP 403 Forbidden response.

For more information about the Availability Notify app, see the [app documentation](https://developers.vtex.com/docs/apps/vtex.availability-notify).
