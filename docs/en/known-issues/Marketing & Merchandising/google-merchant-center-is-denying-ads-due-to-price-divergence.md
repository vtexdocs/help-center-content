---
title: 'Google Merchant Center is denying ads due to price divergence'
id: PzvIhzUPXUOCNKWy9YGGC
status: PUBLISHED
createdAt: 2019-08-13T21:12:20.480Z
updatedAt: 2020-05-05T14:12:22.524Z
publishedAt: 2020-05-05T14:12:22.524Z
firstPublishedAt: 2019-08-13T21:24:41.844Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: google-merchant-center-is-denying-ads-due-to-price-divergence
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

Some stores have had their Google Merchant Center ads denied due to price divergence problems. This scenario may occur when the store sends modified prices through the integration, something commonly done to advertise a promotional spot price on media channels.  
  
Google normally verifies if the value sent by the integration corresponds to the one displayed on the product page. Promotional values are commonly applied through Javascript, as [this scenario](https://help.vtex.com/known-issues/google-merchant-center-denies-ads-due-to-price-divergence--PzvIhzUPXUOCNKWy9YGGC) suggests, but this may not be enough when a page sweep of the _rich snippets_ is done.  

VTEX offers the <vtex.cmc:cmc:productRichSnippets/> ViewPart, documented in the templates control list. It implements structured data to facilitate the product information sweep. Naturally, it delivers the product's original value, rather than the promotional value expected by Google in this context, resulting in the divergence and denial of the ad.  

## Simulation

1. Create a promotion that grants a 5% discount for payment by "boleto" (popular Brazilian offline payment method)
2. Access the product page
3. Note that the result displayed by the "productRichSnippets" ViewPart shows the product's original price.

## Workaround

It's not possible to dynamically alter the _productRichSnippets_ result so that Google may read the promotional product information. Therefore, we suggest removing the native ViewPart in order for Google to perform an implementation to print the structured data in a customized way. We recommend using _JSON+LD_ format, which is presently simpler. 
  
Kindly refer to the documentation below for more on this implementation:
  
[**Google** - # Understand how structured data works](https://developers.google.com/search/docs/guides/intro-structured-data?hl=en-us)
  
[**Google** - # Follow the structured data guidelines](https://developers.google.com/search/docs/guides/sd-policies?hl=en-us)  
  
[**Google** - # Structured data markup on product page](https://developers.google.com/search/docs/data-types/product?hl=en-us)  
  
[**Neil Patel** - # How to add Structured Data to your website](https://neilpatel.com/blog/structured-data/)  
  
**Update:** This scenario has already been solved by our development team and will benefit from a native solution. The _skuPrice_ and _productRichSnippets_ will soon accept new parameters that will enable a promotional price to be automatically rendered on a page, without the need for customized Javascript implementations.

