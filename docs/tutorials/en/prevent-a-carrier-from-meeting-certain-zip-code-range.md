---
title: 'How to prevent a carrier from meeting a certain ZIP code range?'
id: 6GEYG5p9E4MOEy2qmY4uGa
status: PUBLISHED
createdAt: 2019-01-24T20:45:39.807Z
updatedAt: 2024-03-01T01:07:45.930Z
publishedAt: 2024-03-01T01:07:45.930Z
firstPublishedAt: 2019-01-24T22:03:33.994Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: prevent-a-carrier-from-meeting-certain-zip-code-range
locale: en
legacySlug: prevent-a-carrier-from-meeting-certain-zip-code-range
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

The zip code ranges served by a carrier are determined by the shipping spreadsheet, which is usually provided to the store by the carrier itself.

But sometimes you may need to block some zip code or zip codes rage. That is, you may want to prevent that a carrier, for a particular zip code or zip codes range, from making deliveries, even if by default it can do so.

To do that, you must exclude the zip codes you don't want to consider from the shipping spreadsheet.

### Example

Let's say you want to exclude only the zip code __45920-000__ from the spreadsheet of a carrier.

To do so, you would follow these steps:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy > Shipping policies**, or type *Shipping Strategy* in the search bar at the top of the page.  
2. Download the shipping spreadsheet on **Shipping Rates**.    
3. Open the spreadsheet and look for the lines corresponding to the zip code range where the code to be disregarded is located, ie: `ZipCodeStart` = __37900-001__ and `ZipCodeEnd` = __97904-999__.  
4. Each of these lines must be turned into two, so that the zip code 45920-000 is ignored. So you would have: `ZipCodeStart` = __37900-001__ and `ZipCodeEnd` = __45919-999__ / `ZipCodeStart` = __45920-001__ and `ZipCodeEnd` = __97904-999__.  
With this, the spreadsheet would "jump" the zip code 45920-000. And consequently it would no longer be considered as an address served by that carrier.

>ℹ️ The postal code examples in this article refer to Brazil, each country has its own postal code format.
