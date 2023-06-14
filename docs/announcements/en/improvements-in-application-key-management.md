---
title: "Improvements in application key management"
id: 6DsPdiQ65RKNUNl7p93zHJ
status: PUBLISHED
createdAt: 2021-08-19T14:45:15.177Z
updatedAt: 2021-12-10T02:40:04.550Z
publishedAt: 2021-12-10T02:40:04.550Z
contentType: updates
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slug: improvements-in-application-key-management
legacySlug: improvements-in-application-key-management
announcementImageID: ""
announcementSynopsisEN: Manage your authentication credentials in a single place and delegate this responsibility as needed.
---

Many of our customers leverage API integrations to connect their VTEX account with external systems. [Authentication](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication) credentials are used to give secure access to the data these integrations require, without exposing your account to unauthorized users or applications. 

Application keys are the most common type of authentication credentials, but their management was spread across multiple screens in the VTEX Admin and was restricted to a single user. Now you can manage your authentication credentials in a single place and delegate this responsibility as needed.

## What has changed?

### New user interface to manage Application Keys

Before, managing [Application Keys](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) required navigating through multiple screens. Now you can generate, add/remove, activate/deactivate, export and edit permissions for your app key token pairs in a single place.

### Permissions to create Application Keys are now resource based

Before, only the [Sponsor user](https://help.vtex.com/en/tutorial/what-is-the-master-user--3oPr7YuIkEYqUGmEqIMSEy) could create and manage Application Keys. Now any user with the `License Manager / Services access control / Save user` resource included in their [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) can create these credentials and share the same permissions with other users, allowing the Sponsor user to delegate this responsibility as needed.

## Why did we make these changes?

By simplifying the management of authentication credentials, we help our customers gain a better understanding of their active integrations and the account resources they have access to, ultimately allowing them to improve the security of their account.

## What needs to be done?

Check out the documentation on [Application Keys](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) for more information.
