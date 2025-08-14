---
title: 'O pedido não avança após o status "Preparando entrega"'
id: 2yia6QhoLh204lHzEaIrnK
status: PUBLISHED
createdAt: 2025-02-07T14:22:07.199Z
updatedAt: 2025-02-07T17:20:26.154Z
publishedAt: 2025-02-07T17:20:26.154Z
firstPublishedAt: 2025-02-07T17:20:26.154Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-order-doesnt-progress-after-the-status-handling-shipping
legacySlug: o-pedido-nao-avanca-apos-o-status-preparando-entrega
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Entrega
  - Pedidos
  - Status do pedido
  - Integração
  - ERP
  - OMS
  - Preparando entrega
---

O status `Preparando entrega` ocorre no [fluxo do pedido](https://help.vtex.com/pt/tutorial/order-flow-on-the-oms--tutorials_196#fluxo-do-seller) logo após o seller confirmar o início do manuseio dos itens. Neste momento, é necessário que a VTEX receba a informação das notas fiscais do pedido, permitindo que o fluxo seja atualizado para o status `Faturado` ou que ele seja `Cancelado`.

> ℹ️ Não é possível [cancelar pedidos](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) que já tenham sido [faturados parcialmente](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

A permanência de um pedido no status `Preparando entrega` por um período superior ao previsto pode ser atribuída à falta de cadastro das notas fiscais na VTEX.

## Solução

### Verificar nota fiscal em integrações com ERP

A primeira ação necessária é entrar em contato com o responsável pela sua [integração ERP](https://developers.vtex.com/docs/guides/erp-integration-guide) e verificar se a nota fiscal única ou todas as [notas fiscais parciais](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) já foram cadastradas via o endpoint [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice). 

Após esta confirmação, siga os passos abaixo para verificar se houve mudança no status:

1. No Admin VTEX, acesse __Pedidos__ > __Todos os pedidos__, ou digite __Todos os pedidos__ na barra de busca no topo da página.
2. Acesse o pedido desejado.
3. Na [página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), verifique se o seu status foi alterado para `Faturado`.

> ⚠️ Caso o pedido ainda permaneça no status `Preparando entrega`, verifique se existe alguma inconsistência na comunicação com o marketplace. Saiba mais em [O pedido foi faturado no ERP mas continua no status "Preparando Entrega". O que fazer?](https://help.vtex.com/pt/faq/o-pedido-foi-faturado-no-erp-mas-continua-no-status-preparando-entrega--4szpXviNMAkwOe2cCiMiMe).

### Cadastro manual de notas fiscais (opcional)

O lojista pode cadastrar notas fiscais no Admin VTEX por meio do [faturamento manual do pedido](https://help.vtex.com/pt/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v). Esta ação permite que o status do pedido seja atualizado de `Preparando entrega` para `Faturado`. 

Para garantir que o pedido seja faturado corretamente, é necessário observar os seguintes requisitos:

- O valor total de uma nota fiscal deve ser igual à soma dos valores dos itens do pedido e dos respectivos fretes. Se a nota fiscal for inserida com um valor menor que o total, será necessário inserir uma [nota fiscal parcial](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) com o valor restante.
- Cada nota fiscal emitida, seja total ou parcial, deve ter um número único.
- Quando for necessário emitir mais de uma nota fiscal para um pedido, a soma do valor total das notas fiscais registradas deve ser igual ao valor total do pedido.
- O valor total do pedido será atualizado em caso de [alteração ou remoção de itens](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

> ⚠️ Caso o pedido ainda permaneça no status `Faturado` após o cadastro manual das notas fiscais, solicite mais informações por meio de um ticket no [Suporte VTEX](https://help.vtex.com/pt/support).
