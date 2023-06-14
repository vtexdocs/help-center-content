---
title: Página de status de la plataforma
id: gPhqDn9IQ3c67wbJEX3JJ
status: PUBLISHED
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-05-24T19:06:04.933Z
publishedAt: 2023-05-24T19:06:04.933Z
firstPublishedAt: 2019-01-14T20:01:43.663Z
contentType: tutorial
productTeam: Reliability
author: 0QBQws7rk0t5Mnu8fgfUv
slug: pagina-de-status-de-la-plataforma
legacySlug: untitled-entry-2019-01-14-at-07-58-58, status-vtex-entienda-como-funciona-el-status-de-la-plataforma
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

En el [Status VTEX](https://status.vtex.com/), usted puede supervisar la estabilidad de la plataforma en tiempo real, así como acceder a todo el historial de incidentes.

Los eventos son reportados por nuestro equipo siempre que nuestro sistema automático de monitoreo identifica una inestabilidad en los módulos de la plataforma. Los mantenimientos programados también se comunican en detalle.

A continuación, encontrarás información detallada sobre los elementos de la página de status de la plataforma VTEX.

<div class = "alert alert-info">
La página de status se desarrolla con la herramienta Atlassian Statuspage.
</div>

## Notificaciones

En la esquina superior derecha de la página de status se incluye el botón `SUBSCRIBE TO UPDATES`. Al hacer clic, puedes suscribirte para recibir actualizaciones por email, Slack, webhook o feed RSS.

La opción webhook permite realizar integraciones basadas en las notificaciones automáticas de status de la plataforma. Si deseas utilizarlo, ponte en contacto con tu equipo de desarrollo y consulta la documentación del [webhook de Atlassian Statuspage](https://support.atlassian.com/statuspage/docs/enable-webhook-notifications/).

## Status actual

Esta sección permite comprobar, en tiempo real, el status general de la plataforma, así como algunos aspectos específicos:

![Página de status](//images.ctfassets.net/alneenqid6w5/7Acmvo2WI9cSZZHCNGdeiM/411eb60547abcfdf7f805eb2085e9ba6/1.png)

- **Checkout:** funcionalidades vinculadas al flujo de creación de pedidos, es decir, el checkout y sus dependencias.
- **WebStore:** navegación por el storefront.
- **Administrative Environment:** navegación en el Admin VTEX y sus módulos, como Gestión de pedidos, Configuración de precios y Logística, por ejemplo.
- **Internal Modules:** otros módulos no incluidos en los grupos anteriores, por ejemplo, VTEX IO.

Los status posibles para cada aspecto anterior son:

- **Operational:** funcionamiento estable.
- **Degraded Performance:** funcionamiento con rendimiento más bajo que lo esperado.
- **Partial Outage:** funcionamiento parcial de las features.
- **Major Outage:** funcionamiento totalmente impactado.
- **Under Maintenance:** sistema en mantenimiento.

![status moduleBox](//images.ctfassets.net/alneenqid6w5/2BkFdVXFXayUCvClXLPSNL/6fd919b0ef2121b6e6005b6466811164/status_moduleBox.PNG)

## Historial de incidentes

La sección de historial de incidentes muestra, en orden cronológico inverso, el registro de incidentes y mantenimientos programados ocurridos en los últimos 15 días en la plataforma.

También es posible visualizar todo el historial de incidentes organizado por meses. Para acceder, haz clic en **Incident History** en la parte inferior de la página.

### Registro de incidentes

Cada registro de incidentes se compone de fecha de ocurrencia, título y evolución del status.

![status incidentBox](//images.ctfassets.net/alneenqid6w5/2NWuofZrmybqso50XpC8Gy/eeda8697db4c1b22067dfa233e628a8c/status_incidentBox.PNG)

- **Título del registro:** título que describe el tipo de clasificación del incidente. Al hacer clic en él, se le redirige a la página con detalles del incidente.
- **Status de incidentes:** cada incidente tiene un ciclo definido, en el que nuestro equipo trabaja para identificar y solucionar los problemas. Conozca un poco más sobre cada etapa de este ciclo:
    - **Investigating:** el primer estado del incidente se dedica al análisis de los impactos, servicios relacionados e identificación de la causa raíz.
    - **Identified:** con el origen del error debidamente identificado, el equipo de desarrollo comienza a realizar acciones para la solución del comportamiento.
    - **Monitoring:** después de concluir las acciones de estabilización del sistema, ya con los indicadores de la operación normalizados, seguimos en alerta con un monitoreo más cercano al desempeño del servicio o módulo impactado.
    - **Resolved:** con el rendimiento de la plataforma estabilizado, volvemos a nuestro monitoreo normal y consideramos que la plataforma está funcionando normalmente.
- **Update:** si algún estado no avanza por un período considerable, registramos este subestado para compartir una actualización en el progreso de los trabajos.

### Registro de mantenimiento programado

Actualizaciones en la plataforma se realizan continuamente y, en general, no afectan la operación de nuestros clientes. Pero, algunas veces, algunas de ellas necesitan que el servicio deje temporalmente de estar disponible.

![status maintenanceBox](//images.ctfassets.net/alneenqid6w5/quaItZNYtCgkpADVjT9aq/8cb4cf7d673e5fa5b710dc1d0ecb89ac/status_maintenanceBox.PNG)

Para casos así, que afectan la estabilidad de la plataforma, usamos el Status para comunicar todos los detalles: cuando se realizará el mantenimiento, el período de duración y el impacto.

Además de l fecha y del título (que siguen el mismo comportamiento de los registros de incidentes), el registro de mantenimiento programado también detalla la evolución del status del evento:

- **Scheduled:** evento de mantenimiento ya definido y programado.
- **In progress:** evento de mantenimiento en progreso.
- **Completed:** evento de mantenimiento finalizado.
