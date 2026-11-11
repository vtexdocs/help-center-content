---
title: "Analytics: Configurar alertas operativas"
createdAt: 2026-11-10T17:36:00.000Z
updatedAt: 2026-11-11T21:20:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-operational-alerts
locale: es
---

Las **alertas operativas** te ayudan a identificar chats de soporte que superan los tiempos definidos para tu operación. Los moderadores del proyecto pueden configurar alertas de tiempo de espera, tiempo de primera respuesta y tiempo de atención en la pestaña **En tiempo real** del dashboard **Live Desk**.

Esta guía explica cada alerta y cómo configurar su tiempo límite, su umbral de notificación y los destinatarios de correo electrónico.

## Tipos de alerta

Cada alerta es opcional y funciona de forma independiente. Las tarjetas de tiempo correspondientes en la pestaña **En tiempo real** muestran el promedio actual y el valor máximo registrado para los chats de soporte activos. Cuando un chat supera un límite configurado, el dashboard lo destaca en la tabla de monitoreo detallado.

| Alerta | Sigla | Descripción |
| --- | --- | --- |
| **Tiempo promedio de espera** | TPE | Tiempo que un contacto pasa en la cola antes de que comience un chat de soporte. |
| **Tiempo promedio de primera respuesta** | TPPR | Tiempo entre el inicio de un chat de soporte y el primer mensaje del representante. |
| **Tiempo promedio de soporte** | TMS | Duración total de un chat de soporte, desde el inicio hasta el final. |

> ℹ️ La alerta de tiempo de primera respuesta permanece activa hasta que el representante envíe el primer mensaje.

Cuando la cantidad de chats con una alerta activa alcanza el umbral configurado para esa alerta, Analytics muestra una notificación. Si seleccionas destinatarios de correo electrónico, ellos también reciben la notificación por correo.

Para más información sobre la pestaña **En tiempo real** y sus métricas, consulta el artículo [Analytics: Métricas de atención](https://help.vtex.com/es/docs/tutorials/analytics-metricas-de-atencion).

## Configurando las alertas

Los destinatarios de correo electrónico y el umbral de notificación se configuran por separado para cada alerta.

1. Accede a la organización y al proyecto que deseas configurar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. Abre **Analytics**.
3. En el dashboard **Live Desk**, abre la pestaña **En tiempo real**.
4. Junto a `Exportar datos`, haz clic en el botón de más opciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
5. Haz clic en `Alertas operativas`.
6. Activa una o más de las siguientes alertas:
   - **Tiempo de espera:** Muestra una alerta en el dashboard Live Desk cuando el tiempo de espera de un chat supera el límite definido.
   - **Tiempo de primera respuesta:** Muestra una alerta en el dashboard Live Desk cuando el tiempo de primera respuesta de un chat supera el límite definido.
   - **Tiempo de atención:** Muestra una alerta en el dashboard Live Desk cuando el tiempo de atención de un chat supera el límite definido.
7. Para cada alerta que actives:
   1. Ingresa el límite en **Tiempo máximo de espera**, **Tiempo máximo hasta la 1.ª respuesta** o **Tiempo máximo de atención**.
   2. En **Unidad**, selecciona **Segundos**, **Minutos** u **Horas**. La unidad predeterminada es **Minutos**.
   3. En **Notificación por correo electrónico (opcional)**, usa **Enviar correo a** para seleccionar a los moderadores y gerentes que deben recibir la alerta por correo.
   4. En **Cuando**, ingresa la cantidad de chats que deben tener una alerta activa antes de que se envíe la notificación. El valor predeterminado es `5`.
8. Haz clic en `Guardar`.


El botón `Guardar` permanece deshabilitado hasta que ingreses un tiempo límite para cada alerta que hayas activado. Si no seleccionas destinatarios de correo electrónico, los chats que superen los límites seguirán destacados en la pestaña **En tiempo real**, y Analytics seguirá mostrando su notificación cuando se alcance el umbral configurado.
