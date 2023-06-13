---
title: Kit creado por integración no recibe una lista de precios
id: 1IhCGsM5a48Ai6IESYCeGQ
status: PUBLISHED
createdAt: 2017-03-29T23:46:50.768Z
updatedAt: 2022-12-22T20:56:06.125Z
publishedAt: 2022-12-22T20:56:06.125Z
firstPublishedAt: 2017-03-29T23:48:14.222Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Catalog
slug: kit-creado-por-integracion-no-recibe-una-lista
kiStatus: Backlog
internalReference: 
---

## Sumario

El kit creado por integración no está creando una tabla de valores, incluso después de agregar un componente a precio. 

Este comportamiento es en parte debido al hecho de que la feature no acepta un valor default en la creación del kit. Porque una de las características de un kit es que el comerciante pueda practicar un precio diferente al del componente.

## Simulación

Crear un kit a través de Web Service (sólo posible a través de Web Service)

**Paso 1**:
[Descargar el manual de integración](https://help.vtex.com/es/tutorial/manual-de-clases-y-metodos-utilizados-en-webservice)

**Paso 2**:
Ejecutar ruta de creación de kit: `StockKeepingUnitKitInsertUpdate`

## Workaround

Para evitar este problema, el camino es muy simple. Mirando el kit, siga el camino descrito a continuación:

Seta Azul > SKU > Seta Gris (editar) > Kit > Cambiar > Guardar

El componente necesita tener un precio ya registrado. Estamos aquí sólo guardando de nuevo el formulario para forzar la indexación. Para comprobar, basta ver la tabla de valores asociada al SKU Kit.

Para resolver este problema por API, basta con agregar una ruta de creación de tabla de valores para SKU (después de haber creado el kit): https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT#06450a0e-a7b4-360c-7058-3095cd03ef08

