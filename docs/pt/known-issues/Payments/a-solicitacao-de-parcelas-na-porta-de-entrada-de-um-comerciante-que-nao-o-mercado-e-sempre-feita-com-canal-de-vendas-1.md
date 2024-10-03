---
title: 'A solicitação de parcelas na porta de entrada de um comerciante que não o mercado é sempre feita com canal de vendas = 1'
id: Xo2YO6ZM9Jj0ONZjXrrrJ
status: PUBLISHED
createdAt: 2022-03-27T21:08:39.176Z
updatedAt: 2024-02-16T20:29:17.920Z
publishedAt: 2024-02-16T20:29:17.920Z
firstPublishedAt: 2022-03-27T21:08:39.738Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-installments-request-at-the-gateway-to-a-merchant-other-than-the-marketplace-is-always-done-with-saleschannel-1
locale: pt
kiStatus: No Fix
internalReference: 391197
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os pedidos para obter parcelas externas na porta de entrada de um comerciante que não seja o mercado são sempre feitos com canal de vendas = 1.
O comportamento foi observado em um cenário de Seller-whitelabel para uma conta de franquia, mas também parece aplicável ao contexto de vendedores comuns, ao mercado externo.

**Comportamento esperado***
Os pedidos feitos a partir do mercado para a porta de entrada do vendedor/mercadoria devem seguir a política comercial do ponto final de atendimento, a fim de manter o contexto.

**comportamento atual***
Embora o "ponto final de atendimento" seja feito com SalesChannel=2, a solicitação de parcelas é feita no contexto do SalesChannel=1.



## Simulação



1. Escolha um vendedor cujo destino final seja diferente do canal de vendasChannel=1
2. Simular um carrinho com um item deste vendedor
3. Observe o pedido de parcelas que é feito ao Comerciante deste vendedor.




## Workaround


N/A

