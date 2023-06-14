---
title: 'Logo del seller no aparece en la página de producto'
id: 1WIIPZibFegYSsKIIscIse
status: PUBLISHED
createdAt: 2018-05-08T19:35:42.171Z
updatedAt: 2022-12-22T14:39:53.593Z
publishedAt: 2022-12-22T14:39:53.593Z
firstPublishedAt: 2018-05-08T23:02:31.503Z
contentType: knownIssue
productTeam: Channels
author: 6qOjO5gpEs8scQ8OugaEaW
tag: Portal
slug: logo-del-seller-no-aparece-en-la-pagina-de-producto
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al vincular un producto del Suggestion a un seller que no tiene logo catastrada y posteriormente registrar una logo para el seller, la página de producto no muestra la logo, sólo el nombre del seller registrado.


## Simulación

1. Registrar un [nuevo seller](/es/tutorial/configuracion-de-seller) sin la logo.
2. Recibir y [aprobar productos](/es/tutorial/aprobacion-de-sugerencias-de-skus) de este seller en el Suggestion.
3. Registrar la logo del seller.
4. Acceder a la página del producto en el marketplace.

## Workaround

La primera opción es forzar la reindexación del producto en el marketplace.

En el caso de que esta acción no resuelva el problema, será necesario realizar la exclusión del producto en SKUs de Sellers ([Excluir productos del seller](/es/faq/cual-es-la-diferencia-entre-desvincular-y-excluir-un-sku-seller)). Después de la exclusión, es necesario pedir al seller que realice la reindexación del producto para que el marketplace sea notificado una vez más.

