---
title: 'Merchandising rules'
id: 2UEbxllrr98twbGIVhSPvi
status: PUBLISHED
createdAt: 2024-08-14T18:43:20.034Z
updatedAt: 2024-08-14T19:04:05.630Z
publishedAt: 2024-08-14T19:04:05.630Z
firstPublishedAt: 2024-08-14T18:48:03.081Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: merchandising-rules
legacySlug: merchandising-rules
locale: en
subcategoryId: 32zXHBMygA2dB6TbCjQJej
---

Merchandising rules allow you to modify search results to prioritize and return more relevant products to customers based on custom criteria. Thus, you can customize the products listed in the search, tailoring the results to your sales strategies.

You can use these rules to promote specific products based on user behavior by setting trigger rules, such as terms searched or filters applied.

Merchandising rules can promote, demote, add, or remove items from search results when triggered. To determine the items that will be affected, you can choose products, brands, categories, sellers, or other criteria.

You can configure merchandising rules for different use cases. See some examples in the table below:

| Action | Examples |
|---|---|
| Promote items | <ul><li>Defines greater relevance to the products of a specific brand. Example: When the customer searches for "smartphone," the products of this brand will be displayed at the beginning of the listing, followed by those from other brands.</li><li>Promote a specific product. Example: When the customer searches for "running t-shirt," the product "Running T-shirt" will be the first result displayed in the search results. Increase the relevance of products with linked promotions.</li></ul> |
| Add items | <ul><li>Display complementary products. Example: When searching for "laptop," add related accessories such as "laptop backpack" and "wireless mouse" to the search results.</li></ul> |
| Demote items | <ul><li>Demote products from a category or collection that is not highlighted at a specific time. Example: During the summer, decrease the relevance of winter items, such as "wool coats" in searches for "coat".</li></ul> |
| Remove items | <ul><li>Remove a specific product from search results. Delete a category that is not relevant to a specific customer segment. Example: Searching for "men's fashion" will remove women's fashion products from the results.</li></ul> |

## How it works

Merchandising rules are a priority configuration. So, if you create a rule to promote a specific product for a particular search, this product will be at the top of the results, regardless of the other [Relevance settings](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

What determines in which cases to apply a merchandising rule are the trigger rules, which are the set of [conditions](https://help.vtex.com/en/tutorial/merchandising-rules-conditions--4K9WCBiQ4ndU396ZygDpc2) that identify the scenarios where the action will be triggered.

## Best practices

Some of the main examples of the use of merchandising rules are:

* Promote a specific product for a particular search.
* Adjust the order of the products in the list. Example: A clothing store that wants to display search results in a specific order, like a window display.
* Remove products from the list but keep them directly accessible from the product details page. Example: A pharmacy that needs to hide antibiotics from search results but keep them available on the product details page.

Consider the following recommendations for using merchandising rules in your store:

* Manage merchandising rules based on Intelligent Search's [relevance rules](https://help.vtex.com/en/tutorial/relevance-rules--1o9jtVGjSIiptbqdNXIlNK) and [synonyms](https://help.vtex.com/en/subcategory/synonyms--BBzMtJan1UTxC9QZODnlN). Make sure that these three are aligned to avoid conflicts and provide a cohesive and efficient search experience.
* Don't use merchandising rules with opposite effects for the same items, as this can lead to unexpected behavior in search results.
* If too many merchandising rules are created, then the organic search will probably be greatly affected.
* Be careful when using global [trigger rules](https://help.vtex.com/en/tutorial/creating-merchandising-rules-manual-editor--3jrXB1MSvi14ezvKancorc#activation-rules), as they impact all searches.

<div class="alert alert-warning">
  <p>If the search results are not correct, we recommend not creating merchandising rules to fix them, as this could indicate some other configuration problem. In this case, please contact our<a href="https://support.vtex.com/hc/en-us/requests"> Support</a>.</p>
</div>

## Learn more

* [Merchandising rules list](https://help.vtex.com/en/tutorial/merchandising-rules-list--3CZOjyie1LZVOhzeviVCgu)
* [Creating merchandising rules - Visual Editor](https://help.vtex.com/en/tutorial/creating-merchandising-rules-visual-editor--3gPO5CMJ3Off0OtA3EPzow)
* [Creating merchandising rules - Manual Editor](https://help.vtex.com/en/tutorial/creating-merchandising-rules-manual-editor--3jrXB1MSvi14ezvKancorc)
* [Merchandising rule conditions](https://help.vtex.com/en/tutorial/merchandising-rule-conditions--4K9WCBiQ4ndU396ZygDpc2)
