---
title: 'Roles'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: PUBLISHED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2024-10-28T19:08:43.136Z
publishedAt: 2024-10-28T19:08:43.136Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: roles
locale: en
legacySlug: configuring-access-profiles, access-profiles
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Every action that takes place on the VTEX platform, such as accessing a page in the administrative interface, clicking on a button or making API calls, involves a request to our infrastructure. As it is common for administrative interfaces to be shared by several of the company’s employees, it is important to be able to limit access to critical actions within an account. In this way, the possibility of disruptions in a store’s operation is minimized and you ensure that each user will access only what they should.

## What is a role?

At VTEX, we use a system based on ** resources ** to achieve greater precision in access control. A ** resource ** is an entity associated with an action or information within our infrastructure. Whenever our systems receive a request, a security analysis is performed to ensure that the user who made it has the necessary permission. For the request to be successful, the resources associated with it must be present in the user’s account.

Currently, we work with a few hundred different features in VTEX products. To facilitate user access management by the account’s administrators, there is the concept of **Role**. To learn more details on each available resource, see [License Manager Resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

An **Role** is a set of features designed to serve a common type of user. For example, call center operators often perform a well-defined set of tasks. If provided with the necessary [resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#), the account administrator can create a custom ** Role** with all the necessary permissions for those employees and control all of their accesses at once.

### Types of roles

When creating a new **role** for your store, you have the option of creating a custom role, selecting each necessary resource, or one of the predefined roles made available by VTEX. See this article for all [Predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#) and associated permissions.

In case you wish to create custom roles, see more details on the [License Manager Resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

## Creating a role

Roles can be managed through the administrative dashboard of your VTEX account. Click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings** > __User roles__ .

![List roles](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

This screen shows a list with all **roles** that were added for the account. In a newly created account, only the *Owner (Admin Super)* role will be listed. This role gives unrestricted access to all the **resources** of the platform.

>⚠️ Some products, like [VTEX Payment](https://help.vtex.com/en/tracks/vtex-payment--7iCCIoIZFmd9OabU6QlmXu/1lZWKCGdy7xpYjukTLfFJL), are sold separately. The resources associated with these products are not included in the <i>Owner (Admin Super)</i> role. To enable the resources associated with these products, you need to use the corresponding access roles.

The number of users with an *Owner (Admin Super)* role should be as low as possible. In addition, it is necessary to make sure that there are visibility and control of those who receive this access.

>⚠️ Unrestricted use of very permissive roles increases the risk of attacks on stores by login credentials leakage.

For users who should not have unrestricted access to the platform, it is important to create **roles** that limit the available resources to those strictly necessary for that type of users. You can do that by clicking on **New Role**.

![New role](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

This screen allows the creation of new roles. These can be based on predefined formats, created by the VTEX team to meet common scenarios in operations, or you can customize them by selecting which features of each product can be accessed by the users that have this role.

By clicking on **Choose role**, the *dropdown* menu displays a list of predefined roles.

![Menu predefined profiles](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

By selecting one of the listed roles, you can check which resources are included in that role, separated by product.

>ℹ️ To learn more details on each available resource, see [License Manager Resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

![New role saved](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

The **Call center operator** role, for example, includes a resource of the *Catalog* product that allows the user to perform operations in a store on behalf of a customer and a resource of the *OMS* that allows the user to check the status of an order.

To create a custom role, the administrator can choose the **Custom** option from the **Choose role** dropdown menu. When clicking on a product in the **Choose a product** dropdown menu, all resources associated with it will be listed.

![Configuring product](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

You can add as many products you need to the role. Just click on the **Configure Another Product** button below the products and resources list.

![Configure another product](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

After configuring products and resources, the administrator can choose a name for the role in **Role name**, if it is a custom setting.

![Role name](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

>⚠️ It is important to choose descriptive names for the roles, in order to make clear which type of users should have that access, ideally indicating their position in the company or the activities they will perform on the platform.

Best management practices for roles increase operations’ security and reinforce the awareness of everyone involved with sensitive data from the store and its customers. We recommend creating roles that are analogous to the hierarchical structures of the managing organization. In this way, everyone is responsible for the information they can access.

It is also possible to add users to the custom or predefined roles, by filling in the **Add users to this role** field with the user’s email. If the user does not exist, a new user will be created using the email as name as well (name and email will be the same).

![Role users](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)

After configuring the new role, you must save it by clicking on the blue button at the bottom of the page.

![Save profile](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)

After you’ve created the new role, it will be listed next to the other roles. To view it, click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings** > __User roles__ .

![New list roles](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)

