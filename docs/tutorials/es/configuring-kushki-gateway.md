---
title: 'Configurar gateway Kushki'
id: 69VC8nQMkEE0yu8oIyG2wG
status: PUBLISHED
createdAt: 2018-04-24T15:50:00.468Z
updatedAt: 2023-03-29T00:41:16.269Z
publishedAt: 2023-03-29T00:41:16.269Z
firstPublishedAt: 2018-04-24T19:47:19.057Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-kushki
locale: es
legacySlug: configurar-gateway-kushki
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Kushki es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) con certificación [PCI](/es/faq/que-es-el-pci-ssc) que opera enfocado en América Latina.

Para configurar Kushki, siga estos pasos:

## Configurar la afiliación de gateway Kushki
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Kushkiv2__.
4. Rellene los campos con los datos proporcionados por Kushki.
5. El campo __appKey__ debe rellenarse con la __clave privada__ de Kushki.
6. El campo __appToken__ debe rellenarse con la __clave pública__ de Kushki.
7. Para guardar, haga clic en el botón __Salva__.

Después de finalizar esta configuración, usted tiene que crear las credenciales de VTEX para configurar la afiliacón Kushki en su tienda. Para más detalles, consulte la [guía de autenticación](https://developers.vtex.com/docs/getting-started-authentication "guía de autenticación") en el Portal del Desarrollador.  

## Configurar la condición de pago
Luego de realizar los ajustes anteriores, Kushki estará configurada en su tienda. Por lo tanto, cuando registre una condición de pago estará disponible en el campo __Proceso con la afiliación__ (cuando el medio de pago sea compatible con Kushki). Para saber cómo definir las condiciones de pago, acceda a [este artículo](/es/tutorial/condiciones-de-pago).
