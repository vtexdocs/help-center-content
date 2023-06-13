---
title: Rastreo Google Search Console - Errores de rastreo
id: tutorials_568
status: PUBLISHED
createdAt: 2017-04-27T22:00:16.796Z
updatedAt: 2020-04-06T20:03:36.157Z
publishedAt: 2020-04-06T20:03:36.157Z
firstPublishedAt: 2017-04-27T23:03:39.657Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: rastreo-google-search-console-errores-de-rastreo
legacySlug: rastreo-google-search-console-errores-de-rastreo
subcategory: 1luKrYptdi8WoMYckakUaM
---

La sesión de **Errores de rastreo** de Google Search Console tienen la funcionalidad de listar todos los errores identificados por los crawlers de Google.

La sesión de Errores de rastreo posee dos grupos de verificación: **Errores del sitio** y **Errores de URL**.

### Errores del sitio.

Verifica la calidad de los dos principales medios de acceso al sitio

- **DNS:** Muestra el histórico de errores de request al DNS de la tienda.
En caso de errores en el DNS identificados, la tienda debe de verificar las configuraciones de su DNS, si el DNS no fue apuntado directo para VTEX también sera necesario consultar la disponibilidad del servicio de hospedaje.
- **Conectividad del servidor:** Muestra el histórico de los errores de conectividad con: limite de tiempo de conexión, conexión fallida o sin respuesta.
En caso de errores de conectividad de servidor identificados, sera necesario analizar la continuidad de los errores. Si es un error puntual puede ser asociado a una inestabilidad de la tienda, ya si el error es continuo sera necesaria la verificación del servidor de hospedaje.
- **Búsqueda de robots.txt:** Muestra el histórico de los errores de las consultas de robots.txt de la tienda.
En caso de errores identificados el usuario deberá consultar si el archivo robots.txt esta accesible a traves de la url de la tienda en producción. Ejemplo: http://www.tienda.com/robots.txt

### Errores de URL

Esta sección muestra los errores identificados por los crawlers de Google segmentados por dispositivos desde la ultima acción de correción.

- **Desktop:** lista todos los errores identificados por el crawler
- **Mobile:** lista los errores identificados apenas por los crawlers que simulan un dispositivo mobile

## Optimizar la Indexación

Para la optimización de la indexacion de la tienda en Google Search Console será necesario seguir los siguientes pasos:

### Consultas

Continuamente los crawler de Google navegan por todos los links identificados en la web. Si al acceder a un link retorna un error, el crawler crea un registro para esa pagina.

Google Search Console muestra los registros desde la ultima corrección en el panel. Si no se ha realizado la corrección o si hace mucho tiempo nada fue hecho, sera necesario marcar todos los errores como corregidos. Así todo el histórico es eliminado y se posibilita una nueva consulta y la correcta identificación de las URL que mantienen el error.

Los crawlers de Search Console identifican los siguientes errores:

- **301 – Moved Permanently:** Es clasificado como error, pero en realidad es un retorno que indica que la URL consultada fue redireccionada para otra URL.
- **404 – Not Found:** Página no encontrada
- **500 – Internal Server Error:** &#8220;Houston, I have problem!&#8221; &#8211; Hay algún problema en el servidor o en los scripts que se utilizan en la tienda. Generalmente el error 500 se debe a alguna regla errada o error de sintaxis de la URL indexada. Un parámetro de filtro que no este mas disponible, también puede generar este error.

### Corrección 

- **Mapeo:** En este caso primero se debe identificar las URLs importantes, aquellas que desee mantener el link indexado. Luego, sera necesario crear un mapeo de URL en el modulo de Portal de VTEX para redireccionar el trafico a una URL accesible y relacionada a la URL que fue identificada con errores. Sepa como crear un mapeo de URL en VTEX.
- **Exclusión de indexación:** En caso de que se identifiquen las URL con error y las mismas no posean una importancia estratégica para la tienda, sera necesario excluir de la indexación la URL con la opcion &#8220;Excluir la URL indexada&#8221; en Google Search Console.

