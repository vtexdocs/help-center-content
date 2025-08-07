---
title: 'DPAN and FPAN: Understanding security in the online tokenized payment flow'
id: 3RM7RvhKZ057wja5xVEOqb
status: PUBLISHED
createdAt: 2023-06-19T16:55:51.107Z
updatedAt: 2023-06-26T13:27:44.965Z
publishedAt: 2023-06-26T13:27:44.965Z
firstPublishedAt: 2023-06-19T17:10:43.124Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: dpan-and-fpan-understanding-security-in-the-online-tokenized-payment-flow
legacySlug: dpan-and-fpan-understanding-security-in-the-online-tokenized-payment-flow
locale: en
subcategoryId: 
---

A token is a digital representation of a physical asset with commercial value. In the payment context, tokenization is a security procedure that allows you to protect sensitive customer data when processing credit cards, debit cards, or digital wallet transactions, such as Apple Pay, Google Pay, and Samsung Pay.

First, you need to understand the following information related to a card:

- **PAN (Primary Account Number)**: The number printed on the front or back of a debit or credit card used to identify an account holder and their issuing financial institution. It consists of 14 to 19 digits.

- **DPAN (Device Primary Account Number)**: Tokenized version of the PAN used in mobile payments or digital wallets. This number is linked to the user's mobile device (smartphone, smartwatch, tablet) and the cardholder account.

- **FPAN (Funding Primary Account Number)**: Account ID to which the amount paid in a payment transaction will be charged, used exclusively when the purchase is made through digital wallets or services that allow more than one payment method at the same time, such as different credit or debit cards or bank accounts.

Below is an example of a payment flow using tokens:

1. The customer enters the card information on a website, app, or machine or uses a digital wallet to pay for an order.

2. The payment provider or digital wallet system sends a request to the financial institution that issued the card, asking them to create a token to represent the PAN.

3. The bank generates the token (DPAN) and forwards it to the payment provider or digital wallet system. The PAN remains recorded only in the bank system.

4. During transaction processing, the payment provider sends the DPAN to the bank, requesting authorization for the transaction. When applicable, the FPAN is also generated and forwarded for transaction authorization.

5. The bank checks the relationship between the DPAN and PAN and authorizes the payment. If the FPAN is used, the bank will verify that the FPAN is valid and that the funding source (account) has enough funds before authorizing the payment.

6. The transaction is completed, and the merchant receives the payment confirmation. The physical card data (PAN) is not shared with the merchant or any third party, reducing the risk of fraud.

