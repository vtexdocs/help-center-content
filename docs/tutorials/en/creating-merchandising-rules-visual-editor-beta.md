---
title: 'Creating merchandising rules - Visual Editor (Beta)'
id: 6xteumx9MsDt0uEppbChu3
status: PUBLISHED
createdAt: 2023-04-03T21:05:14.304Z
updatedAt: 2023-04-11T22:34:40.303Z
publishedAt: 2023-04-11T22:34:40.303Z
firstPublishedAt: 2023-04-03T21:30:34.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: creating-merchandising-rules-visual-editor-beta
locale: en
legacySlug: creating-merchandising-rules-visual-editor-beta
subcategory: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
  <p>This feature is in closed beta, which means that only selected customers can access it for now. If you are interested in implementing it for your business in the future, please contact our <a href="https://support.vtex.com/hc/pt-br/requests">Support team</a>.</p>
</div>

The Visual Editor (beta) for[ merchandising rules](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) in VTEX Intelligent Search allows you to:

![visual-merch-rules-EN](https://images.ctfassets.net/alneenqid6w5/5Pah0D3Y9CfUyczqFR99bd/4d8ea287aaed825eb017a0c6325b6e05/visual-merch-rules-EN.png)

<ol class="mv7" type="I">
    <li class="t-body c-on-base mb5 lh-copy">Edit the name of the merchandising rule.</li>
    <li class="t-body c-on-base mb5 lh-copy">Set search terms to apply the merchandising rule.</li>
    <li class="t-body c-on-base mb5 lh-copy">Set <a href="#adding-filters-and-conditions" rel="noopener noreferrer"
            target="_self"
            class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">filters</a>
        to apply the
        merchandising rule.</li>
    <li class="t-body c-on-base mb5 lh-copy">Specify the number of items per row.</li>
    <li class="t-body c-on-base mb5 lh-copy">Specify the number of items per page.</li>
    <li class="t-body c-on-base mb5 lh-copy">Navigate between search results pages.</li>
    <li class="t-body c-on-base mb5 lh-copy">Drag and drop products to the desired position in the search results.
        You can only drag products that have been pinned (action IX).</li>
    <li class="t-body c-on-base mb5 lh-copy">Hide products from the search results. This action cannot be undone,
        so to make a product display in the results again, you need to create another merchandising rule.</li>
    <li class="t-body c-on-base mb5 lh-copy">Pin products to the top positions of the search results. By pinning
        product A and then product B, they will appear in this order in the search results, just before the others.</li>
    <li class="t-body c-on-base mb5 lh-copy">See product details.</li>
    <li class="t-body c-on-base mb5 lh-copy">Cancel editing.</li>
    <li class="t-body c-on-base mb5 lh-copy">Save settings.</li>
</ol>

## Setting up a merchandising rule

To configure a merchandising rule in the Visual Editor, follow the steps below.

1. In the VTEX Admin, go to **Storefront**, or type **Storefront** in the search bar at the top of the page.
2. Under **Intelligent Search**, click **Merchandising Rules**.
3. Click the `+ New` button.
4. Fill in the following fields:
   * **Name**: Name of the merchandising rule. Example: Promote product A when searching for a chocolate cookie.
   * **Start date (optional)**: Set a date from which the merchandising rule will apply. The date follows the UTC-0 time zone.
   * **End date (optional)**: Set a date on which the merchandising rule will no longer apply to store searches. The date follows the UTC-0 time zone.
   * **Locales:** Languages to which the merchandising rule will apply.
5. Click **Visual Editor**. See [Types of editing](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#types-of-editing) for more information about each editor.
6. Click `Next`.
7. To define a search term that determines when the merchandising rule applies, enter the term in the search bar (item II in the previous image). You need to define at least one term or a filter (step 8) to apply the rule.
8. To create a filter to apply the merchandising rule (item III in the previous image), follow the steps described in the [Adding filters and conditions](#adding-filters-and-conditions) section. You need to define at least one filter or term (step 7) for the rule to apply.
9. You can also perform additional actions to customize the search results (items IV, V, VII, VIII, IX in the previous image).
10. Click `Save`.

<div class="alert alert-info">
  <p>After saving, the changes to merchandising rules will take an average of two minutes to be updated.</p>
</div>

### Adding filters and conditions

Filters are predefined selectable attributes that narrow the search results, such as filtering for all products in a category or brand, among other conditions. You can add one or more conditions to a filter.

To add a condition using the Visual Editor, follow the steps below.

1. Click `Filter`.
2. Click `+ Add condition`.
3. Fill in the desired conditions. The available options are detailed in [Merchandising rule conditions](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
4. Click `Save`.

The defined conditions can work together (`and`) or alternatively (`or`).

In the <i class="far fa-ellipsis-v"></i> menu of each existing condition, you can `Duplicate` or `Delete` the condition. To deactivate all created conditions, click `Clear filters`.
