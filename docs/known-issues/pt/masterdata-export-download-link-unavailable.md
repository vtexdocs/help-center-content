---
title: 'Link para download do Masterdata Export Não disponível'
id: 2oi0ABhQQxfPsKETeNUyvE
status: PUBLISHED
createdAt: 2022-07-08T13:50:43.220Z
updatedAt: 2023-01-19T14:19:49.870Z
publishedAt: 2023-01-19T14:19:49.870Z
firstPublishedAt: 2022-07-08T13:50:43.638Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: link-para-download-do-masterdata-export-nao-disponivel
locale: pt
kiStatus: Backlog
internalReference: 613864
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, para entidades de dados com vários campos, quando há uma tentativa de exportar uma folha e baixá-la, tanto via e-mail ou diretamente via UI, o link de download não salva o arquivo em seu navegador.



##

## Simulação


1 - para uma entidade de dados na qual você tem vários campos, tente exportar todos os seus campos ao mesmo tempo ou vários registros

2 - o link para download não irá gerar um arquivo em seu navegador

 ![](https://vtexhelp.zendesk.com/attachments/token/nQdUqbk7BiOK5RcigZhNZR9Rr/?name=image.png)


##

## Workaround


buscar dados via API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search e/ou baixar dados em várias planilhas menores

