---
title: 'La validación con reCAPTCHA ahora seguirá la configuración del orderForm en todos los requests'
id: 3SLXk0n8neXgWxaLaIgAC7
status: PUBLISHED
createdAt: 2023-07-04T21:20:42.330Z
updatedAt: 2023-07-05T18:40:32.146Z
publishedAt: 2023-07-05T18:40:32.146Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-07-04-recaptcha-validation-will-now-follow-orderform-configuration-for-all-requests
locale: es
legacySlug: la-validacion-con-recaptcha-ahora-seguira-la-configuracion-del-orderform-en
announcementImageID: 'undefined'
announcementSynopsisES: 'Tiendas que utilicen la API de Checkout para realizar pedidos deben revisar sus integraciones'
---

[reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) es un servicio de seguridad utilizado para determinar si una acción la realiza un usuario real o una automatización maliciosa, protegiendo los sitios web contra fraudes y abusos. Al activar [reCAPTCHA en el checkout](https://help.vtex.com/es/tutorial/recaptcha-en-el-checkout--18Te3oDd7f4qcjKu9jhNzP), además de seguir las mejores prácticas contra ataques virtuales, reduces el riesgo de que tu tienda sea vulnerada con fines fraudulentos.

A partir de ahora, y para proteger aún más a nuestros clientes, VTEX aplicará la configuración del orderForm reCAPTCHA de cada cuenta a todos los requests provenientes de la API de Checkout, independientemente de los roles asociados al usuario o clave de la aplicación.

Los administradores de tienda que utilizan la API de Checkout para realizar pedidos desde aplicaciones móviles, entornos de tienda headless y otras aplicaciones similares deben
 [revisar](#revisa-tus-integraciones) y [ajustar](#ajusta-tus-integraciones) sus integraciones antes del __1 de septiembre de 2023__.

## ¿Qué cambia?

Antes, la verificación con reCAPTCHA no era necesaria para los pedidos realizados por usuarios y claves de aplicación con el recurso [recurso](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) `Shopping Cart Full Access` en License Manager. Esto incluye [roles predefinidos](https://help.vtex.com/es/tutorial/roles-de-usuario-predefinidos--jGDurZKJHvHJS13LnO7Dy) como el rol `Owner (Admin Super)` y `User Admin - RESTRICTED`, así como el [usuario Titular](https://help.vtex.com/es/tutorial/que-es-el-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy).

Ahora, la verificación con reCAPTCHA seguirá la configuración del orderForm establecida en cada cuenta en todos los requests de la API de Checkout, independientemente de los roles asociados al usuario o la clave de aplicación.

## ¿Por qué realizamos este cambio?

Esta acción era necesaria para reducir las posibilidades de fraude y abuso en nuestras tiendas, como por ejemplo la prueba de tarjetas (card testing). Aunque las mejores prácticas para el uso de claves de aplicación indican que las tiendas deben crear claves individuales para cada integración y otorgarles roles restrictivos, algunos administradores de tiendas se ponían en riesgo al utilizar claves de aplicación con roles de administrador. 

Entendemos que puede haber una razón legítima para que en algunas integraciones se amplíen los permisos dando acceso a más recursos e información, por lo que tomamos la decisión de solicitar a los administradores de tiendas que implementen reCAPTCHA en dichas integraciones. Si esto no fuera posible, tienen la opción de deshabilitar la validación reCAPTCHA en sus cuentas (`recaptchaValidation="never"`) e implementar medidas de protección alternativas contra ataques automatizados.

Sabemos que estos cambios tendrán un impacto en las operaciones de nuestros clientes, pero adoptar las mejores prácticas de seguridad siempre es necesario y beneficioso para todo nuestro ecosistema.

## ¿Qué se necesita hacer?

### Revisa tus integraciones

Pide a tu equipo de desarrolladores que revisen tus integraciones que utilizan la API de Checkout para realizar pedidos en tu tienda VTEX, usando los siguientes endpoints:

- [Place order from an existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction)
- [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders)

Tu equipo podrá guiarse por el siguiente diagrama para evaluar si es necesario ajustar una integración, según la [configuración del reCAPTCHA en el orderForm](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) de tu tienda y cómo se [autentican](https://developers.vtex.com/docs/guides/authentication-overview) los requests realizados a estos endpoints:

![reCAPTCHA diagram](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2023/julio/2023-07-04-validacion-con-recaptcha-seguira-la-configuracion-del-orderform-en-todos-los-requests_1.png)

- __Caso 1__: *no se requieren cambios en la integración, pero tu tienda podría estar en riesgo.*

Tu tienda no utiliza reCAPTCHA en el Checkout y, por lo tanto, es vulnerable a ataques automatizados, a menos que implementes otras medidas de protección en tu integración.

- __Caso 2__: *necesitas ajustar tu integración, de lo contrario podría dejar de funcionar.*

Tu tienda utiliza reCAPTCHA en el Checkout, pero no está preparada para mostrarlo correctamente en la interfaz de usuario. Tu equipo de desarrolladores debe [ajustar sus integraciones](#ajusta-tus-integraciones).

- __Caso 3__: *no se requieren cambios en la integración.*

Tu tienda utiliza reCAPTCHA en el Checkout y está preparada para exhibirlo correctamente en la interfaz de usuario. ¡Enhorabuena por seguir las mejores prácticas en materia de seguridad!

### Ajusta tus integraciones

Si tu equipo de desarrolladores identifica que tu integración requiere algún tipo de atención, deben seguir las instrucciones proporcionadas en el artículo [Implementing reCAPTCHA in integrations](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations).

> ⚠️ Si está implementando reCAPTCHA en una aplicación móvil nativa, use reCAPTCHA v3. De lo contrario, use reCAPTCHA v2.

Al utilizar el `recaptchaKey` que devolvió el Checkout, el widget reCAPTCHA debe ser renderizado en la interfaz de usuario de tu aplicación móvil/entorno de tienda headless (o similar) como se describe en el artículo de [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display?hl=es-419) o [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3?hl=es-419) proporcionado por Google.

Después de que el comprador resuelva el reCAPTCHA, su respuesta (`recaptchaToken`) se debe enviar a la API de Checkout para completar la compra, tal y como se describe en la sección *Final validation* del artículo [Implementing reCAPTCHA in integrations](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#final-validation). En este momento, la API de Checkout [verificará la respuesta del usuario](https://developers.google.com/recaptcha/docs/verify?hl=es-419) utilizando el token proporcionado.

> ❗ Todas las integraciones que utilicen la API de Checkout para realizar pedidos deben revisarse y ajustarse antes del 1 de septiembre de 2023. Las aplicaciones que no tengan la capacidad de mostrar el widget reCAPTCHA y verificar la respuesta del usuario no podrán realizar pedidos a partir de esta fecha.

## Más información

Consulta los siguientes artículos sobre reCAPTCHA y las mejores prácticas para garantizar la protección de tu tienda:

- [reCAPTCHA en el Checkout](https://help.vtex.com/es/tutorial/recaptcha-en-el-checkout--18Te3oDd7f4qcjKu9jhNzP)
- [Prácticas recomendadas para evitar ataques virtuales](https://help.vtex.com/es/tutorial/practicas-recomendadas-para-evitar-ataques-virtuales--191rpbF7UgrKapVCi1PCDE)
- [Prácticas recomendadas para evitar ataques virtuales](https://help.vtex.com/es/tutorial/buenas-practicas-claves-de-aplicacion--7b6nD1VMHa49aI5brlOvJm)
- [Recursos del License Manager](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3)

