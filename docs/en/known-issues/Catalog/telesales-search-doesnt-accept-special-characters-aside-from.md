---
title: "Telesales search doesn't accept special characters aside from "@'."
id: 5eTb6KlR07dOP06BGhovoL
status: PUBLISHED
createdAt: 2024-07-29T17:21:34.828Z
updatedAt: 2024-07-29T17:21:35.918Z
publishedAt: 2024-07-29T17:21:35.918Z
firstPublishedAt: 2024-07-29T17:21:35.918Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: telesales-search-doesnt-accept-special-characters-aside-from
locale: en
kiStatus: Backlog
internalReference: 1072418
---

## Summary


Currently, when using the telesales search box, an user can impersonate shoppers to assist in purchases and, to do so, it is necessary to input, in the native searchbox, the email of whom's going to be impersonated.

However, when using this tool, emails that contains special characters, such as "+", "$", "#", etc... Are not identified by the search tool, making it return a "not found" response.


##

## Simulation


1 - in a store that has the telesales (https://help.vtex.com/en/tutorial/telesales-features--UqhiccIRIK2KD0OqkzJaS) implemented, access it via a user with the required authentication.

2 - create an email, in the store's masterdata, that uses a special character such as "+"

3 - try usingthe telesales impersonate toolbar for search for the given email - it will return a "not found" response.

4 - adjusting this same email to remove the special character and then searching again will normalize the situation.


##

## Workaround


Adapt the user email addresses to not use special characters.




