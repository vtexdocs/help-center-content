---
title: "Elemento de reserva total con valor negativo en la interfaz de usuario del inventario"
id: 5W8BeBZjSgN30YXwXfT8kV
status: PUBLISHED
createdAt: 2024-02-29T22:05:19.854Z
updatedAt: 2024-03-01T13:46:07.440Z
publishedAt: 2024-03-01T13:46:07.440Z
firstPublishedAt: 2024-02-29T22:05:20.674Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: elemento-de-reserva-total-con-valor-negativo-en-la-interfaz-de-usuario-del-inventario
locale: es
kiStatus: Backlog
internalReference: 991735
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Un escenario específico en el que se realiza más de un pedido con el mismo sku y procedente del mismo almacén, puede dejar el número de reserva negativo en la UI de inventario.

**Escenario específico:**
pedido A: 4 unidades de la sku X procedentes del almacén 1;
pedido B: 6 unidades de la sku X del almacén 1;

pedido A: `status=handling`, se acusa recibo de la reserva;
pedido B: `status=window-to-cancel`, la reserva aún no se ha confirmado;

Después de esto, el comerciante actualiza el inventario considerando las unidades del pedido A como entregadas, si el comerciante cancela el pedido A, y más tarde mueve el pedido B a `status=handling` (reconocer la reserva), esto dejará la interfaz de usuario del inventario con -4 de este sku como reservado.


##

##

## Simulación



1- Actualizar el inventario de la referencia X con 10 unidades del almacén 1;
2- Crear un pedido A con 4 unidades de sku X del almacén 1;
3- Crear un pedido B con 6 unidades de sku X del almacén 1;
4- Mueve el pedido A a `status=handling` (esto reconocerá la reserva);
5- Actualiza el inventario de la referencia X con 6 unidades del almacén 1 (que es el número que te queda para el pedido B);
6- Cancelar el pedido A;
7- Mover el pedido B a `status=handling` (esto reconocerá la reserva);
8- Compruebe el inventario para sku X en el almacén 1, tendrá -4 unidades reservadas.



##


## Workaround



No hay ninguna solución disponible.






