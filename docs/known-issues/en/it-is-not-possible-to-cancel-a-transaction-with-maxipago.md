---
title: It is not possible to cancel a transaction with MaxiPago
id: 3L7ioEisXAhkk80uEVV1ld
status: DRAFT
createdAt: 2022-06-28T17:06:18.053Z
updatedAt: 2022-06-28T17:06:18.053Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: it-is-not-possible-to-cancel-a-transaction-with-maxipago
kiStatus: Backlog
internalReference: 507480
---

## Summary


When the transaction has not progressed to the authorized stage for many days and the customer tries to cancel it, it receives the following error message in OMS:

     switchQualifier:cancel-order Vtex.Commerce.Checkout.Services.Gateway.GatewayTransactionCancellationException: Cancelation operation has returned Fail.

In the transaction logs, it is possible to notice that in the payload the transactionID was not informed/generated, which means that the transaction cannot be canceled since this field is mandatory to perform this action on the MaxiPago side. That payment never reached the acquirer.

Response from connector:

    CancelResponse: <api-error> <errorCode>1</errorCode> <errorMsg>Schema validation for the vertical SA for the incoming transaction xml failed. Reason Parser Error: URI=null Line=1: cvc-complex-type.2.4.b: The content of element 'void' is not complete. One of '{transactionID, customerId, customerIdExt, ipAddress}' is expected.</errorMsg> </api-error>

##### Error code:

    Connector Code: 1 - Message: Schema validation for the vertical SA for the incoming transaction xml failed. Reason Parser Error: URI=null Line=1: cvc-complex-type.2.4.b: The content of element 'void' is not complete. One of '{transactionID, customerId, customerIdExt, ipAddress}' is expected. - Source Message: Schema validation for the vertical SA for the incoming transaction xml failed. Reason Parser Error: URI=null Line=1: cvc-complex-type.2.4.b: The content of element 'void' is not complete. One of '{transactionID, customerId, customerIdExt, ipAddress}' is expected.


## Simulation


This scenario cannot be reproduced.



## Workaround


Request via ticket for VTEX to change the database for canceled payment

