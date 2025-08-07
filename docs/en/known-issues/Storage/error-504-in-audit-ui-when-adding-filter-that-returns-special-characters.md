---
title: "Error 504 in Audit UI when adding filter that returns special characters."
id: 3TirfbtYMif8F5MErKUBQw
status: PUBLISHED
createdAt: 2024-12-16T19:56:30.635Z
updatedAt: 2024-12-16T19:56:32.223Z
publishedAt: 2024-12-16T19:56:32.223Z
firstPublishedAt: 2024-12-16T19:56:32.223Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-504-in-audit-ui-when-adding-filter-that-returns-special-characters
locale: en
kiStatus: Backlog
internalReference: 1151566
---

## Summary


Adding a filter in the Audit UI results in an error. This issue occurs because the field's value contains a special character that the UI cannot interpret, causing the application to fail.


##

## Simulation



- Navigate to the Audit UI `https://.myvtex.com/admin/ui/audit`.
- Add an "Event Detail" field to the application "Site Editor".
- Observe that the application throws an error `504 gateway Timeout` when attempting to process details `Something went wrong`.

 ![](https://vtexhelp.zendesk.com/attachments/token/rK7X8AT7k1gH5uh71R9Mksvdd/?name=Captura+de+Tela+2024-12-16+a%CC%80s+15.53.33.png)


##

## Workaround

"N/A"

