---
title: 'El pedido se detiene en el status "Preparando envío"'
id: 2yia6QhoLh204lHzEaIrnK
status: PUBLISHED
createdAt: 2025-02-07T14:22:07.199Z
updatedAt: 2025-02-07T17:20:26.154Z
publishedAt: 2025-02-07T17:20:26.154Z
firstPublishedAt: 2025-02-07T17:20:26.154Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-order-doesnt-progress-after-the-status-handling-shipping
locale: es
legacySlug: el-pedido-se-detiene-en-el-status-preparando-envio
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Envío, Pedidos, Status del pedido, Integración, ERP, OMS, Preparando envío
---

El status `Preparando envío` se produce en el [flujo de pedidos](/es/tutorial/order-flow-on-the-oms--tutorials_196#flujo-de-seller) justo después de que el seller confirma el inicio de la preparación de los ítems. En este punto, VTEX debe recibir los detalles de la factura del pedido, permitiendo que el flujo se actualice al status `Facturado` o `Cancelado`.

<div class = "alert alert-info">
  No se puede <a href="https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186">cancelar pedidos</a> que ya han sido <a href="https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">facturados parcialmente</a>. Si el cliente desea sustituir o remover ítems del pedido, es posible <a href="https://help.vtex.com/es/tutorial/cambiar-items-de-un-pedido-finalizado--tutorials_190">modificar el pedido</a>.
</div>

La permanencia de un pedido en el status `Preparando envío` por un periodo superior al previsto puede deberse a la falta de registro de las facturas en VTEX.

## Solución

### Comprobar las facturas en integraciones ERP

La primera acción necesaria es ponerse en contacto con el responsable de tu [integración ERP](https://developers.vtex.com/docs/guides/erp-integration-guide) y comprobar si la factura única o todas las [facturas parciales](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) ya se registraron a través del endpoint [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice). 

Después de esta confirmación, sigue los pasos a continuación para verificar si cambió el status:

1. En el Admin VTEX, accede a __Pedidos > Todos los pedidos__ o ingresa __Todos los pedidos__ en la barra de búsqueda en la parte superior de la página.
2. Accede al pedido deseado.
3. En la [página de detalles del pedido](/es/tutorial/pagina-de-detalles-del-pedido--2Y75n54Cc9VizrlG1N6ZNl), comprueba que el status se haya actualizado a `Facturado`.

<div class = "alert alert-warning">
  Si el pedido aún permanece con el status <code>Preparando envío</code>, comprueba que no haya ninguna inconsistencia en la comunicación con el marketplace. Para saber más, consulta <a href="https://help.vtex.com/es/faq/el-pedido-fue-facturado-en-el-erp-pero-continua-en-el-statu-preparando-entrega--4szpXviNMAkwOe2cCiMiMe">El pedido fue facturado en el ERP pero continúa con el status "Preparando Envío". ¿Qué hacer?</a>.
</div>

### Registro manual de facturas (opcional)

Puedes registrar facturas en el Admin VTEX por medio de la [facturación manual del pedido](/es/tutorial/como-facturar-manualmente-un-pedido--7p1h852V5t54KyscpgxE2v). Esta acción permite que el status del pedido se actualice de `Preparando envío` a `Facturado`.

Para garantir que o pedido seja faturado corretamente, é necessário observar os seguintes requisitos:

- El valor total de una factura debe ser igual a la suma de los valores de los ítems del pedido y sus respectivos valores de envío. Si se ingresa una factura con un valor menor que el total, será necesario ingresar una [factura parcial](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) con el valor restante.
- Cada factura emitida, sea total o parcial, debe tener un número único.
- Cuando sea necesario emitir más de una factura para un pedido, la suma del valor total de las facturas registradas debe ser igual al valor total del pedido.
- El valor total del pedido se actualizará en caso de que se [modifiquen o remuevan ítems](/es/tutorial/cambiar-items-de-un-pedido-finalizado--tutorials_190).

<div class = "alert alert-warning">
  Si el pedido todavía continúa con el status <code>Faturado</code> después del registro manual de las facturas, solicita más información abriendo un ticket con el <a href="https://help.vtex.com/es/support">Soporte VTEX</a>.
</div>