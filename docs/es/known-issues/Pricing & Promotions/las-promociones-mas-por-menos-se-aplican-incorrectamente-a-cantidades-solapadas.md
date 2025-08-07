---
title: "Las promociones Más por Menos se aplican incorrectamente a cantidades solapadas"
id: 58LCIFlyd31Yxuq5U0lKuo
status: PUBLISHED
createdAt: 2024-12-12T14:45:56.909Z
updatedAt: 2024-12-12T14:45:57.721Z
publishedAt: 2024-12-12T14:45:57.721Z
firstPublishedAt: 2024-12-12T14:45:57.721Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: las-promociones-mas-por-menos-se-aplican-incorrectamente-a-cantidades-solapadas
locale: es
kiStatus: Backlog
internalReference: 1149846
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se aplican varias promociones "Más por menos" a una colección con un límite de valor máximo para los artículos, el servicio Tarifas y beneficios (RnB) no evalúa correctamente la aplicabilidad de las promociones. Esto provoca que se aplique más de una promoción, incluso cuando las cantidades de artículos del carro sólo deberían permitir una promoción.



## Simulación



1. Configurar **Promoción 1**:
  - Tipo: "Más por Menos"
  - Colección: X
  - Condición: 2 artículos por un valor máximo inferior al precio habitual de los productos de la colección (por ejemplo, la promoción reduce el precio del artículo respecto a su configuración por defecto).
2. Configure **Promoción 2**:
  - Tipo: "Más por menos"
  - Colección: X
  - Condición: 3 artículos por un valor máximo que proporciona un descuento aún mayor en el precio del artículo en comparación con la Promoción 1.
3. Pruebe los siguientes escenarios:
  - Añadir **1 unidad de Producto A** y **1 unidad de Producto B**. Compruebe que **Promoción 1** se aplica y limita el precio del artículo según su configuración. (Comportamiento esperado)
  - Añadir **2 unidades del Producto A** y **1 unidad del Producto B**. Comprueba que se aplica la **Promoción 2**, ofreciendo un descuento mayor que la Promoción 1. (Comportamiento esperado)
  - Añada **3 unidades del Producto A** y **1 unidad del Producto B**. Compruebe que tanto la **Promoción 1** como la **Promoción 2** se aplican incorrectamente, aunque la cantidad del carrito sólo debería activar la Promoción 2. (Comportamiento inesperado)
  - Añade **3 unidades del Producto A** y **2 unidades del Producto B**. Comprueba que sólo se aplica la **Promoción 2** cuando deberían aplicarse ambas promociones. (Comportamiento inesperado)_

RnB pierde la pista de las cantidades y de los productos que ya tienen descuentos aplicados, lo que provoca una aplicabilidad incorrecta de la promoción.



## Workaround


Por el momento no se conoce ninguna solución para evitar este problema.






