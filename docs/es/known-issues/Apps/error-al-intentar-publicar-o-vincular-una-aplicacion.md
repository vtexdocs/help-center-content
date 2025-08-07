---
title: "Error al intentar publicar o vincular una aplicación"
id: 2WPukfSHWzzIUjIzMJaAEK
status: PUBLISHED
createdAt: 2024-06-27T15:39:00.583Z
updatedAt: 2024-06-27T19:46:21.021Z
publishedAt: 2024-06-27T19:46:21.021Z
firstPublishedAt: 2024-06-27T15:39:01.543Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: error-al-intentar-publicar-o-vincular-una-aplicacion
locale: es
kiStatus: Backlog
internalReference: 1056882
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Nuestro equipo investigó que esto está normalmente asociado con el desarrollo de una aplicación de gran tamaño. Esto ocurre porque el builder hub explota su memoria debido a la gran cantidad de archivos en la app. Los retrasos en la vinculación de la aplicación también pueden estar asociados con este problema.


##

## Simulación


Pruebe a utilizar `vtex link` en una aplicación con un gran tamaño o muchos archivos. Puedes recibir los siguientes errores:

    11:51:13.298 - error: Workerpool Worker terminated Unexpectedly exitCode: `null` signalCode: `SIGABRT` workerpool.script: `/usr/local/data/service/src/node/utils/workers/worker.js` spawnArgs: `/usr/local/bin/node,/usr/local/data/service/src/node/utils/workers/worker.js` spawnfile: `/usr/local/bin/node` stdout: `null` stderr: `null` vtex.builder-hub@0.299.0 11:51:13.299 - error: App build failed with message: Workerpool Worker terminated Unexpectedly exitCode: `null` signalCode: `SIGABRT` workerpool.script: `/usr/local/data/service/src/node/utils/workers/worker.js` spawnArgs: `/usr/local/bin/node,/usr/local/data/service/src/node/utils/workers/worker.js` spawnfile: `/usr/local/bin/node` stdout: `null` stderr: `null`

    13:30:05.456 - error: La aplicación ha finalizado con el código de salida 15. Se reiniciará en 10s. service-node@6.38.3




## Workaround


Analiza el tamaño de la app y sus archivos, si es necesario intenta dividir la app en apps más pequeñas para que el tamaño se reduzca.




