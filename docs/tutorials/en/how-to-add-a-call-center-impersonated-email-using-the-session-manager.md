---
title: 'How to add a telesales impersonated email using the Session Manager'
id: 4tT90hWRChUy84UClF8pC
status: DRAFT
createdAt: 2020-05-29T13:00:15.053Z
updatedAt: 2022-08-04T22:34:08.245Z
publishedAt: 
firstPublishedAt: 2020-05-29T13:11:22.057Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: how-to-add-a-call-center-impersonated-email-using-the-session-manager
legacySlug: how-to-add-a-call-center-impersonated-email-using-the-session-manager
subcategory: dajK0sARX2c0MISKKoGoc
---

For B2B operations, it is essential that telesales operators are able to conclude purchases on behalf of customers, "impersonating" them. This is because, in this scenario, it is a common practice for sales to be made on the platform, but not directly by the customer.

In order to allow this type of selling, VTEX offers the telesales feature, through which an operator "takes the place" of the final customer during the process of choosing the products and the checkout. The operator takes over the customer's user, with limited permissions, and is able to make purchases.

## Telesales Toolbar 

The most simple way to use the telesales feature is through the __telesales toolbar__. It is a top bar that appears on the store's front-end once the registered operator logs in to the store environment. It is displayed in all areas of the site, except on the My Orders screen.

These are the steps required to use the telesales toolbar:
- [Create a telesales user.](https://help.vtex.com/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227)
- [Make a purchase via telesales.](https://help.vtex.com/tutorial/comprar-em-nome-do-cliente-pelo-televendas--4gsnClNy1iUCkSK6y0GI2O)
- [Customize the telesales toolbar.](https://help.vtex.com/tutorial/usando-e-customizando-toolbar-de-televendas--tutorials_5500)

## Session API 

Although the telesales toolbar is the simplest option to allow "impersonated" purchases, you can use the Session Manager API to achieve the same effect, but with greater control by the store.

[Session Manager](https://help.vtex.com/tutorial/using-session-manager-to-track-browsing-sessions-in-vtex-stores--1pA0tqsD4BFnJYhQ7ORQBd) is a system that tracks the current browsing session of all end customers in VTEX’s stores. Its API allows the store to gather relevant session information, which is automatically captured and stored in a safe and easily accessible location.

For more complex B2B operations, it may be interesting to build an integration directly with the Session Manager API. In this case, instead of impersonating the customer through the telesales toolbar, the store inserts the email address of the customer to be impersonated into the Session Manager’s information. 

If the session’s administrator has permission to impersonate customers, impersonated users’ ID and email will be loaded into the session, and the operator can make purchases on their behalf.

### Installing the vtex.impersonate-session app 

Session is made up of JSON objects, which are fed with information from a series of apps installed in the store. One of these apps is the `vtex.impersonate-session`, and it allows impersonating customers.

This app is not installed by default in VTEX stores. So, first of all, you need to install it. For this, you must use VTEX’s CLI. If it is not yet installed on your computer, install it by using the command below on your terminal:

`yarn global add vtex`

For more details about VTEX’s CLI, see our [VTEX IO Toolbelt documentation](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-toolbelt).

Once the CLI is installed, log into your store using the following command:

`vtex login`

Now, let's install the `vtex.impersonate-session` app. Type the following command:

`vtex install vtex.impersonate-session`

The app is already installed in your store and the customer impersonation feature has been enabled.

### Using Session Manager to impersonate customers

The `vtex.impersonate-session` app, just like all apps that have session dependencies, monitors changes to their inputs and modifies session parameters through their outputs.

It receives the `vtex-impersonated-customer-email` parameter through a direct POST or a cookie and tries to impersonate the user who owns this email by using the administrator’s credentials in the session. If these credentials are allowed to impersonate customers (in other words, if the operator has the telesales role), the ID and e-mail of the impersonated user are loaded into the session.

These are the call’s inputs:
- __public__: `vtex-impersonated-customer-email`
- __cookie__: `vtex-impersonated-customer-email`
- __authentication__: `adminUserEmail`

And these are the outputs returned by the app:

- __impersonate__: `storeUserId`, `storeUserEmail`, `canImpersonate`, `account`

Let's see an example of an object sent in the request:

```json
{
    "public": {
        "vtex-impersonated-customer-email": {
            "value": "client@gmail.com"
        },
        "authentication": {
            "value": "operator@gmail.com"
        }
    }
}
```

And here’s an example of body of the answer:

```json
"public": {
            "vtex-impersonated-customer-email": {
                "value": "client@gmail.com"
            },
            "authentication": {
                "value": "operator@gmail.com"
            }
        },
        "impersonate": {
            "canImpersonate": {
                "value": "true"
            },
            "account" : {
                "value": "myStore"
            }
        }
```
