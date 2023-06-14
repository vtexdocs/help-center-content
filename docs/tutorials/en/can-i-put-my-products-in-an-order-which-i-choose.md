---
title: 'Can I put my products in an order which I choose?'
id: qfWKX2ZekoEoayiyo0uuA
status: DRAFT
createdAt: 2019-01-24T20:45:49.100Z
updatedAt: 2022-09-13T15:38:47.301Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:14:24.815Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2zh4tqFMxyMCgwaUcsS0O2
slug: can-i-put-my-products-in-an-order-which-i-choose
legacySlug: can-i-put-my-products-in-an-order-which-i-choose
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

By default, the VTEX system orders products according to their importance on your site, i.e. by most sold and most viewed in the past thirty days.

However, you can change the order by using Querystring. Just enter a parameter in the URL to change the order of exhibition.

Parameters can also be used in URL mappings to redirect specific URLs to others, such as product listing pages. To learn more about this feature, go to [URL Mapping (301 Redirect)](https://help.vtex.com/en/tutorial/mapeamento-de-urls-redirectimento-301--frequentlyAskedQuestions_623).

These are the parameters:

- __Price (from lowest to highest)__: `?O=OrderByPriceASC`
- __Price (from highest to lowest)__: `?O=OrderByPriceDESC`
- __Best sellers__: `?O=OrderByTopSaleDESC`
- __Best rated__: `?O=OrderByReviewRateDESC`
- __Alphabetical order A-Z__: `?O=OrderByNameASC`
- __Alphabetical order Z-A__: `?O=OrderByNameDESC`
- __Release date (registered on the product)__: `?O=OrderByReleaseDateDESC`
- __Best discount__: `?O=OrderByBestDiscountDESC`
- __Score (from lowest to highest)__: `?O=OrderByScoreASC`
- __Score (from highest to lowest)__: `?O=OrderByScoreDESC`

For example: `http://www.{AccountName}.com/{departament}/{category}?O=OrderByPriceASC`

## Related articles
- [How does the Score field work?](https://help.vtex.com/en/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae?&utm_source=autocomplete)
- [URL Mapping (301 Redirect)](https://help.vtex.com/en/tutorial/mapeamento-de-urls-redirecionamento-301--frequentlyAskedQuestions_623)

