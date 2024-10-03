---
title: 'A solicitação do hub fiscal do Marketplace não considera alguns tipos de desconto'
id: 630nSPu8y5G6CSFtiH3MOL
status: PUBLISHED
createdAt: 2023-11-30T21:14:13.709Z
updatedAt: 2023-12-06T19:27:05.930Z
publishedAt: 2023-12-06T19:27:05.930Z
firstPublishedAt: 2023-11-30T21:14:14.259Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-tax-hub-request-doesnt-consider-some-discount-types
locale: pt
kiStatus: Fixed
internalReference: 945580
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando a conta tem isMarketplaceResponsibleForTaxes configurado, a solicitação do hub de impostos não considera alguns tipos de desconto: Nominal, Porcentagem e Preço máximo por item. Isso afeta o cálculo do imposto, e o preço final é maior do que o esperado.

## Simulação



- Configure taxConfiguration.isMarketplaceResponsibleForTaxes na configuração do orderForm;
- Configure um dos tipos de desconto Nominal, Percentual ou Preço máximo por item da promoção regular;
- A solicitação do hub de impostos não aplicará o desconto

## Workaround


N/A



