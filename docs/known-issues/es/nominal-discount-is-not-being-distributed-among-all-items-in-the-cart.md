---
title: 'El descuento nominal no se distribuye entre todos los artículos de la cesta'
id: gt1qMqN71YkaHuZgk9Ibs
status: PUBLISHED
createdAt: 2023-01-25T17:33:59.274Z
updatedAt: 2024-07-20T02:22:10.021Z
publishedAt: 2024-07-20T02:22:10.021Z
firstPublishedAt: 2023-01-25T17:33:59.996Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: el-descuento-nominal-no-se-distribuye-entre-todos-los-articulos-de-la-cesta
locale: es
kiStatus: Backlog
internalReference: 334130
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



El Descuento Nominal de las promociones no se está distribuyendo entre todos los artículos del carrito.

Este escenario está ocurriendo sólo en algunas cuentas.

La tienda tiene una promoción nominal y el descuento sólo se está aplicando a un artículo del carrito, no distribuyendo proporcionalmente el descuento a todos los artículos como se supone que debería.



## Simulación




1. Crear una promoción periódica con un descuento nominal;
2. Crear un enlace al carrito donde se aplique la promoción;
3. 3. Compruebe que el descuento se aplica íntegramente a un solo artículo en lugar de distribuirse entre todos los artículos.

PD: Esto no ocurre siempre y con todas las cuentas.



## Workaround


Para mitigar este problema, puede utilizar la API Crear o Actualizar cupón para aumentar el campo `maxItemsPerClient`. Esto permite que el cupón se aplique a tantos SKU como permita este campo.





