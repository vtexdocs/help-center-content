---
title: 'A configuração do Giftcard Recarregável não funciona quando se tenta adicionar crédito ao cartão presente através de API'
id: 3MXPd85Km51KpO4FNPqlDf
status: PUBLISHED
createdAt: 2022-05-23T14:21:10.608Z
updatedAt: 2024-02-16T20:25:54.496Z
publishedAt: 2024-02-16T20:25:54.496Z
firstPublishedAt: 2022-05-23T14:21:11.126Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-configuracao-do-giftcard-recarregavel-nao-funciona-quando-se-tenta-adicionar-credito-ao-cartao-presente-atraves-de-api
locale: pt
kiStatus: No Fix
internalReference: 583669
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao criar um cartão-presente, configuramos se ele é recarregável ou não. Entretanto, o impedimento de adicionar crédito a um cartão-presente não recarregável acontece apenas através da IU, através da API é possível adicionar crédito mesmo que o cartão-presente não seja recarregável.



## Simulação



1. Criar um cartão-presente não recarregável
2. Vá para a página do cartão presente do administrador e a UI não permitirá a recarga
3. Tente adicionar crédito através do API e não haverá nenhum bloqueio a esta ação



## Workaround


N/A

