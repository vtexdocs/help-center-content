---
title: "Busca por marca com apóstrofo não retorna dados no Admin"
id: 2Z3k2leNVmCoBIPmIPDrz2
status: PUBLISHED
createdAt: 2020-05-05T15:36:13.219Z
updatedAt: 2022-12-22T20:43:15.385Z
publishedAt: 2022-12-22T20:43:15.385Z
firstPublishedAt: 2020-05-18T14:24:59.715Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: busca-por-marca-com-apostrofo-nao-retorna-dados-no-admin
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Na seção __Marcas__ do Admin (`https://{nomedaloja}.myvtex.com/admin/Site/Marca.aspx`), caso você busque uma marca que possui um apóstrofo (') no nome, ela não será encontrada no resultado de busca. Isso ocorre mesmo que a marca exista na lista. Apesar disso, os demais caracteres especiais funcionam corretamente.

## Simulação

1. Crie uma marca em que o nome contenha apóstrofo;
2. Utilize a busca do Admin procurando pela marca recém criada.

## Workaround

Recomenda-se o uso do GET por [API de Marca](https://developers.vtex.com/reference/category-and-brand#brand), utilizando o ID de marca para a busca.

