---
title: "Analytics: Métricas de atención"
createdAt: 2026-07-02T16:25:21.244Z
updatedAt: 2026-07-02T14:20:03.298Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-cx-platform-analytics
locale: es
---

La página **Analytics** ofrece datos y métricas sobre la atención humana de tu operación. A través de ella, puedes monitorear tickets de atención en tiempo real, verificar el desempeño de agentes y equipos, y analizar históricos para identificar oportunidades de mejora. Cada dashboard nativo de VTEX CX Platform trae diferentes datos de atención.

## Live Desk

**Live Desk** es el panel de atención humana de Analytics. Está dividido en dos pestañas: **Monitoreo** y **Análisis**.

En esta página, encontrarás los siguientes controles:

![Botones de actualización, filtros y exportación de datos](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/live-desk-controle-de-dados-e-filtros.png)

- `Actualizar`: Recarga los datos del panel manualmente.
- `Filtros`: Abre las opciones de filtrado por departamento, cola, agente, tags y período.
- `Exportar datos`: Te permite descargar los datos mostrados en el panel.

Estos datos se actualizan automáticamente y puedes visualizar la hora de la última actualización junto al botón **Actualizar**.

Para configurar las preferencias de Live Desk, accede a **Configuración > Live Desk**. Obtén más información en el artículo [Configurar Live Desk](es/docs/tutorials/configurar-live-desk).

### Monitoreo

La pestaña **Monitoreo** muestra información en tiempo real sobre los tickets de atención en curso en tu operación.

Contiene las siguientes secciones:

![Pantalla de monitoreo 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-1.png)

#### 1. Status de los tickets de atención

Presenta un resumen rápido del estado actual de los tickets de atención con tres contadores:

- **En espera:** Número de contactos esperando el inicio de la atención en la cola.
- **En curso:** Tickets de atención siendo conducidos por un agente en este momento.
- **Finalizado:** Total de tickets de atención cerrados en el período. El período considerado para esta métrica es el día actual.

#### 2. Métricas de tiempo ahora

Muestra los promedios de tiempo calculados en tiempo real para los tickets de atención activos:

- **Tiempo promedio de espera:** Cuánto tiempo, en promedio, los contactos esperan en la cola antes de ser atendidos.
- **Tiempo promedio para 1ª respuesta:** Intervalo promedio entre el contacto que entra en atención y recibe el primer mensaje del agente.
- **Duración promedio de la conversación:** Tiempo promedio total de cada ticket de atención, desde el inicio hasta el cierre.

Cada métrica también muestra el valor máximo registrado en el período.

#### 3. Tickets de atención abiertos por hora

Gráfico de línea que muestra la distribución de tickets de atención iniciados a lo largo de las horas del día. Usa este gráfico para identificar los horarios pico de demanda y planificar la escala de agentes.

![Pantalla de monitoreo 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-2.png)

#### 4. Volumen por cola

Tabla que lista todas las colas de atención activas y muestra, para cada una, la cantidad de tickets de atención **en espera**, **en curso** y **finalizados**. Cada lista se muestra en orden descendente.

Para expandir y visualizar la lista completa de colas, haz clic en `Ver todos`.

#### 5. Volumen por tag

Tabla que lista todos los tags asociados a los tickets de atención activos y muestra, para cada uno, la cantidad de tickets de atención **en espera** y **finalizados**. Permite identificar qué asuntos o categorías concentran más volumen. Cada lista se muestra en orden descendente.

Para expandir y visualizar la lista completa de tags, haz clic en `Ver todos`.

#### 6. CSAT

Muestra la evaluación de satisfacción del cliente (CSAT) recopilada al final de los tickets de atención.

- **Evaluación general:** Nota promedio calculada con base en todas las evaluaciones recibidas en el período, con el total de tickets de atención y de evaluaciones respondidas.
- **Evaluación por agente:** Nota individual de cada agente, con el número de tickets de atención y evaluaciones recibidas. Los agentes con las notas más altas aparecerán en esta lista.
- **Distribución de las evaluaciones:** Gráfico de barras con el porcentaje y el número de respuestas en cada nivel: Muy satisfecho, Satisfecho, Neutral, Insatisfecho y Muy insatisfecho.

