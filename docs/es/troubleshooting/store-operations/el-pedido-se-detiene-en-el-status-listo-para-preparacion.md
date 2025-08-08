---
title: 'El pedido se detiene en el status "Listo para preparación"'
id: 1Esx82dbr5RHYPOHgEjRGg
status: PUBLISHED
createdAt: 2025-02-03T17:59:30.111Z
updatedAt: 2025-02-03T18:59:58.956Z
publishedAt: 2025-02-03T18:59:58.956Z
firstPublishedAt: 2025-02-03T18:59:58.956Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-order-doesnt-progress-after-the-status-ready-for-handling
legacySlug: el-pedido-se-detiene-en-el-status-listo-para-preparacion
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Preparación
  - Pedidos
  - Status del pedido
  - Integración
  - ERP
  - OMS
---

El status `Listo para preparación` se produce en el [flujo del pedido](https://help.vtex.com/es/tutorial/flujo-y-status-de-pedidos--tutorials_196#flujo-de-seller) justo después de que se cierre la ventana de cancelación. En este punto, VTEX debe recibir información del [sistema ERP](https://developers.vtex.com/docs/guides/erp-integration-guide) sobre la integración del pedido y la actualización del stock de ítems, lo que permitiría que el flujo pueda proseguir hasta alcanzar el siguiente status `Preparando envío`.

Enquanto a VTEX não recebe esta confirmação, o pedido permanece no status `Pronto para manuseio`.

## Solución

La primera acción necesaria es ponerse en contacto con el responsable de tu [integración ERP](https://developers.vtex.com/docs/guides/erp-integration-guide) y comprobar si la liberación del pedido ya fue realizada a través del endpoint [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling). Tras esta confirmación, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Pedidos > Todos los pedidos__ o ingresa __Todos los pedidos__ en la barra de búsqueda en la parte superior de la página.
2. Accede al pedido deseado.
3. En la [página de detalhes do pedido](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido--2Y75n54Cc9VizrlG1N6ZNl), comprueba que el status del pedido se haya actualizado a `Preparando envío`.

> ⚠️ Si el pedido todavía continúa en el status `Listo para preparación`, solicita más información abriendo un ticket con el [Soporte VTEX](https://help.vtex.com/es/support).

### Actualización manual del status del pedido (opcional)

Puedes [actualizar manualmente](https://help.vtex.com/es/tutorial/enviar-pedido-al-status-a-preparar-la-entrega--tutorials_198#por-el-admin-vtex) el status del pedido a `Preparando envío` vía Admin VTEX, si lo deseas. Sin embargo, para realizar este tipo de acción, es necesario tener un [rol con permiso OMS - Full access](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#roles). 

> ❗ Al actualizar manualmente el status y confirmar el inicio de la preparación, el seller asume la responsabilidad por la [reserva de los ítens](https://help.vtex.com/es/tutorial/como-se-maneja-la-reserva--tutorials_92), garantizando que haya suficiente stock y que se registre la baja de los ítems vendidos. Los pedidos actualizados de forma manual no pueden integrarse posteriormente en el sistema del ERP.

> ⚠️ Si el pedido todavía continúa en el status `Listo para preparación` después del intento de actualización manual, solicita más información abriendo un ticket con el [Soporte VTEX](https://help.vtex.com/en/support).

Además del escenario de error relacionado con el sistema ERP, pueden darse situaciones en las que se muestren dos status diferentes para el mismo pedido, uno en la lista de la página __Todos los pedidos__ y otro en la respectiva [página de detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido--2Y75n54Cc9VizrlG1N6ZNl). Para más información sobre este escenario, accede al problema conocido [El status en la lista de pedidos es diferente al status del pedido actual](https://help.vtex.com/es/known-issues/el-estado-en-la-lista-de-pedidos-es-diferente-del-estado-actual-del-pedido--2UBFdtXWtCIygv0SiObCTN).
