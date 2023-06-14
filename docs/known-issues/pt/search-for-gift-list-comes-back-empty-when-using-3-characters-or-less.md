---
title: 'Busca por lista de presente não retorna resultado quando é aplicada com 3 ou menos caracteres'
id: 3CcMnzSpUQcUaG4wkm2ay2
status: PUBLISHED
createdAt: 2018-02-08T17:25:13.152Z
updatedAt: 2022-12-22T20:45:36.781Z
publishedAt: 2022-12-22T20:45:36.781Z
firstPublishedAt: 2018-02-08T17:33:02.101Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: busca-por-lista-de-presente-nao-retorna-resultado-quando-e-aplicada-com-3-ou-menos-caracteres
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao aplicar uma busca de lista de presente (Controle GiftListSearchV2) com uma palavra ou termo com 3 ou menos caracteres, nenhum resultado é retornado.

## Simulação


1. Acessar a página onde está instalado o controle <vtex.cmc:GiftListSearchV2 />
2. Realizar uma busca com 3 ou menos caracteres

Nenhum resultado será retornado, mesmo havendo listas disponíveis com o termo buscado.

## Workaround

Incluir uma mensagem e um tratamento no campo, impossibilitando que o cliente realize a busca com 3 ou menos caracteres.

