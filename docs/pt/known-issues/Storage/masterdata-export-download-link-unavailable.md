---
title: 'Link de download do Masterdata Export indisponível'
id: 2oi0ABhQQxfPsKETeNUyvE
status: PUBLISHED
createdAt: 2022-07-08T13:50:43.220Z
updatedAt: 2023-07-28T17:14:13.207Z
publishedAt: 2023-07-28T17:14:13.207Z
firstPublishedAt: 2022-07-08T13:50:43.638Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: link-de-download-do-masterdata-export-indisponivel
locale: pt
kiStatus: Backlog
internalReference: 613864
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, para entidades de dados com vários campos, quando há uma tentativa de exportar uma planilha e baixá-la, por e-mail ou diretamente pela interface do usuário, o link de download não salva o arquivo em seu navegador.


## Simulação


1 - para uma entidade de dados com vários campos, tente exportar todos os seus campos ao mesmo tempo ou vários registros

2 - o link de download não gerará um arquivo em seu navegador

 ![](https://vtexhelp.zendesk.com/attachments/token/nQdUqbk7BiOK5RcigZhNZR9Rr/?name=image.png

## Workaround


**Clique com o botão direito do mouse no link Download e copie o link; em seguida, cole o link em outra guia e o download será iniciado ou** busque dados via API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search e/ou baixe os dados em várias planilhas menores

