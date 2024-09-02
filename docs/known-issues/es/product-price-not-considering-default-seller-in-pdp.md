---
title: 'El precio del producto no tiene en cuenta al vendedor por defecto en el PDP'
id: 4VOIW6kCTfFZ3S9u3xtdDF
status: PUBLISHED
createdAt: 2022-02-23T21:52:42.520Z
updatedAt: 2024-02-16T20:27:12.071Z
publishedAt: 2024-02-16T20:27:12.071Z
firstPublishedAt: 2022-03-07T22:34:44.879Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-precio-del-producto-no-tiene-en-cuenta-al-vendedor-por-defecto-en-el-pdp
locale: es
kiStatus: No Fix
internalReference: 429888
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al mostrar el precio en PDP, el componente ignora el Vendedor por defecto, considerando el primer vendedor que se registró.


## Simulación


El componente ProductPrice en GitHub está considerando siempre el primer vendedor que entra en la matriz, en lugar de utilizar esta lógica.

        const commertialOffer = path(
          ['vendedores', 0, 'oferta comercial'],
          selectedItem
        )


## Workaround


N/A.

