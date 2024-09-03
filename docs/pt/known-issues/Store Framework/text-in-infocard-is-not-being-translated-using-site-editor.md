---
title: 'O texto no InfoCard não está sendo traduzido usando o editor do site'
id: 5HYTZvxkPoTZltMkZcVfVO
status: PUBLISHED
createdAt: 2024-06-13T18:47:41.470Z
updatedAt: 2024-07-03T13:58:33.037Z
publishedAt: 2024-07-03T13:58:33.037Z
firstPublishedAt: 2024-06-13T18:47:42.396Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-texto-no-infocard-nao-esta-sendo-traduzido-usando-o-editor-do-site
locale: pt
kiStatus: Backlog
internalReference: 1049491
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao tentar traduzir um texto usando o editor do site para o componente do cartão de informações, as alterações não são aplicadas na frente da loja.

## Simulação



1. Abra o editor do site
2. Selecione o componente do cartão de informações
3. Altere o rótulo do texto
4. Salvar as alterações
5. Visualize a página e o texto será o mesmo, independentemente da localidade selecionada



## Workaround


Certifique-se de que o título esteja vazio no código da loja e no editor do site.
Se não tiver certeza de que está vazio no editor do site, você pode redefinir o conteúdo acessando a versão do editor do site > redefinir.

Siga a documentação aqui e os contextos aqui para definir o rótulo conforme desejado.

Se isso ainda não resolver o problema, você pode usar um componente de rich text e um componente de imagem separadamente dentro do cartão de informações.




