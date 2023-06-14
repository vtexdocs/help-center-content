---
title: Payments - Overview
id: tutorials_458
status: DRAFT
createdAt: 2017-04-27T22:03:42.658Z
updatedAt: 2023-03-30T15:13:19.482Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:26.882Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: pci-gateway-overview
legacySlug: pci-gateway-overview
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

**Payments** is the module responsible for mediating and managing all transactions and payments between your VTEX store, the financial operators and their clients. In it, you can perform consultations, such as status of transactions, chargebacks, cancellations, settlements, and also configurations, such as in the conditions for payment methods.

# Starting to use

![new-admin-payments](https://images.ctfassets.net/alneenqid6w5/7w2PFtni9ykY0qGuasgU84/32d9c5341fb170a8b02abbea0ee3c628/NEW_ADMIN_PAGAMENTOS_EN.png)

Designed to provide maximum flexibility when it comes to payment configurations, VTEX Payments module processes transactions based on some business concepts. Understand each one:

## Transactions

All orders in which payment is transacted by VTEX, even those that are not authorized, are recorded on Payments. In its main interface, we have all the transactions listed, from the most recent to the oldest.

- http://help.vtex.com/en/tutorial/how-to-view-transactions-on-pci-gateway/

## Bank Reconciliations

That's the place where the selleer can approve batch payments of orders closed with the bank slip option. This is possible through the upload of a _.RET_ file, in CNAB 240 and CNAB 400 formats, that is provided daily by the bank, containing the information related to the identification of the slip, our number (which is the order code), date and payment value.

- http://help.vtex.com/en/tutorial/bank-reconciliations/

## Gift Card
The voucher registered in **Gift card** is like an extra option of payment; vouchers are configured with a pre-determined cash value and are used to discount the order value at the store. They may or may not be reusable, rechargeable and restricted to a particular store customer.

- http://help.vtex.com/en/tutorial/how-to-configure-gift-cards

## Settings 

### [Payment Conditions](/en/tutorial/how-to-configure-payment-conditions)

That's where the payment methods and their respective behavioral configurations are defined; For example, you can set which credit card will offer a certain number of installments, with or without interest, for a defined period, to be applied according to a commercial policy and/or specific commercial condition.

Not all forms of payment will necessarily be configured taking into account each of these conditions. They are customizable, according to the needs of each store.

### [Custom Payments](/en/tutorial/how-to-configure-a-customized-payment)

The customized payment methods allow you to create up to 15 new payment methods to configure a payment condition. In other words, imagine that your store wants to offer payment with cash as a payment option. To enable it, you need to configure one of the available customized payments. These payment methods are separated into 3 categories. Each category allows 5 configurations.

### [Gateway Afilliations](/en/tutorial/registering-gateway-affiliations/)

A Gateway Affiliation is a set of configurations that represents your contract with a payment gateway of your choice. With this feature it becomes possible to decide, with a lot of flexibility, which payment gateway will process the different types of transactions of your VTEX store.

### [Alternative Accounts](http://help.vtex.com/en/tutorial/setting-up-alternative-accounts)

Alternative accounts are a functionality developed to enable the payment for products delivered by a specific dock to be sent to various subaccounts.

*Alternative Accounts won't receive any more support and will be discontinued soon. You can replace it with the Franchise Accounts and Sellers White Label features. Learn more about them on [this VTEX Help article]*(http://help.vtex.com/en/tutorial/setting-up-alternative-accounts).

### [Notifications](/en/tutorial/how-to-configure-notifications/)

The notification area on Payments is responsible for the registration of the email where you will receive all payment notifications, such as a chargeback that needs to be performed manually, for example.
