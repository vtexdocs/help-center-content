---
title: 'A criação e a exclusão de um grande número de redirecionamentos quebram a página de redirecionamentos'
id: 5uFuid4a5f7uiRVW9LdT5Q
status: PUBLISHED
createdAt: 2024-04-02T19:45:07.540Z
updatedAt: 2024-04-02T19:45:08.762Z
publishedAt: 2024-04-02T19:45:08.762Z
firstPublishedAt: 2024-04-02T19:45:08.762Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: creating-and-deleting-a-large-number-of-redirects-breaks-the-redirects-page
locale: pt
kiStatus: Backlog
internalReference: 1010392
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Lidar com uma grande quantidade de redirecionamentos pode quebrar a página da interface do usuário. Se você tiver muitos redirecionamentos ou precisar excluir essa grande quantidade, isso poderá levar a um erro em que a página da interface do usuário estará sempre carregando e nunca retornará as informações dos redirecionamentos. Achamos que isso pode acontecer porque, quando excluímos uma grande quantidade de redirecionamentos, as primeiras páginas da consulta `listRedirects` ficam em branco e a interface do usuário procura essas primeiras páginas para carregar os primeiros redirecionamentos e nunca as encontra.

Isso também pode afetar a importação/exportação da CLI.

## Simulação



- Crie uma grande quantidade de redirecionamentos
- Tente excluí-los (por meio da interface do usuário ou usando o reescritor)
- Ao retornar à página da interface do usuário, os redirecionamentos não serão carregado

## Workaround


N/A





