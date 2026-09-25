---
title: 'Nuevos campos obligatorios para la emisión de facturas'
id: 5jDozNwc272jtq92dvKQkq
status: PUBLISHED
createdAt: 2025-08-29T23:29:00.226Z
updatedAt: 2025-09-30T17:22:53.181Z
publishedAt: 2025-09-30T17:22:53.181Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: 2025-08-29-new-mandatory-fields-for-invoice-issuance
locale: es
legacySlug: nuevos-campos-obligatorios-para-la-emision-de-facturas
announcementImageID: 'undefined'
announcementSynopsisES: 'Los pedidos de marketplace traen en paymentData los datos de pago usados en la factura (NT 2025.001).'
tags:
  - Cambio disruptivo
  - Pedidos
  - Integraciones
---

> ℹ️ Los cambios aplican únicamente a tiendas en Brasil.

La NT 2025.001 exige datos de pago en las facturas electrónicas de Brasil. Los pedidos creados en marketplace pasan a recibir esos datos en `paymentData`. El merchant los usa para emitir la factura. Esos datos no autorizan, capturan, reembolsan ni liquidan un pago en el Gateway de la cuenta.

La primera entrega guardó los mismos datos en `customApps`, como se describe en la [release note del 29/08/2025](https://developers.vtex.com/updates/release-notes/2025-08-29-orders-api-support-for-nt-2025-001-fields). Los conectores que aún no migraron siguen enviando `customApps`. Cuando `paymentData` venga informado, úsalo en la factura. No hay una fecha única de corte para todos los marketplaces.

Consulta el pedido en el endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-). Cada pago del marketplace corresponde a un elemento de `paymentData.payments[]`. En el formato anterior, varios pagos venían concatenados con `|` en la misma cadena. En Dafiti, los nombres de `customApps` iban en singular.

| Dato de la factura | Campo anterior en `customApps` | Campo en `paymentData` |
| --- | --- | --- |
| Medio de pago | `marketplacePaymentMethods` | `group`, `paymentSystem` y `paymentSystemName` |
| Bandera de la tarjeta | `marketplacePaymentCreditCardBrands` | `paymentSystemName` |
| Código de autorización | `marketplacePaymentAuthorizationCodes` | `connectorResponses.authId` |
| CNPJ de la adquirente | `marketplacePaymentCnpjAcquirers` | `connectorResponses.acquirerCnpj` |

Cuando el nombre enviado por el marketplace coincide con un medio de pago de VTEX, `paymentSystem` recibe el id de ese medio y `group` recibe el grupo correspondiente, como `creditCard`. Cuando no hay coincidencia, `paymentSystem` queda en `"0"`, `paymentSystemName` conserva el nombre enviado por el marketplace y `group` queda en `promissory`. Los valores siguen sin estandarización: el mismo medio puede llegar como `CARD`, `Credit Card` o `credit_card`.

`connectorResponses` puede incluir `Message`, con la indicación de que el afiliado asumió el valor. Ese texto no es el resultado de una operación del Gateway. En este flujo, los campos de la factura son `acquirerCnpj` y `authId`.

```json
{
  "payments": [
    {
      "paymentSystem": "0",
      "paymentSystemName": "Mastercard",
      "value": 100000,
      "installments": 1,
      "referenceValue": 100000,
      "group": "creditCard",
      "connectorResponses": {
        "acquirerCnpj": "01425787000104",
        "authId": "01010202"
      }
    }
  ]
}
```

`value` y `referenceValue` están en centavos.

### Pedidos con pago asíncrono

Pix y boleto confirman el pago después de la creación del pedido. `customApps` no acepta actualización después del `placeOrder`, así que los datos fiscales solo podían guardarse con el pago ya confirmado, y el inventario no se reservaba en ese intervalo.

Con `paymentData`, la integración puede crear el pedido antes de la confirmación y completar los datos fiscales cuando el marketplace apruebe el pago. Hasta esa actualización, el pedido puede existir sin estos campos.

## ¿Qué hay que hacer?

Confirma con tu integrador o marketplace si se están enviando los campos exigidos por la NT 2025.001. Cuando el pedido traiga `paymentData`, el ERP o el emisor fiscal debe leer los campos de ese objeto. En los conectores que todavía envían solo `customApps`, sigue consumiendo esos campos hasta la migración.

La tabla de disponibilidad por marketplace sigue en el [anuncio en portugués](/pt/announcements/2025-08-29-novos-campos-obrigatorios-para-emissao-de-notas-fiscais).

Si tienes dudas, contacta al [Soporte VTEX](https://support.vtex.com/).
