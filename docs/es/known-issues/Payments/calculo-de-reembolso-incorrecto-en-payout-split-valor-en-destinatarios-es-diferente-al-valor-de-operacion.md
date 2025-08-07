---
title: 'Cálculo de reembolso incorrecto en Payout Split - "Valor en destinatarios * es diferente al valor de operación *".'
id: 7Fxtwnntpmi0DrUD5a603W
status: PUBLISHED
createdAt: 2024-07-29T15:07:07.716Z
updatedAt: 2024-07-29T15:07:12.565Z
publishedAt: 2024-07-29T15:07:12.565Z
firstPublishedAt: 2024-07-29T15:07:12.565Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: calculo-de-reembolso-incorrecto-en-payout-split-valor-en-destinatarios-es-diferente-al-valor-de-operacion
locale: es
kiStatus: Backlog
internalReference: 1072285
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al llamar a un reembolso (en transacciones con división de pago) puede ocurrir el error de abajo con importes divergentes:

(Ejemplo)

    Vtex.Practices.ExceptionHandling.ValidationException: Value in recipients (45.00) is different than operation value (299.99). at Vtex.PaymentGateway.PaymentSplit.RecipientsBuilder.ValidateRecipientsValue(List`1 recipients, Decimal value)...


Tenga en cuenta que este KI es diferente del siguiente (problema de cálculo relacionado con el redondeo - la diferencia de valores es pequeña):

https://help.vtex.com/en/known-issues/error-in-refund-and-capture-operations-with-payout-split-value-in-recipients-is-different-than-operation-value--3Wo9ltN7Ju0ZqVLAQZcd7m


##

## Simulación


Esto parece ocurrir cuando el carrito no tiene productos del mercado pero no hemos podido simular este error.



## Workaround


NA, los comerciantes deben solicitar el reembolso manual directamente a la entidad adquirente.





