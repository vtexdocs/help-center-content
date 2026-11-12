---
title: 'Importar e exportar fluxos'
id: 2jwPSnXsL3wniLWt9i7IA5
status: PUBLISHED
createdAt: 2025-09-17T14:03:45.539Z
updatedAt: 2026-11-12T15:07:00.000Z
publishedAt: 2025-10-03T14:20:03.745Z
firstPublishedAt: 2025-10-03T14:20:03.745Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: import-and-export-flows
legacySlug: importar-e-exportar-fluxos
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
seeAlso:
  - /pt/docs/tutorials/criacao-de-fluxos
---

Você pode exportar fluxos de uma organização e importá-los em outra. A exportação gera um arquivo `.json`, que é usado durante a importação para adicionar os fluxos à organização de destino.

Para duplicar um fluxo dentro da mesma organização, use `Copiar` no menu de configurações do editor de fluxos.

> Para saber mais sobre os fluxos e sua estrutura, consulte [Visão geral do fluxo de automação](https://help.vtex.com/pt/docs/tutorials/visao-geral-fluxo-de-automacao).

## Exportar fluxos

Você pode abrir a página de exportação pelo editor de fluxos ou pelas configurações gerais da organização. A página exibe todos os fluxos e campanhas da organização, agrupados por uso.

> ⚠️ Os fluxos de um mesmo grupo interagem entre si. Se você exportar apenas um fluxo do grupo, ele poderá não funcionar corretamente depois da importação. Selecione todos os fluxos do grupo.

### Abrir a página de exportação pelo editor de fluxos

No editor de fluxos, o menu de configurações fica ao lado do botão Começar Fluxo. A opção `Exportar definição` desse menu abre a página de exportação. `Exportar tradução` é uma opção diferente: ela exporta a tradução do fluxo, não a definição. Para conhecer as outras opções desse menu, consulte [Editor de fluxo e suas ferramentas](https://help.vtex.com/pt/docs/tutorials/editor-de-fluxo-e-suas-ferramentas).

Para abrir a página de exportação pelo editor de fluxos, siga estas etapas:

1. No menu lateral, acesse **Agent Builder > Fluxo de automação**.
2. Abra um fluxo que você deseja exportar.
3. Abra o menu de configurações ao lado de `Começar Fluxo`.
4. Clique em `Exportar definição`.

> ℹ️ `Exportar tradução` exporta a tradução do fluxo, não a definição. Para saber mais sobre as outras configurações, consulte [Editor de fluxo e suas ferramentas](https://help.vtex.com/pt/docs/tutorials/editor-de-fluxo-e-suas-ferramentas).

### Pelas configurações gerais

1. Abra as configurações gerais da organização de origem.
2. No menu de opções, clique em `Exportar`.

### Selecionar e exportar fluxos

Depois de abrir a página de exportação:

1. Selecione os fluxos que você deseja transferir. Se um fluxo fizer parte de um grupo, selecione todos os fluxos desse grupo.
2. No final da página, clique em `Exportar`.

A plataforma baixa um arquivo `.json` que contém os fluxos selecionados. Guarde esse arquivo para realizar a importação.

## Importar fluxos

1. Abra as configurações gerais da organização de destino.
2. No menu de opções, clique em `Importar`.
3. Selecione o arquivo `.json` gerado durante a exportação.
4. Clique em `Importar`.

Os fluxos importados são adicionados à organização de destino.
