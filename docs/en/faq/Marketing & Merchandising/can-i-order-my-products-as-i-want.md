---
title: 'Can I order my product as I want?'
id: 33nmI2G2DN3J334gFcur68
status: ARCHIVED
createdAt: 2019-03-13T15:49:17.305Z
updatedAt: 2022-09-08T16:42:33.128Z
publishedAt: 
firstPublishedAt: 2019-03-13T15:50:45.091Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 2zh4tqFMxyMCgwaUcsS0O2
slugEN: can-i-order-my-products-as-i-want
locale: en
legacySlug: can-i-order-my-products-as-i-want
---

By default, VTEX system orders products according to their relevance on the site, i.e. by most sold and most viewed.

However, there are ways to change this order: either through the Score field or by using Querystring.

How the Score field works is explained in [this article](https://help.vtex.com/en/tutorial/how-the-score-field-works--1BUZC0mBYEEIUgeQYAKcae).

The Querystring process is simpler: simply incert the parameter into the URL to change the order in which products are displayed.

The parameters are as follows:

- __Lowest price__: `?O=OrderByPriceASC`
- __Highest price__: `?O=OrderByPriceDESC`
- __Best sellers__: `?O=OrderByTopSaleDESC`
- __Best rated__: `?O=OrderByReviewRateDESC`
- __Alphabetical order A-Z__: `?O=OrderByNameASC`
- __Alphabetical order Z-A__: `?O=OrderByNameDESC`
- __Release date (associated with the product)__: `?O=OrderByReleaseDateDESC`
- __Highest discount__: `?O=OrderByBestDiscountDESC`
- __Lowest discount__: `?O=OrderByBestDiscountASC`

For example: `http://www.{AccountName}.com/{departament}/{category}?O=OrderByPriceASC`

>⚠️ **You can only use one product order parameter at a time.** Therefore, you have to choose the one that best suits your store's needs (remember that parameters can be changed at will).
