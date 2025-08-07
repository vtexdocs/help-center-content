---
title: "Filtros por especificações de SKU que não consideram uma política comercial específica"
id: 7JgNEx5SC2FclwZ7OrxkYt
status: PUBLISHED
createdAt: 2025-01-08T20:22:44.327Z
updatedAt: 2025-01-08T20:22:45.305Z
publishedAt: 2025-01-08T20:22:45.305Z
firstPublishedAt: 2025-01-08T20:22:45.305Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filtros-por-especificacoes-de-sku-que-nao-consideram-uma-politica-comercial-especifica
locale: pt
kiStatus: Backlog
internalReference: 1160165
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A filtragem da pesquisa por uma especificação de SKU também aplicará um filtro por disponibilidade de SKU, removendo produtos em que a variação selecionada está em falta no estoque, mas não considera a política comercial específica.

A navegação em diferentes políticas comerciais pode mostrar produtos em que a variação filtrada não está disponível porque a disponibilidade indexada para uma especificação de SKU baseia-se em todas as políticas comerciais (qualquer uma disponível).

## Simulação


Considerando uma loja com duas políticas comerciais e a seguinte matriz de disponibilidade para um produto específico:

- tamanho: pequeno; política comercial 1: disponível; política comercial 2: indisponível
- tamanho: grande; política comercial 1: indisponível; política comercial 2: indisponível

Em uma navegação na política comercial 2, a filtragem por "tamanho: pequeno" retornará o produto (já que ele estava disponível) e "tamanho: grande" ocultará o produto (porque ele não está disponível em todos os lugares)

## Workaround


N/A




