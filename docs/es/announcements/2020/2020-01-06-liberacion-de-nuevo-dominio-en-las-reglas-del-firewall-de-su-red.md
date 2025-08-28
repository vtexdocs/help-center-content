---
title: 'Liberación de nuevo dominio en las reglas del firewall de su red'
id: 1ib1hW8UJlR7SniuFTHzx4
status: PUBLISHED
createdAt: 2020-01-06T17:05:54.548Z
updatedAt: 2020-01-08T19:28:41.329Z
publishedAt: 2020-01-08T19:28:41.329Z
contentType: updates
productTeam: Reliability
author: authors_31
slugEN: 2020-01-06-configuring-your-networks-firewall-access-rules-to-allow-the-new-domain
locale: es
legacySlug: liberacion-de-nuevo-dominio-en-las-reglas-del-firewall-de-su-red
announcementImageID: 'undefined'
announcementSynopsisES: 'VTEX cambiará el dominio que carga archivos. Revise las reglas del firewall para garantizar la autorización del dominio.'
---

El día __20 de enero de 2020__, VTEX realizará una alteración en el dominio responsable de cargar los archivos de imagen, javascript y CSS dentro de la plataforma. Verifique si la red de su operación, a través del firewall, tiene alguna regla que impida la carga del nuevo dominio.  

## ¿Qué va a cambiar?

El dominio `vteximg.com.br`, responsable de entregar los archivos de imagen, javascript y CSS de su tienda, será reemplazado por el nuevo dominio `vtexassets.com`, tanto para el contexto de compra, es decir, la navegación del consumidor en su sitio, como para el panel administrativo.

## ¿Por qué estamos haciendo este cambio?

El nuevo dominio vtexassets.com utiliza un algoritmo de compresión de archivos más eficaz, que garantiza una carga con mayor performance y, por lo tanto, una experiencia más agradable para el usuario.

## ¿Qué necesita hacerse?

Póngase en contacto con el equipo de TI de su operación, responsable de las configuraciones de red, firewall e infraestructura, enviando este mensaje. 

Este equipo deberá __revisar las reglas de firewall y ajustarlas, garantizando la liberación del dominio vtexassets.com__.

> ℹ️ Nota: No necesitará hacer ningún ajuste en el front end ya que el dominio `vteximg.com.br` continuará trabajando para las personalizaciones.

## ¿Qué impactos puede sufrir su operación si el ajuste no ocurre?

Si no se produce este ajuste, a partir de la fecha mencionada en este correo electrónico, el panel administrativo de su tienda puede comportarse de manera inesperada, provocando que la navegación y las acciones presenten diversos errores.
