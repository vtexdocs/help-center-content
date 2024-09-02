---
title: 'Os redirecionamentos estão sendo contados várias vezes'
id: 51JfHBdp72duH5cBWMYl0t
status: PUBLISHED
createdAt: 2024-07-16T19:48:36.586Z
updatedAt: 2024-08-05T16:47:07.922Z
publishedAt: 2024-08-05T16:47:07.922Z
firstPublishedAt: 2024-07-16T19:48:37.314Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: os-redirecionamentos-estao-sendo-contados-varias-vezes
locale: pt
kiStatus: Fixed
internalReference: 1066548
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar carregar um arquivo com mais de 200 redirecionamentos, o front entra em um loop e lê esses redirecionamentos três vezes. Isso pode levar a mais redirecionamentos na mensagem de erro na tela ou no modal de carregamento. Os redirecionamentos não estão sendo duplicados, mas estão sendo lidos mais de uma vez.

## Simulação


Tente fazer upload de um arquivo com 930 redirecionamentos, por exemplo. O modal de carregamento aparecerá com um número maior que 930:
 ![](https://vtexhelp.zendesk.com/attachments/token/vypbPdcFp4KtjVvI5rL4tHQXU/?name=image.png)

Se o arquivo contiver um erro, você poderá encontrar uma mensagem de erro semelhante a esta:
 ![](https://vtexhelp.zendesk.com/collaboration/graphql/attachments/download/s3-145778c5-53eb-4002-9b91-1b43f7394896/image.png)
Esse é apenas um erro frontal e não está afetando o carregamento dos redirecionamentos em si

## Workaround


N/A





