---
title: 'Meu estoque está negativo'
id: JSFHaWsASXbnrX9dgNEeP
status: PUBLISHED
createdAt: 2024-06-10T11:08:39.990Z
updatedAt: 2025-08-14T15:10:09.934Z
publishedAt: 2025-08-14T15:10:09.934Z
firstPublishedAt: 2024-06-10T17:21:47.755Z
contentType: tutorial
productTeam: Post-purchase
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: my-inventory-is-negative
legacySlug: meu-estoque-esta-negativo
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Estoque
  - Reserva
  - Política comercial
  - Admin VTEX
  - Inventário
---

Quando a quantidade disponível de um produto é exibida como negativa, pode ser uma indicação de que há mais itens [reservados](/pt/docs/tutorials/como-a-reserva-funciona) do que a quantidade total inserida em estoque. Este problema geralmente ocorre ao registrar (dar baixa) em um item de pedido que ainda está reservado pelo sistema.

## Solução

A informação de estoque do item deve ser atualizada de acordo com a quantidade de itens físicos disponíveis no estoque. Dessa maneira, o valor registrado dos itens em estoque deve ser a soma dos itens disponíveis mais os itens que estão reservados e que ainda não estão no status de **Preparando Entrega**.

Para atualizar a quantidade correta em estoque, realize os seguintes passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário** ou digite **Gerenciamento de inventário** na barra de busca no topo da página.
2. Clique em **Gerenciamento de inventário**.
3. Busque pelo SKU desejado.
4. Na coluna **Atualizar contagem**, insira a quantidade correta de itens físicos no estoque, considerando a soma dos itens disponíveis mais os itens reservados.
5. Clique em **Salvar**.

Quando dois ou mais estoques utilizam a mesma [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) e há uma quantidade negativa de unidades em um desses estoques, o SKU será indisponibilizado para venda, mesmo que exista uma quantidade disponível em um dos estoques no [inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque).
