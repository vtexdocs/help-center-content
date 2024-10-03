---
title: "Calculating an order's shipping time"
id: 7IkKo1XSxiBj30hdn37oOE
status: ARCHIVED
createdAt: 2019-10-23T15:25:20.218Z
updatedAt: 2022-03-08T18:48:05.968Z
publishedAt: 
firstPublishedAt: 2019-10-23T20:05:01.736Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: calculating-order-shipping-time
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

An order's (shipping) processing time takes the __detention times__ defined for the three stages of the logistics route into account, in addition to holidays and existing cut-off times, as follows: 

- Warehouse
- Loading dock
- Carrier
- Holidays
- Carrier working hours (for more info, read our tutorial on [Carrier working hours](https://help.vtex.com/en/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS) 

A __detention time__ can be defined for each of the three stages of the logistics route, which is the shipping time that customers see at checkout and is comprised of the sum of several detention times (warehouse detention time, loading dock detention time and carrier detention time) + holidays and any cut-off times.

__Warehouse__ and __Loading Dock__ detention times are set in each of their settings, within the Inventory & Shipping module > Dashboard.

A __carrier's__ detention time is defined in the Shipping Rates spreadsheet, sent to VTEX from the carrier settings screen, also in Inventory & Shipping > Dashboard, under Carriers.

## Examples

### Example 1

An order is placed on Monday.

- Warehouse detention cost: 2 days
- Loading dock detention cost: 1 day
- Carrier detention cost: 5 days
- Added holidays: No
- Cut-off time (Monday at 11:00 AM) occurred before the placed order's payment approved (03:00 PM of that same day)

In example above, the detention cost of the three stages belonging to the logistics route (warehouse, loading dock and carrier) is 8 days.

Since there are no added holidays, no extra day is added to this shipping time.

However, since the the order approval occurred after the cut-off time, Monday doesn't count towards the shipping time. The  day zero (D0) of this time is therefore Tuesday, with the shipping time being __8 days starting the day after Tuesday__.

### Example 2

An order is placed on Monday.

- Warehouse detention cost: 3 days
- Loading dock detention cost: 0 days
- Carrier detention cost: 2 days
- Added holidays: Yes, Wednesday, the day after the order was placed, is a holiday
- Cut-off time (Monday at 06:00 PM) is after the order's payment has been approved (03:00 PM of that same day)

In the example above, the detention cost of the three stages belonging to the logistics route (warehouse, loading dock and carrier) is 5 days.

Since there is an added holiday, we add an extra day to the shipping time, which now has a total of 6 days (5 original days + 1 day due to the holiday).

Since the order approval occurred before the cut-off time, Monday counts as the day zero (D0) of the shipping time, which is __6 days starting the day after Monday__.

