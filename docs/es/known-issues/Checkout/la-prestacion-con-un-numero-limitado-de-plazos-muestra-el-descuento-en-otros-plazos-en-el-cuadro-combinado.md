---
title: 'La prestación con un número limitado de plazos muestra el descuento en otros plazos en el cuadro combinado'
id: 6izb0iLwbLstdJIxF9lPOw
status: DRAFT
createdAt: 2022-01-24T20:33:57.542Z
updatedAt: 2023-03-31T23:07:20.021Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: benefit-with-restricted-number-of-installments-displays-discount-in-other-installments-in-the-combo-box
locale: es
kiStatus: Backlog
internalReference: 323525
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al registrar un beneficio para pagos con tarjeta, con una cantidad limitada de cuotas (por ejemplo, "10% en efectivo"), el descuento se presenta después de seleccionar esa cantidad de cuotas en la caja. Sin embargo, este valor descontado se convierte en el nuevo valor total, en el que se basarán los demás plazos para presentar los valores. Entonces, en el campo de selección se muestran entre las opciones las otras cuotas que se calculan en base al valor total **con el descuento**. Sin embargo, al seleccionar una cuota diferente, el valor mostrado se convierte en el correcto.

Este escenario sólo ocurre para el descuento con tarjeta y en el momento de la selección. La compra **nunca se cierra con el valor incorrecto**.


##

## Simulación



1. Crear una prestación con importe restringido de cuotas;
2. Acceder a la tienda y crear un nuevo carrito, procediendo al pago;
3. Seleccionar el número de cuotas en que se aplica el beneficio;
4. Tenga en cuenta que al abrir una vez más el campo de selección de plazos, las otras opciones también muestran el descuento;
5. 5. Seleccione otro plazo y compruebe que el valor se ha ajustado.



## Workaround


Hay una solución disponible para este escenario como una característica "beta". Puedes ponerte en contacto con el equipo de soporte a través de un ticket para obtener más detalles.




