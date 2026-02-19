---
title: 'Perfis de acesso predefinidos'
id: jGDurZKJHvHJS13LnO7Dy
status: PUBLISHED
createdAt: 2022-04-07T21:34:06.385Z
updatedAt: 2025-04-09T19:03:02.620Z
publishedAt: 2025-04-09T19:03:02.620Z
firstPublishedAt: 2022-04-07T21:48:28.951Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: predefined-roles
legacySlug: 
locale: pt
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

[Perfis de acesso](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) agrupam [recursos do License Manager](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#), sendo que cada recurso representa uma permissão na plataforma VTEX.

Neste documento estão listados os perfis de acesso que estão predefinidos para novas lojas VTEX e respectivos recursos. Para acessá-los diretamente, use a lista abaixo.

> ℹ️ Para saber mais sobre cada recurso listado nos perfis, veja o artigo [Recursos do License Manager](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

* [Admin - Start page only](#admin-start-page-only)
* [Checkout Admin](#checkout-admin)
* [Call center operator](#call-center-operator)
* [Finance](#finance)
* [Finance - Full access](#finance-full-access)
* [Sales App - Sales Associate](#sales-app-sales-associate)
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
* [Payments Notifier](#payments-notifier)
* [Seller Manager](#seller-manager)
* [User Administrator - RESTRICTED](#user-administrator-restricted)
* [VTEX IO Admin](#vtex-io-admin)

## Admin - Start page only

Perfil básico que dá acesso à página inicial do ambiente administrativo. Mínimo necessário para que um usuário não seja recebido com uma mensagem de erro ao logar no ambiente administrativo.  

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Homepage | Catalog | Admin | Página inicial |
| Help page | Catalog | Admin | Página de ajuda inicial |
| View Product | Catalog API | General | Visualizar detalhes de produtos e SKUs. |
| Edit Product | Catalog API | General | Editar detalhes de produtos e SKUs. |
| View Category | Catalog API | General | Visualizar detalhes de categorias. |
| Edit Category | Catalog API | General | Editar detalhes de categorias. |
| View Collection | Catalog API | General | Visualizar detalhes de coleções. |
| Edit Collection | Catalog API | General | Editar detalhes de coleções. |
| View Brand | Catalog API | General | Visualizar detalhes de marcas. |
| Edit Brand | Catalog API | General | Editar detalhes de marcas. |
| Import Spreadsheet | Catalog API | General | Importar produtos e SKUs por planilha. |
| Export Spreadsheet | Catalog API | General | Exportar planilha de informações do catálogo. |

## Checkout Admin

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Shopping Cart Full Access | Checkout | CheckoutResources |
| Orders Full Access | Checkout | CheckoutResources | Access all orders |
| Order Cancelation | Checkout | CheckoutResources |

## Call center operator

Este é um perfil dedicado a operadores de televendas, pois concede acesso às [funcionalidades de televendas](/pt/docs/tutorials/funcionalidades-de-televendas) da VTEX e permite visualizar pedidos.

O recurso **Assisted Sales** causa o redirecionamento automático do usuário para a página de televendas da loja, o que deixará o usuário que fizer login numa conta com esse perfil sem acesso a recursos importantes do menu administrativo.

Portanto, recomendamos a utilização de duas contas separadas (com emails distintos) para usuários de televendas: uma conta para o perfil __Call center operator__ (com os recursos *Assisted Sales* e *View order*) e outra conta para realizar operações no Admin, se necessário.

> ⚠️ Ao criar um [perfil de acesso](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#), evite incluir [recursos](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#) de televendas junto com outros recursos. Do contrário, o perfil pode não funcionar como esperado.

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Assisted Sales | Catalog | Televendas | Funcionalidades de televendas. Após o login, o usuário é redirecionado para o site de televendas www.{nomedaloja}.com.br/a/televendas. Dessa forma, o operador pode utilizar as funcionalidades de televendas, como navegar na loja em nome do cliente.Como este recurso causa o redirecionamento automático para a loja, o usuário que fizer login em uma conta com esse perfil não terá acesso a recursos importantes do Admin. |
| View order | OMS | AcessoOMS | Permite a visualização de pedidos no OMS. |

## Finance  

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| UI - Account list | License Manager | Controle de Acesso Web |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| View store sales stats | OMS | AcessoOMS | Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos. |
| Invoices List | Billing | Invoice | Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização das notas fiscais. |
| Edit Company Information | Billing | Company | Somente responsáveis de billing e financeiro tem acesso. Permite editar dados de uma Company. |
| Contracts List | Billing | Contracts | Clientes, responsáveis de billing e financeiro tem acesso. Visualização de todos os contratos (ativos e inativos) de uma company. |
| Display Company info | Billing | Company | Clientes, responsáveis de billing e financeiro tem acesso. Permite visualizar dados de uma Company. |
| Contacts List | Billing | Contacts | Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização da lista de Contatos que recebem notificação por email da cobrança gerada. |
| Edit Contacts | Billing | Contacts | Somente responsáveis de billing e financeiro tem acesso. Permite editar contatos que recebem notificação da cobrança gerada. |
| Generate new Invoice | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Financeiro pode gerar uma cobrança na Nota Fiscal manualmente através dos contratos. |
| Recalc Invoice | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Gerar nova cobrança com juros. Sim, com juros. |

## Finance - Full access  

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Save account | License Manager | Controle de Acesso Serviços | Salva uma conta |
| Get account by identifier | License Manager | Controle de Acesso Serviços | Consulta que retorna conta pelo identificador, que pode ser o id da conta ou a host da aplicação da conta |
| UI - Account list | License Manager | Controle de Acesso Web |
| UI - Edit account | License Manager | Controle de Acesso Web |
| UI - Edit role | License Manager | Controle de Acesso Web |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| View store sales stats | OMS | AcessoOMS | Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos. |
| Invoices List | Billing | Invoice | Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização das notas fiscais. |
| Edit Company Information | Billing | Company | Somente responsáveis de billing e financeiro tem acesso. Permite editar dados de uma Company. |
| Contracts List | Billing | Contracts | Clientes, responsáveis de billing e financeiro tem acesso. Visualização de todos os contratos (ativos e inativos) de uma company. |
| Display Company info | Billing | Company | Clientes, responsáveis de billing e financeiro tem acesso. Permite visualizar dados de uma Company. |
| Contacts List | Billing | Contacts | Clientes, responsáveis de billing e financeiro tem acesso. Permite a visualização da lista de Contatos que recebem notificação por email da cobrança gerada. |
| Edit Contacts | Billing | Contacts | Somente responsáveis de billing e financeiro tem acesso. Permite editar contatos que recebem notificação da cobrança gerada. |
| Generate new Invoice | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Financeiro pode gerar uma cobrança na Nota Fiscal manualmente através dos contratos. |
| Edit Company's Document | Billing | Company | Somente responsáveis de billing e financeiro tem acesso. Permite editar os dados de documento (CNPJ ou CPF) da Company, pra onde a fatura será gerada. |
| Add Account | Billing | Company | Somente responsáveis de billing e financeiro tem acesso. Permite adicionar conta (account) para agrupar outras contas já vinculadas a esse cliente em um billing só. |
| Delete Account | Billing | Company | Somente responsáveis de billing e financeiro tem acesso. Permite deletar conta associada a uma company. Company é a entidade criada para englobar diversas accounts da mesma loja. |
| Save contracts | Billing | Contracts | Somente responsáveis de billing, sales operations/growth e financeiro tem acesso. Permite criar novo contrato. |
| Cancel Invoice Document | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Cancelar documento fiscal nas prefeituras, dá poder de cancelar documento fiscal mesmo já tendo sido gerada a nota. |
| Issue Invoice Document | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Usado quando em casos específicos de países que não tem geração de documento fiscal automaticamente, dependendo do sistema financeiro. Nesse caso, pode ser gerado manualmente. |
| Conciliate Invoice | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. O default é marcar como pago automaticamente, mas o cliente pode pagar por fora, dependendo da negociação. Nesse caso, o financeiro tem o poder de marcar como pago manualmente, conciliando as Notas fiscais. |
| Generate Invoice Overdue without Interest | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Gerar nova cobrança com juros. Sim, com juros. |
| Cancel Invoice | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Cancelar cobrança no billing, dá poder de cancelar nota fiscal mesmo já tendo sido gerada. |
| Change payment status | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Financeiro tem poder de Mudar status de pagamento de uma company, dependendo da negociação que fizer com o cliente. |
| Recalc Invoice | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Gerar nova cobrança com juros. Sim, com juros. |
| Get Unscrewed Dashboard Charges | Billing | Dashboard | Somente responsáveis de billing e financeiro tem acesso. Acesso a dashboard externo ao Admin, que visualiza notas fiscais emitidas nesse momento, e quais accounts são provisionadas nesse momento. |
| Merge companies | Billing | Company | Somente responsáveis de billing e financeiro tem acesso. Permite a fusão entre duas companies, unificando seu billing. |
| Split companies | Billing | Company | Somente responsáveis de billing e financeiro tem acesso. Permite separar uma company única, em companies diferentes. |
| Unpaid invoices | Billing | Invoice | Somente responsáveis de billing e financeiro tem acesso. Financeiro pode desmarcar o pagamento de uma cobrança manualmente, caso não tenha sido feito, ou feito equivocadamente. |
| Get App | Log | Log Admin | Uso interno da VTEX. |
| Create Table | Log | Log Admin | Uso interno da VTEX. |

## Sales App - Sales Associate

> ⚠️ Vendedores registrados no Sales App não têm acesso ao Admin VTEX, apenas ao Sales App.

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Assisted Sales | Catalog | Televendas | Após o login o usuário é redirecionado para a loja (accountname.myvtex.com) |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |

## IntegrationProfile - Fulfillment

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Place Orders | VTEX Fulfilment | Fulfilment Resources | |
| Order Details | VTEX Fulfilment | Fulfilment Resources | |

## IntegrationProfile - Fulfillment Gateway

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Represents the payment gateway transactional operations. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera uma transação. |
| Notify payment | OMS | AcessoOMS | Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido. |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Order Details | VTEX Fulfilment | Fulfilment Resources |
| Cancel order | OMS | AcessoOMS | Permite Cancelar pedido no OMS. |

## IntegrationProfile - Fulfillment Gateway GetOrder

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Represents the payment gateway transactional operations. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera uma transação. |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Order Details | VTEX Fulfilment | Fulfilment Resources |

## IntegrationProfile - Fulfillment Gateway Oms

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Represents the payment gateway transactional operations. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recupera uma transação. |
| Change order workflow status | OMS | AcessoOMS | Permite acesso às ações dentro do workflow pra mudança de status de pedido, através do botão de Ações no Workflow |
| Notify payment | OMS | AcessoOMS | Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido. |
| Notify invoice | OMS | AcessoOMS | Permite informar faturas (NF) e dados para rastreio manualmente no OMS. |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Order Details | VTEX Fulfilment | Fulfilment Resources |
| Notify reemburse | OMS | AcessoOMS | Permite notificar uma nota fiscal de entrada, indicando a entrada novamente de algo que foi reembolsado. Permite o input de uma nota de devolução. |
| Cancel order | OMS | AcessoOMS | Permite Cancelar pedido no OMS. |
| Order feed subscription | OMS | AcessoOMS | Permite que o usuário se inscreva para receber atualizações dos status dos pedidos no Order Feed. |
| Change order | OMS | AcessoOMS | Permite registrar mudanças no pedido (descontos e/ou trocas) |
| View store sales stats | OMS | AcessoOMS | Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos. |

## IntegrationProfile - Fulfillment Oms

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Change order workflow status | OMS | AcessoOMS | Permite acesso às ações dentro do workflow pra mudança de status de pedido, através do botão de Ações no Workflow |
| Notify payment | OMS | AcessoOMS | Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido. |
| Notify invoice | OMS | AcessoOMS | Permite informar faturas (NF) e dados para rastreio manualmente no OMS. |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| List Orders | OMS | AcessoOMS | Permite listar todos os pedidos da conta. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Order Details | VTEX Fulfilment | Fulfilment Resources |
| Notify reemburse | OMS | AcessoOMS | Permite notificar uma nota fiscal de entrada, indicando a entrada novamente de algo que foi reembolsado. Permite o input de uma nota de devolução. |
| Cancel order | OMS | AcessoOMS | Permite Cancelar pedido no OMS. |
| Order feed subscription | OMS | AcessoOMS | Permite que o usuário se inscreva para receber atualizações dos status dos pedidos no Order Feed. |
| Change order | OMS | AcessoOMS | Permite registrar mudanças no pedido (descontos e/ou trocas) |
| View store sales stats | OMS | AcessoOMS | Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos. |

## IntegrationProfile - OrderSimulation

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Order Details | VTEX Fulfilment | Fulfilment Resources | |

## Logistics - Full access

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Homepage | Catalog | Administração | Página inicial |
| Help page | Catalog | Administração | Página de ajuda inicial |
| Logistics full access | Logistics | Acesso ao Logistics | Permite acesso pleno a todos os recursos de logística (visualização, criação, edição e cancelamento de configurações) |
| Logistics viewer | Logistics | Acesso ao Logistics | Permissão de visualização da área inicial do módulo de logistica. |
| Logistics inventory full access | Logistics | Acesso ao Logistics | Permite acesso pleno ao inventário logístico (visualização, criação, edição e cancelamento de configurações). |
| Logistics inventory read only | Logistics | Acesso ao Logistics | Permite somente a visualização do módulo de inventário. |
| Logistics shipping full access | Logistics | Acesso ao Logistics | Permite acesso pleno a todas as funções de envio do módulo de logística (criação, edição e cancelamento de configurações). |
| Logistics shipping read only | Logistics | Acesso ao Logistics |  |

## Logistics - Read only

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Logistics viewer | Logistics | Acesso ao Logistics | Permissão de visualização da área inicial do módulo de logistica. |
| Logistics inventory read only | Logistics | Acesso ao Logistics | Permite somente a visualização do módulo de inventário. |
| Logistics shipping read only | Logistics | Acesso ao Logistics | testar |

## OMS - Full access

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Homepage | Catalog | Administração | Página inicial |
| Help page | Catalog | Administração | Página de ajuda inicial |
| Change order workflow status | OMS | AcessoOMS | Permite acesso às ações dentro do workflow pra mudança de status de pedido, através do botão de Ações no Workflow |
| Notify payment | OMS | AcessoOMS | Acesso ao botão que notifica pagamento ao gateway manualmente na área de pagamento dentro do pedido. |
| Notify invoice | OMS | AcessoOMS | Permite informar faturas (NF) e dados para rastreio manualmente no OMS. |
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| Logistics full access | Logistics | Acesso ao Logistics | Permite acesso pleno a todos os recursos de logística (visualização, criação, edição e cancelamento de configurações) |
| Notify reemburse | OMS | AcessoOMS | Permite notificar uma nota fiscal de entrada, indicando a entrada novamente de algo que foi reembolsado. Permite o input de uma nota de devolução. |
| Cancel order | OMS | AcessoOMS | Permite Cancelar pedido no OMS. |
| Order feed subscription | OMS | AcessoOMS | Permite que o usuário se inscreva para receber atualizações dos status dos pedidos no Order Feed. |
| Change order | OMS | AcessoOMS | Permite registrar mudanças no pedido (descontos e/ou trocas) |
| View store sales stats | OMS | AcessoOMS | Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos. |
| Logistics inventory full access | Logistics | Acesso ao Logistics | Permite acesso pleno ao inventário logístico (visualização, criação, edição e cancelamento de configurações). |
| Logistics shipping full access | Logistics | Acesso ao Logistics | Permite acesso pleno a todas as funções de envio do módulo de logística (criação, edição e cancelamento de configurações). |

## OMS - Read only

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| View order | OMS | AcessoOMS | Permite a visualização de todos os pedidos no OMS. |
| View store sales stats | OMS | AcessoOMS | Exibe totalizadores dentro da seção Todos os pedidos do Gerenciamento de pedidos. Exibe total de vendas além dos detalhes dos pedidos. |

## Payments Notifier

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
| ---- | ---- | ---- | ---- |
| Payments Notification | PCI Gateway | Payment-NotifyPayments | Notificação de aprovação de pagamento, utilizando a Payments Gateway API. |

## Seller Manager

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| View Seller | Seller Register | Seller Administration | Allows view all sellers from account |
| Save Seller | Seller Register | Seller Administration | Allows to create and edit all sellers from account |

## User Administrator - RESTRICTED

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Save user | License Manager | Services access control | Criar usuários, atribuir ou remover perfis de acesso para usuários, editar dados de usuários, criar e alterar chaves de aplicação. |

## VTEX IO Admin

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Get resource by key | License Manager | Controle de Acesso Serviços | Checa permissões de acesso |
| Read Workspace Apps | VTEX IO | Infrastructure | Allows reading the apps installed in the workspace and their direct and indirect dependencies. |
| Link App | VTEX IO | Infrastructure | Allows listing existing links and linking and unlinking apps. |
| Install App | VTEX IO | Infrastructure | Allows installation and uninstallation of apps. |
| Vbase Read Only | VTEX IO | Infrastructure | Read-only access to vbase. |
| Vbase Read Write | VTEX IO | Infrastructure | Read and write access to vbase. |
| Read Workspace Services | VTEX IO | Infrastructure | Allows reading the infra apps in the workspace. |
| Install Service | VTEX IO | Infrastructure | Allows installation and uninstallation of apps |
| Log Access - Read-only | VTEX IO | Infrastructure | Allows reading logs from all applications |
| Read Published Service | VTEX IO | Infrastructure | Allows reading the services data from the infra registry |
| Debug App | VTEX IO | Infrastructure | Allows connecting a debugger to a linked app |
| Workspace CRUD | VTEX IO | Infrastructure | Allows creating, deleting and modifying workspaces |
| Import Redirects | VTEX IO | Infrastructure | Enable user to manage redirects with VTEX IO's command line interface |
| Manage A/B Test | VTEX IO | A/B Test | Allow to start, finish or get status of a A/B Test |
| Read logs | Application Logs Stream | Logs | Read logs from VTEX IO apps owned from this account |

