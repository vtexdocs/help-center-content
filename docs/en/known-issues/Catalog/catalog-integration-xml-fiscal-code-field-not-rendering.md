---
title: 'Catalog Integration XML fiscal code field not rendering'
id: 19Ubw33gsHcyIeMUQA3LGh
status: PUBLISHED
createdAt: 2024-05-10T14:28:22.117Z
updatedAt: 2024-05-10T14:28:23.190Z
publishedAt: 2024-05-10T14:28:23.190Z
firstPublishedAt: 2024-05-10T14:28:23.190Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-integration-xml-fiscal-code-field-not-rendering
locale: en
kiStatus: Backlog
internalReference: 1031109
---

## Summary


Currently, the catalog XML configuration for the fiscal code field is not rendering the expected results, it always returns a <![CDATA[]]>


##

## Simulation


1 - Register a fiscal code in a product of your store.
2 - In your account's XML configuration https://myaccountname.myvtex.com/admin/Site/Xml.aspx, set up the XML fiscal code field

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-integration-xml-fiscal-code-field-not-rendering_1.png)

3 - Load the generated XML and, despite the product having valid data in it, the fiscal code XML tags will not load valid content.


##

## Workaround


Use other means of catalog integration if a fiscal code is absolutely necessary in your store's operations.





