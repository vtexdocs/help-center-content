---
title: 'Excluir uma categoria'
id: tutorials_276
status: PUBLISHED
createdAt: 2017-04-27T22:10:36.202Z
updatedAt: 2023-03-29T18:10:52.580Z
publishedAt: 2023-03-29T18:10:52.580Z
firstPublishedAt: 2017-04-27T23:03:13.181Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slug: excluir-uma-categoria
locale: pt
legacySlug: excluir-uma-categoria
subcategory: 1E7tziZCkY4w8i4EmUuwec
---

Por motivos relacionados à segurança de dados, não é possível apagar individualmente uma Categoria após sua criação na plataforma VTEX.

## Tornar uma categoria inativa

Para que uma categoria não apareça para os clientes da loja, você pode torná-la inativa na sua loja. Dessa forma, ela continua sendo listada apenas no Admin. Siga o passo a passo abaixo para fazer essa configuração:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Categorias__.
3. Clique na categoria que você deseja inativar.
4. Clique no botão `Ações`.
5. Clique em `Alterar`.
6. Desmarcar o campo __Ativo | Categoria está ativa no site__, conforme a imagem abaixo: ![img inativarcategoria PT](https://images.ctfassets.net/alneenqid6w5/6SzDebwe2AzOlz9PjlaHNP/c13fcfdbd38d3355b8541fff3f215890/img_inativarcategoria_PT.png)
7. Clique em `Salvar`.

## Apagar todas as categorias

Outra opção é [limpar o catálogo](https://help.vtex.com/pt/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802) e apagar todas as Categorias, Marcas e Especificações ao mesmo tempo. Para isso, é necessário apagar Produtos e SKUs antes. Siga os passos abaixo:

1. Digite a URL abaixo no seu browser: `{accountName}.myvtex.com/admin/Site/fullcleanup.aspx` 
2. Clique em `Apagar Produtos/SKUs`. Atenção: ao apagar esses elementos, seus Produtos e SKUs, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja. 
3. Depois, clique em `Apagar Categorias e Marcas`. Atenção: ao apagar esses elementos, Categorias, Marcas e Especificações, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja.

>⚠️ Por questões de segurança, somente o [usuário Titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) da conta possui acesso à limpeza da base de dados. Caso outro usuário tente acessar esta página, todos os botões estarão inativos.

### Artigos relacionados
- [Cadastrar uma categoria](/pt/tutorial/cadastrando-categoria)
- [Cadastrar um produto](/pt/tutorial/cadastrando-produto)
- [Cadastrar um SKU](/pt/tutorial/cadastrando-sku)
