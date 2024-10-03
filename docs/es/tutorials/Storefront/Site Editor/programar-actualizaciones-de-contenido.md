---
title: 'Programar actualizaciones de contenido'
id: 5L93gED3wgSRoWpFJlJ2ns
status: PUBLISHED
createdAt: 2021-10-28T18:52:57.668Z
updatedAt: 2023-03-27T13:53:54.461Z
publishedAt: 2023-03-27T13:53:54.461Z
firstPublishedAt: 2021-12-16T17:04:14.266Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: scheduling-content-updates
locale: es
legacySlug: programar-actualizaciones-de-contenido
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

>⚠️ La actualización programada puede tardar hasta 30 minutos en surtir efecto y aparecer en su página.

Después de [crear una nueva versión de contenido](https://help.vtex.com/es/tutorial/gerenciando-versoes-de-conteudo--4loXo98CZncY0NnjKrScbG?&utm_source=autocomplete), puedes programar su publicación en tu tienda a través del recurso **Visibilidad**.

El recurso Visibilidad te permite activar inmediatamente la nueva versión del contenido en tu tienda, programar cuándo publicar el contenido o cuándo desactivar la nueva versión. También puedes elegir dónde quieres aplicar la nueva versión: en una ruta (**esta URL**) o en rutas que comparten la misma plantilla (**esta plantilla**).

Utilizaremos de ejemplo el bloque [Layout del slider](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) para activar una nueva versión de contenido para tu tienda.

1. En el Admin VTEX, accede a  **Storefront** > **Site Editor.**

2. Haz clic en el bloque deseado (por ejemplo, Layout del slider) y selecciona **VERSIONES.**

3. Haz clic en el contenido que deseas publicar.
4. En la sección **Visibilidad**, selecciona cuándo se activará el contenido.

| Función    | Descripción|
| ---------- | ---------- |
| **Activar ahora** | El contenido se activará inmediatamente. |
| **Estabelecer una fecha de inicio** | Establece la fecha y la hora para que se active el contenido. |
| **Estabelecer una fecha de fin** | Establece la fecha y la hora para que se desactive el contenido. Una vez desactivado el contenido, la última versión lo sustituirá.|

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Si no seleccionas las opciones de la sección Visibilidad, solo tendrás una nueva versión guardada, pero no se publicará en tu vitrina.
</div>
5. Después de seleccionar cuándo estará disponible el contenido, elige dónde quieres que se aplique:

<ul>
  <li><b>esta URL:</b> El contenido solo está disponible para una ruta de su elección.</li>
  <li><b>este template:</b> El contenido está disponible para todas las rutas con el mismo template.</li>
</ul>
6. Una vez que hayas configurado la sección de visibilidad, haz clic en `GUARDAR`.

