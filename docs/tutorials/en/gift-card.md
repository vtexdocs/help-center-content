---
title: 'Setting up Gift cards'
id: tutorials_995
status: CHANGED
createdAt: 2017-04-27T21:57:54.816Z
updatedAt: 2024-01-19T19:16:50.349Z
publishedAt: 2024-01-12T12:46:20.978Z
firstPublishedAt: 2017-04-27T23:03:42.674Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: gift-card
locale: en
legacySlug: gift-card
subcategory: 3qWeS7abxCyC0G0GMq42gA
---

The GiftCard or voucher is one of the features of the Payments module, and it works in two different ways:

- A payment method for purchases;
- A loyalty program that the retailer can connect with the VTEX system.

For more details on the second option, check our technical documentation on [integration with GiftCards](https://help.vtex.com/en/tutorial/how-to-integrate-with-a-gift-card--tutorials_450 "integration with Gift Card").

## How to create the GiftCard (manual)

By a VTEX standard, the gift card is considered a payment method. This product has a nominal value that can be used at the moment of the purchase to reduce the order price.

To create a new gift card, follow the step by step:
<ol>
  <li>In the VTEX Admin, go to <b>Promotions > Gift Cards</b>, or type <b>Gift Cards</b> in the search bar at the top of the page.</li>  
  <br>
  <li>Click on the <b>New Gift Card</b> button.</li> 
  <br>
  <div class = "alert alert-info">
  <p>On the gift card creation screen, the <b>Gift card</b> field is automatically filled in by the VTEX system with the ID code of the new gift card. This is the code to be entered by the customer on the checkout screen to apply the gift card to the cart and reduce the payment value of the order.</p>
</div>
<br>
  <li>Fill in the fields that will be displayed as explained below:</li>
  <br>
<ul>  
  <li><b>Value</b>: the nominal value that will be granted for the voucher use.</li>
  <li><b>Currency code</b>: currency in which the voucher will be created. The options available for selection are presented in accordance with the commercial policies of each store.</li>
  <li><b>Expiration Date</b>: this is the effective date for using the voucher.</li>
  <li><b>Customer ID</b>: data that identifies and defines the voucher for a specific client.</li>
  <li><b>Collection</b>: identifies the product collection that defines the items to which the voucher can be applied.</li>
</ul><br>

<div class="alert alert-warning">
<strong>Warning</strong>: The “Value” and the “Expiration Date” fields are <strong>mandatory</strong>. If you do not fill them, the purchase voucher will not be saved.
</div>

<div class="alert alert-danger">
The feature that creates gift cards limited by product collections is not working. More details about this issue are provided in the article <a href="https://help.vtex.com/en/known-issues/restricting-the-use-of-giftcards-to-a-collection-of-products-does-not-work--7kdbZUdscJLo1sGY6bo1jp" target="_blank">Restricting the use of GiftCards to a collection of products does not work</a>.
</div>

After filling in the fields correctly, the user can select up to three configuration options:
<ul>
  <li><b>Restricted</b>: only the customer associated with the CPF or CNPJ informed above can use this voucher.</li>
  <li><b>Reloadable</b>: while this voucher is available, its balance can be changed.</li>
  <li><b>Reusable</b>: it will be possible to make new purchases with this voucher until its value is fully used.</li>
</ul>
<br>
  <li>Finally, click on the <b>Save</b> button.</li>
<br>
<div class="alert alert-info">
There is no limit to the creation of gift cards, however only 8000 gift cards can be exported at a time.
</div>

</ol>  

## How to create a batch of Vouchers (manual)

To create more than one new voucher at the same time (a batch), follow the step by step:
<ol>
  <li>In the VTEX Admin, go to <b>Promotions > Gift Cards</b>, or type <b>Gift Cards</b> in the search bar at the top of the page.</li>  
  <br>
  <li>Click on the <b>New Gift Card Batch</b> button.</li> 
  <br>
  <li>Fill in the fields that will be displayed as explained below:</li>  
<br>
<ul>
  <li><b>Number of gift cards</b>: this is the number of vouchers that you want to create as a batch. A maximum of 500 (five hundred) vouchers can be created per batch.</li>
  <li><b>Value</b>: the nominal value that will be granted for all vouchers in this batch.</li>
  <li><b>Currency code</b>: currency in which vouchers will be batched. The options available for selection are customized according to the commercial policies of each store.</li>
  <li><b>Expiration Date</b>: this is the effective date for using all vouchers of this batch.</li>
  <li><b>Collection</b>: identifies the product collection that defines the items to which the vouchers can be applied.</li>
<br>
<div class="alert alert-warning">
<strong>Warning</strong>: The “Number of gift cards”, “Value” and the “Expiration Date” fields are <strong>mandatory</strong>. If you don’t fill them, the purchase vouchers will not be saved.</div>
<br>
<div class="alert alert-danger">
The feature that creates gift cards limited by product collections is not working. More details about this issue are provided in the article <a href="https://help.vtex.com/en/known-issues/restricting-the-use-of-giftcards-to-a-collection-of-products-does-not-work--7kdbZUdscJLo1sGY6bo1jp" target="_blank">Restricting the use of GiftCards to a collection of products does not work</a>.
</div>
<br>
  <li><b>Reloadable</b>: while these vouchers are available, their balances can be changed;</li>
  <li><b>Reusable</b>: it will be possible to make new purchases with these vouchers until their values are fully used.</li>
</ul><br>  
  <li>Click on the <b>Save</b> button.</li>
<br>
A new screen will appear confirming that the requested number of vouchers has been generated and their IDs will also be shown.<br> 
<br>
  <li>To end, click on the <b>Back</b> button.</li>
<br>
<div class="alert alert-info">
There is no limit to the creation of gift cards, however only 8000 gift cards can be exported at a time.
</div>
</ol>

## How to set a Gift Card as a payment method

After creating the Gift Card, it must be configured as a payment method. This way, your customers will be able to use it at Checkout.

Follow the steps below to set up the Gift card:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type Settings in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on the __Vale__ connector.
4. On the top of the page, create a __name__ to this payment condition.
5. Activate the condition in the __Status__ field.
6. Under __Process with affiliation__, select the desired giftcard provider.
7. Click on `Save`.

You can also add to the Gift Card special payment conditions. There is no limit on the conditions that can be applied to a payment method. We describe how to set each one of them [here](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456?locale=pt "here"). 

To end, click on the blue __Save__ button.

## How to manage your voucher

Once the voucher has been created, it is possible to manage it in some ways through the Admin. The user can:

- Add or remove value, as long as the voucher is "Rechargeable";
- View its statement;
- Check which purchase the voucher was used for;
- Cancel the voucher.
