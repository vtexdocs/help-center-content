---
title: Página de status de la plataforma
id: gPhqDn9IQ3c67wbJEX3JJ
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-05-08T20:24:24.256Z
publishedAt: 2023-05-08T20:24:24.256Z
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

![status resumeBox](//images.ctfassets.net/alneenqid6w5/fCbfgeEf678XnOvWONnIf/c0ab3d6ae46a765a0c7015793a04e0e0/status_resumeBox.PNG)

A continuación, detallamos todos los elementos que forman parte del Status VTEX y explicamos las informaciones que se presentan allá:

## Resume Box
__Resume bar:__ informa, de manera general, el estado de la plataforma en tiempo real.

__View historical uptime:__ al hacer clic, usted podrá ver el status diario de la plataforma, en una estructura de calendario. Cada día tiene un color que indica el estado general de la plataforma en esa fecha.

Significado de los colores:
__Verde:__ no hubo registro de incidentes o mantenimiento.
__Amarillo:__ hubo algún incidente o mantenimiento con impacto superior a 10 minutos (e inferior a 30 min.).
__Naranja:__ hubo algún incidente o mantenimiento con impacto superior a 30 minutos (e inferior a 1 hora).
__Rojo:__ hubo algún incidente o mantenimiento con impacto superior a 1 hora.

__Module Status:__ aquí, destacamos el estado de los módulos más importantes en el flujo de compra y operación de la tienda. Cuando un incidente está activo y es relevante para uno de estos módulos, su status también se actualiza.

Los estados posibles de los módulos son:

- **Operational:** funcionamiento estable.
- **Degraded Performance:** funcionamiento con rendimiento más bajo que lo esperado.
- **Partial Outage:** funcionamiento parcial de las features.
- **Major Outage:** funcionamiento totalmente impactado.
- **Under Maintenance:** sistema en mantenimiento.

![status moduleBox](//images.ctfassets.net/alneenqid6w5/2BkFdVXFXayUCvClXLPSNL/6fd919b0ef2121b6e6005b6466811164/status_moduleBox.PNG)

## Lista de incidentes

La lista de incidentes muestra, de manera cronológica, el registro de incidentes y mantenimientos programados de los últimos 14 días en la plataforma. También es posible visualizar todo el historial de incidentes organizados por mes: basta con acceder al enlace `Incident History` en el footer de la página.

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
