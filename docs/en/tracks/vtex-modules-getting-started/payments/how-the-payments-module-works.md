---
title: 'How the payments module works'
id: kdPbEIWf8Xq8tESQvViMB
status: PUBLISHED
createdAt: 2019-11-13T18:30:00.279Z
updatedAt: 2024-07-24T18:38:45.637Z
publishedAt: 2024-07-24T18:38:45.637Z
firstPublishedAt: 2019-11-21T22:49:51.417Z
contentType: trackArticle
productTeam: Financial
slugEN: how-the-payments-module-works
locale: en
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: payments
order: 1
---

The **Payments** module is the system responsible for managing all actions regarding your store's cash flow.

Before we explore the features within VTEX Admin *Payments*, let's clarify some important concepts regarding the payment flow of an order. This process is performed by some actors within the Brazilian financial system, which make up the Payments module architecture.

> ℹ️ It is important to remember that each store has its own particularities and its own operation, which influence how to build your business' Payment module. To set up your cash flow, it is therefore crucial to keep in mind the real needs and purposes of the retailer and of the desired project.

## Gateway 

A gateway (also called a payment gateway) is a system that transmits the data of purchases made in your store at checkout.

As the first player in the flow, it is responsible for sending the payment information - received at checkout - to the financial actors included in the payment flow sequence (such as acquirers, card brands, and issuing banks).

Then it gets a response on the payment approval and continuation of the purchase flow, or its cancellation.

As intermediaries between an e-commerce and its means of payment, **gateways** act as a terminal, integrating  all transactions made between players in the payment flow in one place.

Gateways examples: Pagar.me and Stripe.

## Acquirer 

An acquirer is a _company that specializes in processing payments_, meaning financially settling a store's transactions using credit and debit cards.

Through its network of accredited partners (or acquiring network), it enables a store to offer various payment conditions to its customers. In practice, the **acquirer** receives payment information, processes it and passes it on to the card brand and issuing bank.

When everything is in order and a purchase is authorized by the other players in the purchase flow, the acquirer is responsible for transferring the amounts (charged from the customer by the issuing bank) to your store account.

Acquirers examples: Rede, Cielo, GetNet and Stone.

## Sub-acquirer  

A sub-acquirer is a company that processes payments and transmits the generated data to the other players involved in the payment flow.

As a facilitator, its role is similar to that of an acquirer, but it does not completely replace it because it lacks the autonomy to perform all of an acquirer's features.

Therefore, the **sub-acquirer** can be considered an middleman between acquirer and store.

Sub-acquirers examples: Paypal and PagSeguro.

To learn more about the [advantages and disadvantages of including a sub-acquirer in your flow](https://help.vtex.com/en/tutorial/difference-between-acquires-sub-acquirers-and-gateways--1dyPJ3gQCCO4ea2o6OMgCi), check out our article.

## Card brands
Card brands are companies that are responsible for defining the business rules for purchases made with credit cards_, such as the number of installments you can split a payment on and the facilities in which it is accepted, nationally and internationally.

They set the standards by which acquirers must process transactions made through this payment method.

In the credit card payment flow, the **brand** receives information from the acquirer about the purchase made in its store, validates the conditions and sends the data to the issuing bank, which checks if the buyer has available credit.

Thus, the brand serves both to regulate the use of the card and as a bridge between the acquirer and the bank.

Card brands examples: Mastercard, American Express and Visa.

## Issuing banks
An issuing Bank is a financial institution that is responsible for the means of payment, whether they are "boleto" (popular Brazilian off-line payment method), debit or credit cards.

Upon receiving the data from a purchase made in your store, it will authorize the sale or not, depending on the credit limit or the money available in the user account.

At VTEX, you can configure special conditions for payments made through specific **banks**, a feature that we will explore later.

Issuing banks examples: Itaú, Santander, Bradesco and Citibank.

## Anti-fraud
Anti-fraud is a system specialized in analyzing purchases made on websites in order to identify fraudulent transactions.

It collects data on user behavior and compares it with suspicious standards, to then approve or deny the order. Thus, **anti-fraud** adds an extra layer of security to your store.

Anti-fraud examples: ClearSale and Konduto.

## PCI SSC certification
PCI Security Standards Council is an open global forum for the continued development, enhancement, storage, dissemination and implementation of data protection security standards.

[The VTEX platform has its own **PCI-certified** gateway](https://help.vtex.com/en/tutorial/what-is-pci-ssc--4jo3Vkox3amSO2w4qIWa0E "PCI SSC"), meaning that data from all payments made in your store is protected according to the highest security standards.

If you want to learn more about the concepts of gateway, acquirer, sub-acquirer, brand, issuing banks and anti-fraud, check out our [article on financial agents in Brazil](https://help.vtex.com/en/tutorial/financial-agents-explained--1dyPJ3gQCCO4ea2o6OMgCi).

