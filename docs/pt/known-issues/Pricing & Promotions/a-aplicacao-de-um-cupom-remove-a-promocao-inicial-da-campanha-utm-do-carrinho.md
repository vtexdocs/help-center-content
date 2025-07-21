---
title: "A aplicação de um cupom remove a promoção inicial da campanha UTM do carrinho"
id: 2A1S6PgEwD9SgQo1UHrFFS
status: PUBLISHED
createdAt: 2024-08-27T20:52:46.450Z
updatedAt: 2024-08-27T21:14:48.748Z
publishedAt: 2024-08-27T21:14:48.748Z
firstPublishedAt: 2024-08-27T20:52:47.777Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: a-aplicacao-de-um-cupom-remove-a-promocao-inicial-da-campanha-utm-do-carrinho
locale: pt
kiStatus: Backlog
internalReference: 1088010
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há um bug em que a aplicação de um cupom aciona um conflito com uma promoção associada a uma `utm_campaign`. Quando uma promoção é ativada por uma `utm_campaign` específica e um cupom (que também tem sua própria configuração de `utm_campaign`) é adicionado, o cupom remove a promoção inicial. Apesar de a `utm_campaign` inicial permanecer no `orderForm`, a promoção inicial não é mais aplicada. A segunda promoção é acionada pelo cupom, não pelo UTM.

## Simulação


Para reproduzir esse comportamento, siga estas etapas:

1. **Criar promoções:**

  - Primeira promoção:** Configure uma promoção para frete grátis que seja acionada por uma `utm_campaign` específica. Essa promoção deve ser configurada para ser ativada com base no parâmetro UTM sem exigir um cupom.
  - Segunda promoção:** Configure uma promoção que forneça um desconto percentual e esteja associada a uma `utm_campaign` diferente. Essa promoção deve ser configurada para exigir um cupom para ativação.
2. **Reproduza o bug

  1. Acesse a loja usando um link com o parâmetro `utm_campaign` que corresponda à primeira promoção (por exemplo, `utm_campaign=FREE_SHIPPING`).
  2. Adicione produtos ao carrinho.
  3. Insira um código postal no carrinho.
  4. Verifique se a promoção de frete grátis (primeira promoção) foi aplicada.
  5. Aplique um cupom que acione a segunda promoção (por exemplo, `DISCOUNT20`).
  6. Observe que a promoção inicial de frete grátis é removida do carrinho após a aplicação do cupom, mesmo que a `utm_campaign` inicial permaneça no `orderForm`

## Workaround


Se a segunda promoção (acionada pelo cupom) for configurada com um `utm_source` em vez de `utm_campaign`, o bug poderá ser contornado. Nesse caso, ambas as promoções serão aplicadas com êxito, sem nenhum conflito.






