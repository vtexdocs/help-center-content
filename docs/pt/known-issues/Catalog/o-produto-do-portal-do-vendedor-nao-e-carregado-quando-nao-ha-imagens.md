---
title: "O produto do Portal do Vendedor não é carregado quando não há imagens"
id: 58szTo4jJRTjjIoGoDXH3F
status: PUBLISHED
createdAt: 2023-05-02T13:58:51.153Z
updatedAt: 2023-05-08T18:28:02.294Z
publishedAt: 2023-05-08T18:28:02.294Z
firstPublishedAt: 2023-05-02T13:58:51.842Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: o-produto-do-portal-do-vendedor-nao-e-carregado-quando-nao-ha-imagens
locale: pt
kiStatus: Backlog
internalReference: 800480
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para contas do portal do vendedor, se você tiver um produto sem imagens para cada sku, a interface do usuário do produto não será carregada corretamente.

## Simulação



1. crie um produto sem nenhuma imagem em todos os skus usando o administrador do portal do vendedor ( /admin/products)
2. tente acessar as informações do produto, os dados continuarão sendo carregados indefinidamente

## Workaround


Adicione imagens aos itens.

