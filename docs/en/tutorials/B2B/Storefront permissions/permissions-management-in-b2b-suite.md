---
title: 'Permissions management in B2B Suite'
id: 2PLR7mIFxgbmsGq84paLeA
status: PUBLISHED
createdAt: 2024-06-05T18:01:03.375Z
updatedAt: 2024-06-07T13:37:21.121Z
publishedAt: 2024-06-07T13:37:21.121Z
firstPublishedAt: 2024-06-06T10:57:21.290Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slug: permissions-management-in-b2b-suite
locale: en
legacySlug: permissions-management-in-b2b-suite
subcategoryId: 1qGLxbxcX8kwKSWESbLZca
---

In an organization, the Organization Admin (main user) manages access for different people in a B2B store. To do this, they use the permission system in B2B Suite.

Through this app, you can do the following:

- **Initial configuration:** The admin creates the predefined roles and assigns their permissions.

- **Associate roles and permissions:** Predefined roles are associated with different functions and responsibilities within the organization, each with specific permissions.

- **Sync automatic information:** The app automatically communicates with other B2B Suite apps, such as [B2B Organizations](https://developers.vtex.com/docs/apps/vtex.b2b-organizations), to enable different organization management capabilities based on each user role.

- **Check permissions:** When a user performs an action in the store, such as placing an order or accessing certain features, the app checks if the user has the necessary permissions based on their assigned role.

- **Manage permissions:** The app operates backstage and stores predefined roles.

## Roles and permissions

The Storefront Permissions app allows that within an organization, each user can have different roles. For example, a buyer who places orders with budget limits from a predefined cost center or a manager in charge of reviewing and approving orders. These roles can be associated with multiple permissions, depending on the actions the user needs to perform.

## Roles

The following table shows the roles available, along with their keys and descriptions.

| Rol                   | Clave                | Descripción                                                                                                                           |
|-----------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Role                  | Key                  | Description                                                                                                                           |
| Store Admin           | store-admin          | User who accesses the VTEX Admin and manages the store.                                                                               |
| Sales Admin           | sales-admin          | User who can manage all sales users.                                                                                                  |
| Sales Manager         | sales-manager        | User who can manage sales users in the same organization, assist buyers, and simulate purchases in a store.                           |
| Sales Representative  | sales-representative | User who can assist or simulate purchases in a store.                                                                                 |
| Organization Admin    | customer-admin       | Main user of the organization who manages the company's information, as well as its members and cost centers.                         |
| Organization Approver | customer-approver    | User who can retrieve a cart or quote previously saved by an Organization Buyer and create a new order.                               |
| Organization Buyer    | customer-buyer       | User who can add items to the cart. If the [B2B Quotes](https://developers.vtex.com/docs/apps/vtex.b2b-quotes) app is installed, they can also save the cart for future use or create a quote. |

## Configuring role management

To manage roles and permissions, configure permissions by following the steps below on the Storefront Permissions page.

1. In the VTEX Admin, go to Apps > Installed Apps > Storefront Permissions, or type Storefront Permissions in the search bar at the top of the page.
Click a role available in the store.

2. Click a role available in the store.

3. Click one of the listed apps.

4. Select the permissions you want to enable for the role.

5. Click `Save`.

![Gerenciamento de permissões - EN](https://images.ctfassets.net/alneenqid6w5/287qksSZ46sMPwg4CuXQ8F/8cab9bcae960a2f30d855789b065a0ee/Gerenciamento_de_permiss_es_-_EN.gif)

Once you have associated the roles with the desired permissions, you can assign them to users. Learn more in [B2B Organizations](https://developers.vtex.com/docs/guides/vtex-b2b-organizations#users).
