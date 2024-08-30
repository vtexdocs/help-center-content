---
title: 'What to do when receiving an error message during shipping simulation'
id: 3bkJwe0Yj6qEkuYKUWwKwK
status: PUBLISHED
createdAt: 2017-05-09T14:03:03.097Z
updatedAt: 2023-10-10T16:20:54.988Z
publishedAt: 2023-10-10T16:20:54.988Z
firstPublishedAt: 2017-05-09T14:06:10.341Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_35
slug: what-to-do-when-receiving-an-error-message-during-shipping-simulation
locale: en
legacySlug: what-to-do-when-receiving-an-error-message-during-shipping-simulation
---

What to do when a shipping simulation does not show the expected result?

Here, we will provide a step-by-step description about how to check the Logistics settings.

Before we start, please remember that the [Shipping Simulation](/en/tutorial/freight-simulation/) will return the result of the [Shipping Calculation](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate) API. We recommend always using APIs. If you don’t have access, ask your store administrator and check the role associated with your user.

To illustrate this article, let’s consider a scenario where the __X-Box__ product is not being delivered to Postal Code 22451-451 for sales policy 1. The error message is as follows: "_It was not possible to generate the cart. See details below_".

Some factors may influence a simulation; so, we recommend that you always start from the basics, checking whether __X-Box__ is an active product and if all settings are correct. The shortest way to do so is in the [Indexed-Info](https://help.vtex.com/en/faq/why-doesnt-the-product-appear-on-the-site#indexed-info).

Then, we must check Logistics as a whole, that is, which X-Box inventory and which carrier are associated with Sales Policy 1. This information is contained in the Warehouse Dock.

This would also be very simple if you use the API. Through the query [Shipping Calculation](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping/calculate) it is easy to identify the carrier’s ID and, thus, to go backwards. 

But how can you correct that?

This depends on each retailer; however, after resetting the Inventory-Dock-Carrier Logistics, you may also need to change the [carrier spreadsheet](https://help.vtex.com/en/tutorial/building-a-freight-spreadsheet).

A fast way to check a carrier’s range of Postal Codes is using the [Shipping Amounts](/en/tutorial/editing-freight-values/) tab.
