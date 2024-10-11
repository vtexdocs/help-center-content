---
title: 'Uso de cupom não restaurado para pedidos incompletos'
id: 1iJr9GTJ8gG852YDVWTttl
status: PUBLISHED
createdAt: 2022-08-16T20:44:43.329Z
updatedAt: 2022-11-25T22:12:03.121Z
publishedAt: 2022-11-25T22:12:03.121Z
firstPublishedAt: 2022-08-16T20:44:43.833Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: coupon-usage-not-restored-for-incomplete-orders
locale: pt
kiStatus: Backlog
internalReference: 639418
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, na VTEX temos o que é conhecido como uma Ordem Incompleta, para referência tente https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294 e https://support.vtex.com/hc/en-us/articles/360060106912-How-to-investigate-incomplete-orders>

Se um cupom foi usado e o pedido recebeu o status incompleto, o uso do cupom é contado, mesmo que o pedido não prossiga.
Este comportamento é evidenciado nos casos de pedidos que foram feitos usando um cupom de uso único, quando o uso do cupom de uso único é contado em um pedido incompleto, o comprador não pode fazer um novo pedido com o mesmo código de cupom porque um uso foi registrado no mesmo.



## Simulação


Não aplicável para este KI.



## Workaround



Para cupons de uso único, a solução que sugerimos é recriar o cupom para os usuários afetados.

