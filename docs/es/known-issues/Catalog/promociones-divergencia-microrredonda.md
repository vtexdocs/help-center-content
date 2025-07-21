---
title: "Promociones divergencia microrredonda"
id: 603ZTMtdgi9olc6UiWLfmX
status: PUBLISHED
createdAt: 2023-12-22T18:48:32.438Z
updatedAt: 2023-12-22T18:48:33.176Z
publishedAt: 2023-12-22T18:48:33.176Z
firstPublishedAt: 2023-12-22T18:48:33.176Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promociones-divergencia-microrredonda
locale: es
kiStatus: Backlog
internalReference: 957369
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El módulo de promociones redondea los descuentos hasta en 3 dígitos significativos, lo que puede, en escenarios muy concretos, suponer ligeras divergencias en el precio final de un carrito.

Por ejemplo, supongamos que tenemos el siguiente escenario de ejemplo:

Artículo 1 - 10
Artículo 2 - 20
Artículo 3 - 32
____________
Total - 62

Y 2 promociones aplicando en todos ellos:

Promoción A - $15 OFF
Promoción B - 10% DE DESCUENTO.


Por lo general, el descuento que se calcula es secuencial, y el descuento por valor nominal es el primero:

$62 - $15 = $47
A continuación
$47 * 0.9 = $42.3


Sin embargo, los descuentos se distribuyen, incluso para el descuento nominal, proporcionalmente en el carro, por lo que lo que realmente sucede es:

`artículo 1
Valor original = 10
Descuento nominal (15 * 10/62 del carrito) = -$2.41935484
Descuento porcentual esperado (12.5806452 * 0.9) = -$1.25806452
Descuento real porcentual = -$1.258

Artículo 2
Valor original = 20 $
Descuento nominal (15 * 20/62 del carrito) = -$4.83870968
Descuento porcentual esperado (15.1612903 * 0.9) = -$1.51612903
Descuento real porcentual = -$1.516

partida 3
Valor original = 32
Descuento nominal (15 * 32/62 del carro) = -$7.74193548
Descuento porcentual esperado (24.2580645 * 0.9) = -$2.42580645
Descuento real porcentual = -$2.426


🔎 diferencia total: 0.00006452 + 0.000012903 + 0.000019355 = 0.0000270973

Podemos ver, más arriba, que se creó una "micro" diferencia.

Si se añadieran varios artículos, con precios distintos, a este carro de ejemplo, esta diferencia podría ascender a 1 céntimo (0,01) o más.



##

## Simulación


Existen multitud de formas de recrear eventualmente el caso Afortunadamente, todas ellas son extremadamente específicas.

Dado esto, es difícil replicar el problema, pero, sobre todo, es necesario crear un carrito con varios (~10+) artículos diferentes y todos ellos con 2+ promociones, idealmente, siendo una de ellas un descuento nominal y la otra, un descuento porcentual.




## Workaround


n/a






