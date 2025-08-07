---
title: "Los pagos a plazos con crédito de cliente no se muestran como opción en el proceso de pago."
id: 1bfMjWdCLGo5VdX2atDQc9
status: PUBLISHED
createdAt: 2024-08-09T14:43:33.140Z
updatedAt: 2024-08-09T14:43:34.333Z
publishedAt: 2024-08-09T14:43:34.333Z
firstPublishedAt: 2024-08-09T14:43:34.333Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: los-pagos-a-plazos-con-credito-de-cliente-no-se-muestran-como-opcion-en-el-proceso-de-pago
locale: es
kiStatus: Backlog
internalReference: 1078804
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al registrar una regla con una opción de pago a plazos, ésta no aparece en el checkout.
Esto ocurre porque las cuotas que aparecen en el checkout provienen de la llamada a cuotas de la pasarela, que en el caso de crédito de cliente, considera todas las cuotas hasta el valor de la cuota más alta registrada.

En otras palabras, aunque sólo registre una opción de 4 cuotas, se tendrán en cuenta las opciones de 1 a 4 cuotas.
El comportamiento nativo es que si al aumentar el número de cuotas no se reduce el valor de la cuota, ésta no será considerada.




## Simulación



1. Crear una regla de crédito de cliente con opción de sólo 4 cuotas.
2. Establecer un tipo de interés elevado (>50%).
3. 3. Compruebe que esta opción de pago a plazos no aparece en la caja.

Ejemplo:

Número de plazos Tipo (%) Valor del plazo (R$)
1x 0% 150
2x 0% 75
3x 0% 50
4x 100% 187,50


Ninguno de estos plazos se mostrará porque no aporta ninguna ventaja al comprador, ya que el objetivo de que alguien pague a plazos es reducir el valor del plazo.




## Workaround


Registre todas las cuotas, pero para aquellas que no quiera que aparezcan en la caja, establezca un tipo de interés muy alto.





