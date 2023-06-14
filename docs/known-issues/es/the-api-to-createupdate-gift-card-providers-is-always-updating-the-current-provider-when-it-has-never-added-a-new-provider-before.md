---
title: 'La API para crear/actualizar proveedores de tarjetas regalo siempre está actualizando el proveedor actual cuando nunca antes ha añadido un nuevo proveedor.'
id: 4W5sYMJegRRJIGqa4yhvUQ
status: PUBLISHED
createdAt: 2023-03-10T19:05:01.536Z
updatedAt: 2023-03-10T19:05:02.545Z
publishedAt: 2023-03-10T19:05:02.545Z
firstPublishedAt: 2023-03-10T19:05:02.545Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-api-para-crearactualizar-proveedores-de-tarjetas-regalo-siempre-esta-actualizando-el-proveedor-actual-cuando-nunca-antes-ha-anadido-un-nuevo-proveedor
locale: es
kiStatus: Backlog
internalReference: 768954
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar añadir un nuevo identificador de proveedor por primera vez en una cuenta, en lugar de añadir un nuevo proveedor, se actualiza el proveedor nativo actual (VtexGiftCard).



## Simulación


Utilizar nuestra API para actualizar un proveedor cuando la cuenta nunca ha añadido un nuevo proveedor.



## Workaround


Para añadir un nuevo proveedor, primero debe guardar la información de nuestro proveedor nativo de tarjetas regalo. Una vez guardada la información, podrá añadir el nuevo proveedor correctamente.




