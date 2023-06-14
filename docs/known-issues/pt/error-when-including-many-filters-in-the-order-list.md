---
title: 'Erro ao incluir muitos filtros na lista de pedidos'
id: 5M3g0lGChGPauii9O69wUz
status: PUBLISHED
createdAt: 2022-12-21T13:56:55.765Z
updatedAt: 2022-12-21T13:58:55.819Z
publishedAt: 2022-12-21T13:58:55.819Z
firstPublishedAt: 2022-12-21T13:56:56.309Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: erro-ao-incluir-muitos-filtros-na-lista-de-pedidos
locale: pt
kiStatus: Fixed
internalReference: 347932
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em algumas lojas, a lista de Vendedores, promoções ou outros filtros pode ser bastante alta, e em alguns momentos eles podem querer fazer uma seleção bastante ampla.

Por exemplo, filtrar todos os pedidos para 10 Vendedores, que é um número razoável, mas neste caso, estamos falando de quantidades muito maiores, ou seja, selecionar 60 Vendedores, ou promoções podem gerar o problema.

Após selecionar todos estes Vendedores, encontraremos um erro (404 respostas) ao tentar confirmar o filtro.


##

## Simulação


Tente filtrar a seleção perto de 60 Vendedores:

Vemos o erro:

    Server Error404 - Arquivo ou diretório não encontrado. O recurso que você está procurando pode ter sido removido, ter seu nome alterado ou estar temporariamente indisponível.



##

## Workaround


Se for necessário obter uma quantidade significativa de informações, é possível pensar em exportar o relatório sem filtros e fazer isso no documento CSV / XLS exportado.

