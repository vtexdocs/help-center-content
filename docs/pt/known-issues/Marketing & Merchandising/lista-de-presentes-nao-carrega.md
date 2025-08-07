---
title: "Lista de presentes não carrega"
id: 3qIHpPzdGoyWMwmyoGugwq
status: PUBLISHED
createdAt: 2017-04-11T21:42:34.789Z
updatedAt: 2022-12-22T20:46:05.885Z
publishedAt: 2022-12-22T20:46:05.885Z
firstPublishedAt: 2017-04-11T21:49:20.648Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: lista-de-presentes-nao-carrega
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A URL de uma gift list é o resultado do concatenamento de todos os SKUs selecionados na criação da lista. Contudo, URLs com mais de 7 mil caracteres deixam de ser indexadas pelo Solr - o sistema de indexação usado pela VTEX.

Essa limitação não possui relação direta com a quantidade de itens de uma lista, e sim com o tamanho da URL. Ou seja, é possível ter listas com mais produtos que não recebem timeout do indexador.

## Simulação

Selecionar uma quantidade grande de itens para uma lista de forma que a URL resultante tenha mais que 7 mil caracteres.

## Workaround

Se possível, editar a lista e diminuir a quantidade de itens selecionados. Normalmente a quantidade de 250 SKUs garante a exibição da lista. Uma quantidade maior que esta já pode causar o cenário do incidente.

Caso a lista esteja inacessível, entrar em contato com o suporte da VTEX para fazer a exclusão da lista.

