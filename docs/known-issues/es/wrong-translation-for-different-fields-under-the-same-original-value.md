---
title: 'Traducción errónea para diferentes campos bajo el mismo valor original'
id: 5amLWqGy7TPh7tk4KnLTmW
status: PUBLISHED
createdAt: 2024-02-16T00:05:00.562Z
updatedAt: 2024-02-16T00:05:01.618Z
publishedAt: 2024-02-16T00:05:01.618Z
firstPublishedAt: 2024-02-16T00:05:01.618Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: traduccion-erronea-para-diferentes-campos-bajo-el-mismo-valor-original
locale: es
kiStatus: Backlog
internalReference: 982848
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La Búsqueda Inteligente puede utilizar una traducción errónea para un campo cuyo valor en el idioma primario es el mismo entre diferentes campos.


##

## Simulación


Considerando dos campos (categoría y especificación) de un producto en una tienda con "nl-BE" como idioma por defecto y "fr-BE" como idioma adicional con los siguientes valores:

- categoría
  - nl-BE = medio
  - fr-BE = medio
- especificación
  - nl-BE = medio
  - fr-BE = medio

En caso de discordancia, la traducción "fr-BE" para el campo de especificación puede indexarse erróneamente como "moyens" en lugar de "midi".



## Workaround


N/A





