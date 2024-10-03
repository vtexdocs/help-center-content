---
title: 'Error al exportar una entidad con demasiados documentos'
id: 1uLEk6e9z3011GaoJ4DNU0
status: PUBLISHED
createdAt: 2023-07-07T15:59:46.214Z
updatedAt: 2023-07-07T15:59:46.899Z
publishedAt: 2023-07-07T15:59:46.899Z
firstPublishedAt: 2023-07-07T15:59:46.899Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-exporting-entity-with-too-many-documents
locale: es
kiStatus: Backlog
internalReference: 857894
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La exportación de un gran número de documentos de una entidad provoca un procesamiento excesivo, causando errores en la cola de proceso e impidiendo la exportación de la lista de documentos.


##

## Simulación



1. Accede a la plataforma CRM de Datos Maestros y navega hasta el formulario de la entidad deseada.
2. Localice el botón "Exportar XLS" dentro de la interfaz y haga clic sobre él.
3. Localice el botón "Exportar XLS" y haga clic sobre él.
4. Inicie el proceso de exportación confirmando la selección e iniciando la exportación.
5. Para supervisar el progreso de la exportación, navegue hasta la pestaña Aplicaciones dentro de la plataforma.
6. Busque el botón "Exportaciones" y haga clic en él para ver la lista en curso.
7. 7. Observe el estado de la exportación y compruebe si se ha producido algún error o problema durante el proceso de exportación.




## Workaround


Una solución para este problema es utilizar la API de desplazamiento.

