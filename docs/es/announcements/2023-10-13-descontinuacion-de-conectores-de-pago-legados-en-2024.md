---
title: 'Descontinuación de conectores de pago legados en 2024'
id: 4R5YIjUu1IWkiOHzXtQU14
status: PUBLISHED
createdAt: 2023-10-13T12:52:48.753Z
updatedAt: 2024-09-24T18:40:15.413Z
publishedAt: 2024-09-24T18:40:15.413Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-10-13-legacy-payment-connectors-will-be-discontinued-in-2024
locale: es
legacySlug: descontinuacion-de-conectores-de-pago-legados-en-2024
announcementImageID: ''
announcementSynopsisES: 'En 2024, VTEX discontinuará los conectores de pagos heredados, que no utilizan el Payment Provider Protocol.'
---

Para integrar los medios de pago en la plataforma VTEX, los proveedores de pago pueden crear conectores de pago utilizando el [Payment Provider Protocol](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) (PPP). Sin embargo, hay varios conectores legados que utilizan versiones anteriores de nuestra arquitectura de integración de pagos, que son menos estables y menos eficaces.

<div class="alert alert-warning">
<b>Actualización (15/03/2024): </b><a href="https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados--11SHyRwcAr4fs46K7PccOr">Lista de conectores disponibles para migración</a>.
</div>

## ¿Qué va a cambiar?

<div class="alert alert-danger">
Los cambios descritos en este documento no tendrán ninguna repercusión en el Black Friday 2023,  ya que no se aplicarán hasta el primer trimestre de 2024.
</div>

VTEX está iniciando la descontinuación de estos conectores legados, lo que ocurrirá por etapas:

- **31 de enero de 2024 ** - Bloqueo de la creación de nuevas afiliaciones de gateway utilizando conectores de pago legados. A partir de esta fecha, las tiendas VTEX ya no podrán configurar conexiones con los conectores que serán descontinuados. Todas las reglas de pago ya configuradas seguirán funcionando con normalidad, sin afectar las transacciones.
- **10 de febrero de 2024** - Fecha límite sugerida para presentar nuevos conectores para su homologación. Si las empresas partners desean desarrollar nuevos conectores utilizando el [PPP](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) para sustituir los conectores legados, sugerimos que los presenten para su homologación antes de esta fecha. De este modo, las tiendas VTEX dispondrán de varias semanas para reconfigurar sus conexiones de pago antes de la descontinuación. Al establecer esta fecha, nuestro objetivo es garantizar el cumplimiento del SLA del [proceso de homologación de conectores de pago en la plataforma VTEX](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation).
- **31 de marzo de 2024** - Descontinuación definitiva de los conectores que no utilizan [PPP](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). A partir de esta fecha, VTEX bloqueará todas las transacciones de los conectores de pago legados.

### Lista de los conectores de pago legados

Consulta la lista de todos los conectores que serán descontinuados:

- Adyen
- Alignet
- Amex
- AuthorizeNet/AuthorizeDotNet
- BanamexInvoice
- BankInvoiceItau/BankIssuedInvoiceItau
- BankInvoiceSantander/BankIssuedInvoiceSantander
- Bcash
- BoldCron
- Bradesco/RegisteredBankInvoiceBradesco
- BrasPag/Braspag
- Cielo/CieloV3
- Conductor
- Credomatic
- CyberSource
- Decidir/DecidirV1
- ERede/E-Rede V2/ERedeRest
- Evolucard
- Firstdata
- IPay88
- ItauShopline
- Koin
- MaxiPago
- MeoWallet
- MercadoPagoV1
- MobilPay
- Moip
- MOLPay
- Mundipagg/MundipaggFraudPrevention
- Nexxpago
- NPS
- PagamentoDigital
- PagBrasil
- PagHiper
- PagoEfectivo
- PagosNet
- PagosWeb
- PagSeguro/PagSeguroDirect
- PayClub
- Payme
- Paymentez
- PaymentHub
- PaymentsOS
- PayPal/PayPalPlus
- PayU/PayUGlobal
- Payzen
- Place2Pay/PlaceToPay
- Rede Pay/RedePay
- Redecard
- Redsys/RedsysV2
- SafetyPay
- SalesMachine
- Scopus
- Sitef/SitefDirectSale/SitefPreauth
- Stelo
- TNSPay
- TodoPago
- WebPay/WebPay2P
- WorldPay

## ¿Por qué estamos realizando este cambio?

Los conectores que utilizan el [PPP](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) tienen tasas de autorización más altas que los conectores legados. Por lo tanto, la migración a nuevos conectores tiende a aumentar las ventas de las tiendas VTEX.

Además, muchos conectores legados están desactualizados en términos de tecnología,  por lo que migrar a conectores que usen el [PPP](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) garantiza que las tiendas VTEX utilizarán tecnologías más modernas y estables ofrecidas por VTEX.

## ¿Qué se necesita hacer?

Las acciones necesarias como resultado de este cambio dependen de tu contexto en el ecosistema VTEX. Consulta a continuación qué opción se adapta mejor a tu negocio.

### Responsable de los conectores de pago legados

Si actúas como proveedor de pago responsable de uno o más [conectores que serán descontinuados](#lista-de-los-conectores-de-pago-legados), deberás desarrollar un nuevo conector utilizando el [Payment Provider Protocol](/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). De lo contrario, no podrás procesar transacciones a partir de la fecha de descontinuación mencionada anteriormente.

En este caso, te recomendamos que presentes un nuevo conector para homologación antes del 10 de febrero de 2024 para que las tiendas tengan tiempo de reconfigurar sus conexiones de pago antes de la descontinuación. Aquí puedes consultar más información sobre el [proceso de homologación de nuevos conectores de pago](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation).

<div class="alert alert-danger">
VTEX no puede garantizar que tu nuevo conector de pago esté disponible para administradores de tiendas VTEX antes de la descontinuación oficial si lo presentas para homologación después de esta fecha.
</div>

Si tienes alguna pregunta sobre este proceso o deseas alinear la información con los administradores de tiendas, ponte en contacto con tu Partner Manager VTEX.

### Tiendas que utilizan conectores de pago legados

Si tu tienda utiliza uno de los [conectores que serán descontinuados](#lista-de-los-conectores-de-pago-legados), deberás configurarlo con el nuevo conector correspondiente a aquel proveedor de pago antes del 31 de marzo de 2024. De lo contrario, no será posible realizar compras en tu tienda utilizando el medio de pago en cuestión.

A lo largo del proceso de descontinuación y migración, puedes ponerte en contacto con tus proveedores de pago para hacer un seguimiento de la evolución y obtener más información sobre el desarrollo de los nuevos conectores.

