---
title: "La configuración \"Bloquea las rutas por defecto en otros enlaces\" en Rewriter puede conducir a la página 'No encontrado' después de aplicar los filtros."
id: 5JQOG3F10eJTyDWb6wicSx
status: PUBLISHED
createdAt: 2025-02-06T22:06:32.453Z
updatedAt: 2025-02-06T22:06:33.228Z
publishedAt: 2025-02-06T22:06:33.228Z
firstPublishedAt: 2025-02-06T22:06:33.228Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: la-configuracion-bloquea-las-rutas-por-defecto-en-otros-enlaces-en-rewriter-puede-conducir-a-la-pagina-no-encontrado-despues-de-aplicar-los-filtros
locale: es
kiStatus: Backlog
internalReference: 1175760
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Este problema sólo se produce en tiendas transfronterizas. Al aplicar determinados filtros en una página de búsqueda, la página se rompe y redirige a una página "No encontrado". El problema está causado por la configuración "Bloquea rutas predeterminadas en otros enlaces" en la aplicación Rewriter.


##

## Simulación



1. Accede a la página de búsqueda de una tienda transfronteriza.
2. Aplicar uno o varios filtros específicos.
3. Observe que al intentar cargar los resultados, la página redirige a una página "No encontrado".



## Workaround


Estableciendo la propiedad `preventRouteChange` a `true` en el componente Resultado de Búsqueda se evita que ocurra el problema.





