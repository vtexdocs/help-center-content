---
title: "O Faststore V1/V2 não retorna informações de SEO na consulta Graphql"
id: 4nZnX8sj9J90xtkNpYIgZ4
status: PUBLISHED
createdAt: 2023-11-01T17:08:35.090Z
updatedAt: 2025-05-12T14:03:41.681Z
publishedAt: 2025-05-12T14:03:41.681Z
firstPublishedAt: 2023-11-01T17:08:35.767Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: o-faststore-v1v2-nao-retorna-informacoes-de-seo-na-consulta-graphql
locale: pt
kiStatus: No Fix
internalReference: 929029
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Temos uma consulta de produto ao acessar o playground do Graphql para executar consultas no Faststore V1 e V2. A documentação afirma que o campo SEO dessa consulta deve retornar as informações de SEO, mas isso não está acontecendo.

## Simulação



- acesse sua loja usando o playground do Graphql
- execute a consulta do produto com os campos SEO
-

compare com as informações de SEO do produto no catálogo, você verá que o valor retornado será o título e a descrição do próprio produto, não do campo SEO

Você também pode ver isso acontecendo no domínio final ao verificar as informações de SEO na guia de elementos.

## Workaround


Você pode recuperar os outros campos do StoreSEO estendendo o esquema GraphQL, conforme explica o documento:
https://v1.faststore.dev/reference/api/objects/#storeseo
 ![](https://vtexhelp.zendesk.com/attachments/token/qtLb0Xc4mlmkq0AXngefRrPiF/?name=image.png)

Mas as informações `title` e `description` ainda apresentarão o problema.





