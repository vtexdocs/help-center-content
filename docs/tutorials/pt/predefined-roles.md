---
title: 'Perfis de acesso predefinidos'
id: jGDurZKJHvHJS13LnO7Dy
status: PUBLISHED
createdAt: 2022-04-07T21:34:06.385Z
updatedAt: 2023-06-06T21:37:23.798Z
publishedAt: 2023-06-06T21:37:23.798Z
firstPublishedAt: 2022-04-07T21:48:28.951Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slug: perfis-de-acesso-predefinidos
locale: pt
legacySlug: 
subcategory: 1HSqkejwuYcQSMC400uY84
---

Nesse documento listaremos os [perfis de acesso](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) que estão predefinidos para novas lojas VTEX. Para acessá-los diretamente, use a lista abaixo:

* [Admin - Start page only](#admin-start-page-only)
* [Checkout Admin](#checkout-admin)
* [Call center operator](#call-center-operator)
* [Finance](#finance)
* [Finance - Full access](#finance-full-access)
* [inStore Sales Person](#instore-sales-person)
* [IntegrationProfile - Fulfillment](#integrationprofile-fulfillment)
* [IntegrationProfile - Fulfillment Gateway](#integrationprofile-fulfillment-gateway)
* [IntegrationProfile - Fulfillment Gateway GetOrder](#integrationprofile-fulfillment-gateway-getorder)
* [IntegrationProfile - Fulfillment Gateway Oms](#integrationprofile-fulfillment-gateway-oms)
* [IntegrationProfile - Fulfillment Oms](#integrationprofile-fulfillment-oms)
* [IntegrationProfile - OrderSimulation](#integrationprofile-ordersimulation)
* [Logistics - Full access](#logistics-full-access)
* [Logistics - Read only](#logistics-read-only)
* [OMS - Full access](#oms-full-access)
* [OMS - Read only](#oms-read-only)
* [Seller Manager](#seller-manager)
* [User Administrator - RESTRICTED](#user-administrator-restricted)
* [VTEX IO Admin](#vtex-io-admin)
* [VTEX Payment - Account Holder](#vtex-payment-account-holder)
* [VTEX Payment - Bookkeeper](#vtex-payment-bookkeeper)
* [Webservice - Full access](#webservice-full-access)

## Admin - Start page only

Perfil básico que dá acesso à página inicial do ambiente administrativo. Mínimo necessário para que um usuário não seja recebido com uma mensagem de erro ao logar no ambiente administrativo.  

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página de ajuda inicial</td>
  </tr>
</table>

## Checkout Admin

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:
<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Shopping Cart Full Access</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Full Access</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td>Access all orders</td>
  </tr>
  <tr>
    <td>Order Cancelation</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td></td>
  </tr>
</table>

## Call center operator

Este é um perfil que tem características especiais. O recurso **Assisted Sales** causa o redirecionamento automático do usuário para a loja; isso deixará o usuário que fizer login numa conta com esse perfil sem acesso a recursos importantes do menu administrativo. Recomendamos a utilização de duas contas para usuários de televendas. Uma conta separada para o perfil **Call center operator** e uma para outras operações que o usuário possa precisar realizar no menu administrativo.

<div class="alert alert-warning">
  Ao criar um <a href="https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#">perfil</a>, evite incluir <a href="https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#">recursos</a> de televendas junto com outros recursos. Do contrário, o perfil pode não funcionar como esperado.
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Assisted Sales</td>
    <td>Catalog</td>
    <td>Televendas</td>
    <td>Após o login o usuario é redirecionado para o site de televendas www.sualoja.com.br/a/televendas. Dessa forma, o operador pode fazer operações na loja em nome do cliente. Uma barra aparecerá no topo da tela.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de pedidos no OMS.</td>
  </tr>
</table>

## Finance  

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>UI - Account list</td>
    <td>License Manager</td>
    <td>Controle de Acesso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos.</td>
  </tr>
  <tr>
    <td>Invoices List</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização das notas fiscais.</td>
  </tr>
  <tr>
    <td>Edit Company Information</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite editar dados de uma Company.</td>
  </tr>
  <tr>
    <td>Contracts List</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Visualização de todos os contratos (ativos e inativos) de uma company.</td>
  </tr>
  <tr>
    <td>Display Company info</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Permite visualizar dados de uma Company.</td>
  </tr>
  <tr>
    <td>Contacts List</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização da lista de Contatos que recebem notificação por email da cobrança gerada.</td>
  </tr>
  <tr>
    <td>Edit Contacts</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite editar contatos que recebem notificação da cobrança gerada.</td>
  </tr>
  <tr>
    <td>Generate new Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Financeiro pode gerar uma cobrança na Nota Fiscal manualmente através dos contratos.</td>
  </tr>
  <tr>
    <td>Recalc Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Gerar nova cobrança com juros. Sim, com juros.</td>
  </tr>
</table>

## Finance - Full access  

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Save account</td>
    <td>License Manager</td>
    <td>Controle de Acesso Serviços</td>
    <td>Salva uma conta</td>
  </tr>
  <tr>
    <td>Get account by identifier</td>
    <td>License Manager</td>
    <td>Controle de Acesso Serviços</td>
    <td>Consulta que retorna conta pelo identificador, que pode ser o id da conta ou a host da aplicação da conta</td>
  </tr>
  <tr>
    <td>UI - Account list</td>
    <td>License Manager</td>
    <td>Controle de Acesso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>UI - Edit account</td>
    <td>License Manager</td>
    <td>Controle de Acesso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>UI - Edit role</td>
    <td>License Manager</td>
    <td>Controle de Acesso Web</td>
    <td></td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos.</td>
  </tr>
  <tr>
    <td>Invoices List</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização das notas fiscais.</td>
  </tr>
  <tr>
    <td>Edit Company Information</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite editar dados de uma Company.</td>
  </tr>
  <tr>
    <td>Contracts List</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Visualização de todos os contratos (ativos e inativos) de uma company.</td>
  </tr>
  <tr>
    <td>Display Company info</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Permite visualizar dados de uma Company.</td>
  </tr>
  <tr>
    <td>Contacts List</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização da lista de Contatos que recebem notificação por email da cobrança gerada.</td>
  </tr>
  <tr>
    <td>Edit Contacts</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite editar contatos que recebem notificação da cobrança gerada.</td>
  </tr>
  <tr>
    <td>Generate new Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Financeiro pode gerar uma cobrança na Nota Fiscal manualmente através dos contratos.</td>
  </tr>
  <tr>
    <td>Edit Company's Document</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite editar os dados de documento (CNPJ ou CPF) da Company, pra onde a fatura será gerada.</td>
  </tr>
  <tr>
    <td>Add Account</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite adicionar conta (account) para agrupar outras contas já vinculadas a esse cliente em um billing só.</td>
  </tr>
  <tr>
    <td>Delete Account</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite deletar conta associada a uma company. Company é a entidade criada para englobar diversas accounts da mesma loja.</td>
  </tr>
  <tr>
    <td>Save contracts</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Somente responsáveis de billing, sales operations/growth e financeiro tem acesso. Permite criar novo contrato.</td>
  </tr>
  <tr>
    <td>Cancel Invoice Document</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Cancelar documento fiscal nas prefeituras, dá poder de cancelar documento fiscal mesmo já tendo sido gerada a nota.</td>
  </tr>
  <tr>
    <td>Issue Invoice Document</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Usado quando em casos específicos de países que não tem geração de documento fiscal automaticamente, dependendo do sistema financeiro. Nesse caso, pode ser gerado manualmente.</td>
  </tr>
  <tr>
    <td>Conciliate Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. O default é marcar como pago automaticamente, mas o cliente pode pagar por fora, dependendo da negociação. Nesse caso, o financeiro tem o poder de marcar como pago manualmente, conciliando as Notas fiscais.</td>
  </tr>
  <tr>
    <td>Generate Invoice Overdue without Interest</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Gerar nova cobrança com juros. Sim, com juros.</td>
  </tr>
  <tr>
    <td>Cancel Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Cancelar cobrança no billing, dá poder de cancelar nota fiscal mesmo já tendo sido gerada.</td>
  </tr>
  <tr>
    <td>Change payment status</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Financeiro tem poder de Mudar status de pagamento de uma company, dependendo da negociação que fizer com o cliente.</td>
  </tr>
  <tr>
    <td>Recalc Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Gerar nova cobrança com juros. Sim, com juros.</td>
  </tr>
  <tr>
    <td>Get Unscrewed Dashboard Charges</td>
    <td>Billing</td>
    <td>Dashboard</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Acesso a dashboard externo ao Admin, que visualiza notas fiscais emitidas nesse momento, e quais accounts são provisionadas nesse momento.</td>
  </tr>
  <tr>
    <td>Merge companies</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite a fusão entre duas companies, unificando seu billing.</td>
  </tr>
  <tr>
    <td>Split companies</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Permite separar uma company única, em companies diferentes.</td>
  </tr>
  <tr>
    <td>Unpaid invoices</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Somente responsáveis de billing e financeiro tem acesso. Financeiro pode desmarcar o pagamento de uma cobrança manualmente, caso não tenha sido feito, ou feito equivocadamente.</td>
  </tr>
  <tr>
    <td>Get App</td>
    <td>Log</td>
    <td>Log Admin</td>
    <td>Uso interno da VTEX.</td>
  </tr>
  <tr>
    <td>Create Table</td>
    <td>Log</td>
    <td>Log Admin</td>
    <td>Uso interno da VTEX.</td>
  </tr>
</table>

## inStore Sales Person  

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Product Form</td>
    <td>Catalog</td>
    <td>Conteúdo</td>
    <td>Access to product screen</td>
  </tr>
  <tr>
    <td>Store Texts</td>
    <td>Catalog</td>
    <td>Configurações</td>
    <td>Ferramenta do desenvolvedor com todos os textos base da loja</td>
  </tr>
  <tr>
    <td>Assisted Sales</td>
    <td>Catalog</td>
    <td>Televendas</td>
    <td>Após o login o usuário é redirecionado para a loja (accountname.myvtex.com)</td>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página de ajuda inicial</td>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera uma transação.</td>
  </tr>
  <tr>
    <td>Manage Store</td>
    <td>PCI Gateway</td>
    <td>Payment-ManageStore</td>
    <td>Allows modifying configuration settings</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite acesso às ações dentro do workflow pra mudança de status de pedido, através do botão de Ações no Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite informar faturas (NF) e dados para rastreio manualmente no OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite Cancelar pedido no OMS.</td>
  </tr>
  <tr>
    <td>Full access in all documents</td>
    <td>Dynamic Storage</td>
    <td>Recursos genéricos para o Dynamic Storage</td>
    <td>Recurso registrado automaticamente pelo Dynamic Storage.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera uma transação.</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite Cancelar pedido no OMS.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway GetOrder

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera uma transação.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway Oms

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recupera uma transação.</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite acesso às ações dentro do workflow pra mudança de status de pedido, através do botão de Ações no Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite informar faturas (NF) e dados para rastreio manualmente no OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Notify reemburse</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite notificar uma nota fiscal de entrada, indicando a entrada novamente de algo que foi reembolsado. Permite o input de uma nota de devolução.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite Cancelar pedido no OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite que o usuário se inscreva para receber atualizações dos status dos pedidos no Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite registrar mudanças no pedido (descontos e/ou trocas)</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Oms

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite acesso às ações dentro do workflow pra mudança de status de pedido, através do botão de Ações no Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite informar faturas (NF) e dados para rastreio manualmente no OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Notify reemburse</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite notificar uma nota fiscal de entrada, indicando a entrada novamente de algo que foi reembolsado. Permite o input de uma nota de devolução.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite Cancelar pedido no OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite que o usuário se inscreva para receber atualizações dos status dos pedidos no Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite registrar mudanças no pedido (descontos e/ou trocas)</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos.</td>
  </tr>
</table>

## IntegrationProfile - OrderSimulation

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## Logistics - Full access

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página de ajuda inicial</td>
  </tr>
  <tr>
    <td>Logistics full access</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite acesso pleno a todos os recursos de logística (visualização, criação, edição e cancelamento de configurações)</td>
  </tr>
  <tr>
    <td>Logistics viewer</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permissão de visualização da área inicial do módulo de logistica.</td>
  </tr>
  <tr>
    <td>Logistics inventory full access</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite acesso pleno ao inventário logístico (visualização, criação, edição e cancelamento de configurações).</td>
  </tr>
  <tr>
    <td>Logistics inventory read only</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite somente a visualização do módulo de inventário.</td>
  </tr>
  <tr>
    <td>Logistics shipping full access</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite acesso pleno a todas as funções de envio do módulo de logística (criação, edição e cancelamento de configurações).</td>
  </tr>
  <tr>
    <td>Logistics shipping read only</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>testar</td>
  </tr>
</table>

## Logistics - Read only

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Logistics viewer</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permissão de visualização da área inicial do módulo de logistica.</td>
  </tr>
  <tr>
    <td>Logistics inventory read only</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite somente a visualização do módulo de inventário.</td>
  </tr>
  <tr>
    <td>Logistics shipping read only</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>testar</td>
  </tr>
</table>

## OMS - Full access

Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página inicial</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administração</td>
    <td>Página de ajuda inicial</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite acesso às ações dentro do workflow pra mudança de status de pedido, através do botão de Ações no Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite informar faturas (NF) e dados para rastreio manualmente no OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>Logistics full access</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite acesso pleno a todos os recursos de logística (visualização, criação, edição e cancelamento de configurações)</td>
  </tr>
  <tr>
    <td>Notify reemburse</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite notificar uma nota fiscal de entrada, indicando a entrada novamente de algo que foi reembolsado. Permite o input de uma nota de devolução.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite Cancelar pedido no OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite que o usuário se inscreva para receber atualizações dos status dos pedidos no Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite registrar mudanças no pedido (descontos e/ou trocas)</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos.</td>
  </tr>
  <tr>
    <td>Logistics inventory full access</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite acesso pleno ao inventário logístico (visualização, criação, edição e cancelamento de configurações).</td>
  </tr>
  <tr>
    <td>Logistics shipping full access</td>
    <td>Logistics</td>
    <td>Acesso ao Logistics</td>
    <td>Permite acesso pleno a todas as funções de envio do módulo de logística (criação, edição e cancelamento de configurações).</td>
  </tr>
</table>

## OMS - Read only

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Permite a visualização de todos os pedidos no OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos.</td>
  </tr>
</table>

## Seller Manager

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>View Seller</td>
    <td>Seller Register</td>
    <td>Seller Administration</td>
    <td>Allows view all sellers from account</td>
  </tr>
  <tr>
    <td>Save Seller</td>
    <td>Seller Register</td>
    <td>Seller Administration</td>
    <td>Allows to create and edit all sellers from account</td>
  </tr>
</table>

## User Administrator - RESTRICTED

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Save user</td>
    <td>License Manager</td>
    <td>Services access control</td>
    <td>Criar usuários, atribuir ou remover perfis de acesso para usuários, editar dados de usuários, criar e alterar chaves de aplicação.</td>
  </tr>
</table>

## VTEX IO Admin

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Get resource by key</td>
    <td>License Manager</td>
    <td>Controle de Acesso Serviços</td>
    <td>Checa permissões de acesso</td>
  </tr>
  <tr>
    <td>Read Workspace Apps</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading the apps installed in the workspace and their direct and indirect dependencies.</td>
  </tr>
  <tr>
    <td>Link App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows listing existing links and linking and unlinking apps.</td>
  </tr>
  <tr>
    <td>Install App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows installation and uninstallation of apps.</td>
  </tr>
  <tr>
    <td>Vbase Read Only</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Read-only access to vbase.</td>
  </tr>
  <tr>
    <td>Vbase Read Write</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Read and write access to vbase.</td>
  </tr>
  <tr>
    <td>Read Workspace Services</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading the infra apps in the workspace.</td>
  </tr>
  <tr>
    <td>Install Service</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows installation and uninstallation of apps</td>
  </tr>
  <tr>
    <td>Log Access - Read-only</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading logs from all applications</td>
  </tr>
  <tr>
    <td>Read Published Service</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading the services data from the infra registry</td>
  </tr>
  <tr>
    <td>Debug App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows connecting a debugger to a linked app</td>
  </tr>
  <tr>
    <td>Workspace CRUD</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows creating, deleting and modifying workspaces</td>
  </tr>
  <tr>
    <td>Import Redirects</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Enable user to manage redirects with VTEX IO's command line interface</td>
  </tr>
  <tr>
    <td>Manage A/B Test</td>
    <td>VTEX IO</td>
    <td>A/B Test</td>
    <td>Allow to start, finish or get status of a A/B Test</td>
  </tr>
  <tr>
    <td>Read logs</td>
    <td>Application Logs Stream</td>
    <td>Logs</td>
    <td>Read logs from VTEX IO apps owned from this account</td>
  </tr>
</table>

## VTEX Payment - Account Holder

Este perfil dá pleno acesso de leitura e escrita aos dados do VTEX Payment e deve ser restrito aos usuários que precisem efetuar configurações.

## VTEX Payment - Bookkeeper

Este perfil possibilita a leitura de informações sobre a operação do VTEX Payment.

## Webservice - Full access

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Webservice access</td>
    <td>WebService</td>
    <td>webservice</td>
    <td>Permission to use any SOAP request</td>
  </tr>
</table>    

