---
title: "Filtro de transacciones por fecha en Admin no funciona"
id: 3uBT1svILMV964MvuDAUUO
status: PUBLISHED
createdAt: 2025-02-17T15:39:00.833Z
updatedAt: 2025-02-17T15:39:01.488Z
publishedAt: 2025-02-17T15:39:01.488Z
firstPublishedAt: 2025-02-17T15:39:01.488Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: filtro-de-transacciones-por-fecha-en-admin-no-funciona
locale: es
kiStatus: Backlog
internalReference: 1180441
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se selecciona un filtro de fecha en Transactions Admin, todas las transacciones con esa fecha no nula se muestran como respuesta, demostrando que el filtro no funciona como se esperaba.


##

## Simulación


1. Ir a cualquier tienda admin > pedidos > transacciones;
2. 2. Seleccione el icono para filtrar las transacciones;

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Payments/filtro-de-transacciones-por-fecha-en-admin-no-funciona_1.png)

3. 3. Seleccione cualquier opción del menú "Fecha". En este caso, se ha seleccionado "Fecha de cancelación > Ayer";

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Payments/filtro-de-transacciones-por-fecha-en-admin-no-funciona_2.png)

4. Verá que la lista devuelve todas las transacciones que tienen una "fecha de cancelación", independientemente del filtro "ayer".

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Payments/filtro-de-transacciones-por-fecha-en-admin-no-funciona_3.png)

##


## Workaround


No hay solución para este KI.





