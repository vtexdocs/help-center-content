---
title: 'Setting up payments with Store Card (cobranded)'
id: jrkLK41IjuquUmyKUi86Q
status: PUBLISHED
createdAt: 2018-06-25T15:48:13.031Z
updatedAt: 2023-09-22T21:25:38.666Z
publishedAt: 2023-09-22T21:25:38.666Z
firstPublishedAt: 2018-06-27T20:17:05.882Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-store-card-cobranded
locale: en
legacySlug: setting-up-payments-with-store-card-cobranded
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

In VTEX, your store may receive payments through a __(cobranded) store card__. For this, you must have registered a gateway affiliation capable of processing this payment method and perform two configuration steps.

## Set up (cobranded) Store Card 
The first configuration step will be the creation of the custom payment __(cobranded) store card__.

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on the __Custom Payments__ tab.
3. In __(cobranded) store cards__, click on one of the five configuration boxes.
4. In __Name__, fill in the name of the card.
5. In __Description__, write the text that will give more details about the payment condition.
6. In the __Card Brand__ field, choose the banner to which your store card is linked. Currently, the possible options are: American Express, Cabal, Diners, Elo, Mastercard and Visa.
7. In __BIN ranges (optional)__, 
you can enter a range of BINs (by entering the first and last code in the sequence, separated by a hyphen) or several (separating each range by a comma and without spaces).

<div class="alert alert-warning">
  When the customer enters a bin number outside the range specified in this field, the following message will be displayed "Check the digits printed on your card. We couldn't confirm if the card number is correct". If there is no error in the number entered, they can click on "YES, THE NUMBER IS CORRECT" to continue completing the order.
</div>

<blockquote><ui>8. In the field <b>Acquirer Payment Code (optional)</b>, enter the code to be sent and processed by the acquirer you have contracted.</ui>

<blockquote><ui>9. In <b>Split Payments</b>, if you choose to use this option, when the sale involves marketplace stores, the amounts will be split between the sellers and the marketplace.</ui>

<blockquote><ui>10. Click <b>Save</b>.</ui>

## Set up payment condition
After configuring the card, you will need to configure the payment condition.

<div class="alert alert-warning">
  If the connector to be chosen (in <b>Step.8</b>)is not registered in your store, the message "(Configure)" will be displayed after the connector name. In this situation, choose another available connector or register it. For more information, see <a href="https://help.vtex.com/en/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete#">Registering gateway affiliations</a>.
</div>

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the Gateway affiliations tab, click on the __"+"__ button.
3. In __Custom Payment__, select the custom payment (co-branded) configured previously.
4. Describe the payment condition in __Rule name__.
5. Click the __Status__ button to enable this payment condition.
6. Under __Process with affiliation__, choose the connector that will process co-branded store card payments. Only connectors that support this payment method will be available for selection.
7. If there is an anti-fraud set up in your store, you can enable it for this payment condition by checking the __Use Anti-Fraud solution__ box.
8. Choose whether the payments will be upfront or in installments.
9. You can also set up [special payment conditions](http://help.vtex.com/en/tutorial/special-conditions).
10. Click __Save__.

After following the indicated steps, the __(cobranded) store card__ will appear in your store’s checkout page as a payment option.

