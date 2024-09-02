---
title: 'A importação da especificação do produto com o tipo "texto" não aciona a indexação do produto'
id: 5eQB7LCCyDbVNQBQvWti33
status: PUBLISHED
createdAt: 2024-03-12T19:36:58.647Z
updatedAt: 2024-03-12T19:36:59.477Z
publishedAt: 2024-03-12T19:36:59.477Z
firstPublishedAt: 2024-03-12T19:36:59.477Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-importacao-da-especificacao-do-produto-com-o-tipo-texto-nao-aciona-a-indexacao-do-produto
locale: pt
kiStatus: Backlog
internalReference: 998658
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao importar especificações de produtos, os tipos com valores pré-registrados (como Checkbox ou Radio) acionam a indexação do produto, mas quando o tipo é "Texto" o mesmo não ocorre.

## Simulação



- Registre um campo com o tipo texto dentro da categoria
- Importar um arquivo preenchido com um novo valor
- Observe que o valor será atualizado no Admin, mas o produto não será reindexad

## Workaround


Configure esse tipo de campo por meio do Admin ou da API





