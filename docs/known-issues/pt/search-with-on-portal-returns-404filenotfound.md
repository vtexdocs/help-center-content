---
title: 'Busca com . no portal retorna 404?FileNotFound'
id: 3Gv7Jv3fjyCwASI8MwMgmQ
status: PUBLISHED
createdAt: 2018-09-14T18:09:52.414Z
updatedAt: 2022-12-22T20:45:39.140Z
publishedAt: 2022-12-22T20:45:39.140Z
firstPublishedAt: 2018-09-14T18:25:22.860Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: busca-com-no-portal-retorna-404filenotfound
kiStatus: Backlog
internalReference: 
---

## Sumário

O erro acontece ao filtrar qualquer produto usando ponto. A chave buscada é colocada na URL e o portal entende isso como um nome de arquivo. 

## Simulação

1. Abra um site VTEX
2. Busque por um termo que não existe (`chavebuscada`)
3. Repare que o erro é `{url}/Sistema/buscavazia?ft={chavebuscada}`
4. Busque agora por um termo que contenha . (`chave.buscada`)
5. Observe que o erro muda para `{url}/Sistema/404?FileNotFound={chave.buscada}`

## Workaround

Retirar o ponto da busca com javascript customizado

