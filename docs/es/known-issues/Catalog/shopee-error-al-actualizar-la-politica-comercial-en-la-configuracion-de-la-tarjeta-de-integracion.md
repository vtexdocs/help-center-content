---
title: "[Shopee] Error al actualizar la política comercial en la configuración de la tarjeta de integración"
id: cYd6EPrLcpjZNK51ADKpz
status: PUBLISHED
createdAt: 2025-06-04T20:42:25.961Z
updatedAt: 2025-06-04T20:42:27.041Z
publishedAt: 2025-06-04T20:42:27.041Z
firstPublishedAt: 2025-06-04T20:42:27.041Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: shopee-error-al-actualizar-la-politica-comercial-en-la-configuracion-de-la-tarjeta-de-integracion
locale: es
kiStatus: Backlog
internalReference: 1238883
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al cambiar la política comercial de una cuenta Shopee ya configurada, los artículos previamente vinculados a la antigua política permanecen activos. No existe un proceso automático para desactivar esos artículos o volver a publicarlos bajo la nueva política comercial, lo que provoca problemas en el catálogo y fallos en los pedidos.


##

## Simulación



- Configurar una cuenta Shopee en VTEX utilizando una política comercial (por ejemplo, Política A).
- Publica SKUs como de costumbre.
- Cambia la política comercial por una nueva (por ejemplo, Política B).
- Los artículos previamente vinculados a la Política A permanecen activos y provocan errores en Bridge, como:
["fields":0, "error":{"code": "ORDoo2", "message": "El artículo {item description} ya no está disponible", "exception":null}, "operationId": {número de operationId}"]


##

## Workaround


Ponga a cero el inventario de todos los artículos vinculados a la antigua política comercial.
Espere hasta que el mercado procese correctamente esta actualización.
A continuación, actualice la cuenta con la nueva política comercial y vuelva a publicar los artículos.





