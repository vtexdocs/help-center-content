---
title: 'Pedido finalizado con precio incorrecto'
id: 5an0m7uLMwxWRlJlsyKxvl
status: PUBLISHED
createdAt: 2025-05-07T13:03:46.201Z
updatedAt: 2025-08-14T22:08:07.983Z
publishedAt: 2025-08-14T22:08:07.983Z
firstPublishedAt: 2025-05-07T13:25:11.579Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: my-order-was-closed-with-the-wrong-price
legacySlug: pedido-finalizado-con-precio-incorrecto
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags:
  - Pedidos
  - Integración
  - Marketplace
---

El status de los pedidos finalizados por marketplaces certificados se muestra en la sección **Marketplace > Conexiones > Pedidos** del Admin VTEX. Los pedidos finalizados con precio incorrecto tienen el status **Procesado con error**. 

> ℹ️ Para evitar que el pedido se finalice con el precio incorrecto, puedes crear [Reglas de divergencia de precios](/es/docs/tutorials/regla-de-divergencia-de-precios).

Hay tres posibles causas por las que se finaliza un pedido con precio incorrecto:
- [Precio del producto asumido por el marketplace](#precio-del-producto-asumido-por-el-marketplace)
- [Envío calculado en el marketplace](#envio-calculado-en-el-marketplace)
- [Precio del SKU modificado antes de la integración del pedido](#precio-del-SKU-modificado-antes-de-la-integracion-del-pedido)

> ℹ️ Consulta otros errores de integración de pedidos de marketplace en [¿Por qué los pedidos del marketplace no se integran con mi tienda?](/es/tutorial/porque-os-pedidos-do-marketplace-nao-integram-com-minha-loja--275YvF8dyry5KmfY9epoET).

## Precio del producto asumido por el marketplace

Esto ocurre cuando hay algún problema al enviar el precio de VTEX al marketplace por dos posibles motivos:
- Error en la integración, que se notificará en el dashboard de integraciones.
- El marketplace tiene problemas para calcular el precio nuevo, aun cuando haya recibido la actualización de VTEX con éxito.

### Solución 	

Debes reprocesar el pedido ignorando la divergencia siguiendo las instrucciones a continuación:

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Pedidos**, o ingresa **Pedidos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón `Acciones`.
3. Selecciona `Ignorar divergencia y reprocesar`.
4. Accede a la pestaña **Pedidos** y haz clic en `Todos los pedidos`.
5. Accede a la página del pedido reprocesado.
6. En la parte superior, haz clic en `Aprobar`.

> ⚠️ Esta integración no cambia el valor del pedido y solo se procesará con la divergencia de precios.

## Envío calculado en el marketplace

En la configuración de logística para las ventas del marketplace, las tiendas VTEX pueden optar por usar el cálculo de envío del partner, lo que significa que VTEX no calcula el envío. Sin embargo, este escenario puede causar una diferencia en el precio.

Además, incluso si tu tienda ha optado por usar el cálculo de envío de VTEX, es posible que un pedido se finalice con el valor de envío definido por el marketplace. Esto puede suceder cuando el marketplace no solicita el cálculo a VTEX o cuando se produce un error en el proceso. En estos casos, el marketplace puede utilizar valores de contingencia para no perder la venta. Si los valores de contingencia son diferentes de los valores calculados por VTEX, el pedido puede ser finalizado con el precio incorrecto.

### Solución

Debes reprocesar el pedido siguiendo las instrucciones a continuación:

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Pedidos**, o ingresa **Pedidos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón `Acciones`.
3. Selecciona `Reprocesar`.

## Precio del SKU modificado antes de la integración del pedido

Esto puede ocurrir cuando después de finalizar el pedido, la tienda modifica el precio de un SKU que forma parte del mismo. La integración del pedido finalizado tarda algunos minutos. Al completarse la integración, el precio del SKU cambia y el cálculo de VTEX será diferente del cálculo del marketplace.

### Solución

Debes reprocesar el pedido siguiendo las instrucciones a continuación:

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Pedidos**, o ingresa **Pedidos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Acciones`.
3. Selecciona `Reprocesar`.

