---
title: 'Configurar gateway CyberSource'
id: 6nhvUTrLxeacsoYG6GkGM
status: PUBLISHED
createdAt: 2018-04-30T17:34:57.517Z
updatedAt: 2023-03-29T00:33:54.554Z
publishedAt: 2023-03-29T00:33:54.554Z
firstPublishedAt: 2018-04-30T20:20:44.704Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-cybersource
locale: es
legacySlug: configurar-gateway-cybersource
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

CyberSource es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que ofrece diversas soluciones para ayudar a su tienda a administrar pagos. Entre ellas está un __gateway__ de pagos, que ofrece integración con la plataforma VTEX. Si usted está buscando más detalles sobre el __antifraude__ CyberSource, lea [este artículo del Help](/es/tutorial/configurar-antifraude-cybersource).

Para configurar el __gateway__ de CyberSource, siga los pasos abajo:

## Configurar la afiliación de gateway CyberSource
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __CyberSource__ que se encuentra en la sección _OTROS_.
4. Rellene los campos de registro con los datos proporcionados por CyberSource (_Identificacion de la tienda en Cybersource/ Id del comercio en CyberSource_, _Nombre de usuario / Nombre del Usuario utilizado en el painel de Cybersource_ y _Contraseña / contraseña utilizada en el painel de Cybersource_).
5. En el campo __Nombre de su empresa__, informe la razón social de su tienda.
6. En __CNPJ de su Empresa__, informe el número del CNPJ de su tienda.
7. En el campo __Moneda__, elija la moneda que se utilizará en las transacciones de su tienda.
8. En __Certificado privado (.p12)__ , cargue un certificado privado válido (generado por usted, utilizando una empresa certificadora o un software especializado), con extensión .p12 y clave.
9. En el campo __Contraseña del certificado privado__, introduzca la contraseña (ese es tu _Identificacion de la tienda en Cybersource/ Id del comercio en CyberSource_).
10. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, el gateway de CyberSource estará configurado en su tienda. Así, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con CyberSource). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
