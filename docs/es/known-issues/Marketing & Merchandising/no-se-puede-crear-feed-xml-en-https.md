---
title: "No se puede crear feed XML en HTTPS"
id: 1nWCF9Rq1GM6AScc0ce2M8
status: PUBLISHED
createdAt: 2017-07-09T23:54:48.739Z
updatedAt: 2019-12-31T15:18:00.585Z
publishedAt: 2019-12-31T15:18:00.585Z
firstPublishedAt: 2017-07-11T15:30:31.425Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Catalog
slugEN: no-se-puede-crear-feed-xml-en-https
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

<div class="alert alert-success">
<b>Problema solucionado</b><br>
Ahora las URLs del XML siguen el mismo protocolo configurado para la página de producto.
</div>

---

El link de los feeds de XML generados usan HTTP en lugar de HTTPS.

Al configurar el feed en sistemas externos de partners, como Google, genera un redirect hacia un link en HTTPS y esto causa que se pierdan los parámetros de métricas.

Se necesita poder utilizar el link en HTTPS para no perder las métricas.

## Simulación

1. Ingresar al menú Catalog > Configuraciones > XML.
2. Crear un feed de XML y obtener su URL.
3. Esta URL será en HTTP y al utilizarla en algun sistema que requiera HTTPS, deberá hacerse un redirect que hará perder los parámetros que vienen en la URL.

## Workaround

Arquitectura sugerida:
1. Se sugiere utilizar la API Search para consumir el catálogo;
2. Generar el XML deseado;
3. Exponer el XML en un entorno con HTTPS que permita ser consumido externamente.

Esta arquitectura no sólo es un workaround, sino que es la estrategia sugerida para dar escalabilidad al tratamiento de feed XML en catálogos grandes, ya que se puede actualizar el feed con la frecuenciala necesaria, optimizar el tamaño del XML y que sea más liviano, así como tener mayores opciones de segmentación de productos.

