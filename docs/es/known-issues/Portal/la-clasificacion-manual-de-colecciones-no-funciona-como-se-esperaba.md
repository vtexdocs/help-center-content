---
title: "La clasificación manual de colecciones no funciona como se esperaba"
id: aGTNVDT6LKKoWuSceQWs0
status: PUBLISHED
createdAt: 2017-10-03T19:13:58.344Z
updatedAt: 2025-07-30T19:41:03.111Z
publishedAt: 2025-07-30T19:41:03.111Z
firstPublishedAt: 2017-10-03T19:58:57.335Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: la-clasificacion-manual-de-colecciones-no-funciona-como-se-esperaba
locale: es
kiStatus: Fixed
internalReference: 295245
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



La ordenación manual de colecciones no funciona como se esperaba. Hay dos maneras de ordenar SKUs usando una colección:


1. Utilizando la colección de tipo de control ContentPlaceHolder;
2. Utilizando un contexto de búsqueda o búsqueda de una Landing Page con el control SearchResult (en este caso, se debe utilizar la cadena de consulta _O=productClusterOrder_{ProductClusterId}%20asc_).

En ambos casos, el sistema permite ordenar hasta **30** SKUs de la colección. Cuando la colección tenga más de 30 SKUs, todos los SKUs sobrantes se listarán ANTES de los posicionados entre 1 y 30.


> Este comportamiento se observa en todos los almacenes VTEX, incluidos los desarrollados utilizando VTEX IO.



##

## Simulación




1. Crear una colección;
2. Inserte manualmente más de 30 SKU;
3. 3. Guarde la colección;
4. Cree una plantilla con ContentPlaceHolder o SearchResult;
5. Establezca la asociación del ContentPlaceHolder con la colección o establezca la búsqueda en el contexto de búsqueda de carpetas;
6. Espere unos minutos a que expire la caché;
7. Acceda a la página y observe que los primeros elementos ordenados serán los colocados después del 30.



## Workaround



Como solución, tenemos las siguientes opciones:


- Utilizar colecciones con sólo 30 elementos, si es imprescindible aplicar una ordenación manual;
- Utilice el campo Fecha de publicación, registre las fechas en la secuencia deseada y utilice el campo para ordenar la colección.





