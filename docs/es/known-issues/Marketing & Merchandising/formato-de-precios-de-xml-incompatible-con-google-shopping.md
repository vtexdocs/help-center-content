---
title: 'Formato de precios de XML incompatible con Google Shopping'
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
slugEN: xml-price-formatting-unsupported-by-google-shopping
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El servicio XML de VTEX renderiza las tags de precio en el formato `$ 99999,99`, con comas funcionando como separadores decimales.

Recientemente Google Shopping pasó a no aceptar más la coma como un separador, siendo necesario enviarlo como punto.

## Simulación

1. En el menú administrativo, acceder al Catálogo.
2. En el menú del Catálogo, entrar en Configuraciones > XML.
3. Acceder a un archivo XML compatible con Google Shopping.
4. Buscar una de las tags `<g:price>`.

## Workaround

Una vez que no se trata de un formato disponible en XML, la solución actual es utilizar la integración por API con Google Shopping, disponible como integración nativa de marketplace en VTEX.


