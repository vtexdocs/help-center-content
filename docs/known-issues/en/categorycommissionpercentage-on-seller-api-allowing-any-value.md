---
title: 'CategoryCommissionPercentage on Seller API allowing any value'
id: 2qFGcRO2H1JxHsYERf6X2s
status: PUBLISHED
createdAt: 2022-03-16T16:16:40.281Z
updatedAt: 2022-11-25T22:10:19.469Z
publishedAt: 2022-11-25T22:10:19.469Z
firstPublishedAt: 2022-03-16T16:16:40.836Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: categorycommissionpercentage-on-seller-api-allowing-any-value
locale: en
kiStatus: Backlog
internalReference: 382680
---

## Summary


In the PUT Seller API, the property CategoryCommissionPercentage accepts any kind of input, for example, text inputs. This can even break the indexing process for products that have SKUs in which this seller is included.



## Simulation


- In the path `/api/catalog_system/pvt/seller/{{id}}`, try updating the CategoryComissionPercentage property value to anything other than a floating-point, for example any kind of text;
- Check that the SKUs which this seller is included will not index anymore.



## Workaround


Don't use other kinds of value rather than floating-point

