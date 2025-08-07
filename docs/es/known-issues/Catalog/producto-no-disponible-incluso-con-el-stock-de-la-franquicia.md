---
title: "Producto no disponible incluso con el stock de la franquicia"
id: 58KRJl4MFOaeb5KUYGmH8G
status: PUBLISHED
createdAt: 2022-01-25T12:17:33.680Z
updatedAt: 2022-11-25T21:44:25.997Z
publishedAt: 2022-11-25T21:44:25.997Z
firstPublishedAt: 2022-07-21T09:49:53.469Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: producto-no-disponible-incluso-con-el-stock-de-la-franquicia
locale: es
kiStatus: Backlog
internalReference: 404499
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si el producto está agotado en el mercado, en cualquier otro vendedor habitual y la bandera **mostrar agotado** está desmarcada, el producto se mostrará agotado en el portal aunque tenga stock en las cuentas de las franquicias. Es posible añadir el producto a la cesta.

    ¿Mostrar fuera de stock?

    - Falso -> 404
    - Verdadero -> regionalización -> comprobar las existencias de las cuentas de la franquicia


## Simulación


Poner el stock en la cuenta de la franquicia
Establecer la bandera **`Mostrar fuera de stock`** como **`no`**
Ver el producto no disponible en el frente



## Workaround


Establecer **`Mostrar fuera de stock`** como **`sí`** en la cuenta del mercado

