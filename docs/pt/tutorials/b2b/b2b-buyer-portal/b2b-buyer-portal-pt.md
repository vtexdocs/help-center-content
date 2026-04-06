---
title: 'B2B Buyer Portal'
createdAt: '2026-04-06T10:00:00.000Z'
updatedAt: '2026-04-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: b2b-buyer-portal
locale: pt
---

> ⚠️ O **B2B Buyer Portal** está disponível atualmente para contas selecionadas.

O **B2B Buyer Portal** é uma solução VTEX que oferece um storefront self-service para compras corporativas. Ele permite que organizações compradoras gerenciem suas próprias contas, acordos comerciais, controles de gastos e fluxos de compra, reduzindo a carga operacional tanto para lojistas quanto para seus clientes B2B.

Este artigo resume as principais funcionalidades do **B2B Buyer Portal** e direciona para a documentação detalhada de cada tema.

- [Contratos](#contratos)
- [Gestão organizacional](#gestao-organizacional)
  - [Unidades organizacionais](#unidades-organizacionais)
  - [Scopes](#scopes)
  - [Membros e perfis](#membros-e-perfis)
- [Finanças e compliance](#financas-e-compliance)
  - [Budgets](#budgets)
  - [Buying Policies](#buying-policies)
  - [Campos contábeis](#campos-contabeis)
- [Endereços e gestão de pagamentos](#enderecos-e-gestao-de-pagamentos)
- [Conta da organização](#conta-da-organizacao)
- [Punchout](#punchout)

## Contratos

Um [contrato](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) define o relacionamento comercial entre sua loja e uma organização compradora. Ele centraliza os termos do acordo, incluindo:

- Quais produtos o comprador pode acessar (sortimentos de produtos).
- Quais preços se aplicam (tabelas de preços).
- Quais métodos de pagamento estão disponíveis.

Os contratos são a base da experiência do comprador. Todas as [unidades organizacionais](#unidades-organizacionais) da empresa herdam as condições do contrato, garantindo consistência em toda a organização. A funcionalidade de [Scopes](#scopes) pode então controlar quais desses atributos cada unidade pode ver e utilizar.

Para simplificar a gestão de contratos em escala, o [Agente de Gerenciamento de Contratos](https://help.vtex.com/pt/docs/tutorials/agente-de-gerenciamento-de-contratos) permite que operadores da loja atualizem contratos em massa usando instruções em linguagem natural, como adicionar coleções ou alterar métodos de pagamento em centenas de contratos de uma vez.

## Gestão organizacional

O **B2B Buyer Portal** permite que organizações compradoras repliquem sua estrutura interna na plataforma, para que cada departamento, filial ou subsidiária possa operar com suas próprias regras, compartilhando um único contrato.

### Unidades organizacionais

As [unidades organizacionais](https://help.vtex.com/pt/docs/tutorials/unidades-organizacionais) representam as subdivisões de uma organização compradora, como departamentos, escritórios regionais ou subsidiárias. Elas seguem um modelo hierárquico em árvore. Uma unidade raiz representa a organização como um todo, e as unidades filhas refletem suas áreas internas.

Cada unidade pode ter configurações específicas de visibilidade de produtos, métodos de pagamento, endereços de entrega, campos contábeis e regras de aprovação de pedidos, permitindo que a loja se alinhe às políticas internas da empresa compradora sem precisar de múltiplos contratos ou contas. As configurações por unidade estão sempre sujeitas às condições do contrato.

> ℹ️ Saiba mais sobre configurações em [Adicionar ou editar unidades organizacionais](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-organizational-units).

### Scopes

Os [Scopes](https://help.vtex.com/pt/docs/tutorials/visao-geral-de-scopes) controlam quais atributos da organização são visíveis e disponíveis para cada unidade organizacional. Os administradores podem restringir o acesso a contratos, métodos de pagamento, cartões de crédito, coleções, endereços e campos contábeis por unidade, garantindo que os compradores vejam apenas o que é relevante para sua unidade organizacional.

### Membros e perfis

Os [membros](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora) de uma organização compradora recebem perfis de acesso do storefront que definem o que podem ver e fazer na loja. Exemplos de perfis predefinidos incluem:

- **Buyer:** realiza pedidos.
- **Order Approver:** aprova ou rejeita pedidos em fluxos de aprovação.
- **Organizational Unit Admin:** gerencia a estrutura, usuários e configurações da unidade.
- **Budget Manager:** cria e gerencia budgets e alocações.
- **Buying Policy Manager:** configura regras de aprovação de compras.

Esses e outros perfis disponíveis podem ser combinados para atender às responsabilidades de cada usuário, criando um modelo de permissões granular para estruturas organizacionais complexas. Para a lista completa, consulte [Membros da organização compradora](https://help.vtex.com/pt/docs/tutorials/membros-da-organizacao-compradora).

## Finanças e compliance

O **B2B Buyer Portal** oferece ferramentas de governança financeira e compliance de compras, permitindo que as organizações controlem gastos e apliquem regras internas de aquisição.

### Budgets

Os [Budgets](https://help.vtex.com/pt/docs/tutorials/visao-geral-de-budgets) permitem que as organizações definam limites de gastos e os distribuam em alocações vinculadas a entidades específicas, como usuários, endereços ou campos contábeis. As principais funcionalidades incluem:

- Definir valores totais e períodos de validade para cada budget.
- Subdividir budgets em alocações para diferentes departamentos ou projetos.
- Acompanhar saldos restantes e histórico de transações.
- Configurar notificações quando o consumo atinge limites definidos.

Durante o checkout, o sistema verifica automaticamente as alocações aplicáveis, garantindo que os pedidos sejam financiados de acordo com as regras financeiras da organização.

> ℹ️ Saiba mais sobre configurações em [Adicionar ou editar budgets](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-budgets).

### Buying Policies

As [Buying Policies](https://help.vtex.com/pt/docs/tutorials/buying-policies) são regras de autorização que determinam se os pedidos são automaticamente aprovados, negados ou enviados para revisão manual. As organizações podem configurar:

- **Limites de gastos:** pedidos acima, abaixo ou iguais a determinados valores podem acionar diferentes requisitos de aprovação.
- **Fluxos de aprovação:** até cinco níveis hierárquicos de aprovação, onde a aprovação final requer a autorização de todos os níveis.
- **Critérios customizados:** regras de aprovação de pedidos baseadas em budgets, origem do pedido e outros fatores.

Essa camada de governança garante que a atividade de compras esteja em conformidade com as políticas internas antes que os pedidos sejam realizados.

> ℹ️ Saiba mais sobre configurações em [Adicionar ou editar Buying Policies](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-buying-policies).

### Campos contábeis

Os [campos contábeis](https://help.vtex.com/pt/docs/tutorials/campos-contabeis) capturam informações de negócio adicionais durante o checkout, como centro de custo, número de PO, códigos de projeto ou classificações de despesas. Os campos podem ser aplicados nos níveis de pedido, item ou endereço e configurados como obrigatórios ou opcionais.

As organizações também podem definir valores padrão por unidade organizacional para preencher automaticamente campos do checkout, reduzindo a entrada manual e garantindo consistência dos dados nas compras.

> ℹ️ Saiba mais sobre configurações em [Adicionar ou editar campos contábeis](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-campos-contabeis).

## Endereços e gestão de pagamentos

O **B2B Buyer Portal** suporta a gestão de múltiplos endereços de envio e faturamento por organização, incluindo pontos de entrega internos (como docas ou departamentos) e destinatários designados que podem ser diferentes do usuário que realiza o pedido.

Cartões de pagamento podem ser armazenados no nível do contrato (compartilhados em toda a organização) ou no nível do comprador individual, com armazenamento tokenizado para segurança.

> ℹ️ Saiba mais sobre configurações em [Configurações do contrato](https://help.vtex.com/pt/docs/tutorials/configuracoes-do-contrato).

## Conta da organização

A [Conta da organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao) é a interface de autoatendimento onde os administradores da organização compradora gerenciam todas as configurações mencionadas acima. Em uma única tela, os admins podem:

- Visualizar e atualizar detalhes do contrato (perfil, endereços, métodos de pagamento, sortimento de produtos).
- Gerenciar usuários, perfis e unidades organizacionais.
- Configurar budgets, buying policies e campos contábeis.

Essa interface centralizada permite que as organizações compradoras gerenciem suas operações de forma autônoma, sem depender do lojista para tarefas administrativas rotineiras.

## Punchout

O Punchout permite a integração com sistemas externos de procurement, possibilitando que usuários de compras se autentiquem na loja VTEX e naveguem pelo catálogo diretamente da sua plataforma de procurement. Após selecionar os produtos, os compradores podem transferir o carrinho de volta ao sistema de procurement para aprovação interna.

Essa funcionalidade atende organizações que utilizam software de procurement centralizado e precisam que as vitrines de seus fornecedores estejam integradas aos fluxos de compra existentes.

> ℹ️ Essa funcionalidade é suportada exclusivamente pela [Punchout API](https://developers.vtex.com/docs/api-reference/punchout-api#overview). Saiba mais com o [Guia de integração de punchout](https://developers.vtex.com/docs/guides/punchout).

## Saiba mais

- [Adicionar ou editar unidades organizacionais](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-organizational-units)
- [Adicionar usuários à organização compradora](https://help.vtex.com/pt/docs/tutorials/adicionar-usuarios-a-organizacao-compradora)
- [B2B Buyer Portal integration overview](https://developers.vtex.com/docs/guides/b2b-buyer-portal-integration-overview) (documentação para desenvolvedores)
