---
title: 'Creating merchandising rules - Visual Editor'
id: 3gPO5CMJ3Off0OtA3EPzow
status: PUBLISHED
createdAt: 2024-06-27T17:16:02.371Z
updatedAt: 2024-06-27T17:16:43.289Z
publishedAt: 2024-06-27T17:16:43.289Z
firstPublishedAt: 2024-06-27T17:16:43.289Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-merchandising-rules-visual-editor
locale: en
legacySlug: creating-merchandising-rules-visual-editor
subcategoryId: 32zXHBMygA2dB6TbCjQJej
---

To configure a VTEX Intelligent Search [merchandising rule](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) using [Visual Editor](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicao), follow the steps below.

1.	In the VTEX Admin, go to **Storefront**, or type **Storefront** in the search bar at the top of the page.
2.	Under **Intelligent Search**, click **Merchandising Rules**.
3.	Click the `+ New` button.
4.	Complete the following fields:

	* **Rule name**: Merchandising rule name. Example: Promote product A when searching for a chocolate cookie.
	* **Start date (optional)**: Set a date from which the merchandising rule will apply. The date follows the UTC-0 time zone.
	* **End date (optional)**: Set a date when the merchandising rule will no longer apply to store searches. The date follows the UTC-0 time zone.
	* **Apply to locales:** Languages to which the merchandising rule will apply. The field is only available for stores using [Multilanguage settings (Beta)](https://help.vtex.com/en/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).
5.	Click **Visual Editor**. Read the [Types of editing](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicao) section for more information about each editor.
6.	Click `Next`.
7.	Define at least one search term or filter for applying the merchandising rule:

	* To define a search term, type the term in the search bar (item **II** in the  [Actions available in the Visual Editor](#actions-available-in-the-visual-editor) section).
	* To create a filter for applying the merchandising rule (item **III** in the  [Actions available in the Visual Editor](#actions-available-in-the-visual-editor) section), follow the steps described in the[ Adding filters and conditions](https://help.vtex.com/pt/tutorial/criar-regra-de-merchandising-editor-visual-beta--6xteumx9MsDt0uEppbChu3#adicionar-filtros-e-condicoes) section.
8.	You can also perform the following additional actions to customize the search results.

	* Define the number of items per row in the search results.
	* Define the number of items per page in the search results.
	* Hide products in the search results.
	* Pin products to the top positions of the search results.
	* Drag the pinned product to the desired position in the search results.
	* Edit the initial settings of the merchandising rule, including the rule name, start and end dates, and the locales to which it will be applied if the store uses the[ Multilanguage settings (Beta)](https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).

      Learn more about these actions in items **IV, V, VI, VIII, IX**, and **XI** of the [Actions available in the Visual Editor](#actions-available-in-the-visual-editor) section.
9.	Click `Save`.

>ℹ️ After saving, the changes to merchandising rules will take an average of two minutes to be updated.

## Actions available in the Visual Editor

The Visual Editor for merchandising rules in VTEX Intelligent Search allows you to perform the actions shown in the image below:

![visual-merch-rules-EN-v2](//images.ctfassets.net/alneenqid6w5/1wQEvrFFEp5ixHPCVtHsxa/2f765817f537bc8477b0d6fddfb171b8/visual-merch-rules-EN-v2.png)

<ol class="mv7" type="I">
    <li class="t-body c-on-base mb5 lh-copy">Edit the name of the merchandising rule.</li>
    <li class="t-body c-on-base mb5 lh-copy">Define search terms to apply the merchandising rule.</li>
    <li class="t-body c-on-base mb5 lh-copy">Set <a href="#adding-filters-and-conditions" rel="noopener noreferrer"
            target="_self"
            class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">filters</a>
        to apply the merchandising rule.</li>
    <li class="t-body c-on-base mb5 lh-copy">Define the number of items per row in the search results.</li>
    <li class="t-body c-on-base mb5 lh-copy">Define the number of items per page in the search results.</li>
    <li class="t-body c-on-base mb5 lh-copy">Hide products in the search results. Hidden products appear in gray with the crossed-out eye icon <i class="far fa-eye-slash"></i> in the Visual Editor. To display a hidden product again, hover over it and click the eye icon <i class="far fa-eye"></i>.</li>
    <li class="t-body c-on-base mb5 lh-copy">View product details. The information displayed is:<br /><br />
    	 <ul>
			   <li class="t-body c-on-base mb5 lh-copy"><strong>Available:</strong> Indicates whether the product is available in the store.</li>
				<li class="t-body c-on-base mb5 lh-copy"><strong>Clicks:</strong> Number of clicks over the last 90 days.</li>
				<li class="t-body c-on-base mb5 lh-copy"><strong>Orders:</strong> Number of orders containing the product that were placed over the last 90 days.</li>
				<li class="t-body c-on-base mb5 lh-copy"><strong>Revenue:</strong> Revenue the product represented over the last 90 days.</li>
				<li class="t-body c-on-base mb5 lh-copy"><strong>Launch date:</strong> Date on which the product was launched.</li>
				<li class="t-body c-on-base mb5 lh-copy"><strong>Promotion:</strong> Indicates whether the product participates in a promotion.</li> 
				<li class="t-body c-on-base mb5 lh-copy"><strong>Discount:</strong> Discount applied to the product.</li>
				<li class="t-body c-on-base mb5 lh-copy"><strong>Available matrix variety:</strong> Represents the percentage of SKUs available for a product. For example, if a product has five SKUs and only three are available, the available matrix variety will be 60%, represented as 0.6 in this field. If all the SKUs are available, the field value will be 1.</li>
		    </ul>
	    </li>
    <li class="t-body c-on-base mb5 lh-copy">Drag the pinned product to the desired position in the search results. You can only drag pinned products (action <strong>IX</strong> in this list).</li>
    <li class="t-body c-on-base mb5 lh-copy">Pin products to the top positions of the search results. By pinning product A and then product B, they will appear in this order in the search results, just before the others. To pin a product, hover over it and click the pin-crossed icon <i class="fas fa-thumbtack"></i>.</li>
    <li class="t-body c-on-base mb5 lh-copy">Navigate between search result pages.</li>
    <li class="t-body c-on-base mb5 lh-copy">Cancel editing.</li>
    <li class="t-body c-on-base mb5 lh-copy">Save settings.</li>
</ol>

### Adding filters and conditions

Filters are predefined selectable attributes that narrow the search results, such as filtering for all products in a category or brand, among other conditions. You can add one or more conditions to a filter.

To add a condition using the Visual Editor, follow the steps below.

1. Click `Filter`.
2. Click `+ Add condition`.
3. Fill in the desired conditions. The available options are detailed in [Merchandising rule conditions](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
4. Click `Save`.

The defined conditions can work together (`and`) or alternatively (`or`).

In the <i class="far fa-ellipsis-v"></i> menu of each existing condition, you can `Duplicate` or `Delete` the condition. To deactivate all created conditions, click `Clear filters`.
