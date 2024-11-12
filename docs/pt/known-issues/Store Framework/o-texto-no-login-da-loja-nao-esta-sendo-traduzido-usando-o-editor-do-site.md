---
title: 'O texto no login da loja não está sendo traduzido usando o editor do site'
id: 6DptiKTxtOcYIJEgJlZCmo
status: PUBLISHED
createdAt: 2023-11-08T13:33:41.296Z
updatedAt: 2024-07-03T18:29:45.491Z
publishedAt: 2024-07-03T18:29:45.491Z
firstPublishedAt: 2023-11-08T13:33:41.967Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: text-in-store-login-are-not-being-translated-using-site-editor
locale: pt
kiStatus: Backlog
internalReference: 911757
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao tentar traduzir um texto usando o editor do site para o login da loja, as alterações não serão aplicadas na frente da loja.

## Simulação



1. Abra o editor do site
2. Selecione o bloco Store Login
3. Altere o rótulo de texto no login para o que desejar
4. Salve as alterações
5. Visualize a página e o texto será o mesmo, independentemente da localidade selecionada




## Workaround


Certifique-se de que iconLabel esteja vazio tanto no código da loja quanto no editor do site.
Se não tiver certeza de que está vazio no editor do site, você pode redefinir o conteúdo acessando a versão do editor do site > redefinir.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Siga a documentação aqui e os contextos aqui para definir o rótulo conforme desejado.





