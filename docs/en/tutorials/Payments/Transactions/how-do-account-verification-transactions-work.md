---
title: 'How do account verification transactions work?'
id: 6O51eUDbChBEFPw9oInUtm
status: PUBLISHED
createdAt: 2025-05-30T11:53:10.874Z
updatedAt: 2025-05-30T20:16:25.955Z
publishedAt: 2025-05-30T20:16:25.955Z
firstPublishedAt: 2025-05-30T20:16:25.955Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: how-do-account-verification-transactions-work
legacySlug: how-do-account-verification-transactions-work
locale: en
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Whenever a customer adds a new credit card to their [My Account page](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh#credit-cards), the financial institution or card issuer creates a test transaction to validate the card’s use at that store.

This transaction is for $1.50 and can be identified by the letters __AV__ (Account Verification), followed by a number.

You can see an example of an account verification transaction in the VTEX Admin, under __Orders > Transactions__.

![Transação av en](//images.ctfassets.net/alneenqid6w5/2JzA7ef5RiZd0lHXuFAouW/90049a40a6379ea4f247cf79ede9785f/transaÃ_Ã_o_av_en.png)

<div class="alert alert-warning">
Once the financial institution or card issuer validates the card details, the payment transaction is automatically canceled, and the $1.50 is refunded. The customer is not charged.
</div>
