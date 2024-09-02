---
title: 'Adding a fixed price'
id: 3g39iXkQza4AW7C7L814mj
status: PUBLISHED
createdAt: 2019-07-04T13:53:38.630Z
updatedAt: 2024-08-20T13:48:57.885Z
publishedAt: 2024-08-20T13:48:57.885Z
firstPublishedAt: 2019-07-17T19:46:38.452Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: adding-a-fixed-price
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

There are three ways to create a fixed price:

- [Via the Pricing module in the Admin](#admin)
- [Via the fixed price template](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D)
- [Via Pricing API](#pricing-api)

## Admin

To create a fixed price in the Admin, follow the steps below.

<ol>
    <li>In the VTEX Admin, go to <strong>Prices &gt; Price list<strong>, or type <strong>Price list<strong> in the search bar at the top of the page.</li>
    <li>Click on <code>Price tables</code>.</li>
    <li>Select the desired price table.</li>
    <li>Select a SKU price cell from the price table.</li>
    <li>Click on <strong>Define fixed prices</strong>.</li>
    <li>Click on <strong>Not defined</strong>.</li>
    <li>Fill in the fields.</li>
    <ul>
        <li><strong>Minimum quantity:</strong> the minimum quantity of the item that needs to be added to the cart for the fixed price to be applied.</li>
        <li><strong>Price:</strong> the amount of the fixed price.</li>
        <li><strong>Set list price:</strong> this is an option to add a list price <i class="fas fa-toggle-on"></i> or not <i class="fas fa-toggle-off"></i>.
            <ul>
                <li><strong>List price:</strong> suggested retail price for the item.</li>
            </ul>
        </li>
        <li><strong>Schedule fixed price:</strong> option to schedule a fixed price <i class="fas fa-toggle-on"></i> or not <i class="fas fa-toggle-off"></i>.
            <ul>
                <li><strong>Status:</strong> status indicating whether the price scheduling is active or inactive.</li>
                <li><strong>Start date:</strong> the date from which the fixed price will be valid.</li>
                <li><strong>Start time:</strong> the time from which the fixed price will be valid.</li>
                <li><strong>End date:</strong> the date from which the fixed price will no longer be valid.</li>
                <li><strong>End time:</strong> the time from which the fixed price will no longer be valid.</li>
            </ul>
        </li>
    </ul>
    <li>Click on <code>Save</code>.</li>
</ol>

### Deleting fixed prices

To delete an existing fixed price, follow the steps below.

1. In Admin, click on the **Prices** module.
2. Click on **Price list**.
3. Click on the SKU line for which you want to remove the fixed price.
4. Click on the fixed price.
5. Click on the `Remove`.

<div class = "alert alert-info">
It is not possible to perform bulk deletion of fixed prices using the spreadsheet. The deletion must be done manually, following the steps above, or via the API <a href="https://developers.vtex.com/docs/api-reference/pricing-api#delete-/pricing/prices/-itemId-/fixed/-priceTableId-">Delete fixed prices on a price table or trade policy
</div>

## Pricing API

To create a fixed price via API, use the [Create or update price or fixed price](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) endpoint of the Pricing API.

### Learn more

* [Scheduling prices](https://help.vtex.com/en/tutorial/scheduling-prices--4vVha6TGzYkguWuMOqCcCk)
