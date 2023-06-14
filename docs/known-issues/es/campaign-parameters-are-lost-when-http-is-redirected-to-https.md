---
title: 'Parámetros de campañas son perdidos en redireción de HTTP para HTTPS'
id: 2GHGz8HUBiqw4mqI0uSmu6
status: PUBLISHED
createdAt: 2017-08-16T20:33:02.765Z
updatedAt: 2019-12-31T15:17:50.475Z
publishedAt: 2019-12-31T15:17:50.475Z
firstPublishedAt: 2017-08-16T20:52:08.081Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slug: parametros-de-campanas-son-perdidos-en-redirecion-de-http-para-https
kiStatus: Fixed
internalReference: 
---

## Sumario

Re-direccionamiento de HTTP a HTTPS remueve parámetros no reconocidos por VTEX.

Una tienda que posea alguna URL (en el protocolo HTTP) indexada en sitios externos (Facebook, Google, Blogs etc.), al configurar esa URL para utilizar el protocolo HTTPS en VTEX, cuando el cliente acceda a ese link (en el sitio externo), ocurrirá un re-direccionamiento, en VTEX, de HTTP a HTTPS.

Ese re-direccionamiento remueve parámetros (del querystring) no reconocidos, pero normalmente muy importantes para rastreo de campañas.

## Actualización: problema solucionado

Con el uso de la [nueva CDN de VTEX](/es/tutorial/activar-nueva-cdn-de-vtex), el re-direccionamiento entre páginas mantiene los parámetros originales.

## Simulación

1. Configurar un directorio (carpeta) para utilizar el protocolo HTTPS. Ver el artículo [Cambiar el protocolo HTTP o HTTPS de las páginas del sitio](/es/faq/como-usar-el-protocolo-https-en-la-tienda) para aplicar esa configuración. 
2. En la tienda, acceder a ese directorio (carpeta) utilizando el protocolo HTTP y pasando algún parámetro en el QueryString. Ej.: `http://{{AccountName}}.vtexcommercestable.com.br/blackfriday?gclid=123`
3. VTEX aplicará un re-direccionamiento de HTTP a HTTPS, pero el parámetro “gclid” del ejemplo anterior, no será también repasado al re-direccionamiento, o sea, la página se cargará sin ese parámetro.

## Workaround

Modifica las URLs en todos los sitios externos, adaptando el link de HTTP a HTTPS. Como en ese caso no habrá el re-direccionamiento, no ocurrirá el problema y el parámetro se cargará correctamente.

