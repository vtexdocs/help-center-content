---
title: 'Inativar e reorganizar categorias'
id: tutorials_264
status: PUBLISHED
createdAt: 2017-04-27T22:11:16.693Z
updatedAt: 2023-03-28T17:39:10.218Z
publishedAt: 2023-03-28T17:39:10.218Z
firstPublishedAt: 2017-04-27T23:03:12.416Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: inativar-e-reorganizar-categorias
locale: pt
legacySlug: inativando-e-reorganizando-categorias
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

A partir da página **Catálogo > Categorias** no Admin VTEX, é possível realizar ações relacionadas às [categorias](https://help.vtex.com/pt/tutorial/cadastrando-categoria) configuradas na sua loja. Confira as seções a seguir para saber como realizar cada ação:

* [Inativar uma categoria](#inativar-uma-categoria)
* [Alterar a ordem de subcategorias](#alterar-a-ordem-de-subcategorias)
* [Alterar a árvore de categorias](#alterar-a-arvore-de-categorias)

## Inativar uma categoria

Para tornar uma categoria inativa na sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse o **Catálogo**.
2. Clique em **Categorias**.
3. Selecione a Categoria ou Departamento que você deseja inativar.
4. Clique em **Ações** e, em seguida, escolha a opção **Alterar**.
5. Desmarque as opções **Menu** e **Ativo**, dependendo da sua necessidade:
    - **Menu:** define se a categoria aparece ou não no menu superior e no menu lateral do Site, embora a categoria continue a existir dentro do ambiente. \
    - **Ativo:** define se a categoria está ativa ou inativa no site.
6. Clique em `Salvar`.

## Alterar a ordem de subcategorias

Na árvore de categorias exibida na página **Catálogo > Categorias** do Admin VTEX, caso a categoria em questão possua subcategorias, elas são exibidas logo abaixo da categoria pai. Para alterar a ordem das subcategorias, siga os passos abaixo.

1. Clique na categoria pai desejada.
2. Clique em **Ações** e em **Alterar**.
3. Na seção **Categorias Filhas**, você encontrará as subcategorias. Na coluna **Posição**, clique no botão azul e arraste até a posição desejada.
4. Clique em `Salvar` para gravar as alterações.

## Alterar a árvore de categorias

>⚠️ Mover categorias diretamente pela árvore de categorias pode gerar erros inesperados no seu catálogo. Por isso, recomendamos seguir as instruções abaixo para qualquer alteração nos níveis de categorias. Leia o [problema conhecido](https://help.vtex.com/pt/known-issues/mover-categorias-gera-comportamentos-inesperados-na-arvore-de-categorias--6JSa9nnYoAAUQO1zPtzfZD) relacionado a esse cenário para mais informações.

Existem cenários em que é necessário mudar o nível hierárquico de uma categoria. Por exemplo, imagine que uma loja tem uma categoria pai chamada **Acessórios** e uma categoria filha (subcategoria) chamada **Sapatos**, mas deseja transformar a subcategoria **Sapatos** em uma outra categoria pai.

Para movimentar uma categoria sem causar erros ou perder informações, siga o passo a passo:

1. Crie uma nova categoria clone da que vai ser migrada mas já no nível que ela deveria estar.

    Exemplo:

    * 1 - Acessórios
        * 2 - Sapatos
    * 3 - Sapatos clone

2. Transfira todos os produtos da antiga categoria para a categoria clone.
3. Inative a categoria antiga.

    Exemplo:

    * 1 - Acessórios
        * 2 - Sapatos (inativa)
    * 3 - Sapatos clone (ativa e com os produtos)

## Saiba mais

* [Categorias - Definição de conceito](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Cadastrar uma Categoria](https://help.vtex.com/pt/tutorial/cadastrar-uma-categoria--tutorials_206)
