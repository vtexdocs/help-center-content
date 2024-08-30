---
title: "User only with the role 'User Administrator - RESTRICTED' is not able to list the users"
id: ifXUAzgJ1xr8ezhqKpRUI
status: PUBLISHED
createdAt: 2023-11-08T18:07:14.508Z
updatedAt: 2023-11-08T18:07:15.030Z
publishedAt: 2023-11-08T18:07:15.030Z
firstPublishedAt: 2023-11-08T18:07:15.030Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: user-only-with-the-role-user-administrator-restricted-is-not-able-to-list-the-users
locale: en
kiStatus: Backlog
internalReference: 932666
---

## Summary


If an admin user only has the role "**User Administrator - RESTRICTED**" ("**Save user**" resource), the list of users is not available and it is not possible to make any necessary edits or deletions.


##

## Simulation



- Have an user with only the role "**User Administrator - RESTRICTED**";
- Access the "**Admin Users**" page with this user (e.g. https://my-account-here.myvtex.com/admin/users);
- You may notice that the list is empty, even with users already registered ("_No users found :: The user search returned an empty list. Try removing any search filters or adding new users to this account._"):
 ![](https://vtexhelp.zendesk.com/attachments/token/fZ2k11R3xPrhNv5yHVkv9alam/?name=image.png)

- It is possible to add the user you want, and include the necessary roles, but we can't access the users to add/edit/remove roles, or even delete the user through their registration, but only through the role.


##

## Workaround


You can add or remove the user to the role by accessing the role directly.

You can also create a custom role with only the resources "**Get paged roles**" and "**Get paged users**":
 ![](https://vtexhelp.zendesk.com/attachments/token/yjNfjlnfFaBrXZE6gx97OaxHy/?name=image.png)
And then, add it to the user who can save users.





