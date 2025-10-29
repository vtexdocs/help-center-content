---
title: 'Configurar el device fingerprint para Braspag'
id: frequentlyAskedQuestions_488
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.261Z
updatedAt: 2021-12-09T19:50:42.084Z
publishedAt: 2021-12-09T19:50:42.084Z
firstPublishedAt: 2019-01-24T22:04:58.918Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-the-device-fingerprint-for-braspag
legacySlug: como-configurar-el-device-finger-print-para-braspag-cybersource
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ es un identificador que actúa en el procesamiento de un pago, con el objetivo de mejorar el análisis del riesgo de fraude en cada transacción. 

Mediante la recolección de datos no sensibles, Device Fingerprint identifica y analiza el nivel de seguridad del dispositivo utilizado para realizar la transacción, así como las transacciones que se realizaron previamente con este mismo dispositivo.

> ℹ️ Cada tienda debe tener solo un registro de Device fingerprint. Verifique si ya ha registrado el Device Fingerprint en otro conector, antes de continuar con los pasos siguientes.

En este artículo, explicaremos cómo asociar Device Fingerprint con la afiliación Braspag.

> ℹ️ Las configuraciones documentadas en este artículo se realizan en un ambiente externo a VTEX. Por lo tanto, pueden estar desactualizadas.

Para insertar  los scripts que Braspag/CyberSource requiere para el device fingerprint, es necesario el uso de Google Tag Manager. Para ello, inicie sesión en [http://www.google.com/tagmanager](http://www.google.com/tagmanager/) y acceda a su cuenta.

## Creación de variables (macros) y disparadores

- Cree la variable de nombre `trasactionPaymentId`, tipo **Variable de la capa de datos**, leyendo la variable `transactionPayment.id` del datalayer.![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/como-configurar-el-device-finger-print-para-braspag_1.png)
- Cree la variable de nombre `cs_sessionId`, con el tipo **JavaScript personalizado** y el siguiente código:

```
function() {  
  var transactionPaymentId = {{transactionPaymentId}}  
  return transactionPaymentId.toLowerCase();
  }
```

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/como-configurar-el-device-finger-print-para-braspag_2.png)

- Cree las variables `cs_orgId` y `cs_merchantId` con el tipo **Permanente**. El valor de estas dos variables deberá rellenarse con el contenido proporcionado por Braspag.

![gtm-cybersource-variavel3-permanente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/como-configurar-el-device-finger-print-para-braspag_3.png)

- Cree o edite un disparador para la pantalla de OrderPlaced (pantalla de compra finalizada con éxito), para que sea compatible con el evento de tipo **Evento personalizado** y de valor **orderPlaced**.

![gtm-cybersource-acionador-orderplaced](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/como-configurar-el-device-finger-print-para-braspag_4.png)

## Creación de la tag para Braspag

- Cree una nueva tag, del tipo **HTML personalizado**.
- Dé el nombre de su preferencia.

Rellene con el siguiente código HTML:

```
<p style="background:url(https://h.online-metrix.net/fp/clear.png?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}&amp;m=1)">
<img src="https://h.online-metrix.net/fp/clear.png?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}&amp;m=2" alt="">

<object type="application/x-shockwave-flash" data="https://h.online-metrix.net/fp/fp.swf?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" width="1" height="1"id="thm_fp">
<param name="movie" value="https://h.online-metrix.net/fp/fp.swf?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" /><div></div></object>

<script src="https://h.online-metrix.net/fp/check.js?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" type="text/javascript"></script>
```

![braspag fingerprint](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/como-configurar-el-device-finger-print-para-braspag_5.png)

Por último, publique los cambios.
