---
title: 'Security certificate (SSL)'
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
legacySlug: hiring-the-security-certificate-sll
locale: en
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

The SSL (Secure Socket Layer) is a protocol intended to increase the security of data transmitted on the Internet. SSL connections are particularly recommended for sending data such as credit card numbers, passwords and any other confidential information through the Internet.

Whenever you access a safe web page, that is, an Internet page that is protected by an SSL certificate, a key, or a lock, appears on the status bar to indicate that the connection is safe. Traditional certificates require that you click on the key or lock in order to have access to the information of SSL certificate holders.

There is no need to request the purchase of an SSL certificate. VTEX generates an SSL certificate for your store and guarantees its automatic renewal. The certificate is issued via Let's Encrypt and its creation is VTEX's responsibility at [the time of the store's Go-Live](/en/tutorial/configuring-dns-pointing-to-vtex--tutorials_4280).

> ⚠️ Some stores may require customized certificates to meet specific compliance or security requirements. The **SSL Certificates** page in the VTEX Admin allows you to install and manage custom certificates. This feature is available only for stores that have opted in and use [VTEX Shield](/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). For more information, see the guide [Custom SSL certificates](/en/tutorial/custom-ssl-certificates--1hoaDEbU50PDZSe6AYep9q).
