---
title: 'Formatação de preços do XML incompatível com o Google Shopping'
id: epKPG9W2zuecMoW2KCuyk
status: PUBLISHED
createdAt: 2018-04-11T21:23:55.057Z
updatedAt: 2022-12-22T20:48:44.773Z
publishedAt: 2022-12-22T20:48:44.773Z
firstPublishedAt: 2018-04-11T22:29:06.698Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: formatacao-de-precos-do-xml-incompativel-com-o-google-shopping
kiStatus: Backlog
internalReference: 
---

## Sumário

O serviço de XML da VTEX renderiza as tags de preço no formato `R$ 99999,99`, com o separador decimal por vírgulas.

Recentemente o Google Shopping passou a não aceitar mais a vírgula como um separador, sendo necessário enviá-lo como ponto.

## Simulação

1. No menu adminstrativo, acessar o Catálogo.
2. No menu do Catálogo, acessar Configurações > XML.
3. Acessar um arquivo de XML compatível com o Google Shopping.
4. Buscar uma das tags `<g:price>`.

## Workaround

Não sendo um formato disponível no XML, a solução atual é utilizar a integração por API com o Google Shopping, disponibilizada como integração nativa de marketplace na VTEX.

