---
title: 'Configurar el gateway TNSPay'
id: 6jIUr6Va00QyEuMEGAmQA6
status: DRAFT
createdAt: 2018-03-02T12:43:42.795Z
updatedAt: 2024-03-18T20:23:20.750Z
publishedAt: 
firstPublishedAt: 2018-03-02T15:56:49.389Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-el-gateway-tnspay
locale: es
legacySlug: configurar-el-gateway-tnspay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

TNSPay es un [gateway de pago](/es/tutorial/que-es-un-gateway-de-pagos) con certificación PCI que proporciona una serie de features de seguridad para facilitar el procesamiento de [compras recurrentes](/es/faq/como-funciona-la-compra-recurrente).

Para configurar TNSPay, siga los pasos abajo:

## Configurar la afiliación de gateway TNSPay
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __TNSPay__.
4. Rellene los campos de registro con los datos proporcionados (o registrados) por TNSPay: campos _MerchantID_, _UserName_, _Password_, _Version_, _Acquirer_.
5. En el campo __Currency__, seleccione la moneda que se va a utilizar en las transacciones.
6. En __Tokenize credit card__, elija si va a usar o no la funcionalidad de [tokenización](/es/faq/como-funciona-la-compra-recurrente#tokenizacion-de-la-tarjeta).
7. En __Use 3DSecure__, se define cuando utilizar el [protocolo 3DS](/es/tutorial/que-es-3d-secure) (que requiere la autenticación del usuario junto al banco emisor).
8. Ya en __3DSecure Minimum Value__, determine cuál es el valor mínimo (expresado en centavos) para aplicar el protocolo 3DS. Esta configuración sólo es válida si ha seleccionado la opción _Just above a custom value_ en el campo __Use 3DSecure__.
9. En el campo __Plan Ids__, usted debe agregar los _plan ids_, separados por comas y con la indicación de la cantidad de parcelas.
10. En el campo __Captura de segurança antecipada__ ("Captura de seguridad anticipada"), escoja en cuánto tiempo quiere que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
11. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, TNSPay estará configurado en su tienda. Así, cuando se registre una condición de pago, ella estará disponible en el campo __Procesar con afiliación__ (siempre que el medio de pago sea compatible con TNSPay). 
Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
