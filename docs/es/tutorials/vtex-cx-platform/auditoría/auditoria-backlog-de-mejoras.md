---
title: 'Auditoría: Backlog de mejoras'
createdAt: 2026-08-12T00:00:00.244Z
updatedAt: 2026-08-12T00:00:00.244Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-improvements-backlog
locale: es
---

El **Backlog de mejoras** es una funcionalidad de VTEX CX Platform que analiza una muestra de las conversaciones de tu agente de inteligencia artificial (IA) e identifica patrones de falla recurrentes, como desviaciones de comportamiento, brechas de conocimiento y problemas técnicos.

En lugar de revisar manualmente todas las conversaciones, ejecutas un análisis y recibes una lista organizada de problemas, cada uno con diagnóstico, solución sugerida y las conversaciones afectadas. A partir de ese reporte, puedes ajustar tu agente, agregar información en la base de conocimiento, entre otros.

> ℹ️ El análisis utiliza una muestra representativa de las conversaciones, no todas las conversaciones.

El análisis evalúa los datos de tu operación e identifica oportunidades de mejora, que se muestran en el Backlog de mejoras. La ejecución es manual, lo que te permite elegir el mejor momento para actualizar los resultados.

Para ejecutar un análisis, sigue los pasos a continuación:

1. En VTEX CX Platform, accede a **Auditoría**.
2. Haz clic en la pestaña **Backlog de mejoras**.
3. Haz clic en el botón `Ejecutar análisis`.

Después de hacer clic en el botón, el análisis se ejecuta en segundo plano y puede tardar algunas horas en completarse. Durante el procesamiento, puedes seguir las primeras mejoras identificadas directamente en la pestaña Backlog de mejoras.

>❗ Solo es posible ejecutar un análisis por día. Al ejecutar un nuevo análisis, los ítems no resueltos o ignorados del análisis anterior se reemplazan. Por lo tanto, recomendamos tratar las mejoras indicadas antes de iniciar una nueva ejecución.

## Ver resultado del análisis

Los resultados aparecerán en una lista con tres columnas:

- **Mejora:** Indica el tema que puede mejorarse o el problema identificado.
- **Tipo:** Identifica el tipo de problema. Lee los tipos y la descripción de cada uno a continuación:

| Tipos de problema | Descripción |
| --- | --- |
| **Comportamiento** | El agente se desvió del tono de voz esperado de la marca, hizo preguntas en exceso antes de ayudar o no siguió las instrucciones configuradas. |
| **Conocimiento** | El agente necesitó información para responder al cliente, pero no la encontró en la base de conocimiento. |
| **Problema técnico** | Falla técnica, como de integración externa. |
| **Análisis personalizado** | Problema encontrado a partir de un monitor que configuraste. |

- **Conversaciones afectadas:** Indica la cantidad de conversaciones afectadas por cada problema.

> ℹ️ La lista no tiene límite de ítems. Una misma conversación puede aparecer en más de un ítem, en caso de presentar más de un tipo de problema.

## Investigar una mejora

Haz clic en cualquier mejora para abrir el panel de detalle. El panel muestra la siguiente información:

- **Diagnóstico:** La explicación de qué está sucediendo y por qué.
- **Solución sugerida:** La recomendación de cómo corregir el problema.
  - En el caso de un **Problema técnico**, la solución sugerida contiene el botón `Contactar al soporte técnico`. Esta solución envía un email con la información del error a nuestro equipo de Soporte para su análisis.
- **Conversaciones afectadas:** La lista de las conversaciones en las que apareció el problema. Cuando hay muchas conversaciones, están paginadas, y cada fila puede expandirse para mostrar los fragmentos relevantes.

> ℹ️ Si la solución sugerida hace referencia a una instrucción que fue modificada o eliminada desde que se ejecutó el análisis, se muestra una advertencia. La sugerencia continúa en la lista; la advertencia solo señala que el escenario cambió desde el análisis.

Al final de cada ítem, puedes seleccionar una de las dos acciones a continuación:

- **`Marcar como resuelto`:** Cuando un ítem se resuelve, se elimina de la lista de pendientes. Recomendamos marcarlo como resuelto solo después de aplicar la corrección. Los ítems resueltos no volverán a aparecer en la lista ni en nuevos análisis.

> ⚠️ Marcar como resuelto no cambia el agente automáticamente. Debes implementar la mejora en las instrucciones o en la base de conocimiento.

- **`Ignorar mejora`:** Cuando un ítem se ignora, se elimina de la lista inmediatamente. Recomendamos ignorarlo cuando no sea relevante o no vaya a tratarse. Los ítems ignorados no volverán a aparecer en la lista ni en nuevos análisis.

## Crear análisis personalizado

También puedes definir comportamientos propios para monitorear, específicos de tu negocio o de tu operación.

Para crear un análisis personalizado, sigue los pasos a continuación:

1. En la pestaña **Backlog de mejoras**, haz clic en `Análisis personalizado`.
2. Completa los dos campos:
  - **Título:** Nombre de la mejora identificada.
  - **Definición:** Descripción del comportamiento que quieres monitorear.
3. Haz clic en `Agregar`.

A partir de entonces, ese criterio se evaluará en los próximos análisis, con las otras mejoras. Los resultados aparecen en el backlog con el título que seleccionaste en **Mejoras** y con la etiqueta **Análisis personalizado**.

> ℹ️ Puedes crear hasta 10 análisis personalizados por proyecto.

## Ver y eliminar análisis personalizados creados

Para ver los análisis que ya creaste, sigue los pasos a continuación:

1. En la pestaña **Backlog de mejoras**, haz clic en `Análisis personalizado`.
2. Aparecerá la lista de análisis personalizados, con la cantidad de conversaciones afectadas por cada uno.
3. Para ver las conversaciones afectadas, haz clic en el análisis deseado.

Para eliminar un análisis personalizado, sigue los pasos a continuación:

1. En la pestaña **Backlog de mejoras**, haz clic en `Análisis personalizado`.
2. Haz clic en el botón de <i class="far fa-trash-alt" aria-hidden="true"></i> papelera al lado del análisis que deseas eliminar.
3. Finalmente, haz clic en `Eliminar` para confirmar la eliminación.