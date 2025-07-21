---
title: 'La interfaz de usuario de los monederos nativos siempre muestra "sin interés" cuando se utiliza el indicador de interés externo.'
id: ACLPFRURtAYcOCuw300F8
status: PUBLISHED
createdAt: 2025-06-12T15:37:10.260Z
updatedAt: 2025-06-12T15:37:11.395Z
publishedAt: 2025-06-12T15:37:11.395Z
firstPublishedAt: 2025-06-12T15:37:11.395Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: la-interfaz-de-usuario-de-los-monederos-nativos-siempre-muestra-sin-interes-cuando-se-utiliza-el-indicador-de-interes-externo
locale: es
kiStatus: Backlog
internalReference: 1243648
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cuando se utiliza un monedero nativo como Google Pay con una regla de tarjeta de crédito que tiene activada la opción "Tipo de interés de terceros", el valor del interés no se calcula ni se muestra durante el pago. Se muestra el texto `sin interés` en las opciones.

Además, si se establecen tanto el "Interés de terceros" como un tipo de interés estándar, el importe de la cuota se actualiza de acuerdo con el tipo estándar, pero el proceso de pago indica incorrectamente "sin intereses".



## Simulación




1. Activar el monedero (como GooglePay) de pago
2. Añadir una regla de tarjeta de crédito con un tipo de interés
3. Marca la opción de tipo de interés de terceros
4. Vaya a la caja y compruebe las opciones de pago del monedero



## Workaround


No hay ninguna solución disponible.





