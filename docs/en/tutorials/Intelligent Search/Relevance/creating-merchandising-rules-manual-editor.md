---
title: 'Creating merchandising rules - Manual Editor'
id: 3jrXB1MSvi14ezvKancorc
status: PUBLISHED
createdAt: 2024-06-27T17:14:53.957Z
updatedAt: 2024-06-27T17:15:56.346Z
publishedAt: 2024-06-27T17:15:56.346Z
firstPublishedAt: 2024-06-27T17:15:56.346Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-merchandising-rules-manual-editor
locale: en
legacySlug: creating-merchandising-rules-manual-editor
subcategoryId: 32zXHBMygA2dB6TbCjQJej
---

Follow the steps below to configure a [merchandising rule](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) in the VTEX Intelligent Search Manual Editor.

1. In the VTEX Admin, go to **Storefront**, or type **Storefront** in the search bar at the top of the page.
2. Under **Intelligent Search**, click **Merchandising Rules**.
3. Click the <i class="fas fa-plus"></i> `New` button.
4. Complete the fields (detailed below).
   * **Rule name**: Name of the merchandising rule. Example: Promote product A when searching for a chocolate cookie.
   * **Start date (optional)**: Set a date from which the merchandising rule will apply. The date follows the UTC-0 time zone.
   * **End date (optional)**: Set a date on which the merchandising rule will no longer apply to store searches. The date follows the UTC-0 time zone.
   * **Apply to locales:** Languages to which the merchandising rule will apply. The field is only available for stores using [Multilanguage settings (Beta)](https://help.vtex.com/en/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).
5. Click on **Manual editor**. For more information on each editor, see [Types of editing](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#types-of-editing).
6. Click `Next`.
7. If necessary, you can change what you have already filled in about the new merchandising rule in the [General Information](#general-information) section.
8. Define the [Trigger rules](#trigger-rules), the set of conditions that determine when the merchandising rule will be applied.
9. Define the [Customization rules](#customization-rules), the set of conditions that control the search results that meet the trigger rules set in step 8.
   Add one or more conditions to apply the desired customization effect in this step. To learn how to add a condition, see [Merchandising rule conditions](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
10. Click `Save`.

>ℹ️ After saving, the changes to merchandising rules will take an average of two minutes to be updated.

## Example

Imagine the following example: You want to promote Beautyx products during the 4th of July week. When the customer searches for "soap" or "shampoo", the search should promote the brand's products, so the configuration should be:

* **Rule name**: 4th of July promotion
* **Start date**: Select the first day of the 4th of July week.
* **End date**: Select the last day of the 4th of July week.
* **Trigger Rules:**
   * `Term is soap`
   `or`
   * `Term is shampoo`
* **Customization Rules**:
   * **Promote**
       * `Brand is beautyx`

## Manual Editor fields

### General information

   * **Name**: Name of the merchandising rule. Example: Promote product A when searching for a chocolate cookie.
   * **Start date**: Set a date from which the merchandising rule will apply. The date follows the UTC-0 time zone.
   * **End date**: Set a date on which the merchandising rule will no longer apply to store searches. The date follows the UTC-0 time zone.
   * **Locales:** Languages to which the merchandising rule will apply.

### Trigger rules

* **Global trigger**: If you activate this option, the merchandising rule will always be active and cover all search terms and filters, and you won't need to set conditions for trigger rules. This allows you to add, remove, promote, and demote products from all searches in the store.
   However, if you choose to keep the Global trigger disabled, you need to add at least one condition to build the trigger rules. See [Merchandising rule conditions](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW) to learn more about adding a condition.
* <i class="fa-solid fa-link"></i> `Autofill from a URL`: Add the search page URL where the trigger rules will be applied. The URL must include `map` and `query` to work, using the following format: `https://{accountName}.myvtex.com/busca/{term}?map=ft&query={term}`. You need to replace `{accountName}` with the VTEX account name and `{term}` with the search term.
* `Add Condition`: When creating a condition, the merchandising rule only applies to cases that meet the established set of conditions. To learn how to create conditions, see [Merchandising rule conditions](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).

### Customization rules

* **Add**: Includes the selected conditions in the result, which means it adds products that would not be displayed in the search results. The sorting of the added products is not considered in the search results.
   Added products are also ranked in the first positions; however, they have a lower weight than the **Promoted** ones. Therefore, if you have one product being added and another promoted, the promoted one would display first and then the added one.

* **Remove**: Deletes the selected conditions from the result, so it removes products that would be displayed in the search results.

  >ℹ️ **Add** and **Remove** are compatible with other sorting types, not based on the configured relevance. So, suppose you add or remove a product using a merchandising rule, and the customer sorts the search results by price. In that case, the products will be sorted by price, and the products displayed will follow the merchandising rule.

* **Promote**: Highlights selected conditions in the result, giving more relevance to a product normally displayed in the search results. The order of the conditions affects the priority in which they are displayed. Besides, a product added to this field is only promoted in one result.

* **Demote**: Hides the selected conditions in the result. This allows you to deprioritize a product normally displayed in the search results.

  >ℹ️ **Promote** and **Demote** only work when your customers sort the search results by relevance. If they sort it by price, the products will be sorted strictly by price, and the merchandising rule will not be applied.

  >⚠️ Do not set conditions that will affect the same products in the **Promote** and **Demote** sections, since these are opposite effects. This misconfiguration negatively influences the feature's behavior and does not produce the desired results.
