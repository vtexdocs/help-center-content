---
title: 'Busca de "Textos da loja" não funciona'
id: 6C6JUkssKcOoQqsaikucwy
status: PUBLISHED
createdAt: 2017-08-24T15:16:31.392Z
updatedAt: 2022-12-22T20:45:58.757Z
publishedAt: 2022-12-22T20:45:58.757Z
firstPublishedAt: 2017-08-24T15:29:57.884Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: busca-de-textos-da-loja-nao-funciona
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Busca de "Textos da loja" retorna muitos valores que não tem a ver com o termo buscado. 


## Simulação

1. No módulo "CMS", aba "Configurações", item "Textos da Loja".
2. Digite uma palavra que esteja sendo gerada pela a plataforma no campo de "busca".  Ex: "Comprar" -> do texto do botão de comprar.
3. Clique no "Buscar"
4. É retornado múltiplos valores que não tem nada a ver com a palavra buscada.


## Workaround

1. Dentro do módulo "CMS", clique em "Configurações" e então na aba "Gerais" onde existe o campo "Texto XML".
2. Selecione todo o texto (ctrl+A) dentro deste campo e cole em um editor de texto.
3. Busque a palavra pela busca do editor.
4. Busque a variável do texto buscado no Combobox do "Configurações"->"Textos".

