---
title: 'Pérdida intermitente de contenido del Editor de Sitios'
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2024-03-21T20:37:27.369Z
publishedAt: 2024-03-21T20:37:27.369Z
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


Cada cambio de contenido en el Editor de Sitios inserta cambios en el archivo content.json, que se almacena en un bucket en AWS S3. Algunos clientes han informado de la pérdida de contenido del Editor de Sitios tras algunos procedimientos habituales de actualización de temas.


##

## Simulación


El escenario es intermitente, sin embargo, se ha reportado en dos escenarios diferentes:

**1. Al promover un espacio de trabajo de producción a maestro:**
Los clientes informaron de que al promover un espacio de trabajo de producción, que contenía cambios en los componentes, al entorno maestro, se producía una pérdida de contenido en otros espacios de trabajo.

**2. Al instalar una nueva versión en un espacio de trabajo de prueba:**
Los clientes informaron de que, al instalar una nueva versión del tema en un espacio de trabajo de prueba, se eliminaba el contenido de las páginas de categorías.



## Workaround


N/A





