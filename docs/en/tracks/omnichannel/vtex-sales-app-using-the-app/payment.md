---
title: 'Payment'
id: 2xxwfe7UQhd33nPTIRF9Yw
status: PUBLISHED
createdAt: 2021-08-05T14:37:01.824Z
updatedAt: 2025-11-12T14:45:11.158Z
publishedAt: 2023-05-31T14:45:11.158Z
firstPublishedAt: 2021-08-05T14:46:59.026Z
contentType: trackArticle
productTeam: Shopping
slugEN: payment
locale: en
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: vtex-sales-app-using-the-app
order: 15
---

In the VTEX Sales App payment step, the sales associate will see the [payment options that have been configured](/en/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) for your store.

The top bar of the payment screen displays the following options:

* **Share:** share a payment link with the customer.
* **Coupon:** add a discount coupon.
* **Gift Card:** add a gift voucher to the order.
* **Document number:** change the document number that will appear on the order's Invoice.

VTEX Sales App allows you to select multiple payments. For example, by choosing **Cash** and then clicking on `Add another payment`, the sales associate can make part of the charge in cash and part in credit or debit card.

To proceed, the sales associate must select one or more payment methods and then click `Complete sale`.

## Payment methods available

During VTEX Sales App configuration, you can add the following payment methods:

* [Cash](#cash)
* [Pix (Brazil)](#pix-brazil)
* [Boleto (Brazil](#boleto-brazil))
* [Credit card](#credit-card)
* [Debit card](#debit-card)

To configure a payment method, follow the [VTEX Sales App - Payments](/en/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy) track instructions.

### Cash

The customer must select the **Cash** option and click `Complete Sale`.

Then, you must complete the transaction with the sales associate. Depending on the store's configuration, it can be either [manual or automatic](/en/docs/tracks/invoicing-an-order).

### Pix (Brazil)

The customer must select **Pix** and click `Complete Sale`.

After completing the sale, the QR Code will be displayed on the VTEX Sales App screen. The customer must scan it using their phone to proceed with payment.

After payment, the sale will be processed and confirmed on the order page, as shown in the image below.

### Boleto (Brazil)

The customer must select **Boleto** and click `Complete Sale`.

The boleto will be sent to the customer by email. Once the boleto payment is confirmed, so is the purchase.

### Credit card

The customer must select the **Credit Card** option, choose the number of installments for the purchase, and click `Complete Sale`.

VTEX Sales App will display a waiting screen while the payment is made though the store's card machine. Once the system accepts the payment, the transaction will be confirmed.

### Debit card

The customer must select **Debit Card** and click `Complete Sale`.

VTEX Sales App will display a waiting screen while the payment is made through the store's card machine. Once the system accepts the payment, the transaction will be confirmed.
