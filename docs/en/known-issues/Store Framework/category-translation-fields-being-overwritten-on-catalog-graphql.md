---
title: 'Category translation fields being overwritten on catalog graphql'
id: 2nZlEN8Tlt7oKfF77u63ch
status: PUBLISHED
createdAt: 2023-03-22T15:48:59.725Z
updatedAt: 2023-03-22T15:49:00.550Z
publishedAt: 2023-03-22T15:49:00.550Z
firstPublishedAt: 2023-03-22T15:49:00.550Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: category-translation-fields-being-overwritten-on-catalog-graphql
locale: en
kiStatus: Backlog
internalReference: 654896
---

## Summary


When translating content using the catalog-graphql app or catalog translation, the fields like name, title, or description are being overwritten. This behavior only happens if one of these fields (name, title, description) is equal on the catalog registration


##

## Simulation



- Check the category configuration in the admin
- Check the fields "Name", "Category Page Title (Tag Title)", "Category Description (Meta Tag Description)", at least two of them must be equal
- Follow the documentation: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category


##

## Workaround


When registering the category, the name, title, and description fields must be different



