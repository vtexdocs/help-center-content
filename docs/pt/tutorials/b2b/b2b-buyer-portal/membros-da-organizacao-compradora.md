---
title: 'Membros da organização compradora'
createdAt: '2025-02-06T10:00:00.000Z'
updatedAt: '2025-02-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buyer-organization-members
locale: pt
---

Em uma organização compradora B2B, os membros são as pessoas que interagem com a loja em nome da organização. Suas ações são definidas pelos perfis de acesso e permissões atribuídos a eles e pela forma como a organização usa **informações de contato** e **dados do comprador**. Este artigo explica os tipos de membros e conceitos relacionados para que você entenda quem pode fazer o quê na sua organização.

## Perfis de acesso baseados em permissão

Os perfis de acesso definem o que cada usuário pode fazer na loja, incluindo a gestão da Organization Account. Cada perfil de acesso possui um conjunto de permissões. Quando você atribui um ou mais perfis de acesso a um usuário, ele passa a ter as capacidades combinadas desses perfis. As permissões são aplicadas na loja para que os usuários vejam e usem apenas os recursos permitidos.

A tabela abaixo resume os principais perfis de acesso e suas funções:

| Perfil de acesso | Finalidade |
|------|------------|
| **Administrador da unidade organizacional** | Controle total sobre a unidade organizacional: configurações de organização e contrato, usuários, políticas de compra, orçamentos, campos contábeis, cotações e hierarquia da organização. |
| **Super admin comprador** | Pode gerenciar todas as unidades organizacionais no nível raiz da organização, ultrapassando os limites das unidades. |
| **Comprador** | Pode realizar pedidos na loja. |
| **Aprovador de pedidos** | Pode aprovar ou rejeitar pedidos de acordo com os fluxos de aprovação configurados. |
| **Modificador de pedidos** | Pode usar a funcionalidade de alteração de pedido nos pedidos aos quais tem acesso. |
| **Gerente de usuários** | Pode criar, editar e remover usuários na organização. |
| **Gerente de endereços** | Pode adicionar endereços durante o checkout, salvá-los para o contrato ou unidade organizacional, alterar informações de endereço no checkout e visualizar endereços salvos. |
| **Gerente da organização compradora** | Pode visualizar todos os pedidos da sua unidade organizacional, gerenciar configurações de autenticação, visualizar cartões de pagamento e visualizar endereços. |
| **Gerente de contrato** | Pode visualizar pedidos realizados sob o contrato atribuído a ele. |
| **Visualizador de contrato** | Pode visualizar endereços salvos (somente leitura). |
| **Gerente de políticas de compra** | Pode criar, editar e excluir políticas de compra e fluxos de aprovação, e visualizar políticas de compra. |
| **Gerente de orçamentos** | Pode criar, editar, alocar e excluir orçamentos, e visualizar detalhes de orçamento, alocações, limites e histórico de gastos. |
| **Gerente de campos contábeis** | Pode criar, editar e excluir campos contábeis. |
| **Gerente de cotações** | Pode criar, editar e excluir cotações. |
| **Usuário de cartões pessoais** | Pode usar um novo cartão de crédito no checkout que não é salvo no contrato por padrão. |

## Informações de contato

**Informações de contato** referem-se às pessoas que podem ser selecionadas como destinatárias dos pedidos, ou seja, a pessoa que receberá a entrega. O contato de um pedido pode ser diferente do usuário que fez o pedido. Ao realizar um pedido, o comprador pode escolher para qual contato (destinatário) é o pedido.

As informações de contato são gerenciadas no nível da organização. Os contatos podem ser vinculados a endereços para que, ao selecionar um endereço de entrega, o usuário possa escolher entre os contatos associados a esse endereço. Isso mantém os dados de destinatários centralizados e reutilizáveis entre pedidos.

Para detalhes técnicos sobre como criar, atualizar e integrar informações de contato via APIs, consulte a [API de informações de contato B2B](https://developers.vtex.com/docs/api-reference/b2b-contact-information-api).

## Compradores (dados do comprador/consumidor)

**Compradores** são usuários que podem realizar pedidos e estão associados à organização compradora. Os dados do comprador são as informações que identificam e descrevem esses usuários no contexto da loja e dos fluxos de pedidos, por exemplo, para checkout e histórico de pedidos.

Os dados do comprador são usados pela loja para identificar quem está realizando o pedido e aplicar as permissões, contratos e políticas corretos.

Para saber como criar e gerenciar dados do comprador, consulte a [API de dados do comprador B2B](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
