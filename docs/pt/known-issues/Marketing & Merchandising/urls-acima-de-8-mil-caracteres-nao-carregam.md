---
title: 'URLs acima de 8 mil caracteres não carregam'
id: 3tZpUf9X428GQNCaIa24hX
status: PUBLISHED
createdAt: 2021-07-26T13:08:22.992Z
updatedAt: 2022-12-22T20:52:51.184Z
publishedAt: 2022-12-22T20:52:51.184Z
firstPublishedAt: 2021-07-26T13:13:10.775Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
tag: Portal (CMS)
slugEN: urls-longer-than-8-000-characters-do-not-load
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao tentar acessar qualquer página carregada pelo Portal cuja URL exceda 8 mil caracteres, ocorre um erro **Response 50x**.

Isso acontece porque o [limite máximo de caracteres da URL](http://net-informations.com/q/mis/len.html) suportado por alguns browsers é 2 mil. O limite varia dependendo do navegador utilizado, porém o ideal é manter as URLs abaixo dessa quantidade de caracteres para evitar esse problema.

Como os filtros do Portal concatenam _query strings_ na URL, é possível que páginas com uma quantidade muito alta de filtros, repetição de diversos parâmetros e filtragens equivocadas excedam esse limite de caracteres. É comum que isso ocorra quando a loja utiliza `specificationIDs` como filtros, por exemplo.

## Simulação

1. Acesse uma página de categoria ou de departamento da sua loja que possua a opção de selecionar filtros de busca.
2. Aplique diversos filtros, conforme desejar. Repare que os filtros são concatenados como _query strings_ na URL, ou seja, quanto mais filtros são selecionados, maior o tamanho da URL final. Caso a quantidade de caracteres assumida pela URL não seja suportada pelo navegador, a página não será carregada e vai aparecer uma mensagem de erro.

## Workaround

Ao configurar o layout da sua loja, utilize páginas com filtros mais específicos ou uma menor quantidade de filtros, de forma a reduzir o total de caracteres na URL ao selecionar filtros.

