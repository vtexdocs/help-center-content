---
title: 'Adicionar ou editar Organizational Units'
createdAt: '2026-03-03T10:00:00.000Z'
updatedAt: '2026-03-03T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-organizational-units
locale: pt
---

> ⚠️ A funcionalidade **Organizational Units** é exclusiva para o **B2B Buyer Portal**, que está disponível apenas para contas selecionadas.

**Organizational Units** (OU) são unidades organizacionais que permitem às empresas gerenciar sua estrutura interna de forma hierarquizada, com orçamento próprio, fluxos internos de aprovação, autonomia de compra e outros níveis de subdivisão. Dessa forma, a plataforma permite que uma única empresa B2B opere com múltiplas estruturas internas, mantendo consistência contratual e controle operacional.

Este artigo orienta sobre o gerenciamento de organizational units e está dividido nas seguintes seções:

* Adicionar organizational unit
* Renomear organizational unit
* Adicionar usuário a uma organizational unit
* Adicionar organizational unit filha (subordinada)
* Remover organizational unit

> ⚠️ Para configurar organizational units, o perfil de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ser `Organizational Unit Admin`, `Super Buyer Admin`, ou ter o recurso `ManageOrganizationHierarchy`.

## Adicionar organizational unit

1. Na página inicial da Organization Account, na seção **Organization**, clique em `Organizational Units`.

    ![organization_units_image_initial_org_account_page_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buying_policies_image_initial_org_account_page_PT.png)

2. Na tela **Organizational Units**, clique no ícone `+`.
3. Verifique no campo **Parent** se está correta a identificação da organizational unit à qual a nova unidade estará subordinada, ou seja, da qual será filha. Este campo não permite edição.
4. Preencha o nome da nova organizational unit. É possível [renomeá-lo](#renomear-organizational-unit) posteriormente.
5. Clique em `Add`.

Após criar uma organizational unit, ela aparecerá listada na tela **Organizational Units**, e você poderá acessar sua Organization Account ao clicar na sua linha correspondente.

## Renomear organizational unit

1. Na página **Organizational Units**, na linha correspondente à organizational unit que deseja renomear, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Rename`.
2. Faça as alterações desejadas.
3. Clique em `Save`.

## Adicionar usuário a uma organizational unit

1. Na página **Organizational Units**, na linha correspondente à organizational unit que deseja adicionar um usuário, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Add User`.
2. Preencha as informações do novo usuário:
    * Nome
    * Email
    * Número de telefone (opcional)
    * Username
3. Selecione os perfis de acesso que deseja atribuir ao usuário.

    > ℹ️ Para mais informações sobre perfis de acesso no **B2B Buyer Portal**, veja o artigo [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions).
4. Clique em `Add`.

## Adicionar organizational unit filha (subordinada)

1. Na página **Organizational Units**, na linha correspondente à organizational unit desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Add Subordinate Unit`.
2. Verifique no campo **Parent** se está correta a identificação da organizational unit à qual a nova unidade estará subordinada, ou seja, da qual será filha. Este campo não permite edição.
3. Preencha o nome da organizational unit filha.
4. Clique em `Add`.

## Remover organizational unit

> ❗ Para remover uma organizational unit que tenha unidades subordinadas, primeiro é necessário remover cada unidade filha individualmente, começando pelo nível mais baixo.

1. Na página **Organizational Units**, na linha correspondente à organizational unit que deseja remover, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Delete`.
2. Preencha o nome da organizational unit. Este campo é sensível a maiúsculas e minúsculas.
3. Clique em `Delete`.

> ℹ️ Para gerenciar as unidades da sua organização via API, acesse a [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).
