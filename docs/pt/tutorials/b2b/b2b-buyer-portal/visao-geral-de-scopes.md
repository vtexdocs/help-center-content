---
title: 'Visão geral de Scopes'
createdAt: '2026-02-19T10:00:00.000Z'
updatedAt: '2026-02-19T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: scopes-overview
locale: pt
---

> ⚠️ A funcionalidade **Scopes** é exclusiva para o **B2B Buyer Portal**, disponível apenas para contas selecionadas.

Na estrutura hierarquizada de uma empresa B2B, as [Organizational Units](link-org-unit-overview) possuem os chamados **Scopes**, que funcionam como containers para agrupar atributos das unidades.

Cada organization unit possui um scope próprio, e as informações que ele concentra são:

* IDs de contratos
* IDs de sistemas de pagamento
* IDs de cartões de crédito
* Condições de pagamento
* IDs de coleções
* Tabelas de preços
* Endereços

## Permissões de Storefront

Para configurar os scopes da organização, o perfil de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ter os recursos `View_Organization_Unit` e `Edit_Organization_Unit`.

> ℹ️ Para mais informações, veja o artigo [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).

## Gerenciar scopes

A interface da Organization Account não possui uma configuração específica para **Scopes**, mas é possível gerenciá-los via API, utilizando os endpoints de scope da [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).
