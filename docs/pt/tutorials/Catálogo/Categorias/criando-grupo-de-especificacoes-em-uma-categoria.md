---
title: 'Criar grupo de especificações em uma categoria'
id: tutorials_246
status: PUBLISHED
createdAt: 2017-04-27T22:12:25.134Z
updatedAt: 2022-07-21T19:58:43.545Z
publishedAt: 2022-07-21T19:58:43.545Z
firstPublishedAt: 2017-04-27T23:03:10.600Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-a-specification-group-in-a-category
legacySlug: criando-grupo-de-categoria
locale: pt
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

Grupo é o nome dado a um conjunto de [especificações (campos)](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) relacionados aos produtos ou SKUs de determinada [categoria](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf).

Na VTEX, uma especificação sempre faz parte de um grupo de especificações, que é associado a uma categoria. Por isso, para criar uma [especificação de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) ou uma [especificação de SKU](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119), é necessário ter cadastrado previamente pelo menos uma categoria e um grupo de especificações.

Neste artigo, explicamos como funciona a herança de especificações e o cadastro de grupos de especificações no Admin VTEX. Confira as seguintes seções:
- [Herança de especificações](#heranca-de-especificacoes)
- [Passo a passo no Admin VTEX](#passo-a-passo-no-admin-vtex)

<div class = "alert alert-info">
  <p>Para criar um grupo de especificações utilizando a <strong>Catalog API</strong>, siga o guia para desenvolvedores <a href="https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification">How to create a specification</a>.</p>
</div>

## Herança de especificações

Quando um grupo é criado dentro de um departamento ou categoria, ele será replicado para os demais níveis cadastrados abaixo desse departamento ou categoria, seguindo uma lógica de "herança".  Portanto, se for necessário criar um grupo de especificações que se aplique a apenas uma categoria, o grupo deve ser criado no nível dessa categoria.

Exemplo: considere uma loja que atua no segmento de moda, onde existe a categoria __Roupas__, com o grupo de especificações **Características**. Esse grupo pode conter, por exemplo, um campo de produto de nome **Composição**, com __Algodão__ ou __Poliéster__ como possíveis valores e um campo de SKU de nome **Tamanho** com __P__, __M__ ou __G__ como possíveis valores.

Na mesma loja do exemplo anterior, na categoria **Roupas**, existe a subcategoria **Vestidos**, que contém outro grupo de especificações, com o campo de produto **Ocasião**, cujos valores podem ser __Casual__ ou __Festa__. Os produtos contidos nessa subcategoria e seus respectivos SKUs precisarão ter todos esses campos preenchidos no cadastro.

## Passo a passo no Admin VTEX

Siga as instruções abaixo para criar um grupo de especificações:

1. No Admin VTEX, acesse __Catálogo > Categorias__.
2. Clique na categoria em que deseja criar o grupo.
3. Clique no botão `Ações` <i class="fas fa-angle-down"></i>.
4. Clique em <i class="fas fa-tags"></i> **Grupo**.
5. Clique no botão `Novo Grupo`.
6. Preencha as seguintes informações:
    - __Nome:__ nome do do grupo, para uso interno.
    - __Categoria:__ nome da categoria em que você está criando o grupo. Este campo é pré-preenchido, é necessário apenas confirmar o nome da categoria.
7. Clique em `Salvar`.

Você pode criar quantos campos achar necessário dentro de um grupo. Os campos criados podem ser definidos como filtros em todos os níveis de navegação na sua loja.

## Saiba mais
- [Categorias](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
- [Especificações de produto e de SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
- [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106)
- [Cadastrar especificações ou campos de SKU](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119)
