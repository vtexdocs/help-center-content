---
title: Category Commissioning on the seller config generates Time Out
id: 5NsiGAjTIK1ygBvJo1ks2k
status: PUBLISHED
createdAt: 2022-09-05T14:18:53.669Z
updatedAt: 2022-11-25T21:42:57.979Z
publishedAt: 2022-11-25T21:42:57.979Z
firstPublishedAt: 2022-09-05T14:18:54.161Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: category-commissioning-on-the-seller-config-generates-time-out
kiStatus: Fixed
internalReference: 310527
---

## Summary


If an account has lots of categories, on the seller configuration screen it may not be load the Category Commissioning due to a time-out.




## Simulation



- Go to an account with lots of categories in the seller listing https://myaccount.myvtex.com/admin/Site/SellerAlterar.aspx?Id=seller_id
- Try to change the Category Commissioning.



## Workaround


Use the update via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-put-seller

