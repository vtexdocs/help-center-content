---
title: 'XML - A moeda da prestação não se aplica'
id: 7kPbxbGnpqeqU8XCD576hZ
status: PUBLISHED
createdAt: 2024-02-02T19:16:59.053Z
updatedAt: 2024-07-01T18:49:23.913Z
publishedAt: 2024-07-01T18:49:23.913Z
firstPublishedAt: 2024-02-02T19:16:59.992Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: xml-a-moeda-da-prestacao-nao-se-aplica
locale: pt
kiStatus: No Fix
internalReference: 976295
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao configurar uma moeda em um XML, ela se aplica a todos os campos, exceto ao campo "Parcela".

O campo "Prestação" sempre exibe a moeda como "R$", independentemente da moeda configurada.

## Simulação



1. Crie/atualize um XML com uma moeda diferente de "R$" e ative o campo Parcela.
2. Verifique se todos os campos de preço no XML estão retornando corretamente a moeda, exceto o campo Parcela

## Workaround


N/A





