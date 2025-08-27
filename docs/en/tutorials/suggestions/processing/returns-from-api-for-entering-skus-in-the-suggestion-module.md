---
title: 'Returns from API for entering SKUs in the Suggestion module'
id: tutorials_4927
status: PUBLISHED
createdAt: 2017-04-27T21:49:35.443Z
updatedAt: 2020-12-18T12:34:45.310Z
publishedAt: 2020-12-18T12:34:45.310Z
firstPublishedAt: 2017-04-27T23:11:17.955Z
contentType: tutorial
productTeam: Channels
author: authors_41
slugEN: returns-from-api-for-entering-skus-in-the-suggestion-module
legacySlug: returns-from-api-for-entering-skus-in-the-suggestion-module
locale: en
subcategoryId: 2P4LrAbvyEiCaekmaWaEOk
---

Some stores use partners to integrate sellers’ SKUs, in VTEX-VTEX integrations, using APIs. The purpose of this article is to help you deal with the errors that may be returned during this operation.

The APIs used to integrate sellers’ SKUs can be found at: [https://developers.vtex.com/reference/marketplace-api-overview](https://developers.vtex.com/reference/marketplace-api-overview)

When SKUs are entered via API, some errors may be returned in addition to the confirmed success returns. These errors are listed in the following table: each of them is identified by a number from 0 to 23 (apart from errors 99 and 999, which are unknown errors). The column on the left shows the names describing each error.

From this table you can see what the errors returned in the integration refer to, so that the SKU suggestions can be handled and approved successfully.

| Error     | Code     |
| ---------- | ---------- |
| NotSpecifiedError     | 0     |
| MatchCategoryIdIsEmpty       | 1       |
| MatchBrandIdIsEmpty       | 2       |
| ProductNameIsEmpty       | 3       |
| SkuNameIsRequired       | 4       |
| SkuHeightIsRequired       | 5       |
| SkuWeightIsRequired       | 6       |
| SkuLengthIsRequired       | 7       |
| SkuWidthIsRequired       | 8       |
| SkuImagesAreRequired       | 9       |
| EanOrRefIdAreRequired       | 10       |
| SkuImageUrlIsInvalid       | 11       |
| ProductOrSkuHasInvalidSpecificationLength       | 12       |
| MatcherIdRequired       | 13       |
| MatchSkuRefIsNotValid       | 14       |
| MatchScoreIsNotInRange       | 15       |
| SuggestionNotFound       | 16       |
| MatchOldVersion       | 17       |
| SuggestionIsNotPending       | 18       |
| MatchBrandIdIsInvalid       | 19       |
| MatchCategoryIdIsInvalid       | 20       |
| MatchProductRefIsInvalid       | 21       |
| SellerIdAndMarketplaceSkuIdAlreadyExists       | 22       |
| SellerIdAndSellerSkuIdAlreadyExists       | 23       |
| Unknown error (error of communication with the catalogue; we are working on a better description)       | 99       |
| Unknown error (error of communication with the catalogue; we are working on a better description)       | 999       |
