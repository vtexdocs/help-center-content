---
title: 'Visão geral de Scopes'
createdAt: '2026-03-04T10:00:00.000Z'
updatedAt: '2026-03-04T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: scopes-overview
locale: pt
---

> ⚠️ A funcionalidade **Scopes** é exclusiva para o **B2B Buyer Portal**, que está disponível apenas para contas selecionadas.

Na estrutura hierárquica de uma empresa B2B, as [Organizational Units](https://help.vtex.com/pt/docs/tutorials/organizational-units-overview) possuem os chamados **Scopes**, que funcionam como um container que agrupa atributos dessas unidades.

Cada organization unit possui um scope próprio, e as informações que ele concentra podem incluir:

* IDs de contratos
* IDs de sistemas de pagamento
* IDs de cartões de crédito
* Condições de pagamento
* IDs de coleções
* Tabelas de preços
* Endereços

## Permissões de Storefront

Para visualizar e gerenciar o scope de uma organizational unit, o perfil de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ter os recursos `View_Organization_Unit` e `Edit_Organization_Unit`.

> ℹ️ Para mais informações, veja o artigo [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).

## Gerenciar scopes

A interface da Organization Account não possui uma tela dedicada à configuração de **Scopes**. O gerenciamento é feito via API, por meio da [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).
