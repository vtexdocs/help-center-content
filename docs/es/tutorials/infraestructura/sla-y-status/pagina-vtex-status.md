---
title: 'Página VTEX Status'
id: gPhqDn9IQ3c67wbJEX3JJ
status: PUBLISHED
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-12-21T17:10:08.895Z
publishedAt: 2023-12-21T17:10:08.895Z
firstPublishedAt: 2019-01-14T20:01:43.663Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-status-page
legacySlug: untitled-entry-2019-01-14-at-07-58-58, status-vtex-entienda-como-funciona-el-status-de-la-plataforma, pagina-de-status-de-la-plataforma
locale: es
subcategoryId: 5PYkoNDZyo2G80yiiqG2YW
---

La página [VTEX Status](https://status.vtex.com/) te permite monitorear la estabilidad de la plataforma en tiempo real y acceder al historial completo de incidentes.

Nuestro equipo informa los eventos cada vez que nuestro sistema de monitoreo automático identifica una inestabilidad en los módulos de la plataforma. Cualquier mantenimiento programado también se comunica en detalle.

![statuspage-1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_1.png)

En este artículo, se describen los elementos de la página de status de la plataforma VTEX, desarrollada con la herramienta [incident.io](https://incident.io/):

* [Informar un problema](#informar-un-problema)
* [Notificaciones](#notificaciones)
* [Status general](#status-general)
* [Status de los sistemas](#status-de-los-sistemas)
* [Calendario](#calendario)
* [Registro de incidentes](#registro-de-incidentes)
* [Registro de mantenimiento programado](#registro-de-mantenimiento-programado)

## Informar un problema

Al hacer clic en el botón `Report a problem` en la parte superior derecha de la página, puedes ponerte en contacto con [nuestro equipo de soporte](https://support.vtex.com/hc/es-es) para informar alguna instabilidad en la plataforma.

## Notificaciones

El botón `Subscribe to updates` en la parte superior derecha de la página te da la opción de suscribirte para recibir actualizaciones a través de email, [feed RSS](https://rss.com/blog/how-do-rss-feeds-work/) o [Slack](https://slack.com/).

La opción de inscripción por email te permite decidir los componentes específicos para los que deseas recibir notificaciones. Solo tienes que marcar la opción **Subscribe to specific components** y, luego, los componentes que deseas monitorear.

![statuspage-2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_2.png)

## Status general

Esta sección te permite ver el status general de la plataforma: fully operational (completamente operativa), experiencing issues (experimentando problemas) o undergoing maintenance (mantenimiento en curso).

Cuando algún problema o mantenimiento está afectando un componente, se indica dicho componente y se incluye una explicación del evento.  A continuación se muestran algunos ejemplos.

![statuspage-3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_3.png)

![statuspage-4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_4.png)

![statuspage-5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_5.png)

## Status de los sistemas

Esta sección te permite verificar en tiempo real el status de cada sistema de la plataforma y de sus componentes.

![statuspage-6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_6.png)

Al hacer clic en la flecha <i class="fas fa-chevron-down"></i> al lado del número de componentes, verás el status de los componentes específicos de cada sistema.

Si se trata de un mantenimiento programado para una fecha futura, también verás el botón `Upcoming maintenance scheduled`, como se ilustra a continuación. Al pasar el mouse sobre el botón, se mostrará el evento de mantenimiento programado. Puedes hacer clic en el evento para ver su registro.

![statuspage-7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_7.png)

Los posibles status para cada componente son:

* **Operational:** funcionamiento estable.
* **Degraded performance:** funcionamiento con rendimiento inferior al esperado.
* **Partial outage:** funcionamiento parcial de las funcionalidades.
* **Full outage:** funcionamiento completamente impactado.
* **Under maintenance:** mantenimiento en curso en el sistema.

A continuación, se describen los componentes mostrados en la página.

### Storefront

Problemas de navegación en el storefront.

* **Portal/CMS:** inestabilidad observada en tiendas desarrolladas con la tecnología de storefront [CMS Portal (Legado)](/es/docs/tracks/cms-portal-legado).
* **Store Framework:** inestabilidad observada en tiendas desarrolladas con la tecnología de storefront[ Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework).
* **FastStore:** inestabilidad observada en tiendas desarrolladas con la tecnología de storefront[ FastStore](https://www.faststore.dev/).
* **Sales App:** inestabilidad observada en [Sales App](/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc), la solución de VTEX para ventas asistidas en tiendas físicas.
* **3rd Party Apps:** inestabilidad observada en extensiones mantenidas por terceros.

### Checkout

Problemas en funcionalidades relacionadas con el flujo de creación de pedidos, es decir, en el checkout y sus dependencias.

* **Order Placement:** interrupciones en el flujo de ventas.
* **Shipping Calculation:** inconsistencias en las condiciones de envío.
* **Pricing Calculation:** inconsistencias en los precios, promociones o cargos.
* **Payments Gateway:** inconsistencias en las transacciones de pago.
* **Payment Connectors:** inestabilidad observada en proveedores de pago específicos.

### Admin

Problemas en la navegación del Admin VTEX y sus módulos, como por ejemplo gestión de pedidos, configuración de precio y logística.

* **Catalog Management:** interrupciones en la actualización del contenido del catálogo (detalles del producto, imágenes, precios, stock, indexación de búsqueda, etc.).
* **Content Management:** interrupciones en la actualización de contenido no relacionado con productos (banners, landing pages, promociones, cupones, tarjetas de regalo, etc.).
* **Order Management:** interrupciones en el fulfillment de pedidos.
* **Marketplace Connectors:** instabilidad observada en conectores de marketplace específicos.
* **Admin Operations:** otros impactos a la experiencia de los retailers, fuera del ámbito de otros componentes del Admin.

### Developer Tools

Problemas relacionados con el desarrollo de aplicaciones, integraciones y temas de tiendas.

* **VTEX IO:** inestabilidad observada en aplicaciones desarrolladas en VTEX IO.
* **Master Data:** inestabilidad observada en integraciones que dependen de Master Data.
* **API Integrations:** otros impactos en el uso de las API de VTEX.

## Calendario

La sección del calendario muestra el registro de incidentes y mantenimientos programados que ocurrieron cada día del mes actual.

Para navegar a meses anteriores, haz clic en la flecha `<`.

Para ver los eventos ocurridos en un día específico, pasa el mouse sobre la fecha. Para acceder a la página que contiene el registro completo del evento, haz clic en el incidente o el mantenimiento indicado en la fecha.

![statuspage-8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_8.png)

> ⚠️ Si un mantenimiento programado dura más de un día, solo se marcará la fecha de inicio en el calendario. Debes abrir el [registro de mantenimiento](#registro-de-mantenimiento-programado) para ver la fecha de inicio y la fecha de fin.

A continueación, describimos la información disponible en el registro del incidente y en el registro de mantenimiento programado.

## Registro de incidentes

La página de detalles del incidente contiene la siguiente información:

![status-page-9-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_9.png)

* **Título:** título que describe el incidente.
* **Status:** cada incidente tiene un ciclo definido en que nuestro equipo trabaja para identificar y solucionar los problemas. Las etapas del ciclo son:
    * **Investigating:** la primera etapa de un incidente consiste en a analizar el impacto, servicios relacionados e identificar la causa raíz.
    * **Identified:** luego de que el error es debidamente identificado, el equipo de desarrollo empieza a ejecutar acciones para solucionar el comportamiento.
    * **Monitoring:** una vez concluidas las acciones de estabilización del sistema y normalizados los indicadores de operación, continuamos en estado de alerta y monitoreamos de cerca el rendimiento del servicio o módulo impactado.
    * **Resolved:** cuando el rendimiento de la plataforma está estabilizado, volvemos a nuestro monitoreo normal y consideramos que la plataforma funciona como se espera.
* **Duración:** periodo de resolución del incidente.
* **Resumen:** texto que resume el incidente.
* **Componentes afectados:** los componentes de la plataforma que fueron afectados por el incidente. Al hacer clic en la flecha al lado del número de componentes, puedes ver el impacto en componentes más específicos.
* **Actualizaciones:** línea de tiempo con las actualizaciones y cambios de status del incidente.

Al hacer clic en el botón `Subscribe to updates` en el registro de un incidente, te da la opción de inscribirte para recibir actualizaciones sobre ese incidente específico a través de email, feed RSS o Slack.

## Registro de mantenimiento programado

Continuamente se realizan actualizaciones en la plataforma y, en general, dichas actualizaciones no impactan la operación de nuestros clientes. Sin embargo, algunas actualizaciones requieren interrumpir temporalmente la disponibilidad de un servicio.

En situaciones en que la estabilidad de la plataforma se vea afectada, empleamos la página de status de VTEX para comunicar todos los detalles: fecha de ejecución del mantenimiento, duración e impacto.

El registro de mantenimiento programado muestra la misma información que el registro de incidente. Los posibles status de mantenimiento programado son:

* **Scheduled:** evento de mantenimiento programado.
* **In progress:** evento de mantenimiento en curso.
* **Complete:** evento de mantenimiento completado.

A continuación, se muestran ejemplos del status y la línea de tiempo de un mantenimiento programado.

![statuspage-10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_10.png)

![statuspage-11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/infraestructura/sla-y-status/pagina-vtex-status_11.png)
