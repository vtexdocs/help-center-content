---
title: 'Membros da organização compradora'
createdAt: '2025-02-06T10:00:00.000Z'
updatedAt: '2026-04-10T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buyer-organization-members
locale: pt
---

Em uma organização compradora B2B, os membros são as pessoas que interagem com a loja em nome da organização. Suas ações são definidas pelos perfis de acesso e permissões atribuídos a eles e pela forma como a organização usa **destinatários** e **dados do comprador**. Este artigo explica os tipos de membros e conceitos relacionados para que você entenda quem pode fazer o quê na sua organização.

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

## Perfis de acesso do storefront

Os perfis de acesso definem o que cada usuário pode fazer na loja, incluindo a gestão da Conta da Organização. Cada perfil de acesso possui um conjunto de permissões. Quando você atribui um ou mais perfis de acesso a um usuário, ele passa a ter as capacidades combinadas desses perfis. As permissões são aplicadas na loja para que os usuários vejam e usem apenas os recursos permitidos.

A tabela abaixo resume os principais perfis de acesso e suas funções:

| Perfil de acesso | Finalidade |
| --- | --- |
| **Organizational Unit Admin** | Controle total sobre a unidade organizacional: configurações de organização e contrato, usuários, políticas de compra, orçamentos, campos contábeis e cartões de crédito. |
| **Super Buyer Admin** | Pode gerenciar todas as unidades organizacionais no nível raiz da organização, ultrapassando os limites das unidades. |
| **Buyer** | Pode realizar pedidos na loja. |
| **Order Approver** | Pode aprovar ou rejeitar pedidos de acordo com os fluxos de aprovação configurados. |
| **Order Modifier** | Pode usar a funcionalidade de alteração de pedido nos pedidos aos quais tem acesso. |
| **Address Manager** | Pode adicionar e gerenciar endereços durante o checkout e visualizar endereços salvos. |
| **Buyer Organization Manager** | Pode visualizar todos os pedidos da sua unidade organizacional. |
| **Contract Manager** | Pode visualizar pedidos realizados sob o contrato atribuído a ele. |
| **User Manager** | Pode gerenciar usuários e visualizar detalhes de usuários dentro da organização. |
| **Buying Policy Manager** | Pode criar, editar e excluir políticas de compra e fluxos de aprovação, e visualizar políticas de compra. |
| **Budget Manager** | Pode criar, editar, alocar e excluir orçamentos, e visualizar detalhes de orçamento, alocações, limites e histórico de gastos. |
| **Accounting Field Manager** | Pode criar, editar e excluir campos contábeis, e visualizar configurações de campos contábeis. |
| **Credit Card Manager** | Pode gerenciar e visualizar cartões de crédito salvos. |
| **Personal Cards User** | Pode usar um novo cartão de crédito no checkout que não é salvo no contrato por padrão. |

> ℹ️ Saiba mais sobre perfis de acesso do storefront e recursos no guia do desenvolvedor [Storefront Roles](https://developers.vtex.com/docs/guides/storefront-roles).

## Destinatários

**Destinatários** ou **contatos** são as pessoas que podem ser selecionadas como destinatárias dos pedidos, ou seja, a pessoa que receberá a entrega. O contato de um pedido pode ser diferente do usuário que fez o pedido. Ao realizar um pedido, o comprador pode escolher para qual contato (destinatário) é o pedido.

As informações dos destinatários são gerenciadas no nível da organização. Os contatos podem ser vinculados a endereços para que, ao selecionar um endereço de entrega, o usuário possa escolher entre os contatos associados a esse endereço. Isso mantém os dados de destinatários centralizados e reutilizáveis entre pedidos.

Para detalhes técnicos sobre como criar, atualizar e integrar destinatários via APIs, consulte a [API de Destinatários B2B](https://developers.vtex.com/docs/api-reference/b2b-recipients-api).

## Compradores

**Compradores** são usuários que podem realizar pedidos e estão associados à organização compradora. Os dados do comprador são as informações que identificam e descrevem esses usuários no contexto da loja e dos fluxos de pedidos, por exemplo, para checkout e histórico de pedidos.

Os dados do comprador são usados pela loja para identificar quem está realizando o pedido e aplicar as permissões, contratos e políticas corretos.

Para saber como criar e gerenciar dados do comprador, consulte a [API de dados do comprador B2B](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
