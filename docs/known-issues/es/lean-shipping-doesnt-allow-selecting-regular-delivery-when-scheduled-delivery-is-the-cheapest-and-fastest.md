---
title: 'Lean shipping no permite seleccionar la entrega regular cuando la entrega programada es la más barata y rápida'
id: 4foQfCWNbU4280gcG9G4Of
status: PUBLISHED
createdAt: 2023-06-12T12:40:32.241Z
updatedAt: 2023-06-12T12:40:33.041Z
publishedAt: 2023-06-12T12:40:33.041Z
firstPublishedAt: 2023-06-12T12:40:33.041Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: lean-shipping-no-permite-seleccionar-la-entrega-regular-cuando-la-entrega-programada-es-la-mas-barata-y-rapida
locale: es
kiStatus: Backlog
internalReference: 842018
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En carros donde hay una entrega programada y una entrega regular, y Lean Shipping está activado; si la opción más barata y rápida es la entrega programada, la UI mostrará el toggle normalmente, pero al deseleccionar, no pasará nada, y la entrega programada seguirá seleccionada.



## Simulación



- Registre una entrega programada y una entrega normal;
- Asegúrese de que la entrega programada es la más barata y rápida entre ambas;
- Active la entrega regular;
- En el paso de envío, seleccione entrega programada y anule la selección; nada cambiará.



## Workaround


Desactive el lean shipping.




