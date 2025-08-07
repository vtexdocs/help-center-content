---
title: "O parâmetro isAvailablePerSalesChannel não funciona como esperado na API de pesquisa"
id: 6vexCZQTib8fFI6sCSTdWL
status: PUBLISHED
createdAt: 2022-09-12T16:03:25.215Z
updatedAt: 2024-02-16T20:24:54.890Z
publishedAt: 2024-02-16T20:24:54.890Z
firstPublishedAt: 2022-09-12T16:03:25.837Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: o-parametro-isavailablepersaleschannel-nao-funciona-como-esperado-na-api-de-pesquisa
locale: pt
kiStatus: No Fix
internalReference: 656284
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar usar o parâmetro isAvailablePerSalesChannel para mostrar os produtos disponíveis (fq=isAvailablePerSalesChannel_{id}:1) ou indisponíveis (fq=isAvailablePerSalesChannel_{id}:0), o resultado não é consistente.

Algumas vezes funcionará como esperado e outras não, especialmente quando outros parâmetros estão envolvidos na busca, como produtoId, skuId ou sc.



## Simulação



1. Tornar um produto indisponível em um canal de venda.
2. Use a API de pesquisa com o parâmetro isAvailablePerSalesChannel.
3. Verifique se o resultado é inconsistente.



## Workaround


Nenhuma solução.

