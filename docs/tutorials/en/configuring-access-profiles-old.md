---
title: 'How to configure access profiles'
id: tutorials_526
status: DRAFT
createdAt: 2017-04-27T22:02:22.057Z
updatedAt: 2021-03-23T22:52:05.757Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:28.800Z
contentType: tutorial
productTeam: Post-purchase
author: authors_4
slug: configuring-access-profiles-old
legacySlug: creating-user-profiles-guide
subcategory: 1HSqkejwuYcQSMC400uY84
---

To organize the authorizations for users with access to the administrative environment of the VTEX store, the license manager uses roles.

Roles define the functions that the user can view and/or change in each module of the platform.

## Predefined profiles

VTEX offers a number of existing profiles, which usually meet most needs, but it is always possible to have a new, fully customized profile.

Here are some useful profiles:

- __Admin Super:__ Gives access to the entire VTEX store.
- __Admin Portal:__ Gives access to environments allowing editing of the front-end (layout, HTML, CSS, JS etc.).
- __Admin - Home page:__ Basic access, to see the admin home page. This is a basic profile for all users. If a user does not have this access, an Access Denied message will be shown if admin is accessed other than directly through the link of the module with access.
- __2- Televendas:__ Lets only the user access the store and close purchases with a final customer. It does not provide access to any admin module.
- __Admin Televendas:__ Lets the user place a telesales order or access the OMS.
- __Admin Televendas - Sem totalizadores:__ The same as the previous one, but does not allow the user to view the order totalizers on the OMS.
- __Financeiro:__ Gives access to the Financial submodule, within the License Manager, letting the user see payment tickets and tax invoices relating to payment of the VTEX service.
- __Webservice:__ Allows users to access web service methods, used in some integrations (mostly related to the Catalog).

<div class="alert alert-warning"> 
<strong>Atention</strong>: Telephone sales (referred above as Televendas) profiles block access to the E-commerce module. In other words, you cannot access the products register for example. If it is necessary to access this module, the user should work with two different user IDs.
</div>

## Creating new profiles

If none of the existing profiles meets your needs, it is possible to create new profiles.

1. In the new admin's sidebar, click on __Account Management__ and then on __Roles__.
2. Click on the __New profile__ button.
3. Fill out the __Profile name__.
4. On the __Choose a product__ field, add the proper applications.
5. Select the functionalities this profile will have from among the applications added.
6. You can also add the emails of the users who will be bounded to this role.
7. Click on the __Save__ button.

Having done this, just [associate the profiles with the users](/en/tutorial/managing-users/).
