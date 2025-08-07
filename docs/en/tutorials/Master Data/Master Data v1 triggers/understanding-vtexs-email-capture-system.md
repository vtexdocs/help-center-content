---
title: 'Email capture'
id: 15oNhcDa7HA8ztfJnpvhmJ
status: PUBLISHED
createdAt: 2022-10-17T19:51:45.533Z
updatedAt: 2023-07-20T17:49:29.730Z
publishedAt: 2023-07-20T17:49:29.730Z
firstPublishedAt: 2022-10-17T19:53:55.523Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: understanding-vtexs-email-capture-system
legacySlug: understanding-vtexs-email-capture-system
locale: en
subcategoryId: 2nx7hMJmisofwqwy2P9l2i
---

The purpose of this article is to show how a user's email is received in the [Master Data CRM](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw). For this, it will be demonstrated how **Checkout**, **RC.JS** and **Master Data** work together to capture the email information of a new user.

For better understanding, we will present a scenario (divided into 3 steps), where the user successfully completes his purchase and the order is forwarded to OMS, while his email is transmitted securely to Master Data. In this context, user actions and platform flow occur in the following order:

### Step 1 (Email filling)

| __User__ | __VTEX Platform__ |
|------------------|------------------|
| Visits the store's website for the first time (user without registration) and search for the desired item. | In the browser, the Portal module prompts RC.JS (request capture javascript) to pass the information along. |
| Add the product to the cart and click on the `Proceed to checkout` button. | The Checkout module sends the following message to RC.JS: “Hello, we have a transaction about to happen. Please pass this information along.” |
| Fill in your email. | The information is forwarded to the Profile System. At this stage, email is only captured by Profile System, not RC.JS. |

### Step 2 (Filling in personal data)

| __User__ | __VTEX Platform__ |
|------------------|------------------|
| Fill in the mandatory personal information (name, surname and CPF). | The information is forwarded to the Profile System. At this stage, email is only captured by Profile System, not RC.JS. |

### Step 3 (Confirmation of sending personal data)

| __User__ | __VTEX Platform__ |
|------------------|------------------|
| Click on `Go to delivery`. | Checkout prompts RC.JS to transfer email address and cart information to Master Data (via Profile System). |

<div class="alert alert-warning">
So that the <a href="https://help.vtex.com/en/tutorial/acesse-o-carrinho-abandonado-dos-clientes--4bbXy1TlzJaiCr41xKDN4e#">abandoned cart</a> function can be used , the user must have filled in the following information: e-mail, name, surname and CPF. The lack of one of these data, makes it impossible to use the abandoned cart.
</div>

| __User__ | __VTEX Platform__ |
|------------------|------------------|
| Fill in the shipping and payment information. | The Checkout orderForm becomes an order and is transmitted to the VTEX OMS. The user's complete information (first name, last name, email, cart and all additional information) is transmitted to Master Data. Email capture can take up to 46 minutes to properly reflect in CRM. |

<div class="alert alert-info">
Each VTEX module is responsible for requesting RC.JS to transmit the data captured in the session. RC.JS is intended to act as a "messenger" of information.
</div>

![image (3)](//images.ctfassets.net/alneenqid6w5/18dCifD9tOEo8mgUocamIc/958e0da9d2c7aa724f5c1c80bb0b616e/image__3_.png)

