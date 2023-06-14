---
title: 'No es posible liquidar una transacción con el método del boleto utilizando BrasPag'
id: 6bMohwJUByz5EX16Gn7CiR
status: PUBLISHED
createdAt: 2022-04-07T16:01:35.802Z
updatedAt: 2022-11-25T22:05:39.973Z
publishedAt: 2022-11-25T22:05:39.973Z
firstPublishedAt: 2022-04-07T16:01:36.581Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: no-es-posible-liquidar-una-transaccion-con-el-metodo-del-boleto-utilizando-braspag
kiStatus: Backlog
internalReference: 558065
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la transacción con Boleto Bancário utilizando el conector BrasPag está atascada en aprobado, pago en autorizado y se llama a la API Liquidar la transacción, se produce un error en la captura debido a que el estado está como liquidando, lo que no permite que la transacción sea efectivamente capturada.


    Mensaje: El estado del pago no está listo para liquidar. Estado actual liquidando.




## Simulación


Para simularlo es necesario que la transacción esté atascada en el aprobado, lo que no es posible forzar.



## Workaround


Solicitar al equipo de ingeniería que cambie el estado de la transacción a liquidación

