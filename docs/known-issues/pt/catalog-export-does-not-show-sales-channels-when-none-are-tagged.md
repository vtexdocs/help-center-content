---
title: "Exportação de Catálogo não mostra os Canais de Venda quando 'nenhum' está marcado"
id: 10Bozz8ai3fAvu1m9Ex2Gk
status: PUBLISHED
createdAt: 2022-12-23T13:38:32.114Z
updatedAt: 2022-12-23T13:38:32.766Z
publishedAt: 2022-12-23T13:38:32.766Z
firstPublishedAt: 2022-12-23T13:38:32.766Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: exportacao-de-catalogo-nao-mostra-os-canais-de-venda-quando-nenhum-esta-marcado
locale: pt
kiStatus: Backlog
internalReference: 722001
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, os canais de venda a serem verificados na IU do produto têm uma lógica de "se nenhum for verificado, todos eles estão disponíveis".

Apesar desta lógica ser razoável no catálogo UI, a folha de produtos de exportação e SKUs pode ser enganosa - mostra a coluna com os respectivos canais de venda como "vazia".

Ou listar todos os canais de venda nesta coluna ou, melhor ainda, um texto "todos" se nenhum estiver marcado, seria uma solução melhor em vez disso.


##

## Simulação


Marcar um produto sem canais de venda e a tentativa de exportação por catálogo, verificando a coluna relativa a esses dados.


##

## Workaround


Sabendo de antemão que colunas vazias podem significar que todos os canais de venda foram selecionados.

