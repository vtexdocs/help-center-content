---
title: Seller Logo not being saved as an URL
id: 2bcjVyapAH9d19w79kOB2b
status: PUBLISHED
createdAt: 2023-01-19T14:36:20.412Z
updatedAt: 2023-04-18T12:16:33.539Z
publishedAt: 2023-04-18T12:16:33.539Z
firstPublishedAt: 2023-01-19T14:36:20.904Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: seller-logo-not-being-saved-as-an-url
kiStatus: Fixed
internalReference: 736716
---

## Summary



The seller logo information on the database is not being saved as an URL, but as an Image.

Currently our orderform documentation states that this field is supposed to be an URL:
https://developers.vtex.com/docs/guides/orderform-fields#sellers
 ![](https://vtexhelp.zendesk.com/attachments/token/SNx3LvZCcZAZHXrEnMaa5EUkh/?name=image.png)

But on our database is being saved in a different format.



##

## Simulation



1. Set a logo for a seller via UI or API;
2. Check via GET Seller API (https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers/-sellerId-) the format of the field "UrlLogo".
3. Check on the orderform it also won't be an URL.


##

## Workaround


No workaround.




