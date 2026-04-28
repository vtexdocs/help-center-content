---
title: 'Especificações de produto e de SKU'
id: 2NQoBv8m4Yz3oQaLgDRagP
status: PUBLISHED
createdAt: 2019-06-11T12:52:45.235Z
updatedAt: 2022-07-06T17:40:57.274Z
publishedAt: 2022-07-06T17:40:57.274Z
firstPublishedAt: 2019-06-25T15:32:42.804Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: specifications-concept-definition
locale: pt
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalogo-101
order: 11
---

Especificações são propriedades adicionais que podem ser cadastradas nos produtos ou SKUs da sua loja. Na VTEX, essas especificações são cadastradas na seção **Categorias** e são chamadas de **Campo**.

> ⚠️ Na VTEX, as especificações seguem uma lógica de “herança”, ou seja, ao criar uma especificação em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela. Portanto, se for necessário criar uma especificação de produto ou SKU que se aplique a apenas uma categoria, esta deve ser criada no nível dessa categoria.

## Especificação de Produto

A especificação de produto geralmente é utilizada para criar filtros de navegação no site ou para exibir uma informação adicional na tela do produto.   

Numa loja do setor de moda, você poderia criar uma especificação de produto para informar ao seu cliente qual o **tecido** de um item vendido em sua loja.

Essa informação poderia ser exibida como filtro numa barra lateral ou como um texto informativo dentro da página do produto.

As especificações de produto podem receber dados como strings e números, podendo ser consumidas pelas APIs da VTEX para serem utilizadas na customização de front-end ou no envio de informações para integrações externas.

Para entender o passo a passo completo para criar especificações de produto, confira o artigo [Cadastrar especificações ou campos de produto](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto).

## Especificação de SKU

A especificação de SKU é utilizada para criar filtros de navegação no site e para diferenciar os SKUs dentro da página de produto.

Numa loja de camisas, você poderia criar uma especificação de SKU para diferenciar os seus produtos por tamanho, por exemplo.

As especificações de SKU teriam os valores de **PP, P, M, G e GG**. Elas poderiam ser utilizadas como filtro de navegação do site. Além disso, as especificações funcionariam como seletores de SKU na página do produto.

Para entender o passo a passo completo para criar especificações de SKU, confira o artigo [Cadastrar especificações ou campos de SKU](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-sku).

> ⚠️ Na VTEX, as especificações de SKU são campos obrigatórios para concluir o cadastro de um SKU. Isso significa que, se uma nova especificação for criada dentro de uma categoria, todos os SKUs dentro desta categoria precisam ter esta nova especificação cadastrada. Assim, todos esses SKUs ficarão inativos até que o cadastro desta nova especificação seja realizado nos SKUs da categoria em questão.

