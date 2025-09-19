---
title: 'Certificado de segurança (SSL)'
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
legacySlug: certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar
locale: pt
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

O SSL (Secure Socket Layer) é um protocolo desenvolvido para elevar a segurança dos dados transmitidos pela internet. As conexões via SSL são particularmente recomendadas para envio de informações como números de cartão de crédito, senhas e qualquer outra informação sigilosa via internet.

Sempre que você acessa uma página segura, isto é, protegida por um certificado SSL, é apresentada uma chave ou um cadeado na barra de status para indicar a comunicação segura. Os certificados tradicionais exigem que você clique na chave ou cadeado para ter acesso às informações do detentor do certificado SSL.

Não é necessário solicitar a compra do certificado SSL. A VTEX gera um certificado SSL para a sua loja e garante sua renovação automática. O certificado é emitido via Let’s Encrypt e sua criação é responsabilidade da VTEX no [momento do Go-Live da loja](/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

> ℹ️ Algumas lojas podem precisar de certificados customizados por requisitos de compliance ou segurança. Para isso, a página **Certificados SSL** permite instalar e gerenciar certificados personalizados. Ela está disponível no Admin VTEX somente para lojas com [VTEX Shield](/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) que optarem por esse recurso. Para mais informações, confira o guia [Certificados SSL customizados](/pt/tutorial/certificados-ssl-customizados--1hoaDEbU50PDZSe6AYep9q).
