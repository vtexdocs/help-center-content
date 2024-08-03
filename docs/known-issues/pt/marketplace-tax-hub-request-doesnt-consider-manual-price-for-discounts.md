---
title: 'A solicitação do hub de impostos do Marketplace não considera o preço manual para descontos'
id: 2pGgbPB7Qm4dXtQauohvx7
status: PUBLISHED
createdAt: 2023-11-08T17:59:41.102Z
updatedAt: 2023-12-06T19:27:50.006Z
publishedAt: 2023-12-06T19:27:50.006Z
firstPublishedAt: 2023-11-08T17:59:41.695Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-solicitacao-do-hub-de-impostos-do-marketplace-nao-considera-o-preco-manual-para-descontos
locale: pt
kiStatus: Fixed
internalReference: 932657
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a conta tem isMarketplaceResponsibleForTaxes configurado, a solicitação do hub de impostos não considera preços manuais para descontos de itens.

## Simulação



- Configure taxConfiguration.isMarketplaceResponsibleForTaxes na configuração do orderForm;
- Definir o preço manual de um item;
- A solicitação do hub de impostos não aplicará a diferença como um desconto

## Workaround


NA




