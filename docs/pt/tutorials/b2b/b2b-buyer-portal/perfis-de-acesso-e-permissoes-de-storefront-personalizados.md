---
title: 'Perfis de acesso e permissões de storefront personalizados'
createdAt: '2026-09-29T18:10:00.000Z'
updatedAt: '2026-09-29T18:10:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: custom-storefront-roles-and-permissions-overview
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

No B2B Buyer Portal, o que cada usuário de uma organização compradora pode fazer na loja é definido por [perfis de acesso de storefront](#perfis-de-acesso-de-storefront), que reúnem [permissões](#permissoes-de-storefront) para acessar recursos no site da loja, como por exemplo `PlaceOrders` (fazer pedidos) ou `ApproveOrders` (aprovar pedidos).

A VTEX oferece perfis de acesso e permissões predefinidos e, para cenários específicos do seu negócio, você também pode criar perfis e permissões personalizadas por API ou pelo Admin VTEX.

> ℹ️ No VTEX Admin, esses itens aparecem como **permissões**. Na API e nos eventos do [Audit](https://help.vtex.com/pt/docs/tutorials/audit), eles são chamados de **recursos** (*resources*), como em `Create Storefront Custom Resource`. Não confunda com os [recursos do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager), que controlam o acesso ao Admin.

Confira a seguir mais detalhes sobre esses conceitos.

## Permissões de storefront

Uma permissão autoriza o acesso a um recurso ou uma ação específica no storefront. Por exemplo, a permissão `PlaceOrders` permite que um usuário crie e envie pedidos.

Existem dois tipos de permissões:

- **Predefinidas:** fornecidas pela VTEX, não podem ser editadas nem excluídas. Confira a lista completa em [Permissões de storefront predefinidas](#permissoes-de-storefront-predefinidas).
- **Personalizadas:** criadas pela sua conta para autorizar o acesso a um recurso que as permissões predefinidas não cobrem. Cada permissão personalizada tem um nome e uma descrição. Na API, ela é chamada de *custom storefront resource* (recurso de storefront personalizado).

As permissões personalizadas têm o mesmo comportamento das predefinidas na hora de autorizar uma ação.

### Permissões de storefront predefinidas

Confira na tabela a seguir as permissões predefinidas disponíveis. A coluna **Chave** indica o identificador da permissão, usado na API e no Audit.

| Chave | Descrição |
| --- | --- |
| `ManageOrganizationAndContract` | Permite gerenciar a estrutura da organização, os contratos e as configurações relacionadas. |
| `ManageOrganizationHierarchy` | Permite ao usuário ignorar os limites das unidades organizacionais e gerenciar entidades no nível da organização raiz, incluindo acesso e administração em todas as unidades organizacionais. |
| `ManageUsers` | Permite criar, modificar e excluir usuários. |
| `ViewUsers` | Concede acesso somente leitura aos detalhes e às listas de usuários. |
| `ManageBuyingPolicies` | Permite criar, modificar e excluir políticas de compras e fluxos de aprovação. |
| `ViewBuyingPolicies` | Concede permissão para visualizar as políticas de compras configuradas, incluindo regras de aprovação e restrições de gastos. |
| `ManageBudgets` | Permite controle total sobre a criação, edição, alocação e exclusão de budgets. |
| `ViewBudget` | Concede acesso somente leitura aos detalhes de budgets, incluindo alocações, limites e histórico de gastos. |
| `ManageAccountingFields` | Permite criar, modificar e excluir campos contábeis. |
| `ViewAccountingFields` | Concede acesso somente leitura às configurações dos campos contábeis. |
| `ManageCreditCards` | Permite gerenciar os cartões de crédito salvos, incluindo adicionar, editar e remover cartões. |
| `ViewCreditCards` | Concede acesso somente leitura aos cartões de crédito salvos. |
| `PlaceOrders` | Concede a capacidade de criar e enviar pedidos. |
| `ViewMyContractOrders` | Permite ao usuário ver os pedidos feitos no contrato ao qual está atribuído. |
| `ViewMyOrgUnitOrders` | Permite ao usuário ver todos os pedidos da sua unidade organizacional. |
| `ModifyOrders` | Concede permissão para usar a funcionalidade de alteração de pedido em todos os pedidos aos quais o usuário tem acesso. |
| `ApproveOrders` | Concede a capacidade de aprovar ou rejeitar pedidos com base em fluxos predefinidos. |
| `ManageAddresses` | Permite adicionar um novo endereço durante o checkout e salvá-lo para o contrato ou a unidade organizacional. Também permite alterar as informações de endereço no checkout. |
| `ViewAddresses` | Permite ao usuário ver seus endereços salvos. |
| `UseAdHocCard` | Concede permissão para usar um novo cartão de crédito no checkout. |

### Regras e limites das permissões de storefront personalizadas

- Cada conta pode ter até **10 permissões personalizadas**. As permissões predefinidas não contam para esse limite.
- O nome deve ter de 5 a 80 caracteres e ser único na conta, sem diferenciar letras maiúsculas e minúsculas.
- O nome não pode coincidir com o de nenhuma permissão ou perfil de acesso predefinido.
- O nome funciona como identificador da permissão e não pode ser alterado depois da criação. Para mudá-lo, é necessário excluir a permissão e criar outra.
- Uma permissão personalizada não pode ser excluída enquanto estiver em uso por algum perfil de acesso.

## Perfis de acesso de storefront

Um **perfil de acesso de storefront** determina o conjunto de permissões de um grupo de usuários da loja. Cada usuário pode ter um ou mais perfis de acesso e, nesse caso, recebe a combinação de todas as permissões desses perfis.

Por exemplo, um comprador que faz pedidos e um gestor que aprova pedidos precisam de permissões diferentes. Nesse caso, cada um recebe um perfil de acesso com apenas as permissões necessárias para o seu papel.

Existem dois tipos de perfis de acesso:

- **Predefinidos:** fornecidos pela VTEX para cobrir os casos de uso mais comuns, não podem ser editados nem excluídos. Confira a lista completa em [Perfis de acesso de storefront predefinidos](#perfis-de-acesso-de-storefront-predefinidos).
- **Personalizados:** criados pela sua conta, combinando permissões predefinidas e personalizadas. Um exemplo é o perfil **Visualizador de relatórios**, que reúne a permissão predefinida `ViewUsers` e uma permissão personalizada que autoriza o acesso a um serviço externo de relatórios.

### Perfis de acesso de storefront predefinidos

Confira na tabela a seguir os perfis de acesso predefinidos disponíveis, com as permissões associadas a cada um. A coluna **ID** indica o identificador do perfil, usado na API.

| Perfil de acesso | ID | Descrição | Permissões associadas | Disponibilidade |
| --- | --- | --- | --- | --- |
| Organizational Unit Admin | 1 | Gerencia a estrutura da organização, os contratos e as configurações relacionadas. | `ManageOrganizationAndContract`, `ManageUsers`, `ViewUsers`, `ManageBuyingPolicies`, `ViewBuyingPolicies`, `ManageBudgets`, `ViewBudget`, `ManageAccountingFields`, `ViewAccountingFields`, `ManageCreditCards`, `ViewCreditCards` | Admin e API |
| Order Approver | 2 | Pode aprovar ou rejeitar pedidos com base em fluxos predefinidos. | `ApproveOrders` | Admin e API |
| Order Modifier | 3 | Pode usar a funcionalidade de alteração de pedido em todos os pedidos aos quais tem acesso. | `ModifyOrders` | Admin e API |
| Buyer | 4 | Pode criar e enviar pedidos. | `PlaceOrders` | Admin e API |
| Personal Cards User | 5 | Pode usar um novo cartão de crédito no checkout. | `UseAdHocCard` | Admin e API |
| Contract Manager | 6 | Pode ver os pedidos feitos no contrato ao qual está atribuído. | `ViewMyContractOrders` | Admin e API |
| Buyer Organization Manager | 7 | Pode ver todos os pedidos da sua unidade organizacional. | `ViewMyOrgUnitOrders` | Admin e API |
| User Manager | 10 | Pode gerenciar usuários e ver os detalhes dos usuários da organização. | `ManageUsers`, `ViewUsers` | Admin e API |
| Buying Policy Manager | 11 | Pode criar, editar e excluir políticas de compras e fluxos de aprovação, além de visualizar as políticas de compras. | `ManageBuyingPolicies`, `ViewBuyingPolicies` | Somente API |
| Budget Manager | 12 | Pode criar, editar, alocar e excluir budgets, além de ver os detalhes, as alocações, os limites e o histórico de gastos. | `ManageBudgets`, `ViewBudget` | Somente API |
| Accounting Field Manager | 13 | Pode criar, editar e excluir campos contábeis, além de ver as configurações desses campos. | `ManageAccountingFields`, `ViewAccountingFields` | Somente API |
| Super Buyer Admin | 16 | Tem controle administrativo total sobre a estrutura da organização compradora, incluindo o gerenciamento de unidades organizacionais e da configuração hierárquica. | `ManageOrganizationHierarchy` | Admin e API |
| Credit Card Manager | 41 | Pode gerenciar e ver os cartões de crédito salvos. | `ManageCreditCards`, `ViewCreditCards` | Admin e API |

> ℹ️ Os perfis marcados como "Somente API" só podem ser atribuídos a usuários por meio dos endpoints [Assign storefront roles](https://developers.vtex.com/docs/api-reference/storefront-roles-api#post-/api/license-manager/storefront/user/roles) ou [Assign one storefront role](https://developers.vtex.com/docs/api-reference/storefront-roles-api#post-/api/license-manager/storefront/roles/assign).

> ℹ️ Desde 21 de setembro de 2026, o perfil **Address Manager** (ID `9`) foi removido. As permissões `ManageAddresses` e `ViewAddresses` agora só podem ser usadas em um perfil de acesso personalizado. Contas que já tinham esse perfil foram migradas para um perfil personalizado equivalente e mantêm o acesso.

### Regras e limites dos perfis de acesso de storefront personalizados

- O nome deve ser único na conta e não pode coincidir com o de nenhum perfil de acesso predefinido.
- Diferente das permissões personalizadas, os perfis podem ser editados depois de criados. Ao editar um perfil, a alteração nas permissões vale imediatamente para todos os usuários que já têm esse perfil.
- Um perfil de acesso não pode ser excluído enquanto estiver atribuído a algum usuário.

A criação de perfis de acesso não os atribui a nenhum usuário. A atribuição é feita ao gerenciar os usuários da organização compradora. Saiba mais em [Adicionar usuários à organização compradora](https://help.vtex.com/pt/docs/tutorials/adicionar-usuarios-a-organizacao-compradora).

## Auditoria

Toda criação, edição e exclusão de perfis de acesso e permissões personalizados é registrada no [Audit](https://help.vtex.com/pt/docs/tutorials/audit). Os eventos relacionados a esta funcionalidade, como `Create Storefront Custom Role` e `Delete Storefront Custom Resource`, estão listados na seção License Manager do artigo [Eventos disponíveis no Audit](https://help.vtex.com/pt/docs/tutorials/eventos-disponiveis-no-audit#license-manager).

## Gerenciar perfis de acesso e permissões de storefront personalizados

Você pode criar, consultar, editar e excluir perfis de acesso e permissões personalizados pelo VTEX Admin, na página **Permissões personalizadas**. Para conhecer os requisitos de acesso, os componentes da página e o passo a passo de cada ação, leia [Gerenciar perfis de acesso e permissões de storefront personalizados](https://help.vtex.com/pt/docs/tutorials/gerenciar-perfis-de-acesso-e-permissoes-de-storefront-personalizados).

> ℹ️ Para gerenciar perfis de acesso e permissões personalizados via API, acesse a [Storefront Roles API](https://developers.vtex.com/docs/api-reference/storefront-roles-api) e o guia para desenvolvedores [Custom storefront roles and resources](https://developers.vtex.com/docs/guides/custom-storefront-roles-and-resources).

## Saiba mais

- [Gerenciar perfis de acesso e permissões de storefront personalizados](https://help.vtex.com/pt/docs/tutorials/gerenciar-perfis-de-acesso-e-permissoes-de-storefront-personalizados)
- [Adicionar usuários à organização compradora](https://help.vtex.com/pt/docs/tutorials/adicionar-usuarios-a-organizacao-compradora)
- [Recursos do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager)
