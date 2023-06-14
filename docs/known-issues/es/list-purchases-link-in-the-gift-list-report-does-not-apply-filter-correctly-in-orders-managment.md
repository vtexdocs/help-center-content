---
title: '"Lista de compras" en el informe de lista de regalos no aplica el filtro correctamente en el Gestión de Pedidos'
id: 5p7nqrzUqIK88cYkkOqMMG
status: PUBLISHED
createdAt: 2017-04-03T19:36:10.117Z
updatedAt: 2022-12-22T14:44:09.191Z
publishedAt: 2022-12-22T14:44:09.191Z
firstPublishedAt: 2017-04-03T19:48:46.372Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_31
tag: Catalog,Order Management
slug: lista-de-compras-en-el-informe-de-lista-de-regalos-no-aplica-el-filtro-correctamente-en-el-gestion-de-pedidos
kiStatus: Backlog
internalReference: 
---

## Sumario

En el módulo __Catalog__, en el informe de listas, al hacer clic en el enlace "Listar Compras", el sistema redirige al Gestión de Pedidos sin aplicar el filtro correctamente, listando todos los pedidos y no sólo los pedidos de la lista elegida.

## Simulación

1. En el admin, acceda al módulo __Catalog__;
2. En el menú, desplácese por Informes > Listas > Todas las listas;
3. Seleccione una lista con la columna "Qtd Comprada" llenada con un valor mayor que 0 (cero);
4. En la lista, junto al botón "Visitar", pase el ratón sobre la seta y haga clic en la opción "Listar Compras".

El sistema le redireccionará al Gestión de Pedidos sin aplicar el filtro correctamente.

## Workaround

1. Acceda al módulo __Gestión de Pedidos__;
2. En el módulo Gestión de Pedidos, en la lista de pedidos, haga clic en el filtro;
3. En el grupo "Otros", haga clic en la opción "Campo buscado";
4. Seleccione la opción "ID de lista de regalo";
5. Vuelva al campo principal de búsqueda e incluya el identificador de la lista que desea buscar.

