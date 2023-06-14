---
title: CRM error when searching with spaces
id: 6Rp3IesViMyuwy8ocACYGk
status: PUBLISHED
createdAt: 2018-12-26T15:12:07.010Z
updatedAt: 2022-12-22T20:45:45.425Z
publishedAt: 2022-12-22T20:45:45.425Z
firstPublishedAt: 2018-12-26T17:33:45.886Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: crm-error-when-searching-with-spaces
kiStatus: Backlog
internalReference: 
---

## Summary

User receives a generic error message when using the CRM's search bar to filter documents containing attributes with spaces. Example:Searching for a city called "Rio de Janeiro" will yield an error message

[Screen Shot 2018-12-26 at 14.38.55](https://images.ctfassets.net/alneenqid6w5/6kN77jtFDOKME8UiW0acW8/e3bc9a3bcb750f30067f11befdd78fcb/Screen_Shot_2018-12-26_at_14.38.55.png)

## Simulation

1.  Visit https://{{account}}.vtexcrm.com.br
2.  Click on the desired tab
3.  Choose a field from a dropdown
4.  Type in an attribute that you know contains spaces.

## Workaround

![Screen Shot 2018-12-26 at 14.40.03](https://images.ctfassets.net/alneenqid6w5/1LUggCuWywGosGoCOgKE2g/426a9dbd86c26f15a9db06cadb88ec46/Screen_Shot_2018-12-26_at_14.40.03.png)
Fortunately there is a simple workaround that does not require the use of an API.  By clicking on the "Todos"("All") dropdown next to the search bar, the same search can be made successfully without an error message.

