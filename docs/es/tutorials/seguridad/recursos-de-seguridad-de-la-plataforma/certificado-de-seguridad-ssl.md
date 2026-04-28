---
title: 'Certificado de seguridad (SSL)'
id: tutorials_1308
status: PUBLISHED
createdAt: 2017-04-27T21:56:41.946Z
updatedAt: 2025-04-01T20:13:59.166Z
publishedAt: 2025-04-01T20:13:59.166Z
firstPublishedAt: 2017-04-27T23:03:50.121Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: security-certificate-ssl
legacySlug: como-contratar-el-certificado-de-seguridad
locale: es
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

El SSL (Secure Socket Layer) es un protocolo desarrollado para elevar el nivel de seguridad de los dados transmitidos en la internet. Las conexiones por SSL son indicados para envío de informaciones como números de tarjetas de crédito, contraseñas y cualquier otra información confidencial vía internet.

Siempre que tu accedes una página segura, que sea protegida por un certificado SSL, es presentada una “clave” o un “candado” en la barra de estado para indicar la comunicación segura. Los certificados tradicionales exigen que tu clic en la clave o candado para poder acceder a informaciones del titular del certificado SSL.

No es necesario solicitar la compra de un certificado SSL. VTEX genera un certificado SSL para tu tienda y garantiza su renovación automática. El certificado se emite a través de Let's Encrypt y su creación es responsabilidad de VTEX en [el momento del Go-Live de la tienda](/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex--tutorials_4280).

> ⚠️ Algunas tiendas pueden necesitar certificados personalizados para cumplir con requisitos de compliance o seguridad. Para atender esa necesidad, la página **Certificados SSL** permite instalar y gestionar certificados personalizados. Está disponible en el Admin VTEX para tiendas que utilizan [VTEX Shield](/es/docs/tutorials/vtex-shield) y elijan este recurso. Para más información, consulta la guía [Certificados SSL personalizados](/es/docs/tutorials/certificados-ssl-personalizados).
