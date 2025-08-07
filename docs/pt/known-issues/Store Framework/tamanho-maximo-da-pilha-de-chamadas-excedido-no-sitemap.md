---
title: "Tamanho máximo da pilha de chamadas excedido no Sitemap"
id: 7ItwuSgaSilfBo0zrGania
status: PUBLISHED
createdAt: 2024-11-08T21:01:17.861Z
updatedAt: 2025-01-23T14:17:06.714Z
publishedAt: 2025-01-23T14:17:06.714Z
firstPublishedAt: 2024-11-08T21:01:19.193Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: tamanho-maximo-da-pilha-de-chamadas-excedido-no-sitemap
locale: pt
kiStatus: Fixed
internalReference: 1132723
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O processo atual de geração do mapa do site da loja não consegue lidar eficientemente com lojas com catálogos muito grandes nas lojas do Store Framework. Ao lidar com um grande volume de produtos, a geração é interrompida devido ao tamanho do arquivo principal no mapa do site.

## Simulação



- Abra o site com um grande catálogo (por exemplo, milhões de produtos e categorias).
- Acione o processo de geração do mapa do site e tente acessar no domínio myvtex.
- Observe que o mapa do site retorna "Tamanho máximo da pilha de chamadas excedido

## Workaround


N/A





