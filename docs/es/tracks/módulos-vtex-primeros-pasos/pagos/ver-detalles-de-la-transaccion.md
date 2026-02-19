---
title: 'Ver detalles de la transacción'
id: 3Nt40DMEWkvhlpaL5PlBy
status: PUBLISHED
createdAt: 2019-11-26T17:51:49.079Z
updatedAt: 2023-03-30T15:01:36.099Z
publishedAt: 2023-03-30T15:01:36.099Z
firstPublishedAt: 2019-11-26T20:29:18.064Z
contentType: trackArticle
productTeam: Financial
slugEN: viewing-transaction-details
locale: es
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: pagos
order: 7
---

Toda transacción que tiene lugar en una tienda VTEX queda registrada en el módulo de **Pedidos**, y usted puede consultar los detalles de todas esas transacciones.

Para esto, basta:

1. En el Admin VTEX, accede a **Pedidos** > **Transacciones**, o escribe **Transacciones** en la barra de búsqueda en la parte superior de la página.

2. Usted verá la lista de transacciones, donde es posible realizar una búsqueda. Para filtrar, haga clic en el ícono de embudo. Usted puede filtrar por:

- Canal
- Fecha de inicio de la transacción 
- Fecha de autorización
- Fecha de finalización
- Fecha de cancelación
- Medio de pago
- Número de cuotas
- Status de la transacción (ejemplos: `cancelada`, `autorizando`, `aprobada` o `finalizada`)

Al encontrar la transacción deseada, basta hacer clic en esta.

En la pantalla de transacción, usted encuentra dos recuadros que contienen la información principal sobre el pago del pedido. Esta información se actualiza a medida que la transacción avanza en su flujo.

En la parte derecha de la pantalla, hay un recuadro que contiene:
- El valor total del pedido
- Datos del cliente
- El ID del pedido
- El número de identificación de antifraude (si existe en la operación)

En la barra superior, hay un enlace que conduce a la página de detalles del pedido, en el módulo Gestión de Pedidos.

En la parte izquierda de la pantalla, se concentra la información relacionada con el medio de pago utilizado en el pedido.

Para las transacciones con tarjeta de crédito, cada pago (el pedido puede haberse cerrado con dos tarjetas) tiene un ID generado por VTEX. Además, el adquirente también crea un número de identificador, llamado __Transaction ID (TID)__. El TID es específico para cada tarjeta, por lo que si un pedido se paga con dos tarjetas, habrá dos transacciones y, por lo tanto, dos TID.

A continuación, se encuentra una de las áreas más útiles de esta pantalla: la línea de tiempo de __Eventos de la Transacción__.

Aquí se registran todas las comunicaciones entre VTEX y los afiliados registrados –antifraude, gateways y adquirentes–, incluyendo mensajes de éxito y error, con sus respectivos códigos.

En esta área puede ver cada cambio de status de la transacción, con el momento exacto en que ocurrió, y verificar posibles problemas.

Al leer la descripción de un evento de cancelación, por ejemplo, puede descubrir quién fue el autor de esa cancelación. O puede descubrir, por ejemplo, que fue el conector el que denegó la autorización del pago.

Lea el artículo __Visualizar detalles de la transacción en Pedidos__ para consultar [ejemplos de eventos registrados en esta línea de tiempo](/es/docs/tutorials/como-visualizar-detalle-del-pedido#exemplos).

