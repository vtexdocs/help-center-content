---
title: 'Resolución de errores de divergencia de precio en pedidos de marketplace'
id: 6MbmPX4SKyRkcTJxVhRna8
status: PUBLISHED
createdAt: 2021-08-03T21:56:44.320Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T21:22:43.831Z
firstPublishedAt: 2021-08-03T22:16:58.511Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: troubleshooting-price-divergence-errors-in-marketplace-orders
legacySlug: resolucion-de-errores-de-divergencia-de-precio-en-pedidos-de-marketplace
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Precios
  - Integraciones
symptomFilters:
  - Error de sincronización
  - Configuración incorrecta
---

Cuando el precio definido por el seller es diferente del precio ofrecido por el marketplace, el pedido puede no integrarse. Para comprobar el error, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos** o ingresa **Pedidos** en la barra de búsqueda.

El error más común de divergencia de precios en pedidos de marketplace es:

- **Precio diferente del valor determinado en VTEX**

## Solución

Para corregir los errores de divergencia de precios en pedidos de marketplace, considera la opción presentada en la siguiente tabla:

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**El precio del pedido en el marketplace es diferente del valor determinado en VTEX.**|El precio del seller y el precio del marketplace divergen. En conectores nativos, el pedido queda retenido hasta que exista una regla de divergencia de precios. En marketplaces VTEX, marketplaces externos y conectores certificados, el pedido se aprueba automáticamente mientras la regla no exista.|[Configura una regla de divergencia de precios](/es/docs/tutorials/configuracion-de-regla-de-divergencia-de-valores). Solo los usuarios con rol Admin Super (Owner) u OMS Full pueden hacerlo. La regla se aplica a todos los marketplaces en los que la tienda es seller. Obtén más información en [¿Por qué el pedido fue cerrado con el precio incorrecto?](/es/troubleshooting/pedido-finalizado-con-precio-incorrecto).|
