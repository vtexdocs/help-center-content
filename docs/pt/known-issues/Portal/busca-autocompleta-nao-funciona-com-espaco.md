---
title: 'Busca AutoCompleta não funciona com espaço'
id: 1ZZGCHgsnJ512DAZv1iCy7
status: PUBLISHED
createdAt: 2022-04-28T16:03:43.077Z
updatedAt: 2022-11-25T22:09:56.187Z
publishedAt: 2022-11-25T22:09:56.187Z
firstPublishedAt: 2022-04-28T16:03:43.808Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: autocomplete-search-not-working-with-space
locale: pt
kiStatus: Backlog
internalReference: 568821
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Nas lojas legadas do Portal, a busca auto-completa não funciona se os termos de busca tiverem espaço.



## Simulação



- Vá até a barra de busca e tente procurar por "super produto", por exemplo.
- O pedido falhará.

Embora a busca autocompleta não funcione, a busca padrão funcionará corretamente.



## Workaround


A solução para este caso é usar uma personalização javascript para fazer a busca autocompleta funcionar corretamente (usando %20 em vez de +)

