---
title: 'Configurar pagos con WebPay'
id: 4NdDfy57gc68cewEwwKGAS
status: DRAFT
createdAt: 2018-03-28T12:40:53.139Z
updatedAt: 2022-12-23T20:47:49.808Z
publishedAt: 
firstPublishedAt: 2018-04-02T19:28:30.940Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-webpay
locale: es
legacySlug: configurar-pagos-con-webpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Usted puede configurar el [subadquirente](/es/tutorial/que-es-un-subadquirente) WebPay para recibir pagos en su tienda. En esta modalidad, su cliente escoge el __medio de pago__ WebPay y realiza la autenticación en el ambiente externo de la solución de pagos.

Para habilitar los pagos con WebPay, siga estos pasos:

## Configurar la afiliación de gateway WebPay
1. Acceda al módulo __Pagos__.
2. Haga clic en __Settings__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __WebPay__.
5. En el campo __Código Comercio T. Crédito__, informe el número "5970" and el código de su tienda para usar tarjetas de crédito.
6. __Periodo de Gracia__ es un campo que sólo se aplica a los pagos en efectivo.
7. En __Tipo de Integracion__, elija la opción que representa el tipo de acuerdo comercial que su tienda tiene con WebPay.
8. En el campo __Dias para la captura de seguridad__, informe en cuánto tiempo desea que se realice la captura de seguridad.
9. En __Tiempo de espera de proceso__, defina (en días o horas) el tiempo que desea esperar por la autorización del pago antes de que se cancele el pedido.
10. En el campo __Senha do certificado privado__ ("Contraseña del certificado privado"), rellene la contraseña del certificado de su tienda.
11. En __Seleccione el certificado privado (.p12)__, cargue un certificado privado válido (generado por usted, utilizando una empresa certificadora o un software especializado), con extensión .p12 y clave.
12. Ya en __Seleccione el certificado público de respuesta (.crt)__, cargue un certificado público válido con extensión .crt (enviado por WebPay).
13. En el campo __Tipo de Comercio__, elija entre _NORMAL_ y _MALL_.
14. Haga clic en __Guardar__.

## Configurar la condición de pago WebPay
1. Dentro de los __Ajustes__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __WebPay__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. En __Procesar con la afiliación__, seleccione la opción _WebPay_.
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Es posible tambien configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, WebPay aparecerá en el checkout de su tienda como una opción de pago para que sus clientes lo utilicen.
