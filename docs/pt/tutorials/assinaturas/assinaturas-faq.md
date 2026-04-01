---
title: 'Assinaturas: FAQ'
id: 2yumbsdX8aMQiXqKtFY4tE
status: PUBLISHED
createdAt: 2025-02-20T12:33:13.030Z
updatedAt: 2025-10-24T14:42:14.291Z
publishedAt: 2025-10-24T14:42:14.291Z
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

### Depois de feita uma assinatura, o cliente consegue fazer outras?
Sim, o cliente consegue fazer quantas assinaturas quiser.

### O meu cliente pode comprar pela Assinatura e retirar nas lojas ou em outros pontos de retirada?
Sim, leia o artigo [Pontos de retirada para pedidos de assinatura (Beta)](/pt/docs/tutorials/pontos-de-retirada-para-pedidos-de-assinatura) para mais informações.

### O meu cliente pode cadastrar mais de um endereço na sua assinatura?
Não é possível cadastrar mais de um endereço na mesma assinatura.

### O meu cliente pode mudar o endereço de entrega da assinatura?
Sim, o cliente pode mudar o endereço no Minha conta.

O lojista também pode modificar o endereço de entrega quantas vezes quiser com o endpoint [Update subscription by ID](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#patch-/api/rns/pub/subscriptions/-id-), usando o campo `shippingAddress`. 

### O meu cliente pode fazer uma assinatura com vários produtos?
Sim, é possível criar uma assinatura com vários SKUs.

A quantidade de itens na assinatura vai ser a quantidade de itens disponíveis no momento em que o pedido de recorrência foi gerado, ou seja, se o cliente tem 4 SKUs na assinatura e apenas 3 estão disponíveis no momento da recorrência, a assinatura é criada com 3 SKUs. Nesses casos, o item faltante não é cobrado e a assinatura é marcada como Parcial no **Minha conta**.

Você também pode comunicar o cliente sobre a assinatura parcialmente gerada através do nosso módulo [Central de mensagens](/pt/docs/tutorials/emails-transacionais-para-pedidos-de-assinaturas). A chave desse template de mensagem é `vtexcommerce-subscriptions-partialorder`.

### Posso dar um desconto sobre os produtos em um plano de assinatura?
Sim, desde que você crie uma promoção regular e marque o checkbox `Pedido de assinatura`. Para entender como criar promoções, leia a trilha (Criar Promoção Regular)[https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI].

### Quais são o prazo da entrega e a regra de frete?
O prazo da entrega e regra de frete são baseados nas políticas de entrega vigentes na loja a cada ciclo da assinatura.

### O meu cliente pode parcelar o pagamento do seu pedido de assinatura?
Sim, desde que a loja realize a configuração para permitir o pagamento parcelado de pedidos de assinatura. Isso é feito pelo endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings), marcando os campos `isMultipleInstallmentsEnabledOnCreation` e `isMultipleInstallmentsEnabledOnUpdate` como `true` (verdadeiro).

### O que acontece se o cartão do meu cliente for cancelado?
Devido à falta de possibilidade de pagamento, a assinatura não é gerada. Como enviamos um email de lembrete sobre a assinatura dois dias antes da execução, o cliente pode verificar a validade do cartão antes dessa execução.

Se o cartão do cliente foi cancelado e ele não percebeu antes da execução da assinatura, ele consegue gerar um pedido avulso em **Minhas assinaturas**. Esse pedido tem todos os itens da assinatura, mas não conta como uma assinatura executada, ou seja, não altera a data de assinaturas passadas ou futuras.

Além disso, ele pode alterar o cartão cadastrado na assinatura a qualquer momento. Se o cartão dele foi cancelado e ele inseriu um cartão novo depois do dia de geração da assinatura, essa assinatura não vai ser gerada, mas a próxima recorrência vai ser tentada no novo cartão.

Usando o nosso módulo [Central de mensagens](/pt/docs/tutorials/emails-transacionais-para-pedidos-de-assinaturas), você pode ativar o envio de email comunicando que o pagamento da assinatura não foi aprovado. A chave desse template de mensagem é `vtexcommerce-subscriptions-payment-not-approved`.

### Meu cliente pode solicitar uma entrega agendada para pedido de assinatura?
Hoje não é possível solicitar uma entrega agendada para pedidos de assinatura. Esse cenário não é atendido para que o seu cliente não seja afetado negativamente, caso a configuração logística de sua loja mude. Contudo, seu cliente pode criar uma nova assinatura marcando a data futura que desejar para a primeira entrega.

### Como posso cancelar, pular ou pausar o pedido de assinatura do meu cliente?
Hoje não é possível alterar a assinatura do seu cliente pelo Admin da VTEX. Só é possível pausar, cancelar ou pular um pedido de assinatura por meio de acesso ao Televendas, no painel de assinaturas do cliente (Minha conta) ou via [API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

### É possível adicionar itens vindos de um seller ou marketplace em um pedido de assinatura?
A assinatura pode ser criada com itens da própria loja, de sellers VTEX ou de sellers white label (conta franquia).

### Se o lojista criar uma regra para valor mínimo, essa regra poderá afetar as assinaturas?
Sim, se o valor do pedido de assinatura estiver abaixo do limite definido pela configuração _Valor mínimo total do carrinho_. Note que nosso sistema de assinaturas não aceita ciclos, ou pedidos com um valor total de $0. 

### Preciso que, no checkout, esteja apenas o plano listado, não os produtos, e que o valor do plano seja o total dos produtos selecionados com desconto. É possível fazer essa customização?
Não, para colocar uma assinatura no checkout, você precisa que pelo menos um item seja assinado.

### Se o preço de um SKU mudar, a assinatura do meu cliente será afetada?
Por padrão, sim. O preço que o cliente paga na assinatura é baseado no preço cadastrado para cada SKU. A assinatura do cliente não acompanha as condições de preço do primeiro pedido realizado. O pedido é realizado com os mesmos produtos do pedido original, mas o preço será calculado com base no que estiver cadastrado na hora do próximo ciclo do pedido.

Para novas assinaturas, você pode modificar essa configuração via API, com a requisição [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). No campo `useItemPriceFromOriginalOrder`, envie `true` (verdadeiro) para usar o preço do primeiro pedido.

### Qual o horário no qual os pedidos de assinatura são gerados?
Por padrão, o horário para criação de pedidos de assinatura ocorre entre 6:00 e 7:00 da manhã, com referência ao fuso horário do Brasil (GMT-3).

No entanto, você pode estabelecer outro horário via API, com a requisição [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings), enviando o horário novo no campo `executionHourInUtc`.

### A funcionalidade Assinaturas funciona com o Seller Portal?
Não, Assinaturas não funciona com o [Seller Portal](/pt/tutorial/how-to-set-up-your-store-on-seller-portal).

### Como funciona a criação de assinaturas a partir de pedidos originais que possuem SKUs com anexos? 
Por padrão, as lojas não criam pedidos de assinatura incorporando [anexos](/pt/docs/tutorials/o-que-e-um-anexo) de SKUs do pedido original, ou seja, os anexos são desconsiderados nos pedidos recorrentes. No entanto, é possível habilitar essa configuração para a loja, o que só pode ser feito via API usando o endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Saiba mais em [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).
