---
title: URL que redirigen a EmptySearch
id: 1ldn0vS1KKmHmvniHfr7lp
status: PUBLISHED
createdAt: 2023-03-29T20:28:46.379Z
updatedAt: 2023-05-18T14:46:36.067Z
publishedAt: 2023-05-18T14:46:36.067Z
firstPublishedAt: 2023-03-29T20:28:47.278Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: url-que-redirigen-a-emptysearch
kiStatus: Fixed
internalReference: 322251
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunas URL están redirigiendo a una respuesta EmptySearch.

Hay escenarios donde cuando realizamos una búsqueda en la plataforma, esta no trae el resultado a través de una búsqueda FullText. Este escenario ocurre probablemente después de mover árboles de categorías.






##

## Simulación


Este es un escenario difícil de reproducir, moviendo varias categorías sobre el árbol de categorías de la tienda y luego tratando de, en el escaparate, acceder a las páginas, a menudo dará lugar a esta respuesta de búsqueda vacía.







## Workaround


Registrar una redirección en la plataforma para un término similar y así no mostrar el resultado de búsqueda vacío.

