---
title: 'Adicionar ou editar Organization Units'
createdAt: '2026-03-03T10:00:00.000Z'
updatedAt: '2026-03-03T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-organization-units
locale: pt
---

> ⚠️ A funcionalidade **Organization Units** está disponível apenas para o **B2B Buyer Portal**.

**Organization Units** (OU) são unidades organizacionais que permitem às empresas gerenciar suas estrutura interna de forma hierarquizada, com orçamento próprio, fluxos internos de aprovação, autonomia de compra e outros níveis de organização. Dessa forma, a plataforma permite que uma única empresa B2B opere com múltiplas estruturas internas, mantendo consistência contratual e controle operacional.

Este artigo orienta os usuários no gerenciamento de organization units e está dividido nas seguintes seções:

* Adicionar organization unit
* Renomear organization unit
* Adicionar endereço
* Adicionar usuário
* Adicionar organization unit subordinada
* Remover organization unit

> ⚠️ Para configurar organization units, o perfil de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ser `Super Buyer Admin` ou ter o recurso `ManageOrganizationHierarchy`.

## Adicionar organization unit

1. Na página da Organizational Unit, na seção **Organization**, clique em `Organization Units`.

    ![organization_units_image_initial_org_account_page_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organization-account/buying_policies_image_initial_org_account_page_PT.png)

2. Na tela **Organization Units**, clique no ícone `+` no topo da tela para criar uma nova organization unit.
3. No campo **Parent**, clique no menu dropdown e selecione a opção desejada para ser a unidade raiz à qual sua organization unit estará subordinada.

    > ℹ️ É possível que este campo já esteja selecionado e não permita alterações. Isso ocorre quando acima da unidade sendo criada existe somente a unidade organizacional raiz.

4. Preenchar um nome para a organization unit sendo criada.
5. Clique em `Add`.

## Renomear organization unit

1. Na página **Organizational Units**, na linha correspondente à organization unit desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Rename`.
2. Faça as alterações desejadas no nome da organization unit.
3. Clique em `Save`.

## Adicionar endereço

1. Na página **Organizational Units**, na linha correspondente à organization unit desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Add Address`.
2. Preencha as informações de endereço.
3. Clique em `Add`.

## Adicionar usuário

1. Na página **Organizational Units**, na linha correspondente à organization unit desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Add User`.
2. Preencha as informações do novo usuário:
    * Nome
    * Email
    * Número de telefone
    * Username
    * Perfil de acesso
    * Organização
    * Centro de custo
3. Selecione qual ou quais perfis de acesso deseja atribuir ao usuário. Para mais informações, veja o artigo [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions).
4. Clique em `Add`.

Feito isso, um email será enviado para o usuário adicionado.

## Adicionar organization unit subordinada

1. Na página **Organizational Units**, na linha correspondente à organization unit desejada, clique no ícone menu <i class="fas fa-ellipsis-v"></i> > `Add Subordinate Unit`.
2. Preencha as informações da nova organization unit subordinada:
    * Nome
    * Parent
3. Clique em `Add`.

## Remover organization unit
