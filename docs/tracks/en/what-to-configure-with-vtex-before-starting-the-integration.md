---
title: 'What to configure with VTEX before starting the integration'
id: 3OHGQIQmt1dKw9RwKruE7H
status: PUBLISHED
createdAt: 2019-11-16T15:47:18.872Z
updatedAt: 2021-07-28T14:29:14.749Z
publishedAt: 2021-07-28T14:29:14.749Z
firstPublishedAt: 2019-11-19T17:27:48.328Z
contentType: trackArticle
productTeam: Channels
slug: what-to-configure-with-vtex-before-starting-the-integration
locale: en
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugEN: wish-integration
---


To ensure that the integration functions properly, some initial VTEX platform configurations will need to be done beforehand.

## Defining the trade policy

You'll need to define which trade policy will be used to integrate your products with Wish. This will be applied to main aspects: product assortment, inventory, price and currency. This implies that product price and availability on specific sales channel is wholly based on the trade policy you choose. [Click here for more info on how the trade policy works](https://help.vtex.com/en/tutorial/configuring-a-marketplace-trade-policy).

<div class="alert alert-info">
 NOTE: Wish demands that product prices and shipping be sent in USD. However, it does convert order values into BRL directly, making issuing invoices much easier.

This means that the integration should send prices in USD and accept orders in BRL. Thus, the architecture uses only BRL and converts within the integration.

However, <strong>the Wish trade policy must be in BRL</strong>, while the entire conversion flow will be more detailed in [step 5](https://help.vtex.com/en/tracks/wish-integration--50hbG4bzhSIhjz1lzqI1g4/6EYEy1jRiAj465WOnhiczD).
 </div>

[Click here](https://help.vtex.com/en/faq/adding-new-trade-policies--frequentlyAskedQuestions_700) to find out how to add a new trade policy when needed.

## Defining product assortment

Once the trade policy is created, you'll need to link the new trade policy to products from your catalog that you want to send to Wish. The following step-by-step will show you how to define the assortment **in bulk using a spreadsheet** (for other methods, [click here](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ).

  1. Export your catalog products ([see how in the "by spreadsheet" section of this article](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ));
  2. Add the **ID** of the trade policy set in the previous step to the **"Stores"** field ([mais detalhes aqui](https://help.vtex.com/en/tutorial/filling-in-spreadsheet-fields--4nYhx63Q5yokQWaMguaIgI));
  3. Import the spreadsheet back into the catalog.

## Defining the logistics

To ensure that order integrate successfully, you'll need to link, on the VTEX platform, the logistics between inventory, warehouse and carrier . For more context on VTEX logistics, read [this article](https://help.vtex.com/en/tracks/logistics-101--13TFDwDttPl9ki9OXQhyjx). Follow the step-by-step below to perform the setup:

  1. Check whether your [inventories](https://help.vtex.com/en/tracks/logistics-101--13TFDwDttPl9ki9OXQhyjx/3mlfDHjikOgUna1SS2Nr1Y) are linked to the correct warehouses;
  2. Check whether the chosen [warehouses](https://help.vtex.com/en/tracks/logistics-101--13TFDwDttPl9ki9OXQhyjx/5XvQ1yLpxLlIKWRw1pSiyA) have the associated Wish trade policy;
  3. Set the [carriers](https://help.vtex.com/en/tracks/logistics-101--13TFDwDttPl9ki9OXQhyjx/3fLedVI57srjBDDxxGgOWe) that will ship from Wish;
  4. Link carriers to warehouses.
 
<div class="alert alert-info">
NOTE: Wish transfers the commission by confirming order delivery, obtaining this information by directly consulting its partner carriers. <strong><i>However, in order to sell on Wish, you need to use partner carriers for order delivery.</i></strong>
<a href="https://merchant.wish.com/documentation/shippingproviders"> Check out the Wish accepted carriers here.</a>
  </div>

## Defining prices

In order to sell your products on Wish, it's important to set a pricing strategy. For more on the overall pricing context at VTEX, read [this article](https://help.vtex.com/en/tracks/precing-101--6f8pwCns3PJHqMvQSugNfP). Follow the step-by-step below to configure prices:

  1. Create a [price table](https://help.vtex.com/en/tracks/pricing-101--6f8pwCns3PJHqMvQSugNfP/2WQ3pVYfQpXkJnHr7VTFBv) for the trade policy linked to Wish;
  2. Set the [base prices](https://help.vtex.com/en/tracks/pricing-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) based on the new table
