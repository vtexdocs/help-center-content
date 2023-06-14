---
title: El filtro de precio en la vitrina está considerando el menor precio registrado sin considerar la política comercial a la que está vinculado
id: 1xbpUOsLDGIgqeQ6UCCgK0
status: PUBLISHED
createdAt: 2017-04-03T20:54:18.423Z
updatedAt: 2022-12-22T20:45:56.420Z
publishedAt: 2022-12-22T20:45:56.420Z
firstPublishedAt: 2017-04-03T21:43:41.118Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: el-filtro-de-precio-en-la-vitrina-esta-considerando-el-menor-precio-registrado-sin-considerar-la-politica-comercial-a-la-que-esta-vinculado
kiStatus: Backlog
internalReference: 
---

## Sumario

El filtro de precio está considerando el menor precio registrado sin considerar la política comercial a la que está vinculado. Ese caso es específico para productos que poseen múltiples tablas de valores (asociadas a distintas políticas comerciales).

<video preload="metadata" width="100%" controls="controls">
  <source type="video/mp4" src="//videos.contentful.com/alneenqid6w5/1VtdEXKfvekQeSKMmEeusY/d1b1d1cd6a2e902c0b297eed32ca205a/ProblemaConhecido.mp4">
</video>

En ese escenario, el filtro se hizo considerando productos para la región de San Pablo, pero al buscar el precio con el descuento para el filtro, se verificó que el menor precio es el de Paraná, ya que el descuento que de hecho se está aplicando es del 10%.

Así, si consideramos los valores registrados para cada política comercial menos el descuento de 10%, tendremos:

SP = R$58,83
MG = R$57,51
PR = R$49,41

## Simulación

- Cargar una vidriera de productos;
- Usar el menú y lateral para filtrar por rango de precio;

## Workaround

No hay workaround.

