---
title: ' Pérdida de contenidos, creados a través del Editor de Sitios, desde la migración del CMS'
id: 3a5MlAoD2Z7Gu6HDS8wihD
status: PUBLISHED
createdAt: 2022-07-05T17:07:24.733Z
updatedAt: 2022-11-29T20:52:02.907Z
publishedAt: 2022-11-29T20:52:02.907Z
firstPublishedAt: 2022-07-05T17:07:25.091Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: perdida-de-contenidos-creados-a-traves-del-editor-de-sitios-desde-la-migracion-del-cms
locale: es
kiStatus: Backlog
internalReference: 610533
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cada cambio de contenido en el Editor de Sitios inserta cambios en el archivo content.json, que se almacena en un bucket en AWS S3. Algunos clientes han informado de la pérdida de contenido del Editor de Sitios después de algunos procedimientos comunes de actualización de temas.



## Simulación



El escenario es intermitente, sin embargo, se ha reportado en dos escenarios diferentes:

**1. Al promover un espacio de trabajo de producción a maestro:**
Los clientes informaron de que al promover un espacio de trabajo de producción, que contenía cambios en los componentes, al entorno maestro, se producía una pérdida de contenido en otros espacios de trabajo.

**2. Al instalar una nueva versión en un espacio de trabajo de prueba:**
Los clientes informaron de que al instalar una nueva versión del tema en un espacio de trabajo de prueba, se eliminaba el contenido de las páginas de categorías.


## Workaround



Abra un ticket para una tarea interna para recuperar el contenido.

