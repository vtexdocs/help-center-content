---
title: 'Customizing the Checkout Confirmation pages'
id: 7CbAZNHGI8uUO8aSgWmcsS
status: ARCHIVED
createdAt: 2017-05-22T22:44:50.173Z
updatedAt: 2022-07-22T15:26:35.097Z
publishedAt: 
firstPublishedAt: 2017-05-23T12:17:01.180Z
contentType: tutorial
productTeam: Shopping
author: authors_6
slugEN: customizing-the-checkout-confirmation-pages
locale: en
legacySlug: customizing-the-checkout-confirmation-pages
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

![Página de confirmação de pedido (Order Placed)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png) 

The new My Orders section comes with a new Order Placed page, which now integrates **Checkout Confirmation**, feature responsible for confirmation pages.

As well as the Order Placed, another page is the Order Confirmation, wich shows the confirmation for changed orders (part of the new Order Substitution workflow).

### HTML templates

As in previous versions, the Order Placed (as well as the Order Changed) page accepts **HTML templates**:

![Página de confirmação de pedido com imports de HTML](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

To add your code to these templates, all you have to do is access the Portal module and, in the **Code** tab, edit the following files:

 - **checkout-confirmation-bottom**
 - **checkout-confirmation-footer**
 - **checkout-confirmation-header**
 - **checkout-confirmation-top**

It's important to notice that the customization with templates is the same for Order Placed and Order Confirmation.

![Página do Portal v2 com arquivos de template corretos destacados](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

### Customizing styles

>⚠️ All these forms of customization may be changed in the future. By using them, you understand that your store must track platform updates so that your customization continues to function properly.

You can also edit the Checkout Confirmation interface via CSS classes. Your styles should be added in a `<style>` tag in one of the HTML templates loaded on the page.

![Página de OrderPlaced do Checkout Confirmation com classes de customização marcadas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

To customize the Checkout Confirmation styles, use the following classes:

```
.cconf-alert // Confirmation alert
.cconf-client-email // Element that carries customer's email
.cconf-address // Card with order address
.cconf-payment // Card with payment method
.cconf-summary // Card with order summary
.cconf-product-table // Table with product's orders
.cconf-product // Table's line with order
.cconf-continue-button // Button leading back to the store
```

### JS customization

The page may also be changed through Javascript by using the file **checkout-confirmation-custom.js**, which you can find in the Portal module.
