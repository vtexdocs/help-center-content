---
title: "El evento view_cart se activa intermitentemente dos veces al añadir artículos al minicart"
id: 9BbaWu6SOLZ4C82Enaogz
status: PUBLISHED
createdAt: 2025-07-24T18:28:11.071Z
updatedAt: 2025-07-24T18:28:11.632Z
publishedAt: 2025-07-24T18:28:11.632Z
firstPublishedAt: 2025-07-24T18:28:11.632Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-evento-viewcart-se-activa-intermitentemente-dos-veces-al-anadir-articulos-al-minicart
locale: es
kiStatus: Backlog
internalReference: 1265581
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al añadir artículos al carrito, el evento analítico `view_cart` se activa dos veces de forma intermitente. Este comportamiento inesperado provoca entradas de eventos duplicadas, lo que puede causar imprecisiones en el análisis de datos y la generación de informes.



## Simulación



1. Añade un producto al minicarro;
2. Compruebe su dataLayer, a veces verá dos eventos de `view_cart` después del `add_to_cart`.


##

## Workaround


N/A





