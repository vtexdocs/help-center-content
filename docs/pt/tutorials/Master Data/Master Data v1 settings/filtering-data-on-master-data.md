---
title: 'Filtrar dados no Master Data'
id: tutorials_778
status: PUBLISHED
createdAt: 2017-04-27T21:58:11.041Z
updatedAt: 2024-06-27T00:07:07.554Z
publishedAt: 2024-06-27T00:07:07.554Z
firstPublishedAt: 2017-04-27T23:03:42.905Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: filtrando-dados-no-master-data
locale: pt
legacySlug: filtrando-dados-no-master-data
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

No Master Data, é possível criar filtros tanto para acesso por API quanto para a visualização nos formulários. A criação de filtros facilita a busca e consulta de dados, possibilitando um maior controle sobre seus dados.

A criação de filtro deve ser configurada primeiro na entidade de dados e posteriormente no formulário desejado, conforme os passos descritos nas seções a seguir.

## Requisitos para filtros

Siga as recomendações abaixo ao definir campos como filtros:

- Não utilize campos dos tipos **CEP**, **Text** e **File** como filtros.
- Adicione como filtro um campo que contenha poucas opções em seu preenchimento, como "Categoria", por exemplo.

## Configurar filtro na entidade de dados

Siga as instruções abaixo para definir um campo existente como filtro na entidade de dados:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. No Master Data, clique na engrenagem <i class="fas fa-cog"></i> ao lado de uma aplicação.
3. Clique em **Estrutura de dados**.
4. Acesse a aba **Entidades de dados.**
5. Clique no botão de edição <i class="fas fa-edit"></i> na entidade em que deseja configurar o filtro.

   Você será direcionado(a) para a listagem de campos da entidade.
6. Clique no botão com símbolo de engrenagem <i class="fas fa-cog"></i> no campo que deseja configurar como filtro.
7. Marque a opção **É filtrável?**.
8. Clique no botão `Salvar`.
9. Na listagem de entidades, clique no botão de disquete <i class="fas fa-save"></i> para publicar a entidade.
10. Clique no botão de reindexação <i class="fas fa-expand-arrows-alt"></i> para indexar a entidade.

## Configurar filtro no formulário

Siga as instruções abaixo para configurar filtros no formulário:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Na aplicação em que está o formulário onde deseja criar o filtro, clique no símbolo de engrenagem <i class="fas fa-cog"></i>.

   Você será direcionado(a) para a listagem de formulários da aplicação.
3. Clique no botão de edição <i class="fas fa-edit"></i> na linha do formulário que deseja editar.
4. Preencha o campo **Filtros** com o nome interno do campo marcado como filtro. O nome interno corresponde ao valor do primeiro campo na criação e edição de entidade de dados, o nome do campo que não é possível alterar. Para inserir mais de um valor, separe-os por vírgula, sem espaço.
5. Clique no botão `Salvar`.

## Filtrar registros do formulário

Após a criação do filtro, é possível utilizá-lo no formulário. Para isso, siga o passo a passo abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Na aplicação desejada, identifique o formulário que deseja visualizar e clique no ícone de listagem <i class="fas fa-bars"></i>.

   Você será direcionado(a) para a listagem de registros desse formulário. Na lateral, você verá os filtros configurados. 
3. Para filtrar, selecione o nome do filtro e seu valor e, em seguida, clique em `Filtrar`.

   É possível filtrar por vários campos ao mesmo tempo e vários valores no mesmo campo. Para retirar um filtro, clique no `X` ao lado do valor.
