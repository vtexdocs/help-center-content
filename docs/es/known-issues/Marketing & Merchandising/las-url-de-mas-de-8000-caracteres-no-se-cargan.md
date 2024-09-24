---
title: 'Las URL de más de 8000 caracteres no se cargan'
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
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al intentar acceder a cualquier página cargada por el Portal cuya URL supere los 8 mil caracteres, se produce un error de **Response 50x**.

Esto sucede porque en algunos navegadores el [límite máximo de caracteres de la URL](http://net-informations.com/q/mis/len.html) es de 2 mil. El límite varía en función del navegador utilizado, pero lo ideal es mantener las URL por debajo de esta cantidad de caracteres para evitar este problema.

Dado que los filtros del Portal concatenan _query strings_ en la URL, es posible que las páginas con una cantidad muy elevada de filtros, repetición de diversos parámetros y filtrado erróneo superen este límite de caracteres. Es habitual que esto ocurra cuando la tienda utiliza `specificationIDs` como filtros, por ejemplo.

## Simulación

1. Acceda a una página de categoría o departamento de su tienda que tenga la opción de seleccionar filtros de búsqueda.
2. Aplique tantos filtros como desee. Tenga en cuenta que los filtros se concatenan como *query strings* en la URL, es decir, cuantos más filtros seleccione, mayor será el tamaño de la URL final. Si la cantidad de caracteres que supone la URL no es soportada por el navegador, la página no se cargará y aparecerá un mensaje de error.

## Workaround

Cuando configure el _layout_ de su tienda, utilice páginas con filtros más específicos o menos filtros para reducir el número total de caracteres en la URL debido a la selección de filtros.


