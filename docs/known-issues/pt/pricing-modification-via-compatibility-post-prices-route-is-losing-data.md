---
title: 'A modificação de preços através da rota de preços pós-compatibilidade está perdendo dados'
id: 4VqqNOUcRIGiZhxyVU4Ite
status: PUBLISHED
createdAt: 2022-03-29T19:12:47.179Z
updatedAt: 2022-11-25T22:12:44.964Z
publishedAt: 2022-11-25T22:12:44.964Z
firstPublishedAt: 2022-03-29T19:12:47.781Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: a-modificacao-de-precos-atraves-da-rota-de-precos-poscompatibilidade-esta-perdendo-dados
locale: pt
kiStatus: No Fix
internalReference: 487698
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Identificamos um problema na rota de preços pós-compatibilidade quando enviamos muitos pedidos em uma pequena janela não estamos usando o preço mais atualizado

Recomendamos vivamente que todas as contas deixem de usar nossos preços v1 apis.



## Simulação


Enviar um lote de atualizações de preços e acompanhar os troncos estriados



## Workaround


1- recomendamos o uso do preço v2 apis
2- melhor distribuir os pedidos, esperar como 30s entre eles.

