---
title: 'Passar pedido para o status Preparando Entrega'
id: tutorials_198
status: PUBLISHED
createdAt: 2017-04-27T22:14:17.090Z
updatedAt: 2023-03-31T14:47:04.890Z
publishedAt: 2023-03-31T14:47:04.890Z
firstPublishedAt: 2017-04-27T23:02:47.756Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: passar-pedido-para-o-status-preparando-entrega
legacySlug: iniciar-manuseio
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

O status `Pronto para manuseio` é o aviso ao ERP de que ele deve descer o pedido para ocorrer a baixa na reserva. Após o ERP notificar a VTEX que integrou o pedido e que o estoque dos itens foi atualizado, o status é alterado para `Preparando entrega`.

A baixa na reserva não ocorre automaticamente, isso deve ser controlado pelo seu ERP. Para mais detalhes, veja o artigo [Como a reserva funciona](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92).

Veja a seguir as maneiras possíveis de atualização desse status.

## Por integração

As integrações automatizam esse processo. Elas acontecem quando outros sistemas consultam os pedidos da VTEX para seguir com o fluxo de expedição. Essa integração pode ser feita via API REST, conforme nosso [guia de integração de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

## Pelo Admin VTEX

Se a loja não tiver ERP ou algum sistema que integre os pedidos, é possível fazer essa continuação do fluxo manualmente. Para isso, siga o passo a passo abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Selecione o pedido desejado com status `Pronto para manuseio`.
3. Na seção **Status do pedido**, clique no botão `Pronto para manuseio`.
4. Marque as três caixas de seleção:
    - <a class="far fa-check-square"></a> Eu entendo que vou interferir no andamento do pedido.
    - <a class="far fa-check-square"></a> Eu entendo que esta ação não poderá ser desfeita.
    - <a class="far fa-check-square"></a> Eu entendo as consequências desta ação no fluxo do pedido.
5. Clique em `Avançar com status`.

<div class="alert alert-warning">
Ao iniciar o manuseio do pedido manualmente, o pedido não poderá ser integrado ao ERP posteriormente.
</div>
