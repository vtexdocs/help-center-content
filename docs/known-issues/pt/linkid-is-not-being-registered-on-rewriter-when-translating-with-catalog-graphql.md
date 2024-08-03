---
title: 'O linkId não está sendo registrado no rewriter ao traduzir com o catálogo graphql'
id: 7b7KOHlxyIO4zKy2xrMuSD
status: PUBLISHED
createdAt: 2022-09-08T21:27:03.855Z
updatedAt: 2024-07-10T12:47:32.306Z
publishedAt: 2024-07-10T12:47:32.306Z
firstPublishedAt: 2022-09-08T21:27:04.567Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-linkid-nao-esta-sendo-registrado-no-rewriter-ao-traduzir-com-o-catalogo-graphql
locale: pt
kiStatus: Backlog
internalReference: 654951
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o catálogo graphQL e traduzir o URL usando o linkId, o reescritor deve armazenar o linkId, mas isso não está acontecendo: https://developers.vtex.com/docs/guides/catalog-internationalization

## Simulação



- Siga o guia de documentação para traduzir o conteúdo do catálogo: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#mutation
- **Para links de categoria:**
  - Verifique o linkId que você criou em admin/graphql-ide e escolha o aplicativo de reescrita:

    { internal{ get(path: "yourLinkdIdHere"){ id } }}



- Isso retornará nulo;
- Verifique novamente com o nome de sua categoria traduzida, mas com a slugificação:

    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id } }}



- Isso retornará resultados.



- Para links de produtos:**
  - Acesse a página do produto usando o link traduzido criado usando o graphQL do catálogo;
  - Será exibido um erro 404 Not Found.



## Workaround



- **Para links de categoria:**
  - Execute a seguinte consulta no rewriter:

    { internal{ get(path: "yourTranslatedLinkdId"){ id from declarer type query binding origin resolveAs } }}



- Salve os valores retornados, pois você precisará usá-los na próxima etapa;
- Execute a seguinte mutação, alterando apenas o parâmetro from; os outros devem ser iguais aos anteriores:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "yourLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "yourSavedResolveAs" }}

> Para obter mais informações sobre esses parâmetros, consulte: https://developers.vtex.com/vtex-developer-docs/docs/rewriter



- Agora, vamos excluir a rota antiga (a que foi salva com o nome)

    mutation saveInternal($route: InternalInput!) { internal { delete(path: "yourTranslatedLinkdId") { id } }}



- **Para links de produtos:**
  - Execute a seguinte mutação alterando apenas o parâmetro from; os outros devem ser iguais aos anteriores:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "/yourTranslatedLinkdId/p", "declarer": "vtex.store@2.x", "type": "product", "id": "productId", "resolveAs": "/yourOrinalLinkdId/p", "binding": "bindingId" }}




