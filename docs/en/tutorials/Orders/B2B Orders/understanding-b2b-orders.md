---
title: 'Understanding B2B Orders'
id: 1arpUseqasZZ45Lq7PgevO
status: PUBLISHED
createdAt: 2020-10-20T15:50:59.558Z
updatedAt: 2022-07-13T21:58:03.246Z
publishedAt: 2022-07-13T21:58:03.246Z
firstPublishedAt: 2020-11-17T17:03:21.123Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: understanding-b2b-orders
locale: en
legacySlug: understanding-b2b-orders
subcategoryId: 1WkESJBcI6r61dS82PQKF9
---

In B2B e-commerce operations, it is often necessary to inform an order's status to an employee who has not made a purchase on the company's behalf. To do this, the support team often needs to check the ERP, as there is no connection between orders placed by two different users in the online store.

The **B2B Orders** app makes this process simple, allowing any employee to consult the company's orders through its online store.

![orders VTEX B2B](https://images.ctfassets.net/alneenqid6w5/VNG3045dKhkQBgG1ZTxOl/d239fe8c9794fb3aa7fb29a4c0623635/Screenshot_2020-10-20_VTEX_B2B.png)

This self-service experience is possible, thanks to API integration with the ERP. With this, the employee can search for orders by:

- **Web order number:** identification number of the order placed through the store site.
- **ERP order number:** identification number of the order placed through the store ERP.
- **My order:** identification number associated with the customer who made the purchase.

>⚠️ This app is only available for stores developed using 
>     [VTEX IO](https://vtex.com/br-pt/store-framework/).
> Before proceeding, you need to <a href = "https://developers.vtex.com/vtex-developer-docs/docs/querying-b2b-order-statuses">install and configure B2B orders</a> on your store.

## Context

The B2B scenario presents the customer experience as the primary goal since loyalty is essential to companies' relationship. B2B e-commerce aims to bring this same satisfaction to the digital environment, allowing the integration of manual services with digital processes. 

In practice, it means simplifying processes for customers to consume your products most acceptably and conveniently. They can choose the service - website or telesales - most appropriate for them when making a purchase. Also, it is possible to access orders placed through the site without depending on someone's interference.

In the previous VTEX context, to have access to orders placed by a company, the employees had to log in to the store using their email. It was not possible to have broader access for employees of the same company. To achieve this, the company needed to create its application to provide full access.

## Benefits

To create a full, multi-channel service experience for this scenario, we made the B2B Order. Installing the application in your store allows the entire company to have access to orders placed with a global login. B2B Orders uses an API that reads the ERP through the company, not the employee. Thus, there is no longer individual access to the orders, but the company as a whole.

Another benefit of B2B Orders is the integration of orders made through different channels.  Usually, the telesales operator uses the ERP to place an order. The B2B Orders allows you to consult orders made both through the website and telesales from the integration with ERP. In this way, the store manager and the customer can check and track the orders placed.

In addition to this access to orders, the B2B Order allows consulting the numerous tax documentation. You can download invoices and other documents.
