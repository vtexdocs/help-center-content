---
title: 'Error fetching texts - CMS Module'
id: 7g9e4G7i12CSs4OK0YgCi4
status: PUBLISHED
createdAt: 2017-08-17T20:44:25.357Z
updatedAt: 2022-12-22T20:55:13.797Z
publishedAt: 2022-12-22T20:55:13.797Z
firstPublishedAt: 2017-08-17T20:59:07.751Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5V92cmF9jG8KG600EwUgEg
tag: Portal (CMS)
slug: error-fetching-texts-cms-module
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

We detect an unexpected behavior when trying to perform the change/translation of a text in the Settings - Store text area. This behavior leads to an error when searching the word to be changed or translated. In some cases it doesn't generate the error and does not return the result.

## Simulation

1. Access CMS -> Settings -> Store texts.
2. Search for the word "range".
3. When searching, the system sometimes doesn't filter precisely the pages that contain this word. Other times, it leads to an error.

## Workaround

Put the word in the search field, then choose the variable you want to change. Example: "FaixaPreco". The system will bring the word in the result field.

