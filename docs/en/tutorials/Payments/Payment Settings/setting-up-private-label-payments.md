---
title: 'Setting up Private Label payments'
id: 428FgVdSGQUeAOoogkaIw4
status: PUBLISHED
createdAt: 2018-06-28T21:20:09.875Z
updatedAt: 2023-03-26T21:19:26.897Z
publishedAt: 2023-03-26T21:19:26.897Z
firstPublishedAt: 2018-07-02T18:04:41.389Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-private-label-payments
locale: en
legacySlug: setting-up-private-label-payments
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, your store can receive payments with __private label (self card brand)__. For this, you will first need to register a [gateway affiliation](https://help.vtex.com/en/tutorial/afiliacoes-de-gateway--tutorials_444#) that can process this payment method.

Then, two setting steps must be performed.

## Setting up the self brand

With one of the above gateway affiliations successfully registered, you must set up the __private label__ custom payment.

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the main screen, go to the __Custom Payments__ tab.
3. Each custom payment type allows up to 5 different settings. In the section reserved for private label, click on one of the configuration boxes.
4. You will be redirected to a form. In the __Name__ field, fill in the name of the card.
5. In the __Description__ field, write the text that will give more details about the payment condition.
6. In __BIN ranges__, enter the BIN codes of the cards so that they are validated by the system. You can insert a range of BINs (by inserting the first and last code of the sequence, separated by hyphen) or several (separating each one by comma and without spaces).
7. In __Acquirer payment code__, indicate the code to be sent and processed by the acquirer you have hired.
8. In the __Use card holder's name__ field, set whether the user will need to enter the name that is printed on the card at the time of purchase.
9. In __Number of CVV digits__, inform how many numbers the CVV user will need to fill at the time of purchase (in Brazil, the most common are 3-digit codes). You can also choose not to ask for this information.
10. In __Use the card's expiration date?__, inform if the user will need to fill the expiration date of the card at the time of purchase (the fill-in format is MM/YY).
11. In __Use billing address?__, set whether the user will need to fill in a billing address at the time of purchase.
12. In the __Card mask__ field, choose the symbols that will represent the 16-digit card at the time of purchase. This is meant to protect your customer's card number. You can choose the characters you prefer by separating them into four groups of four and using spaces.
13. In __Payment expiration date__, inform the maximum period (number of days) that the payment can be made. After this time, in case of non-payment, the order will be cancelled.
14. In the __Automatic authorization__ field, inform whether you want to automatically authorize payments.
15. In __Split payment (if the payment processing provider supports this function)__, indicate whether you want to activate the receivables split solution. If so, when the sale involves orders with multiple merchants, the promissory notes will be divided between the sellers and the marketplace. For more information, see [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento).
16. Click __Save__.

## Setting up the payment condition

After clicking __Save__, you will be redirected to the payment condition configuration page.

1. Click the __Status__ button to enable this payment condition.
2. Under __Process with affiliation__, choose the connector that will process your private label payments (one of the gateway affiliations you registered in the first step of this tutorial).
3. If there's an anti-fraud set up in your store, you can enable it for this payment condition by checking the __Use Anti-Fraud__ box.
4. Choose whether the payments will be cash or installments.
5. You can also set up [special payment conditions](/en/tutorial/special-conditions).
5. Click __Save__.

After following the steps indicated above, your private label will appear at your store checkout as a payment option.
