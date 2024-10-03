---
title: 'Updating Product Specifications Unviable due to Lacking Property on GET Resp. JSON'
id: 6FeuIyF2E5WdS0PNRRzgdA
status: PUBLISHED
createdAt: 2022-06-28T16:55:06.720Z
updatedAt: 2024-02-16T20:29:52.260Z
publishedAt: 2024-02-16T20:29:52.260Z
firstPublishedAt: 2022-06-28T16:55:07.124Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: updating-product-specifications-unviable-due-to-lacking-property-on-get-resp-json
locale: en
kiStatus: No Fix
internalReference: 301725
---

## Summary

The GET Product Specification response JSON lacks an essential property to update preexisting specifications if so needed by the user.

## Simulation

1) Use a GET product specification such as the one we currently have documented in our devdocs: https://merch.vtexcommercestable.com.br/api/catalog/pvt/product/17/specification?an=merch 

In this example, we have the following response: 

![](https://vtexhelp.zendesk.com/attachments/token/Wf7NUwNPNVp9HWS6cpyjKO1Ht/?name=inline-981699939.png)

Notice that I can get the "Value", "Id" and "name" with this req. This is currently the only way to get this kind of data via REST API. 

2) I've used the following request to  update this (after getting which is the fielded and fieldvalueid by consulting the category APIs):  https://merch.vtexcommercestable.com.br/api/catalog/pvt/product/17/specification?an=merch 

![](https://vtexhelp.zendesk.com/attachments/token/v7KbNJfqfW1t4Ccl82x6ZTzpo/?name=inline-2136871145.png)

Notice that an unique ID is returned in the response, this is the association ID of the specification with the product.

However, for an user to update any preexisting value, it will be needed to inform this ID and it's only returned in the response of the first insertion and nowhere else (via API). 

This issue is the opening of the acknowledgement of this problem and tracking of a future possible adjustment, even if it's not a product bug per see but a faulty/incomplete usability. 

## Workaround

Use the catalog specification export (https://merch.myvtex.com/admin/Site/ProdutoExportacaoImportacaoEspecificacaoV2.aspx) to get the desired ID association ID:

![](https://vtexhelp.zendesk.com/attachments/token/f2mM8DIYgkgBGsNdDiBmE4dW6/?name=inline1262577879.png)

OR

Use a delete specification for the old specification and send a new one, in which the response will come with a new ID to be saved. 

