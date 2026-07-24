---
title: "Analytics: Métricas de atención"
createdAt: 2026-07-02T16:25:21.244Z
updatedAt: 2026-07-02T14:20:03.298Z
contentType: tutorial
productTeam: Post-purchase
slugEN: analytics-support-metrics
locale: es
---

La página **Analytics** ofrece datos y métricas sobre los chats de soporte humano de tu operación. Puedes hacer seguimiento de los chats de soporte en tiempo real, verificar el desempeño de representantes y equipos y analizar los historiales para identificar oportunidades de mejora. Cada dashboard nativo de VTEX CX Platform muestra datos diferentes de chats de soporte.

## Live Desk

**Live Desk** es el dashboard de chats de soporte humano de Analytics. Está dividido en dos pestañas: **Monitoreo** y **Análisis**.

y se muestran los siguientes controles:

![Botones de actualización, filtros y exportación de datos](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/live-desk-controle-de-dados-e-filtros.png)

- `Actualizar`: recarga los datos del dashboard manualmente.
- `Filtros`: abre las opciones de filtro por departamento, cola, representante, tags y periodo.
- `Exportar datos`: permite descargar los datos que se muestran en el dashboard.

Los datos se actualizan automáticamente y puedes ver la hora de la última actualización junto al botón **Actualizar**.

