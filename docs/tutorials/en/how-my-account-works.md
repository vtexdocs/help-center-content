---
title: 'How My Account works'
id: 2BQ3GiqhqGJTXsWVuio3Xh
status: PUBLISHED
createdAt: 2019-04-11T21:14:26.117Z
updatedAt: 2023-04-24T23:39:56.581Z
publishedAt: 2023-04-24T23:39:56.581Z
firstPublishedAt: 2019-05-21T19:48:15.019Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slug: how-my-account-works
legacySlug: how-does-my-account-work
subcategory: 1RWR7qSyaREbD5RfgCjdYG
---

The __My Account__ page offers your customers autonomy to manage their orders and personal data on a single page. This feature facilitates the operation of your business by reducing operational costs associated with customer service.

In [basic settings](#basic-settings), you can configure which sections will appear for the client. The existing sections are as follows:

- [Profile](#profile)
- [Addresses](#addresses)
- [Orders](#orders)
- [Credit cards](#credit-cards)
- [Subscriptions](#subscriptions)
- [Authentication](#authentication)

<div class = "alert alert-info">
To learn about <b>My Account</b> customization, see our developer documentation <a href="https://developers.vtex.com/docs/guides/vtex-my-account">My Account - StoreV2 version</a>. Be aware that VTEX does not offer support for <b>My Account</b> when customized.
</div>

## Profile

In this section, customers can manage their personal data saved in the store. They can [edit their profile information](#edit),[ set a new password](#password), and [choose whether to receive emails with promotions](#newsletter).

![profile EN](//images.ctfassets.net/alneenqid6w5/6LUXeCU09v8EOyMXntPggz/a9f2ca072b2a08cb6cb1bc196b9c9f1e/profile_EN.png)

### Edit

The `Edit` button allows you to change the following profile information:

* First name
* Last name
* ID type and number
* Phone number
* Gender (optional)
* Date of birth (optional)

If the customer is a legal entity, they can `Include business fields` and fill in the following information about their company:

* Corporate name
* Business name
* Corporate phone
* State registration
* Trade name

### Password

The `Set password` button allows you to create a new password.

### Newsletter

Customers can check the option **I want to receive the newsletter** to receive promotions by email.

## Addresses

This section displays all customer’s addresses saved in previous purchases.

### Edit

The `Edit` button allows customers to change their address information saved in the store.

### Add address

The `Add address` button allows customers to include new addresses besides the ones added in previous purchases.

## Orders

This section displays a list of all orders placed by the customer in your store. The list is sorted by creation date and displays details such as order date, total price of the order, order ID, status, and items purchased.

![orders EN](//images.ctfassets.net/alneenqid6w5/1VTgMxrq3WI02LZt21wuw6/29e797af3e99000a06d906bf5e3ae0d1/orders_EN.png)

The **Orders** section allows customers to track the progress of their orders and offers options such as cancel or change orders. See below all available options.

* [Order again](#order-again)
* [Request Cancellation](#request-cancellation)
* [View order details](#view-order-details)
    * [Change order](#change-order)

### Order again

In **Order again**, the selected shopping cart will be duplicated. This means that the customer can place a new order by generating a new cart with the same items as in previous ones.

### Request Cancellation

Customer may request cancellation of his or her order at any time. If requested during the[grace period for cancellation](https://help.vtex.com/en/tutorial/setting-the-grace-period-for-order-cancellation--jYFdnPDtNm4WCEkYWqqC), store approval is not required for the cancellation to take effect.
Learn more about [setting the grace period for order cancellation](https://help.vtex.com/en/tutorial/how-does-cancellation-work-when-requested-by-the-customer--3wEI6DUNtecooG2Ki4Akqo) 

### View order details

By clicking on an order in the list, the customer will be able to view the details of that order, such as delivery address, payment method, and total amount. In addition, they can view tracking information and a timeline indicating the [order flow](https://help.vtex.com/en/tutorial/fluxo-de-pedido--tutorials_196).

Customers can also use the option [Order again](#order-again) in this page. By clicking on [More options](#more-options), the [Change order](#change-order) and [Request cancellation](#request-cancellation) features will be displayed (if enabled in your store and the order is in the `Handling shipping` status).

![order details EN](//images.ctfassets.net/alneenqid6w5/JQbiFPVtCl1Q8F6PaM0A0/ee071c1cc75a884c9daecb85072d3453/order_details_EN.png)

#### Change order

If the order is in the `Handling shipping` status, they can `Change order` by clicking on `More options` on the order details page.

To provide this option, the retailer must [allow customers to change orders](https://help.vtex.com/en/tutorial/como-funciona-a-substituicao-de-pedidos?locale=pt#como-ativar-a-substituicao-de-pedidos) in the **Orders** module.

The `More options` button allows customers to change their order information, such as address, payment method and items, without the need to place a new order or contact the store's customer service team. Read the article [How Order replacement works](https://help.vtex.com/en/tutorial/como-funciona-a-substituicao-de-pedidos) to learn more.

## Credit cards

In the **Credit cards** section, the customer has autonomy to manage credit cards in their account. They can include and edit the credit card data saved at checkout. To add new cards, follow the steps below:

1. Open **My Account** in the store.
2. Click the **Credit cards** tab.
3. Click the **ADD NEW CARD** button.
4. Enter the card and billing address details.
5. Click the **SAVE NEW CARD** button.
6. Solve the reCaptcha challenge.
7. The card validation process will happen automatically. If there is no problem, you will be redirected to the card list and the new card will appear on the list.

![Card ReCaptcha](//images.ctfassets.net/alneenqid6w5/2xGRuG3f5S56POV684Q2Y3/ab1e37db8b01f154e80f8d2f4f562d7d/Card_ReCaptcha_EN.gif)

However, there are limitations for stores using [3DS](https://help.vtex.com/en/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) authentication (V1 or V2) in their acquirers:

* If the customer tries to add a new card that has not been previously used in your store, the following message will be displayed: _There was an error while trying to save the card._ For more details, visit our documentation [The "Save new card" option does not work when using 3-D Secure (3DS)](https://help.vtex.com/en/known-issues/the-save-new-card-option-does-not-work-when-using-3-d-secure-3ds--20INELA5LVhY1XqFWG7047).

* In **Subscriptions**, it is not possible to save the card and then enable the subscription option. For this reason, it is necessary to enable the subscription when making a purchase, so the card will be saved automatically.

* If the credit card saved in the **Credit cards** section expires, the user will need to remove it and make a new purchase to save a new card. This is because 3DS authentication requires a transaction to update and confirm credit card details.

* For marketplaces, the `Save card` option in the **Credit cards** section will not be available if the payment condition for that credit card is associated only with the [white label seller](https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa). This is because the credit card validation occurs directly on the main account, through a test transaction that charges an amount of 1.50 USD on the given card. This amount is refunded after the card is verified.

    So, to save a credit card, the credit card [payment condition](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) also needs to be associated with the main account, in this case, the Marketplace.

## Subscriptions

In this section, customers can manage all their subscriptions, as well as modify their subscription data. Read the article [How subscriptions work](https://help.vtex.com/en/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453#how-your-customers-view-and-manage-their-subscriptions) to learn more.

## Authentication

This section can be accessed on the left side menu by clicking on **Authentication** in the user profile settings. It offers options for password and session management.

![My Authentication app EN](//images.ctfassets.net/alneenqid6w5/20aIW7imMlRsfDbKYu9IuM/945cc2ade2766758e484814c3e380708/My_Authentication_app_EN.png)

### Password management

The **Password** component allows users to create their passwords, if they do not already have one, or change their existing passwords. To create a new password, follow the instructions below:

1. Click on the `SET PASSWORD` button. The fields to create a password will be displayed, and the user will receive an email with a code to authorize the procedure. The email address to which the verification email was sent will appear at the top of the component.
2. In the **Code** field, enter the verification code received by email.
3. In the **New password** field, enter a new password. Below those fields, you will see the requirements for setting a valid password. As the user types the password meeting those requirements, their symbols will change from red to green. The password will be valid only if all symbols are green.
4. Once you have entered a valid password, click on the `SAVE PASSWORD` button.  
![My Authentication create password EN](//images.ctfassets.net/alneenqid6w5/5EDsOOYVAUmNolMnzs22FD/fb226bc32cfc48422cec830332d10762/My_Authentication_create_password_EN.png)

To change an existing password, follow the instructions below:

1. Click on the `RESET PASSWORD` button.
2. Enter the current password in the corresponding field.
3. Enter the new password in the corresponding field, following all the requirements.
4. Click on `SAVE PASSWORD`.
![My Authentication change password EN](//images.ctfassets.net/alneenqid6w5/7qyiWDAjdSBEjppq6Ti94c/4a055c06066c293502ffb9652d220c93/My_Authentication_change_password_EN.png)

<div class="alert alert-info">
If you have forgotten your password, you cannot recover it using the option for resetting passwords. To recover your password, you must log out of your current session, try to log in using your email address and password, and click on <strong>I forgot my password</strong>.
</div>

### Session management

The **Session management** component allows you to view all your active sessions, including the current session, and remotely revoke access to other sessions.

To view active sessions, click on the `VIEW SESSIONS` button, and you will be redirected to the session management page. This page will display all of your active sessions. For each session, there will be information about the type of device logged in, the last access, browser, operating system, IP address, and the date and time of the first access. The first component refers to the current session and cannot be used to log out. From the second component on, in case there is one, you can see other sessions.

To revoke access from other sessions, click on the `LOG OUT` button of that session.

![My Authentication Session Management EN](//images.ctfassets.net/alneenqid6w5/3qxpIRREWnGmRmv97jhOML/ebcd1548b887d23b0fd661a0e05a0a73/My_Authentication_Session_Management_EN_blur.png)

## Basic settings 

In **My Orders**, you determine which sections will be visible to the customer in their space. The configurable options are as follows:

* In **PROFILE**, the <a class="far fa-check-square"></a> _Show non-binary genders when editing profile_ option determines whether the customer is treated as gender-neutral when editing their [Profile](#profile). 
* In **CARDS**, the <a class="far fa-check-square"></a> _Visible_ option defines whether the customer will have the [Cards](#credit-cards) section to manage their credit cards. 
* In **ORDERS**, the <a class="far fa-check-square"></a> _Visible_ option determines whether the customer has the [Orders](#orders) section to track their orders. 
* In **ADDRESSES**, the <a class="far fa-check-square"></a> _Visible_ option defines whether the customer will have the [Addresses](#addresses) section with their address’ details.

![vtex-my-account_EN](//images.ctfassets.net/alneenqid6w5/4x5BM7dpNcnjHagpycIeWt/9605097215fa1591bfc7e49de4b48735/vtex-my-account_EN.png)

By default, the **CARDS** and **ORDERS** options are configured as visible. To change these settings or enable others, follow the steps below: 

1. In Admin VTEX, access **Apps > App Store**, or type **App Store** in the search bar at the top of the page. 
2. In the **All Apps** section, use the search bar to find _My account_. 
3. On the _My account_ card, click on <i class="fas fa-cog" alt="engrenagem azul"></i> `Settings`. 
4. Select the <a class="far fa-check-square"></a> checkboxes as desired. 
5. Click `Save`.

