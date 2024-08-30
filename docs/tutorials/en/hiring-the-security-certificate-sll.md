---
title: 'Hiring the security certificate (SSL)'
id: tutorials_1308
status: PUBLISHED
createdAt: 2017-04-27T21:56:41.946Z
updatedAt: 2022-04-27T18:02:58.224Z
publishedAt: 2022-04-27T18:02:58.224Z
firstPublishedAt: 2017-04-27T23:03:50.121Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: hiring-the-security-certificate-sll
locale: en
legacySlug: hiring-the-security-certificate-sll
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---


The SSL (Secure Socket Layer) is a protocol intended to increase the security of data transmitted on the Internet. SSL connections are particularly recommended for sending data such as credit card numbers, passwords and any other confidential information through the Internet.

Whenever you access a safe webpage, that is, an Internet page that is protected by an SSL certificate, a key, or a lock, appears on the status bar to indicate that the connection is safe. Traditional certificates require that you click on the key or lock in order to have access to the information of SSL certificate holders.

## Your certificate

Purchasing an SSL certificate (which used to be supplied by Digicert) is no longer required. Certificates are now issued through Let’s Encrypt, and their development is now under VTEX's responsibility, [at the moment of the store’s GoLive](https://help.vtex.com/en/tutorial/configuring-dns-pointing-to-vtex--tutorials_4280).

>⚠️ Please note that VTEX generates an SSL certificate for your store and ensures its automatic renewal. Therefore, we do not recommend installing any other certificates. However, if you need to install another certificate, please make the request with our [support](https://help.vtex.com/en/support).

