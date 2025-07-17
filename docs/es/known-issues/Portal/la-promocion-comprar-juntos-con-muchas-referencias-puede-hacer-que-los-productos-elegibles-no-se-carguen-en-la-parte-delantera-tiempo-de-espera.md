---
title: "La promoción Comprar juntos con muchas referencias puede hacer que los productos elegibles no se carguen en la parte delantera (tiempo de espera)."
id: e1OJuUhZhYidnoRaDoDRc
status: PUBLISHED
createdAt: 2022-01-21T17:36:41.181Z
updatedAt: 2024-02-16T20:29:59.287Z
publishedAt: 2024-02-16T20:29:59.287Z
firstPublishedAt: 2024-01-23T15:09:22.474Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: la-promocion-comprar-juntos-con-muchas-referencias-puede-hacer-que-los-productos-elegibles-no-se-carguen-en-la-parte-delantera-tiempo-de-espera
locale: es
kiStatus: No Fix
internalReference: 301463
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La promoción Buy Together con muchas SKU puede hacer que los productos elegibles no se carguen en la portada debido al tiempo de espera. Las páginas de producto utilizan el control de producto `<vtex.cmc:BuyTogether/>`. Este control es responsable de llevar la información de todos los SKUs elegibles establecidos en la promoción a la página del producto.

El problema es que si el cliente pone muchas SKUs en esta promoción, el Portal tendrá que traer esta información (precio, stock, etc) de todos los productos de estas SKUs a la página de producto. Y Portal hace esto simulando sus productos con el checkout. Si tenemos una promoción que se estableció con por ejemplo con 50 SKUs, y estos SKUs son de productos que tienen al menos 5 SKUs por producto) y están disponibles por ejemplo 3 Canales de Venta, Portal tendrá que simular con el checkout cada SKU para cada SC de cada producto elegible en esta promoción sólo para mostrar esta página de producto específica. En este ejemplo, Portal tendrá que hacer 750 simulaciones con la caja (50 SKUs establecidos en la promoción, suponiendo que estos SKus son de productos que tienen 5 SKUs, son 250 SKUs, y todos deben ser simulados para cada SC, lo que nos da 750 simulaciones).

ps: no tenemos un número correcto a establecer en la SKU List, ya que dependerá de cada cliente. Si el cliente tiene productos con pocas SKUs y sólo una SC disponible, podrá utilizar más SKUs en este tipo de Promo.


##

## Simulación


- Crear una Promoción Buy Together
- Ponga en la SKU List 1 o en la SKU list 2 muchas SKUs, como más de 50.
- Intente cargar la página Producto que utiliza el control `<vtex.cmc:BuyTogether/>`, la página no debería cargarse debido a un tiempo de espera.



## Workaround


Hay dos formas de "solucionar" este problema:
- Eliminar el control de plantilla <vtex.cmc:BuyTogether/>, esto hará que la página del producto no cargue la información sobre este producto disponible en esta promoción;
- Utilizar menos SKUs en la lista de la promoción Buy Together. Una vez más, desafortunadamente, no tenemos un número específico que funcione. Aconsejo al cliente que pruebe con algo como 10 y empiece a aumentar y probar.


