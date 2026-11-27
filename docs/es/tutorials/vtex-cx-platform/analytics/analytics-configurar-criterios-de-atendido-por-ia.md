---
title: "Analytics: Configurar criterios de Atendido por IA"
createdAt: 2026-11-27T12:00:00.000Z
updatedAt: 2026-11-27T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: analytics-configuring-handled-by-ai-criteria
locale: es
---

En la sección **Conversaciones** del dashboard **Conversacional**, puedes seguir cuántas conversaciones se clasificaron como **Atendido por IA** o **No atendido por IA**.

Esta clasificación se realiza diariamente, según criterios que evalúan la atención brindada por los agentes de IA. Además de los criterios predeterminados, puedes configurar criterios personalizados para adaptar la evaluación a las necesidades de tu operación.

Para ver y gestionar los criterios, haz clic en el ícono de tres puntos (<i class="fas fa-ellipsis-v" aria-hidden="true"></i>). El panel lateral **Criterios de Atendido por IA** presenta dos secciones:

- **Criterios base**: se aplican a todos los proyectos. No puedes editarlos ni eliminarlos.
- **Tus criterios**: se aplican solo al proyecto específico. Puedes agregar, editar y eliminar tus criterios. El límite es de 10 criterios personalizados.

## Agregar un criterio

Para agregar un criterio personalizado, sigue los pasos a continuación:

1. En la pantalla de **Criterios de Atendido por IA**, haz clic en `Agregar criterio`.
2. Escribe tu criterio en el campo de mensaje y haz clic en `Validar`. (Por ejemplo: "Si el problema del cliente no puede resolverse de forma virtual, considera que una conversación fue atendida por la IA cuando el cliente cuenta con información suficiente sobre el procedimiento correcto a seguir y/o sabe qué hacer para resolver su problema").

    > ❗ La IA rechaza criterios vacíos, ofensivos, fuera de alcance, imposibles de evaluar a partir de una conversación o que contradicen un criterio base. El panel explica por qué se invalidó el criterio. Reescribe el criterio y valídalo de nuevo.

3. Cuando tu criterio esté validado, haz clic en `Guardar`.

Una vez guardado, ese criterio contará para la métrica de **Atendido por IA** a partir de la próxima evaluación diaria. Las conversaciones y métricas anteriores no se modificarán.
