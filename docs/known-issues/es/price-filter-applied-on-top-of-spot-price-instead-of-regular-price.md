---
title: "El filtro de precios se aplica sobre el 'precio al contado' en lugar del precio normal"
id: 2EEgRV1NxYuns4eF7F0ZqD
status: PUBLISHED
createdAt: 2024-02-15T19:39:53.576Z
updatedAt: 2024-02-15T19:39:54.436Z
publishedAt: 2024-02-15T19:39:54.436Z
firstPublishedAt: 2024-02-15T19:39:54.436Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: el-filtro-de-precios-se-aplica-sobre-el-precio-al-contado-en-lugar-del-precio-normal
locale: es
kiStatus: Backlog
internalReference: 982664
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los filtros de precio se aplican sobre el valor "spotPrice", que es el precio para condiciones especiales de pago, en lugar del precio normal del artículo.

Esto puede afectar a las expectativas a la vez que diverge de la mayoría de sitios, que se centran en el precio regular, como suelen hacer las estanterías y el carrito, o propiedades como "priceRange" de la API.


##

## Simulación


Considere un producto con un precio de 430 $ con un 10% de descuento en un método de pago específico, generando un "precio al contado" de 387 $.

Al filtrar por artículos con un precio entre 300 y 400 dólares se obtendrá este producto, que normalmente se mostrará en el lineal como 430 dólares (su precio habitual), generando la percepción de divergencia.

Del mismo modo, la propiedad "priceRange" de la API responderá con los siguientes valores (considerando este producto como el único resultado para esta consulta de búsqueda), alimentando la sensación de divergencia:

    "priceRange": { "sellingPrice": { "highPrice": 430, "lowPrice": 430 }, "listPrice": { "highPrice": 430, "lowPrice": 430 }}




## Workaround


N/A





