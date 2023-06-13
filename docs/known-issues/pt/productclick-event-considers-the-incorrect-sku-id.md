---
title: productClick event considera o SKU Id incorreto
id: 1tgrIgo8xGzDW9wJOnjU9E
status: PUBLISHED
createdAt: 2023-04-11T17:38:17.545Z
updatedAt: 2023-04-11T17:38:19.118Z
publishedAt: 2023-04-11T17:38:19.118Z
firstPublishedAt: 2023-04-11T17:38:19.118Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: productclick-event-considera-o-sku-id-incorreto
kiStatus: Backlog
internalReference: 788145
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


productClick event considera o SKU Id incorreto ao utilizar o bloco Seletor de SKU Resumo do Produto. Ele sempre utilizará o primeiro SKU da lista de produtos.


##

## Simulação



- Configurar o bloco Seletor de SKU de Resumo de Produto;
- Selecione uma especificação SKU e acesse o PDP;
- No console, digite "dataLayer";
- O valor da "variante" no evento productClick do produto será diferente do valor selecionado anteriormente.


##

## Workaround


N/A




