---
title: 'Configuración de la recuperación de pagos con Pix'
createdAt: 2026-11-11T12:00:00.000Z
updatedAt: 2026-11-11T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-pix-payment-recovery
locale: es
seeAlso:
    - /es/docs/tutorials/introduccion-a-cx
---

La recuperación de pagos con Pix ayuda a las tiendas en Brasil a recuperar pedidos que están esperando un pago con Pix. Mientras el código Pix siga siendo válido, la automatización envía al comprador un recordatorio por WhatsApp con un botón para copiar el código y completar el pago. El mensaje también puede incluir un segundo botón. Cuando el comprador hace clic en él, se genera un nuevo carrito con los mismos artículos, y el comprador es dirigido directamente a la página de checkout, donde puede completar la compra con el medio de pago que prefiera, como tarjeta de crédito o boleto.

> ❗ Cada recordatorio es un mensaje de marketing de WhatsApp, y la tarifa de Meta se cobra a la tienda.

## Antes de empezar

Vincula un número de WhatsApp a la aplicación VTEX CX en el Admin VTEX. Para obtener más información, consulta [Introducción a VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/introduccion-a-cx#tienda-whatsapp).

## Configurar el recordatorio

Para acceder a la configuración de recuperación de pagos sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront** en la barra de búsqueda en la parte superior de la página.
2. En **VTEX CX Platform**, haz clic en **Automations**.
3. Haz clic en **PIX Payment Recovery**.

En la configuración de la automatización, puedes editar la plantilla de WhatsApp y establecer las reglas del recordatorio:

- Edita el texto de la plantilla de WhatsApp. La plantilla incluye un botón para copiar el código Pix, y puede incluir un segundo botón que lleva al comprador al checkout con un nuevo carrito que contiene los mismos artículos, donde puede finalizar la compra con el medio de pago que prefiera.
- Define cuánto tiempo espera la automatización antes de enviar el recordatorio. La espera predeterminada es de 5 minutos, y la espera mínima es de 1 minuto.
- Define un valor mínimo de pedido. Los pedidos por debajo de ese valor no recibirán un recordatorio.
- (Opcional) En **Sales channels**, ingresa los ID de las políticas comerciales que pueden activar el recordatorio, separados por comas, como `1,2,3`. De forma predeterminada, solo se incluye la política comercial `1`.
- Define el porcentaje de compradores que recibirán el recordatorio.

## Reglas del recordatorio

La automatización envía el recordatorio cuando el código Pix sigue siendo válido y el pedido cumple con el tiempo de espera, el valor mínimo del pedido, las políticas comerciales y el porcentaje de compradores que estableciste.

La automatización también aplica estos límites:

- Envía un recordatorio por pedido.
- Cuando un pedido se divide, solo el pedido principal puede recibir un recordatorio.
- No envía un recordatorio cuando el pedido no tiene número de teléfono o no tiene código Pix de copiar y pegar.

## Resultados de la recuperación de pagos

En el Dashboard, la pantalla **Payment recovery** muestra los resultados de estos recordatorios para el período seleccionado. Los pagos realizados desde ambos botones cuentan para los resultados.

| Métrica | Descripción |
| --- | --- |
| **Total sends** | Número de recordatorios enviados en el período seleccionado. |
| **Recovered revenue** | Valor total de los pagos recibidos después de un recordatorio. |
| **Conversion rate** | Porcentaje de recordatorios que resultaron en un pago. La pantalla también muestra el número de ventas convertidas. |
| **Average order value** | Valor promedio (AOV) de los pagos convertidos. |

Debajo del resumen, **Copy Pix code** y **Open payment link** muestran los pagos convertidos, la tasa de conversión y los ingresos recuperados atribuidos a cada botón.
