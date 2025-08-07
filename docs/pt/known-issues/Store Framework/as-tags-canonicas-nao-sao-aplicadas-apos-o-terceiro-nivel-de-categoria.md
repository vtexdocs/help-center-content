---
title: "As tags canônicas não são aplicadas após o terceiro nível de categoria"
id: 6HU8WLT5yVRBqeBmGgYRsi
status: PUBLISHED
createdAt: 2023-11-08T13:31:23.182Z
updatedAt: 2024-10-10T14:50:38.058Z
publishedAt: 2024-10-10T14:50:38.058Z
firstPublishedAt: 2023-11-08T13:31:24.275Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: as-tags-canonicas-nao-sao-aplicadas-apos-o-terceiro-nivel-de-categoria
locale: pt
kiStatus: Backlog
internalReference: 932349
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As tags canônicas não são aplicadas após o terceiro nível de categoria quando há uma árvore de categorias com mais de três níveis (departamento, categoria e subcategoria), os outros níveis acima não são exibidos na canônica. A única exceção é quando as rotas são armazenadas no rewriter.

## Simulação



1. Criar qualquer subcategoria de 4º nível
2. Acesse a página criada
3. Verifique a Canonical para ela no console. Ela não mostrará nada após o terceiro nível. Somente o terceiro e os seguintes

## Workaround


Execute a consulta de bootstrap no rewriter vtex.routes-bootstrap@0.x:


    {bootstrap{categories}}

