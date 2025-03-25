---
title: 'Filtro de multi seleção do controle searchNavigator desconsiderando termo buscado'
id: ijtyA8hzgsgSYwa6EoyES
status: PUBLISHED
createdAt: 2017-08-29T15:40:30.287Z
updatedAt: 2022-12-22T20:43:23.408Z
publishedAt: 2022-12-22T20:43:23.408Z
firstPublishedAt: 2017-08-29T19:10:56.767Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slugEN: searchnavigator-control-multiselection-filter-disregards-searched-term
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

>⚠️ **Atenção**: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.

Quando o usuário realiza uma busca por termo e, em seguida, aplica um filtro nas opções de multi seleção (no controle searchNavigator), o termo buscado inicialmente é removido da consulta, ou seja, o filtro ignora o termo e aplica a busca somente com as opções escolhidas pelo usuário.

![search result](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketing%20&%20Merchandising/filtro-de-multi-selecao-do-controle-searchnavigator-desconsiderando-termo-buscado_1.gif)

## Simulação

Para simular o cenário:
1. Configure o controle searchNavigator em algum template que possua o controle searchResult (Busca, Departamento, Categoria etc). Leia mais sobre esses controles [clicando aqui](http://help.vtex.com/pt/tutorial/lista-de-controles-para-templates)
2. Deixe disponível, via CSS, a opção multi seleção do HTML renderizado pelo controle
3. Acesse o site e faça uma busca por um termo que contenha produtos
4. Nas opções de multi seleção do filtro (searchNavigator), escolha alguma opção (Marca, Categoria, Especificação) e clique no botão para aplicar os filtros
5. Pronto! Após aplicar o filtro, o termo buscado inicialmente é removido do contexto e a busca é aplicada somente com o filtro selecionado

## Workaround

Para evitar esse cenário não utilize os filtros de multi seleção do controle searchNavigator.

