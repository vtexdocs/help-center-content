---
title: 'Creating a telesales user'
id: frequentlyAskedQuestions_4227
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.809Z
updatedAt: 2025-09-30T18:42:28.656Z
publishedAt: 2025-09-30T18:42:28.656Z
firstPublishedAt: 2019-01-24T21:59:45.397Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: how-can-i-create-callcenter-user
legacySlug: how-can-i-create-call-center-user
locale: en
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

This article explains how to create a user with the telesales role. For more information about roles and how to configure them, see the article [Roles](https://help.vtex.com/docs/tutorials/roles).

Using telesales roles, the merchant can grant access permissions to telesales users so they can assist customers and perform sales operations.

> ℹ️ Users with the Telesales operator role have restricted access to the store's telesales environment. They don't have access to administrative modules in the VTEX Admin, such as Catalog, Payments, Promotions, and others. Access is limited exclusively to the features required to perform assisted sales on behalf of customers.

Once a user with a telesales role logs in, they're automatically redirected to the telesales site, where they can perform operations in the store on behalf of the end customer.

To create a user with a telesales role, follow these steps:

1. Click **Account management** > **Roles**.
2. Click the **New role** button.
3. In the **Select role** menu, select one of these telesales roles:

   - **Telesales operator**: Provides access to [telesales features](https://help.vtex.com/docs/tutorials/telesales-features) and allows you to view all orders in the **Orders** module.
   - **Telesales operator (restricted order views)**: Grants access to telesales features, but allows viewing only the orders created by the user.

   For more details about each role's resources, see [Predefined roles](https://help.vtex.com/docs/tutorials/predefined-roles#call-center-operator).
4. In the field **Add users for this role**, enter the email address of the user to whom you want to assign the telesales role.
5. Click the `Add` button.
6. If you want to add more users, repeat steps 4 and 5.
7. Click `Save`.

> ⚠️ When you create a [role](https://help.vtex.com/docs/tutorials/roles), avoid combining [telesales resources](https://help.vtex.com/en/docs/tutorials/license-manager-resources) with other resources. Otherwise, the role may not work as expected.