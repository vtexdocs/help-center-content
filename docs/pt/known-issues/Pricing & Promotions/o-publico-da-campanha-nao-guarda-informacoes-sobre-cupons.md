---
title: "O público da campanha não guarda informações sobre cupons"
id: 2UVQQVLSb0UjDmyWQ5xqEX
status: PUBLISHED
createdAt: 2022-10-13T18:18:40.484Z
updatedAt: 2022-11-25T22:11:35.532Z
publishedAt: 2022-11-25T22:11:35.532Z
firstPublishedAt: 2022-10-13T18:18:41.270Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: o-publico-da-campanha-nao-guarda-informacoes-sobre-cupons
locale: pt
kiStatus: Backlog
internalReference: 521601
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O público da campanha não guarda informações sobre cupons



## Simulação



1. Criar um público da campanha e usar uma condição de cupom;
2. 2. Criar uma Promoção de Campanha associada a este público da Campanha;
3. Comprar um produto que tenha esta promoção aplicada;
4. Confira na OMS este pedido;
5. Analise o OrderForm do pedido, o cupom não é salvo no campo `marketingData`.



## Workaround


Não há solução. Se possível, o cliente pode usar a condição de cupom na Promoção, se for uma opção.

