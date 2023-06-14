---
title: 'Configurar el subadquirente MercadoPagoV2'
id: 1y6k8lCSzJYfPs2yObNFo4
status: PUBLISHED
createdAt: 2021-11-30T18:49:42.837Z
updatedAt: 2023-03-22T18:35:39.911Z
publishedAt: 2023-03-22T18:35:39.911Z
firstPublishedAt: 2021-11-30T19:32:27.420Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-el-subadquirente-mercadopagov2
legacySlug: configurar-el-subadquirente-mercadopagov2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En el Gateway de VTEX, se puede configurar el [subadquirente](https://help.vtex.com/es/tutorial/o-que-e-um-subadquirente#) MercadoPagoV2. A través de él, su tienda puede recibir pagos a través de métodos tradicionales como: boleto, PIX, tarjetas de débito y crédito, así como métodos exclusivos de Mercado Pago, como: MercadoPagoOff, MercadoPagoPro y MercadoPagoWallet.

<div class="alert alert-warning">
  Los subadquirentes <strong>MercadoPago</strong> y <strong>MercadoPagoV1</strong> no permiten lá recepción a través del PIX. Esta es una característica exclusiva de <strong>MercadoPagoV2</strong>.
</div>

## Configurar afiliación de gateway MercadoPagoV2

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el __botón “+”__.
3. Haga clic en el conector __MercadoPagoV2__.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Mercado Pago.
5. En __Periodo de vencimiento__ del ticket, elija el número de días (contados desde la creación del boleto) que tendrá su cliente para realizar el pago.
6. Ingrese el nombre de su tienda en el campo __Nombre para resúmenes__. Recuerde que esta es la información que se describirá en el campo Beneficiário en el boleto o en la factura de la tarjeta del cliente.
7. En __Cuotas máximas__, escoja la cantidad máxima de cuotas enviadas a  Mercado Pago.
8. En __Categoría principal de la tienda__, escoja la categoría que más se encaja con su tienda.
9. En la opción __Reembolso automático / manual__, elija si se reembolsará al cliente automáticamente o manualmente en caso de cancelación del pedido.
10. En __Modo binario__, seleccione “Sí” o “No”. Seleccionar “Sí”, indica que el proceso de aprobación del pago ocurre instantáneamente y pude ser aprobado o rechazado. Sellecionar “No”, indica que el pago puede estar en estado “pendiente” (si requiere alguna acción por parte del cliente) o “en proceso” (si se requiere revisión manual).
11. En __Métodos de pago excluidos__, describe los métodos de pago que no deseas utilizar a través de MercadoPagoV2 (opcional). Si opta por dejar este campo en blanco, todos los métodos de pago disponibles de MercadoPagoV2 estarán disponibles en su tienda.
12. En __Tipos de pago excluidos__,  describe las banderas específicas de crédito y débito (Visa, Mastercard, etc) que no deseas utilizar a través de MercadoPagoV2 (opcional). Si opta por dejar este campo en blanco, todos los tipos de pago disponibles de MercadoPagoV2 estarán disponibles en su tienda.
13. En __Modo de procesamiento__, escoja cómo quiere usar MercadoPagoV2: como subadquirente o gateway. Para más información, visite [¿Qué es un subadquirente?](https://help.vtex.com/es/tutorial/o-que-e-um-subadquirente--64aX6PeRQQ66O8uCqo0W4q) y [¿Qué es un gateway de pagos?](https://help.vtex.com/es/tutorial/o-que-e-um-gateway-de-pagamentos--2KH9Wdi7F6swOU4amECSOk). 
14. En la opción __Integrator ID__, indique el código identificador del desarrollador o agencia que realiza la configuración de Mercado Pago.
15. En la opción __Moneda__, elija si la moneda utilizada para el pago será "Local" (cada país) o "Dólar estadounidense" (USD).
16. Haga clic en __Salvar__ (“Guardar”).

## Configurar condición de pago
Después de seguir los pasos indicados, MercadoPagoV2 estará configurado en su tienda. Así, cuando vaya a registrar una condición de pago, va a estar disponible en el campo __Procesar con la afiliación__ (desde que el medio de pago sea compatible con MercadoPagoV2).

Para saber cómo definir condiciones de pago, acceda a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento#).

## Configurar métodos de pago únicos

Para saber cómo configurar métodos de pago exclusivos de pagamento do Mercado Pago,  acceda a [configurar Mercado Pago Offline y Wallet como métodos de pago](https://help.vtex.com/es/tutorial/configurar-mercado-pago-offline-e-wallet-como-metodos-de-pagamentos).

Para más información sobre la integración con Mercado Pago, acceda al [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/es/guides/plugins/unofficial/vtex/gateway-affiliations).
