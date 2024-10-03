---
title: 'Busca não encoda hífen e o substitui por espaço'
id: 1jH0EdXaKiIyIe8ucgCmwI
status: PUBLISHED
createdAt: 2018-05-29T22:02:32.123Z
updatedAt: 2022-12-22T20:43:20.714Z
publishedAt: 2022-12-22T20:43:20.714Z
firstPublishedAt: 2018-05-29T22:05:57.827Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: search-doesnt-encode-hyphen-and-replaces-it-with-a-space
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

>⚠️ **Atenção**: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.

Quando o termo buscado possui um hífen (`-`), a busca substitui este caractere por um espaço na querystring, não trazendo o resultado esperado.

## Simulação

Realize uma busca em seu site com o caractere hífen (`-`) no termo buscado. Observe que o valor do hífen será substituído por um espaço na busca.

## Workaround

Para produtos que contenham termos com hífen, cadastrar no campo `Palavras substitutas` o termo com espaço no lugar do hífen para que o produto seja encontrado no resultado de busca.

