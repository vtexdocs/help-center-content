---
title: 'Template de e-mail transacional para pedido estornado'
id: 5uy6FCBb6DLyIJlSDeM10G
status: PUBLISHED
createdAt: 2020-09-08T12:27:15.441Z
updatedAt: 2020-10-05T12:51:52.381Z
publishedAt: 2020-10-05T12:51:52.381Z
firstPublishedAt: 2020-09-08T12:51:39.203Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: transactional-email-template-for-refunded-order
locale: pt
legacySlug: template-de-e-mail-transacional-para-pedido-estornado
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

Quando o estorno do valor de um pedido é processado com sucesso, a VTEX envia automaticamente um e-mail para esse cliente, notificando-o de que o pedido de  estorno foi bem-sucedido. Você pode desativar ou customizar o template desse e-mail na [Central de Mensagens da sua loja](/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/5uvq01BDu6nnDEJpseR1aH).

## Customização do template

Para fazer isso, entre na Central de Mensagens e busque o template **Order Refund Customer**. Ou então busque-o pela chave do template: `vtexcommerce-order-refunded`. Leia nosso [guia sobre a Central de Mensagens](/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/335JZKUYgvYlGOJgvJYxRO) para aprender a customizar templates de e-mails transacionais.

## Evento de disparo do e-mail

O e-mail de pedido estornado é disparado quando a loja envia uma notificação de Nota Fiscal de devolução. Esse envio acontece por meio da chamada de API [Order Invoice Notification](https://developers.vtex.com/reference/invoice#invoicenotification), com o campo `type` contendo o valor `input`.

No Admin, esse evento é disparado quando se clica no botão **Fazer devolução de itens**, na tela de detalhes do pedido.
