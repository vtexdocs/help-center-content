---
title: " A 'posição' da política comercial depende da página que é mostrada na interface administrativa"
id: 3kcSD7J5uuHYGdhBcg1lMa
status: PUBLISHED
createdAt: 2022-10-31T20:28:08.565Z
updatedAt: 2022-11-30T14:47:44.304Z
publishedAt: 2022-11-30T14:47:44.304Z
firstPublishedAt: 2022-10-31T20:28:09.333Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-posicao-da-politica-comercial-depende-da-pagina-que-e-mostrada-na-interface-administrativa
locale: pt
kiStatus: Backlog
internalReference: 286470
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Um cliente com mais de 20 políticas comerciais acaba tendo mais de uma política comercial por posição. Isto é crítico porque as configurações vinculadas dependem do número da posição, portanto, deve haver apenas uma política comercial por posição.

Atualmente, temos:
página 1 - posições 1 a 20; página 2 - posições 1 a 20 e assim por diante.

Deveríamos ter:
página 1 - posições 1 a 20; página 2 - posições 21 a 40 e assim por diante.


##

## Simulação


Crie 21+ políticas comerciais para uma conta, ela será exibida em 2 páginas na interface administrativa.
Verifique o campo "Posição" da 1ª política comercial da 1ª página da interface
Verifique o campo "Posição" da 1ª política comercial da 2ª página da interface
As duas posições são as mesmas.

API para verificar:

    GET 'http://.vtexcommercestable.com.br/api/catalog_system/pvt/saleschannel/list




##

## Workaround


Desconhecido.

