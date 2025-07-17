---
title: "Diferencia de valores entre los cambios totales y el detalle de valores por producto"
id: 1r5tGB9b2L001HDD8iMlMx
status: PUBLISHED
createdAt: 2025-07-08T16:04:14.095Z
updatedAt: 2025-07-08T16:04:15.466Z
publishedAt: 2025-07-08T16:04:15.466Z
firstPublishedAt: 2025-07-08T16:04:15.466Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: diferencia-de-valores-entre-los-cambios-totales-y-el-detalle-de-valores-por-producto
locale: es
kiStatus: Backlog
internalReference: 1256685
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se ha identificado un problema relacionado con la presentación de valores ajustados en los pedidos tras cambios que afectan a productos con un `unitMultiplier` decimal superior a 2.

Cuando se modifica el peso o la cantidad de un artículo a través del **flujo de modificación de pedidos**, el sistema utiliza valores de `unitMultiplier` con varios decimales para recalcular los precios individuales y totales. Sin embargo, la interfaz de usuario del pedido utiliza el precio de venta del artículo, que puede estar redondeado y aproximado a sólo dos decimales. **Esto puede dar lugar a discrepancias visibles entre la suma de los valores mostrados por producto y el importe total cobrado al cliente**, lo que puede confundir a los comerciantes.

Es esencial tener en cuenta que el cálculo del valor total del pedido sigue con exactitud la precisión requerida, y que la incoherencia se limita a la visualización de los detalles del producto en la interfaz.


##

## Simulación


Para reproducir el problema:

1. Accede al área de Pedidos en la plataforma VTEX.
2. Seleccione un pedido que contenga artículos con un `unitMultiplier` decimal (por ejemplo, productos vendidos por peso).
3. 3. Modifique manualmente el peso (`unitMultiplier`) con un valor que contenga más de 2 decimales _(más decimales acabarán en una divergencia más visible)_ del artículo a través del flujo de Modificación de Pedidos (o Recogida y Embalaje).
4. Observe que después del cambio:
  - El valor total del pedido se ajusta correctamente y se cobra como se esperaba.
  - Sin embargo, los valores mostrados para cada producto pueden no sumar exactamente el total mostrado, debido al redondeo del `sellingPrice` en la UI.
5. 5. Compare los valores mostrados por el sistema con un cálculo manual utilizando los precios, las cantidades y el `unitMultiplier` completo.



## Workaround


Actualmente, no existe una solución definitiva o un ajuste de configuración disponible para resolver la discrepancia en la suma de valores mostrada por la interfaz de usuario. Se recomienda:

- Informar a los comerciantes y usuarios sobre la posibilidad de esta incoherencia visual.
- A efectos de conciliación, utilice siempre el valor total del pedido (totales), no la suma de los campos individuales `sellingPrice`.
- Si es necesario, utilice herramientas como las API de previsualización o aplique ajustes manuales a través de los campos `manualIncrementValue`/`manualDecrementValue` para asegurarse de que los valores finales son exactos.
- Siga las actualizaciones del producto para posibles mejoras en el manejo de decimales en la visualización de la interfaz de usuario.






