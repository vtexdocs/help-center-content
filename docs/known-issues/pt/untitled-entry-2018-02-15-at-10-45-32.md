---
title: 'Ao modificar categoria de parent, informações de hierarquia não são atualizadas'
id: 2quVeZkZHqi4mOQecgugaA
status: DRAFT
createdAt: 2018-02-15T22:45:32.060Z
updatedAt: 2019-12-31T15:17:27.382Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 
tag: 
slug: ao-modificar-categoria-de-parent-informacoes-de-hierarquia-nao-sao
kiStatus: 
internalReference: 
---

## Sumário

No admin, ao alterar o campo "Categoria Pai" de uma categoria, modificando essa categoria para outro parent (Outro departamento ou raiz) o sistema não está atualizando as informações referentes à hierarquia, gerando vários problemas no portal, como, por exemplo, a renderização de filtros e menus e exibição de especificações.

## Simulação

1. DAcesse a seção de administração de categoria Catálogo > Registro de produtos > Categoria.
2. Selecione uma subcategoria e digite o formulário de edição Selecione a categoria > Ações > Editar.
3. Modifique o campo 'Categoria Pai' e selecione outro departamento ou categoria raiz.
4. Clic en Salvar

A categoria agora está relacionada a outra categoria pai e, portanto, pertence a uma hierarquia diferente na árvore.

## Workaround



