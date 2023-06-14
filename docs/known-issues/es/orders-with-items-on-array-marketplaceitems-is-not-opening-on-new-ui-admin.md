---
title: 'Los pedidos con artículos en la matriz MarketplaceItems no se abren en la Nueva UI Admin'
id: 3tj9AKklBHm4tCKYgrfDi5
status: PUBLISHED
createdAt: 2022-09-13T03:06:57.141Z
updatedAt: 2022-11-25T22:01:26.839Z
publishedAt: 2022-11-25T22:01:26.839Z
firstPublishedAt: 2022-09-13T03:06:57.675Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: los-pedidos-con-articulos-en-la-matriz-marketplaceitems-no-se-abren-en-la-nueva-ui-admin
kiStatus: Backlog
internalReference: 656821
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunos pedidos tienen el array "marketplace Items" lleno de más artículos que el array "items" del pedido json. Esta configuración es normal y se refiere por ejemplo a la "lista de regalos de boda".
Pero la nueva interfaz de usuario no está preparada para manejar este tipo de pedidos con artículos en "marketplace Items" y rompe la página con un mensaje de error:





"Lo siento, algo salió mal de nuestro lado.

Por favor, inténtelo de nuevo o actualice la página.

Volver a la lista"




## Simulación


Cree un pedido con el catálogo utilizando el array "marketplace Items", después de eso puede intentar ver el pedido en la UI admin. La UI se romperá y mostrará un mensaje de error.




## Workaround


Utilice la antigua interfaz de usuario para abrir esa orden.

