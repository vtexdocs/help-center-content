---
title: 'Configurar App Linking para app de pagos en inStore'
id: 5WERznsnLO6qqoSOsoMSK4
status: DRAFT
createdAt: 2018-02-26T16:53:07.497Z
updatedAt: 2021-05-19T14:56:43.872Z
publishedAt: 
firstPublishedAt: 2018-02-26T20:04:50.239Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: configurar-app-linking-para-app-de-pagos-en-instore
locale: es
legacySlug: configurar-app-linking-para-app-de-pagos-en-instore
subcategory: 
---

Este artículo tiene como objetivo explicar cómo la aplicación de inStore configura el AppLinking para las acciones de `payment` y `payment-reversal` con las apps de los adquirentes.

![Payment app](https://images.ctfassets.net/alneenqid6w5/SZ7d3IeuCAagwCqSW4eCO/27d469e37d9d1d8fb3ce22850012e685/Payment_app.png)

## Campos de configuración

### General

Todos los adquirentes deberán tener:

- `acquirerProtocol`: string - el protocolo de AppLinking, es decir, el scheme de la aplicación de pago. Por ejemplo: `stone`, `cielo-lio`, `cappta`
- `scheme`: string - el valor predeterminado es `instore`. El scheme al que el `Intent` de la app de pago responderá
- `autoConfirm`: boolean - el valor predeterminado es `True`. Indica a la aplicación que no necesita pedir al usuario ningún permiso adicional para completar la acción
- `acquirerId`: string - ID de afiliación del adquirente que está registrado en el [módulo de Pagos de VTEX](/es/tutorial/configurar-app-linking-para-app-de-pagos-en-instore#configurar-el-conector-de-instore-en-el-pci-gateway-de-vtex). Ex: `<stone_code>`, `<sitef_storeId>`.

Si es necesario, inStore puede enviar información adicional. Ejemplo con el subadquirente Cappta:

- `authKey`: string - por ejemplo, `<cappta_authKey>`.
- `authPassword`: string - por ejemplo, `<cappta_authPassword>`.
- `administrativePassword`: string - contraseña predeterminada, por ejemplo, `cappta`.
- `cnpj`: string.

>ℹ️ Para crear cualquier configuración extra, usted debe enviar al equipo de inStore (instoredevs@vtex.com) los extras que la aplicación necesita para completar la transacción. Así, crearemos un formulario en el módulo de Pagos para que el cliente pueda configurar su adquirente.

## URI de envío y URI de respuesta para cada acción

Acción: `payment` o `payment-reversal` (reembolsar un pago anterior).

&bull; Estándar de URI que es enviado por AppLinking:

```
<acquirerProtocol>://<action>?<params>
```

&bull; Estándar URI que recibe el AppLinking:

```
instore://<action>?<response_params>
```

## Ejemplos de URI de envío para cada acción

### - Ejemplo para la acción `payment`

Contexto de pago que se utiliza para montar la URI (para que sea más fácil de leer):

```json
{
  acquirerProtocol: "super-acquirer",
  action: "payment",
  acquirerId: "954090369",
  installmentType: 2, // 1: los intereses para cada cuota son aplicados por el banco o por la tarjeta de crédito; 2: la tienda es responsable de los intereses de las parcelas
  installments: 3,
  paymentId: "1093019888",
  paymentType: "debit",  // tambien puede ser "credit"
  amount: 10, // Las apps de pago generalmente esperan un valor en centavos (10 centavos en este ejemplo)
  installmentsInterestRate: "1%" // si el pago no tiene tasa de interés, no debe estar en mobileLinkingUrl
  transactionId: "1093019039",
  scheme: "instore",
  urlCallback: "instore://payment",
  autoConfirm: "True",
  paymentSystem: 44,
  paymentSystemName: "Venda Direta Debito",
  paymentGroupName: "debitDirectSalePaymentGroup",
  sellerName: "instoreqa",
  payerEmail: 'customeremail@gmail.com', // E-mail del cliente
  payerIdentification: '12345678909', // Documento del cliente
  mobileLinkingUrl: "super-acquirer://payment?acquirerId=954090369&paymentId=1093019888&paymentType=debit&amount=10&installments=3&transactionId=1093019039&autoConfirm=True&scheme=instore&urlCallback=instore://payment"
}
```

URI final que la aplicación de pago recibirá para ejecutar la acción de pago con el contexto del ejemplo anterior:

```
super-acquirer://payment?acquirerProtocol=super-acquirer&action=payment&acquirerId=954090369&installmentType=2&installments=3&paymentId=1093019888&paymentType=debit&amount=10&installmentsInterestRate=1%&transactionId=1093019039&paymentSystem=44&paymentSystemName=Venda%20Direta%20Debito&paymentGroupName=debitDirectSalePaymentGroup&sellerName=instoreqa&payerIdentification=12345678909&payerEmail=customeremail%40gmail.com&scheme=instore&urlCallback=instore://payment&autoConfirm=True
```

Con los valores presentes en esa URI, será posible reembolsar ese pago.

### - Ejemplo para la acción `payment-reversal` (reembolso):

Contexto del reembolso que se utiliza para montar el URI (para que sea más fácil de leer):

```json
{
  acquirerProtocol: "super-acquirer",
  action: "payment-reversal",
  acquirerAuthorizationCode: "86273634-3a05-4f0a-a430-f55ed3f21eab", // identifica la autorización del pago
  acquirerId: "954090369",
  transactionId: "1093019039",
  paymentId: "1093019888",
  acquirerTid: "1093019888",
  administrativeCode: "11010103033", // este valor debe ser recebido del pago y es guardado en el PCI Gateway de VTEX.
  autoConfirm: "True",
  sellerName: "instoreqa",
  scheme: "instore",
  urlCallback: "instore://payment-reversal",
  mobileLinkingUrl: "super-acquirer://payment-reversal?acquirerAuthorizationCode=86273634-3a05-4f0a-a430-f55ed3f21eab&acquirerId=954090369&paymentId=1093019888&transactionId=1093019039&autoConfirm=True&scheme=instore&urlCallback=instore://payment-reversal"
}
```

URI final que la aplicación de pago recibirá para ejecutar la acción de reembolso con el contexto del ejemplo anterior:

```
super-acquirer://payment-reversal?acquirerAuthorizationCode=86273634-3a05-4f0a-a430-f55ed3f21eab&acquirerId=954090369&transactionId=1093019039&paymentId=1093019888&acquirerTid=1093019888&administrativeCode=11010103033&autoConfirm=True&sellerName=instoreqa&scheme=instore&urlCallback=instore://payment-reversal
```

>⚠️ >
> **NOTA:** No todos los parámetros serán utilizados por todos los adquirentes/apps de pago. Ejemplo: `transactionId`. Este parámetro es el ID de una transacción en VTEX que identifica todos los pagos de un pedido completo en el PCI Gateway de VTEX. Una transacción puede contener varios pagos, como cuando un pedido se paga con varias tarjetas de crédito o débito.

## Ejemplos de URI de respuesta para cada acción

### - Ejemplo para la acción `payment`

URI:

```
Success: instore://payment?responsecode=0&<response_params>
Failed:  instore://payment?responsecode=110&reason=card+refused+by+acquirer&paymentId=<value_of_the_sender_URI>
```

Parámetros de respuesta:

- `scheme`: "instore"
- `action`: "payment"
- `paymentId`: string - identificación del pago en VTEX
- `cardBrandName`: string - nombre de la bandera, como "mastercard", "visa" etc.
- `firstDigits`: string - BIN / IIN de la tarjeta (seis primeros números)
- `lastDigits`: string - cuatro últimos números de la tarjeta
- `acquirerName`: string - nombre del adquirente - opcional
- `tid`: string - código de identificación de la transacción necesaria para realizar una acción de reembolso
- `acquirerAuthorizationCode`: string - código de autorización de la transacción generado por la adquirente
- `nsu`: string - número secuencial único que identifica la operación de venta
- `merchantReceipt`: string - texto del recibo para el establecimiento, debe estar en la URI
- `customerReceipt`: string - texto del recibo para el cliente, debe estar en la URI
- `responsecode`: int - `0` significa "éxito"; valores mayores que `0` significan códigos de error del adquirente, y en ese caso, el parámetro `reason` será un mensaje de error
- `reason`: string - en caso de éxito, el valor es vacío; en caso de error, contiene el mensaje de error
- `success`: `true` o `false` - generado por la aplicación dada el valor del `responsecode`

### Ejemplo para la acción `payment-reversal` (reembolso):

URI:

```
Success: instore://payment-reversal?responsecode=0&<response_params>
Failed:  instore://payment-reversal?responsecode=110&reason=card+refused+by+acquirer&paymentId=<id_sent_previously>
```

Parámetros de respuesta:

- `scheme`: `instore`
- `action`:` payment-reversal`
- `paymentId`: string - Ex: `1093019888` - para identificar qué pago se ha reembolsado
- `paymentAcquirerAuthorizationCode`: string - código de autorización que se utilizó para la acción de reembolso (`tid`)
- `acquirerAuthorizationCode`: string - código de autorización de la transacción generado por la adquirente
- `merchantReceipt`: string - texto del recibo para el merchant. Debe estar en la URI
- `customerReceipt`: string - texto del recibo para el cliente. Debe estar en la URI
- `responsecode`: int - `0` significa "éxito"; valores mayores que `0` significan códigos de error del adquirente, y en ese caso, el parámetro `reason` será un mensaje de error
- `reason`: string - en caso de éxito, el valor es vacío; en caso de error, contiene el mensaje de error
- `success`: `true` o `false` - generado por la aplicación dada el valor del `responsecode`

## Configurar el conector de inStore en el módulo de Pagos de VTEX

Para que la integración funcione, es necesario que el cliente configure en el módulo de Pagos (nuestro backend de pago) el conector del inStore. En este conector, el cliente debe elegir en el campo __Acquirer__ cuál adquirente o app recibirá el pago. Este registro debe contener toda la información necesaria para que el adquirente pueda realizar la transacción. *Ejemplo: Acquirer Id, Token etc.)*.

La integración de AppLinking no incluye otras dependencias, ya que la comunicación entre la app inStore y la appp de pago se realiza con URIs específicas que contienen todos los parámetros de configuración y pago necesarios para la acción.

>⚠️ >
> En Android, toda comunicación debe suceder con un nuevo `Intent`. Esto significa que usted no debe enviar la respuesta como un retorno de llamada del `Intent` inicial. En su lugar, debe enviar un nuevo `Intent` a la aplicación inStore con la respuesta anterior.

Para configurar el conector de InStore, usteddebe seguir estos pasos:

1. Acceda al módulo __Pagos__.
2. Acceda a __Configuraciones__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __InStore__.
5. En el campo __Acquirer__, seleccione el adquirente que recibirá el pago.
6. Rellene los otros campos de configuración del conector de acuerdo con la información pasada por el adquirente (*Tipo de parcelación, Acquirer Id, Ajustes Extras etc.*)

## Links adicionales

- [App para simular el App Linking](https://github.com/vtex/vtex-payment-test/)
- [App de ejemplo para hacer un pago](https://github.com/vtex/payment-example-app)
