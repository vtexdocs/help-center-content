---
title: 'Contratar o certificado de segurança (SSL)'
id: tutorials_1308
status: PUBLISHED
createdAt: 2017-04-27T21:56:41.946Z
updatedAt: 2022-04-27T18:02:58.224Z
publishedAt: 2022-04-27T18:02:58.224Z
firstPublishedAt: 2017-04-27T23:03:50.121Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar
legacySlug: certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---

O SSL (Secure Socket Layer) é um protocolo desenvolvido para elevar a segurança dos dados transmitidos pela internet. As conexões via SSL são particularmente recomendadas para envio de informações como números de cartão de crédito, senhas e qualquer outra informação sigilosa via internet.

Sempre que você acessa uma página segura, isto é, protegida por um certificado SSL, é apresentada uma chave ou um cadeado na barra de status para indicar a comunicação segura. Os certificados tradicionais exigem que você clique na chave ou cadeado para ter acesso às informações do detentor do certificado SSL.

## Seu certificado

Não é mais necessário solicitar a compra do certificado SSL (antes fornecido pela Digicert). O certificado agora é emitido via Let’s Encrypt e sua criação passou a ser responsabilidade da VTEX, a qual é feita [momento do _GoLive_ da loja](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

<div class="alert alert-warning">
Note que a VTEX gera um certificado SSL para a sua loja e garante sua renovação automática. Por isso, não recomendamos a instalação de outros certificados. No entanto, caso seja necessário instalar outro certificado, faça a solicitação com nosso [suporte](https://help.vtex.com/pt/support).
</div>

