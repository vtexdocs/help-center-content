---
title: 'Apply the discount to the most expensive items - UI not saving data.'
id: 6VQuVOAtzbA6OyjDEi2bHh
status: PUBLISHED
createdAt: 2024-04-03T17:29:36.171Z
updatedAt: 2024-04-03T17:29:37.024Z
publishedAt: 2024-04-03T17:29:37.024Z
firstPublishedAt: 2024-04-03T17:29:37.024Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: apply-the-discount-to-the-most-expensive-items-ui-not-saving-data
locale: en
kiStatus: Backlog
internalReference: 1011071
---

## Summary


When using the promotions UI, manually attempting to save the "Apply to the most expensive items" option will not work and the selector will remain at the cheapest type option.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Simulation


1 - Go to the promotions User Interface: https://account_name.myvtex.com/admin/promotions

2 - In the promotions UI, select the option to "Apply the discount to the most expensive items"

3 - Save the promotion

4 - Access it once again, the box to apply for the cheapest option will be selected instead.


##

## Workaround


Use the promotions save API instead https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration





