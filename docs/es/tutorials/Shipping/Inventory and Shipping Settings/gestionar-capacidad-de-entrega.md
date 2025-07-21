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
locale: es
legacySlug: gestionar-capacidad-de-entrega
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

Puede hacer un seguimiento de la disponibilidad de las ventanas de entrega y de la cantidad de ítems/pedidos que aún pueden atenderse en cada ventana de entrega a través de la página **Capacidad de entrega**.

Para gestionar su **Capacidad de entrega**, debe tener [políticas de envío](/es/tutorial/politica-de-envio--tutorials_140) previamente registradas y la [Capacidad de entrega](/es/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi) previamente configurada. 

<div class="alert alert-warning">
Para que la <a href="https://help.vtex.com/es/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi">Entrega programada</a> y la <a href="https://help.vtex.com/es/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz">Capacidad de entrega</a> funcionen correctamente, debes tener en cuenta que:<p><ul><li>La suma de {<a href="https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC">account name</a>} + {ID de la política de envío} no puede exceder los 60 caracteres.</li><li>No se debe utilizar espacio en el ID de la <a href="https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT">política de envío</a>.</li></ul></p>
</div>

En el Admin VTEX, accede a **Envío > Capacidad de entrega**, o escribe **Capacidad de entrega** en la barra de búsqueda en la parte superior de la página. La **Capacidad de entrega** contiene una lista de las ventanas de entrega de su tienda. La lista mostrada se refiere a la política de envío seleccionada en el filtro `Política de envío` y al periodo seleccionado en el filtro `Fecha`.

Una vez que haya seleccionado la política de envío y la fecha que se mostrarán en la lista, tendrá acceso a las ventanas de entrega registradas. Cada línea de la lista representa una ventana de entrega y muestra los siguientes datos:

*   **Fecha de entrega:** las fechas disponibles para entrega. 
*   **Horario de entrega:** los horarios disponibles para entrega. 
*   **Capacidad:** la capacidad de entrega. 
*   **Reservado:** ítems/pedidos ya reservados (compra confirmada, pago no confirmado). 
*   **Disponible:** cuántos ítems/pedidos están disponibles para programarse (cantidad de capacidad menos reservado) 
*   **Status:** puede ser visible o no visible, dependiendo de si la ventana de entrega todavía está disponible. Si todavía está disponible, la ventana tendrá el status visible para sus clientes. 

<div class = "alert alert-info">
Puede hacer clic en <b>EDITAR POLÍTICA DE ENVÍO</b> para ser redirigido a la pantalla de edición de la política de envío seleccionada en el filtro Política de envío.
</div>
