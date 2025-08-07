---
title: "Producto con 'Mostrar si no hay existencias' configurado como falso devuelve 200 en lugar de 404"
id: 5DV3Wpp568wKR8LNvbwurd
status: PUBLISHED
createdAt: 2025-05-27T17:32:29.271Z
updatedAt: 2025-05-27T17:32:29.806Z
publishedAt: 2025-05-27T17:32:29.806Z
firstPublishedAt: 2025-05-27T17:32:29.806Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: producto-con-mostrar-si-no-hay-existencias-configurado-como-falso-devuelve-200-en-lugar-de-404
locale: es
kiStatus: Backlog
internalReference: 1233974
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación




1. Asegurarse de que existe un producto en VTEX.
2. Poner a cero el inventario del producto.
3. 3. Establezca la bandera `Mostrar cuando no hay existencias` a `false`.
4. Intente acceder a la URL PDP del producto.
5. 5. Observe que la petición devuelve un estado `200 OK` y redirige a una página con `ProductLinkNotFound` en la URL.



## Workaround


N/A





