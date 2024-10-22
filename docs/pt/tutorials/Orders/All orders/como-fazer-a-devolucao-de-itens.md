---
title: 'Devolução de itens de um pedido'
id: tutorials_191
status: ARCHIVED
createdAt: 2017-04-27T22:15:14.398Z
updatedAt: 2023-03-23T00:37:04.248Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:47.176Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: returning-order-items
locale: pt
legacySlug: como-fazer-a-devolucao-de-itens
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Os clientes da sua loja podem solicitar a troca ou devolução de itens de um pedido. Dessa forma, a funcionalidade **Devolução de itens** permite remover itens de um pedido para que produtos sejam devolvidos.

>ℹ️ Consulte o artigo [Como devolver itens do pedido (Beta)](https://help.vtex.com/pt/tutorial/como-devolver-itens-do-pedido-beta--2bSNWwD0g8fcUmuupLao9i) para saber como utilizar a funcionalidade no Admin V4.

Para realizar a devolução pelo Admin VTEX, realize os seguintes passos:

1. Acesse **PEDIDOS > Gerenciamento de pedidos**.
2. Selecione o pedido desejado. Você pode utilizar os [filtros de pedidos](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192).
3. Na seção **Fatura**, clique no <i class="fas fa-ellipsis-v"></i> menu três pontos.
4. Selecione a opção `Fazer devolução de itens`.
5. Preencha os campos:
    * SKUs que serão devolvidos.
    * Número da nota fiscal de devolução.
    * Valor adicional, caso exista.
6. Clique em `Solicitar estorno`.

![Devolução de itens de um pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/como-fazer-a-devolucao-de-itens_1.png)

>⚠️ Note que:
>
> *A devolução de um SKU no **Gerenciamento de pedidos** não atualiza a quantidade de SKUs que estão disponíveis no inventário. A loja deve atualizar a quantidade de itens no [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139).
>
> *O número da nota fiscal de devolução deve ser diferente da nota fiscal de venda.
>
> *Após a devolução, o sistema de pagamentos é notificado para a realização do [estorno](https://help.vtex.com/pt/tutorial/como-funciona-estorno-quando-ha-devolucao-do-item).
>
> *Só é possível realizar a devolução de pedidos que têm pelo menos uma nota fiscal inserida na plataforma.
> 
