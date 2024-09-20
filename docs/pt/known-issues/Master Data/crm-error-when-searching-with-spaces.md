---
title: 'Dificuldade em buscar no CRM por campos contendo espaços'
id: 6Rp3IesViMyuwy8ocACYGk
status: PUBLISHED
createdAt: 2018-12-26T15:12:07.010Z
updatedAt: 2022-12-22T20:45:45.425Z
publishedAt: 2022-12-22T20:45:45.425Z
firstPublishedAt: 2018-12-26T17:33:45.886Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: dificuldade-em-buscar-no-crm-por-campos-contendo-espacos
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Usuário recebe uma mensagem de erro ao buscar por um documento com um atributo contendo espaço [Screen Shot 2018-12-26 at 14.38.55](//images.ctfassets.net/alneenqid6w5/6kN77jtFDOKME8UiW0acW8/e3bc9a3bcb750f30067f11befdd78fcb/Screen_Shot_2018-12-26_at_14.38.55.png)


Exemplo:  Buscando/filtrando pelo Campo "Cidade" com o atributo "Rio de Janeiro" produzirá uma mensagem de erro.

## Simulação

1.  Acesse https://{{account}}.vtexcrm.com.br
2.  Escolha a aba desejada
3.  Selecione um campo do dropdown
4.  Escreva o nome de um atributo contendo espaçoes

## Workaround

![Screen Shot 2018-12-26 at 14.40.03](//images.ctfassets.net/alneenqid6w5/1LUggCuWywGosGoCOgKE2g/426a9dbd86c26f15a9db06cadb88ec46/Screen_Shot_2018-12-26_at_14.40.03.png)Felizmente ha um workaround simples que não necessita o uso da API.
Ao clicar em "Todos" no dropdown, a mesma busca pode ser feita sem causar erro.