> ⚠️ Para mostrar el widget de CSAT, debe estar nativo en al menos uno de los departamentos del proyecto. Si no está activo, debes hacer clic en el botón `Activar` y activarlo en un departamento. Para más información sobre los departamentos, lee el artículo [Configurar Live Desk](es/docs/tutorials/configurar-live-desk).

![Pantalla de monitoreo 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-3.png)

#### 7. Monitoreo detallado

Tabla que lista los tickets de atención individuales en tiempo real. Puedes alternar entre las siguientes vistas usando las pestañas en la parte superior de la tabla:

- **En espera:** Contactos esperando atención, con el tiempo de espera acumulado.
- **En curso:** Tickets de atención activos, con datos de agente, departamento, cola, tag y tiempos registrados.
- **Atención:** Histórico de los tickets de atención del período.
- **Pausas personalizadas:** Registro de pausas realizadas por los agentes.

Las columnas muestran información como contacto, tiempo de espera, tiempo para la primera respuesta, agente responsable, departamento y cola.

Al hacer clic en uno de los tickets de atención, serás redirigido a la página de Live Desk dentro de **Operaciones**.

### Análisis

La pestaña **Análisis** muestra datos históricos sobre tickets de atención finalizados. Usa el selector de período para definir el intervalo de fechas que deseas consultar.

Esta pestaña contiene las siguientes secciones:

#### 1. Métricas del período

Presenta un resumen consolidado de los tickets de atención finalizados en el período seleccionado:

| Métrica | Descripción |
| --- | --- |
| **Finalizado** | Total de tickets de atención cerrados en el período. |
| **Tiempo promedio de espera** | Tiempo promedio que los contactos esperaron en la cola antes de ser atendidos. |
| **Tiempo promedio para 1ª respuesta** | Intervalo promedio entre el contacto que entra en atención y recibe el primer mensaje del agente. |
| **Tiempo promedio de respuesta** | Promedio del tiempo que un contacto esperó para recibir una respuesta a cada mensaje enviado. |
| **Duración promedio de la conversación** | Tiempo promedio de cada ticket de atención, del inicio al fin. |

#### 2. Tickets de atención abiertos por hora

Gráfico de línea que muestra la distribución de tickets de atención iniciados a lo largo de las horas del día en el período seleccionado. Puedes usar este gráfico para identificar patrones de demanda y planificar la escala de agentes.

#### 3. Volumen por cola

Tabla que lista las colas de atención y muestra la cantidad de tickets de atención finalizados en cada una, ordenados de forma descendente. Para ver la lista completa, haz clic en `Ver todos`.

#### 4. Volumen por tag

Tabla que lista los tags asociados a los tickets de atención y muestra la cantidad de tickets de atención finalizados en cada uno, ordenados de forma descendente. Esta tabla identifica los asuntos o categorías que concentraron más volumen en el período. Para ver la lista completa, haz clic en `Ver todos`.

#### 5. CSAT

Muestra la evaluación de satisfacción del cliente (CSAT) recopilada al final de los tickets de atención en el período seleccionado.

- **Evaluación general:** Nota promedio calculada con base en todas las evaluaciones recibidas, con el total de tickets de atención y de evaluaciones respondidas.
- **Evaluación por agente:** Nota individual de cada agente, con el número de tickets de atención, número de evaluaciones y promedio de las evaluaciones recibidas.
- **Distribución de las evaluaciones:** Gráfico de barras con el porcentaje y el número de respuestas en cada nivel: Muy satisfecho, Satisfecho, Neutral, Insatisfecho y Muy insatisfecho.

#### 6. Análisis detallado

Tabla que lista los tickets de atención individuales finalizados en el período. Puedes alternar entre las siguientes pestañas:

