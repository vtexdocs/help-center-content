---
title: El proceso de pago no deja claras las divergencias entre el cliente identificado y el registrado
id: 3TorBnBvCbqLB5AUG8oWp0
status: PUBLISHED
createdAt: 2023-05-03T21:54:48.509Z
updatedAt: 2023-05-08T18:32:02.939Z
publishedAt: 2023-05-08T18:32:02.939Z
firstPublishedAt: 2023-05-03T21:54:49.041Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-proceso-de-pago-no-deja-claras-las-divergencias-entre-el-cliente-identificado-y-el-registrado
kiStatus: Backlog
internalReference: 442267
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Durante el proceso de compra, es necesario iniciar sesión para ver/cambiar la información personal y, en algunos casos, incluso finalizar la compra. El proceso de inicio de sesión está desconectado del orderForm, por lo que puede iniciar sesión como cualquier correo electrónico y ser identificado con algún otro correo electrónico en el flujo de compra.

El problema es que las divergencias entre ambos correos electrónicos no se presentarán claramente en la caja y no le permitirán realizar la acción esperada (ver/editar información o finalizar la compra); en este contexto, se le verá como desconectado.


##

## Simulación



- Crea cualquier carrito e identifícate como cliente recurrente (que tendrá su información rellenada y enmascarada automáticamente);
- Intente editar alguna información, lo que requerirá que inicie sesión;
- Realice el proceso de inicio de sesión con un correo electrónico diferente al anterior (especialmente utilizando Google/Facebook como proveedores de identidad);
- Se iniciará la sesión con éxito en el contexto VTEX ID, pero se cerrará la sesión en el contexto de pago.



## Workaround


N/A




