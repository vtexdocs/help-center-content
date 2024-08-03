---
title: 'Preço inconsistente quando a SKU tem um multiplicador de unidades diferente de 1'
id: NVtFiuWgptqa2gBEVmpOC
status: PUBLISHED
createdAt: 2022-09-05T13:05:50.789Z
updatedAt: 2024-02-02T16:50:00.987Z
publishedAt: 2024-02-02T16:50:00.987Z
firstPublishedAt: 2022-09-05T13:05:51.613Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: preco-inconsistente-quando-a-sku-tem-um-multiplicador-de-unidades-diferente-de-1
locale: pt
kiStatus: Backlog
internalReference: 651102
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando alguma SKU contém um multiplicador de unidade diferente de 1 (pode ser int como 10 ou 100, ou float como 0,8, por exemplo), em algumas situações, o preço retornado no store-graphql pode ter inconsistências com base na divisão do preço retornado da API de simulação:

calculatedSellingPrice / (unitMultiplier * 100)

Isso pode se aplicar a todos os valores de preço que usam o multiplicador unitário, como em parcelas (que não consideram o valor do multiplicador unitário e a chamada de simulação envia o valor com o multiplicador unitário sendo considerado), preço PDP, preço PLP ou carrinho.

## Simulação


Verificar a simulação chamada para um produto com um multiplicador de unidade
Verifique o preço do produto em uma página de pesquisa ou usando uma consulta de pesquisa de produto do search-graphql
Os preços podem ser divergentes em centavo

## Workaround


N/A





