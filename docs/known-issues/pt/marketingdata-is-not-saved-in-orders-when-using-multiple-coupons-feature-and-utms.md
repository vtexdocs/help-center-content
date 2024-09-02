---
title: 'marketingData não é salvo nos pedidos ao usar o recurso de vários cupons e utms'
id: OUMc8x9sEcdp8ZbLIka4b
status: PUBLISHED
createdAt: 2023-11-22T21:53:36.924Z
updatedAt: 2024-04-09T13:33:02.091Z
publishedAt: 2024-04-09T13:33:02.091Z
firstPublishedAt: 2023-11-22T21:53:37.493Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: marketingdata-nao-e-salvo-nos-pedidos-ao-usar-o-recurso-de-varios-cupons-e-utms
locale: pt
kiStatus: Fixed
internalReference: 936458
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o recurso de vários cupons e houver cupons e utms, ou 'marketingTags', no 'orderForm', nenhum 'marketingData' é salvo no pedido.

## Simulação



- Tenha uma conta usando o recurso de vários cupons;
- Use um cupom e defina qualquer utm ou 'marketingTags', ambos devem estar no formulário de pedido;
- Concluir a compra; não haverá nenhum 'marketingData' no pedido

## Workaround


N/A




