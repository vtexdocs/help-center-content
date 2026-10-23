---
title: 'Financial agents in the payment flow'
createdAt: 2017-10-11T19:08:49.654Z
updatedAt: 2026-10-01T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: financial-agents-in-the-payment-flow
locale: en
hidden: false
---

In this article, you'll learn about the financial agents involved in the payment flow on VTEX: gateway, acquirer, sub-acquirer, card network, issuing bank, and anti-fraud solution.

These concepts apply to the entire Payments module, but the complete sequence of all six agents describes the **credit card** flow. The other payment methods use only part of these roles: the gateway acts on methods processed by the platform, and the card network acts only on card transactions.

## Gateway

A gateway (also called payment gateway) is a **system that transmits data from purchases made in your store at checkout**.

It's the first agent in the flow. It sends the payment information to acquirers, card networks, and issuing banks, and receives a response confirming or canceling the purchase.

The gateway acts as a terminal, centralizing the transactions between the agents in the flow, both for card payments and for other methods configured in your store, such as boleto and Pix (Brazilian payment methods).

By activating the [connectors](/en/docs/tutorials/what-is-the-connector) and registering [payment and anti-fraud providers](https://help.vtex.com/en/docs/tutorials/registering-gateway-affiliations), your customers' purchase data can be sent to acquirers or other gateways, thereby moving through the approval flow at financial institutions.

The VTEX platform has its own [PCI](/en/docs/tutorials/what-is-the-pci-ssc) certified gateway, which means that data from any payment made in your store is protected according to the highest security standards.

## Acquirer

An acquirer (also called an acquiring bank) is a company that specializes in processing payments, meaning it processes credit or debit card payments on behalf of a merchant. Through its network of accredited partners (or acquiring network), it enables a store to offer various payment conditions to its customers.

The acquirer receives the payment information, processes it, and passes it to the [card network](#card-network) (when the payment method is a credit card) and the [issuing bank](#issuing-bank). Examples of acquirers include Rede, Cielo, GetNet, and Stone.

To receive payments, your store needs to communicate with an acquirer. This is done through a [gateway](#gateway), which must be configured to process the [payment conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

When a purchase is authorized by other agents in the purchase flow, the acquirer transfers the funds (which the issuing bank receives from the customer) to your store's account.

## Sub-acquirer

A sub-acquirer is the company that processes payments and transmits the data to other agents in the flow. Its role is similar to that of an acquirer, but it doesn't fully replace one because it lacks the autonomy to perform all acquirer functions.

You can think of the sub-acquirer as an intermediary between the acquirer and your store. Examples of sub-acquirers include PagSeguro and PayPal.

The main advantages of a sub-acquirer are its low implementation cost, its own anti-fraud system, and ease of integration, which makes this a very attractive solution for small stores. On the other hand,  the choice of using the sub-acquirer may jeopardize the retailer's profits because of the high rates charged for each transaction (greater than the acquirers).

Another negative factor for retailers is the redirection of customers to the sub-acquirer's page during the final steps of checkout, which can lead to higher cart abandonment rates.

## Card network

Card networks set the business rules for credit card purchases, such as the number of installments a customer can split a payment into and the merchants that accept the card domestically and abroad. They also set the standards that acquirers follow to process these transactions, and each card network has its own rules. Examples of card networks include Mastercard, American Express, and Visa.

These networks maintain close relationships with acquirers to ensure their credit cards are accepted at establishments. They therefore promote the use of credit cards and broaden the user base.

In the [credit card payment flow](/en/docs/tutorials/credit-card-basic-payment-flow), the network receives purchase information from the acquirer for a purchase made in your store. It then validates the conditions (such as the number of installments) and sends the data to the issuing bank, which verifies that the customer has sufficient limit available. Hence, the card network both regulates card use and acts as a bridge between the acquirer and the customer's bank.

## Issuing bank

The issuing bank is the financial institution that issues payment methods, such as credit and debit cards. Upon receiving purchase data from your store, it authorizes or denies the sale based on the customer's available credit limit or balance. Once the sale is authorized, the bank completes the charge.

This is important because you can set up [special conditions](/en/docs/tutorials/special-conditions) for payments made through specific banks.

## Anti-fraud solution

An anti-fraud solution is a system that analyzes purchases made on websites to identify fraudulent transactions.

It collects data about customer behavior and compares it with suspicious patterns to approve or deny the order. The anti-fraud solution adds an extra layer of security to your store.

On VTEX, the payment operator approves the purchase first, and the anti-fraud solution then evaluates the order. If the order is approved, it follows its normal flow. Examples of anti-fraud solutions include ClearSale and Konduto.

To enable an anti-fraud solution in your store, see [Configuring the anti-fraud](https://help.vtex.com/docs/tutorials/how-to-configure-the-anti-fraud).

## Payment flow sequence

The following sequence describes the credit card flow:

1. At checkout, the customer chooses credit card as the payment method.
2. The checkout sends the payment information to the gateway.
3. The gateway forwards the information to the acquirer or sub-acquirer.
4. The acquirer sends the data to the card network, which validates the card rules, such as the number of installments.
5. The card network sends the information to the issuing bank, which performs the credit analysis, checks the available limit, and authorizes or denies the payment.
6. The issuing bank's response follows the reverse path back to the gateway, which registers the payment as pre-authorized.
7. If the anti-fraud solution is part of the flow, the gateway informs it that the payment was pre-authorized, and it responds with approval or denial. If the anti-fraud solution denies it, the payment is canceled.
8. Upon final approval, the gateway informs your store that the payment was approved, and the acquirer completes the financial settlement, transferring the funds to your store's account.

### Local payment methods in Brazil

The flow formed by the gateway, acquirer, card network, and issuing bank doesn't apply to all payment methods. In Brazil, for example:

- **Registered boleto:** The flow doesn't have an acquirer or a card network. The gateway requests the boleto registration from the bank, which issues the invoice and sends the information back to the gateway. After the customer pays the boleto directly to the bank, the bank sends the gateway the bank reconciliation files with the payment status. See [Registered Ticket - Basic payment flow](https://help.vtex.com/docs/tutorials/registered-ticket-flow).
- **Pix:** Processing depends on a payment partner integrated with VTEX, such as a bank, acquirer, or gateway. At checkout, this partner sends the QR code via the API, and VTEX displays it for the customer to complete the transaction with their financial institution. See [Pix: FAQ](/en/docs/tutorials/pix-faq).

> ℹ️ The choice of agents and payment methods depends on your operation's needs. Evaluate your business's variables before defining your store's financial flow.

## Next steps

- [Register payment and anti-fraud providers](/en/docs/tutorials/registering-gateway-affiliations)
- [Configuring payment conditions](/en/docs/tutorials/how-to-configure-payment-conditions)
- [Configuring the anti-fraud](https://help.vtex.com/docs/tutorials/how-to-configure-the-anti-fraud)