Para configurar las preferencias de Live Desk, accede a **Configuración > Live Desk**. Más información en el artículo [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

### Monitoreo

La pestaña **Monitoreo** muestra información en tiempo real sobre los chats de soporte en curso en tu operación.

Contiene las siguientes secciones:

![Tela de monitoramento 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-1.png)

#### 1. Status de los chats de soporte

Presenta un resumen rápido del estado actual de los chats de soporte con tres contadores:

- **Esperando:** número de contactos esperando el inicio del chat de soporte en la cola.
- **En curso:** chats de soporte atendidos por representantes en este momento.
- **Finalizado:** total de chats de soporte finalizados en el periodo. El periodo considerado en esta métrica es el día actual.

#### 2. Métricas de tiempo actuales

Muestra los promedios de tiempo calculados en tiempo real para los chats de soporte activos:

- **Tiempo de espera promedio:** promedio de tiempo que los contactos esperan en la cola antes de ser atendidos.
- **Tiempo promedio para la primera respuesta:** intervalo promedio entre el momento en que el contacto ingresa al chat de soporte y recibe el primer mensaje del representante.
- **Duración promedio del chat:** promedio de tiempo total de cada chat de soporte, desde el inicio hasta que se finaliza.

Cada métrica también muestra el valor máximo registrado en el periodo.

#### 3. Chats de soporte abiertos por hora

Gráfico de líneas que muestra la distribución de chats de soporte iniciados a lo largo de las horas del día. Permite identificar los horarios de mayor demanda y planificar la asignación de representantes.

![Tela de monitoramento 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-2.png)

#### 4. Volumen por cola

Tabla que lista todas las colas de chat de soporte activas y muestra su cantidad de chats de soporte **Esperando**, **En curso** y **Finalizados**. Todas las listas se muestran en orden descendente.

Para expandir y ver la lista completa de colas, haz clic en `Ver todo`.

#### 5. Volumen por tag

Tabla que lista todas las tags asociadas a los chats de soporte activos y muestra su cantidad de chats de soporte **En curso** y **Finalizados**. Permite identificar los asuntos o categorías que concentran mayor volumen. Todas las listas se muestran en orden descendente.

Para expandir y ver la lista completa de tags, haz clic en `Ver todo`.

#### 6. CSAT

Muestra la evaluación de satisfacción del cliente (CSAT) recopilada al final de los chats de soporte.

- **Calificación general:** puntuación promedio calculada con base en todas las calificaciones recibidas en el periodo. También se muestra el total de chats de soporte y de evaluaciones respondidas.
- **Calificación por representante:** calificación individual de cada representante. También se muestra el número de chats de soporte y evaluaciones recibidas. Los representantes con las calificaciones más altas se muestran en esta lista.
- **Distribución de las calificaciones:** gráfico de barras con el porcentaje y el número de respuestas en cada nivel: Muy satisfecho, Satisfecho, Neutral, Insatisfecho y Muy insatisfecho.

> ⚠️ Para mostrar el widget de CSAT, debe estar activo de forma nativa en al menos uno de los departamentos del proyecto. Si no está activo, debes hacer clic en el botón `Activar` y activarlo en un departamento. Para más información sobre los departamentos, consulta el artículo [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

![Tela de monitoramento 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-3.png)

#### 7. Monitoreo detallado

Tabla que lista los chats de soporte individuales en tiempo real. Puedes alternar entre las siguientes vistas usando las pestañas en la parte superior de la tabla:

- **Esperando:** contactos esperando un chat de soporte, incluye el tiempo de espera acumulado.
- **En curso:** chats de soporte activos, incluye datos del representante, departamento, cola, tag y tiempos registrados.
- **Representante:** historial de los chats de soporte del periodo.
- **Pausas personalizadas:** registro de las pausas realizadas por los representantes.

Las columnas muestran información como contacto, tiempo de espera, tiempo hasta la primera respuesta, representante responsable, departamento y cola.

Al hacer clic en uno de los chats de soporte, se te redirigirá a la página de Live Desk en la sección **Operaciones**.

### Analytics

La pestaña **Analytics** muestra datos históricos sobre los chats de soporte finalizados. Utiliza el selector de periodo para definir el intervalo de fechas que deseas consultar.

Esta pestaña contiene las siguientes secciones:

#### 1. Métricas del periodo

Muestra un resumen consolidado de los chats de soporte finalizados en el periodo seleccionado:

| Métrica | Descripción |
| - | - |
| **Finalizados** | Total de chats de soporte finalizados en el periodo. |
| **Tiempo de espera promedio** | Tiempo promedio que los contactos esperaron en la cola antes de ser atendidos. |
| **Tiempo promedio hasta la primera respuesta** | Tiempo promedio desde que el contacto entra en el chat de soporte hasta que recibe el primer mensaje del representante. |
| **Tiempo promedio de respuesta** | Tiempo promedio que los contactos esperaron para recibir respuesta a cada mensaje enviado. |
| **Duración promedio del chat** | Tiempo promedio de cada chat de soporte, del inicio al fin. |

#### 2. Chats de soporte abiertos por hora

Gráfico de líneas que muestra la distribución de chats de soporte iniciados a lo largo de las horas del día en el periodo seleccionado. Permite identificar patrones de demanda y planificar la asignación de representantes.

#### 3. Volumen por cola

Tabla que lista las colas de chats de soporte y muestra cuántos fueron finalizados en cada una, en orden descendente. Para ver la lista completa, haz clic en `Ver todo`.

#### 4. Volumen por tag

Tabla que lista las tags asociadas a los chats de soporte y muestra cuántos fueron finalizados en cada una, en orden descendente. Esta tabla identifica los asuntos o categorías que concentraron mayor volumen en el periodo. Para ver la lista completa, haz clic en `Ver todo`.

#### 5. CSAT

Muestra la evaluación de satisfacción del cliente (CSAT) recopilada al final de los chats de soporte en el periodo seleccionado.

- **Calificación general:** puntuación promedio calculada con base en todas las calificaciones recibidas. También incluye el total de chats de soporte y las evaluaciones respondidas.
- **Calificación por representante:** calificación individual de cada representante. También incluye el número de chats de soporte, número de evaluaciones y calificación promedio recibida.
- **Distribución de los comentarios:** gráfico de barras con el porcentaje y el número de respuestas en cada nivel: Muy satisfecho, Satisfecho, Neutral, Insatisfecho y Muy insatisfecho.

#### 6. Análisis detallado

Tabla que lista los chats de soporte individuales finalizados en el periodo. Puedes alternar entre las siguientes pestañas:

- [Finalizado](#finalizado)
- [Representante](#atendente)
- [Pausas personalizadas](#pausas-personalizadas)

##### Finalizado

Esta pestaña contiene información sobre los chats de soporte finalizados. Incluye datos de representante, departamento, cola, tiempo de espera, tiempo hasta la primera respuesta, duración, contacto y protocolo. Puedes filtrar los resultados por **Representante**, **Contacto** y **Protocolo**.

| Columna | Descripción |
| - | - |
| Representante | Nombre del representante. |
| Departamento | Departamento del representante (como **Logística**, **Finanzas**, entre otros). |
| Cola | Cola del chat de soporte (como **Seguimiento**, **Pagos**, entre otros). |
| Tiempo de espera | Intervalo que el contacto esperó en la cola hasta ser atendido. |
| Tiempo hasta la primera respuesta | Intervalo promedio entre el momento en que el contacto entra en el chat de soporte y el primer mensaje del representante. |
| Duración | Tiempo que duró el chat de soporte del inicio al fin. |
| Contacto | Nombre del cliente que se puso en contacto con el chat de soporte. |
| Protocolo | Número del protocolo del chat de soporte. |

##### Representante

Esta pestaña ofrece información de los representantes en el periodo seleccionado. También puedes filtrar por representante en el campo **Representante**.

| Columna | Descripción |
| - | - |
| Representante | Nombre del representante. |
| Total de chats de soporte | Número de chats de soporte de este representante en el periodo seleccionado. |
| Tiempo promedio hasta la primera respuesta | Intervalo promedio entre el momento en que el contacto entra al chat de soporte y el primer mensaje del representante. |
| Tiempo promedio de respuesta | Intervalo promedio de las respuestas del representante. |
| Duración promedio | Duración promedio de todos los chats de soporte del representante. |
| Tiempo en el chat de soporte | Tiempo de chats de soporte total del representante. |

##### Pausas personalizadas

En esta pestaña se muestran las pausas realizadas por los representantes. Cada columna se refiere a una pausa personalizada y muestra cuánto tiempo estuvo en pausa el representante durante el periodo seleccionado.

Para saber cómo agregar, remover o editar pausas personalizadas, consulta el artículo [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

## Conversaciones (beta)

El dashboard **Conversaciones** ofrece datos sobre las conversaciones gestionadas por agentes de IA en tu operación. Permite hacer seguimiento del volumen de conversaciones, el comportamiento de los contactos, el desempeño de los agentes de IA y el impacto de las interacciones en las ventas.

> ℹ️ Los datos del dashboard Conversaciones corresponden a ventanas cerradas a las 23:59:59 del día de inicio, según la zona horaria configurada en el proyecto. Las conversaciones del día actual todavía están en curso y se mostrarán después del cierre del periodo.

El dashboard ofrece los siguientes controles:

- Selector de periodo: define el intervalo de fechas para mostrar los datos.
- `Actualizar`: recarga los datos del dashboard manualmente.
- `Exportar datos`: permite descargar los datos que se muestran en el dashboard.

El dashboard contiene las siguientes secciones:

### Conversaciones

La sección **Conversaciones** muestra un resumen del volumen y la distribución de las conversaciones en el periodo seleccionado.

| Métrica | Descripción |
| - | - |
| **Total de conversaciones** | Número total de conversaciones iniciadas en el periodo. |
| **Atendido por IA** | Porcentaje y número total de conversaciones finalizadas completamente por el agente de IA sin transferirlas a soporte humano. |
| **No atendido por IA** | Porcentaje y número total de conversaciones en las que el agente de IA no logró finalizar el chat de soporte. |
| **Transferidas a Live Desk** | Porcentaje y número total de conversaciones que necesitaron soporte humano en Live Desk. |

### Contactos

La sección **Contactos** muestra métricas sobre los contactos que iniciaron conversaciones en el periodo.

| Métrica | Descripción |
| - | - |
| **Contactos únicos** | Número de contactos distintos que iniciaron al menos una conversación en el periodo. |
| **Contactos recurrentes** | Número de contactos que iniciaron más de una conversación. También muestra el porcentaje en relación con el total de contactos únicos. |
| **Promedio de conversaciones por contacto** | Promedio de conversaciones iniciadas por contacto en el periodo. |

### Asuntos

La sección **Asuntos** permite categorizar y analizar las conversaciones por asunto. Después de agregar asuntos, esta sección muestra la distribución de las conversaciones por categoría, lo que ayuda a identificar los asuntos más recurrentes en tu operación.

Para comenzar, haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agrega tu primer asunto` y define las categorías relevantes para tu operación.

### Personaliza tu dashboard

Puedes agregar widgets al dashboard para mostrar las métricas más relevantes para tu operación haciendo clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar widget` y escogiendo las métricas que deseas monitorear.

Puedes elegir entre widgets nativos de VTEX CX Platform o widgets personalizados.

#### Widgets nativos

- **CSAT:** hace seguimiento del nivel de satisfacción de los clientes a partir de la puntuación CSAT.
- **NPS:** mide la probabilidad de que un contacto recomiende el servicio recibido.
- **Agentes más usados:** muestra un ranking de los agentes más utilizados para los chats de soporte.
- **Herramientas más usadas:** muestra una lista de las herramientas más utilizadas para los chats de soporte.
- **Embudo de ventas y datos:** relaciona las conversaciones con los resultados comerciales generados en el periodo.

#### Widgets personalizados

- **Gráfico de barras horizontal**: selecciona un agente y haz seguimiento de sus datos mediante una vista de barras.
- **Tabla cruzada**: elige dos datos que deseas monitorear y compara los resultados entre sí.
- **Números absolutos**: selecciona una métrica y observa su valor absoluto.

## WhatsApp

El dashboard WhatsApp muestra datos sobre el volumen de mensajes enviados por el número de WhatsApp registrado en tu operación. Permite hacer seguimiento de la distribución de los mensajes por categoría y filtrar los datos por plantilla y periodo.

> ℹ️ Cada número de WhatsApp que tenga una integración activa con Meta tiene su propio dashboard (creado automáticamente). Para acceder a la información del chat de soporte de otro número utiliza el selector de dashboard.

El dashboard ofrece los siguientes controles:

- **Selector de periodo:** define el intervalo de fechas para mostrar los datos.
- **Selector de plantilla favorita:** muestra la lista de las plantillas que marcaste como favoritas. Selecciona una plantilla para ver más información.
- **Búsqueda de plantilla:** muestra la lista de todas las plantillas de tu tienda. Selecciona una plantilla para ver más información.

Después de seleccionar una plantilla podrás ver los datos de sus mensajes.

El gráfico contiene la siguiente información:

- **Mensajes enviados:** número total de mensajes enviados en el periodo seleccionado para esa plantilla.
- **Mensajes entregados:** número total y porcentaje de los mensajes entregados a los contactos.
- **Mensajes leídos:** número total y porcentaje de los mensajes leídos por los contactos.
- **Clics:** número total y porcentaje de clics en los mensajes enviados a los contactos.

La tabla de **Clics en los botones** muestra la información de los botones en los que hicieron clic los contactos.

| Dato | Descripción |
| - | - |
| **Texto del botón** | Texto del botón en el que hizo clic el cliente. |
| **Tipo** | Tipo de botón, como link o respuesta rápida. |
| **Total** | Total de clics en el botón. |
| **Tasa de clics** | Porcentaje de clics en el botón con base en la cantidad de mensajes enviados. |

Para ver todos los datos, haz clic en `Todos los datos` al lado del nombre de la plantilla. Esta sección muestra una tabla con el volumen de mensajes enviados, agrupados por categoría de plantilla de WhatsApp Business.

| Categoría | Descripción |
| - | - |
| **Marketing** | Mensajes promocionales, como ofertas, lanzamientos y comunicaciones de campaña. |
| **Servicio** | Mensajes de chat de soporte al cliente iniciados en respuesta a una conversación abierta por el contacto. |
| **Utilidad** | Mensajes transaccionales, como confirmaciones de pedido, actualizaciones de envío y notificaciones de cuenta. |
| **Autenticación** | Mensajes de verificación de identidad, como contraseñas de un solo uso (OTP). |
