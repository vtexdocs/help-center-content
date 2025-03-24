---
title: 'Data Visualization Inconsistencies on Masterdata UI'
id: 5Sq6WAfBWynrOIZx8rFKdu
status: PUBLISHED
createdAt: 2024-09-27T18:00:31.097Z
updatedAt: 2024-09-27T18:00:32.575Z
publishedAt: 2024-09-27T18:00:32.575Z
firstPublishedAt: 2024-09-27T18:00:32.575Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: data-visualization-inconsistencies-on-masterdata-ui
locale: en
kiStatus: Backlog
internalReference: 1107262
---

## Summary


When a field in an entity is configured to have a default value and a document with a null value for this field is accessed through the Masterdata UI, the UI will incorrectly display the default value. This issue typically occurs with documents created before this field was configured, as the creation of the field does not retroactively update existing documents.


##

## Simulation



1. Check the document via the API and verify that the field in question is null.
2. Access the same document via the Masterdata UI, where the field will incorrectly display the configured default value.


##

## Workaround


Update documents where the field is null to have the default value. This can be done by filtering documents with null values using the Search API: Masterdata Search API and updating the document using the Partial Update API: Partial Update API.





