---
title: 'O texto no botão Adicionar ao carrinho não está sendo traduzido usando o editor do site'
id: 7rA62h80a1LpDWjgd3SImp
status: PUBLISHED
createdAt: 2024-05-02T17:33:41.019Z
updatedAt: 2024-07-03T18:28:56.642Z
publishedAt: 2024-07-03T18:28:56.642Z
firstPublishedAt: 2024-05-02T17:33:42.188Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-texto-no-botao-adicionar-ao-carrinho-nao-esta-sendo-traduzido-usando-o-editor-do-site
locale: pt
kiStatus: Backlog
internalReference: 1026103
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao tentar traduzir um texto usando o editor do site para o botão Adicionar ao carrinho, as alterações não são aplicadas na frente da loja.

## Simulação



1. Abra o editor do site
2. Selecione o botão Adicionar ao carrinho
3. Altere o rótulo do texto no botão para o que desejar
4. Salve as alterações
5. Visualize a página e o texto será o mesmo, independentemente da localidade selecionada



## Workaround


Certifique-se de que iconLabel esteja vazio tanto no código da loja quanto no editor do site.
Se não tiver certeza de que está vazio no editor do site, você pode redefinir o conteúdo acessando a versão do editor do site > redefinir.

Em vez disso, siga a documentação aqui e os contextos aqui para definir o rótulo conforme desejado.




