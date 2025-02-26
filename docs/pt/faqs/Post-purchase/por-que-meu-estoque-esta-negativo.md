---
title: 'Por que meu estoque está negativo?'
id: frequentlyAskedQuestions_159
status: PUBLISHED
createdAt: 2017-04-27T22:39:51.880Z
updatedAt: 2024-04-18T14:18:13.634Z
publishedAt: 2024-04-18T14:18:13.634Z
firstPublishedAt: 2017-04-27T23:01:42.612Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-is-my-stock-negative
locale: pt
legacySlug: por-que-meu-estoque-esta-negativo
---

O cálculo da quantidade disponível de um item é realizado da seguinte forma:

`em estoque - reserva = disponível`

A quantidade em estoque de um item pode ser editada pela loja.

Quando a quantidade disponível está negativa, isso significa que __existem mais itens reservados do que a quantidade total inserida em estoque__. Dessa forma, vemos que o estoque foi atualizado para zero ou para uma quantidade menor que zero após reservas terem sido feitas.

O estoque negativo ocorre __ao tentarmos dar baixa no item de um pedido quando este item ainda está como reservado pelo sistema__.

## Baixa no estoque

O fluxo correto prevê que a baixa no estoque só ocorra após o status __Preparando Entrega__. Após este status, a reserva já está reconhecida. Antes disso, o sistema entenderá que o item que está sendo diminuído não é o item em reserva, atualizando o estoque incorretamente.

Para ajustar este cenário, o estoque do item deve ser atualizado com a quantidade de itens físicos no estoque. Dessa maneira, o valor dos itens em estoque deve ser a soma dos itens disponíveis mais os itens que estão reservados e que ainda não estão no status de __Preparando Entrega__. A correção pode ser feita seguindo os passos abaixo:

1. No Admin VTEX, acesse __Catálogo > Inventário__, ou digite **Inventário** na barra de busca no topo da página.
2. Clique em __Gerenciamento de inventário__.
3. Busque pelo SKU desejado e clique no resultado da busca.
4. Na coluna __Atualizar contagem__, preencha com o valor indicado na descrição acima.
5. Clique em __Salvar__.

>⚠️ Quando dois ou mais estoques utilizam a mesma [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) e há uma quantidade negativa de unidades em um desses estoques, o SKU fica indisponível para venda, mesmo que exista uma quantidade disponível em um dos estoques no [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139).

