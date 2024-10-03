---
title: 'Ativar serviço na importação (SkuVincularValorServico.aspx) não está funcionando'
id: 1gM3bYz0IX4ozLrIkWIicb
status: PUBLISHED
createdAt: 2022-02-25T14:56:50.052Z
updatedAt: 2024-05-10T14:24:13.156Z
publishedAt: 2024-05-10T14:24:13.156Z
firstPublishedAt: 2022-02-25T14:56:50.569Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activate-service-on-import-skuvincularvalorservicoaspx-not-working
locale: pt
kiStatus: Backlog
internalReference: 339894
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, na usabilidade de importação do SkuVincularValorServico.aspx, ao tentar alterar os serviços que saíram anteriormente de inativos para ativos, os valores não são alterados. A interface do usuário avisa que os valores foram alterados, mas nada acontece de fato.

(O oposto não é verdadeiro, a alteração de ativo para inativo funciona).

## Simulação


1) Acesse a interface do usuário https://account.myvtex.com/admin/Site/SkuVincularValorServico.aspx e altere as linhas da planilha anexa de 0 para 1 e vice-versa:

 ![](https://vtexhelp.zendesk.com/attachments/token/ladK39V5My6gjGixeHuNTaV2b/?name=inline-1801216200.png)

2) Verifique os efeitos finais na SKU cujos valores você alterou:
 ![](https://vtexhelp.zendesk.com/attachments/token/znYEzQhMevPcRVYKlBQYa73fF/?name=inline1216426643.png)

Você poderá defini-los como inativos, mas não como ativos. A interface de importação avisa que as alterações foram feitas:
 ![](https://vtexhelp.zendesk.com/attachments/token/6iKARGtVqTbKaL0vY9s7XPvt6/?name=inline2110004305.png)

Nenhum valor é realmente alterado no banco de dados da conta fornecida

## Workaround


Usar a interface do usuário para fazer alterações de inativo -->> ativo e/ou nossas APIs de serviço:
https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-service




