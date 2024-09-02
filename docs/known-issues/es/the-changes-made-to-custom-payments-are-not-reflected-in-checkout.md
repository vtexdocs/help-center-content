---
title: 'Los cambios realizados en los pagos personalizados no se reflejan en el pago'
id: 22ot22mIyR9v8b2vXYn8VW
status: PUBLISHED
createdAt: 2022-03-27T17:59:14.988Z
updatedAt: 2022-11-25T22:05:21.028Z
publishedAt: 2022-11-25T22:05:21.028Z
firstPublishedAt: 2022-03-27T17:59:15.384Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: los-cambios-realizados-en-los-pagos-personalizados-no-se-reflejan-en-el-pago
locale: es
kiStatus: Backlog
internalReference: 276250
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el cliente intenta modificar la configuración realizada para los pagos personalizados que ya tienen una regla de pago asociada, los cambios no se reflejan en el pago.
El problema se produce debido a un caché que debe ser sobrescrito por los cambios realizados en la configuración de pagos personalizados.



## Simulación



1. Vaya a VTEX **Admin**.
2. Configure un pago personalizado.
3. Configure una condición de pago para procesar el pago Personalizado.
4. Vuelva a la configuración del pago personalizado y cambie allí la descripción.
5. 5. Vaya a la caja y observe que la actualización no reflejó los cambios que usted hizo.



## Workaround


Puede solucionar este problema guardando la condición de pago asociada al pago personalizado

