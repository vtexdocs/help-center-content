---
title: 'Auditoría: Backlog de mejoras'
createdAt: 2026-08-12T00:00:00.244Z
updatedAt: 2026-08-12T00:00:00.244Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-improvements-backlog
locale: es
---

El **Backlog de mejoras** es una funcionalidad de VTEX CX Platform que analiza una muestra de las conversaciones de tu agente de inteligencia artificial (IA) e identifica patrones de fallas recurrentes, como desviaciones de comportamiento, vacíos de conocimiento y problemas técnicos.

En lugar de revisar manualmente todas las conversaciones, ejecutas un análisis y recibes una lista organizada de problemas, cada uno con diagnóstico, solución sugerida y las conversaciones afectadas. A partir de este informe puedes ajustar tu agente, agregar información a la base de conocimiento, entre otros.

> ℹ️ El análisis usa una muestra representativa de las conversaciones, no todas las conversaciones.

## Ejecutar un análisis

>❗ Solo puedes ejecutar **un** análisis por día.

>❗ Ejecutar un nuevo análisis reemplaza las entradas que no se resolvieron o que se ignoraron en el análisis anterior. Por eso recomendamos resolver las mejoras señaladas en el análisis anterior antes de ejecutar uno nuevo.

Para ejecutar un análisis sigue los pasos a continuación:

1. Accede a VTEX CX Platform.
2. Ve al módulo **Auditoría**.
3. Selecciona la pestaña **Backlog de mejoras**.
4. Haz clic en `Ejecutar análisis`. El análisis empezará a ejecutarse en segundo plano.

> ℹ️ El análisis puede tardar algunas horas en completarse. Las mejoras identificadas se muestran según se van encontrando, sin esperar a que se terminen de procesar todos los datos.

## Ver el resultado del análisis

Los resultados se muestran en una tabla con tres columnas:

- **Mejora:** indica el tema que se puede mejorar o el problema identificado.
- **Tipo:** identifica el tipo de problema. Consulta los tipos y la descripción de cada uno a continuación:

| Tipos de problema | Descripción |
| --- | --- |
| **Comportamiento** | El agente se salió del tono de voz esperado de la marca, hizo demasiadas preguntas antes de ayudar o no siguió las instrucciones configuradas. |
| **Conocimientos** | El agente necesitó cierta información para responder al cliente, pero no la encontró en la base de conocimiento. |
| **Problema técnico** | Falla técnica. Ejemplo: una integración externa. |
| **Análisis personalizado** | Problema encontrado a partir de un monitor que configuraste. |

- **Conversaciones afectadas:** indica la cantidad de conversaciones afectadas por cada problema.

> ℹ️ La lista no tiene límite de entradas. Una misma conversación puede aparecer en más de una entrada si presenta más de un tipo de problema.

## Investigar una mejora

Haz clic en cualquier mejora para abrir el panel de detalles. El panel muestra la siguiente información:

- **Diagnóstico:** la explicación del problema y sus causas.
- **Solución sugerida:** la recomendación de cómo corregir el problema.
  - En el caso de un **Problema técnico** la solución sugerida contiene el botón `Soporte técnico`. Esta solución envía un email con la información del error a nuestro equipo de soporte para análisis.
- **Conversaciones afectadas:** la lista de las conversaciones en las que ocurrió el problema. Cuando hay muchas conversaciones, se organizan de modo que cada fila puede expandirse para ver las partes relevantes.

> ℹ️ Si la solución sugerida hace referencia a una instrucción que se modificó o se eliminó desde que se ejecutó el análisis, se muestra una notificación. La sugerencia permanece en la lista; la notificación solo indica que el escenario cambió desde el análisis.

Al final de cada entrada puedes seleccionar una de las siguientes dos acciones:

- **`Marcar como resuelta`:** la entrada se remueve de la lista de problemas pendientes al resolverla. Recomendamos marcarla como resuelta solo después de aplicar la corrección. Las entradas no resueltas no vuelven a mostrarse en la lista ni en nuevos análisis.

> ⚠️ La acción Marcar como resuelta no modifica el agente automáticamente. Debes implementar la mejora en las instrucciones o en la base de conocimiento.

- **`Ignorar mejora`:** la entrada se remueve de la lista inmediatamente al ignorarla. Recomendamos utilizar esta acción cuando la entrada no es relevante o no se va a tratar. Las entradas ignoradas no vuelven a aparecer en la lista ni en nuevos análisis.

## Crear análisis personalizado

También puedes definir comportamientos específicos de tu negocio o de tu operación que se deben monitorear.

Para crear un análisis personalizado sigue los pasos a continuación:

1. En la pestaña **Backlog de mejoras** haz clic en `Análisis personalizado`.
2. Completa los dos campos:

- **Título:** nombre de la mejora identificada.
- **Definición:** descripción del comportamiento que deseas monitorear.

3. Haz clic en `Agregar`.

A partir de ese momento, ese criterio pasa a evaluarse en los próximos análisis junto con las demás mejoras. Los resultados aparecen en el backlog con el título que seleccionaste en **Mejoras** y con la tag **Análisis personalizado**.

> ℹ️ Puedes crear hasta 10 análisis personalizados por proyecto.

## Ver y eliminar análisis personalizados

Para ver los análisis existentes sigue los pasos a continuación:

1. En la pestaña **Backlog de mejoras** haz clic en `Análisis personalizado`.
2. Esta pantalla muestra una lista de análisis personalizados con la cantidad de conversaciones afectadas de cada uno.
3. Para ver las conversaciones afectadas haz clic en el análisis deseado.

Para eliminar un análisis personalizado sigue los pasos a continuación:

1. En la pestaña **Backlog de mejoras** haz clic en `Análisis personalizado`.
2. Haz clic en el botón de <i class="far fa-trash-alt" aria-hidden="true"></i> papelera al lado del análisis que deseas eliminar.
3. Por último, haz clic en `Eliminar` para confirmar la eliminación.
