---
title: 'El mismo SKU en varias listas de promociones "Comprar juntos" en la nueva interfaz de usuario hace que la promoción no se aplique en la caja.'
id: 4M9UZhQqkU4Tl07lyLPtMt
status: PUBLISHED
createdAt: 2024-09-03T10:55:07.063Z
updatedAt: 2024-09-10T12:15:48.590Z
publishedAt: 2024-09-10T12:15:48.590Z
firstPublishedAt: 2024-09-03T10:55:07.909Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: el-mismo-sku-en-varias-listas-de-promociones-comprar-juntos-en-la-nueva-interfaz-de-usuario-hace-que-la-promocion-no-se-aplique-en-la-caja
locale: es
kiStatus: Fixed
internalReference: 1091209
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Existe un problema en la nueva interfaz de usuario por el que las promociones "Comprar juntos" permiten añadir el mismo SKU tanto a la Lista 1 como a la Lista 2 sin ninguna advertencia ni error. Este no es un uso previsto del tipo de promoción, ya que las promociones "Comprar juntos" están diseñadas para funcionar con SKU distintas en cada lista. La configuración puede dar lugar a comportamientos inesperados, como que la promoción no se aplique correctamente en la caja.



## Simulación



1. Vaya al panel de administración de VTEX y asegúrese de que está utilizando la nueva interfaz de usuario para la gestión de promociones.
2. Crea una promoción de "Comprar juntos".
3. Añade el mismo SKU tanto a la Lista 1 como a la Lista 2.
4. Guarde la promoción sin encontrar ninguna advertencia o error.
5. 5. Intente aplicar la promoción en la caja utilizando los artículos de la Lista 1 y la Lista 2.



## Workaround


Actualmente, no hay ninguna solución disponible para este problema en la nueva interfaz de usuario. Se recomienda a los vendedores que eviten añadir el mismo SKU a ambas listas cuando configuren promociones "Comprar juntos". En su lugar, considere la posibilidad de utilizar SKU distintas para cada lista o de utilizar el tipo de promoción "Más por menos" para obtener resultados similares sin conflictos.





