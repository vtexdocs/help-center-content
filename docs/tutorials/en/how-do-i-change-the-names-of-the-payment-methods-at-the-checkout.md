---
title: 'Changing the names of payment methods at the checkout'
id: frequentlyAskedQuestions_428
status: DRAFT
createdAt: 2019-01-24T20:45:53.538Z
updatedAt: 2022-07-25T14:02:54.304Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:28.227Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slug: how-do-i-change-the-names-of-the-payment-methods-at-the-checkout
locale: en
legacySlug: how-do-i-change-the-names-of-the-payment-methods-at-the-checkout
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

All methods for changing the name or description of the payment methods are carried out by the CSS of your store entered at checkout.
The customization of the CSS is the responsibility of the agency hired by the store for that purpose.
However, several simple ways for changing these exist and are described below.

- **To change the name of payment method**: can be done using the [image-replacement](http://css-tricks.com/css-image-replacement/) technique;
- **To change the description of the payment method**: enter the following code on your CSS:
 
`.bankInvoicePaymentGroup .payment-description { font-size: 0; }.bankInvoicePaymentGroup .payment-description:after { font-size: 13px; content: "{Text here}" }`

- **To change the name of the delivery phase**: enter the following code on your CSS:

`.shipping-data .accordion-toggle span { font-size: 0: }.shipping-data .accordion-toggle span:after { content: "{Text here}"; }`
