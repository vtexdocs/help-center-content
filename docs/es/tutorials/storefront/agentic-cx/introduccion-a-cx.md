---
title: 'Introducción a VTEX CX Platform'
id: 50MhPxb5jmKTOyW1UcWER3
status: PUBLISHED
createdAt: 2025-10-03T16:56:02.600Z
updatedAt: 2025-05-13T14:20:03.474Z
publishedAt: 2025-10-03T14:20:03.474Z
firstPublishedAt: 2025-10-03T14:20:03.474Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: introduction-to-cx
legacySlug: introduccion-a-weni-agentic-ai
locale: es
subcategoryId: 7BtmQ6zk6O7VJ7QumXJEiM
---

CX es una herramienta nativa de VTEX de soporte al cliente que utiliza agentes. Estos agentes utilizan inteligencia artificial (IA) para conversar con tus clientes, mostrar el catálogo de tu tienda y crear un carrito, entre otras acciones.

## Configurar CX

Para configurar esta herramienta en tu tienda sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront**, o ingresa **Storefront** en la barra de búsqueda en la parte superior de la página.
2. En **VTEX CX Platform**, haz clic en **Dashboard**.
3. En la pantalla de inicio, selecciona entre [Escala soporte y eficiencia](#escala-soporte-y-eficiencia) y [WhatsApp Store](#whatsapp-store).

> ℹ️ Esta elección inicial es solo para el onboarding. Puedes activar la otra opción después, en el menú Configuración de CX.

### Escala soporte y eficiencia

La herramienta **Escala soporte y eficiencia** usa agentes para ofrecer soporte a tus clientes, como:

- **Concierge de catálogo:** recomienda productos basados en el perfil de cada cliente.
- **Agente de cancelaciones:** cancela la compra del cliente.
- **Agente de status de pedidos:** muestra al cliente el status del pedido realizado.
- **Agente de FAQ inteligente:** responde preguntas del cliente a partir de la base de datos de la tienda, como stock, precio, entre otros.

Para activar esta herramienta sigue los pasos a continuación:

1. Haz clic en la tarjeta **Escala soporte y eficiencia**.
2. Selecciona la URL de la tienda que será tu fuente de datos.
3. Haz clic en `Confirmar`.
4. La etapa de activación de la herramienta es automática. Si lo deseas, puedes omitir haciendo clic en `Omitir`.
5. Al finalizar la configuración puedes omitir la etapa o probar los agentes.

Al hacer clic en `Probar`, puedes probar los agentes de la configuración inicial. Cuando haces clic en uno de los agentes, inicia una conversación en pantalla y puedes probarlo en tiempo real. También puedes definir las instrucciones que sigue el agente haciendo clic en `Refinar instrucciones`.

Cuando tengas todo listo para terminar la configuración, elige el tipo de activación en **¿Listo para activar?**.

- Activación segura: activa los agentes solo para el 10% de los clientes.

> ℹ️ Recomendamos empezar con la activación segura para que pruebes la herramienta con pocos clientes. Después, puedes realizar la activación completa en la configuración.

- Activación completa: activa los agentes para todas las interacciones con tus clientes.

### Tienda WhatsApp

Con Tienda WhatsApp ofreces a tus clientes pagos con Pix (Brasil) integrados, recuperación de carritos abandonados, ofertas de productos personalizadas, entre otras opciones. Esta conexión se realiza a través de tu cuenta en Meta for Business. En el Meta for Business de tu tienda podrás crear un número de teléfono nuevo, utilizar un número de teléfono existente en tu cuenta o incluso asociar un número preverificado a tu cuenta.

> ℹ️ Los números preverificados son números de teléfono que ya fueron aprobados por Meta y están listos para usarse con la API de WhatsApp Business. Un número preverificado no necesita recibir SMS ni llamada para activarse. Cuando seleccionas un número preverificado, este pasa a pertenecer a tu cuenta de WhatsApp Business.

Para activar esta herramienta sigue los pasos a continuación:

1. Haz clic en la tarjeta WhatsApp Store.
2. Activa la cuenta con una de las siguientes opciones:
    - Activar con un número instantáneo.
    - Conectar tu número oficial.
3. Haz clic en `Continuar`. Se te redirigirá a la página de inicio de sesión de Meta for Business.
4. Selecciona el **Portafolio Business**.
5. En **Cuenta de WhatsApp Business** podrás:
    - Crear una cuenta de WhatsApp Business.
    - Utilizar una cuenta de WhatsApp Business existente.
6. Haz clic en `Agregar un número nuevo`.
    - Para agregar un número preverificado, selecciona `Número proporcionado por el BSP`. El número se mostrará en la lista con el status `Verificado`.
7. En **Nombre para mostrar**, escribe el nombre que aparecerá para tus clientes.
8. Selecciona el modo de verificación del número.
    - Con el número preverificado puedes omitir este paso.
9. Lee los permisos concedidos a VTEX CX Platform y haz clic en `Confirmar`.
10. Al final, haz clic en `Concluir`. Se te redirigirá nuevamente a VTEX CX Platform en el Admin VTEX.

## Dashboard

El dashboard muestra información sobre VTEX CX Platform y se divide en dos páginas:

- [Desempeño del equipo de agentes](#desempeno-del-equipo-de-agentes)
- [Recuperación de carrito abandonado](#recuperacion-de-carrito-abandonado)

### Desempeño del equipo de agentes

La pantalla de desempeño del equipo de agentes proporciona una vista general de los chats de soporte, con detalles como la tasa de resolución y el nivel de satisfacción del cliente.

- Conversaciones: número de conversaciones gestionadas por agentes en un mismo día (hasta las 11:59 p. m.).
- Tasa de resolución: porcentaje de conversaciones resueltas únicamente por agentes. Si una interacción resuelta requirió soporte humano, no se incluye en esta tasa.
- Satisfacción del cliente: porcentaje de clientes satisfechos después de interactuar con agentes en el chat de soporte.

### Recuperación de carrito abandonado

La pantalla de recuperación de carrito abandonado proporciona una vista general de las interacciones de WhatsApp.

- **Enviados**: número de mensajes enviados a clientes.
- **Entregados**: número de mensajes entregados a los clientes.
- **Leídos**: número de mensajes leídos por los clientes.

> ℹ️ El número de mensajes leídos depende de la configuración de WhatsApp del cliente. Si las confirmaciones de lectura de mensajes están desactivadas, esta métrica se verá afectada.

- **Clics**: número de clics en el link de recuperación de carrito abandonado.

## Auditoría

La tabla de Auditoría proporciona información individual de cada chat de soporte.

| Dato | Descripción |
| --- | --- |
| Nombre | Nombre del cliente atendido. |
| Clasificación | Status del chat de soporte. <br> `Asistido por IA`: agentes de IA resolvieron la interacción sin intervención humana. <br> `No asistido`: los agentes no pudieron resolver la interacción y la derivaron a soporte humano. <br> `En progreso`: la interacción está siendo analizada. |
| CSAT | Calificación del chat de soporte, de 1 a 5. |
| Fecha | Fecha del chat de soporte. |
| Hora | Hora del chat de soporte. |

Para más información sobre los chats de soporte, haz clic en `Ver detalles`. Se te redirigirá a la página de **Auditoría** de VTEX CX Platform.
