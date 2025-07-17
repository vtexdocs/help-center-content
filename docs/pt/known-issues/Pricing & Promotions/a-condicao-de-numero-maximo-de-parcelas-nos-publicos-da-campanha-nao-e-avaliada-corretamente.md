---
title: "A condição de número máximo de parcelas nos públicos da campanha não é avaliada corretamente"
id: 6u8W11lei20LzAG8UsVDV5
status: PUBLISHED
createdAt: 2024-11-27T14:53:58.108Z
updatedAt: 2024-11-27T14:57:47.693Z
publishedAt: 2024-11-27T14:57:47.693Z
firstPublishedAt: 2024-11-27T14:53:58.830Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: a-condicao-de-numero-maximo-de-parcelas-nos-publicos-da-campanha-nao-e-avaliada-corretamente
locale: pt
kiStatus: Backlog
internalReference: 1141291
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A condição **Número máximo de parcelas** nas configurações de **Campanha de público** não está sendo avaliada corretamente. Esse requisito não é considerado ao determinar se a campanha é correspondida, permitindo que campanhas promocionais sejam aplicadas incorretamente. Esse problema impossibilita a aplicação de restrições baseadas em parcelas nas campanhas, o que pode levar a aplicações de descontos não intencionais.

## Simulação



1. Crie uma **Campanha de público** e adicione uma condição para um **Número máximo de parcelas** igual a "2".
2. Crie uma **Campanha de promoção** e associe-a à Campanha de público-alvo configurada.
3. Adicione itens ao carrinho que atendam às condições definidas na Audience Campaign.
4. Vá para o checkout e observe que, já na etapa do carrinho, antes que um método de pagamento seja definido, a campanha é correspondida.



## Workaround


Os comerciantes podem configurar uma **Promoção Regular** com restrições de parcelamento na seção **Métodos de Pagamento**. Essa abordagem é menos dinâmica do que as Audience Campaigns, mas garante que as restrições baseadas em parcelas sejam aplicadas.




