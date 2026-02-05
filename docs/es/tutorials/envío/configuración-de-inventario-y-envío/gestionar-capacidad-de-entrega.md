---
title: 'Gestionar capacidad de entrega'
id: 2y217FQZCjD0I1n62yxVcz
status: PUBLISHED
createdAt: 2021-04-19T14:43:24.606Z
updatedAt: 2024-03-25T20:04:31.192Z
publishedAt: 2024-03-25T20:04:31.192Z
firstPublishedAt: 2021-05-24T17:00:14.134Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-delivery-capacity
legacySlug: gestionar-capacidad-de-entrega
locale: es
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

Puede hacer un seguimiento de la disponibilidad de las ventanas de entrega y de la cantidad de ítems/pedidos que aún pueden atenderse en cada ventana de entrega a través de la página **Capacidad de entrega**.

Para gestionar su **Capacidad de entrega**, debe tener [políticas de envío](/es/docs/tutorials/politica-de-envio) previamente registradas y la [Capacidad de entrega](/es/docs/tutorials/entrega-programada) previamente configurada. 

> ⚠️ Para que la [Entrega programada](/es/docs/tutorials/entrega-programada) y la [Capacidad de entrega](/es/docs/tutorials/gestionar-capacidad-de-entrega) funcionen correctamente, debes tener en cuenta que:<ul><li>La suma de {[account name](/es/docs/tutorials/que-es-account-name)} + {ID de la política de envío} no puede exceder los 60 caracteres.</li><li>No se debe utilizar espacio en el ID de la [política de envío](/es/docs/tutorials/crear-una-politica-de-envio).</li></ul>

En el Admin VTEX, accede a **Envío > Capacidad de entrega**, o escribe **Capacidad de entrega** en la barra de búsqueda en la parte superior de la página. La **Capacidad de entrega** contiene una lista de las ventanas de entrega de su tienda. La lista mostrada se refiere a la política de envío seleccionada en el filtro `Política de envío` y al periodo seleccionado en el filtro `Fecha`.

Una vez que haya seleccionado la política de envío y la fecha que se mostrarán en la lista, tendrá acceso a las ventanas de entrega registradas. Cada línea de la lista representa una ventana de entrega y muestra los siguientes datos:

*   **Fecha de entrega:** las fechas disponibles para entrega. 
*   **Horario de entrega:** los horarios disponibles para entrega. 
*   **Capacidad:** la capacidad de entrega. 
*   **Reservado:** ítems/pedidos ya reservados (compra confirmada, pago no confirmado). 
*   **Disponible:** cuántos ítems/pedidos están disponibles para programarse (cantidad de capacidad menos reservado) 
*   **Status:** puede ser visible o no visible, dependiendo de si la ventana de entrega todavía está disponible. Si todavía está disponible, la ventana tendrá el status visible para sus clientes. 

> ℹ️ Puede hacer clic en **EDITAR POLÍTICA DE ENVÍO** para ser redirigido a la pantalla de edición de la política de envío seleccionada en el filtro Política de envío.