- [Finalizado](#finalizado)
- [Agente](#agente)
- [Pausas personalizadas](#pausas-personalizadas)

##### Finalizado

Esta pestaña contiene información sobre los tickets de atención cerrados, con datos de agente, departamento, cola, tiempo de espera, tiempo para la primera respuesta, duración, contacto y protocolo. Puedes filtrar los resultados por **agente**, **contacto** y **protocolo**.

| Columna | Descripción |
| --- | --- |
| Agente | Nombre del agente. |
| Departamento | Departamento del agente (como **Logística**, **Finanzas**, entre otros). |
| Cola | Cola del ticket de atención (como **Rastreo**, **Pagos**, entre otros). |
| Tiempo de espera | Intervalo que el contacto esperó en la cola hasta ser atendido. |
| Tiempo para la 1ª respuesta | Intervalo promedio entre el contacto que entra en atención y recibe el primer mensaje del agente. |
| Duración | Tiempo que duró el ticket de atención del inicio al fin. |
| Contacto | Nombre del cliente que entró en contacto con la atención. |
| Protocolo | Número del protocolo del ticket de atención. |

##### Agente

Esta pestaña proporciona información de los agentes en el período seleccionado. También puedes filtrar por agente en el campo **Agente**.

| Columna | Descripción |
| --- | --- |
| Agente | Nombre del agente. |
| Total de tickets de atención | Número de tickets de atención de ese agente en el período seleccionado. |
| Tiempo promedio para la 1ª respuesta | Intervalo promedio entre el contacto que entra en atención y recibe el primer mensaje del agente. |
| Tiempo promedio de respuesta | Intervalo promedio de las respuestas del agente. |
| Duración promedio | Tiempo de duración promedio de todos los tickets de atención del agente. |
| Tiempo en atención | Tiempo de atención total del agente. |

##### Pausas personalizadas

En esta pestaña, puedes visualizar las pausas realizadas por los agentes. Cada columna se refiere a una pausa personalizada y muestra cuánto tiempo el agente pausó en el período seleccionado.

Para saber cómo agregar, eliminar o editar las pausas personalizadas, lee el artículo [Configurar Live Desk](es/docs/tutorials/configurar-live-desk).

## Conversacional (Beta)

El dashboard **Conversacional** ofrece datos sobre las conversaciones gestionadas por agentes de IA en tu operación. A través de él, monitoreas el volumen de conversaciones, el comportamiento de los contactos, el desempeño de los agentes de IA y el impacto de las interacciones en las ventas.

> ℹ️ Los datos del dashboard Conversacional contemplan ventanas cerradas hasta las 23:59:59 del día de inicio, considerando la zona horaria configurada en el proyecto. Las conversaciones del día actual aún están en procesamiento y se mostrarán después del cierre del período.

El dashboard ofrece los siguientes controles:

- Selector de período: define el intervalo de fechas para la visualización de los datos.
- `Actualizar`: recarga los datos del panel manualmente.
- `Exportar datos`: te permite descargar los datos mostrados en el panel.

Este dashboard contiene las siguientes secciones:

### Conversaciones

La sección **Conversaciones** presenta un resumen del volumen y de la distribución de las conversaciones en el período seleccionado.

| Métrica | Descripción |
| --- | --- |
| **Total de conversaciones** | Número total de conversaciones iniciadas en el período. |
| **Atendido por IA** | Porcentaje y número total de conversaciones cerradas enteramente por el agente de IA, sin transferencia a atención humana. |
| **No atendido por IA** | Porcentaje y número total de conversaciones en las que el agente de IA no logró completar la atención. |
| **Transferidas a live desk** | Porcentaje y número total de conversaciones que necesitaron atención humana en Live Desk. |

### Contactos

La sección **Contactos** muestra métricas sobre los contactos que iniciaron conversaciones en el período.

| Métrica | Descripción |
| --- | --- |
| **Contactos únicos** | Número de contactos distintos que iniciaron al menos una conversación en el período. |
| **Contactos recurrentes** | Número de contactos que iniciaron más de una conversación. También muestra el porcentaje en relación con el total de contactos únicos. |
| **Promedio de conversaciones por contacto** | Promedio de conversaciones iniciadas por contacto en el período. |

### Asuntos

La sección **Asuntos** te permite categorizar y analizar las conversaciones por tema. Después de agregar asuntos, esta sección muestra la distribución de las conversaciones por categoría, ayudando a identificar los temas más recurrentes en tu operación.

Para comenzar, haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agrega tu primer asunto` y define las categorías relevantes para tu operación.

### Personaliza tu dashboard

Puedes agregar widgets al dashboard para mostrar las métricas más relevantes para tu operación. Para esto, haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar widget` y elige las métricas que deseas monitorear.

Puedes elegir entre widgets nativos de VTEX CX Platform o widgets personalizados.

#### Widgets nativos

- **CSAT:** Monitorea el nivel de satisfacción de los clientes a partir de la puntuación del CSAT.
- **NPS:** Mide la probabilidad de que un contacto recomiende el servicio recibido.
- **Agentes más usados:** Muestra un ranking de los agentes más utilizados por la atención.
- **Herramientas más usadas:** Lista las herramientas más utilizadas por la atención.
- **Embudo y datos de ventas:** Relaciona las conversaciones con los resultados comerciales generados en el período.

#### Widgets personalizados

- **Gráfico de barras horizontal**: Selecciona un agente y monitorea los datos de ese agente con una visualización en barras.
- **Tabla cruzada**: Elige dos datos que deseas monitorear y compara los resultados de esos datos entre sí.
- **Números absolutos**: Selecciona una métrica y observa el valor absoluto de esa métrica.

## WhatsApp

El dashboard WhatsApp muestra datos sobre el volumen de mensajes enviados por el número de WhatsApp registrado en tu operación. A través de él, monitoreas la distribución de los mensajes por categoría y filtras los datos por plantilla y período.

> ℹ️ Cada número de WhatsApp con integración activa con Meta tiene su propio dashboard, creado automáticamente. Para acceder a información de atención de otro número, usa el selector de dashboard.

El dashboard ofrece los siguientes controles:

- **Selector de período:** Define el intervalo de fechas para la visualización de los datos.
- **Selector de plantilla favorita:** Muestra la lista de las plantillas que marcaste como favoritas. Selecciona una plantilla para visualizar más información.
- **Búsqueda de plantilla:** Muestra la lista de todas las plantillas de tu tienda. Selecciona una plantilla para visualizar más información.

Después de seleccionar una plantilla, puedes visualizar los datos de los mensajes de esa plantilla.

El gráfico contiene la siguiente información:

- **Mensajes enviados:** Número total de mensajes enviados en el período seleccionado para esa plantilla.
- **Mensajes entregados:** Número total y porcentaje de los mensajes entregados a los contactos.
- **Mensajes leídos:** Número total y porcentaje de los mensajes leídos por los contactos.
- **Clics:** Número total y porcentaje de clics en los mensajes enviados a los contactos.

La tabla **Clics en los botones** muestra la información de los botones en los que hicieron clic los contactos.

| Dato | Descripción |
| --- | --- |
| **Texto del botón** | Texto del botón en el que el cliente hizo clic. |
| **Tipo** | Tipo del botón, como link o respuesta rápida. |
| **Total** | Total de clics en el botón. |
| **Tasa de clics** | Porcentaje de clics en el botón con base en la cantidad de mensajes enviados. |

Para visualizar todos los datos, haz clic en `Todos los datos` junto al nombre de la plantilla. Esta sección muestra una tabla con el volumen de mensajes enviados, agrupados por categoría de plantilla de WhatsApp Business.

| Categoría | Descripción |
| --- | --- |
| **Marketing** | Mensajes promocionales, como ofertas, lanzamientos y comunicaciones de campaña. |
| **Servicio** | Mensajes de atención al cliente iniciados en respuesta a una conversación abierta por el contacto. |
| **Utilitario** | Mensajes transaccionales, como confirmaciones de pedido, actualizaciones de entrega y notificaciones de cuenta. |
| **Autenticación** | Mensajes de verificación de identidad, como contraseñas de uso único (OTP). |
