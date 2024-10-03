---
title: 'Productos no disponibles con mensajes contradictorios en la nueva administración de productos del catálogo (Facelift)'
id: 637P8whSEQWtERrXtndWsH
status: PUBLISHED
createdAt: 2024-09-10T13:40:10.557Z
updatedAt: 2024-09-10T13:40:11.642Z
publishedAt: 2024-09-10T13:40:11.642Z
firstPublishedAt: 2024-09-10T13:40:11.642Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: unavailable-products-with-conflicting-messages-in-the-new-catalog-product-admin-facelift
locale: es
kiStatus: Backlog
internalReference: 1095510
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En la página de producto `/admin/catalog-products`, un producto no disponible tendrá los mensajes `"Active el producto para hacerlo visible en la tienda"` y `"Producto pendiente. Compruebe si este producto tiene toda la información requerida, precios, inventario y configuración logística"`.
Esto no significa que el producto esté pendiente de indexación o inactivo.


##

## Simulación



- Crear un producto
- Hacer que este producto no esté disponible
- Ver el mensaje en el admin `/admin/catalog-products`.



## Workaround


Utilice el admin legado `{account}.vtexcommercestable.com.br/admin/site/Produto.aspx`




