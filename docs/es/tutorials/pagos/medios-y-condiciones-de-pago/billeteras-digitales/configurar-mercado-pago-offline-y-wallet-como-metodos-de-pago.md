---
title: 'Configurar Mercado Pago Offline y Wallet como métodos de pago'
id: 1oXH6VnfhGcVHdE7RD6cpd
status: PUBLISHED
createdAt: 2021-11-30T22:49:18.953Z
updatedAt: 2023-03-23T15:44:05.324Z
publishedAt: 2023-03-23T15:44:05.324Z
firstPublishedAt: 2021-11-30T23:24:03.450Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-mercado-pago-offline-and-wallet-as-payment-methods
legacySlug: configurar-mercado-pago-offline-y-wallet-como-metodos-de-pago
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Mercado Pago cuenta con algunos métodos de pago exclusivos, entre los que podemos destacar:
- __Mercado Pago Offline__: permite el uso de [pagos offline disponibles en América Latina](/es/docs/tutorials/lista-de-proveedores-de-pago-por-pais).
- __Mercado Pago Wallet__: cartera digital que te permite pagar con los créditos de tu cuenta de Mercado Pago.

Para utilizar las soluciones de Mercado Pago, comuníquese con VTEX y solicite la instalación de la aplicación “Mercado Pago Payment APP”. Si la aplicación no está instalada, su cliente no ve la pantalla emergente para completar la compra al final de la transacción.

Asimismo, asegúrese de que los subadquirentes [MercadoPagoV1](/es/tutorial/configurar-o-subadquirente-mercadopagov1#) ou [MercadoPagoV2](/es/tutorial/configurar-o-subadquirente-mercadopagov2) están registrados en su tienda.

## Configurar el Mercado Pago Offline

Para configurar Mercado Pago Offline, siga estos pasos:
<ol>
  <li>Acceda al **Admin** VTEX.</li>
  <br>
  <li>Haga clic en **Pagos**.</li>
  <br>
  <li>Después, haga clic en **Configuración**.</li>
  <br>
  <li>En la pestaña Planos de Pago, haga clic en el botón **+**.</li>
  <br>
  <li>Busque y haga clic en **MercadoPagoOff**.</li>
  <br>
  <li>En la parte superior de la página, complete el campo **Nombre de la Regra** con el nombre que prefiera para la identificación.</li>
  <br>
  <li>Haga clic en el botón **Status** para activar la regra.</li>
<br>
> ℹ️ No es necesario seleccionar el campo **Proceso com la afiliación**, ya que el subadquirente MercadoPagoV2 ya está configurado como afiliación por defecto para MercadoPagoOff.
<br>
  <li>Si opta por utilizar la función antifraude, habilite la opción **Usando Antifraude** y elija una de las opciones antifraude disponibles.</li>
  <br>
  <li>También tiene la opción de [configurar condiciones especiales de pago](/es/tutorial/condicoes-especiais).</li>
  <br>
  <li>Haga clic en **Salva**.</li>
</ol>
Una vez que se completen todas las configuraciones, espere hasta 10 minutos para que aparezcan la opción MercadoPagoOff en el checkout.

## Configurar el Mercado Pago Wallet

Para configurar Mercado Pago Wallet, siga estos pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña Planos de Pago, haga clic en el __botón “+”__.
3. Busque y haga clic en __MercadoPagoWallet__.
4. En la parte superior de la página, complete el campo __Nombre de la Regra__ con el nombre que prefiera para la identificación.
5. Haga clic en el botón __Status__ para activar la regra.
6. En __Processar con la afiliación__, seleccione una de las opções: _MercadoPagoV1_ ou _MercadoPagoV2_.
7. Si opta por utilizar la función antifraude, habilite la opción __Usando Antifraude__ y elija una de las opciones antifraude disponibles.
8. También tiene la opción de [configurar condiciones especiales de pago](/es/tutorial/condicoes-especiais#).
9. Haga clic en __Salva__.

Una vez que se completen todas las configuraciones, espere hasta 10 minutos para que aparezcan la opción  MercadoPagoWallet en el checkout.

