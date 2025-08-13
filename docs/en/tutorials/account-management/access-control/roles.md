---
title: 'Roles'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: PUBLISHED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2024-11-22T14:18:05.867Z
publishedAt: 2024-11-22T14:18:05.867Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: roles
legacySlug: configuring-access-profiles, access-profiles
locale: en
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Every action on VTEX, such as accessing a page in the Admin or making an API call, requires a request to our infrastructure. To guarantee the security of these operations, there is **License Manager**, a system that verifies whether a user has the right permissions to perform an action on the platform.

To make it easier to manage these permissions, License Manager uses a system based on [resources](#resources) and [roles](#roles). See below for more details on these concepts.

## Resources

A **resource** is an entity associated with an action or information within our infrastructure. For example, the _Product management_ resource allows a user to access and edit product information in the Catalog. To learn more about each available resource, read the [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) article.

Each request undergoes a security analysis to check if the user has the necessary resources, i.e., the necessary permission to perform the action. Without the necessary resources, a request will not be successful.

## Roles

A **role** determines the set of resources accessible to a group of users on VTEX. Each admin user can be associated with one or more roles.

As several employees often access the Admin, it is important to limit access to critical actions within an account. This minimizes disruptions in the store operation and ensures that each user has access only to the actions necessary for their role.

For example, a team of telesales operators only needs access to order details, so they shouldn't have access to other platform settings. In this case, their role would only contain resources related to reading order details.

To manage your store roles and their associated users, go to the [Roles list](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

Check below the different types of roles you can add to the store.

### Role types

When [creating a new role](https://help.vtex.com/en/tutorial/creating-roles--qGtNQpKSSAduX94l2WZBW), you can use one of the predefined roles provided by VTEX or create a customized one, selecting each required resource.

The admin must have a role with the _Save access profile_ [resource](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) in order to create a role in License Manager.

#### Predefined

Predefined roles are sets of resources predetermined by VTEX that cover the most common use cases. Check the complete list of [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) and their permissions.

#### Custom

Besides using predefined roles, you can [create custom roles](https://help.vtex.com/en/tutorial/creating-roles--qGtNQpKSSAduX94l2WZBW#creating-custom-roles), combining the necessary resources for a group of admin users from your store.

For example, a team responsible for keeping the store catalog up to date usually performs a well-defined set of tasks, such as adding and editing products, categories, and brands. In this case, an admin can create a customized role with all the necessary resources for these employees.

Check the complete list of available [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

## Managing roles

Roles can be managed through VTEX Admin. Click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account Settings** > __User Roles__ .

![List roles](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/access-control/roles_1.png)

This page shows a list with all roles that were added for the account, which you can edit or delete from the **Actions** column.

In a newly created account, only the *Owner (Admin Super)* role will be listed. This role gives unrestricted access to all the resources of the platform.

> ⚠️ The number of users with an *Owner (Admin Super)* role should be as low as possible. Ensure that there is visibility and control of those who receive this access. Unrestricted use of very permissive roles increases the risk of attacks on stores by login credentials leakage.

## Creating roles

For users who should not have unrestricted access to the platform, it is important to create roles that limit the available resources to those strictly necessary for that type of user. Read the [Creating roles](https://help.vtex.com/en/tutorial/creating-roles--qGtNQpKSSAduX94l2WZBW) guide to do so.

You can create a new role based on [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy), or you can customize them by selecting which [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) can be accessed by the users that have this role.

## Learn more 

* [Predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy)
* [Creating roles](https://help.vtex.com/en/tutorial/creating-roles--qGtNQpKSSAduX94l2WZBW)
* [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3)

