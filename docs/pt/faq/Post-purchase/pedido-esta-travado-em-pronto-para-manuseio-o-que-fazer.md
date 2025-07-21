---
title: 'Pedido está travado em "Pronto para manuseio", o que fazer?'
id: frequentlyAskedQuestions_771
status: PUBLISHED
createdAt: 2017-04-27T22:27:37.057Z
updatedAt: 2023-06-15T13:20:25.568Z
publishedAt: 2023-06-15T13:20:25.568Z
firstPublishedAt: 2017-04-27T23:02:34.947Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: order-is-locked-in-ready-for-handling-what-should-i-do
locale: pt
legacySlug: meus-pedidos-estao-travados-em-pronto-para-manuseio
---

Quando uma loja tem algum pedido travado no status **Pronto para manuseio**, isto significa que é necessário que o ERP informe que consultou o pedido e iniciou seu manuseio.

Isso acontece porque, dentro do fluxo de pedidos, o status **Pronto para manuseio** é o status em que os pedidos devem ser consultados pelo ERP.

Quando o ERP consulta e insere este pedido em sua base, é preciso que ele informe à VTEX que o pedido pode seguir com seu fluxo. Esse aviso pode ser feito de duas maneiras:

- [ERP informa por API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling): modo mais comum de atualização.
- **Lojista informa manualmente**: a loja não possui um ERP e o lojista informa que o pedido deve seguir o fluxo pelo Admin VTEX, na [página de detalhes do pedido](/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl). Para saber o passo a passo completo, confira o artigo [Passar pedido para o status Preparando Entrega](/pt/tutorial/passar-pedido-para-o-status-preparando-entrega--tutorials_198).

> É necessário ter um [perfil de acesso com permissão OMS - Full access](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access "Perfis de acesso - OMS Full access") para realizar esta ação.

<div class="alert alert-warning">
<p>Se o pedido passar do status <b>Iniciar manuseio</b> manualmente, não será possível enviar o pedido para o ERP posteriormente.</p>
</div>
