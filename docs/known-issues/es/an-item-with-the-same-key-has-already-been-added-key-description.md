---
title: '"Ya se ha añadido un artículo con la misma clave. Clave: descripción"'
id: 5eGfoHuVu83bqGvSOvDF5z
status: PUBLISHED
createdAt: 2024-08-20T14:40:23.496Z
updatedAt: 2024-08-20T14:49:14.081Z
publishedAt: 2024-08-20T14:49:14.081Z
firstPublishedAt: 2024-08-20T14:40:25.093Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: ya-se-ha-anadido-un-articulo-con-la-misma-clave-clave-descripcion
locale: es
kiStatus: Backlog
internalReference: 1084015
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, la aplicación de ventas puede encontrarse con un problema a la hora de cargar correctamente las páginas de los productos en los que el campo de producto "descripción" también tiene registrada la propia palabra "descripción".


##

## Simulación


1 - para una cuenta de la aplicación de ventas, crear un producto y campos para él, en ellos, añadir la palabra "descripción" a la misma.

2 - navegar a través de las páginas de resultados de búsqueda que contienen este producto dado como resultado, se mostrará un error "error de carga de búsqueda".



## Workaround


elimine la cadena "description" y sustitúyala por algo similar, como productDescription.

