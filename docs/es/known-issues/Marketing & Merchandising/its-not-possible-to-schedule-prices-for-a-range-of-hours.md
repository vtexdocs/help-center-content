---
title: 'No se puede agendar precios para un rango de horas'
id: 4QxkT7HBW0QOSiCcKaSCs2
status: PUBLISHED
createdAt: 2017-06-27T02:12:42.022Z
updatedAt: 2022-12-22T15:18:45.269Z
publishedAt: 2022-12-22T15:18:45.269Z
firstPublishedAt: 2017-06-27T18:43:42.540Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Pricing & Promotions
slug: no-se-puede-agendar-precios-para-un-rango-de-horas-en-admin
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

No se puede agendar precios x hora mediante la interfaz del admin, en la página de administración de precios.

Se puede agendar por hora por API/Planilla pero:
1. No se exportan las horas en la planilla de precios;
2. No se ven las horas en la interfaz de administración de precios.

## Simulación

1. Ingresar al admin de Precios del SKU.
2. Hacer click en “Editar” un precio.
3. Agendar la fecha de validez del precio.
4. En la selección de fecha de inicio/fin, no permite elegir la hora de inicio/fin.

## Workaround

Este escenario ocurre en todos los casos al modificar un precio por interfaz de usuairo.

Como alternativa, se pueden agendar los precios x hora mediante API de precios o mediante planilla de precios.

Vea más detalles en [este artículo](http://help.vtex.com/es/tutorial/agendar-precios-para-un-rango-de-horas).

