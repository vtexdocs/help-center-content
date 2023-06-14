---
title: Configurar gateway WebPay2P
id: 34Bn1nOoVO6iesWAgSEQQA
status: PUBLISHED
createdAt: 2018-04-02T19:30:48.720Z
updatedAt: 2021-07-07T17:45:55.414Z
publishedAt: 2021-07-07T17:45:55.414Z
firstPublishedAt: 2018-04-02T19:46:03.221Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-webpay2p
legacySlug: configurar-gateway-webpay2p
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

[WebPay](https://publico.transbank.cl/productos-y-servicios/soluciones-para-ventas-internet/webpay.cl) es una [afiliación](https://help.vtex.com/es/tutorial/o-que-e-um-gateway-de-pagamentos) exclusiva para los clientes chilenos.  Para configurar la solución y procesar sus pagos con WebPay, realice los siguientes pasos:

Para configurar el WebPay como gateway, siga estos pasos:

1. Acceda al __Admin__ VTEX.
2. Haga clic en __Pagos > Configuración__.
3. En la pestaña de __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __WebPay2P__ y rellene los campos solicitados con la siguiente información:

    - __Código Comercio T. Crédito__: El código de su tienda para el uso de tarjetas de crédito.
    - __Periodo de Gracia__: Rellene este campo solo si va a ofrecer pagos en efectivo.
    - __Tipo de integración__: Seleccione la opción basándose en el acuerdo comercial que su tienda tiene con WebPay.
    - __Días para captura de seguridad__: Número de días que desea establecer para realizar la captura de seguridad.
    - __Tiempo de espera de procesamiento__: Tiempo para la autorización del pago antes de que se cancele el pedido.
    - __Contraseña del certificado privado__: Contraseña del certificado de su tienda.
    - __Seleccione el certificado privado (.p12)__: Suba un certificado privado válido (generado por usted, utilizando un certificador o un software especializado), con una extensión .p12 y una clave.
    - __Seleccione el certificado público de respuesta (.crt)__: Suba un certificado público válido con extensión .crt (enviado por WebPay).
    - __Tipo de Comercio__: Elija entre NORMAL y MALL.
    - __Usa Preauth__: Indique si va a utilizar la preautorización en los pagos de su tienda.

<ui>
5. Haga clic en <b>Guardar</b>.
  </ui>

## Configurar condición de pago

Una vez que haya completado los pasos indicados, WebPay estará configurado en su tienda. Así, cuando registre una condición de pago, esta estará disponible en el campo __Proceso con afiliación__ (siempre y cuando el método de pago sea compatible con WebPay). 

Para saber cómo configurar condiciones de pago, consulte el artículo [Configurar pagos con WebPay](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-webpay#configurar-condicao-de-pagamento-webpay).

