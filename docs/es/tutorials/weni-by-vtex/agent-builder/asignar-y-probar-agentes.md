---
title: 'Asignar y probar agentes'
id: 41beBpRcBouxMywt6dUW2z
status: PUBLISHED
createdAt: 2025-07-09T18:14:18.864Z
updatedAt: 2025-09-11T13:21:03.550Z
publishedAt: 2025-09-11T13:21:03.550Z
firstPublishedAt: 2025-07-29T16:38:35.307Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: assigning-and-testing-agents
legacySlug: asignar-y-testar-agentes-en-el-agent-builder
locale: es
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

La sección **Agentes** permite al usuario asignar agentes al equipo y probarlos.

Algunos agentes oficiales requieren credenciales. Consulta la lista completa en [Agentes oficiales de Weni by VTEX y sus credenciales](/es/docs/tutorials/agentes-oficiales-de-weni-by-vtex).

> ℹ️ Para crear agentes personalizados, utiliza la CLI de Weni by VTEX. Consulta la [documentación](https://weni-ai.github.io/weni-cli/getting-started/installation/) para crear tu propio agente.

Este artículo se divide en dos partes:
- [Asignar un agente al equipo](#como-asignar-un-agente)
- [Probar un agente](#como-probar-un-agente)

## Asignar un agente al equipo

1. En el menú lateral, haz clic en **Agent Builder**.
2. Luego, haz clic en **Agentes**.
3. En la barra de herramientas superior, haz clic en <i class="fas fa-plus"></i>`Asignar agentes`.
4. En la Galería de agentes, selecciona **Agentes oficiales** o **Agentes personalizados**. Puedes seleccionar entre los agentes listados o usar el campo de búsqueda para buscar un agente específico.
5. Después de elegir el agente, haz clic en `Asignar al equipo`.

> ⚠️ Si el agente requiere credenciales, llena los campos necesarios y luego haz clic en `Asignar`.

## Probar un agente

Para probar un agente, haz clic en `Vista previa`.

En esta pantalla puedes:
- Iniciar una conversación utilizando el cuadro de diálogo.
- Enviar un mensaje de audio haciendo clic en el ícono de micrófono.
- Enviar una imagen haciendo clic en el ícono de más <i class="fas fa-plus"></i> y luego en `Fotos`.

En **Flujo visual** pueden observarse los agentes que se activan a partir de las preguntas realizadas.

En **Logs**, se registra el historial detallado de eventos procesados por la inteligencia artificial (IA). Con esta información, puedes identificar cómo funciona la IA y diagnosticar problemas, mejorando su desempeño. Haz clic en `Filtrar logs` para buscar por palabras clave o buscar entre las siguientes categorías:

| Categoría | Descripción de la etapa |
| ------------- | :-------------- |
| Aplicando reglas de seguridad | Aplica protecciones y mecanismos de seguridad. |
| Conocimientos | Busca información en la base de conocimientos del agente. |
| Asignando tarea al agente | Activa al agente con tareas. |
| Redirigiendo al manager | Redirige los mensajes del usuario al manager, el agente principal encargado de elaborar la respuesta final para el usuario. |
| Enviando respuesta final | Envía la respuesta final al usuario. |
| Enviando respuesta al manager | Redirige la información al manager, el agente principal que interactúa con el usuario. |
| Pensando | Analiza los siguientes pasos a realizar. |
| Herramienta | Activa la herramienta que el agente utiliza para interactuar con otros sistemas. |

Para limpiar la conversación, haz clic en el menú <i class="fas fa-ellipsis-v"></i> al lado de **Vista previa de los agentes** y selecciona `Limpiar conversaciones`.
