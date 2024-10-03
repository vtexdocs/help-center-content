---
title: 'Access control'
id: 4rM3gyiWqtkim4Q8hOvLTC
status: DRAFT
createdAt: 2023-11-30T16:29:30.077Z
updatedAt: 2023-11-30T21:42:00.250Z
publishedAt: 
firstPublishedAt: 2023-11-30T21:40:59.550Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: access-control
locale: en
legacySlug: access-control
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

## Learn more

* [Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)
* [Creating roles](https://help.vtex.com/en/tutorial/creating-roles--qGtNQpKSSAduX94l2WZBW)
