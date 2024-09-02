---
title: 'Produtos ausentes na guia "Revisão" da Skus recebida'
id: 2UM0JQUZVq5o7NHCjmrg8N
status: PUBLISHED
createdAt: 2023-11-23T16:30:51.874Z
updatedAt: 2024-02-01T12:54:26.917Z
publishedAt: 2024-02-01T12:54:26.917Z
firstPublishedAt: 2023-11-23T16:30:52.647Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: produtos-ausentes-na-guia-revisao-da-skus-recebida
locale: pt
kiStatus: Fixed
internalReference: 939877
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As ofertas enviadas pelos vendedores podem eventualmente ir para a guia Revisão do Skus Recebido do Marketplace, dependendo se foram aprovadas ou não nas regras de Qualidade da Oferta.

Quando estiverem nessa guia, o vendedor poderá atualizar seus skus com as informações corretas (ou quaisquer novas informações).

No entanto, quando isso acontece, o sku muda seu status de "WaitingReview" (Aguardando revisão) para "Reviewed" (Revisado), desaparecendo da guia Review (Revisão) e de todos os Skus recebidos.

## Simulação



1. Configure uma regra "Optional requirements" (Requisitos opcionais) no módulo Offer Quality (Qualidade da oferta) no lado do marketplace;
2. Aguarde até que um sku vá para a guia Review (Revisão) por não passar na regra;
3. Aguarde uma atualização do sku no lado do vendedor;
4. Verifique se o sku não está mais na guia Review (Revisão)



## Workaround


Aprovar o produto via API: https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-





