---
title: 'Generar archivo HAR para solucionar problemas en la tienda'
id: 15xVlw8nuakk2k6Cao4k2Q
status: PUBLISHED
createdAt: 2018-02-23T13:16:02.404Z
updatedAt: 2024-12-04T10:47:24.081Z
publishedAt: 2024-12-04T10:47:24.081Z
firstPublishedAt: 2018-02-23T14:02:06.722Z
contentType: tutorial
productTeam: Others
author: authors_24
slugEN: generating-a-har-file
legacySlug: generar-archivo-har
locale: es
subcategoryId: 1yB08KlKzqJOdc0bn38HaY
---

Al buscar soluciones para un problema complejo, puede ser que nuestro equipo de soporte necesite recibir información adicional sobre los requests web generados en su navegador mientras el problema ocurre.

Una feature útil para esto es el log de requests generado por la herramienta de desarrollador del navegador (el _Dev Tools_). A través de él usted puede generar un archivo `.HAR`, que contiene información detallada sobre cada request.

> ℹ️ Para generar el archivo `.HAR`, recomendamos utilizar el navegador Google Chrome, ya que es un proceso sencillo, pero puedes usar otros navegadores, como Mozilla Firefox, Safari o Microsoft Edge.

<br>

Consulte la siguiente tabla para ver la documentación con las instrucciones de exportación de archivos para cada navegador:

| **Navegador** | **Documentación** |
| ---------- | ---------- |
| Google Chrome (recomendado) | Google: [Capture el tráfico de las sesiones web](https://support.google.com/admanager/answer/10358597?hl=es-419&sjid=2751223489427809764-SA) |
| Mozilla Firefox, Safari o Microsoft Edge | Zendesk: [Generación de un archivo HAR para la resolución de problemas](https://support.zendesk.com/hc/es/articles/4408828867098-Generacion-de-un-archivo-HAR-para-la-resolucion-de-problemas) |

Después de exportar el archivo `.HAR`, basta enviarlo a nuestro equipo de Soporte VTEX. Cuando utilice el Google Chrome, asegúrese de configurar la [opción de exportación con datos sensibles](https://developer.chrome.com/blog/new-in-devtools-130?hl=es-419#har).

> ❗ El archivo HAR contiene información sensible sobre su tienda, por lo tanto compartalo sólo con el equipo de [Soporte VTEX](https://help.vtex.com/es/support).

