---
title: 'Configurar Device Fingerprint de Mercado Pago'
id: m2knP9z69HGHHBIiFq0Ga
status: PUBLISHED
createdAt: 2021-07-05T13:25:37.711Z
updatedAt: 2021-12-09T19:38:43.090Z
publishedAt: 2021-12-09T19:38:43.090Z
firstPublishedAt: 2021-07-05T13:34:09.043Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-device-fingerprint-de-mercado-pago
legacySlug: configurar-device-fingerprint-de-mercado-pago
subcategory: 
---

__Device Fingerprint__ es un identificador que actúa en el procesamiento de un pago, con el objetivo de mejorar el análisis del riesgo de fraude en cada transacción. 

Mediante la recolección de datos no sensibles, Device Fingerprint identifica y analiza el nivel de seguridad del dispositivo utilizado para realizar la transacción, así como las transacciones que se realizaron previamente con este mismo dispositivo.

<div class="alert alert-info">
Cada tienda debe tener solo un registro de Device fingerprint. Verifique si ya ha registrado el Device Fingerprint en otro conector, antes de continuar con los pasos siguientes.
</div>

En este artículo, explicaremos cómo asociar Device Fingerprint con la afiliación Mercado Pago.

1. Acceda a __Admin__ VTEX.
2. En __Configuración de la tienda__, haga clic en __Checkout__.
3. En __Default__, haga clic en el engranaje azul.
4. En la pestaña superior, haga clic en __Código__.
5. En el lado derecho, en __Archivos__, seleccione una de las siguientes opciones:

- Si utiliza la V5 del checkout, haga clic en __checkout5-custom.js__
- Si utiliza la V6 del checkout, haga clic en __checkout6-custom.js__

<ui>
6. En el siguiente campo, borre el mensaje de aviso e ingrese el siguiente código:
</ui>

```
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
console.log("MP-deviceId 2020 " + script.getAttribute("output").value );
```

<ui>
  7. Haga clic en <b>Guardar</b> para que el código se aplique al checkout.
</ui>

Al finalizar esa configuración, Device Fingerprint de Mercado Pago estará instalado en su tienda.

## Confirmar el envío de Device Fingerprint

Para asegurarse de que este recurso funciona, es necesario revisar los detalles de una compra realizada utilizando Mercado Pago como forma de pago. Para ello, siga los siguientes pasos:

1. Acceda a __Admin__ VTEX.
2. Haga clic en __Pagos > Transacciones__.
3. Seleccione la transacción más reciente que haya utilizado Mercado Pago como forma de pago. 
4. En la siguiente página, haga clic en __+Información__.
5. Al hacer clic en __+Información__, busque el campo __deviceFingerprint__ y verifique si el  código disponible inicia con la palabra __armor__, según el siguiente ejemplo. 

![Device Fingerprint Armor](//images.ctfassets.net/alneenqid6w5/2py5aLnSL2AZD9U29Bj9Nw/ea05aa211a85d6731b7eb6308ebfd192/DEVICEFINGERPRINTARMOR.png)

<ui>
6. Después de confirmar que la información es correcta, el paso final para la verificación deDevice Fingerprint es enviar el ID de la transacción al equipo de Mercado Pago. Este ID puede encontrarse en el campo <b>authorizationConnectorResponse</b>, en el detalle de la transacción.
  </ui>

  ![Autorización](//images.ctfassets.net/alneenqid6w5/5FTRfpgGc7HJZUNaZicEb4/5c71d9b8d1eed010b71ddb838fd47f19/AUTHORIZATION.png)

<ui>
  7. Copie el ID y <a href=https://www.mercadopago.com.ar/developers/es/support>envíe un email</a> a Mercado Pago con esta información y pídales que validen la transacción. De esta manera, Mercado Pago podrá evaluar si el Dispositivo Fingerprint está funcionando correctamente.
  </ui>

Una vez que recibe la respuesta de Mercado Pago, Device Fingerprint estará instalado y listo para ser utilizado en su tienda.
