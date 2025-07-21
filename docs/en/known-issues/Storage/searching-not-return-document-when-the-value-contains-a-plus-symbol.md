---
title: "Searching not return document when the value contains a + (plus) symbol."
id: 7oWiN8Esh9iKy8144Tpglx
status: PUBLISHED
createdAt: 2024-07-08T18:52:21.794Z
updatedAt: 2024-07-08T21:46:18.259Z
publishedAt: 2024-07-08T21:46:18.259Z
firstPublishedAt: 2024-07-08T18:52:22.908Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: searching-not-return-document-when-the-value-contains-a-plus-symbol
locale: en
kiStatus: No Fix
internalReference: 828170
---

## Summary


When searching for a document using a field value that includes the "+" symbol, the search does not return the document. This happens because the "+" symbol is incorrectly interpreted, resulting in the search value not matching the existing value.
_This issue happens both in the API and in the CRM_


##

## Simulation



1. Use the search API to query a field that includes a "+" symbol.
2. The search will return an empty array. Example:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=+5512345678901&_fields=id,userId,email,homePhone,firstName


In CRM UI:
If you search for an email that contains the symbol "+" an error will be returned.

    An unexpected error has occurred. Please try again. If the problem persists, contact support.



##

## Workaround


There are two ways to handle this issue:
Encode the "+" symbol to "%2B", so the search query becomes:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=%2B5512345678901&_fields=id,userId,email,homePhone,firstName


Use the "*" symbol as a wildcard, which will allow the search to match any character(s) before the specified value:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=*12345678901&_fields=id,userId,email,homePhone,firstName

This issue arises when searching for documents using field values that include the "+" symbol. The search API does not correctly interpret the "+" symbol, causing the search to fail by not matching the existing values. This problem is not limited to the "homePhone" field but can occur with other fields like email that might include special characters.
To work around this issue, you can either encode the "+" symbol as "%2B" in the search query or use the "*" symbol as a wildcard to ensure the search retrieves the correct documents.

