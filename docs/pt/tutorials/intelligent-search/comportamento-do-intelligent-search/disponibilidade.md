---
title: 'Disponibilidade'
id: 3ZcZOzTSr2RdauUbn7qTa9
status: PUBLISHED
createdAt: 2024-06-24T17:51:07.903Z
updatedAt: 2025-03-31T18:58:33.591Z
publishedAt: 2025-03-31T18:58:33.591Z
firstPublishedAt: 2024-06-24T18:00:08.767Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: availability
legacySlug: disponibilidade
locale: pt
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

Para montar um resultado de busca, o VTEX Intelligent Search considera a disponibilidade de cada produto encontrado na pesquisa. Produtos disponíveis serão sempre priorizados em relação a produtos sem disponibilidade nos resultados de busca. 

Ao verificar a disponibilidade do produto, o VTEX Intelligent Search utiliza o campo **Mostrar produto esgotado** cadastrado no [Catálogo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) para verificar quais produtos serão exibidos mesmo quando indisponíveis. Se a configuração do produto determinar que ele não deve ser exibido quando estiver fora de estoque, a plataforma não apresentará o produto. No entanto, se a configuração indicar que o produto deve ser exibido mesmo quando estiver sem estoque, a plataforma o colocará no final dos resultados de busca.

Além da exibição do produto sem estoque, o VTEX Intelligent Search também verifica se:

- O produto em questão está ativo.
- Pelo menos um SKU do produto está ativo.
- A categoria do produto está ativa.
- A marca do produto está ativa.
- O campo **Exibir no site** do produto está configurado como ativo.

Após checar a disponibilidade, o sistema combina itens da sua loja, do catálogo de [sellers](/pt/docs/tutorials/o-que-e-um-seller) e as configurações de [políticas comerciais](/pt/docs/tutorials/como-funciona-uma-politica-comercial) cadastradas para chegar ao preço e ao estoque finais. Se algum desses itens possuir preço e estoque, o produto está disponível. Sempre que o estoque e o preço do produto são alterados, uma nova [indexação](/pt/docs/tutorials/historico-da-indexacao) é agendada e essas informações são atualizadas.

É possível adicionar outros fatores, como [Relevância](/pt/docs/tutorials/regras-de-relevancia) e [Regras de merchandising](/pt/docs/tutorials/regras-de-merchandising), para incrementar o resultado. Contudo, a disponibilidade ainda será o critério mais importante para o resultado da busca. 
