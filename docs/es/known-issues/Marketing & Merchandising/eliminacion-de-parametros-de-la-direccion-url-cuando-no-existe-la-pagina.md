---
title: "Eliminación de parámetros de la dirección URL cuando no existe la página"
id: EbKaj7Laz6IEooYS2OuYW
status: PUBLISHED
createdAt: 2018-12-17T21:26:03.577Z
updatedAt: 2022-12-22T20:44:59.730Z
publishedAt: 2022-12-22T20:44:59.730Z
firstPublishedAt: 2018-12-17T22:19:13.274Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: eliminacion-de-parametros-de-la-direccion-url-cuando-no-existe-la-pagina
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al acceder a una dirección con parámetros (querystrings) en la URL, si la página de destino no existe, el usuario será redireccionado a una página de "404" o "no encontrada". En estos casos, se eliminan los parámetros en cuestión.
 
Afecta especialmente parámetros de rastreo para marketing.


## Simulación

Acceder a una de las siguientes páginas, de modo que estas no existan en el sitio en cuestión:
 
- www.site.com/produto-inexistente/p?parametro=valor&outro=teste
- www.site.com/rota-inexistente?parametro=valor&outro=teste
 
El destino será, respectivamente:
 
- www.site.com/Sistema/404?ProductLinkNotFound=produto-inexistente
- www.site.com/Sistema/buscavazia?ft=rota-inexistente


## Workaround

No existe un workaround conocido para este escenario.

