---
title: Configurar gateway maxiPago!
id: 5yUVMQON0WqaGG8Owi4oAU
status: DRAFT
createdAt: 2018-04-20T16:23:13.404Z
updatedAt: 2022-12-23T20:25:57.357Z
publishedAt: 
firstPublishedAt: 2018-04-20T20:59:21.701Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-maxipago
legacySlug: configurar-gateway-maxipago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

MaxiPago! es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que se integra con los principales adquirentes y medios de pago de Brasil.

Para configurar maxiPago!, siga estos pasos:

## Configurar la afiliación de gateway maxiPago!
1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuración__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __MaxiPago__.
5. Rellene los campos de registro con los datos enviados por maxiPago! (campos _Merchant Id_ y _Merchant Key_).
6. En el campo __Moeda__, elija la moneda que se utilizará en las transacciones de su tienda.
7. En __Tipo de parcelamento__, defina si el parcelamiento tendrá o no la incidencia de intereses.
8. En los campos __Visa__, __Mastercard__, __Diners__, __Discover__, __Amex__, __ELO__, __Hipercard__ y __Credz__, seleccione los adquirentes que se van a utilizar para cada tarjeta. La elección dependerá de su contrato con maxiPago!.
9. En __Boleto Bancario__, defina el banco que va a ser usado para generar los boletos. Esta elección también depende del contrato con maxiPago!.
10. En el campo __Instruções no boleto ao Caixa__, escriba las instrucciones que serán impresas en el boleto para el cajero.
11. En __Validade do boleto em dias__, seleccione el número de días para pago hasta que el boleto deje de valer.
12. En el campo __Processador de Antifraude__, elija el antifraude que ha configurado en maxiPago! o deshabilite la función.
13. En __Boleto Registrado__, informe si el boleto tiene o no registro.
14. En el campo __Captura de segurança antecipada__, seleccione en cuánto tiempo desea que la captura se realice (después de la aprobación de la transacción y del análisis del antifraude). También puede desactivar esta función.
15. En __¿Tiene un antifraude contratado con esa afiliación?__, informe si usted tiene o no antifraude configurado en maxiPago!
16. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados, maxiPago! estará configurado en su tienda. Así, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con maxiPago!). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
