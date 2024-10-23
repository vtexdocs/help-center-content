---
title: 'Error approving skus that were rejected or reviewed by Offer Quality'
id: 7fRMTxq7CFRkyZeK08AGIg
status: PUBLISHED
createdAt: 2023-11-23T13:46:30.453Z
updatedAt: 2024-03-25T12:22:46.687Z
publishedAt: 2024-03-25T12:22:46.687Z
firstPublishedAt: 2023-11-23T13:46:31.370Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: error-approving-skus-that-were-rejected-or-reviewed-by-offer-quality
locale: en
kiStatus: Fixed
internalReference: 940998
---

## Summary


When a sku fails the Offer Quality rules created by the Marketplace, it goes directly to the "Review Tab" or "Rejected Tab" of Received Skus.

However, when trying to approve the sku, an error message is returned: "Sorry, something went wrong in the Catalog. Please try again or contact VTEX if the problem persists."

This happens because the Matcher module was not able to fill the product and sku information after sending the sku to these Tabs (you can check this using the APIs):
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketplace/error-approving-skus-that-were-rejected-or-reviewed-by-offer-quality_1.png)


##

## Simulation



1. Create an optional or mandatory rule on Offer Quality;
2. Wait for a sku to fail the rule and go to the Review/Rejected Tab;
3. Try to approve the sku and get an error message;
4. Check via API if the matches object is filled like the image above.


##

## Workaround


Approve the sku via API passing the correct product and sku information manually.





