---
title: Filters
id: 50Dh4mpv0Sax0XpbvsjAtP
status: PUBLISHED
createdAt: 2020-03-05T17:44:58.362Z
updatedAt: 2023-05-05T19:32:35.780Z
publishedAt: 2023-05-05T19:32:35.780Z
firstPublishedAt: 2020-03-05T19:54:44.962Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: filters
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
---

Filters is a feature that displays in groups the specifications of search results. It allows the customer to explore relevant features of a product during their search experience, and provides scenarios that facilitate user decision-making.

By selecting a filter (price, color, size, or brand), customers can narrow search results and other existing filters available for this search context.

**VTEX Intelligent Search** uses the context of products returned in search results to know exactly which filters should be displayed to the customer, according to the Catalog configuration.

<div class="alert alert-info">
  <p>The brand, department, category, and subcategory filters are sorted by the number of products registered for each filter.</p>
</div>

For example, consider that the *Size* filter has been configured in the store's catalog, and only the *sneakers* product has the *Size* specification filled in. So when the user searches for the term *sneakers*, the *Size* filter will be available. If they search for any other term, such as *hat*, this specification won’t be displayed as a filter.

The search result will not display a specification when it the only existing filter or when the customer accesses it through the store menu. For example, if a customer selects the Electrical Appliances filter directly from the menu, it will not display Departments as a side filter.

<div class="alert alert-info">
  <p>If the search results returns more than 30,000 products, some filter values will be omitted, since only the specifications of some of these products will be considered.</p>
</div>

The Filters feature allows you to:

- Search for a term within a filter.
- Configure and define the maximum number of options in a filter before scrolling.
- Configure the filter layout. You can choose between the following formats:  
- Vertical list (standard format).
- Horizontal list (used to display filters such as Size and Color).
- Slider (used to select a range of numeric values).
- Interval sets (to divide products into groups of values).
- Value entry (the customer can inform the “from” and “to” values).

<div class="alert alert-warning">
  <p>While regionalized stores display only products available in a certain region on the product list page, filters do not take regionalization into account. This means that store customers may select filter values that result in products not being available in their region.</p>
</div>
