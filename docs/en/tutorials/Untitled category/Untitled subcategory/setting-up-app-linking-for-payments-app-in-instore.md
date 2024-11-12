---
title: 'Setting up App Linking for payments app in inStore'
id: 5WERznsnLO6qqoSOsoMSK4
status: DRAFT
createdAt: 2018-02-26T16:53:07.497Z
updatedAt: 2021-05-19T14:56:43.872Z
publishedAt: 
firstPublishedAt: 2018-02-26T20:04:50.239Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: setting-up-app-linking-for-payments-app-in-instore
locale: en
legacySlug: setting-up-app-linking-for-payments-app-in-instore
subcategoryId: unknown-subcategory
---

This article aims to explain how the inStore app configures AppLinking for `payment` and `payment-reversal` actions with the acquirers' apps.

![Payment app](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Setting fields

### General

All acquirers must have:

- `acquirerProtocol`: string - the AppLinking protocol, that is, the payment app scheme. Ex: `stone`, `cielo-lio`, `cappta`.
- `scheme`: string - the default is `instore`. The scheme to which the payment app's' Intent will respond.
- `autoConfirm`: boolean - the default is `True`. Tells the app that it doesn't have to ask the user for any further permission to complete the action.
- `acquirerId`: string - affiliation id of the acquirer which is registered in [VTEX Payments module](/en/tutorial/setting-up-app-linking-for-payments-app-in-instore#setting-up-instore-connector-in-vtex-pci-gateway). Ex: `<stone_code>`, `<sitef_storeId>`.

If necessary, InStore can send additional information. Example with the sub-acquirer Cappta:

- `authKey`: string - for example, `<cappta_authKey>`.
- `authPassword`: string - for example, `<cappta_authPassword>`.
- `administrativePassword`: string - default password. For example, `cappta`.
- `cnpj`: string.

>ℹ️ To create any extra configuration, you need to send to the inStore team (instoredevs@vtex.com.br) every extra the app needs to complete the transaction. With that, we will create a form on the Payments module so that customers can configure their acquirer.

## Sending URI and response URI for each action

Action: `payment` or `payment-reversal` (refund a previous payment).

&bull; URI pattern that is sent by AppLinking:

```
<acquirerProtocol>://<action>?<params>
```

&bull; Default URI received by AppLinking:

```
instore://<action>?<response_params>
```

## Sample sending URI for each action

### - Example for the `payment` action

Payment context that is used to mount the URI (to make it easier to read):

```json
{
  acquirerProtocol: "super-acquirer",
  action: "payment",
  acquirerId: "954090369",
  installmentType: 2, // 1: the interest for each installment is applied by the bank or by the credit card; 2: the store is responsible for interest on installments
  installments: 3,
  paymentId: "1093019888",
  paymentType: "debit",  // may also be "credit"
  amount: 10, // payment apps usually expect the amount in cents (10 cents, in this example)
  installmentsInterestRate: "1%" // if the payment has no interest rate, it should not be on mobileLinkingUrl
  transactionId: "1093019039",
  scheme: "instore",
  urlCallback: "instore://payment",
  autoConfirm: "True",
  paymentSystem: 44,
  paymentSystemName: "Venda Direta Debito",
  paymentGroupName: "debitDirectSalePaymentGroup",
  sellerName: "instoreqa",
  payerEmail: 'customeremail@gmail.com', // Customer's e-mail
  payerIdentification: '12345678909', // Customer's document
  mobileLinkingUrl: "super-acquirer://payment?acquirerId=954090369&paymentId=1093019888&paymentType=debit&amount=10&installments=3&transactionId=1093019039&autoConfirm=True&scheme=instore&urlCallback=instore://payment"
}
```

Final URI that the payment app will receive to perform the payment action with the context of the above example:

```
super-acquirer://payment?acquirerProtocol=super-acquirer&action=payment&acquirerId=954090369&installmentType=2&installments=3&paymentId=1093019888&paymentType=debit&amount=10&installmentsInterestRate=1%&transactionId=1093019039&paymentSystem=44&paymentSystemName=Venda%20Direta%20Debito&paymentGroupName=debitDirectSalePaymentGroup&sellerName=instoreqa&payerIdentification=12345678909&payerEmail=customeremail%40gmail.com&scheme=instore&urlCallback=instore://payment&autoConfirm=True
```

With the values present in this URI, it will be possible to reimburse this payment.

### - Example for the `payment-reversal` action (refund):

Refund context used to assemble the URI (in order to make it easier to read):

```json
{
  acquirerProtocol: "super-acquirer",
  action: "payment-reversal",
  acquirerAuthorizationCode: "86273634-3a05-4f0a-a430-f55ed3f21eab", // identifies the payment transaction
  acquirerId: "954090369",
  transactionId: "1093019039",
  paymentId: "1093019888",
  acquirerTid: "1093019888",
  administrativeCode: "11010103033", // This ammount must be received from the payment and is saved in VTEX PCI Gateway.
  autoConfirm: "True",
  sellerName: "instoreqa",
  scheme: "instore",
  urlCallback: "instore://payment-reversal",
  mobileLinkingUrl: "super-acquirer://payment-reversal?acquirerAuthorizationCode=86273634-3a05-4f0a-a430-f55ed3f21eab&acquirerId=954090369&paymentId=1093019888&transactionId=1093019039&autoConfirm=True&scheme=instore&urlCallback=instore://payment-reversal"
}
```

Final URI that the payment app will receive to perform the refund action with the context of the above example:

```
super-acquirer://payment-reversal?acquirerAuthorizationCode=86273634-3a05-4f0a-a430-f55ed3f21eab&acquirerId=954090369&transactionId=1093019039&paymentId=1093019888&acquirerTid=1093019888&administrativeCode=11010103033&sellerName=instoreqa&autoConfirm=True&scheme=instore&urlCallback=instore://payment-reversal
```

>⚠️ **NOTE:** Not all parameters will be used by all payment acquirers/apps. Example: `transactionId`. This parameter is the ID of a transaction in VTEX that identifies all payments of a complete order on VTEX PCI Gateway. A transaction can contain multiple payments, such as when an order is paid with multiple credit or debit cards.

## Examples of response URIs for each action

### - Example for the `payment` action

URI:

```
Success: instore://payment?responsecode=0&<response_params>
Failed:  instore://payment?responsecode=110&reason=card+refused+by+acquirer&paymentId=<value_of_the_sender_URI>
```

Response Parameters:

- `scheme`: "instore"
- `action`: "payment"
- `paymentId`: string - payment identification in VTEX
- `cardBrandName`: string - brand name, such as "mastercard","visa", etc.
- `firstDigits`: string - card BIN / IIN (first six digits)
- `lastDigits`: string - card last four digits
- `acquirerName`: string - name of the acquirer - optional
- `tid`: string - transaction identification code required to perform a refund action
- `acquirerAuthorizationCode`: string - transaction authorization code generated by the acquirer
- `nsu`: string - unique sequencial number that identifies the operation
- `merchantReceipt`: string - text of the receipt for the establishment. Must be in the URI
- `customerReceipt`: string - text of the receipt for the client. Must be in the URI
- `responsecode`: int - `0` means "success"; values greater than `0` mean acquirer error codes, in which case the `reason` parameter will be an error message
- `reason`: string - on success, the value is empty; in case of error, it contains the error message
- `success`: `true` or `false` - generated by the app given the value of `responsecode`

### - Example for the `payment-reversal` action (refund):

URI:

```
Success: instore://payment-reversal?responsecode=0&<response_params>
Failed:  instore://payment-reversal?responsecode=110&reason=card+refused+by+acquirer&paymentId=<id_sent_previously>
```

Response parameters:

- `scheme`: `instore`
- `action`: `payment-reversal`
- `paymentId`: string - Ex: `1093019888` - to identify which payment was refunded
- `paymentAcquirerAuthorizationCode`: string - authorization code that was used for the refund action (`tid`)
- `acquirerAuthorizationCode`: string - transaction authorization code generated by the acquirer
- `merchantReceipt`: string - text of the receipt for the merchant. Must be in the URI
- `customerReceipt`: string - text of the receipt for the client. Must be in the URI
- `responsecode`: int - `0` means "success"; values greater than `0` mean acquirer error codes, in which case the `reason` parameter will be an error message
- `reason`: string - on success, the value is empty; in case of error, it contains the error message
- `success`: `true` or `false` - generated by the app given the value of `responsecode`

## Setting up InStore connector in VTEX Payments module

For the integration to work, the customer must set up the InStore connector on the Payments module (our payment backend). In this connector, the customer must choose in the field __Acquirer__ which acquirer or app will receive the payment. This registration must contain all the information necessary for the acquirer to carry out the transaction. *Example: Acquirer Id, Token, etc.)*.

AppLinking integration doesn't include other dependencies, since communication between the inStore application and the payment application happens with specific URIs containing all the configuration and payment parameters required for the action.

>⚠️ On Android, all communication must happen with a new `Intent`. This means that you should not send the response as a callback from the initial `Intent` call. Instead, send a new `Intent` to the inStore application with the previous response.

To configure the inStore connector, follow the steps below:

Access the payments module.
.
Access the Notifications tab.

1. Access the __Payments__ module.
2. Access __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __InStore__ connector.
5. In the __Acquirer__ field, select the acquirer which will receive the payment.
6. Fill in the other setting fields of the connector according to the information passed by the acquirer (*Type of installment, Acquirer Id, Extra Configurations, etc.*)

## Additional links

- [App to simulate App Linking](https://github.com/vtex/vtex-payment-test/)
- [Sample App to Make a payment](https://github.com/vtex/payment-example-app)
