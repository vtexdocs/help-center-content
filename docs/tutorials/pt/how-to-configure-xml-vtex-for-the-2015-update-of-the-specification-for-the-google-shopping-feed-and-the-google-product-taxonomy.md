---
title: 'Como configurar o XML VTEX para a Atualização de 2015 da Especificação do feed do Google Shopping e da Taxonomia do produto do Google'
id: tutorials_541
status: DRAFT
createdAt: 2017-04-27T22:02:13.320Z
updatedAt: 2019-12-31T15:23:02.428Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:37.920Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: como-configurar-o-xml-vtex-para-a-atualizacao-de-2015-da-especificacao-do-feed-do-google-shopping-e-da-taxonomia-do-produto-do-google
locale: pt
legacySlug: 
subcategory: 
---

<div class="alert alert-warning">A integração com o Google Shopping por XML é um <strong>método ultrapassado</strong> e que não é mais recomendado. Veja [aqui](http://help.vtex.com/tutorial/nova-integracao-google-shopping-api "Nova integração do Google Shopping") como funciona a nova integração do Google Shopping por API.</div>

Seguindo a [Atualização de 2015 da Especificação do feed do Google Shopping e da Taxonomia do produto do Google](https://support.google.com/merchants/answer/6231410?hl=pt-BR "Atualização de 2015 da Especificação do feed do Google Shopping e da Taxonomia do produto do Google"), incluímos novos campos em nosso formulário de criação de XML: Separador de categorias, Categoria Global e Especificações de produto.

A configuração padrão de nosso formulário de XML já está com as tags atualizada, para criar um novo feed Google Merchant / Shopping basta selecionar a opção “Feed: Atom 1”:

![](//images.contentful.com/alneenqid6w5/2ugQUy4xlaaUEOIYuu6UMe/41fd01c32b6954b14e1ef5818b94ca0c/atom1_xml_vtex_google.gif)

Para a correta integração com o Google Merchant / Shopping será necessário atualizar o xml com os novos campos a partir do dia 15 de setembro de 2015.

Conheça os novos campos do formulário de XML:

### Separador de categorias

Opção responsável pela definição da taxonomia dos campos “Categoria” e “Departamento + Categoria”. Comumente utilizado para o preenchimanto da tag [g:product\_type].

![](//images.contentful.com/alneenqid6w5/3dgBcIJZgcKSW2YKCaksmW/653d517228e7d303e7326dfa1dcedbc1/separador_categoria_xml_vtex_google.gif)

Padrão (Ex: Categoria Pai - Categoria Filha - Categoria Neta)

Padrão de separador “-” utilizado para feed de parceiros como Criteo, Buscapé

Google Shopping (Ex: Categoria Pai &gt; Categoria Filha &gt; Categoria Neta)

Separador “/” exigido pela taxonomia Google Merchant / Shopping

### Categoria Global

Campo responsável pelo relacionamento das categorias de sua loja com as categorias Google de produto: https://support.google.com/merchants/answer/1705911

Deverá ser preenchido com a tag [g:google\_product\_category]

![](//images.contentful.com/alneenqid6w5/307z7lsmEMgQMWIOUQWk8K/9d854eb77bb73e1c79d5307c78fb0215/categoria_global_xml_vtex_google.gif)

Para o correto funcionamento desse campo é necessário verificar se o produto tem o campo **Categorial Global** preenchido no catálogo VTEX.

[Saiba como cadastrar corretamente a Categoria Global de sua loja](/tutorial/configurando-a-categoria-global "Saiba como cadastrar corretamente a Categoria Global de sua loja")

### Especificações para atributos de produto

Para feeds que possuem produtos da categoria "Vestuário e acessórios" será obrigatória a inserção dos atributos "cor" [g:color], "idade" [g:age\_group] e "gênero" [g:gender]. Já para feeds com produtos da categoria "Vestuário e acessórios - Roupas" e "Vestuário e acessórios - Sapatos" será também necessário incluir também o atributo "tamanho" [g:size].

Criamos campos customizáveis para uma maior flexibilidade na integração da nomeclatura atual das especificações das categorias de sua loja com as Especificações de Produto do Google.

Para preencher corretamente os campos customizáveis você deve seguir o seguinte artigo: [Padrão de valor para Atributo de Especificações de Produto - XML GoogleShopping](http://help.vtex.com/tutorial/atributo-de-especificacoes-de-produto-xml-googleshopping/ "Padrão de valor para Atributo de Especificações de Produto - XML GoogleShopping")
