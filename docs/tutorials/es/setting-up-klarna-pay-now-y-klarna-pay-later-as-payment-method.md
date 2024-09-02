---
title: 'Configurar Klarna Pay Now y Klarna Pay Later como medio de pago'
id: 4nsW4t3jGU9f8qqGoVjVtz
status: DRAFT
createdAt: 2020-12-04T15:02:01.008Z
updatedAt: 2022-12-23T20:23:59.263Z
publishedAt: 
firstPublishedAt: 2020-12-04T19:45:04.488Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-klarna-pay-now-y-klarna-pay-later-como-medio-de-pago
locale: es
legacySlug: configurar-klarna-pay-now-y-klarna-pay-later-como-medio-de-pago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

[Klarna Pay Now y Klarna Pay Later](https://www.klarna.com/us/what-is-klarna/) son opciones de medios de pago de Klarna. Klarna Pay Now ofrece pagos instantáneos mientras que Klarna Pay Later permite pagos por factura con financiación en hasta 36 cuotas.

Para cada uno de estos métodos de pago existen diferentes requisitos de configuración:

- __Klarna Pay Now__: actualmente solo se puede utilizar con la afiliación de gateway Adyen. Antes de empezar a configurar este medio de pago, es necesario [configurar el gateway Adyen](https://help.vtex.com/es/tutorial/como-configurar-el-gateway-adyen-en-vtex--tutorials_2337#) en su tienda.

- __Klarna Pay Later__: se puede usar con afiliaciones de gateway Klarna o Adyen.
    - __Klarna__: es necesario [configurar la afiliación Klarna](/es/tutorial/setting-up-klarna-pay-now-y-klarna-pay-later-as-payment-method#configurar-afiliacion-klarna) y instalar la aplicación _vtexdemoemea.klarna@2.0.9_ (o una versión superior) en su tienda. Obtenga más información sobre cómo instalar la aplicación en [Installing an app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-installing-an-app).
    - __Adyen__: es necesario [configurar la afiliación Adyen](https://help.vtex.com/es/tutorial/how-to-configure-the-adyen-gateway-on-vtex--tutorials_2337). Para completar esta configuración, solicite a Adyen que habilite el campo __Live Endpoint URL Prefix__ en su tienda e rellene el de acuerdo con la información descrita en [esta documentación de Adyen](https://www.adyen.help/hc/en-us/articles/360014322079-How-can-I-find-the-endpoint-URL-for-my-LIVE-account-).

>⚠️ Las soluciones Klarna Pay Now y Klarna Pay Later solo están habilitadas para SmartCheckout V6, y solamente los clientes del mercado europeo y estadounidense pueden utilizarlas. Estos medios de pago no son aplicables para clientes brasileños.

## Configurar afiliación Klarna 

Para configurar la afiliación Klarna, siga las instrucciones a continuación:

1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.
3. Después, haga clic en __Configuración__.
4. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __+__.   
5. Haga clic en __Klarna__.
6. Rellene los campos de registro __Application Key__ y __Application Token__ con la información proporcionada por el proveedor de pago Klarna.
7. Haga clic en __Guardar__.  

>⚠️ Si utiliza el conector de Klarna en un ambiente de Prueba, el campo **Application Key** debe ser configurado como <i>playground.{Klarna User}</i>. Cuando se utiliza en un ambiente de Producción, el campo **Application Key** debe ser su <i>Klarna User</i>.

## Configurar Klarna Pay Now

Para configurar Klarna Pay Now, siga las instrucciones a continuación:

1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.   
3. Después, haga clic en __Configuración__. 
4. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
5. Elige la condición de pago __Klarna Pay Now__.    
6. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.   
7. Active la condición en el campo __Status__.    
8. En __Procesar con la afiliación__, seleccione la opción __Adyen__.    
9. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__ y la solución contratada.    
10. Si desea, puede [configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete).
11. Haga clic en __Guardar__. 

Después de seguir los pasos indicados, Klarna Pay Now puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

## Configurar Klarna Pay Later

Para configurar Klarna Pay Later, siga las instrucciones a continuación:

1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.   
3. Después, haga clic en __Configuración__. 
4. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
5. Elige la condición de pago __Klarna__.
6. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.   
7. Active la condición en el campo __Status__.    
8. En __Procesar con la afiliación__, seleccione la opción __Klarna__ o __Adyen__.    
9. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__ y la solución contratada.    
10. Si desea, puede [configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete).
11. Haga clic en __Guardar__. 

Después de seguir los pasos indicados, Klarna Pay Later puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
