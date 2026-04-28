---
title: 'Telesales toolbar'
id: tutorials_5500
status: PUBLISHED
createdAt: 2017-04-27T21:48:31.368Z
updatedAt: 2023-12-07T15:29:46.537Z
publishedAt: 2023-12-07T15:29:46.537Z
firstPublishedAt: 2017-04-27T23:11:19.311Z
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slugEN: telesales-toolbar
legacySlug: using-and-customizing-the-callcenter-toolbar
locale: en
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

The telesales toolbar is displayed at the top of your store's website for users with the [Call Center Operator user role](/en/docs/tutorials/how-can-i-create-callcenter-user), in charge of customer service. This tool allows telesales operators to browse the store on behalf of customers, "impersonating" end-users.

Once the registered operator logs into the store environment, the toolbar will be displayed at the top of all sections of the website.

![toolbartelevendas EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/orders/telesales-and-customer-service/telesales-toolbar_1.png)

See below the main features of the telesales toolbar:
*   [Log in as customer](#log-in-as-customer)
*   [Customer information](#customer-information)

To enable this toolbar, the store administrator must [assign the Call Center Operator role](/en/faq/como-criar-um-usuario-de-televendas) to telesales operators. In the VTEX Admin, go to **Account settings > User roles**, or type **User roles** in the search bar at the top of the page.

To learn how to customize the toolbar in the **CMS** module, check out the article [Customizing the telesales toolbar](/en/docs/tutorials/customizar-a-toolbar-de-televendas).

> ⚠️ For stores developed with [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/what-is-vtex-io), you must configure the **VTEX Telemarketing** app to enable and customize the telesales toolbar. Learn more about this process in our [VTEX Telemarketing](https://developers.vtex.com/vtex-developer-docs/docs/vtex-telemarketing) guide. 

## Log in as customer

To browse the store on behalf of a registered customer, the operator needs to follow the steps below:

1. On the store's storefront, click on **Login as** on the right side of the toolbar.
2. Enter the email of the customer you want to impersonate.
3. Click the `Login` button.

The customer's name will appear on the right side of the toolbar.

After logging in as a customer, any action by the telesales operator in the store will be done on the customer's account. The operator can [access the My Account page](/en/docs/tutorials/how-my-account-works#orders) and make purchases on behalf of the customer.

## Customer information

By clicking on the customer's name, the operator will view the following information:

*   **Email**: the email address the customer uses to access the store.
*   **ID:** the customer's ID number.
*   **Phone**: the phone number added by the customer.
*   **Orders**: button to go to the [Orders page](/en/docs/tutorials/how-my-account-works#pedidos), where you can manage the orders placed by the customer.
*   **Logout**: button to end the customer's session.

## Related articles

* [Predefined roles - Call center operator](/en/docs/tutorials/predefined-roles#call-center-operator)
* [Creating a call center user](/en/docs/tutorials/how-can-i-create-callcenter-user)
* [Customizing the telesales toolbar](/en/docs/tutorials/customizar-a-toolbar-de-televendas)
* [My orders](/en/docs/tutorials/how-my-account-works#pedidos)
* [How to use telesales features](/en/docs/tutorials/telesales-features)
* [How to configure telesales features](/en/docs/tutorials/configuring-telesales-features)
