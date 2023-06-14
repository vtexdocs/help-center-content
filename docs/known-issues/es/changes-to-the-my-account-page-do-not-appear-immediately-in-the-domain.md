---
title: Cambios en la página de "mi cuenta" no aparecen inmediatamente en el dominio "vtexcommercestable.com.br"
id: iUmuXOYVj97sTpqQnJqAU
status: PUBLISHED
createdAt: 2019-03-19T13:23:11.941Z
updatedAt: 2019-12-31T15:17:19.234Z
publishedAt: 2019-12-31T15:17:19.234Z
firstPublishedAt: 2019-03-19T13:34:24.115Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: cambios-en-la-pagina-de-mi-cuenta-no-aparecen-inmediatamente-en-el-dominio
kiStatus: Closed
internalReference: 
---

## Sumario

Al cambiar datos en la página de "mi cuenta" por el dominio "vtexcommercestable.com.br", la nueva información introducida no se puede ver inmediatamente - cuando la página se vuelve a cargar todavía se muestran los datos antiguos.

Este problema se limita a la versión de legado de la página de cuenta.

## Simulación

1. Acceda a {tienda}.vtexcommercestable.com.br/account;
2. Inicie sesión y espere a ser redirigido a la página de mi cuenta.
3. Cambie los datos y espere a que la página vuelva a cargar;
4. Los datos mostrados son los de antes del cambio.

## Workaround

Esto ocurre porque los datos anteriores quedaron en la caché del navegador, que después de recargar la página, entregó el contenido sin consultar al servidor.

Para evitar la caché del navegador, basta con actualizar la página con `Ctrl/Cmd + Shift + R`. Con eso la página no utilizará la caché y los datos mostrados serán los nuevos.

Esto ocurre sólo en el ambiente "vtexcommercestable.com.br" y, aunque se refiere a la versión en producción de la tienda, este escenario no ocurrirá en su dominio final.

El escenario en cuestión ya está corregido definitivamente en la nueva App de "My Account" que reemplazará la versión de legado pronto.

