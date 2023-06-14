---
title: 'UI exibindo erroneamente o preço de envio quando os pacotes são divididos para entrega programada'
id: 6HkjI7IwvvYaxHAqMS2aUv
status: PUBLISHED
createdAt: 2023-03-20T14:59:50.827Z
updatedAt: 2023-03-20T14:59:51.525Z
publishedAt: 2023-03-20T14:59:51.525Z
firstPublishedAt: 2023-03-20T14:59:51.525Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-exibindo-erroneamente-o-preco-de-envio-quando-os-pacotes-sao-divididos-para-entrega-programada
kiStatus: Backlog
internalReference: 774155
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando há um pacote dividido para entrega programada, o preço de um dos pacotes pode estar incorreto na IU, mas os preços estarão corretos na API.


##

## Simulação



- Adicione 2 itens que têm entrega programada e são de diferentes transportadoras;
- Selecione as janelas de entrega para ambos os pacotes;
- Você verá que a soma mostrada no UI não corresponde ao totalizador de envio.


##

## Workaround


N/A



