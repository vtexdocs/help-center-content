---
title: "Conversor que converte Altura, Largura, Peso e Comprimento para 0,1"
id: j3rz875eWVHFMLYxcYsDL
status: PUBLISHED
createdAt: 2023-08-23T13:38:55.976Z
updatedAt: 2023-08-23T20:01:37.842Z
publishedAt: 2023-08-23T20:01:37.842Z
firstPublishedAt: 2023-08-23T13:38:58.327Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: conversor-que-converte-altura-largura-peso-e-comprimento-para-01
locale: pt
kiStatus: Fixed
internalReference: 886168
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o Matcher processa os skus no módulo de sugestões do marketplace, as informações de Altura, Largura, Peso e Comprimento estão sendo definidas como 0,1 em vez de respeitar os valores enviados pelo vendedor.

## Simulação



1. O vendedor envia o sku para o marketplace com Altura, Largura, Peso e Comprimento com valores normais;
2. O sku chega ao marketplace e é processado pelo matcher;
3. Verifique na API a seguir se o objeto Matcher tem os campos Height (Altura), Width (Largura), Weight (Peso) e Length (Comprimento) definidos como 0,1
https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerSkuId-
 ![](https://vtexhelp.zendesk.com/attachments/token/vCdMBFKEJ0243C9Ew7PPFDgp3/?name=image.png

## Workaround


N/A





