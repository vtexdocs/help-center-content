---
title: 'Promoções que resultam em classificação/filtragem incorreta por preço ou desconto'
id: 1qGJByINC3S7ibgiQccVcY
status: PUBLISHED
createdAt: 2023-08-28T17:51:44.627Z
updatedAt: 2023-11-10T18:19:30.796Z
publishedAt: 2023-11-10T18:19:30.796Z
firstPublishedAt: 2023-08-28T17:55:21.450Z
contentType: knownIssue
productTeam: Intelligent Search
author: authors_84
tag: Intelligent Search
slug: promocoes-que-resultam-em-classificacao-filtragem-incorreta-por-preco-ou
locale: pt
kiStatus: Backlog
internalReference: 888304
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

As listas de produtos e os resultados de pesquisa podem ser mal classificados/filtrados ao usar a classificação ou a filtragem por preço ou desconto se houver preços de itens desatualizados no nível do índice, mesmo que a vitrine esteja mostrando o preço correto.

A classificação dos produtos é sempre baseada em informações indexadas anteriormente (dados frios), enquanto a vitrine geralmente recalcula todas as informações em tempo de execução (dados quentes), de modo que os preços apresentados estão sempre corretos em relação ao carrinho.

Espera-se que cada alteração de preço (e até mesmo outras alterações) faça com que os itens sejam reindexados para que o índice esteja atualizado com as novas condições. O problema é que o módulo Promoções não suporta o envio de notificações para o serviço de indexação quando uma promoção começa ou termina, resultando ocasionalmente em preços de itens desatualizados, em que o módulo Pesquisa não é capaz de classificar/filtrar os itens corretamente em comparação com os preços em tempo real.

Qualquer ação que reindexe as condições comerciais do item (como alterações de estoque) também atualizará organicamente seu preço considerando a promoção, o que acaba mascarando o problema para alguns itens.

As lojas que usam `simulationBehavior=skip` não verão divergências entre a classificação de itens e os filtros aplicados no PLP, pois esse parâmetro resulta na renderização dos "dados frios" ali, mas elas aparecerão ao comparar o mesmo item no PLP com seu PDP, que funciona de forma fixa como um `simulationBehavior=default`, recuperando informações atualizadas em tempo de execução.

## Simulação

A maneira mais fácil de ver os efeitos desse problema é ter uma lista de produtos classificados pelo menor preço, criar uma promoção para um produto no meio da lista e observar se a classificação não muda depois de ativar a promoção, mesmo quando ele fica mais barato do que outros produtos.

## Workaround

N/A

