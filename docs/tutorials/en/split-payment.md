---
title: Split Payment
id: 6k5JidhYRUxileNolY2VLx
status: PUBLISHED
createdAt: 2021-04-06T20:03:53.443Z
updatedAt: 2023-04-24T19:09:31.016Z
publishedAt: 2023-04-24T19:09:31.016Z
firstPublishedAt: 2021-04-07T18:57:19.713Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: split-payment
legacySlug: split-payment
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">
This is a marketplace payment solution.
</div>

To guarantee that our marketplace clients automatically divide the payment between all sellers, set a commission based on a fixed percentage, and stay compliant with the current regulations, VTEX offers the __Split Payment solution__.

When a shopper adds multiple products of multiple sellers in the same shopping cart and pays for them in a unified checkout experience, VTEX automatically splits that payment so every party can get their share directly into their bank account.

However, this amount may or may not be equally divided among recipients. The distribution is done according to the seller's predefined conditions and the commissions taken by the marketplace. When configured, the Split Payment allows the amount paid for an order to be automatically divided between [sellers](https://help.vtex.com/tutorial/what-is-a-seller) and [marketplaces](https://help.vtex.com/en/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8).

You can configure split payment in two different ways: [Payout Split](https://help.vtex.com/en/tutorial/split-payment#payout-split) and [Transaction Split](https://help.vtex.com/en/tutorial/split-payment#transaction-split). Both types of Split Payment have some differences that might be taken into consideration before choosing between them. 

| Characteristics    | Payout Split     | Transaction Split     |
| ---------- | ---------- | ---------- |
| __Payment provider__       | Payment provider of the marketplace       | Payment provider of the seller.       |
| __Number of transactions__       | Only one transaction       | One transaction to each seller       |
| __Number of purchases in the customer’s credit card statement__       | Only one       | One purchase to each seller. <li>*This fact may lead to misunderstandings and increase disputes and chargebacks*.</li>       |
| __Fees negotiation__  | Marketplace will be responsible for negotiating all fees. <li>In scale, this can be positive to increase bargain power.</li>       | Marketplace will be responsible for negotiating all fees. In scale, this can be positive to increase bargain power.       |
| __Anti fraud assessment__      | As only one transaction is generated, the entire order is assessed by one anti-fraud.       | As multiple transactions are generated, each of them run into a different analysis. If one transaction is denied, all others are automatically denied as well       |
| __Payment providers integrated__       | Information available in the [List of Payment Providers by Country](https://help.vtex.com/en/tutorial/list-of-payment-providers-by-country--2im3BEGXxSAcRuxEaIHPvp) | All payment providers integrated to VTEX.       |
| __Cost__       |Costs according to the negotiated fee. <ul><li>Usually costs more than non-split transactions.</li><li>Carts that only have marketplace products, will still be processed taking into consideration the negotiated fee, potentially increasing cost.</li></ul>       | No additional costs, VTEX clients will only be responsible for their usual fees with payment providers       |
| __Checkout Experience__       | No limitations regarding payment methods and payment conditions. Those will be defined by the marketplace. <ul><li>The payment provider must also support Split in specific payment methods (Pix, for example). Nowadays our partners support split with one or two credit cards, debit cards and boleto (Brazil).</li></ul>      | Only displays payment methods accepted by all sellers fulfilling the order. In other words, payments by credit card, cash or card promissory (promissories that can be splited), will only be available if all sellers involved in the order accept them. Incompatible with:<ul><li>Boleto (Brazil).</li><li>Pix (Brazil).</li></ul><ul><li>Cards with 3DS2 or any authentication.</li></ul> |
| __Ideal for__       | <ul><li>Marketplaces that want to charge automatic commissions, avoiding the risk of delinquency.</li><li>Marketplaces whose sellers do not have a payment provider.</li></ul><ul><li> Marketplaces that want to have more control over the payment flow of sellers.</li><li> Marketplaces that want to process transactions with Pix (Brazil), boleto (Brazil) and credit cards with 3DS2 or any other authentication.</li></ul>       | <ul><li> Marketplaces that don't want to be merchants of record (common for B2B businesses from Europe and the United States).</li><li> Cases in which the seller has more decision power than the marketplace and only accepts that the payment is processed by their own payment provider.</li></ul><ul><li> Marketplaces that have urgency to implement split and do not have partners supporting split in their countries.</li><li>Marketplaces that don't want to have all the chargeback risks.</li></ul>       |
| __Benefits__ | <ul><li>Marketplaces automatically define commissions.</li><li>Optimized experience: only one purchase in the credit card statement.</li></ul><ul><li>Marketplace gains more control over the payment flow.</li><li>Compatible with Pix (Brazil), boleto (Brazil) and cards with 3DS2 or any authentication.</li></ul><ul><li>The marketplace can define payment methods that are applicable to any order, no matter the sellers involved.</li></ul>       | <ul><li>More flexibility for each seller to choose their anti-fraud provider.</li></ul><ul><li>Payment settlement can occur at different times for each participant.</li><li>Marketplace is not liable for chargebacks.</li></ul>|

## Payout Split

This split payment model enables marketplace clients to gain more control and visibility over payouts and commissions. And grants more control over the payment flow as VTEX holds the seller's payment until the order is invoiced.

Marketplaces can indicate how the purchase amount should be split and which percentage is reserved for the marketplace itself defining automatic commissions per total cost of products, freight, or SKU's category for each seller with the transaction being processed only by the marketplace payment provider who will be responsible for paying out each seller.

For example, a shopper adds two products to the same shopping cart. One of them will be fulfilled by the marketplace itself and the other one belongs to a seller called Seller A. However, only one transaction is generated, meaning that the end consumer will only see one line in the credit card statement. 

__The payment is distributed as follows:__

![Payout Split](//images.ctfassets.net/alneenqid6w5/2Pqz4t4XkfA1WGZOi1VCX0/1694e5c9947473a360e50010881fee70/PAYOUT.png)

As you can see, our Gateway calculates and distributes payouts for each recipient when the order is invoiced and sends that info to the payment provider. The distribution is done according to the amount destined to each merchant in the order and the commissions taken by the marketplace.

![Receivables](//images.ctfassets.net/alneenqid6w5/1rJ1dG3TMX9UqjPr5H4GMR/1b024e71291ab003f9b6379d0ffcecca/RECEBIVEIS.png)

With this model, our marketplace clients also have access to a Commission Report, and using this feature, they can check the listing of orders invoiced by each of their sellers and the respective commission rates retained.

The Commission Report brings transparency to the amounts due to each seller and the commissions those orders brought to the marketplace.

<div class="alert alert-warning">
Currently, our commission report is only available for specific clients that are part of our beta test.</div>

Our __Payout Split__ solution has some limitations that are important to consider:

- __Combined Payment Methods__: it does not support when one of them does not support Split. Example: gift card + credit card (gift card does not support Split).  Currently, it is only possible to have the split payment when the combined methods are two credit cards due to a checkout limitation.
- __Change Order__: it does not work with changes in values or items after the order is placed. That also means that it isn't possible to partially cancel an order with split.
- __VTEX Subscriptions__: it does not support marketplace orders.
- __Sellers ID__: CNPJ is the primary  key to make the split, so the recipients (marketplaces or sellers) need to be legal entities.
- __Same CNPJ__: since the CNPJ is the primary key to make the Split, it is not possible for two or more recipients/sales participants with the same CNPJ to be seen as different "entities".
- __Parties Involved__: it does not allow to Split the payment with recipients who are not selling products in the cart. For example: to split the freight directly to the carrier.
- __Nominal Fees__: it does not allow nominal fees. Currently, it is only possible to apply percentage commissions on products and/or freight.
- __Assigning transactions to the provider__: today it is only possible to assign a preferred affiliation at the gateway to process Split using commercial conditions for the SKUs that are sold by the Seller. However, there are limitations:
        - If the seller and the marketplace have the same SKU, the cart will always go to the Split payment method.
        - The list of SKUs has to be constantly updated.

## Transaction Split

In the __Transaction Split__, the marketplace is not a "centralizer" of the payouts. Right after the shopper completes the purchase, our checkout system creates one or multiple transactions (one per seller). 

The payment is not always processed by the marketplace payment provider, but by each merchant’s payment provider (each seller’s payment provider is responsible for processing their portion of the transaction).

Meaning that the marketplace has less control over the payment flow. Unlike the other model, VTEX does not hold payment until the order is invoiced, each share will be automatically sent to the respective participant right after the checkout

For example, a shopper adds two products to the same shopping cart. One of them will be fulfilled by the marketplace itself and the other one belongs to a seller called __Seller A__.

![Transaction Split](//images.ctfassets.net/alneenqid6w5/3uiBeqiyYlaneMksnW4G0v/8a47d871bdc64ccec3d812b4449b053e/TRANSACTION.png)

In the __Transaction Split__, the marketplace has no need to make any configuration. The seller is the one that needs to configure their own payment method in the affiliation with a given marketplace. Check our documentation [Send the Seller White Label payment methods to the Marketplace](https://help.vtex.com/en/tutorial/enviar-os-meios-de-pagamento-do-seller-white-label-para-o-marketplace--bfvtPzZyikacSqgkgeGW) for more details. 

![Report](//images.ctfassets.net/alneenqid6w5/3YX8MmCPvAWyJpZ7tFAHt4/7276a3b6c1ff1cf1d4d6fe5ccd7bdba9/REPORT.png)

The transaction split has a few __limitations__ that must be taken into account:

- __Setting Commissions__: in this model marketplaces cannot automatically receive commissions, as the transaction is not processed by its payment provider. Marketplaces will have to manually collect their commission from sellers, potentially increasing marketplace default risk.
- __Payment Methods__: it is incompatible with boleto (Brazil), Pix (Brazil), Payment Apps and credit cards with 3DS2 or any payment method with authentication.
- __Intercessing Payment Methods__: Intercesses payment methods, meaning that it only allows payments with credit card, cash and promissory if all involved merchants accept them.
- __Fraud Mitigation__: every merchant will have to analyse fraud risk on their own. If one of the merchants' fraud providers deny a transaction, all other transactions will also be declined.
- __For non-VTEX sellers__: if the seller is a non-VTEX seller it is necessary that it uses a Gateway account, which is a type of account that allows the seller to configure payment methods.
- __Parties Involved__: it does not allow to Split the payment with recipients who are not selling products in the cart. For example: to split the freight directly to the carrier.
- __VTEX Subscriptions__: it does not support marketplace orders.
- __Combining Split Models__: when combined with the other Split model - Payout Split -, the Transaction Split will prevail. That is, for sellers who choose to use their payment methods, their portion of the transaction will be processed at their own gateway and the values of the other sales participants will continue to be processed by the marketplace.

## Combining Split Models

When Transaction Split and Payout Split are combined, the Transaction Split will prevail. That is, for sellers who choose to use their payment methods, their portion of the transaction will be processed at their own gateway and the values of the other sales participants will continue to be processed by the marketplace.

#### Learn more

- [Configure Payout Split - PagarMeV2](https://help.vtex.com/en/tutorial/setting-up-pagarmev2-gateway--5TugxXNMOs0Ocyg4uqussM?&utm_source=autocomplete)
- [Configure Payout Split - VTEX Payment](https://help.vtex.com/en/tracks/vtex-payment--7iCCIoIZFmd9OabU6QlmXu/1lZWKCGdy7xpYjukTLfFJL)
- [Send the Seller White Label payment methods to the Marketplace](https://help.vtex.com/en/tutorial/enviar-os-meios-de-pagamento-do-seller-white-label-para-o-marketplace--bfvtPzZyikacSqgkgeGW) (for more information about how to setup Transaction Split).

