---
title: 'Tempo esgotado API Obter configurações de aprovação de conta'
id: 5dalpuBbuRYXj5WSal8UqR
status: PUBLISHED
createdAt: 2023-03-16T19:26:12.430Z
updatedAt: 2023-03-21T17:28:51.737Z
publishedAt: 2023-03-21T17:28:51.737Z
firstPublishedAt: 2023-03-16T19:26:12.826Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: tempo-esgotado-api-obter-configuracoes-de-aprovacao-de-conta
kiStatus: Fixed
internalReference: 772840
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Esta rota retorna "Tamanho máximo de resposta atingido" quando a resposta do JSON tem mais de 100MB.


##

## Simulação



Para contas com muitas informações sobre o matcher ou sobre as especificações do objeto de mapeamento, esta resposta acontecerá nesta API
GET https://api.vtex.com//suggestions/configuration


##

## Workaround



N/A





