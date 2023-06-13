---
title: Algumas promoções não podem ser exibidas em contexto de busca
id: 48NdMjFOswJ5w7Nypc2Txd
status: PUBLISHED
createdAt: 2022-03-17T20:42:39.545Z
updatedAt: 2022-11-25T21:58:24.664Z
publishedAt: 2022-11-25T21:58:24.664Z
firstPublishedAt: 2022-03-17T20:42:39.998Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: algumas-promocoes-nao-podem-ser-exibidas-em-contexto-de-busca
kiStatus: Backlog
internalReference: 475289
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns tipos de promoções não são recuperados no contexto do ProductSummaryProvider e, portanto, seus crachás não são entregues pelo componente vtex.product-highlights.



## Simulação


Estes são os tipos de ambientes de promoção que são conhecidos por reproduzir este problema:


- Promoção regular com tipo de desconto definido como Presente;
- Promoção regular que é configurada para ser aplicada a marca e coleção específica em conjunto;



## Workaround


Incluir os produtos promocionais em uma coleção específica e definir o componente produto-luz como `"tipo": "coleção"`, para que mostre o crachá da coleção.

