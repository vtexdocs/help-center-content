---
title: 'Las promociones de devolución de dinero no tienen en cuenta los artículos retirados de los pedidos'
id: lm9v37jvUSCeh9FVFHjsr
status: PUBLISHED
createdAt: 2024-04-19T13:50:10.264Z
updatedAt: 2024-04-19T13:50:11.130Z
publishedAt: 2024-04-19T13:50:11.130Z
firstPublishedAt: 2024-04-19T13:50:11.130Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: las-promociones-de-devolucion-de-dinero-no-tienen-en-cuenta-los-articulos-retirados-de-los-pedidos
locale: es
kiStatus: Backlog
internalReference: 1019864
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación


1 - Cree una promoción de cashback del 10%, restringida sólo a usted (para evitar aplicaciones incorrectas) y con la condición de facturado para aplicar los créditos.

2 - Cierre un pedido de 100$ compuesto por 2 artículos: uno que cuesta 80$ y otro 20$.

3 - Los créditos aplicados deberían ser de 10$. Elimine el artículo de 8$ del pedido y factúrelo.

4 - Se le seguirán abonando 10 $ en concepto de cashback, a pesar de que el valor esperado sea ahora de 2 $, lo que ocurre porque los cálculos de la promoción se realizan durante la simulación de pago, antes de cerrar el pedido.



## Workaround


No hay solución.





