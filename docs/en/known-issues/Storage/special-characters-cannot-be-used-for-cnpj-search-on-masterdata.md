---
title: "Special Characters cannot be used for CNPJ search on MasterData"
id: 4sgob00QXkGYPC3TjSpQeN
status: PUBLISHED
createdAt: 2022-06-21T15:35:26.675Z
updatedAt: 2024-12-12T19:59:49.961Z
publishedAt: 2024-12-12T19:59:49.961Z
firstPublishedAt: 2022-06-21T15:35:27.341Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: special-characters-cannot-be-used-for-cnpj-search-on-masterdata
locale: en
kiStatus: Backlog
internalReference: 602054
---

## Summary


The CNPJ and CPF field types are used amongst various parts of VTEX and they are essential fields present on the MasterData CL entity as well.

These fields must be formatted in a very specific manner and their special characters (such as "." and "/") are currently not compatible ith the search present in both the API ( ) and UI.


##

## Simulation


Go to your account's masterdata myaccount.vtexcrm.com.br
In the applications listing access your form for "Cleintes"
In the filters, search for "CNPJ"
Type a special character in your search, such as "/"
An "Erro Inesperado" window will pop up


##

## Workaround


Search using the "All" field or using double quotes ("00.000.000/0000-00") for the system to interpret the string or use alternative fields for searching or only aplhanumerical characters when searching with cpf and cnpf.





