---
title: "New appKeys will not have a predefined role"
id: tOWdNXkLWdW9hRdGhJw0R
status: PUBLISHED
createdAt: 2021-01-06T19:24:51.000Z
updatedAt: 2021-12-10T02:40:06.394Z
publishedAt: 2021-12-10T02:40:06.394Z
contentType: updates
productTeam: Identity
author: 4ubliktPJIsvyl1hq91RdK
slug: new-appkeys-will-not-have-a-predefined-role
legacySlug: new-appkeys-will-not-have-a-predefined-access-profile
announcementImageID: ""
announcementSynopsisEN: AppKeys will not receive the Owner access profile by default anymore
---

The VTEX platform has a variety of REST APIs that are commonly used to integrate third-party solutions. You can access them using specific credentials.

Credentials for accessing REST APIs are composed of appKeys and appTokens. A pair of appKey and appToken can be considered as the user ID (used to identify who accesses the platform) and password.

For security reasons, you can only create this pair with a Sponsor user account.

## What has changed?

Previously, after credentials were created, access was automatically assigned to the Owner (Admin Super) profile. From now on, new appKeys will not have any role assigned to them. Their assignment must be done in the same way as it is currently done for other users. For instructions, see the Editing users section in the article [How to manage users](https://help.vtex.com/en/tutorial/managing-users--tutorials_512#editing-users).

For additional information about appKeys and appTokens, please access the [Authentication](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication) article.

## Why did we make this change?

This change was implemented for security reasons. Giving an application more permissions than it should have can increase the risk of unforeseen damages to the store, whether due to an error, malicious use or any other reason.

An application that uses an appKey should be given access only to the features for which it was developed. However, the Owner role enables virtually any action in the store due to its unrestricted access. 

With this change, the role must be defined manually as the need arises, and permissions will be limited according to the selected profile.

For more information, please see the article [Roles](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc).

