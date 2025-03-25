---
title: 'El pedido se dividió en paquetes con envíos separados'
id: 3OCOC82543vOsc3Ex32XTY
status: PUBLISHED
createdAt: 2024-06-19T15:03:37.373Z
updatedAt: 2024-11-08T18:54:00.106Z
publishedAt: 2024-11-08T18:54:00.106Z
firstPublishedAt: 2024-06-19T15:13:11.172Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: the-order-was-split-into-packages-with-separate-deliveries
locale: es
legacySlug: el-pedido-se-dividio-en-paquetes-con-envios-separados
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Envíos separados, Split de pedidos, Paquetes, Envío, Preventa
---

En VTEX, los clientes pueden recibir su pedido dividido en varios paquetes, independientemente de si [la división del pedido](https://help.vtex.com/es/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV) se reflejó en la plataforma. El cliente puede recibir los ítems del pedido en paquetes separados en los siguientes casos:

* **Pedido con sellers diferentes:** se genera un pedido para cada seller y tendrá al menos un paquete para el envío de cada seller.
* **Selección de sellers white label:** cuando se trata de [sellers white label](https://help.vtex.com/es/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) el envío puede realizarse en paquetes diferentes.
* **Seller con diferentes SLA para el envío de los ítems:** aunque sea un único seller, si los ítems tienen SLA distintos, el pedido puede enviarse en paquetes separados.
* **Productos de preventa:** cuando el pedido incluye [productos de preventa](https://help.vtex.com/es/tutorial/cadastrar-um-produto-para-pre-venda--4o6cUJ4gIg0MQWW8WfN34K) y productos normales, el envío se realizará en paquetes separados.

Si el pedido incluye productos de preventa, todos los productos, tanto los de preventa como los normales, se muestran con la misma fecha de entrega en el checkout cuando se genera el pedido. Sin embargo, esa fecha es solo un cálculo de entrega. Tras la aprobación del pago, el pedido se divide en paquetes separados: uno que incluye los productos de preventa y otro con los productos normales.

La fecha de entrega de cada paquete se modifica en función del valor de `shippingEstimateDate` de cada producto. Este campo se puede verificar mediante el endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-).

## Solución

Para evitar que se dividan los paquetes de pedidos que incluyen productos de preventa, puedes configurar [grupos de envío](https://help.vtex.com/es/tutorial/como-funciona-a-remessa). De este modo, puedes agrupar en un solo conjunto todos los paquetes que serán entregados por la misma transportadora y provenientes del mismo [muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).

>❗ Configurar los grupos de envío aplicará este comportamiento a todos los pedidos con fechas de entrega diferentes y no solo a los que tengan productos de preventa.

### Configurar grupos de envío

Para configurar grupos de envío en tu tienda sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Envío > Configuración** o ingresa **Envío** en la barra de búsqueda en la parte superior de la página y selecciona **Configuración de la tienda / Envío**.
2. En la sección **Grupo de entrega** de la página **Configuración general**, rellena el campo _Crear grupos de envío con intervalos de {X} día(s)_ con el número de días que deseas definir para el [envío](https://help.vtex.com/es/tutorial/como-funciona-a-remessa).
3. Haz clic en **Guardar**.