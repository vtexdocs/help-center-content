---
title: 'Erro ao buscar textos - Módulo CMS'
id: 7g9e4G7i12CSs4OK0YgCi4
status: PUBLISHED
createdAt: 2017-08-17T20:44:25.357Z
updatedAt: 2022-12-22T20:55:13.797Z
publishedAt: 2022-12-22T20:55:13.797Z
firstPublishedAt: 2017-08-17T20:59:07.751Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5V92cmF9jG8KG600EwUgEg
tag: Portal (CMS)
slug: erro-ao-buscar-textos-modulo-cms
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Detectamos um comportamento não esperado ao tentar realizar a mudança/tradução de um texto na área de Configurações - Textos da loja. Este comportamento gera um erro ao buscar a palavra para tradução ou mudança, em alguns casos ele não gera o erro e não retorna o resultado.

## Simulação

1. Entrar no CMS -> Configurações -> Textos da loja.
2. Buscar a palavra “faixa”.
3. Ao buscar, o sistema não filtra somente as páginas que contêm esta palavra ou gera um erro.


## Workaround

Colocar a palavra no campo de busca, depois escolher a variável que você quer mudar. Exemplo: “FaixaPreco”. Assim o sistema irá trazer a palavra no campo de resultado.

