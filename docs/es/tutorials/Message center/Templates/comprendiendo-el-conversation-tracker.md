---
title: 'Cómo se realiza la comunicación con el cliente durante el flujo del pedido'
id: tutorials_195
status: PUBLISHED
createdAt: 2017-04-27T22:14:41.243Z
updatedAt: 2025-03-27T13:13:28.935Z
publishedAt: 2025-03-27T13:13:28.935Z
firstPublishedAt: 2017-04-27T23:02:48.283Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-conversation-tracker
locale: es
legacySlug: comprendiendo-el-conversation-tracker
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

Se utiliza el Conversation Tracker para unificar toda la comunicación realizada con un cliente durante el flujo de un pedido, esta comunicación también incluye los mensajes enviados por cualquier otro sistema integrado.

Esto es, en toda interacción - como __pago aprobado__, __preparando entrega__, __facturación__, __despacho__ y __entrega__ - se comunicará al cliente por email. Estos emails serán registrados en la línea de tiempo del pedido, dentro del módulo **Pedidos**.

Conversation Tracker puede tener dos configuraciones:   

- **Compleja** - crea un alias (correo electrónico alternativo) de forma ilegible, evitando así la identificación del correo electrónico por sistemas externos, también vincula cualquier correo electrónico enviado a esta dirección a la línea de tiempo del pedido. Normalmente, la tienda con esta configuración presenta el alias de la siguiente forma: `ff2e6348a53a4d449af92be2a1011328@ct.vtex.com.br`
- **Simple** - crea un alias (correo electrónico alternativo) menos complejo para el correo electrónico del usuario comprador, esto hace que el correo electrónico continúe legible en la UI del OMS y cuando se visualice en el JSON del pedido. Otro punto importante es que la dirección del remitente (tienda) también está enmascarada de la misma manera que el correo electrónico del usuario en el JSON. Esto es necesario para que el sistema pueda vincular los correos electrónicos de esta compra a la línea de tiempo del pedido. Por lo general, la tienda con esta configuración mostrará el alias de la siguiente forma:`juanvaldez@vtex.com.br-207700027841b.ct.vtex.com.br`

<div class="alert alert-info">
Todas las tiendas vienen con la configuración <strong>Compleja</strong> por default.
</div>

Conversation Tracker ofrece diversas otras ventajas, principalmente en cuestión de seguridad:

- El email enviado para cualquier otro sistema es encriptado, evitando el acceso directo a las direcciones de los correos electrónicos de los clientes.
- Cualquier comunicación a través de los correos electrónicos encriptados se registra en el detalle del pedido correspondiente.
- Esta dirección de correo electrónico es valida hasta el fin del [flujo de pedido](/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196), cuando se factura o cancela el pedido. Por esto no debe utilizarse para disparo de newsletter/email marketing. Esta validad es una medida adicional de seguridad, ya que, si la información es robada, solo será válida durante este periodo.

Para acceder a los correos electrónicos de sus clientes para acciones de marketing, utilice el módulo **Master Data**. 

Puede seleccionar la configuración deseada, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Configuración**, o escribe *Pedidos* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Pedidos*.
2. En la pestaña **General**, haga clic en **Tipo de máscara de la conversación**.
3. Seleccione entre:
    - Compleja
    - Simple
4. Haga clic en `Guardar`.
