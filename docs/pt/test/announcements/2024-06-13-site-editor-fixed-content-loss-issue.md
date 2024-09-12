---
title: 'Site Editor: problema de perda de conteúdo corrigido'
id: 1mnrlSMyMmU1iAUyEquVYB
status: PUBLISHED
createdAt: 2024-06-13T12:25:13.359Z
updatedAt: 2024-06-13T13:29:05.308Z
publishedAt: 2024-06-13T13:29:05.308Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: site-editor-problema-de-perda-de-conteudo-corrigido
locale: pt
legacySlug: site-editor-problema-de-perda-de-conteudo-corrigido
announcementImageID: ''
announcementSynopsisPT: 'O armazenamento de conteúdo do Site Editor foi atualizado para melhorar seu desempenho e confiabilidade.'
---

No dia 12 de junho, o armazenamento de conteúdo do [Site Editor](https://help.vtex.com/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) foi atualizado todas as contas para todas as contas que o utilizam a fim de solucionar um problema conhecido: a perda [intermitente de conteúdo do Site Editor](https://help.vtex.com/en/known-issues/intermitent-site-editor-content-loss--3a5MlAoD2Z7Gu6HDS8wihD). Essa atualização melhora o desempenho e a confiabilidade do armazenamento, além de reduzir o espaço ocupado pelo seu conteúdo.

## O que mudou?
Antes, as constantes alterações de conteúdo no Site Editor podiam fazer com que o arquivo `content.json` se tornasse excessivamente grande, levando à perda de conteúdo ao [criar um workspace de produção para a master](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspaces-best-practices#deployment-and-workspace-promotion) ou ao instalar uma nova versão de tema em um workspace de teste.

Também aprimoramos a arquitetura de armazenamento e a solução de segmentação de arquivos do Site Editor. Agora o conteúdo é armazenado em arquivos menores e específicos do modelo, em vez de em um único arquivo grande. Essa alteração reduz o tamanho do arquivo em aproximadamente 90%, reduzindo o espaço de armazenamento necessário por página e melhorando o desempenho geral e a entrega de conteúdo.

## O que precisa ser feito?
Nenhuma ação é necessária. A atualização foi implementada automaticamente em todas as lojas VTEX que usam o Site Editor.

Se a perda de conteúdo persistir após 12 de junho, abra um ticket para o [Suporte da VTEX](https://help.vtex.com/support).

