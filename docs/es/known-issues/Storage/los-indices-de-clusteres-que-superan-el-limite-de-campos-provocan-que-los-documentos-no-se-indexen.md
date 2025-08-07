---
title: "Los índices de clústeres que superan el límite de campos provocan que los documentos no se indexen."
id: 6NPe2vm2ay5BMqvAr1P4zd
status: PUBLISHED
createdAt: 2024-08-08T14:12:00.560Z
updatedAt: 2024-08-08T14:12:01.273Z
publishedAt: 2024-08-08T14:12:01.273Z
firstPublishedAt: 2024-08-08T14:12:01.273Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: los-indices-de-clusteres-que-superan-el-limite-de-campos-provocan-que-los-documentos-no-se-indexen
locale: es
kiStatus: Backlog
internalReference: 1078027
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un índice, que puede contener varias cuentas, supera el límite de campos, los nuevos documentos no se indexan, lo que provoca problemas de búsqueda y recuperación.


##

## Simulación



1. Intento de búsqueda o recuperación de documentos recién añadidos.
2. Observe que los nuevos documentos no están indexados y no aparecen en los resultados de búsqueda.



## Workaround


El equipo de VTEX debe comprobar el cluster y verificar el límite de campos del índice, para que los datos vuelvan a estar disponibles.





