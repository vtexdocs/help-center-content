---
title: 'Calcular receita a partir da planilha exportada do módulo Pedidos'
id: 51KTkEqie4UC46qO8KgGGE
status: PUBLISHED
createdAt: 2018-02-21T13:17:33.632Z
updatedAt: 2023-03-31T13:22:08.224Z
publishedAt: 2023-03-31T13:22:08.224Z
firstPublishedAt: 2018-02-21T13:37:37.839Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: calcular-receita-a-partir-da-planilha-exportada-do-modulo-pedidos
locale: pt
legacySlug: calcular-receita-a-partir-da-planilha-exportada-do-oms
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

A tela inicial do módulo **Pedidos** exibe a receita total obtida por sua loja de acordo com os critérios definidos nos [filtros](https://help.vtex.com/pt/tutorial/filtrar-todos-pedidos--tutorials_192) da busca.

No entanto, pode ser que você deseje calcular a receita apurada em determinado período a partir da [planilha de pedidos exportada](https://help.vtex.com/pt/tutorial/exportacao-de-pedidos-no-modulo-pedidos--tutorials_6417) do módulo **Pedidos**.

Nessa planilha estão listadas dezenas de atributos do pedido e você ganha flexibilidade para filtrá-los de acordo com mais critérios.

Para calcular a receita total a partir da planilha, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. [Exporte a planilha de pedidos](https://help.vtex.com/pt/tutorial/exportacao-de-pedidos-gerenciamento-de-pedidos--tutorials_6417) com o intervalo de tempo desejado.
3. Abra o seu email e faça o download do link em até 72h, que é o prazo de validade do link.
4. Remova todos os valores duplicados da segunda coluna (__Order__). Isto deve ser feito porque, nos casos de compras de mais de um SKU, são geradas diversas linhas para o mesmo pedido - uma para cada SKU.
5. Some os valores da coluna __Total Value__. Nesta coluna fica o valor total do pedido (ou seja, já considerando todos os SKUs do carrinho).

>ℹ️ A soma dos valores da coluna Total Value (após a remoção dos pedidos duplicados) é a receita total obtida com os pedidos selecionados na planilha.

Para entender cada coluna, veja o artigo [Relatório de pedidos](https://help.vtex.com/pt/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY).
