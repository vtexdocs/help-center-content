---
title: Por que o produto não indexa?
id: frequentlyAskedQuestions_1608
status: PUBLISHED
createdAt: 2017-04-27T22:27:09.727Z
updatedAt: 2022-05-24T22:36:40.718Z
publishedAt: 2022-05-24T22:36:40.718Z
firstPublishedAt: 2017-04-27T23:02:35.077Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_3
slug: por-que-o-produto-nao-indexa
legacySlug: por-que-o-produto-nao-indexa
---

### Tempo limite

Caso um produto tenha várias ocorrências na indexação, conforme explica o artigo [Como funciona a indexação](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256), ele pode sair da fila de indexação por atingir o tempo limite de espera.

Para ilustrar, veja o exemplo abaixo.

Produto A com 5 SKUs e ativo em 5 políticas comerciais.

Neste cenário, o produto A sofrerá 25 validações a cada alteração, isso porque para cada SKU serão verificadas as disponibilidades de estoque e as regras de preço e promoções, dentro de cada política comercial. Para evitar tantas validações, a melhor saída é o ajuste e diminuição do número de políticas comerciais.

Como explicado em [Configurar política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404), é possível que uma mesma política seja utilizada para mais de um marketplace, desde que eles usem o mesmo catálogo, preço e estoque.

Também há a possibilidade de reduzir o número de SKUs por produto, neste caso, deve-se dividir um produtos em mais de um, visando aumentar a especificidade do produto. Ex.:

Antes:
Produto: Camisa. SKUs: Amarela P, Amarela M, Amarela G, Azul P, Azul M, Azul G.

Depois:
Produto: Camisa Amarela. SKUs: P, M, G.
Produto: Camisa Azul. SKUs: P, M, G.

Para verificar se seu produto realmente não foi indexado, verifique no relatório de indexação, em **Produtos que não foram indexados**. Para mais detalhes, verifique no botão **Log**, à direita (i), o motivo da não indexação.

### Política comercial

Além disso, é necessário que a política comercial do produto esteja associada a um website válido. 

Se no CMS algum Website tiver configurações ou uma estrutura de pastas incorreta, há riscos de o produto não conseguir ser indexado.
