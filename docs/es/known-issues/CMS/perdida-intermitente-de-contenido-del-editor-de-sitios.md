---
title: 'Pérdida intermitente de contenido del Editor de Sitios'
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2024-10-03T15:25:39.202Z
publishedAt: 2024-10-03T15:25:39.202Z
firstPublishedAt: 2022-07-05T17:07:25.091Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: intermitent-site-editor-content-loss
locale: es
kiStatus: Scheduled
internalReference: 610533
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cada cambio de contenido en el Editor de Sitios inserta cambios en el archivo content.json, almacenado en un bucket en AWS S3 y en el content_render.js. Algunos clientes han informado de la pérdida de contenido del Editor de Sitios después de algunos procedimientos estándar, como la promoción del espacio de trabajo.

El contenido del espacio de trabajo no se lleva al entorno maestro después del proceso de promoción. Dado que la política de promoción predeterminada para gestionar conflictos es `masterWins`, el contenido del espacio de trabajo no se lleva a producción en los casos de conflicto.



## Simulación


La situación es intermitente. Sin embargo, se ha reportado en dos escenarios diferentes:

**1. Al promover un espacio de trabajo de producción a maestro:**
Este es el paso a paso donde normalmente se produce este problema:

1.1 Creación de un espacio de trabajo de producción;

1.2 Actualización del contenido del espacio de trabajo. Se crea una nueva referencia a este contenido, que apunta a un archivo en S3 separado del maestro;

1.3 Actualizar el maestro; esto creará un conflicto. La referencia creada anteriormente empieza a apuntar al maestro, por lo que se produce el problema. Sólo vuelve a la normalidad tras la resolución del conflicto;

1.4 Realice el proceso de promoción en el área de trabajo. Seguirá apuntando al contenido maestro pero invalidará el contenido del espacio de trabajo.



Recuerde que en este caso, el archivo `content.json` y el archivo `content_render.js` pueden tener información diferente, por lo que el contenido sólo se "perderá" después de actualizar algo en el editor del sitio. Esto significa que el contenido no se perderá necesariamente justo después de promover el espacio de trabajo.

**2. Al instalar una nueva versión en un espacio de trabajo de prueba:**
Los clientes informaron de que al instalar una nueva versión del tema en un espacio de trabajo de prueba, se eliminaba el contenido de las páginas de categorías.

Actualización: este problema se ha resuelto gracias a una corrección realizada en la aplicación `pages-graphql`.



## Workaround


N/A






