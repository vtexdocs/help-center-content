---
title: 'Integración con VTEX ID'
id: 4wGcnjMDg5KpLc40o14dDd
status: ARCHIVED
createdAt: 2019-01-23T18:56:08.943Z
updatedAt: 2022-08-04T22:35:48.188Z
publishedAt: 
firstPublishedAt: 2019-01-23T19:43:43.591Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: integracao-com-vtex-id
locale: es
legacySlug: integracao-com-vtex-id
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

VTEX no es compatible con integraciones de VTEX ID (nuestro sistema de autenticación y autorización) en ambientes de terceros.

La forma ideal de tener un flujo de login integrado entre diferentes sistemas es utilizar un proveedor OAuth.

VTEX ID tiene integración completa con los servicios de OAuth 2.0, que se pueden ampliar incluso para el acceso al ambiente administrativo. Ver más en: [Crear autenticación OAuth2](/es/faq/crear-autenticacion-oauth2)

Naturalmente, el flujo nativo entregado por VTEX ID siempre será el más corto y optimizado para la mejor experiencia del usuario, especialmente para en un ambiente de comercio electrónico.

Por lo tanto, la mejor alternativa para una experiencia de autenticación unificada es utilizar una _"web view"_ en el servicio externo que lleve el VTEX ID hasta el usuario.

Siempre que el usuario inicia sesión se crean cookies que contienen el token de autorización. A partir de eso, él pasa a estar identificado en los servicios y APIs de VTEX, donde podrá hacer las acciones que son pertinentes solamente a usuarios identificados. Ver más en: [Verificación del usuario que está autenticado](https://help.vtex.com/es/tutorial/verificacion-del-usuario-que-esta-autenticado--4vLALC0yrsJydfaY56Zshq)
