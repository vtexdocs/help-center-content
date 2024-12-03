---
title: 'Pesquisa de coleção - o título não exibe acentos quando acessado através de map=productClusterNames'
id: 41m89nYPVQxFaNUXAcGo3X
status: PUBLISHED
createdAt: 2022-03-21T17:40:39.850Z
updatedAt: 2022-11-25T21:57:56.915Z
publishedAt: 2022-11-25T21:57:56.915Z
firstPublishedAt: 2022-03-21T17:40:40.209Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: collection-searchtitle-doesnt-display-accents-when-accessed-through-mapproductclusternames
locale: pt
kiStatus: Backlog
internalReference: 439856
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As páginas de coleção acessadas através de map=productClusterNames mostram o nome da coleção sem acentos no componente de busca-titulo.



## Simulação


Coleção acessada usando ?map=productClusterNames:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Intelligent%20Search/pesquisa-de-colecao-o-titulo-nao-exibe-acentos-quando-acessado-atraves-de-mapproductclusternames_1.png)

O nome correto da coleção pode ser visto na página Título, e o título de busca o exibe sem acentos. Este comportamento também pode ser estendido a outros caracteres especiais.



## Workaround


É possível gerenciar coleções através da criação de páginas de busca personalizadas:
https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-custom-search-results-page

E então, insira o título desejado usando um bloco de texto rico.

