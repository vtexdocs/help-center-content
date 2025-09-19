---
title: 'Assinaturas: FAQ'
id: 2yumbsdX8aMQiXqKtFY4tE
status: PUBLISHED
createdAt: 2025-02-20T12:33:13.030Z
updatedAt: 2025-04-15T16:31:46.707Z
publishedAt: 2025-04-15T16:31:46.707Z
firstPublishedAt: 2025-02-20T12:42:22.848Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: subscriptions-faq
legacySlug: assinaturas-faq
locale: pt
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Este guia tem como objetivo responder as perguntas mais frequentes sobre Assinaturas.

### Posso ter mais de uma assinatura na minha loja?
O número de assinaturas é ilimitado, tanto para sua loja quanto para seu cliente. Isso significa que não há limite máximo de Assinaturas que podem ser vendidas pela sua loja ou compradas pelo seu cliente. No entanto, é importante estar atento para as condições que são aplicadas nas Assinaturas.

### O meu cliente pode comprar pela Assinatura e retirar nas lojas ou em outros pontos de retirada?
Sim, leia o artigo [Pontos de retirada para pedidos de assinatura (Beta)](/pt/tutorial/pontos-de-retirada-para-pedidos-de-assinatura-beta--csIqB6iBh4QNIFdEj0nVv) para mais informações.

### O meu cliente pode cadastrar mais de um endereço na sua assinatura?
Não é possível cadastrar mais de um endereço na mesma assinatura.

### Quais são o prazo da entrega e a regra de frete?
O prazo da entrega e regra de frete são baseados nas políticas de entrega vigentes na loja a cada ciclo da assinatura.

### O meu cliente pode parcelar o pagamento do seu pedido de assinatura?
Sim, desde que a loja realize a configuração para permitir o pagamento parcelado de pedidos de assinatura. Isso é feito pelo endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings), marcando os campos `isMultipleInstallmentsEnabledOnCreation` e `isMultipleInstallmentsEnabledOnUpdate` como `true` (verdadeiro).

### O que acontece se o cartão do meu cliente for cancelado?
A assinatura não será gerada devido a falta de possibilidade de pagamento.  

### Meu cliente pode solicitar uma entrega agendada para pedido de assinatura?
Hoje não é possível solicitar uma entrega agendada para pedidos de assinatura. Esse cenário não é atendido para que o seu cliente não seja afetado negativamente, caso a configuração logística de sua loja mude. Contudo, seu cliente pode criar uma nova assinatura marcando a data futura que desejar para a primeira entrega.

### Como posso cancelar, pular ou pausar o pedido de assinatura do meu cliente?
Hoje não é possível alterar a assinatura do seu cliente pelo Admin da VTEX. Só é possível pausar, cancelar ou pular um pedido de assinatura por meio de acesso ao Televendas, no painel de assinaturas do cliente (My Account do cliente), ou então via [API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

### É possível adicionar itens vindos de um seller ou marketplace em um pedido de assinatura?
A assinatura pode ser criada com itens da própria loja, de sellers VTEX ou de sellers white label (conta franquia).

### Se o lojista criar uma regra para valor mínimo, essa regra poderá afetar as assinaturas?
Sim, se o valor do pedido de assinatura estiver abaixo do limite definido pela configuração _Valor mínimo total do carrinho_. Note que nosso sistema de assinaturas não aceita ciclos, ou pedidos com um valor total de $0. 

### Se o preço de um SKU mudar, a assinatura do meu cliente será afetada?
Por padrão, sim. O preço que o cliente paga na assinatura é baseado no preço cadastrado para cada SKU. A assinatura do cliente não acompanha as condições de preço do primeiro pedido realizado. O pedido é realizado com os mesmos produtos do pedido original, mas o preço será calculado com base no que estiver cadastrado na hora do próximo ciclo do pedido.

Para novas assinaturas, você pode modificar essa configuração via API, com a requisição [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). No campo `useItemPriceFromOriginalOrder`, envie `true` (verdadeiro) para usar o preço do primeiro pedido.

### Qual o horário no qual os pedidos de assinatura são gerados?
Por padrão, o horário para criação de pedidos de assinatura ocorre entre 6:00 e 7:00 da manhã, com referência ao fuso horário do Brasil (GMT-3).

No entanto, você pode estabelecer outro horário via API, com a requisição [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings), enviando o horário novo no campo `executionHourInUtc`.

### A funcionalidade Assinaturas funciona com o Seller Portal?
Não, Assinaturas não funciona com o [Seller Portal](/pt/tutorial/how-to-set-up-your-store-on-seller-portal).

### Como funciona a criação de assinaturas a partir de pedidos originais que possuem SKUs com anexos? 
Por padrão, as lojas não criam pedidos de assinatura incorporando [anexos](/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) de SKUs do pedido original, ou seja, os anexos são desconsiderados nos pedidos recorrentes. No entanto, é possível habilitar essa configuração para a loja, o que só pode ser feito via API usando o endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Saiba mais em [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).
