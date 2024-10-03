---
title: 'Tags title e description são ignoradas em template estáticos'
id: 2ElYglcUPOQieoUUG6akqo
status: PUBLISHED
createdAt: 2017-09-05T20:55:36.892Z
updatedAt: 2022-12-22T20:43:24.475Z
publishedAt: 2022-12-22T20:43:24.475Z
firstPublishedAt: 2017-09-05T21:21:03.197Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slugEN: tags-title-and-description-are-ignored-in-static-template
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Em templates estáticos que não são de produto, departamento, categoria ou marca, as tags title e description - quando inseridas diretamente no template - são ignoradas pelo sistema. 

O título padrão fica sendo o nome da pasta de maior nível mais o nome do website. 

Exemplo:

Website: `LojaOnline`
Pastas:
- `Institucional`
- `duvidas-frequentes`

A página `duvidas-frequentes` ficará com o title "Institucional - LojaOnline".

## Simulação

1. Criar uma pasta de primeiro nível ou mais baixo.
2. Colocar dentro do `<head>` as tags `<title>` e `<description>`

## Workaround

1. Criar um [controle customizado](/pt/faq/para-que-serve-o-controle-customizado) do tipo HTML e inserir as tags `<title>` e `<description>`.
2. Inserir o controle customizado no `<head>` do template estático. 

