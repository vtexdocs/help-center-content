---
title: 'What is the role of financial agents in the payment flow of an application in Brazil?'
id: 1dyPJ3gQCCO4ea2o6OMgCi
status: PUBLISHED
createdAt: 2017-10-11T19:08:49.654Z
updatedAt: 2024-03-18T18:55:40.724Z
publishedAt: 2024-03-18T18:55:40.724Z
firstPublishedAt: 2017-10-11T19:34:43.203Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil
legacySlug: what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

It is common for customers to be in doubt about the payment methods used during an order's payment flow.

In this article, we will clarify the concepts of acquirer, sub-aquirer, gateway, credit card brands, issuing bank and anti-fraud, as well as their role in an order's flow. 

## Gateway

A gateway (also called payment gateway) is a __system that transmits data from purchases made in your store at checkout__.

As the first player in the flow, it's responsible for sending this information to acquirers, card brands and [issuing banks](/en/docs/tutorials/what-is-the-issuing-bank) then obtain a response about the continuation of the process or its cancellation. In other words, the gateway sends data and receives responses so that you know whether or not a particular purchase should be confirmed, showing whether the payment was approved or not. 

As an intermediary between an e-commerce and its payment method used, the gateway acts as a terminal, integrating in all the transactions carried out between the players of the payment flow in a single place.

By activating the [connectors](/en/docs/tutorials/what-is-the-connector) and registering [payment and anti-fraud providers](https://help.vtex.com/docs/tutorials/registering-gateway-affiliations), your client's shopping data can be sent to acquirers or other gateways and thus move on through the approval flow in financial institutions. 

VTEX platform has its own [PCI](/en/docs/tutorials/what-is-the-pci-ssc) certified gateway, which means that data from any payment made in your store is protected according to the highest security standards.

## Acquirer

An acquirer (also called a creditor) is a __company that specializes in processing payments__, meaning that it processes credit or debit card payments on behalf of a merchant.  Through its network of accredited partners (or acquiring network), it enables a store to offer various payment conditions to its customers.

The acquirer receives the payment information, processes it and passes it to the [card brand](/en/docs/tutorials/what-is-a-credit-card-brand) (when the payment method is credit card) and the [issuing bank](/en/docs/tutorials/what-is-the-issuing-bank). Some examples of acquirers are: Rede, Cielo, GetNet and Stone.

For your store to be able to receive payments, you must enable its communication with an acquirer. This is done through a [gateway](/en/docs/tutorials/what-is-a-payment-gateway), which must be configured to process the [payment conditions](/en/docs/tutorials/how-to-configure-payment-conditions). With that, purchases can follow the approval flow.

When everything is in order and a purchase is authorized by the other players within the purchase flow, the acquirer is responsible for transferring the values (which the issuing bank receives from the customer) to the account of your store.

## Sub-acquirer

A sub-acquirer is a company that processes payments and transmits the generated data to the other players involved in the [payment flow](/en/docs/tutorials/credit-card-basic-payment-flow). Its role is similar to that of an acquirer, but it doesn't completely replace it due to the lack of autonomy to perform all the funcilnatilies of an acquirer. 

A sub-acquirer can therefore __be understood as a kind of intermediary player between acquirer and store__. Some examples of sub-acquirers are: PagSeguro e Paypal.

The main advantages of a sub-acquirer are its low implementation cost , own anti-fraud system and ease of integration which makes this a very attractive solution for small stores. On the other hand,  the choice of using the sub-acquirer may jeopardize the retailer's profits because of the high rates charged for each transaction (greater than the acquirers). 

Another negative factor for retailers is the redirection of the customer to the sub-acquirer's own page during the final steps of the checkout, which can lead to higher withdrawal rates.

## Credit Card Brand

Card brands are companies responsible for defining the business rules for purchases made using a credit card, such as installments or which national and international stores accept that particular card. They are the ones who define the standards by which the [acquirer](/en/docs/tutorials/what-is-an-acquirer) must process the transactions carried out by this payment method (each brand has its own rules). Some examples of card brands are: Mastercard, American Express and Visa. 

These brands keep a close relationship with the acquirers to guarantee the acceptance of their credit cards in establishments. They therefore promote the use of credit cards and broaden the user base.

In the [credit card payment flow](/en/docs/tutorials/credit-card-basic-payment-flow), the brand receives the information of the purchase made in your store from the acquirer. It then validates the conditions (such as the number of installments) and sends the data to the issuing bank, which verifies that the buyer has sufficient limit available. Hence, the card brand serves  to both regulate the use of the card and as a bridge between the acquirer and the consumer's bank.

## Issuing Bank

The issuing bank is the financial institution responsible for the payment method, be it by bank slip, debit or credit card. It is the one who, when receiving the data of a purchase made in your store, will either authorize the sale or not (depending on the  available credit limit or available monetary resources in the user's account). If everything is OK, the bank collects the value.

This concept is important because it allows you to set up [special conditions](/en/docs/tutorials/special-conditions) for payments made through specific banks. In addition, for registered payment tickets, each bank has its own form of issuance.

## Anti-fraud

Anti-fraud is a system specialized in analyzing the purchases made on websites, in order to identify fraudulent transactions.

It collects data about the behavior of users and compares them with suspicious patterns to then approve or deny the order. The anti-fraud therefore adds an extra layer of security to your store.

At VTEX, the payment operator first approves the purchase and then the anti-fraud assesses the order. If everything goes OK, it follows its normal flow. Some examples of anti-fraud are: ClearSale and Konduto. 

> ℹ️ It is important to emphasize that each business depends on specific factors that influence the decision of which modality to use. There are several variables that can determine the choice of a payment method and what your financial flow will be. It is critical, therefore, to keep the actual needs and purposes of the retailer and desired project in mind.
