---
title: 'Checkout: nueva validación de reCAPTCHA'
id: 1npERT6lyshKPOJlFUeC7y
status: PUBLISHED
createdAt: 2025-09-01T18:57:56.689Z
updatedAt: 2025-09-08T13:00:09.650Z
publishedAt: 2025-09-08T13:00:09.650Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2025-09-01-checkout-new-recaptcha-validation
locale: es
legacySlug: checkout-nueva-validacion-de-recaptcha
announcementImageID: 'undefined'
announcementSynopsisES: 'Nueva capa de seguridad en Checkout valida hosts vía License Manager utilizando reCAPTCHA.'
---

Para mejorar la seguridad durante el checkout, agregamos una nueva capa de protección en la validación de [reCAPTCHA](https://help.vtex.com/es/tutorial/recaptcha-en-el-checkout--18Te3oDd7f4qcjKu9jhNzP) de la tienda. Ahora, los [hosts](https://help.vtex.com/es/tutorial/configurar-dominio-de-la-tienda--tutorials_2450#estructura-de-la-direccion-de-la-tienda) de la tienda se validan vía [License Manager](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc), el sistema encargado de comprobar si un usuario tiene los permisos adecuados para realizar acciones en la plataforma.

## ¿Qué cambió?

El sistema del módulo Checkout ahora verifica si el host en el que se resolvió el desafío de validación del reCAPTCHA, como `www.mystore.com`, está registrado en el License Manager de esa cuenta. Esta verificación ayuda a evitar accesos maliciosos e intentos de fraude. 

Para consultar los hosts configurados en tu cuenta, usa el endpoint [Get stores](https://developers.vtex.com/docs/api-reference/license-manager-api#get-/api/vlm/account/stores). Para registrar un nuevo host en tu tienda, consulta [Configurar dominio de la tienda](https://help.vtex.com/es/tutorial/configurar-dominio-de-la-tienda--tutorials_2450#registrar-nuevo-host).

## ¿Qué se necesita hacer?

Después de registrar los hosts en la cuenta, [configura reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) en tu tienda. Si tu tienda utiliza integraciones personalizadas en Checkout, debes asegurarte de que [reCAPTCHA esté correctamente integrado](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations) con ellas.

Las tiendas que ya usan sus propias [claves de reCAPTCHA](https://cloud.google.com/recaptcha/docs/create-key-website?hl=es-mx) en las integraciones como método de validación no necesitan realizar ninguna acción.

