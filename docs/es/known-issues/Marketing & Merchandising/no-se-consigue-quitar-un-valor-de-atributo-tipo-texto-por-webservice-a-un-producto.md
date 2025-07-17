---
title: "No se consigue quitar un valor de atributo tipo texto por WebService a un producto"
id: 3jyqCliMA8026y2GgwQoyG
status: PUBLISHED
createdAt: 2018-01-02T21:22:34.885Z
updatedAt: 2022-12-22T20:46:03.803Z
publishedAt: 2022-12-22T20:46:03.803Z
firstPublishedAt: 2018-01-03T14:15:26.277Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Web Service
slugEN: no-se-consigue-quitar-un-valor-de-atributo-tipo-texto-por-webservice-a-un-producto
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando a un producto específico se le intenta quitar por WebService el valor de uno de sus atributos de tipo texto, la respuesta indica que es obligatorio que tenga un valor, pero por interfáz de usuario se permite hacer el cambio. Cuando se desea automatizar la integración para quitar atributos ya asociados, no es posible por esta causa.

## Simulación

1. Generar una llamada al WS ProductEspecificationInsert, indicando el idProduct y su fieldName correctos.
2. Dentro de fieldValues, dejar vacío el string, simulando quitar el valor del atributo.
3. Correr la llamada al webservice y luego se evidencia el error que indica que el valor del atributo no puede ser vacío.

## Workaround

Se consigue quitar el alor del atributo deseado desde la interfáz de usuario del administrador de Producto. Se deberá ingresar al producto, identificar el atributo y borrar el valor cagrado. Luego salvar los cambios y el valor quitado se actualizará.

