---
title: 'Precio fijo que se crea en la política comercial 1 al guardar los precios de los paquetes.'
id: 3Xbh5GVn0jm2yhaOiRg3Le
status: PUBLISHED
createdAt: 2022-11-28T12:41:07.808Z
updatedAt: 2024-02-16T20:24:01.848Z
publishedAt: 2024-02-16T20:24:01.848Z
firstPublishedAt: 2022-11-28T12:41:08.426Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: precio-fijo-que-se-crea-en-la-politica-comercial-1-al-guardar-los-precios-de-los-paquetes
locale: es
kiStatus: No Fix
internalReference: 705869
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



El precio de un kit sku (o bundle sku) es la suma de los precios de los componentes del sku multiplicados por su cantidad.

Si un kit está compuesto por 1 unidad de sku A y 2 unidades de sku B, su precio será 1x(precio de A) + 2x(precio de B).

Al guardar este precio o al cambiar la cantidad de los componentes del kit a través del administrador del catálogo, se crea un precio fijo en la Política Comercial 1 para el sku del kit.

Sin embargo, este no es un comportamiento esperado.



## Simulación



## Workaround



