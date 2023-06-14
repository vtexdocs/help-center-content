---
title: 'Remoção de parâmetros da URL quando a página não existe'
id: EbKaj7Laz6IEooYS2OuYW
status: PUBLISHED
createdAt: 2018-12-17T21:26:03.577Z
updatedAt: 2022-12-22T20:44:59.730Z
publishedAt: 2022-12-22T20:44:59.730Z
firstPublishedAt: 2018-12-17T22:19:13.274Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: remocao-de-parametros-da-url-quando-a-pagina-nao-existe
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao acessar um endereço com parâmetros (querystrings) na URL, caso a página de destino não exista, o usuario será redirecionado para uma página de "404" ou "buscavazia". Nestes casos, os parâmetros em questão são removidos.

Afeta especialmente parâmetros de rastreamento para marketing.

## Simulação

Acessar uma das páginas a seguir, de modo que elas não existam no site em questão:

- www.site.com/produto-inexistente/p?parametro=valor&outro=teste
- www.site.com/rota-inexistente?parametro=valor&outro=teste

O destino será, respectivamente:

- www.site.com/Sistema/404?ProductLinkNotFound=produto-inexistente
- www.site.com/Sistema/buscavazia?ft=rota-inexistente

## Workaround

Não existe um workaround conhecido para este cenário.

