---
title: 'Los pedidos con artículos en el array MarketplaceItems no se abren en New UI Admin'
id: 3tj9AKklBHm4tCKYgrfDi5
status: PUBLISHED
createdAt: 2022-09-13T03:06:57.141Z
updatedAt: 2023-09-28T15:01:19.205Z
publishedAt: 2023-09-28T15:01:19.205Z
firstPublishedAt: 2022-09-13T03:06:57.675Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: los-pedidos-con-articulos-en-el-array-marketplaceitems-no-se-abren-en-new-ui-admin
locale: es
kiStatus: Fixed
internalReference: 656821
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Algunos pedidos tienen el array "marketplace Items" lleno con más artículos que el array "items" del pedido json. Esta configuración es normal y se refiere por ejemplo a "lista de regalos de boda".
Pero la Nueva UI no está preparada para manejar este tipo de pedidos con items en "marketplace Items" y rompe la página con un mensaje de error:


"Lo sentimos, algo ha ido mal por nuestra parte.
Por favor, inténtelo de nuevo o actualice la página.
Volver a la lista"



##

## Simulación



Cree un pedido con el catálogo usando el array "marketplace Items", después puede intentar ver el pedido en la UI admin. La interfaz de usuario se romperá y mostrará un mensaje de error.



## Workaround


Utilice la antigua interfaz de usuario para abrir esa orden.





