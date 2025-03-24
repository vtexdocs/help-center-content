---
title: 'Configurar el tiempo de espera para cancelar el pedido'
id: jYFdnPDtNm4WCEkYWqqC
status: PUBLISHED
createdAt: 2019-01-24T20:45:41.819Z
updatedAt: 2023-03-29T20:04:52.622Z
publishedAt: 2023-03-29T20:04:52.622Z
firstPublishedAt: 2019-01-24T22:01:02.686Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: setting-the-grace-period-for-order-cancellation
locale: es
legacySlug: configurar-el-tiempo-de-espera-para-cancelar-el-pedido
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

El tiempo de carencia para cancelación de pedido es la ventana de tiempo en que el pedido puede ser cancelado automáticamente por el cliente. Se inicia en la aprobación del pago y termina después del tiempo determinado por la tienda.

Es decir, si el cliente solicita la cancelación antes o durante el período de carencia para cancelación, el pedido se cancela sin que la tienda necesite aprobar la cancelación.

Si el cliente solicita la cancelación después de que la carencia haya terminado, la tienda recibe la solicitud, pero la cancelación sólo se realiza si la tienda la aprueba en Gestión de pedidos.

>ℹ️ De forma predeterminada, el tiempo de carencia para cancelación de pedido es de 30 minutos, pero se puede configurar para satisfacer la demanda de su negocio.

Por ejemplo, si su tienda vende alimentos o productos farmacéuticos, que necesitan ser entregados en poco tiempo, puede ser mejor tener una carencia de cancelación menor de 30 minutos.

Para configurar esta ventana de tiempo, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pedidos > Configuración**, o escribe *Pedidos* en la barra de búsqueda en la parte superior de la página, y haga clic en *Configuración de la tienda / Pedidos*. 
2. En la pestaña **General**, en la sectión **Pedidos**, defina el tiempo de carencia en minutos en el campo `Periodo de gracia para cancelación`.
3. Haz clic en `Guardar`.

### Artículos relacionados

- [Configurar el tiempo de espera para cancelar el pedido](https://help.vtex.com/es/tutorial/como-funciona-la-cancelacion-de-pedido-solicitada-por-el-cliente--3wEI6DUNtecooG2Ki4Akqo)
- [¿Por qué un pedido fue cancelado?](https://help.vtex.com/es/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493)
