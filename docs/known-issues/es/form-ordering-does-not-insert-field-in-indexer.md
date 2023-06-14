---
title: 'Ordenación de formulario no coloca campo en el indizador'
id: 4rvX9Omm0gKqeuwiAYsIwu
status: PUBLISHED
createdAt: 2018-03-19T21:07:37.180Z
updatedAt: 2022-12-22T20:46:19.416Z
publishedAt: 2022-12-22T20:46:19.416Z
firstPublishedAt: 2018-03-19T21:28:13.258Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: ordenacion-de-formulario-no-coloca-campo-en-el-indizador
kiStatus: Backlog
internalReference: 
---

## Sumario

Este escenario se produce cuando se configura en el formulario de Master Data un campo que no está en el indizador como filtro o como patrón de ordenación. Al realizar esta acción y acceder a la lista del formulario, se muestra un error en la pantalla, y los datos no se cargan y no están disponibles para la interfaz de usuario.


## Simulación

1. Modifique el formulario.
2. Seleccione un campo que no está como "buscable" o como "filtro" en la entidad como "ordenación predeterminada" o como "filtro" en el formulario.
3. Guarde el formulario.
4. Acceda al listado.

## Workaround

Para resolver este comportamiento, sólo tiene que editar la entidad de datos y marcar el campo como "buscable" o "filtro", para su uso como "ordenación estándar" y "filtro", respectivamente.

1. Haga clic en el símbolo de engranaje en la aplicación donde está el formulario que desea editar;
2. Haga clic en "Estructura de datos";
3. Edite la entidad de datos;
4. Haga clic en el símbolo de engranaje en el campo que desea configurar;
5. Seleccione la opción "buscable" para la configuración de ordenación o "filtro" para la configuración del filtro;
6. Guarde la entidad;
7. Publique la entidad.

¡Atención! Hay tipos de campos que no permiten indización, como el tipo "texto", por ejemplo. Estos campos *nunca* se deben configurar como orden predeterminada o como filtro en el formulario.

