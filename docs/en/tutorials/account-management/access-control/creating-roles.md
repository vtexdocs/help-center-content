---
title: 'Creating roles'
id: qGtNQpKSSAduX94l2WZBW
status: PUBLISHED
createdAt: 2023-11-30T16:42:01.373Z
updatedAt: 2025-10-15T14:05:46.117Z
publishedAt: 2025-10-15T14:05:46.117Z
firstPublishedAt: 2023-11-30T17:12:45.125Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-roles
legacySlug: creating-roles
locale: en
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

A role determines the set of resources that a group of users can access on VTEX. You can manage roles via the VTEX Admin, where you can define the [resources](/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) and users associated with each role.

When creating a role, you can either use a [predefined role](/en/tutorial/access-control--4rM3gyiWqtkim4Q8hOvLTC#predefined) created by the VTEX team to meet common operational scenarios or create a [custom role](/en/tutorial/access-control--4rM3gyiWqtkim4Q8hOvLTC#custom), selecting specific resources that users with this role need access to.

Check the steps for each of these options below:

* [Using predefined roles](#using-predefined-roles)
* [Creating custom roles](#creating-custom-roles)

We recommend creating roles that are analogous to the store's hierarchical structures. This approach ensures that all employees are accountable for the information they have access to. Best practices for managing roles not only increase operational security but also heighten the awareness of those handling sensitive store data and customer information.

> ⚠️ Unrestricted use of overly permissive roles increases the risk of store attacks through leaked login credentials.

## Using predefined roles

To start using a predefined role, follow the instructions below:

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **User roles**.

    You will see a list of all the roles added to the account. For more information on this page, read the [Roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) article.
2. Click `+ Create Role`.
3. Click the `Choose role` field and select one of the predefined roles displayed in the dropdown menu. Do not choose the **Custom** option, as it is dedicated to custom roles.

    You will see which resources are included in this role, sorted by product.

    For example, the **Call center operator** profile has a _Catalog_ product resource that allows operations to be carried out in a store on behalf of a customer and an _OMS_ resource that allows verifying an order status:

    ![New role saved](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/access-control/creating-roles_1.png)

    Learn more about the available predefined roles and their associated resources in [Predefined roles](/en/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy).
4. Add admin users to the role by entering the user email address in **Add users to this role** and click `Add`.

    ![Role users](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/access-control/creating-roles_2.PNG)

    If the user does not exist, a new user will be created using the email as the name, i.e., the name and email will be the same.
5. Click `Save`.

## Creating custom roles

> ⚠️ To create or edit a role, the user must have a **User Administrator - RESTRICTED** role and also a role that includes the specific product or resource they want to edit. Having only the **User Administrator - RESTRICTED** role is **not sufficient**. For example, to edit a role that contains resources from the **OMS** product, the user must be assigned both a **User Administrator - RESTRICTED** role and a role that includes **OMS** resources. This rule applies to both the editing of existing roles and the creation of new custom roles. The user must have access to the corresponding product in order to add or modify its resources.

To create a custom role that meets the access needs of a group of users, follow the instructions below:

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **User roles**.

    You will see a list of all the roles added to the account. For more information on this page, read the [Roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) article.
2. Click `+ Create Role`.
3. To create a custom role, click the `Choose role` field and select the **Custom** option from the dropdown menu.
4. Click the dropdown menu under **Choose a product** and select a product from the list.

    You will see a list of all the resources available for the product:

    ![Configuring product](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/access-control/creating-roles_3.png)

5. Check the resources to which the role should grant access. Check the complete [License Manager resources](/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) list for more information on each one.
6. If you want to add resources from another product, click the **Configure Another Product** button at the bottom of the product and resource list and repeat steps 4 and 5.

    You can add resources from as many products as you need to the role.
7. Type a name for the custom role in the **Role name** field.

  > ⚠️ Choose descriptive names for the roles, clearly indicating the type of user who should have access. We recommend indicating the position in the company or the activity to be carried out on the platform.

8. Add admin users to the role by entering the user email address in **Add users to this role** and then click `Add`.

    ![Role users](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/account-management/access-control/creating-roles_4.PNG)

    If the user does not exist, a new user will be created using the email as the name, i.e., the name and email will be the same.

9. Click `Save`.

    Once created, the new role will be listed on the [Roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) page.

## Learn more

* [Roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)
* [License Manager resources](/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3)
