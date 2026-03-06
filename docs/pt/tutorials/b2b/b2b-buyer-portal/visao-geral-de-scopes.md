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

**Scopes** são a funcionalidade da Organization Account que permite às empresas B2B restringirem os atributos de **Organizational Units**, de forma que os compradores só podem ver e usar os recursos da organizational unit à qual eles têm acesso.

Cada organization unit possui um scope próprio, que não é herdado da organization unit raiz e sim configurado individualmente. Isso permite às empresas controlarem quais informações o comprador de uma unidade de negócio pode ver e usar, limitando o acesso dos usuários ao necessário para suas funções.

As restrições que podem ser impostas a **Organizational Units** estão relacionadas às seguintes informações:

- IDs de contratos
- IDs de sistemas de pagamento
- IDs de cartões de crédito
- Condições de pagamento
- IDs de coleções
- Tabelas de preços
- Endereços

> ℹ️ O gerenciamento de **Scopes** via API é feito pela [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).

## Permissões de Storefront

Para visualizar e gerenciar o scope de uma organizational unit, o perfil de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ter os recursos `View_Organization_Unit` e `Edit_Organization_Unit`.

> ℹ️ Para mais informações, veja o artigo [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).
