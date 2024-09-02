---
title: 'Assinaturas Os pedidos não podem ser criados depois que a SKU tiver sido vinculada a um presente indisponível'
id: 1hY76gsKwR07AohWMsmUXu
status: PUBLISHED
createdAt: 2022-03-07T14:33:11.578Z
updatedAt: 2023-05-19T19:13:18.924Z
publishedAt: 2023-05-19T19:13:18.924Z
firstPublishedAt: 2022-05-18T18:53:34.529Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: assinaturas-os-pedidos-nao-podem-ser-criados-depois-que-a-sku-tiver-sido-vinculada-a-um-presente-indisponivel
locale: pt
kiStatus: Fixed
internalReference: 395965
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há uma condição em que os Pedidos de Assinatura não podem ser criados porque estão vinculados a um **presente indisponível**, mesmo que os itens de uma assinatura estejam disponíveis.

## Simulação



- Para simular isso, você precisa de um presente (como a promoção **Buy One Get One**) vinculado a um SKU de assinatura, e esse presente deve ficar indisponível depois que a compra for feita e antes do próximo ciclo.
- O erro no ciclo de assinatura é "**Não foi possível selecionar um SLA para SKU {SKU ID}**

## Workaround


A maneira de evitar esse cenário é remover o link do presente fora de estoque ou garantir que o presente tenha estoque se você quiser criar um novo ciclo com o presente.

