---
title: 'Configurar pago con CieloV4'
id: 7M2CqJxprwpDtbgLZHBoiI
status: PUBLISHED
createdAt: 2022-07-20T14:25:28.188Z
updatedAt: 2023-03-26T21:25:12.482Z
publishedAt: 2023-03-26T21:25:12.482Z
firstPublishedAt: 2022-07-20T17:07:25.186Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-cielov4
locale: es
legacySlug: configurar-pago-con-cielov4
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el gateway CieloV4. Con este conector, su tienda puede realizar ventas con tarjetas de credito, debito y private labels. 
Para configurar la afiliación a Cielo, siga los siguientes pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __+__.
3. Haga clic en el conector __CieloV4__.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Cielo.
5. En __Provider__, seleccione el adquiriente que se utilizará con el conector CieloV4.
6. En __IsSplit__, elija si la opción de split estará disponible.
7. En __UseMpi__, elija si autenticarán las transacciones. Si selecciona “Sí”, vaya al Paso 10. Si selecciona “No”, vaya al Paso 11.
8. Rellene los campos __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__ y __MpiEstablishmentCode__ con tus datos de acceso a Mpi..
9. En __Activar split y enviar receptores?__, seleccione si los pagos divididos estarán disponibles para el marketplace y los vendedores.
10. Haga clic en __Guardar__.
11. 
## Configurar condición de pago

Para configurar el pago con tarjetas de crédito o débito, vaya a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento#). 

Para configurar el pago con tarjetas private label, vaya a [Configurar pagos con Private Label](https://help.vtex.com/es/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4#).

Para establecer condiciones especiales en los medios de pago, vaya a [Configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, el conector CieloV4 puede tardar hasta 10 minutos en aparecer en la caja de tu tienda como opción de pago. 
