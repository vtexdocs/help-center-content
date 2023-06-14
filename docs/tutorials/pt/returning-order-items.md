---
title: 'Devolução de itens de um pedido'
id: tutorials_191
status: DRAFT
createdAt: 2017-04-27T22:15:14.398Z
updatedAt: 2023-03-23T00:37:04.248Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:47.176Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-fazer-a-devolucao-de-itens
legacySlug: como-fazer-a-devolucao-de-itens
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Os clientes da sua loja podem solicitar a troca ou devolução de itens de um pedido. Dessa forma, a funcionalidade **Devolução de itens** permite remover itens de um pedido para que produtos sejam devolvidos.

<div class = "alert alert-info">
Consulte o artigo <a href="https://help.vtex.com/pt/tutorial/como-devolver-itens-do-pedido-beta--2bSNWwD0g8fcUmuupLao9i">Como devolver itens do pedido (Beta)</a> para saber como utilizar a funcionalidade no Admin V4.
</div>

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

![Devolução de itens de um pedido](https://drive.google.com/uc?export=download&id=1o0QkZZpgn7nXD5LVENxmlp9e_PKTGDva)

<div class="alert alert-warning">
Note que:
<ul>
<li>A devolução de um SKU no <b>Gerenciamento de pedidos</b> não atualiza a quantidade de SKUs que estão disponíveis no inventário. A loja deve atualizar a quantidade de itens no <a href="https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139">inventário</a>.</li>
<li>O número da nota fiscal de devolução deve ser diferente da nota fiscal de venda.</li>
<li>Após a devolução, o sistema de pagamentos é notificado para a realização do <a href="https://help.vtex.com/pt/tutorial/como-funciona-estorno-quando-ha-devolucao-do-item">estorno</a>.</li>
<li>Só é possível realizar a devolução de pedidos que têm pelo menos uma nota fiscal inserida na plataforma.</li>
</ul>
</div>
