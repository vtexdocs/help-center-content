---
title: 'Descripción del informe de suscripciones'
id: 3RtHQowB4Vjf6O19YwRLu1
status: PUBLISHED
createdAt: 2025-04-11T15:36:03.548Z
updatedAt: 2025-04-11T20:09:12.975Z
publishedAt: 2025-04-11T20:09:12.975Z
firstPublishedAt: 2025-04-11T15:41:29.370Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: understanding-the-subscription-report
locale: es
legacySlug: descripcion-del-informe-de-suscripciones
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Descripción del informe de suscripciones

El informe de suscripciones es un documento en formato `.csv` con información sobre suscripciones, como fecha de creación, email del cliente, SKUs activos de la suscripción, entre otros datos.

Puedes generar el informe utilizando el endpoint [Generate 
report](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3?endpoint=post-/api/rns/pvt/reports/-reportName-/documents).

Existen los siguientes tipos de informes:
- [Suscripciones con status](#suscripciones-con-status)
- [Suscripciones programadas entre fechas](#suscripciones-programadas-entre-fechas)
- [Suscripciones actualizadas entre fechas](#suscripciones-actualizadas-entre-fechas)
- [Suscripciones creadas entre fechas](#suscripciones-creadas-entre-fechas)
- [Suscripciones ejecutadas entre fechas](#suscripciones-ejecutadas-entre-fechas)

<div class="alert alert-info">
  <p>También puedes usar el endpoint <a href=https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#get-/api/rns/pvt/reports>List report templates</a> para conocer los tipos de informe que puedes generar.</p>
</div>

Este artículo presenta los diferentes datos que devuelve cada tipo de informe de suscripciones.

## Suscripciones con status
El informe `subscriptionsWithStatus` devuelve datos de suscripciones basados en el status de la ejecución del ciclo.

Las columnas corresponden a información específica sobre la suscripción, conforme se describe a continuación.

| **Nombre del campo** | **Descripción** |
| :---:  | :--- |
| ID | ID de la suscripción. |
| Customer Email | Email del cliente. |
| Customer Id | ID del cliente. |
| Status | <p> Status de la suscripción en el momento de generar el informe. </p> <p> `TRIGGERED`: se activó una ejecución del ciclo de la suscripción. </p> <p> `IN_PROCESS`: la suscripción está siendo procesada por el sistema (status temporal). </p> <p> `FAILURE`: se produjo un error interno al ejecutar la suscripción. </p> <p> `SUCCESS`: el ciclo de suscripción se procesó con éxito. </p> <p> `EXPIRED`: la suscripción no se renovó y se superó la fecha límite vigente. </p> <p> `ORDER_ERROR`: el ciclo de la suscripción no se ejecutó debido a un error en el _place order_ del pedido. </p> <p> `PAYMENT_ERROR`: el ciclo de suscripción no se ejecutó debido a un error en el pago. </p> <p> `SKIPED`: se omitió la ejecución de un ciclo de suscripción y esta se ejecutará en el siguiente ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: un ciclo de suscripción se ejecutó con éxito y el pedido vinculado no contiene ítems. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: un ciclo de suscripción se ejecutó con éxito y tiene un pedido parcial vinculado. </p> <p> `RE_TRIGGERED`: se activó manualmente una reejecución del ciclo de suscripción. </p> <p> `SCHEDULE_UPDATED`: la fecha de la próxima ejecución del ciclo de la suscripción fue actualizada. </p> 
| Has Active Items | <p> informa si la suscripción contiene ítems activos. </p> <p> `TRUE`: contiene ítems activos. </p> <p> "FALSE": no contiene ítems activos. </p> 
| Is Skipped | <p> Indica si se omitirá el ciclo de la suscripción. </p> <p> `TRUE`: el ciclo se omitirá. </p> <p> `FALSE`: el ciclo no se omitirá. </p> 
| Next Purchase Date | Fecha de la próxima compra. |
| Last Purchase Date | Fecha de la última compra. |
| Periodicity | Periodicidad de la suscripción. |
| Interval | Intervalo de la suscripción. |
| Purchase Day | Día de compra de la suscripción. |
| AddressId | ID de la dirección del cliente. |
| AddressType | Tipo de dirección. |
| PaymentSystem Name | Tipo de pago de la suscripción. |
| Account Id | ID de la cuenta. |
| Selected Sla | Service Level Agreement (SLA)](https://vtex.com/co-es/privacy-and-agreements/agreements/) elegido. |
| Cycle | Número que identifica el ciclo de la suscripción. |
| Created At | Fecha de creación de la suscripción. |
| Last Update | Última actualización de la suscripción. |
| Subscriptions Items Count | Recuento de ítems de la suscripción. |
| Subscriptions Item Id | ID de los ítems de la suscripción. |
| Subscriptions Item Status | Status de los ítems de la suscripción. |
| Subscriptions Item Sku Id | SKUs de los ítems de la suscripción. |
| Subscriptions Item PriceAtSubscriptionDate | Valor de los ítems en el momento de la suscripción. |
| Subscriptions Item Quantity | Cantidad de ítems de la suscripción. |
| Subscriptions Item Is Skipped | <p> Informa si se omitirán ítems de la suscripción. </p> <p> `TRUE`: los ítems se omitirán. </p> <p> `FALSE`: los ítems no se omitirán. </p> 
| Subscriptions Item Cycle | Ciclo de los ítems de la suscripción. |
| Subscriptions Item OriginalOrder | Pedido original de los ítems de la suscripción. | 

## Suscripciones programadas entre fechas
El informe `subscriptionsScheduledBetweenDate` devuelve datos de suscripciones programadas entre un rango de fechas.

Las columnas corresponden a información específica sobre la suscripción, conforme se describe a continuación.

| **Nombre del campo** | **Descripción** |
| :---:  | :--- |
| ID | ID de la suscripción. |
| Customer Email | Email del cliente. |
| Customer Id| ID del cliente. |
| Status | <p> Status de la suscripción en el momento de generar el informe. </p> <p> `TRIGGERED`: se activó una ejecución del ciclo de suscripción. </p> <p> `IN_PROCESS`: la suscripción está siendo procesada por el sistema (status temporal). </p> <p> `FAILURE`: se produjo un error interno al ejecutar la suscripción. </p> <p> `SUCCESS`: el ciclo de suscripción se procesó con éxito. </p> <p> `EXPIRED`: la suscripción no se renovó y se superó la fecha límite vigente. </p> <p> `ORDER_ERROR`: el ciclo de la suscripción no se ejecutó debido a un error en el _place order_ del pedido. </p> <p> `PAYMENT_ERROR`: el ciclo de suscripción no se ejecutó debido a un error en el pago. </p> <p> `SKIPED`: se omitió la ejecución de un ciclo de suscripción y se ejecutará en el siguiente ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: un ciclo de suscripción se ejecutó con éxito y el pedido vinculado no contiene ítems. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: un ciclo de suscripción se ejecutó con éxito y contiene un pedido parcial vinculado. </p> <p> `RE_TRIGGERED`: se activó manualmente una reejecución del ciclo de suscripción. </p> <p> `SCHEDULE_UPDATED`: se actualizó la fecha de la próxima ejecución del ciclo de la suscripción. </p> 
| Has Active Items | <p> informa si la suscripción contiene ítems activos. </p> <p> `TRUE`: contiene ítems activos. </p> <p> "FALSE": no contiene ítems activos. </p> 
| Is Skipped | <p> Indica si se omitirá el ciclo de la suscripción. </p> <p> `TRUE`: el ciclo se omitirá. </p> <p> `FALSE`: el ciclo no se omitirá. </p> 
| Next Purchase Date | Fecha de la próxima compra. |
| Last Purchase Date | Fecha de la última compra. |
| Periodicity | Periodicidad de la suscripción. |
| Interval | Intervalo de la suscripción. |
| Purchase Day | Día de compra de la suscripción. |
| AddressId | ID de la dirección del cliente. |
| AddressType | Tipo de dirección. |
| PaymentSystem Name | Tipo de pago de la suscripción. |
| Account Id | ID de la cuenta. |
| Selected Sla | Service Level Agreement (SLA)](https://vtex.com/co-es/privacy-and-agreements/agreements/) elegido. |
| Cycle | Número que identifica el ciclo de la suscripción. |
| Created At | Fecha de creación de la suscripción. |
| Last Update | Última actualización de la suscripción. |
| Subscriptions Items Count | Recuento de ítems de la suscripción. |
| Subscriptions Item Id | ID de los ítems de la suscripción. |
| Subscriptions Item Status | Status de los ítems de la suscripción. |
| Subscriptions Item Sku Id | SKUs de los ítems de la suscripción. |
| Subscriptions Item PriceAtSubscriptionDate | Valor de los ítems en el momento de la suscripción. |
| Subscriptions Item Quantity | Cantidad de ítems de la suscripción. |
| Subscriptions Item Is Skipped | <p> Informa si se omitirán los ítems de la suscripción. </p> <p> `TRUE`: los ítems se omitirán. </p> <p> `FALSE`: los ítems no se omitirán. </p> 
| Subscriptions Item Cycle | Ciclo de los ítems de la suscripción. |
| Subscriptions Item OriginalOrder | Pedido original de los ítems de la suscripción. | 

## Suscripciones actualizadas entre fechas
El informe `subscriptionsUpdatedBetweenDate` devuelve datos de las suscripciones actualizadas entre un rango de fechas.

Las columnas corresponden a información específica sobre la suscripción, conforme se describe a continuación.

| **Nombre del campo** | **Descripción** |
| :---:  | :--- |
| ID | ID de la suscripción. |
| Customer Email | Email del cliente. |
| Customer Id| ID del cliente. |
| Status | <p> Status de la suscripción en el momento de generar el informe. </p> <p> `TRIGGERED`: se activó una ejecución del ciclo de suscripción. </p> <p> `IN_PROCESS`: la suscripción está siendo procesada por el sistema (status temporal). </p> <p> `FAILURE`: se produjo un error interno al ejecutar la suscripción. </p> <p> `SUCCESS`: el ciclo de suscripción se procesó con éxito. </p> <p> `EXPIRED`: la suscripción no se renovó y se superó la fecha límite vigente. </p> <p> `ORDER_ERROR`: el ciclo de suscripción no se ejecutó debido a un error en el _place order_ del pedido. </p> <p> `PAYMENT_ERROR`: el ciclo de suscripción no se ejecutó debido a un error en el pago. </p> <p> `SKIPED`: se omitió la ejecución de un ciclo de suscripción y se ejecutará en el siguiente ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: un ciclo de suscripción se ejecutó con éxito y el pedido vinculado no contiene ítems. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: un ciclo de suscripción se ejecutó con éxito y contiene un pedido parcial vinculado. </p> <p> `RE_TRIGGERED`: se activó manualmente una reejecución del ciclo de suscripción. </p> <p> `SCHEDULE_UPDATED`: se actualizó la fecha de la próxima ejecución del ciclo de la suscripción. </p> 
| Has Active Items | <p> informa si la suscripción contiene ítems activos. </p> <p> `TRUE`: contiene ítems activos. </p> <p> "FALSE": no contiene ítems activos. </p> 
| Is Skipped | <p> Indica si se omitirá el ciclo de la suscripción. </p> <p> `TRUE`: el ciclo se omitirá. </p> <p> `FALSE`: el ciclo no se omitirá. </p> 
| Next Purchase Date | Fecha de la próxima compra. |
| Last Purchase Date | Fecha de la última compra. |
| Periodicity | Periodicidad de la suscripción. |
| Interval | Intervalo de la suscripción. |
| Purchase Day | Día de compra de la suscripción. |
| AddressId | ID de la dirección del cliente. |
| AddressType | Tipo de dirección. |
| PaymentSystem Name | Tipo de pago de la suscripción. |
| Account Id | ID de la cuenta. |
| Selected Sla | Service Level Agreement (SLA)](https://vtex.com/co-es/privacy-and-agreements/agreements/) elegido. |
| Cycle | Número que identifica el ciclo de la suscripción. |
| Created At | Fecha de creación de la suscripción. |
| Last Update | Última actualización de la suscripción. |
| Subscriptions Items Count | Recuento de ítems de la suscripción. |
| Subscriptions Item Id | ID de los ítems de la suscripción. |
| Subscriptions Item Status | Status de los ítems de la suscripción. |
| Subscriptions Item Sku Id | SKUs de los ítems de la suscripción. |
| Subscriptions Item PriceAtSubscriptionDate | Valor de los ítems en el momento de la suscripción. |
| Subscriptions Item Quantity | Cantidad de ítems de la suscripción. |
| Subscriptions Item Is Skipped | <p> Informa si se omitirán los ítems de la suscripción. </p> <p> `TRUE`: los ítems se omitirán. </p> <p> `FALSE`: los ítems no se omitirán. </p> 
| Subscriptions Item Cycle | Ciclo de los ítems de la suscripción. |
| Subscriptions Item OriginalOrder | Pedido original de los ítems de la suscripción. | 

## Suscripciones creadas entre fechas
El informe `subscriptionsCreatedBetweenDate` devuelve datos de las suscripciones creadas entre un rango de fechas.

Las columnas corresponden a información específica sobre la suscripción, conforme se describe a continuación.

| **Nombre del campo** | **Descripción** |
| :---:  | :--- |
| ID | ID de la suscripción. |
| Customer Email | Email del cliente. |
| Customer Id | ID del cliente. |
| Status | <p> Status de la suscripción en el momento de generar el informe. </p> <p> `TRIGGERED`: se activó una ejecución del ciclo de suscripción. </p> <p> `IN_PROCESS`: la suscripción está siendo procesada por el sistema (status temporal). </p> <p> `FAILURE`: se produjo un error interno al ejecutar la suscripción. </p> <p> `SUCCESS`: el ciclo de suscripción se procesó con éxito. </p> <p> `EXPIRED`: la suscripción no se renovó y superó la fecha límite vigente. </p> <p> `ORDER_ERROR`: el ciclo de la suscripción no se ejecutó debido a un error en el _place order_ del pedido. </p> <p> `PAYMENT_ERROR`: el ciclo de suscripción no se ejecutó debido a un error en el pago. </p> <p> `SKIPED`: se omitió la ejecución de un ciclo de suscripción y se ejecutará en el siguiente ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: un ciclo de suscripción se ejecutó con éxito y el pedido vinculado no contiene ítems. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: un ciclo de suscripción se ejecutó con éxito y contiene un pedido parcial vinculado. </p> <p> `RE_TRIGGERED`: se activó manualmente una reejecución del ciclo de suscripción. </p> <p> `SCHEDULE_UPDATED`: se actualizó la fecha de la próxima ejecución del ciclo de la suscripción. </p> 
| Has Active Items | <p> informa si la suscripción contiene ítems activos. </p> <p> `TRUE`: contiene ítems activos. </p> <p> "FALSE": no contiene ítems activos. </p> 
| Is Skipped | <p> Indica si se omitirá el ciclo de la suscripción. </p> <p> `TRUE`: el ciclo se omitirá. </p> <p> `FALSE`: el ciclo no se omitirá. </p> 
| Next Purchase Date | Fecha de la próxima compra. |
| Last Purchase Date | Fecha de la última compra. |
| Periodicity | Periodicidad de la suscripción. |
| Interval | Intervalo de la suscripción. |
| Purchase Day | Día de compra de la suscripción. |
| AddressId | ID de la dirección del cliente. |
| AddressType | Tipo de dirección. |
| PaymentSystem Name | Tipo de pago de la suscripción. |
| Account Id | ID de la cuenta. |
| Selected Sla | Service Level Agreement (SLA)](https://vtex.com/co-es/privacy-and-agreements/agreements/) elegido. |
| Cycle | Número que identifica el ciclo de la suscripción. |
| Created At | Fecha de creación de la suscripción. |
| Last Update | Última actualización de la suscripción. |
| Subscriptions Items Count | Recuento de ítems de la suscripción. |
| Subscriptions Item Id | ID de los ítems de la suscripción. |
| Subscriptions Item Status | Status de los ítems de la suscripción. |
| Subscriptions Item Sku Id | SKUs de los ítems de la suscripción. |
| Subscriptions Item PriceAtSubscriptionDate | Valor de los ítems en el momento de la suscripción. |
| Subscriptions Item Quantity | Cantidad de ítems de la suscripción. |
| Subscriptions Item Is Skipped | <p> Informa si se omitirán los ítems de la suscripción. </p> <p> `TRUE`: los ítems se omitirán. </p> <p> `FALSE`: los ítems no se omitirán. </p> 
| Subscriptions Item Cycle | Ciclo de los ítems de la suscripción. |
| Subscriptions Item OriginalOrder | Pedido original de los ítems de la suscripción. | 

## Suscripciones ejecutadas entre fechas
El informe `executionsBetweenDate` devuelve datos de las suscripciones ejecutadas entre un rango de fechas.

Las columnas corresponden a información específica sobre la suscripción, conforme se describe a continuación.

| **Nombre del campo** | **Descripción** |
| :---:  | :--- |
|  Id | ID de la suscripción. |
| OrderGroup | ID del pedido generado al ejecutar el informe.
| Email | Email del cliente. |
| Customer Id | ID del cliente. |
| Skus | SKUs de los productos de la suscripción. |
| Order | Número de pedido. |
| Value | Valor de la suscripción. |
| cycleCount | Número que identifica el ciclo de la suscripción. |
| date | Fecha de creación de la suscripción.
| IsInRetry | <p> Informa si la ejecución fue resultado de un reintento. </p> <p> `TRUE`: La ejecución es resultado de un reintento. </p> <p>`FALSE`: La ejecución no es resultado de un reintento. </p> 
| Status | <p> Status de la suscripción en el momento de generar el informe. </p> <p> `TRIGGERED`: se activó una ejecución del ciclo de suscripción. </p> <p> `IN_PROCESS`: la suscripción está siendo procesada por el sistema (status temporal). </p> <p> `FAILURE`: se produjo un error interno al ejecutar la suscripción. </p> <p> `SUCCESS`: el ciclo de suscripción se procesó con éxito. </p> <p> `EXPIRED`: la suscripción no se renovó y se superó la fecha límite vigente. </p> <p> `ORDER_ERROR`: el ciclo de la suscripción no se ejecutó debido a un error en el _place order_ del pedido. </p> <p> `PAYMENT_ERROR`: el ciclo de suscripción no se ejecutó debido a un error en el pago. </p> <p> `SKIPED`: se omitió la ejecución de un ciclo de suscripción y se ejecutará en el siguiente ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: un ciclo de suscripción se ejecutó con éxito y el pedido vinculado no contiene ítems. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: un ciclo de suscripción se ejecutó con éxito y contiene un pedido parcial vinculado. </p> <p> `RE_TRIGGERED`: se activó manualmente una reejecución del ciclo de la suscripción. </p> <p> `SCHEDULE_UPDATED`: se actualizó la fecha de la próxima ejecución del ciclo de la suscripción. </p> 
| messageParsed | Mensaje devuelto por el checkout durante la ejecución de la suscripción. |
| CreatedAt | Fecha de creación de la suscripción.
| LastUpdate | Fecha de la última actualización de la suscripción. |
| ActiveSkus | SKUs activos en la suscripción. |

