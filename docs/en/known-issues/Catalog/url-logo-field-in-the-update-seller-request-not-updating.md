---
title: 'Url Logo" Field in the Update Seller Request not Updating'
id: 1WmNl3RgesWAUL8rjitJV1
status: PUBLISHED
createdAt: 2022-01-21T15:18:15.945Z
updatedAt: 2022-11-25T21:41:41.226Z
publishedAt: 2022-11-25T21:41:41.226Z
firstPublishedAt: 2022-06-06T18:41:25.659Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: url-logo-field-in-the-update-seller-request-not-updating
locale: en
kiStatus: Fixed
internalReference: 271480
---

## Summary


Trying to update the "UrlLogo" field in the /api/catalog_system/pvt/seller route isn't reflecting any changes.

Also, the value in the API is always returned as null regardless of the value set in the interface field.



## Simulation



- Send a request with a valid value on the UrlLogo field using this API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-post-seller
- Wait for cache (something like 5 to 10 minutes) and check that this field UrlLogo will return as empty: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller

Notice that the URL logo field is not updating, it always returns a "null" value. (Even after 1h+, not cache at all)



## Workaround


n/a

