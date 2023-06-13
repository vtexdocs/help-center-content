---
title: Filtro Gerenciamento de Pedidos com barra (/) tem comportamento indevido
id: 1Tl4fatscQ686kgGAScSAs
status: PUBLISHED
createdAt: 2018-03-27T14:16:02.940Z
updatedAt: 2022-12-22T14:53:20.003Z
publishedAt: 2022-12-22T14:53:20.003Z
firstPublishedAt: 2018-03-27T14:20:26.844Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Order Management
slug: filtro-gerenciamento-de-pedidos-com-possui-comportamento-indevido
kiStatus: Fixed
internalReference: 
---

## Sumário

Ao filtrar por boleto bancário com 7 dias, 28 dias, 30/60, 30/60/90 e clicar em um dos pedidos da listagem, ao retornar o filtro para 30/60 e 30/60/90 os mesmos são retirados automaticamente.

## Simulação

- Filtre pelo meio de pagamento "Boleto": 7 dias, 28 dias, 30/60, 30/60/90.
- Clique em um dos pedidos exibidos na listagem.
- Volte clicando em Vendas.
- O filtro exibido será  7 dias e 28 dias. Serão retirados automaticamente os de 30/60  e 30/60/90.

## Workaround

Uma solução seria retirar a barra (`/`) dos filtros ou usar a API para obter a listagem dos pedidos:
https://documenter.getpostman.com/view/487146/vtex-oms-api/6tjSKqi#1135fafd-f24b-4a07-b45e-7487d746d087

