---
title: 'How does the Score field work?'
id: 1BUZC0mBYEEIUgeQYAKcae
status: PUBLISHED
createdAt: 2018-02-16T16:17:51.610Z
updatedAt: 2024-01-05T20:42:03.525Z
publishedAt: 2024-01-05T20:42:03.525Z
firstPublishedAt: 2018-02-16T18:09:11.291Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-does-the-score-field-work
legacySlug: how-does-the-score-field-work
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

The **Score** field, available in the **Product**, **Category**, and **Brand** forms, is the value used to sort your store products. This score works as a tie-breaking criterion for other sorting options, such as lower price, best discount, and others. By completing the **Score** field, you can define the priority of some products over others, both in the window display and in the search results page.

The criterion for listing the field follows a numerical order to display the sequence in the window display or on the search results page. By default, products without a score will behave as if they had a 0 score.

A product's total score is the sum of its own score plus the scores defined for the category and brand: `total product score = product score + category score + brand score`.

We recommend defining the score at the product level, as your window display constantly changes.

For example, you could use the score for specific events, such as when your store needs to display some products rather than others to ensure their visibility.

## Score in the VTEX search

If your store uses the [VTEX search](/en/tutorial/como-funciona-a-busca-da-vtex--tutorials_542), you can use the parameters below to implement sorting by score:

- **Ascending order **(products with lower scores are displayed at the top)**:** `?O=OrderByScoreASC`
- **Descending order **(products with the highest score are displayed at the top)**:** `?O=OrderByScoreDESC`

## Score in VTEX Intelligent Search

The `OrderByScoreASC` and `OrderByScoreDESC` parameters are not supported by[ VTEX Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb), only by the [VTEX search](/en/tutorial/como-funciona-a-busca-da-vtex--tutorials_542).

[VTEX Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb) does not allow direct sorting of products by the score defined in the **Score** field. When using one of these parameters in VTEX Intelligent Search, the default sorting will be by[ relevance](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

However, the Catalog score composes Intelligent Search's [relevance](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) among the other criteria, allowing it to be given greater weight or even prioritized. Thus, the higher the score, the greater the weight, i.e., the behavior is descending: products with a higher score are prioritized.

Disregarding other criteria or even considering priority sorting, in VTEX Intelligent Search, products with no score are displayed after products with a score in the search results.

You need to consider whether this would be appropriate for your use case compared to other criteria calculated automatically by the system, such as popularity and sales. Making one criterion a priority overrides all the others, even meeting the same objective as `OrderByScore`, bypassing the other relevance settings.

To sort items manually one by one, we recommend using[ Merchandising Rules](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) to avoid undesirable effects and respect the relevance settings.

## Editing a product score

To add or change a score related to a product, please follow these steps:

1. In the VTEX Admin, go to **Catalog > Products & SKUs**.
2. Click Add Product to create a new product, or click Edit product in the options of the product you want to edit.
3. Enter the desired score value in the **Score field (used for sorting the search)**.

