---
title: 'Customizing the Call center toolbar'
id: 1XEz1zqO3KyIuwC4asUsOg
status: PUBLISHED
createdAt: 2017-10-06T15:54:18.649Z
updatedAt: 2021-11-30T18:20:26.153Z
publishedAt: 2021-11-30T18:20:26.153Z
firstPublishedAt: 2017-10-06T15:55:58.368Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: customizar-a-toolbar-de-televendas
locale: en
legacySlug: customizar-a-toolbar-de-televendas
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class="alert alert-warning">It is not recommended changing the height of the toolbar element. If your store has a fixed header on top of the screen, it should receive the <code>top</code> css property with the necessary height not to overlap with the callcenter toolbar.</div>

The new callcenter toolbar can be customized with the styles of your store or using JavaScript. To overwrite the original styles of the toolbar, do the customization in a **.css** or **.js** file and load it into the page template.

To customize the toolbar styles, use the following classes:

```
.cc-toolbar //Most external element of the toolbar
.cc-user //Section with user email (operator)  
.cc-customer //Section with the personified customer's email
.cc-btn-login //Login button to personify customer
.cc-impersonate //Pop-up with input form for customer email
.cc-btn-change //Login button to change personified customer
```

To interact with the bar via JavaScript, use the following IDs as hooks to access its different elements in the DOM:

```
#vtex-callcenter //Most external element of the toolbar
#vtex-callcenter__user-email //Element with the user's email (operator)  
#vtex-callcenter__customer-email //Customer's email element
#vtex-callcenter__customer-email-input //Customer email input element
#vtex-callcenter__customer-login-submit //Customer email submit element
``` 

You can also interact with the toolbar using its public Javascript methods:

```
// Impersonate customer login
window.cc.impersonate(customer_email)
```

(Where `customer_email` is a string with the client's email address)


```
// Impersonate customer logout
window.cc.customerLogout()
```
(Returns `true` if you logout, returns `false` if there was no impersonated customer)
