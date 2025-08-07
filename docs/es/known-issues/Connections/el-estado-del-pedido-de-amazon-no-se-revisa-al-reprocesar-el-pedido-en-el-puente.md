---
title: "El estado del pedido de Amazon no se revisa al reprocesar el pedido en el puente"
id: 6t7R49BcUjC9LU8UWLvwdh
status: PUBLISHED
createdAt: 2024-10-18T12:18:00.080Z
updatedAt: 2024-10-18T12:18:01.014Z
publishedAt: 2024-10-18T12:18:01.014Z
firstPublishedAt: 2024-10-18T12:18:01.014Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: el-estado-del-pedido-de-amazon-no-se-revisa-al-reprocesar-el-pedido-en-el-puente
locale: es
kiStatus: Backlog
internalReference: 1119618
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los pedidos de Amazon que han tenido algún tipo de error van a la zona puente con el mensaje de error y el estado del pedido en el momento en que se procesó por primera vez.
Sin embargo, incluso si el estado se actualiza en Amazon (como ser cancelado) el estado del puente sigue siendo el mismo.
Con eso, si un pedido se vuelve a procesar en el puente, su estado no se revisa en el mercado y podría causar errores de integración de pedidos con el estado incorrecto.



## Simulación



1. Recibe una orden con error en el puente;
2. Comprueba si su estado es cancelado en Amazon;
3. 3. Reprocesar el pedido en bridge y comprobar que se ha integrado correctamente.



## Workaround


N/A





