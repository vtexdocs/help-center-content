---
title: 'Configurar gateway PayU Global'
id: 2M5OMlqXdYo2CUg8WQIEam
status: ARCHIVED
createdAt: 2018-03-27T22:40:30.796Z
updatedAt: 2022-12-23T20:41:58.726Z
publishedAt: 
firstPublishedAt: 2018-03-27T22:49:27.104Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-payu-global
locale: es
legacySlug: configurar-gateway-payu-global
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

PayU Global es un [gateway de pagos](/es/tutorial/que-es-un-gateway-de-pagos) que ofrece una serie de soluciones para facilitar (y dejar más seguras) las transacciones realizadas en su tienda. Con la [certificación PCI](/es/faq/que-es-el-pci-ssc), esta solución es exclusiva para las tiendas de Rumania.

>ℹ️ Atención: actualmente, VTEX solo es compatible con las versiones 1.0.0 y 1.0.1 de PaymentsOS.

Para configurar PayU Global, siga los pasos abajo:

## Configurar la afiliación de gateway PayU Global
1. Acceda al módulo __Pagos__.
2. Haga clic en __Ajustes__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __PayU Global__.
5. Rellene los campos de registro con los datos proporcionados por PaymentsOS (campos _App ID_, _Public Key_ y _Private Key_).
6. En el campo __Moneda de la cuenta PayU__, seleccione la moneda que se utilizará en las transacciones.
7. En __País de la cuenta PayU__, elija el país de su tienda (como es una solución exclusiva, Rumania es el país que debe estar seleccionado).
8. En el campo __Captura de seguridad anticipada__, defina cuánto tiempo desea que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
9. En __¿Tiene un antifraude contratado con esa afiliación?__, informe si desea usar un antifraude.
10. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, PayU Global estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con PayU Global). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
