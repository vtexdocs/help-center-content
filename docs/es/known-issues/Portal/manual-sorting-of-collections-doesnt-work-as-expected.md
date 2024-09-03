---
title: 'La clasificación manual de las colecciones no funciona como se esperaba'
id: aGTNVDT6LKKoWuSceQWs0
status: PUBLISHED
createdAt: 2017-10-03T19:13:58.344Z
updatedAt: 2023-03-13T13:55:39.030Z
publishedAt: 2023-03-13T13:55:39.030Z
firstPublishedAt: 2017-10-03T19:58:57.335Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: la-clasificacion-manual-de-las-colecciones-no-funciona-como-se-esperaba
locale: es
kiStatus: Backlog
internalReference: 295245
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La ordenación manual de las colecciones no funciona como se esperaba. Hay dos maneras de ordenar las SKUs utilizando una colección:

1. Utilizando la colección de tipo de control ContentPlaceHolder;
2. Utilizando una búsqueda o contexto de búsqueda de una Landing Page con el control SearchResult (en este caso, se debe utilizar la cadena de consulta _O=productClusterOrder_{ProductClusterId}%20asc_).

En ambos casos, el sistema permite ordenar hasta **30** SKUs de la colección. Cuando la colección tiene más de 30 SKUs, todas las SKUs sobrantes se listarán ANTES de las posicionadas entre 1 y 30.

<div class="alert-info">
  <p>Este comportamiento se observa en todos los almacenes VTEX, incluidos los desarrollados con VTEX IO. Además, el orden de clasificación proporcionado por las colecciones no es utilizado por VTEX Intelligent Search.</p></div> <div>


## Simulación

1. Cree una colección;
2. Insertar manualmente más de 30 SKUs;
3. Guardar la colección;
4. Cree una plantilla con ContentPlaceHolder o SearchResult;
5. Configurar la asociación del ContentPlaceHolder con la colección o establecer la búsqueda en el contexto de búsqueda de la carpeta;
6. Espere unos minutos a que la caché expire;
7. Acceda a la página y observe que los primeros elementos ordenados serán los colocados después de 30.

## Workaround

Como solución, tenemos las siguientes opciones:

- Utilizar colecciones con sólo 30 elementos, si es imprescindible aplicar una ordenación manual;
- Utilizar el campo Fecha de publicación, registrar las fechas en la secuencia deseada y utilizar el campo para ordenar la colección.

