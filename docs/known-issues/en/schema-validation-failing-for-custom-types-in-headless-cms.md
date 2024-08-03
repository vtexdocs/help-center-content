---
title: 'Schema validation failing for custom types in Headless CMS'
id: 2dcDsFQkqbNqJZXEzztQ11
status: PUBLISHED
createdAt: 2023-09-19T21:43:59.145Z
updatedAt: 2023-09-19T21:43:59.945Z
publishedAt: 2023-09-19T21:43:59.945Z
firstPublishedAt: 2023-09-19T21:43:59.945Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: schema-validation-failing-for-custom-types-in-headless-cms
locale: en
kiStatus: Backlog
internalReference: 903687
---

## Summary



We have failing schema validations in required fields without default value in Headless CMS for custom page types, the lib that we use is considering it failing but the required fields are filled correctly


##

## Simulation



Create a schema structure for a specific page with a required field and don't put a default value for this required field


    ..."required": ["field1"],"properties": { "field1": { "title": "Field", "type": "string", "description": "Some description" }}...



##

## Workaround


Put a default value in the required fields





