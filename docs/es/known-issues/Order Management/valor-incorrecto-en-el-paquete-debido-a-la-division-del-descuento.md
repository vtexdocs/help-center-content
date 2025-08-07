---
title: "Valor incorrecto en el paquete debido a la división del descuento"
id: f27JxOqSf3sAKeHkQlHUa
status: PUBLISHED
createdAt: 2022-06-27T14:28:29.925Z
updatedAt: 2022-11-25T22:02:11.129Z
publishedAt: 2022-11-25T22:02:11.129Z
firstPublishedAt: 2022-06-27T14:28:30.303Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: valor-incorrecto-en-el-paquete-debido-a-la-division-del-descuento
locale: es
kiStatus: Backlog
internalReference: 605517
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El paquete tiene un valor diferente del total del pedido sin el valor del envío. Esto sucede debido a que los descuentos no tienen una división adecuada con la cantidad de itens de la orden.



## Simulación


Por ejemplo, si el pedido tiene 4 itens y el precio de cada iten es de 17 céntimos, el total es de 68 céntimos. Y si el descuento es de 3 céntimos, el valor debería ser de 65 céntimos pero no es posible dar un céntimo a cada iten como descuento porque la división no se calcula correctamente. Así que la interfaz de usuario mostrará 64 céntimos como valor total del paquete cuando el valor correcto es 65 céntimos.

En la interfaz de usuario verá que el iten es de 16 céntimos (precio de venta calculado) y el multiplicador de unidades es de 4, lo que equivale a un valor de 64 céntimos.

Pero la forma correcta es 1 iten como 17 centavos y 3 itens como 16 centavos, igual a 65 centavos como valor.





## Workaround


Todavía no hay ninguna solución.

