---
title: Configurar el gateway VTEX Standard Promissory
id: 2LEec9Z3m0gS8gCAK2uIYc
status: DRAFT
createdAt: 2018-03-09T14:46:43.809Z
updatedAt: 2020-04-22T13:52:07.836Z
publishedAt: 
firstPublishedAt: 2018-03-09T15:09:10.272Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-el-gateway-vtex-standard-promissory
legacySlug: configurar-el-gateway-vtex-standard-promissory
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

VTEX tiene un gateway nativo con certificación del [PCI Security Standards Council](/es/faq/que-es-el-pci-ssc). Esto significa que sigue los más altos estándares de seguridad de datos, garantizando más protección para las transacciones realizadas en su tienda.

Son tres conectores diferentes: con el __VTEX Standard Promissory__ configurado, su tienda va a procesar pagos realizados con pagarés. Sólo hay que seguir los pasos abajo:

## Configurar la afiliación de gateway VTEX Standard Promissory
1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuración__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __VTEX Standard Promissory__.
5. En el campo __External Service Url__, configure la URL externa que estará asociada a `/pvt/payments?an={AccoutName}`.
6. Rellene los campos de registro con los datos proporcionados por VTEX (campos _appKey_ y _appToken_). Para saber cómo encontrar esta información, lea [este artículo](/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones).
7. En __Implements Installments Service__, elija si desea utilizar servicios externos de parcelación o el que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
8. En __External cancellation Service__, defina si quiere o no usar un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
9. En el campo __Installments Service Url__, configure la URL externa que estará asociada a `/options`.
10. En __SoftDescriptor__, indique el texto que va a aparecer para identificar las transacciones realizadas en su tienda.
11. En el campo __Captura de Segurança Antecipada__ ("Captura de seguridad anticipada"), defina en cuánto tiempo la captura será realizada después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
12. En __Usa Antifraude__, informe si desea usar un servicio de antifraude.
13. Haga clic en __Guardar__.

## Configurar la condición de pago

Después de seguir los pasos indicados arriba, VTEX Standard Promissory estará configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, este gateway estará disponible en el campo **Procesar con la afiliación** siempre que los medios de pago sean compatibles.



Para saber cómo registrar pagos personalizados, acceda a [este artículo](http://help.vtex.com/es/tutorial/condiciones-de-pago)
