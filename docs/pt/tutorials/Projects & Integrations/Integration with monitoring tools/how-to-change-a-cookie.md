---
title: 'Alterar um Cookie'
id: 37m4zqneEUaOmAKokqWS6w
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.039Z
updatedAt: 2019-12-31T15:19:43.194Z
publishedAt: 2019-12-31T15:19:43.194Z
firstPublishedAt: 2019-01-24T22:03:00.444Z
contentType: tutorial
productTeam: Others
author: authors_35
slug: como-alterar-um-cookie
locale: pt
legacySlug: como-alterar-um-cookie
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

Alguns cookies são gerados diretamente no Banco de Dados da VTEX. Esses são impossíveis de alterar a validade. Os cookies gerados externamente e inseridos via JavaScript como, por exemplo, Google Tag Manager, podem ser editados. A edição pode ser feita diretamente no JavaScript, como no caso genérico abaixo onde é definido o seu tempo de validade.

`document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";`

Importante lembrar que a VTEX não reconhece cookies com caracteres especiais. Sempre que houver um caso desse o usuário não conseguirá carregar mais uma página em sua loja (tela branca).
