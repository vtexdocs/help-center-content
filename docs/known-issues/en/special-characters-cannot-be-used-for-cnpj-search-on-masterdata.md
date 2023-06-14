---
title: 'Special Characters cannot be used for CNPJ search on MasterData'
id: 4sgob00QXkGYPC3TjSpQeN
status: PUBLISHED
createdAt: 2022-06-21T15:35:26.675Z
updatedAt: 2022-11-25T22:13:02.870Z
publishedAt: 2022-11-25T22:13:02.870Z
firstPublishedAt: 2022-06-21T15:35:27.341Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: special-characters-cannot-be-used-for-cnpj-search-on-masterdata
kiStatus: Backlog
internalReference: 602054
---

## Summary


The CNPJ and CPF field types are used amongst various parts of VTEX and they are essential fields present on the MasterData CL entity as well.

These fields must be formatted in a very specific manner and their special characters (such as "." and "/") are currently not compatible ith the search present in both the API ( ) and UI.





## Simulation



1. Go to your account's masterdata myaccount.vtexcrm.com.br
2. In the applications listing access your form for "Cleintes"
3. In the filters, search for "CNPJ"
4. Type a special character in your search, such as "/"
5. An "Erro Inesperado" window will pop up




## Workaround


Use alternative fields for searching or only aplhanumerical characters when searching with cpf and cnpf

