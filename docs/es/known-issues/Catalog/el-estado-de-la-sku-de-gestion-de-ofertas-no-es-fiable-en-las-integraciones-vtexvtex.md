---
title: "Ofertas Las interacciones de sku's de gestión no son estables"
id: 7o3IEgPiDB9vYVJ8RS50jl
status: PUBLISHED
createdAt: 2023-02-02T16:29:12.305Z
updatedAt: 2023-02-08T20:05:01.761Z
publishedAt: 2023-02-08T20:05:01.761Z
firstPublishedAt: 2023-02-02T16:29:12.925Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-estado-de-la-sku-de-gestion-de-ofertas-no-es-fiable-en-las-integraciones-vtexvtex
locale: es
kiStatus: Backlog
internalReference: 745738
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Actualmente el sistema de gestión de ofertas muestra el estado de los skus enviados desde un vendedor a un marketplace y sus interacciones y logs de acciones como actualizaciones de precio y stock.

Estos registros no son estables en este sistema, a veces se envían correctamente y otras no.

Un ejemplo más claro es:

Si al intentar enviar el sku se produce un error, el estado del sku cambia a "error" en la interfaz de usuario.

Después de eso, el vendedor puede ajustar el sku de acuerdo a lo que necesita ser corregido y volver a indexar el sku con el fin de ser enviado de nuevo.

En esta acción, aunque el sku se envíe correctamente al marketplace y esté disponible para su aprobación por su parte, el sku en el sistema de gestión de ofertas permanece (a veces) con un estado de error.

Este estado es incorrecto, ya que el sku ya se ha enviado.

Sin embargo, esto no ocurre siempre. Esto significa que el estado no es fiable.


## Simulación

1. Crear un sku en la parte vendedora con algún tipo de error (sin imagen, por ejemplo);
2. 2. Envía la sku al mercado. Observa que tendrá un estado de error en la IU de gestión de ofertas;
3. Corrige el error (en este caso, añade imágenes) y vuelve a indexar el sku;
4. Puede ocurrir que el estado de error no desaparezca en la interfaz de usuario a pesar de que el sku ya se ha enviado correctamente al mercado.

## Workaround

No hay necesidad de tener una solución, ya que el sku se envió correctamente (o las actualizaciones se hicieron correctamente).


