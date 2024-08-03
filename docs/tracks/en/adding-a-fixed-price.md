---
title: 'Adding a fixed price'
id: 3g39iXkQza4AW7C7L814mj
status: PUBLISHED
createdAt: 2019-07-04T13:53:38.630Z
updatedAt: 2024-05-15T16:01:59.100Z
publishedAt: 2024-05-15T16:01:59.100Z
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

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Click on `Price tables`.
3. Select the desired price table.
4. Select a SKU price cell from the price table.
5. Click on **Define fixed prices**.
6. Click on **Not defined**.
7. Fill in the fields.
- **Minimum quantity:** the minimum quantity of the item that needs to be added to the cart for the fixed price to be applied.
- **Price:** the amount of the fixed price.
- **Set list price:** this is an option to add a list price <i class="fas fa-toggle-on"></i> or not <i class="fas fa-toggle-off"></i>.
  - **List price:** suggested retail price for the item.

- **Schedule fixed price:** option to schedule a fixed price <i class="fas fa-toggle-on"></i> or not <i class="fas fa-toggle-off"></i>.
  - **Status:** status indicating whether the price scheduling is active or inactive.
  - **Start date:** the date from which the fixed price will be valid.  
  - **Start time:** the time from which the fixed price will be valid.  
  - **End date:** the date from which the fixed price will no longer be valid.
  - **End time:** the time from which the fixed price will no longer be valid.
8. Click on `Save`.

### Deleting fixed prices

To delete an existing fixed price, follow the steps below.

1. In Admin, click on the **Prices** module.
2. Click on **Price list**.
3. Click the row of the SKU whose fixed price you want to remove.
4. Click on the fixed price.
5. Click on the `Remove` button.

## Pricing API

To create a fixed price via API, use the [Create or update price or fixed price](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) endpoint of the Pricing API.

### Learn more

* [Scheduling prices](https://help.vtex.com/en/tutorial/scheduling-prices--4vVha6TGzYkguWuMOqCcCk)
