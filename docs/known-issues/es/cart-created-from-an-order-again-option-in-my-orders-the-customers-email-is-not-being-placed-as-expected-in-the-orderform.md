---
title: 'Carro creado a partir de una opción "pedir de nuevo" en Mis pedidos, el correo electrónico del cliente no se está colocando como se esperaba en el orderForm'
id: 6dDhkaIhquOqaDuNkVZuln
status: PUBLISHED
createdAt: 2023-12-04T22:41:21.385Z
updatedAt: 2023-12-04T22:41:22.139Z
publishedAt: 2023-12-04T22:41:22.139Z
firstPublishedAt: 2023-12-04T22:41:22.139Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: carro-creado-a-partir-de-una-opcion-pedir-de-nuevo-en-mis-pedidos-el-correo-electronico-del-cliente-no-se-esta-colocando-como-se-esperaba-en-el-orderform
locale: es
kiStatus: Backlog
internalReference: 947563
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



En la sección **Mis Pedidos** dentro de **Mi Cuenta**, existe la opción de configurar un carrito basado en un pedido que el cliente haya realizado previamente.

En este caso, el problema es que en un **flujo de televenta**, al **personificar al cliente e intentar montar un carrito en base a un pedido anterior**, al pulsar sobre el **Mis Pedidos (Lista)** en la opción "**Pedir de nuevo**", se coloca en los datos del perfil del cliente del formulario de pedido el email del agente de televenta y no el del cliente como se esperaba.

Cabe destacar que este comportamiento sólo se produce al pulsar sobre el botón "volver a pedir" en la lista de pedidos de Mis Pedidos.


##

## Simulación



1. Inicio de sesión con un usuario de televenta
2. Hacerse pasar por un cliente
3. Ir a la sección Mis pedidos dentro de Mi cuenta
4. En la lista de pedidos, haz clic en "volver a pedir" en cualquiera de ellos.
5. Valide la información del cliente en el orderForm (clientProfileData.email)



## Workaround



Para realizar pedidos basados en uno anterior, se recomienda introducir primero los detalles del pedido y, a continuación, hacer clic en la opción "volver a pedir".





