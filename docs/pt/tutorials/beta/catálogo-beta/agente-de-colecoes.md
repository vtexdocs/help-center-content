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

1 - Introdução

- O que é o agente?
- O que o agente faz?
- Qual problema ele resolve?
- Como ele difere da interface de coleções legada?

2 - Avisos do beta

- Qual é a disponibilidade?
- Quais são as imitações?
- Quais são os comportamentos esperados do beta? // The guide covers Closed Beta scope: bulk import/export, Assortment creation, and Preview are included. // Assortments are currently B2B-only (used in B2B contracts). Mention this where relevant so B2C users aren't confused.

1.1 Distinção entre coleção e sortimento // informar que atualmente Sortimentos estão restritos a cenários B2B

2 - Acessando o agente de Coleções

- Como acessar o agente pelo Admin VTEX?
- Existe mais de uma maneira de fazer isso?
- Como isso aparece na interface? (apresentar imagem do Figma)

3 - Regras para coleções e sortimentos // identificar o que é coleção, sortimento ou ambos

- Cria e editar coleções de forma estática (explicit Product ID list) ou dinâmica (criteria: marcas, categorias, especificações de produto, especificações de SKU)
- Inclusive and exclusive rules // o mesmo que "combining and excluding Collections"?
- Complex AND/OR combinations
- Regra de propagação // editing a shared collection updates every assortment that consumes it (this is the building-block value prop)
- Agent appends rather than replacing; supports "undo that", "swap X for Y"
- Conversational disambiguation: when an instruction is vague or matches multiple catalog entities, the agent pauses and presents options instead of guessing
- Before high-impact changes (e.g., editing a Collection shared across many Assortments), the agent surfaces the blast radius and requests confirmation

3.1 Boas práticas para prompts // Vale a pena ter essa seção?

4 - Realizando ações com coleções

> ⚠️ Os exemplos de prompts sobre coleções apresentados são apenas para fins ilustrativos e não a única forma de executar determinada ação com o agente.

- Como criar uma coleção usando linguagem natural (prompt)?
- Como visualizar o resultado? // preview updates each turn // the agent models sub-collection logic automatically — the user approves the final structure, not the internal wiring
- Como verificar as relações? // list all Collections in an Assortment (grouped by included/excluded); list all Assortments that consume a given Collection (both directions)
- Como aprovar o plano de coleção?
- Como criar coleções em massa? // import a `.csv` or `.xlsx` of Product IDs; three flows: add to existing list, remove from existing list, override the entire list (one collection per operation)
- Como editar (revisar, iterar na edição, refinar) a coleção sem precisar começar do zero? // isso é sempre sobre uma coleção que já foi criada ou pode ser sobre a edição de uma coleção que está sendo criada?
- Como revisar () e refinar a coleção  // agent appends rather than replacing; supports "undo that", "swap X for Y"
- Como checar impacto da edição? // é o mesmo que verificar as relações de uma coleção que foi criada?
- Como buscar, filtrar e listar coleções? // search by name/ID; filter/sort by creation date, name, ID

5 - Realizando ações com sortimentos

> ⚠️ Os exemplos de prompts sobre sortimentos apresentados são apenas para fins ilustrativos e não a única forma de executar determinada ação com o agente.

- Como criar um sortimento usando linguagem natural (prompt)?
- Como visualizar o resultado? // preview updates each turn // "Preview" action after the agent drafts/updates; shows estimated item count, sample items, SKU membership check; agent summarizes the applied logic; limitation: one collection or assortment at a time
- Como verificar as relações? // list all Collections in an Assortment (grouped by included/excluded); list all Assortments that consume a given Collection (both directions) // ("Why is this product here?" e o agent vai explicar qual critério/regra foi utilizado para tomar a decisão)
- Como aprovar o plano de sortimento?
- Como criar sortimento em massa? // é possível?
- Como editar (revisar, iterar na edição, refinar) o sortimento sem precisar começar do zero? // isso é sempre sobre um sortimento que já foi criado ou pode ser sobre a edição de um sortimento que está sendo criado?
- Como revisar e refinar a sortimento? // agent appends rather than replacing; supports "undo that", "swap X for Y"
- Como checar o impacto da edição? // é o mesmo que verificar as relações de um sortimento que foi criado?
- Como buscar, filtrar e listar sortimentos? // search by name/ID; filter/sort by creation date, name, ID

__________________________________________________________________

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

_____

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
