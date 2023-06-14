---
title: 'Preço inconsistente quando a SKU tem multiplicador de unidade diferente de 1'
id: NVtFiuWgptqa2gBEVmpOC
status: PUBLISHED
createdAt: 2022-09-05T13:05:50.789Z
updatedAt: 2023-02-27T14:22:04.935Z
publishedAt: 2023-02-27T14:22:04.935Z
firstPublishedAt: 2022-09-05T13:05:51.613Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: preco-inconsistente-quando-a-sku-tem-multiplicador-de-unidade-diferente-de-1
kiStatus: Backlog
internalReference: 651102
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando alguns SKU contêm um multiplicador de unidade diferente de 1, em algumas situações, o preço devolvido no store-graphql pode ter inconsistências com base na divisão do preço devolvido da API de simulação:

calculadoPreço de venda / (unidadeMultiplicador * 100)

Também se aplica a valores em parcelas que não consideram valor multiplicador de unidade e a chamada de simulação envia o valor com o multiplicador de unidade sendo considerado

Baseado em:
https://vtexhelp.zendesk.com/agent/tickets/578022



## Simulação



## Workaround



