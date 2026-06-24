---
title: "Asignar y probar agentes"
id: 41beBpRcBouxMywt6dUW2z
status: PUBLISHED
createdAt: 2025-07-09T18:14:18.864Z
updatedAt: 2026-06-18T00:00:00.000Z
publishedAt: 2025-09-11T13:21:03.550Z
firstPublishedAt: 2025-07-29T16:38:35.307Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: assigning-and-testing-agents-in-agent-builder
legacySlug: asignar-y-testar-agentes-en-el-agent-builder
locale: es
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

La sección **Mis agentes** permite asignar agentes al equipo y probar su funcionamiento. Algunos agentes oficiales requieren credenciales para operar en la plataforma. Para más información, accede a [Agentes oficiales de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/agentes-oficiales-de-vtex-cx-platform).

> ℹ️ Para crear agentes personalizados, usa el CLI de VTEX CX Platform (Weni). Aprende más en [Using the VTEX CX Platform (Weni) CLI](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli#getting-started-with-your-project).

Este artículo se divide en las siguientes secciones:

- [Asignar un agente al equipo](#asignar-un-agente-al-equipo)
- [Eliminar un agente](#eliminar-un-agente)
- [Probar un agente](#probar-un-agente)

## Asignar un agente al equipo

Para asignar un nuevo agente en tu tienda sigue los pasos a continuación:

1. Accede a tu organización en el [dashboard do VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en el ícono **Mis agentes**.
3. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Asignar nuevos agentes`.
4. En la página **Asignar nuevos agentes**, selecciona una de las opciones disponibles:
 - **Agentes oficiales**: agentes de VTEX o de integraciones externas previamente registradas en la plataforma.
 - **Agentes personalizados**: agentes creados para tu operación.

> ℹ️ También puedes localizar agentes usando el campo de búsqueda o filtrando por tipo de categoría.

5. Después de elegir un agente, haz clic en `Ver detalles`.
6. En el modal del agente, revisa la información sobre los MCPs disponibles y el ejemplo de conversación.
7. Haz clic en `Iniciar configuración`.
8. En **Asignar {Nombre del agente}**, en la sección **Selección de sistema**, selecciona una de las opciones disponibles y haz clic en `Siguiente`.
9. En **Selección de MCP**, selecciona una de las opciones disponibles para definir el comportamiento del agente.
10. En **Configurar MCP {Nombre del sistema}**, si está disponible, completa o selecciona los parámetros del agente. Algunos agentes no tienen parámetros configurables.
11. En **Revisa la configuración e ingresa las credenciales**, revisa la información, completa los campos solicitados y haz clic en `Finalizar`.

Después de completar estos pasos, el agente se mostrará en la sección **Agentes asignados** de la página **Mis Agentes**.

## Eliminar un agente

Para eliminar un agente de tu tienda sigue los pasos a continuación:

1. Accede a tu organización en el [dashboard do VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en el ícono **Mis agentes**.
3. En la sección **Agentes asignados**, haz clic sobre el agente deseado.
4. Haz clic en `Ver opciones`.
5. Haz clic en `Eliminar agente`.

> ℹ️ Si deseas utilizar nuevamente este agente, realiza la nueva asignación según se describe en [Asignar un agente al equipo](#asignar-un-agente-al-equipo).


## Probar un agente

Para probar el funcionamiento de un agente asignado, haz clic en `Prueba tus agentes`, en la esquina inferior derecha de la pantalla.

En la sección **Prueba tus agentes**, puedes:

- Seleccionar, en el campo **Versión del Manager**, el modelo que actuará como agente orquestador durante la conversación.
- Iniciar una conversación usando la caja de diálogo.
- Enviar un mensaje de audio haciendo clic en el ícono de micrófono o en el botón <i class="fas fa-plus" aria-hidden="true"></i> y, a continuación, en `Áudio`.
- Enviar archivos haciendo clic en el botón <i class="fas fa-plus" aria-hidden="true"></i> y, a continuación, en `Enviar archivo`.
- En la pestaña **Flujo visual**, visualizar en formato de diagrama qué agentes están siendo accionados para producir la respuesta mostrada en la caja de diálogo.
- En la pestaña **Logs**, verificar el registro detallado de los eventos procesados por el modelo de IA durante la conversación. Esta información ayuda a entender el procesamiento de la conversación, identificar posibles problemas y mejorar el desempeño del agente.

Para buscar eventos específicos, haz clic en `Filtrar logs` y busca por palabras clave o por las siguientes categorías:

| Categoría | Descripción de la etapa |
| --- | :--- |
| Aplicando reglas de seguridad | Verificación de seguridad del contenido, incluyendo protección de datos sensibles, bloqueo de contenidos prohibidos y aplicación de políticas de uso. |
| Asignando tarea al agente | Definición del agente especializado o recurso interno que será responsable de una etapa de la conversación. |
| Conocimientos | Consulta a la base de conocimiento, como documentación, artículos del Help Center o contenidos internos, para buscar información oficial antes de la respuesta. |
| Reencaminando al manager | Retorno del control al manager para definir la siguiente etapa de la conversación. |
| Enviando a soporte humano | Reencaminamiento de la conversación a atención humana debido a una limitación técnica, excepción o regla de negocio. |
| Enviando al manager | Envío del resultado de una herramienta, agente o etapa del flujo al Manager para procesamiento. |
| Enviando respuesta final | Envío de la respuesta al usuario después de la conclusión de la orquestación interna. |
| Herramienta | Uso de un recurso externo o módulo específico, como consulta de pedidos, análisis de imagen, transcripción de audio o búsqueda en otro sistema. |
| Pensando | Etapa en la que el modelo procesa internamente la solicitud, planea la respuesta y decide si debe accionar herramientas, consultar conocimiento o reencaminar la conversación a otro flujo. |

> ℹ️ Para eliminar el historial de las conversaciones con el agente orquestador, haz clic en el menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i> al lado de **Prueba tus agentes** y, a continuación, en `Limpiar conversaciones`.
