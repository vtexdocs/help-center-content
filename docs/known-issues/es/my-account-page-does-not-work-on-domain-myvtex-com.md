---
title: Página "Mi Cuenta" no funciona en el dominio "myvtex.com"
id: 1EW2Fuwbt3vO9uF8b9zRz4
status: PUBLISHED
createdAt: 2019-03-19T13:18:13.540Z
updatedAt: 2019-12-31T15:17:09.999Z
publishedAt: 2019-12-31T15:17:09.999Z
firstPublishedAt: 2019-03-19T13:21:54.767Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: pagina-mi-cuenta-no-funciona-en-el-dominio-myvtex-com
kiStatus: Closed
internalReference: 
---

## Sumario

Al intentar cambiar datos en la página "Mi Cuenta" (`/account`) por el dominio `myvtex.com`, éstos no se actualizan correctamente.

Este problema se limita a la versión de legado de la página de cuenta.

## Simulación

1. Acceda a `{tienda}.myvtex.com/account`;
2. Inicie sesión y espere a ser redirigido a la página de "Mi Cuenta";
3. Intente cambiar los datos.

Usted puede observar que habrá un error 404 en los requests de DevTools.

## Workaround

Este escenario se produce solamente en el ambiente "myvtex.com" y se puede evitar al utilizar "vtexcommercestable.com.br".

Como el dominio final de la tienda se basa en el "vtexcommercestable", este problema no va a ocurrir en producción.

El escenario en cuestión ya está corregido definitivamente en la nueva App de "My Account" que pronto reemplazará la versión de legado.

