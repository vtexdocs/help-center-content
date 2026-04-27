---
title: 'Adicionar ou editar unidades organizacionais'
createdAt: '2026-03-10T10:00:00.000Z'
updatedAt: '2026-03-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-organizational-units
locale: pt
---

> ⚠️ Esta funcionalidade é exclusiva para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

**Unidades organizacionais** são unidades organizacionais que permitem às empresas gerenciar sua estrutura interna de forma hierarquizada, com orçamento próprio, fluxos internos de aprovação, autonomia de compra e outros níveis de subdivisão. Dessa forma, a plataforma permite que uma única empresa B2B opere com múltiplas estruturas internas, mantendo consistência contratual e controle operacional.

Este artigo orienta sobre o gerenciamento de unidades organizacionais e está dividido nas seguintes seções:

* [Adicionar unidade organizacional](#adicionar-unidade-organizacional)
* [Renomear unidade organizacional](#renomear-unidade-organizacional)
* [Adicionar usuário a uma unidade organizacional](#adicionar-usuario-a-uma-unidade-organizacional)
* [Adicionar unidade organizacional filha (subordinada)](#adicionar-unidade-organizacional-filha-subordinada)
* [Remover unidade organizacional](#remover-unidade-organizacional)

> ⚠️ Para configurar unidades organizacionais, o perfil de [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles) do usuário deve ser `Organizational Unit Admin`, `Super Buyer Admin`, ou ter o recurso `ManageOrganizationHierarchy`.

## Adicionar unidade organizacional

1. Na página inicial da Organization Account, na seção **Organization,** clique em `Organizational Units`.

    ![organization_units_image_initial_org_account_page_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buying_policies_image_initial_org_account_page_PT.png)

2. Na tela **Organizational Units,** clique no ícone `+`.
3. Verifique no campo **Parent** se está correta a identificação da unidade organizacional à qual a nova unidade estará subordinada, ou seja, da qual será filha. Este campo não permite edição.
4. Preencha o nome da nova unidade organizacional. É possível [renomeá-lo](#renomear-unidade-organizacional) posteriormente.
5. Clique em `Add`.

Após criar uma unidade organizacional, ela aparecerá listada na tela **Organizational Units,** e você poderá acessar sua Organization Account ao clicar na sua linha correspondente.

## Renomear unidade organizacional

1. Na página **Organizational Units,** na linha correspondente à unidade organizacional que deseja renomear, clique no ícone menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Rename`.
2. Faça as alterações desejadas.
3. Clique em `Save`.

## Adicionar usuário a uma unidade organizacional

1. Na página **Organizational Units,** na linha correspondente à unidade organizacional que deseja adicionar um usuário, clique no ícone menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Add User`.
2. Preencha as informações do novo usuário:
    * Nome
    * Email
    * Número de telefone (opcional)
    * Username
3. Selecione os perfis de acesso que deseja atribuir ao usuário.

    > ℹ️ Para mais informações sobre perfis de acesso no **[B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt),** veja o artigo [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles).
4. Clique em `Add`.

## Adicionar unidade organizacional filha (subordinada)

1. Na página **Organizational Units,** na linha correspondente à unidade organizacional desejada, clique no ícone menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Add Subordinate Unit`.
2. Verifique no campo **Parent** se está correta a identificação da unidade organizacional à qual a nova unidade estará subordinada, ou seja, da qual será filha. Este campo não permite edição.
3. Preencha o nome da unidade organizacional filha.
4. Clique em `Add`.

## Remover unidade organizacional

> ❗ Para remover uma unidade organizacional que tenha unidades subordinadas, primeiro é necessário remover cada unidade filha individualmente, começando pelo nível mais baixo.

1. Na página **Organizational Units,** na linha correspondente à unidade organizacional que deseja remover, clique no ícone menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Delete`.
2. Preencha o nome da unidade organizacional. Este campo é sensível a maiúsculas e minúsculas.
3. Clique em `Delete`.

> ℹ️ Para gerenciar as unidades da sua organização via API, acesse a [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).
