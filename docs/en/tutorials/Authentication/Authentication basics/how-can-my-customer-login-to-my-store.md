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
locale: en
legacySlug: how-can-my-customer-login-to-my-store
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

There are some situations where your customer needs to log in to the store in order to see personalized information. Here are the most common scenarios:

- Access to the customer order area (__My Orders__);
- Access to customer registration data;
- Access to B2B stores;
- Access to B2C stores with special prices for a group of customers.

The purpose of this article is to show you how your customers should log in to a VTEX store.

## Login Types

When clicking on a link to authenticate, the client will see the login screen.

![vtex-id-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_1.png)

There are three standard ways to log in to a VTEX store:

1. [__Receiving a quick access key by email__](#receiving-a-quick-access-key-by-email);
2. [__Login with email and password__](#login-with-email-and-password);
3. [__Social media login__](#social-media-login).

### Receiving a quick access key by email

This login type __sends an access token to the user’s email__ so he or she can authenticate.

For the client to sign in using this method, they must follow the steps below:
1. On the login screen, the user should click on __Receive quick access key by email__;
2. On the next screen, the user must fill out their email and click on the button __Confirm__ ![fill-mail-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_2.png)
3. __An access token will be sent to the email they entered in the previous step__. If the customer does not receive the email, ask them to verify that they’ve typed the email correctly. In addition, the customer should to check the junk mail to ensure that the access key has not fallen into the spam filter. The token has 6 numbers. ![code-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_3.png)
4. Return to the login screen and __enter the access key__ received in the previous step and click __Enter__ ![fill-access-token-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_4.png)

### Login with email and password

This type of login __ requests email and password__ so that the client can authenticate.

- If the customer already has an email and password, they just need to click on __Enter with email and password__, fill in the email, fill in the password and click on __Enter__.

- If the client needs to __register a password__, they must follow the steps below:
1. On the login screen, the user must click on __Login with email and password__;
2. On the next screen, the user should click on __Don’t you have a password? Register now!__ ![register-password-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_5.png)
3. The user must fill in their email and click on the button __Confirm__ ![fill-mail-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_6.png)
4. On the next screen, the user must enter their new password in the fields __New password__ and __Confirm new password__ and then click on the button __Create new password__  ![register-new-password-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_7.png)
5. __An access token will be sent to the email informed in the previous step__. If the customer does not receive the email, ask them to verify that they’ve typed the email correctly. In addition, the customer should check the junk mail to ensure that the access key has not fallen into the spam filter. The token has 6 numbers. ![code-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_8.png)
6. Return to the login screen and __enter the access key__ received in the previous step and then click __Change Password__ ![change-password-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication%20basics/how-can-my-customer-login-to-my-store_9.png)

### Social media login

Social media login options using your Google or Facebook accounts may also be added. Read our article on [Configuring login with Facebook and Google](/en/tutorial/configuring-login-with-facebook-and-google--tutorials_513) for more info.
