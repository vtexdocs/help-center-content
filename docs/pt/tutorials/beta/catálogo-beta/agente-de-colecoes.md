---
title: 'Agente de Coleções'
createdAt: 2026-07-14T00:00:00.000Z
updatedAt: 2026-07-14T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: collections-agent
locale: pt
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://supporticket.vtex.com/support).

Introdução: o que o agente faz e qual problema resolve
Aviso Beta: disponibilidade e limitações
Casos de uso: criar coleção, editar regras, revisar critérios, validar impacto
Como acessar o agente
Como solicitar uma tarefa
Exemplos de prompts
Como revisar e aprovar o plano
Limitações e comportamentos esperados
Boas práticas para prompts

Introdução: definição do agente. O que o agente faz e qual problema resolve.

Quais configurações precisam ser feitas para o agente de coleções funcionar? Ter marcas, categorias, SKUs e produtos cadastrados.

Presents changes for your review before applying them.

Vale dizer como se comporta em mobile devices?

Maybe a key concepts section, like [Microsoft](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview)?

Como o agente busca conteúdo no catálogo da loja?

O agente opera como uma interface conversacional que transforma a intenção do usuário em operações de serviço da VTEX.

## Beta limitations

[Name of the Agent] is currently in the testing phase. During this period, the feature has the following limitations:

## Usage

To interact with the agent and start …{add the agent’s main action}, in the VTEX Admin, go to … or type [Name of the Agent] in the search bar. The page includes a conversation window and suggested questions to help you start an analysis with the assistant.

Você pode usar o XXX das seguintes maneiras: tabela com as colunas "Caso de uso" e "Exemplos de comandos".

### Capabilities

A página é composta por uma janela de conversas e por sugestões de perguntas para iniciar uma análise com o assistente.

![Interface do agente](linkPlaceholder)

The [Name of the Agent] can receive … with messages to process tasks and respond with ….

The [Name of the Agent] allows you to ….

### Prompt examples

Below are some examples of …:

[List of possible tasks or initial prompts]

## Limitations

Examples: Tasks the Agent can't process. Features and services the Agent doesn’t have access to.
Task examples

Example 1

Example 2

----

Doc do Nik:

[List of limitations]

Inputs
• "Create a collection with all products minus apple"
• "Include all products in the collection"
• "I want all my Catalog in the collection"

Output
"There is currently no automatic way to include all of the catalog's products in a collection such that it stays synchronized.
It is possible to include all products using the current dynamic rules, but each one has its limitations.

By categories
All catalog categories are selected.
(Since every product must have a category, all products are included.)

Points of attention
• Inactive categories are included in the collection, but their products don't appear in navigation while inactive. If the category is activated later, they begin appearing.
• If the category is deactivated after the collection has been created, its products remain in the collection but no longer appear in navigation.
• Categories created after the collection has been created are not included automatically.
• A category removed from the catalog after the collection has been created takes its products out of the collection.

By brands
All brands are selected.
(Since every product must have a brand, all products are included.)

Points of attention
• Inactive brands are included in the collection, but their products don't appear in navigation while inactive. If the brand is activated later, they begin appearing.
• If the brand is deactivated after the collection has been created, its products remain in the collection but no longer appear in navigation.
• Brands created afterward are not included automatically.
• A brand removed from the catalog after the collection has been created takes its products out of the collection.

By product specification
A specification with the same value present in all products is selected. It must be active and required.

Points of attention
• A product without this specification is left out.
• A product with it left blank is left out.
• A product with a different value is left out.
• A specification removed from the catalog after the collection has been created takes those products out of the collection.

Worth emphasizing again: inactive products are included in the collection but don't appear in navigation because they're inactive, regardless of the reason — whether they belong to an inactive category or brand, or were deactivated themselves. Don't worry, you'll be given visibility if any of these parameters is inactive, so you can decide how to proceed.
Whichever option you choose, all share the same limitation: none is a permanent mirror of the catalog. What makes up "all products" today can change as the catalog evolves, and none of the paths updates on its own to capture what gets created afterward.
Which one fits your catalog best? Once you choose, a plan will be generated with the proposed structure for approval before any change is applied."
