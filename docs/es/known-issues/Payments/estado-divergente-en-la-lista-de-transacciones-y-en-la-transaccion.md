---
title: "Estado divergente en la lista de transacciones y en la transacción"
id: 1LD32IQJFbvlOJzD12KL64
status: PUBLISHED
createdAt: 2022-03-03T18:41:10.292Z
updatedAt: 2023-12-12T22:12:02.916Z
publishedAt: 2023-12-12T22:12:02.916Z
firstPublishedAt: 2022-03-03T18:41:10.764Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: estado-divergente-en-la-lista-de-transacciones-y-en-la-transaccion
locale: es
kiStatus: Fixed
internalReference: 308919
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El estado de las transacciones es diferente una vez que las abre en comparación con lo que se muestra en la lista de transacciones.


##

## Simulación


Como no ocurre en todas las transacciones, la forma de simularlo es entrar en una transacción aleatoria y comprobar si el estado dentro de ella es el mismo que aparece en la lista de transacciones.
Una vez dentro de la transacción, efectivamente, el estado es diferente



## Workaround


No hay ninguna solución.




