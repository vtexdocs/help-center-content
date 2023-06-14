---
title: Configurar pago con MobilPay
id: 3NG5rHR700xg8CaPy1IGRn
status: DRAFT
createdAt: 2022-02-22T15:08:29.690Z
updatedAt: 2022-12-23T20:29:50.244Z
publishedAt: 
firstPublishedAt: 2022-02-22T19:37:58.721Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-mobilpay
legacySlug: configurar-pago-con-mobilpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos MobilPay. Con este conector, tu tienda puede realizar ventas a través de la cartera digital (wallet) de MobilPay.

Para configurar la afiliación MobilPay, siga los pasos a continuación:

1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.
3. Después, haga clic en __Configuración__.
4. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __+__.
5. Haga clic en el conector __MobilPay__.
6. En __SellerAccountId__, ingrese sus datos de identificación (Id) o suscripción proporcionada por MobilPay.
7. En __Country__, seleccione el país donde operará su tienda.
8. En __Currency__, seleccione la moneda en la que su tienda recibirá los pagos.
9. En __Language__, seleccione en qué idioma se mostrará la información de pago.
10. En __Certificate [.cer]__, haga clic en el botón __Upload__ para cargar el certificado (extensión .cer) disponible en su cuenta de MobilPay.
11. En __Private Key [.key]__, haga clic en el botón __Upload__ para cargar el certificado (extensión .key) disponible en su cuenta de MobilPay.
12. En los campos __UserName__ y __Password__, ingrese sus datos utilizados para llamar a los métodos de captura y crédito de la API de MobilPay.
13. Haga clic en __Guardar__.

## Configurar condición de pago
1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos__.
3. Después, haga clic en __Configuración__.
4. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
5. Elige la condición de pago __MobilPay__.
6. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
7. Active la condición en el campo __Status__.
8. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
9. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
10. Haga clic en __Guardar__.

Después de seguir los pasos indicados, MobilPay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
