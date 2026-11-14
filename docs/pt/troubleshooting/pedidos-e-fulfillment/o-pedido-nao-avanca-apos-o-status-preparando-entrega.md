---
title: 'O pedido não avança após o status "Preparando entrega"'
id: 2yia6QhoLh204lHzEaIrnK
status: PUBLISHED
createdAt: 2025-02-07T14:22:07.199Z
updatedAt: 2026-11-05T17:25:00.000Z
publishedAt: 2025-02-07T17:20:26.154Z
firstPublishedAt: 2025-02-07T17:20:26.154Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-order-doesnt-progress-after-the-status-handling-shipping
legacySlug: o-pedido-nao-avanca-apos-o-status-preparando-entrega
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Pedidos
  - Logística
symptomFilters:
  - Interrupção no fluxo
---

O status `Preparando entrega` ocorre no [fluxo do pedido](/pt/docs/tutorials/fluxo-e-status-de-pedidos#fluxo-do-seller) logo após o seller confirmar o início do manuseio dos itens. Nesse momento, a VTEX precisa receber as notas fiscais do pedido para atualizar o status para `Faturado` ou `Cancelado`.

> ℹ️ Não é possível [cancelar pedidos](/pt/docs/tutorials/como-cancelar-pedido) que já tenham sido [faturados parcialmente](/pt/docs/tracks/faturas-parciais). Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](/pt/docs/tutorials/alteracao-de-itens-de-um-pedido-finalizado).

Um pedido pode ficar no status `Preparando entrega` por mais tempo que o previsto quando as notas fiscais não foram cadastradas na VTEX.

## Solução

Para resolver o problema, [verifique se as notas fiscais foram enviadas pela integração com o ERP](#verificar-notas-fiscais-em-integrações-com-erp). Se não foram, você pode [cadastrá-las manualmente no Admin VTEX](#cadastrar-notas-fiscais-manualmente).

### Verificar notas fiscais em integrações com ERP

Entre em contato com o responsável pela [integração ERP](https://developers.vtex.com/docs/guides/erp-integration-guide) e verifique se a nota fiscal única ou todas as [notas fiscais parciais](/pt/docs/tracks/faturas-parciais) já foram cadastradas por meio do endpoint [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice).

Após essa confirmação, para verificar se o status mudou, siga os passos a seguir:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**.
2. Acesse o pedido desejado.
3. Na [página de detalhes do pedido](/pt/docs/tutorials/pagina-de-detalhes-do-pedido), verifique se o seu status foi alterado para `Faturado`.

> ℹ️ Se o pedido continuar no status `Preparando entrega`, verifique se existe alguma inconsistência na comunicação com o marketplace. Saiba mais em [O pedido foi faturado no ERP, mas continua no status "Preparando Entrega". O que fazer?](/pt/faq/o-pedido-foi-faturado-no-erp-mas-continua-no-status-preparando-entrega).

### Cadastrar notas fiscais manualmente

Você pode cadastrar notas fiscais no Admin VTEX por meio do [faturamento manual do pedido](/pt/docs/tutorials/faturar-um-pedido-manualmente). Essa ação atualiza o status do pedido de `Preparando entrega` para `Faturado`.

Para faturar o pedido corretamente, atenda aos seguintes requisitos:

- O valor total de uma nota fiscal deve ser igual à soma dos valores dos itens do pedido e dos respectivos fretes. Se a nota fiscal for inserida com um valor menor que o total, insira uma [nota fiscal parcial](/pt/docs/tracks/faturas-parciais) com o valor restante.
- Cada nota fiscal emitida, seja total ou parcial, deve ter um número único.
- Quando houver mais de uma nota fiscal, a soma dos valores das notas registradas deve ser igual ao valor total do pedido.
- O valor total do pedido é atualizado em caso de [alteração ou remoção de itens](/pt/docs/tutorials/alteracao-de-itens-de-um-pedido-finalizado).

> ⚠️ Se o pedido continuar no status `Preparando entrega` após o cadastro manual das notas fiscais, solicite mais informações por meio de um ticket no [Suporte VTEX](https://help.vtex.com/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).