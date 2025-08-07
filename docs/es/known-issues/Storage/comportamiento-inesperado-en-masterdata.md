---
title: "Comportamiento inesperado en MasterData"
id: 4E9jB5vkUMucnAuwUMOGQL
status: PUBLISHED
createdAt: 2023-09-18T21:27:15.291Z
updatedAt: 2023-10-10T21:16:04.759Z
publishedAt: 2023-10-10T21:16:04.759Z
firstPublishedAt: 2023-09-18T21:27:15.908Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: comportamiento-inesperado-en-masterdata
locale: es
kiStatus: Backlog
internalReference: 669048
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Incluso con datos disponibles (documentos), la información no se devuelve como se esperaba.
Este comportamiento puede afectar a algunas de las siguientes funcionalidades:

- Las imágenes en el Editor del Sitio (CMS) no están disponibles, debido mensaje de error "_Algo salió mal. Por favor, inténtelo de nuevo._";
- No es posible acceder a las entidades y sus documentos, debido mensaje de error "_Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo. Si el problema persiste, póngase en contacto con el servicio de asistencia._";
- No se respeta el `_sort` en la API Buscar documentos;
- No se devuelve información al utilizar Search documents API (una respuesta vacía, como `[]`), aunque contengan documentos.


##

## Simulación


Como se trata de un comportamiento ocasional (evento relacionado con el clúster), no se puede simular.



## Workaround


El equipo de VTEX debe comprobar el clúster y, eventualmente, volver a indexar los datos o cambiar el clúster, para que los datos vuelvan a estar disponibles.




