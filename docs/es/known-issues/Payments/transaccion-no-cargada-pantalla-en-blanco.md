---
title: "Transacción no cargada - Pantalla en blanco"
id: 6hGcfZMaAafL3etTmRWhEJ
status: PUBLISHED
createdAt: 2025-01-02T19:23:09.538Z
updatedAt: 2025-01-03T15:36:03.341Z
publishedAt: 2025-01-03T15:36:03.341Z
firstPublishedAt: 2025-01-02T19:23:10.500Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaccion-no-cargada-pantalla-en-blanco
locale: es
kiStatus: Backlog
internalReference: 1157426
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar acceder a una transacción concreta, ésta se carga indefinidamente en una pantalla en blanco.


##

## Simulación



1. Acceda directamente a la URL:
`https://.myvtex.com/admin/pci-gateway/#/transactions/`
2. Comprueba en la pestaña de red de dev tools que la única ruta que falla al cargar es `/interactions`.
3. Como validación final, intente acceder directamente a la ruta `/interactions` y reciba un error `504 Gateway Timeout`.



## Workaround


Eliminar el registro de interacciones es imposible, pero el servicio externo que llama varias veces a la pasarela puede reducir su frecuencia, evitando que se produzcan nuevos casos.





