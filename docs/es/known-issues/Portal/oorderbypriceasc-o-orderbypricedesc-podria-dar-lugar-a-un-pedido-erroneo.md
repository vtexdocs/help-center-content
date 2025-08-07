---
title: "O=OrderByPriceASC (o OrderByPriceDESC) podría dar lugar a un pedido erróneo"
id: 2XCplZQutilKeD2bNnjYDx
status: PUBLISHED
createdAt: 2022-05-20T15:48:15.215Z
updatedAt: 2024-06-21T11:29:11.233Z
publishedAt: 2024-06-21T11:29:11.233Z
firstPublishedAt: 2022-05-20T15:48:16.089Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: oorderbypriceasc-o-orderbypricedesc-podria-dar-lugar-a-un-pedido-erroneo
locale: es
kiStatus: Backlog
internalReference: 582861
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


**O=OrderByPriceASC** (o **OrderByPriceDESC**) puede utilizar una política incorrecta para ordenar los precios. Además, como el precio indexado sólo tiene un decimal, no se tendrá en cuenta el segundo decimal del precio.

Además, en la ordenación no se tienen en cuenta los precios de los vendedores no regionalizados. En consecuencia, las tiendas regionalizadas del Portal no pueden utilizar el parámetro **pedirPorPrecio**.



## Simulación



- Introducir más de un precio en el producto. Ej: dos precios de lista diferentes en vendedores diferentes.
- Poner ordenación de la página por precio (ej: O=OrderByPriceASC)
- Ver que la clasificación no está en el orden de los precios que se muestran
o

- Buscar dos productos con precios decimales. Ej: precio 1 = 14.04 y precio 2 = 14.01
- Poner la página ordenando por precio (ej: O=OrderByPriceASC)
- Ver que la ordenación no es en el orden de los precios que se muestran



## Workaround


Ninguna en el Portal. Sin embargo, la cuenta puede cambiar a Búsqueda Inteligente.





