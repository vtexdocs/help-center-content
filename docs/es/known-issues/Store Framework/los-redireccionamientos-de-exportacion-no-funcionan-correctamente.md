---
title: "Los redireccionamientos de exportación no funcionan correctamente"
id: 5WoiJDQCSMDCwCn1auNwC4
status: PUBLISHED
createdAt: 2022-04-05T12:53:18.824Z
updatedAt: 2024-01-29T18:40:08.833Z
publishedAt: 2024-01-29T18:40:08.833Z
firstPublishedAt: 2022-04-05T12:53:19.875Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: los-redireccionamientos-de-exportacion-no-funcionan-correctamente
locale: es
kiStatus: Backlog
internalReference: 537962
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cuando se intenta exportar la redirección, ya sea a través del terminal o a través de la página en el CMS trae diferentes tamaños de archivos, con posibles resultados diferentes en el interior, este no es el comportamiento esperado ya que no hay cambios realizados en las redirecciones que podrían explicar las diferencias.



##

## Simulación



(Terminal) Siga los pasos de la documentación: https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-managing-url-redirects

Comprueba los ficheros devueltos y podrás ver en algunos casos la diferencia entre los dos ficheros extraídos.

(Admin UI) Ir al admin > CMS > Redirecciones cambiar entre las páginas en la paginación y haga clic en exportar podrás ver las diferencias en los archivos que se devuelven.



## Workaround


N/A





