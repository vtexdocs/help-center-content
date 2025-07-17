---
title: "Los almacenes excluidos siguen devolviendo la disponibilidad de existencias en la simulación y la API de disponibilidad"
id: 71udTOdbpYYvVqhDIJcgHx
status: PUBLISHED
createdAt: 2025-06-18T20:20:49.195Z
updatedAt: 2025-06-18T20:20:49.794Z
publishedAt: 2025-06-18T20:20:49.794Z
firstPublishedAt: 2025-06-18T20:20:49.794Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: los-almacenes-excluidos-siguen-devolviendo-la-disponibilidad-de-existencias-en-la-simulacion-y-la-api-de-disponibilidad
locale: es
kiStatus: Backlog
internalReference: 1246900
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cuando se elimina un almacén en el módulo Logística, puede permanecer registrado en la base de inventario de disponibilidad. Esto provoca que la disponibilidad de stock de las SKUs siga considerando cantidades de estos almacenes que ya no existen, provocando que las SKUs no estén disponibles o muestren cantidades irreales.
La situación se produce principalmente cuando el proceso de eliminación de un almacén implica un gran volumen de SKU vinculadas a él, lo que puede generar un tiempo de espera y dejar residuos en la base de disponibilidad incluso después de la eliminación en Logística. El impacto se siente en las APIs de simulación y en la selección de vendedores, generando inconsistencias para el comerciante y el comprador, impactando en la experiencia de compra en tienda.



## Simulación




- Cree un almacén en la cuenta y asocie SKUs a este almacén, asignando cantidades positivas al stock.
- Eliminar el almacén a través del módulo Logística.
- Ejecute una llamada a la API de simulación.
- Observe que, en la respuesta, la SKU devuelve disponibilidad del almacén eliminado, o que la suma de las existencias incluye valores que no se ajustan a lo que existe en los almacenes válidos. Utilizando la ruta para listar los almacenes activos en la cuenta, observe que el almacén en cuestión ya no está listado, pero sigue apareciendo en la devolución de disponibilidad/simulación.
- La SKU puede dejar de estar disponible para la compra debido a este stock residual o mostrar una cantidad irreal en los finales de stock.



## Workaround



No hay ninguna solución pública disponible ni ninguna acción preventiva por parte del comerciante. El tratamiento es exclusivamente backend y depende del equipo de ingeniería para llevar a cabo la limpieza en función de la disponibilidad.






