---
title: 'Skus recibidos: Las aprobaciones de asociación no añaden el canal de ventas disponible del vendedor en el producto cuando el sku es vendido por más de 1 vendedor.'
id: 5ob4jquCm8l84MhX6285h8
status: PUBLISHED
createdAt: 2022-04-18T17:15:41.091Z
updatedAt: 2024-02-16T20:25:58.313Z
publishedAt: 2024-02-16T20:25:58.313Z
firstPublishedAt: 2022-04-18T17:15:41.436Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: received-skus-association-approvals-dont-add-the-sellers-available-sales-channel-on-the-product-when-the-sku-is-sold-by-more-than-1-seller
locale: es
kiStatus: No Fix
internalReference: 562472
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Un producto vendido por otro vendedor en el catálogo del mercado está disponible para ser vendido en el canal de ventas de este vendedor.

Sin embargo, si un nuevo vendedor también envía el producto y el marketplace realiza una acción de asociación en el módulo Skus Recibidos, es decir, enlace a otro producto o enlace a otro sku, el canal de venta de este nuevo vendedor no se añadirá al producto, quedando sólo el canal de venta del vendedor original.


##

## Simulación



1. El vendedor 1, disponible en el canal de ventas A, envía un producto al mercado;
2. Marketplace aprueba el producto del vendedor 1 como nuevo producto en su catálogo;
3. El producto está disponible en el canal de ventas A;
4. El vendedor 2, disponible en el canal de ventas B, envía el mismo producto al marketplace;
5. Marketplace aprueba el producto como enlace a otra acción de producto;
6. El producto sigue estando disponible sólo en el canal de ventas A.



## Workaround


Compruebe manualmente, vía API o vía Hoja de Cálculo, el otro canal de ventas disponible para los productos.





