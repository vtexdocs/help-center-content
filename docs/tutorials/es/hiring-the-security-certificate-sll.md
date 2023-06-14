---
title: Contratar el certificado de seguridad (SSL)
id: tutorials_1308
status: PUBLISHED
createdAt: 2017-04-27T21:56:41.946Z
updatedAt: 2022-04-27T18:02:58.224Z
publishedAt: 2022-04-27T18:02:58.224Z
firstPublishedAt: 2017-04-27T23:03:50.121Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: como-contratar-el-certificado-de-seguridad
legacySlug: como-contratar-el-certificado-de-seguridad
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---

El SSL (Secure Socket Layer) es un protocolo desarrollado para elevar el nivel de seguridad de los dados transmitidos en la internet. Las conexiones por SSL son indicados para envío de informaciones como números de tarjetas de crédito, contraseñas y cualquier otra información confidencial vía internet.

Siempre que tu accedes una página segura, que sea protegida por un certificado SSL, es presentada una “clave” o un “candado” en la barra de estado para indicar la comunicación segura. Los certificados tradicionales exigen que tu clic en la clave o candado para poder acceder a informaciones del titular del certificado SSL.

## Tu certificado

No necesita más solicitar la compra del certificado SSL (provido antes por Digicert).
El certificado ahora es creado vía Let’s Encrypt y la creación es de responsabilidad de VTEX y es hecha [en el _GoLive_ de la tienda](https://help.vtex.com/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex--tutorials_4280).

<div class="alert alert-warning">
Ten en cuenta que VTEX genera un certificado SSL para tu tienda y garantiza su renovación automática. Por lo tanto, no recomendamos instalar ningún otro certificado. Sin embargo, si necesitas instalar otro certificado, solicítalo a nuestro [soporte](https://help.vtex.com/es/support)
</div>
