---
title: "Sistema de comentários do CRM não funciona"
id: 6ND4BvFMWsCaMu6OuqaYqG
status: PUBLISHED
createdAt: 2019-01-07T17:54:17.690Z
updatedAt: 2022-12-22T20:48:59.020Z
publishedAt: 2022-12-22T20:48:59.020Z
firstPublishedAt: 2019-01-07T19:04:57.208Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: sistema-de-comentarios-do-crm-nao-funciona
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Sistema de comentários do CRM não armazena a informação digitada.
O uso do sistema de comentário usado diretamente, ou através de triggers é comprometido.

## Simulação

1. Acesse https://{{account}}.vtexcrm.com.br
2. Escolha um documento
3. Escreva no campo comentario e clique em `Salvar`.  O sistema responderá com "Seu comentário foi salvo com sucesso".
4. O comentário desaparece.

## Workaround

Um workaround seria criar um campo do tipo `Text` e deixar ele visivel no formulario.
Você pode depois criar, ou editar o valor do campo.

