---
title: 'Configurar adquirente Cielo'
id: 3avjZ7q65WcM02K8K0eeWu
status: DRAFT
createdAt: 2018-05-02T19:02:05.427Z
updatedAt: 2023-09-19T14:27:20.410Z
publishedAt: 
firstPublishedAt: 2018-05-02T19:49:35.201Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-adquirente-cielo
locale: es
legacySlug: configurar-adquirente-cielo
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Cielo es uno de los mayores [adquirentes](/es/tutorial/que-es-un-adquirente) de Brasil y cuenta con los más variados medios de pago en su red de adquirencia. En VTEX, usted integra su tienda con ese adquirente usando el conector CieloV3.

Para configurar Cielo, siga los pasos continuación:

## Configurar la afiliación de gateway Cielo
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __CieloV3__.
4. [Haga clic aquí](https://developercielo.github.io/tutorial/habilitacao-meios-de-pagamento) para acceder al campo __Habilitación de los medios de pago en Cielo__. En este enlace hay documentación que indica cómo habilitar pagos con boleto bancario y débito en línea.
5. Rellene los campos *MerchantId* y *MerchantKey* con los datos proporcionados por Cielo.
6. En __SoftDescriptor__, escriba el texto que va a aparecer para identificar las transacciones realizadas en su tienda.
7. En el campo __Proveedor de boleto__, elija el proveedor registrado en el sistema de Cielo para pagos con boleto bancario.
8. En __Proveedor de débito__, indique el proveedor registrado en el sistema de Cielo para pagos con débito en línea.
9. En el campo __Boleto Registrado__, informe si el boleto tiene o no registro.
10. En __Suporte [3DS2](https://help.vtex.com/es/announcements/3ds2-authentication-flow-accept-online-payments-more-securely-1--6UdTjjVU1AcEQ2aE3Ftxsl?&utm_source=autocomplete)__, seleccione si desea activarlo. Si se va a activar, hay que rellenar los campos a continuación. Estos campos son obligatorios y deben contener la información proporcionada por Cielo, para más detalles sobre los campos, consulte [esta documentación de Cielo](https://developercielo.github.io/manual/3ds).

    - __EstablishmentCode:__ Código de establecimiento de Cielo E-Commerce 3.0.
    - __MerchantName:__ Nombre del establecimiento registrado en Cielo.
    - __MCC:__ Código de categoría del establecimiento.
    - __ClientID:__ [Clave ID](https://docscielo.github.io/Pilots/manual/appcielo3#cielo-oauth) para autenticación básica en la API de Cielo.
    - __ClientSecret:__ Clave Secret para autenticación básica en la API de Cielo.
    - __BPMPiAuth:__ Selección de envío para el proceso de autenticación (por ejemplo, si BPMPiAuth no está activo, la transacción no se autenticará con Cielo) Elija __Sí__ si la transacción debe enviarse al proceso de autenticación y __No__ si no debe enviarse al proceso de autenticación.
    - __BPMPIAuthNotifyOnly:__ Indicar si la transacción de la tarjeta se enviará o no en modo «solo notificación» (solo válido para tarjetas Mastercard). Este modo solo es válido para tarjetas Mastercard. Para este modo, el proceso de autenticación no se activará. Sin embargo, los datos se enviarán a la red de la tarjeta de crédito.
    - __BPMpiAuthSuppressChallenge:__ Indicar si ignora o no el desafío cuando exista. Si una transacción es autorizada después de ignorar el desafío, la responsabilidad recae en el establecimiento.

<div class="alert alert-warning">
<strong>Atención</strong>: Para que ek flujo 3DS2 funcione corretamente, debes instalar la aplicación de pago cielo-authentication-app.
</div>

11. En __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
12. Haga clic en __Salvar__ para guardar.

## Configurar la condición de pago
Después de seguir los pasos indicados, Cielo estará configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con Cielo). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).

Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/--tutorials_455)
