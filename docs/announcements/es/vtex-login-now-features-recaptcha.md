---
title: "Login de VTEX ahora tiene reCAPTCHA"
id: 3BagLuHhF6Ysi0mw6w0kwU
status: PUBLISHED
createdAt: 2017-10-25T21:52:16.082Z
updatedAt: 2021-01-29T17:18:43.937Z
publishedAt: 2021-01-29T17:18:43.937Z
contentType: updates
productTeam: Identity
author: authors_24
slug: login-de-vtex-ahora-tiene-recaptcha
legacySlug: login-de-vtex-ahora-tiene-recaptcha
announcementImageID: ""
announcementSynopsisES: El login de VTEX a través de email y contraseña ahora cuenta con reCAPTCHA
---

El acceso de VTEX a través de email y contraseña ahora cuenta con reCAPTCHA, que hace el acceso a las tiendas más seguro.

Usamos Invisible reCAPTCHA, una tecnología de Google que determina cuándo es necesario confirmar si el intento de acceso está siendo realizado por un robot o un humano.

![reCAPTCHA](//images.contentful.com/alneenqid6w5/2obeayJZP6k8q8a6W68sQI/08bbf823714965fd207961a792a94f9f/reCAPTCHA.png)

Esto significa que la solicitud de confirmación puede o no aparecer, dependiendo de varios factores.

Con este cambio, VTEX deja de impedir el acceso de un usuario después de 3 intentos incorrectos, ya que la seguridad queda garantizada por el reCAPTCHA.

<div class="alert alert-info">Actualmente, usamos reCAPTCHA solo en el flujo de login del admin.</div>

<div class="alert alert-warning">Debido a este cambio, <a href="https://help.vtex.com/es/announcements/integrations-with-vtex-apis-now-need-token-authentication--7AdnXDH7AkYmuEUmmis8Es">ya no se permite el uso de e-mail y contraseña para las integraciones</a>.</div>
