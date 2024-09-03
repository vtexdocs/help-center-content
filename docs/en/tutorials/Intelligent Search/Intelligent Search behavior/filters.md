---
title: 'Filters'
id: k24mQQa9SjmhNWSwdqIMB
status: PUBLISHED
createdAt: 2024-06-27T16:43:43.811Z
updatedAt: 2024-06-27T16:44:34.723Z
publishedAt: 2024-06-27T16:44:34.723Z
firstPublishedAt: 2024-06-27T16:44:34.723Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: filters
locale: en
legacySlug: filters
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

Filters is a feature that displays in groups the specifications of search results. It allows the customer to explore relevant features of a product during their search experience, and provides scenarios that facilitate user decision-making.

By selecting a filter (price, color, size, or brand), customers can narrow search results and other existing filters available for this search context.

**VTEX Intelligent Search** uses the context of products returned in search results to know exactly which filters should be displayed to the customer, according to the Catalog configuration.

>ℹ️ The brand, department, category, and subcategory filters are sorted by the number of products registered for each filter.

For example, consider that the *Size* filter has been configured in the store's catalog, and only the *sneakers* product has the *Size* specification filled in. So when the user searches for the term *sneakers*, the *Size* filter will be available. If they search for any other term, such as *hat*, this specification won’t be displayed as a filter.

The search result will not display a specification when it the only existing filter or when the customer accesses it through the store menu. For example, if a customer selects the Electrical Appliances filter directly from the menu, it will not display Departments as a side filter.

>ℹ️ If the search results returns more than 30,000 products, some filter values will be omitted, since only the specifications of some of these products will be considered.

The Filters feature allows you to:

- Search for a term within a filter.
- Configure and define the maximum number of options in a filter before scrolling.
- Configure the filter layout. You can choose between the following formats:
   - Vertical list (standard format).
   - Horizontal list (used to display filters such as Size and Color).
   - Slider: Used to adjust the price range from a minimum to a maximum value.
   - Price field: Allows entering the full price and discounted price for filtering results.

Check out the [Search Result](https://developers.vtex.com/docs/apps/vtex.search-result#:~:text=%7D-,filter%2Dnavigator.v3%20block,-This%20block%20renders) guide on the Developer Portal for more technical details on using filters.

>⚠️ While regionalized stores display only products available in a certain region on the product list page, filters do not take regionalization into account. This means that store customers may select filter values that result in products not being available in their region.
