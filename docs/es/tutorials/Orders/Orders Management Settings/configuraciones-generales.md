---
title: 'Configuraciones Generales de los Pedidos'
id: tutorials_194
status: PUBLISHED
createdAt: 2017-04-27T22:14:49.644Z
updatedAt: 2024-07-02T19:07:22.178Z
publishedAt: 2024-07-02T19:07:22.178Z
firstPublishedAt: 2017-04-27T23:00:47.468Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: general-configurations-on-the-oms
locale: es
legacySlug: configuraciones-generales
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

Es posible realizar configuraciones directamente relacionadas con las condiciones del carrito y de los flujos de los pedidos.

En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Configuración**, o escribe *Pedidos* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Pedidos*.  

![configuracoes_pedidos_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Orders/Orders%20Management%20Settings/configuraciones-generales_1.png)

## Carrito

Las siguientes configuraciones están disponibles:

### Pago

Esta configuración es un flag que activa o inactiva la exigencia de una autenticación del usuario para pagos autorizados automáticamente (definido en el propio medio de pago).

### Pedidos

- **Cantidad mínima de ítems en el carrito:** _Estándar: 1 ítem._ Esto impedirá que el cliente cierre la compra sin tener al menos el valor en cantidad de ítems igual al definido en este campo.
- **Cifras decimales que se considerarán:** _Estándar: 2 cifras._ Esto hará con que los precios de los Productos sean ilustrados de acuerdo con la cantidad de cifras decimales definidas. No se hará redondeo de valor. 
- **Valor mínimo total del carrito:** _Estándar: R$ 0,10._ Así como la cantidad mínima de ítems en el carrito, esto impedirá que el cliente cierre la compra sin tener al menos el valor en productos igual al definido en este campo. El valor mínimo del carrito también incluye tasas y costos de envío. Es el valor final del pedido que está siendo calculado.

## Pedidos

Estas son las opciones en Pedidos: 

### Flujo de pedido

- **Periodo de gracia para cancelación:** _Estándar: 30 minutos._ El status de Carencia para Cancelación es lo que  permite que el propio cliente o el administrador de la tienda realice la cancelación  sin necesidad de que se confirme la cancelación por parte de la tienda. Se recomienda este tiempo mínimo, ya que evita los procesos manuales de anulación de pagos.
- **Tiempo mínimo para reservación:** _Estándar: 0 días._ Este es el período mínimo para que un artículo sea reservado después del pago. Por ejemplo, si se fija en un día, la reserva de productos se mantiene durante un día más después de cerrar la compra. Rellenar este campo ayuda en escenarios con altas tasas de cancelación de pedidos, donde la tienda no quiere comprometer su stock disponible inmediatamente después de cada pedido.
- **Nombre del flujo:** _Estándar: default._ Se llevarán a cabo configuraciones en este campo cuando el cliente ya tenga un WMS desde su ERP para actuar de forma distinta en la captura de los pedidos.

### Sustitución de pedido

- **Permitir que los clientes hagan cambios al pedido:** esta configuración es un flag que activa o inactiva la posibilidad de que los clientes cambien sus pedidos por sí mismos, sin necesidad de ponerse en contacto con el soporte o solicitar manualmente la cancelación del pedido actual.

### Modo de previsualización

- **Dividir la vista por Hostname en el Admin:** separa los pedidos por nombre de host en la lista de pedidos. Si la opción está marcada, solo se mostrarán las solicitudes que se refieran al host en su cuenta respectiva. Si la opción no está marcada, todos los pedidos registrados en los dominios de la tienda se mostrarán en todas las cuentas.
- **Dividir la vista por Hostname en MyAccount:** separa los pedidos por nombre de host en la cuenta del comprador - [MyAccount](https://help.vtex.com/es/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh).

### Tipo de máscara de la conversación

Esta configuración permite definir la configuración del Conversation Tracker. Permite alterar la visualización de los correos electrónicos de sus clientes entre los modos **Compleja** o **Simple**. Los modos alteran la forma en que se presenta el correo electrónico en el flujo de pedidos añadiendo una máscara.
- **Compleja:** crea un alias (correo electrónico alternativo) de forma ilegible, evitando así la identificación del correo electrónico por sistemas externos.
- **Simple:** crea un alias de menor complejidad para el correo electrónico del usuario comprador, haciendo que el correo electrónico siga siendo legible en la UI del OMS y cuando se vea en el JSON del pedido. Si quiere saber más, acceda a nuestro artículo sobre [cómo se realiza la comunicación con el cliente durante el flujo del pedido](https://help.vtex.com/es/tutorial/conversation-tracker--tutorials_195?locale=pt).
