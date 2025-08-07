---
title: "Pedido rápido cambia la cantidad de artículos cuando se aplica una promoción Más por menos."
id: 2nixdZvlUVIXnY8h3pF60j
status: PUBLISHED
createdAt: 2024-10-24T14:40:29.973Z
updatedAt: 2024-10-24T14:40:31.031Z
publishedAt: 2024-10-24T14:40:31.031Z
firstPublishedAt: 2024-10-24T14:40:31.031Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: pedido-rapido-cambia-la-cantidad-de-articulos-cuando-se-aplica-una-promocion-mas-por-menos
locale: es
kiStatus: Backlog
internalReference: 1123142
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al aplicar una promoción de Más por Menos (pero cualquier promoción que divida artículos tendrá el mismo comportamiento), el comportamiento esperado es separar el artículo promocional de los artículos normales, pero esto no ocurre en la app de Pedido Rápido.

Sólo se tiene en cuenta la cantidad del primer artículo si la promoción se aplica durante la validación de la app.


##

## Simulación



- Establezca una promoción Más por Menos; por ejemplo, compre 3 artículos y llévese 1 gratis;
- Los artículos se dividen en 2 artículos con el precio original y 1 artículo con 0;
- La aplicación de pedido rápido tendrá en cuenta sólo 2 artículos después de la validación.



## Workaround


N/A




