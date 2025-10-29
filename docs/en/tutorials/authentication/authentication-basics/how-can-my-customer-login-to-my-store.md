---
title: 'How can my customer login to my store?'
id: 3FCNpwbpZe0U4auiI4CC0C
status: PUBLISHED
createdAt: 2018-10-15T21:25:25.230Z
updatedAt: 2021-10-19T16:41:58.408Z
publishedAt: 2021-10-19T16:41:58.408Z
firstPublishedAt: 2018-10-15T21:30:09.527Z
contentType: tutorial
productTeam: Identity
author: authors_59
slugEN: how-can-my-customer-login-to-my-store
legacySlug: how-can-my-customer-login-to-my-store
locale: en
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

There are some situations where your customer needs to log in to the store in order to see personalized information. Here are the most common scenarios:

- Access to the customer order area (**My Orders**);
- Access to customer registration data;
- Access to B2B stores;
- Access to B2C stores with special prices for a group of customers.

The purpose of this article is to show you how your customers should log in to a VTEX store.

## Login Types

When clicking on a link to authenticate, the client will see the login screen.

![vtex-id-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_1.png)

There are three standard ways to log in to a VTEX store:

1. [**Receiving a quick access key by email**](#receiving-a-quick-access-key-by-email);
2. [**Login with email and password**](#login-with-email-and-password);
3. [**Social media login**](#social-media-login).

### Receiving a quick access key by email

This login type **sends an access token to the user’s email** so he or she can authenticate.

For the client to sign in using this method, they must follow the steps below:

1. On the login screen, the user should click on **Receive quick access key by email**;
2. On the next screen, the user must fill out their email and click on the button **Confirm**
   ![fill-mail-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_2.png)
3. **An access token will be sent to the email they entered in the previous step**. If the customer does not receive the email, ask them to verify that they’ve typed the email correctly. In addition, the customer should to check the junk mail to ensure that the access key has not fallen into the spam filter. The token has 6 numbers. ![code-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_3.png)
4. Return to the login screen and **enter the access key** received in the previous step and click **Enter**
   ![fill-access-token-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_4.png)

### Login with email and password

This type of login ** requests email and password** so that the client can authenticate.

- If the customer already has an email and password, they just need to click on **Enter with email and password**, fill in the email, fill in the password and click on **Enter**.

- If the client needs to **register a password**, they must follow the steps below:

1. On the login screen, the user must click on **Login with email and password**;
2. On the next screen, the user should click on **Don’t you have a password? Register now!**
   ![register-password-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_5.png)
3. The user must fill in their email and click on the button **Confirm**
   ![fill-mail-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_6.png)
4. On the next screen, the user must enter their new password in the fields **New password** and **Confirm new password** and then click on the button **Create new password**
   ![register-new-password-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_7.png)
5. **An access token will be sent to the email informed in the previous step**. If the customer does not receive the email, ask them to verify that they’ve typed the email correctly. In addition, the customer should check the junk mail to ensure that the access key has not fallen into the spam filter. The token has 6 numbers. ![code-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_8.png)
6. Return to the login screen and **enter the access key** received in the previous step and then click **Change Password**
   ![change-password-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/how-can-my-customer-login-to-my-store_9.png)

### Social media login

Social media login options using your Google or Facebook accounts may also be added. Read our article on [Configuring login with Facebook and Google](/en/tutorial/configuring-login-with-facebook-and-google--tutorials_513) for more info.
