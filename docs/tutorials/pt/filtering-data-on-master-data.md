---
title: 'Filtrar dados no Master Data'
id: tutorials_778
status: PUBLISHED
createdAt: 2017-04-27T21:58:11.041Z
updatedAt: 2023-03-28T23:42:30.477Z
publishedAt: 2023-03-28T23:42:30.477Z
firstPublishedAt: 2017-04-27T23:03:42.905Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: filtrando-dados-no-master-data
legacySlug: filtrando-dados-no-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

No Master Data, é possível criar filtros tanto para acesso por API quanto para a visualização nos formulários. A criação de filtros facilita a busca e consulta de dados, possibilitando um maior controle sobre seus dados. A criação de filtro deve  ser configurada primeiro na entidade de dados e posteriormente no formulário desejado. O requisito para que um campo seja configurado como filtro é que não sejam usados os tipos CEP, Text e File. Além disso, é uma boa prática colocar como filtro um campo que contenha poucas opções em seu preenchimento, como “Categoria”, por exemplo.

## Como configurar filtro na Entidade de Dados

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. No Master Data, clique em **Aplicações** > **Estrutura de dados**.
3. Acesse a aba **Entidade de Dados.**
4. Clique no botão **editar** na entidade que deseja configurar o filtro;
5. Abrirá a listagem de campos.
6. Clique no botão com símbolo de engrenagem no campo que deseja configurar;
7. Marque a opção **É filtro.**
8. Clique no botão **Salvar.**
9. Na listagem de entidades, clique no botão **Publicar**, com símbolo de disquete.
10. Aguarde a publicação e reindexação dos dados para visualizar o filtro.

## Como configurar filtro no formulário

1. Acesse o módulo **Master Data**;
2. Clique na aba **Aplicações**;
3. Na aplicação em que está o formulário onde deseja criar o filtro, clique no símbolo de engrenagem;
4. Abrirá a listagem de formulários, clique no símbolo lápis no formulário que deseja editar;
5. Preencha o campo **Filtros** com o nome interno do campo marcado como Filtro. Entende-se nome interno como a primeira coluna na criação e edição de entidade de dados, o nome que não é possível alterar. Para inserir mais de um valor, basta separá-los por vírgula, sem espaço;
6. Clique no botão **Salvar**.

## Como filtrar

Após a criação do filtro é possível utilizá-lo no formulário. Para isso, siga o passo-a-passo abaixo.

1. Acesse o módulo **Master Data**;
2. Clique na aba **Aplicações**;
3. Na aplicação desejada, identifique o formulário que deseja visualizar;
4. No formulário desejado, clique no ícone de listagem;
5. Abrirá a página com a listagem de registros desse formulário. Na lateral, você verá os filtros configurados. 
6. Para filtrar, basta clicar no nome do filtro e em seu valor. 
7. Para verificar o resultado no filtro, role a página para baixo e clique no botão **Filtrar**.
8. É possível filtrar por vários campos ao mesmo tempo e vários valores no mesmo campo. Para retirar um filtro, basta clicar no símbolo **x** ao lado do valor.

