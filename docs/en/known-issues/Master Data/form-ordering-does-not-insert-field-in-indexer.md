---
title: "Form ordering does not insert field in indexer"
id: 4rvX9Omm0gKqeuwiAYsIwu
status: PUBLISHED
createdAt: 2018-03-19T21:07:37.180Z
updatedAt: 2022-12-22T20:46:19.416Z
publishedAt: 2022-12-22T20:46:19.416Z
firstPublishedAt: 2018-03-19T21:28:13.258Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: form-ordering-does-not-insert-field-in-indexer
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

This scenario happens when you configure a field in the Master Data form that is not in the indexer as a filter or as an ordering pattern. By performing this action and accessing the form listing, an error is displayed on the screen, and the data is not loaded, becoming unavailable to the UI.


## Simulation

1. Edit the form.
2. Select a field that is not as "searchable" or as "filter" in the entity as "default sort" or as "filter" in the form.
3. Save the form.
4. Access the listing.

## Workaround

To fix this behavior, edit the data entity and mark the field as "searchable" or "filter", for use as "default sorting" and "filter", respectively.

1. Click on the gear symbol in the application where the form you want to edit is;
2. Click "Data Structure";
3. Edit the data entity;
4. Click the gear symbol in the field you want to configure;
5. Select the "searchable" option for the sorting order or the "filter" option for the filter configuration;
6. Save the entity;
7. Publish the entity.

Attention! There are types of fields that do not allow indexing, such as "text", for example. These fields should *never* be set as default sorting or as filter on the form.

