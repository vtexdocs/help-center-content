---
title: "Tag canonical incorreta em páginas HTTPS"
id: 45d21Kz3hYsie6MaO24ioC
status: PUBLISHED
createdAt: 2018-01-24T14:54:21.165Z
updatedAt: 2022-12-22T20:46:22.053Z
publishedAt: 2022-12-22T20:46:22.053Z
firstPublishedAt: 2018-01-24T15:12:46.679Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: tag-canonical-incorreta-em-paginas-https
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao ativar o HTTPS em uma pasta específica, a tag HTML _canonical_ permanece renderizando um link para a página em HTTP, enquanto deveria seguir o protocolo da página em questão (que foi alterado para HTTPS).

## Simulação

1. Ativar HTTPS em uma única pasta do site ([guia](https://help.vtex.com/tutorial/--frequentlyAskedQuestions_4378));
2. Verificar, no HTML renderizado, a tag _canonical_.

![image](//images.contentful.com/alneenqid6w5/5B2i3p2lva8OO0I4geI8Qw/7321c0d4c0a2f8d20a7940ace91bcbff/image.png)

## Workaround

Este comportamento acontece apenas quando pastas específicas tem o HTTPS ativo.

Ao ativar o HTTPS **em todo o site** ([guia](http://help.vtex.com/pt/tutorial/ativar-https-em-todo-o-site)) as tags _canonical_ ficam corretas, renderizando o link em HTTPS.

