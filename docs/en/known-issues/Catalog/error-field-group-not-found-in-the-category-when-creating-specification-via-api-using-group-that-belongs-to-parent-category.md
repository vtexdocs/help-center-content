---
title: 'Error "Field Group not found in the category" when creating specification via API using group that belongs to parent category'
id: 2xkVJw4JcfdhgV1Ag2HdGu
status: PUBLISHED
createdAt: 2024-10-01T19:01:14.594Z
updatedAt: 2024-10-01T19:01:15.471Z
publishedAt: 2024-10-01T19:01:15.471Z
firstPublishedAt: 2024-10-01T19:01:15.471Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: error-field-group-not-found-in-the-category-when-creating-specification-via-api-using-group-that-belongs-to-parent-category
locale: en
kiStatus: Backlog
internalReference: 1109219
---

## Summary


Is possible to create a specification using the following API:
https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification

The field "FieldGroupId" is the ID of the group of specifications that contains the new specification. However, when the group belongs to a parent category, not the category used for creating the specification, the error Field Group not found in the category is returned.


##

## Simulation



1. Create a group category on a Parent category
2. Use the API above to create a new specification on a child category
3. Fill the field FieldGroupId with the groupId from the parent category
4. Check that the error appears.


##

## Workaround


Create the specification via UI, create the specification on the parent category or create a group on the child category to use.





