---
title: 'Creating recommendation lists (Beta)'
createdAt: 2026-03-17T13:01:10.919Z
updatedAt: 2026-03-17T13:01:10.919Z
publishedAt: 2026-03-17T13:01:10.919Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: creating-recommendation-lists
locale: en
---

> ℹ️ This feature is in closed beta and only available to selected clients. If you're a VTEX client and want to adopt this feature for your business, contact our [Commercial Support](https://help.vtex.com/en/docs/tracks/commercial-support). Additional fees may apply. If you're not a VTEX client but are interested in this solution, complete the [contact form](https://vtex.com/en-us/contact-us).

Creating recommendation lists allows you to define different strategies for displaying relevant products to consumers. Each list uses a recommendation strategy and is displayed in a specific position in the store.

This guide describes how to create a new recommendation list through the VTEX Admin.

> ⚠️ We don't recommend reusing the same list in multiple locations in the storefront. Create a list for each place to track performance metrics separately and in more detail.

## Requirement

The [Product recommendations](https://help.vtex.com/en/docs/tutorials/product-recommendations-beta) feature must be enabled in your store.

## Creating recommendation lists

To create a recommendation list in the VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Storefront > Recommendations**, or type **Recommendations** in the search bar at the top of the page.

2. Click the `+ List` button.

   ![create-recommendation-list-gif](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/product-recommendations-beta/creating-recommendation-lists_1.gif)

3. In the drawer, click the strategy for your recommendation list:

   - **Recommended for you:** Products that match buyer behavior and preferences.

   - **Similar products:** Alternatives with similar purpose or attributes.

   - **Recently viewed:** Products the buyer has interacted with recently.

   - **Most popular:** Products with the highest number of page views.

   - **Bought together:** Frequently bought with the currently viewed product.

   - **Manual collection:** Custom product group curated by the merchant.

   - **Visually similar products:** Items that resemble the current product in appearance.

   > ℹ️ Learn more about the available strategies in [Product Recommendations (Beta)](https://help.vtex.com/en/docs/tutorials/product-recommendations-beta).

4. Complete the information in the list creation form:

   - **Strategy:** Recommendation strategy selected in the previous step. If you need to change it, click the pencil icon.
   - **Name:** Name you want to give to the recommendation list. This will be the list title displayed in the store. We recommend using the title that will display on the storefront (example: "For you".
   - **Tags (optional):** Internal labels that group recommendation lists to simplify metric analysis. We recommend including the page where the list will be used as a tag (example: Home). Type the desired tag and press `Enter` or use a comma `,` to add it. You can add multiple tags.

   ![create-recommendation-list-2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/product-recommendations-beta/creating-recommendation-lists_2.png)

5. After completing all information, click the `Create` button to save the recommendation list.

   The confirmation message _List created successfully_ will be displayed. From this moment on, the list will be available for implementation in the storefront.

   ![create-recommendation-list-3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/product-recommendations-beta/creating-recommendation-lists_3.png)

## Copying the list ID

After creating the list, you'll need the list ID to add it to your storefront. Follow the steps below to copy the list ID:

- In the confirmation screen **List created successfully**, click the `Copy ID` button. The ID will be copied to your system clipboard.
- You can also copy the ID later via the [Recommendations dashboard](https://help.vtex.com/en/docs/tutorials/recommendations-dashboard):

  1. Go to **Storefront > Recommendations**.
  2. Find the desired list in the shelf table.
  3. Click the ⋮ menu on the shelf row.
  4. Select **Copy ID**.

## Implementing the list in the storefront

Use the [copied ID](#copy-list-id) to add the recommendation shelf to your store pages.

- For Store Framework, see the [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf) component documentation.
- For FastStore, see the guide [Implementing product recommendations in FastStore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore).
- For headless stores, see the guide [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores).

## Monitoring performance

Go to the [Recommendations dashboard](https://help.vtex.com/en/docs/tutorials/recommendations-dashboard) to analyze conversion metrics, click-through rate, and revenue generated by the list you created.

## Learn more

- [Product Recommendations (Beta)](https://help.vtex.com/en/docs/tutorials/product-recommendations-beta)
- [Recommendations dashboard (beta)](https://help.vtex.com/en/docs/tutorials/recommendations-dashboard)
- [Recommendation Shelf (Store Framework)](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf)
- [Implementing product recommendations in FastStore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore)
- [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores)
