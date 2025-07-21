---
title: "A exportação de pedidos com uma média de mais de 200 produtos pode gerar um tempo limite no processo de geração de arquivos"
id: 3EaHTPveWNSw6CttazTTTS
status: PUBLISHED
createdAt: 2025-02-27T16:09:56.026Z
updatedAt: 2025-02-27T16:09:56.564Z
publishedAt: 2025-02-27T16:09:56.564Z
firstPublishedAt: 2025-02-27T16:09:56.564Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: a-exportacao-de-pedidos-com-uma-media-de-mais-de-200-produtos-pode-gerar-um-tempo-limite-no-processo-de-geracao-de-arquivos
locale: pt
kiStatus: No Fix
internalReference: 702933
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A exportação de produtos é geralmente realizada para uma série de pedidos com base em filtros determinados pelo lojista, gerando assim um documento com todos os pedidos e dividindo cada SKU em uma linha independente.

Nesse caso, **o problema foi causado por uma loja que tem vários pedidos com mais de 200 SKUs por pedido**. No fluxo de geração do arquivo, esses pedidos juntos geram um timeout no processamento das informações, pois o objeto de cada pedido é muito grande e, como consequência, problemas na geração do arquivo.

## Simulação



1. Tente criar um filtro na lista de pedidos **que inclua vários pedidos com mais de 200 SKUs**.
2. Solicite a exportação do documento
3. É possível que o erro apareça:
  1. Você deve abrir o inspetor do navegador e procurar os eventos de processamento de exportação "**em andamento**"
  2. Pesquise os logs com o **processing ID** desses eventos
  3. O erro mostra que a tarefa foi cancelada: "`Error, "report_process", exception_message="Uma tarefa foi cancelada." `"

## Workaround


Nesses casos, é recomendável segmentar a exportação de pedidos, ou seja, para os pedidos com mais de 200 SKUs, é melhor exportar individualmente.

Por outro lado, é importante validar a arquitetura do catálogo, pois não é comum ter pedidos com mais de 200 SKUs.






