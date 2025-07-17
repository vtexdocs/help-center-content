---
title: "Minicart Valores de artículo incorrectos debido a solicitudes concurrentes con la promoción Stepper y Más por menos."
id: 6bUHjmbccywPYoCEa0hxVW
status: PUBLISHED
createdAt: 2025-02-25T14:49:00.909Z
updatedAt: 2025-02-25T14:49:18.538Z
publishedAt: 2025-02-25T14:49:18.538Z
firstPublishedAt: 2025-02-25T14:49:01.581Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-valores-de-articulo-incorrectos-debido-a-solicitudes-concurrentes-con-la-promocion-stepper-y-mas-por-menos
locale: es
kiStatus: Backlog
internalReference: 1185655
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El problema de sincronización del proceso de pago se produce cuando el minicarro, utilizando el método stepper (con el selector de cantidad establecido en la propiedad mode como "stepper"), envía varias solicitudes. Los artículos incluidos en una promoción "Buy More Save More" tienen valores de artículo incorrectos debido a la división de artículos, lo que provoca el envío de varias solicitudes y genera discrepancias en la respuesta de la API de pago.



## Simulación



1. Añade artículos elegibles para la promoción "Compre Más Ahorre Más" al minicarro.
2. Asegúrese de que el selector de cantidad tiene la propiedad de modo establecida en "stepper".
3. Utilice el método stepper para actualizar la cantidad de varios artículos a la vez en el minicarrito.
4. Observe que los valores de los artículos devueltos por la API de pago son incorrectos debido a las múltiples peticiones enviadas desde el minicarro tras la división de los artículos.



## Workaround


Utilice el selector de cantidad por defecto.





