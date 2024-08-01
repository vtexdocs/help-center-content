---
title: 'Expressão de cluster personalizada não funcionando em promoção de remessa gratuita + canal de vendas padrão (1)'
id: 27QJfNVhuPNiRxqQiXPRt2
status: PUBLISHED
createdAt: 2022-03-16T19:36:36.102Z
updatedAt: 2024-02-16T20:29:37.996Z
publishedAt: 2024-02-16T20:29:37.996Z
firstPublishedAt: 2022-03-16T19:36:36.504Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: expressao-de-cluster-personalizada-nao-funcionando-em-promocao-de-remessa-gratuita-canal-de-vendas-padrao-1
locale: pt
kiStatus: No Fix
internalReference: 334027
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, as expressões de cluster personalizadas não estão trabalhando em promoções do tipo envio gratuito.








## Simulação


1) Criar uma expressão de cluster personalizada em MasterData

2) Criar uma promoção de cluster (https://help.vtex.com/pt/tutorial/criando-promocao-para-um-cluster-de-clientes--tutorials_342) na qual o tipo de promoção é um benefício de Frete Gratuito.

3) A promoção deve utilizar um SC que não seja o padrão da loja.

4) Tente logar com um usuário que seja válido para este cluster e adicione um produto válido para ele no carrinho (o benefício não será aplicado).






## Workaround


Use uma expressão padrão de cluster nas configurações de promoções, como isCorportate.

