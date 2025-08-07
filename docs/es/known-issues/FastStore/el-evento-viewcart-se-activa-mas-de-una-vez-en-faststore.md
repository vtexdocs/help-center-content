---
title: "El evento view_cart se activa más de una vez en Faststore"
id: 1skLOmvLxQJpAbTP47PWRT
status: PUBLISHED
createdAt: 2025-01-15T11:32:23.367Z
updatedAt: 2025-04-09T18:54:31.159Z
publishedAt: 2025-04-09T18:54:31.159Z
firstPublishedAt: 2025-01-15T11:32:24.391Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: el-evento-viewcart-se-activa-mas-de-una-vez-en-faststore
locale: es
kiStatus: Fixed
internalReference: 1163447
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando abres el mini carrito en Faststore el evento view_cart se dispara más de una vez.

El problema está probablemente relacionado con esta línea de código.


##

## Simulación



- Utiliza el parámetro `gtm_debug=true`.
- Intenta abrir el minicart
- Ver el evento view_cart siendo disparado más de una vez en dataLayer

Puedes probarlo en nuestra tienda por defecto https://starter.vtex.app/



## Workaround

**
N/A





