---
title: 'Transacción con antifraude no se actualiza a "liquidando" cuando falta el registro "riskApproved'
id: 50IrRBlZJJxgEbE0RccCA9
status: PUBLISHED
createdAt: 2025-02-24T14:42:45.902Z
updatedAt: 2025-02-24T14:42:46.474Z
publishedAt: 2025-02-24T14:42:46.474Z
firstPublishedAt: 2025-02-24T14:42:46.474Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaccion-con-antifraude-no-se-actualiza-a-liquidando-cuando-falta-el-registro-riskapproved
locale: es
kiStatus: Backlog
internalReference: 1184723
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A veces, cuando el proveedor antifraude aprueba la transacción, podemos ver que la pasarela recibe el mensaje de aprobado por antifraude, pero no actualiza la transacción al estado "riskApproved". Cuando esto ocurre, la transacción se queda atascada en Autorizada o Aprobada incluso después de que el proveedor de pagos realice la liquidación.


##

## Simulación


No hay forma asertiva de reproducir este error, ya que es intermitente.



## Workaround


Abra un ticket a Soporte de Producto - Pagos, para proceder manualmente con el flujo de la transacción.




