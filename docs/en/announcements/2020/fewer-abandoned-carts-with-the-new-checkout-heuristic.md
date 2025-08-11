---
title: 'Fewer abandoned carts with the new Checkout heuristic'
id: 3XLEhUnRe3jjzUGLbDEZJz
status: CHANGED
createdAt: 2020-05-30T13:08:43.104Z
updatedAt: 2020-11-27T19:40:17.125Z
publishedAt: 2020-06-02T18:09:53.394Z
contentType: updates
productTeam: Shopping
author: authors_24
slugEN: fewer-abandoned-carts-with-the-new-checkout-heuristic
locale: en
legacySlug: fewer-abandoned-carts-with-the-new-checkout-heuristic
announcementImageID: ''
announcementSynopsisEN: 'We changed the logic that defines the order of choice of sellers for franchise accounts, thus reducing abandoned carts.'
---

VTEX made a change in the logic that defines the order of choice of sellers to be shown at the checkout of stores that use the [franchise accounts model](https://help.vtex.com/en/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa). Before, the checkout assumed that the sellers had stock and selected all who delivered to the order address. From now on, the checkout first selects only those sellers who are able to deliver to that address and then filters the sellers with stock of products in the cart.

This change prevents the selection of sellers that are available for delivery but do not have stock. The consequence is a more efficient process of choosing sellers for stores that use the franchise account model, which reduces cases of cart rupture and contributes to increasing the stock turnover and the conversion rate of your store.

## What is the benefit?

We made this change in the checkout heuristic (the logic that determines the order of choice of sellers) in order to reduce orders not completed due to the unavailability of items in stock. Since the change took effect, we have seen a 40% reduction in the number of unfinished orders in this scenario, which increased the number of carts available for checkout by 1 percentage point. This is an excellent result, as we have thus reduced the number of abandoned carts, which means more completed sales for VTEX stores.

## Does my store need to take any action?

No. This change has an impact on the efficiency of the choice of sellers through checkout and, consequently, on the conversion rate of stores that use the franchise account model. This is a change in heuristics, which does not require any action by the store.

[Learn more about franchise accounts at VTEX →](https://help.vtex.com/en/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa)
