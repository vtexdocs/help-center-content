---
title: 'Configurar pago con BraspagV2'
id: 6gaw7zu9wlItgjfDVndRPn
status: ARCHIVED
createdAt: 2022-01-20T19:41:22.154Z
updatedAt: 2023-09-19T14:27:03.358Z
publishedAt: 
firstPublishedAt: 2022-01-21T16:38:10.049Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-braspagv2
locale: es
legacySlug: configurar-pago-con-braspagv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el gateway Braspagv2. Con este conector, su tienda puede realizar ventas con tarjeta de credito, debito y vouchers. Para configurar BraspagV2, siga los siguientes pasos:

## Configurar afiliación de gateway BraspagV2

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __+__.
3. Haga clic en el conector __BraspagV2__.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por BraspagV2.
5. En __Provider__, seleccione el adquiriente que se utilizará con el conector BraspagV2.
6. En __IsSplit__, elija si la opción de split estará disponible.
7. En __UseMpi__, elija si autenticarán las transacciones. Si selecciona “Sí”, vaya al Paso 10. Si selecciona “No”, vaya al Paso 11.
8. Rellene los campos __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__ y __MpiEstablishmentCode__ con tus datos de acceso a Mpi..
9. En __Activar split y enviar receptores?__, seleccione si los pagos divididos estarán disponibles para el marketplace y los vendedores.
10. Haga clic en __Guardar__.

## Configurar condición de pago

Para configurar los medios de pago a ser procesados por el portal Braspagv2 en VTEX, acceda a nuestro [tutorial](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).
