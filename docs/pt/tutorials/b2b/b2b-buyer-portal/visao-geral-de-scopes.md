---
title: 'Visão geral de Scopes'
createdAt: '2026-03-04T10:00:00.000Z'
updatedAt: '2026-03-04T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: scopes-overview
locale: pt
---

> ⚠️ Esta funcionalidade é exclusiva para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

**Scopes** são a funcionalidade da Organization Account que permite às empresas B2B restringirem os atributos de **Organizational Units** (OU). Isso permite às empresas controlarem quais informações os compradores de uma unidade de negócio podem ver e usar, limitando o acesso dos usuários ao necessário para suas funções.

Cada organization unit possui um scope próprio, que não é herdado da organization unit à qual está subordinada e sim configurado individualmente. Veja um exemplo na imagem a seguir, que representa a totalidade de atributos da Organization Account pelo conjunto ABC e mostra três unidades filhas:

![scopes-overview_1_PT](XXX)

Os cenários apresentados são:

- **Organizational unit 1:** não tem um scope configurado para nenhuma dimensão e, portanto, dispõe de todas as funcionalidades da Organization Account.
- **Organizational unit 2:** tem um scope configurado e dispõe somente da funcionalidade A.
- **Organizational unit 3:** tem um scope configurado e dispõe somente das funcionalidades B e C.

## Restrições de atributos

As restrições que podem ser impostas a **Organizational Units** estão relacionadas às seguintes informações:

- Contratos
- [Meios e condições de pagamento](https://help.vtex.com/pt/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento)
- Cartões de crédito
- [Coleções](https://help.vtex.com/pt/docs/tutorials/tipos-de-colecao)
- Endereços
- Accounting fields

> ℹ️ O gerenciamento de **Scopes** via API é feito pela [Organization Units API](https://developers.vtex.com/docs/api-reference/organization-units-api#overview).

## Permissões de Storefront

Para visualizar e gerenciar o scope de uma organizational unit, o perfil de [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ter os recursos `View_Organization_Unit` e `Edit_Organization_Unit`.

> ℹ️ Para mais informações, veja o artigo [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).
