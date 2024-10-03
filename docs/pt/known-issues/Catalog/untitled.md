---
title: 'Product not flagged to a specific SC can still be available for this SC.'
id: 6u8IBlt5MbC3eKMUrfDhp2
status: DRAFT
createdAt: 2022-01-21T14:30:40.326Z
updatedAt: 2022-01-21T14:30:40.326Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: 
slugEN: untitled
locale: pt
kiStatus: Backlog
internalReference: 308613
---

## Sumário


Product not flagged to a specific SC can still be available for this SC. This scenario happens when the Sales Channel is associated to a collection on its config, and the product is available for this collection.
Even it is not available for the SC on the product interface, as the SC is associated to this collection, if the product is available for the collection, he will be available for this SC.



## Simulação


- Associate a collection to a SC;
- Put this product to be available to this collection and not for the SC on its configuration;
- The product will be available to the SC.



## Workaround


Remove the product from the collection.

provider=*&form.subject=*&form.email=*&form.env_type=app_version!%3D%22*-beta*%22&form.app_version=*



## Workaround


Check if the email was sent using Splunk.

