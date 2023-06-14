---
title: 'Configurar el gateway VTEX B2W'
id: 4Xssw6LV5ewAWEssiqgmU6
status: DRAFT
createdAt: 2018-03-09T15:11:51.754Z
updatedAt: 2022-02-02T14:46:32.563Z
publishedAt: 
firstPublishedAt: 2018-03-09T15:39:13.088Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-el-gateway-vtex-b2w
locale: es
legacySlug: configurar-el-gateway-vtex-b2w
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

VTEX tiene un gateway nativo con certificación [PCI Security Standards Council](/es/faq/que-es-el-pci-ssc). Esto significa que sigue los más altos estándares de seguridad de datos, garantizando más protección para las transacciones realizadas en su tienda.

Son tres conectores diferentes: con el __VTEXB2W__ configurado, su tienda en el marketplace de B2W va a procesar pagos realizados con boletos bancarios y las principales banderas de tarjetas de crédito. Sólo hay que seguir los pasos abajo.

## Configurar la afiliación de gateway VTEX B2W
1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuración__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __VTEXB2W__.
5. En el campo __External Service Url__, configure la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
6. Rellene los campos de registro con los datos proporcionados por VTEX (campos _appKey_ y _appToken_). Vea cómo encontrar esta información [en este artículo](/es/tutorial/crear-appkey-y-apptoken-para-autenticar-las-integraciones).
7. En __Implements Installments Service__, elija si desea utilizar servicios externos de parcelación o el que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
8. En __External cancellation Service__, defina si quiere o no usar un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
9. En el campo __Installments Service Url__, configure la URL externa que va a estar asociada a `/options`.
10. En __SoftDescriptor__, indique el texto que va a aparecer para identificar transacciones realizadas en su tienda.
11. En el campo __B2W Service Url__, defina la URL que se utilizará para recoger el token de los pagos.
12. En __b2wServiceUser__ y __b2wServicePassword__, introduzca los datos de su cuenta en el marketplace de B2W.
13. En __mainAccountName__, rellene el Account Name principal al que está vinculada su tienda en el marketplace de B2W.
14. En el campo __Captura de segurança antecipada__ ("Captura de seguridad anticipada"), seleccione en cuánto tiempo quiere que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
15. En __Usa Antifraude__, informe si desea usar el servicio de antifraude.
16. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, VTEX B2W va a estar configurado en su tienda y podrá ser utilizado para procesar pagos en el marketplace de B2W. Para utilizar el gateway, basta con registrar una condición de pago compatible y el VTEX B2W estará disponible en el campo __Procesar con la afiliación__. 
Para saber cómo definir condiciones de pago, acceda a [este artículo](/en/tutorial/how-to-configure-payment-conditions).
