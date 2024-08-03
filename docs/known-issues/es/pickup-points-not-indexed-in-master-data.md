---
title: 'Puntos de recogida no indexados en los datos maestros'
id: 6OHjbM6GXBEvgepaod3AyT
status: PUBLISHED
createdAt: 2023-12-14T22:29:26.240Z
updatedAt: 2024-04-30T12:56:14.390Z
publishedAt: 2024-04-30T12:56:14.390Z
firstPublishedAt: 2023-12-14T22:29:26.972Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: puntos-de-recogida-no-indexados-en-los-datos-maestros
locale: es
kiStatus: Fixed
internalReference: 530824
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, el sistema logístico utiliza MasterData para almacenar la información de los Puntos de Recogida. Como resultado, podemos tener problemas para indexar esta entidad interna cuando se utiliza la ruta de búsqueda. Esto puede dar lugar a información obsoleta, como por ejemplo:

- Borrado realizado en Logística que no se refleja en el listado;
- Punto de Recogida activado/inactivado en Logística pero que sigue volviendo con el estado anterior;
- Cambios de coordenadas que no se reflejan;
- Y otros.


##

## Simulación


No hay forma fiable de reproducir este problema.



## Workaround


El equipo de VTEX debe comprobar los datos y, en su caso, volver a indexarlos para que se actualicen.




