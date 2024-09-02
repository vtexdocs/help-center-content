---
title: 'Creación de redirecciones erróneas que contienen caracteres/consultas que no deberían cargarse la carga/descarga del csv a través de la CLI no funciona'
id: 6ShJSvo6g8ZJFaejSo0gx3
status: PUBLISHED
createdAt: 2024-01-25T19:00:17.586Z
updatedAt: 2024-01-25T19:00:18.204Z
publishedAt: 2024-01-25T19:00:18.204Z
firstPublishedAt: 2024-01-25T19:00:18.204Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: creacion-de-redirecciones-erroneas-que-contienen-caracteresconsultas-que-no-deberian-cargarse-la-cargadescarga-del-csv-a-traves-de-la-cli-no-funciona
locale: es
kiStatus: No Fix
internalReference: 971936
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Después de crear redirecciones erróneas que contienen caracteres que no deben ser subidos: ie.: #, consultas, o redirecciones que deberían ser creadas a nivel de servidor, la carga/descarga masiva del csv a través del CLI ya no funciona.


##

## Simulación


Crear una redirección para una consulta por ejemplo: /?binding=XXXXX
Borra la redirección por el IDE de graphql (no podrás borrarla de otra forma)
Intenta descargar o subir el CSV de las redirecciones a través del CLI y querrás poder hacerlo.

 ![](https://vtexhelp.zendesk.com/attachments/token/etn94WlrSAYOFFj0rZfVwoowE/?name=image.png)


##

## Workaround


Actualmente no hay solución para esto y la descarga masiva CLI será inutilizable.





