---
title: 'Headless CMS ignora la configuración de validación de matrices'
id: 1szfagZFJHmevSWDTyd45e
status: PUBLISHED
createdAt: 2024-06-07T14:22:41.366Z
updatedAt: 2024-06-07T14:22:41.992Z
publishedAt: 2024-06-07T14:22:41.992Z
firstPublishedAt: 2024-06-07T14:22:41.992Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: headless-cms-ignora-la-configuracion-de-validacion-de-matrices
locale: es
kiStatus: Backlog
internalReference: 1046372
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se intentan configurar reglas de validación de arrays en Headless CMS, como elementos de arrays mínimos y máximos, los errores de validación no se muestran al usuario y es posible guardar el esquema sin pasar la validación.

El escenario esperado sería bloquear la pantalla y mostrar un mensaje como:

    "keyword": "minItems", "message": "NO debe tener menos de 3 elementos",



##

## Simulación


Prueba a añadir una sección que tenga una regla de validación. Si no respetas la validación el hCMS te dejará publicar el contenido normalmente.



## Workaround


N/A





