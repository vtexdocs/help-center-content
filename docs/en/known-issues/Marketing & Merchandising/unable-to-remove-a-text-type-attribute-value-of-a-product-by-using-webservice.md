---
title: 'Unable to remove a text type attribute value of a product by using WebService'
id: 3jyqCliMA8026y2GgwQoyG
status: PUBLISHED
createdAt: 2018-01-02T21:22:34.885Z
updatedAt: 2022-12-22T20:46:03.803Z
publishedAt: 2022-12-22T20:46:03.803Z
firstPublishedAt: 2018-01-03T14:15:26.277Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Web Service
slugEN: unable-to-remove-a-text-type-attribute-value-of-a-product-by-using-webservice
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When a specific product tries to remove the value of one of its text-type attributes from WebService, the response indicates that it is mandatory for it to have a value, but the user is allowed to make the change. This reason makes it impossible to automate the integration to remove already associated attributes.

## Simulation

1. Generate a call to WS ProductSpecificationInsert, indicating the correct ProductId and its fieldName.
2. Inside fieldValues, leave the string empty, simulating removing the attribute value.
3. Run the call to the webservice after which the error is shown indicating that the value of the attribute cannot be empty.

## Workaround

It is possible to remove the value of the desired attribute from the user interface of Product Manager. The product must be entered, the attribute must be identified and the desired value must be deleted. Afterwards, save the changes and the removed value will be updated.

