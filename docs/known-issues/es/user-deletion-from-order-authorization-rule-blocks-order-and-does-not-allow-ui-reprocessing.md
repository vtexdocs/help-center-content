---
title: 'La eliminación del usuario de la regla de autorización de pedidos bloquea el pedido y no permite el reprocesamiento de la interfaz de usuario'
id: 3OW5OoBG6OYW8mHDcZMoOi
status: PUBLISHED
createdAt: 2022-10-27T17:40:30.149Z
updatedAt: 2022-11-25T22:00:52.887Z
publishedAt: 2022-11-25T22:00:52.887Z
firstPublishedAt: 2022-10-27T17:40:30.838Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: la-eliminacion-del-usuario-de-la-regla-de-autorizacion-de-pedidos-bloquea-el-pedido-y-no-permite-el-reprocesamiento-de-la-interfaz-de-usuario
kiStatus: Backlog
internalReference: 623376
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando eliminamos o perdemos el acceso al usuario vinculado a una regla de aprobación de pedidos, este pedido no puede ser reprocesado para que un nuevo usuario pueda aprobar el pedido y con ello el pedido queda pendiente de aprobación.



## Simulación



- Crear un enlace de regla de aprobación a un correo electrónico
- Crear un pedido que se ajuste a la regla creada en el paso anterior
- Eliminar este correo de la base de usuarios de la tienda.
- Añada un nuevo usuario a la regla donde está el usuario eliminado.

En este punto el pedido no tendrá su regla actualizada.



## Workaround



No hay ninguna solución para este caso;

