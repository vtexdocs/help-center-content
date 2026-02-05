---
title: 'O pedido não avança após o status "Pronto para manuseio"'
id: 1Esx82dbr5RHYPOHgEjRGg
status: PUBLISHED
createdAt: 2025-02-03T17:59:30.111Z
updatedAt: 2025-02-03T18:59:58.956Z
publishedAt: 2025-02-03T18:59:58.956Z
firstPublishedAt: 2025-02-03T18:59:58.956Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-order-doesnt-progress-after-the-status-ready-for-handling
legacySlug: o-pedido-nao-avanca-apos-o-status-pronto-para-manuseio
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Manuseio
  - Pedidos
  - Status do pedido
  - Integração
  - ERP
  - OMS
---

O status `Pronto para manuseio` ocorre no [fluxo do pedido](/pt/tutorial/order-flow-on-the-oms--tutorials_196#fluxo-do-seller) logo após a janela de cancelamento ser encerrada. Neste momento, a VTEX deve receber a informação do [sistema ERP](https://developers.vtex.com/docs/guides/erp-integration-guide) de que o pedido foi integrado e o estoque de itens foi atualizado, permitindo desta forma que o fluxo possa prosseguir até o status `Preparando entrega`.

Enquanto a VTEX não recebe esta confirmação, o pedido permanece no status `Pronto para manuseio`.

## Solução

A primeira ação necessária é entrar em contato com o responsável pela sua [integração ERP](https://developers.vtex.com/docs/guides/erp-integration-guide) e verificar se a liberação do pedido já foi realizada via o endpoint [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling). Após esta confirmação, siga os passos abaixo:

1. No Admin VTEX, acesse __Pedidos > Todos os pedidos__, ou digite __Todos os pedidos__ na barra de busca no topo da página.
2. Acesse o pedido desejado.
3. Na [página de detalhes do pedido](/pt/docs/tutorials/pagina-de-detalhes-do-pedido), verifique se o status do pedido foi alterado para `Preparando entrega`.

> ⚠️ Caso o pedido ainda permaneça no status `Pronto para manuseio`, solicite mais informações por meio de um ticket no [Suporte VTEX](https://supporticket.vtex.com/support).

### Atualização manual do pedido (opcional)

O lojista pode [atualizar manualmente](/pt/tutorial/passar-pedido-para-o-status-preparando-entrega--tutorials_198#pelo-admin-vtex) o status do pedido para `Preparando entrega` via Admin VTEX, caso desejar. Entretanto, para realizar este tipo de ação, é necessário ter um [perfil de acesso com permissão OMS - Full access](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#perfis-de-acesso). 

> ❗ Ao atualizar manualmente o status e confirmar o início do manuseio, o seller assume a responsabilidade pela [reserva dos itens](/pt/docs/tutorials/como-a-reserva-funciona), garantindo que haja estoque suficiente e seja dada a baixa dos itens vendidos. Pedidos atualizados manualmente não podem ser integrados posteriormente no sistema do ERP.

> ⚠️ Caso o pedido ainda permaneça no status `Pronto para manuseio` após a tentativa de atualização manual, solicite mais informações por meio de um ticket no [Suporte VTEX](https://supporticket.vtex.com/support).

Além do cenário de erro relacionado ao sistema ERP, podem ocorrer situações em que dois status diferentes são exibidos para o mesmo pedido, um na lista da página __Todos os pedidos__ e outro na respectiva [página de detalhes do pedido](/pt/docs/tutorials/pagina-de-detalhes-do-pedido). Para mais informações sobre este cenário, acesse o problema conhecido [O status na lista de pedidos é diferente do status do pedido atual](/pt/known-issues/o-status-na-lista-de-pedidos-e-diferente-do-status-do-pedido-atual--2UBFdtXWtCIygv0SiObCTN).
