---
title: Skus recebidos: As aprovações de associação não adicionam o canal de vendas disponível do vendedor no produto quando o sku é vendido por mais de um vendedor
id: 5ob4jquCm8l84MhX6285h8
createdAt: 2022-04-18T17:15:41.091Z
updatedAt: 2023-05-09T19:06:08.893Z
publishedAt: 2023-05-09T19:06:08.893Z
firstPublishedAt: 2022-04-18T17:15:41.436Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: skus-recebidos-as-aprovacoes-de-associacao-nao-adicionam-o-canal-de-vendas-disponivel-do-vendedor-no-produto-quando-o-sku-e-vendido-por-mais-de-um-vendedor
status: Backlog
internalReference: 562472
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Um produto vendido por outro vendedor no catálogo do marketplace está disponível para ser vendido no canal de vendas desse vendedor.

No entanto, se um novo vendedor também enviar o produto e o marketplace executar uma ação de associação no módulo Received Skus, ou seja, vincular a outro produto ou vincular a outro sku, o canal de vendas desse novo vendedor não será adicionado ao produto, permanecendo apenas o canal de vendas do vendedor original.

## Simulação



1. O vendedor 1, disponível no canal de vendas A, envia um produto para o marketplace;
2. O marketplace aprovou o produto do vendedor 1 como um novo produto em seu catálogo;
3. O produto está disponível no canal de vendas A;
4. O vendedor 2, disponível no canal de vendas B, envia o mesmo produto para o marketplace;
5. O Marketplace aprovou o produto como link para outra ação de produto;
6. O produto permanece disponível somente no canal de vendas A

## Workaround


Verifique manualmente, via API ou via planilha, o outro canal de vendas disponível para os produtos.





