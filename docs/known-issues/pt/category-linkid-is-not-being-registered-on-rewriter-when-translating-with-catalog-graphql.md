---
title: 'A categoria linkId não está sendo registrada em reescrita ao traduzir com o gráfico do catálogo'
id: 7b7KOHlxyIO4zKy2xrMuSD
status: PUBLISHED
createdAt: 2022-09-08T21:27:03.855Z
updatedAt: 2022-11-25T22:13:34.491Z
publishedAt: 2022-11-25T22:13:34.491Z
firstPublishedAt: 2022-09-08T21:27:04.567Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: a-categoria-linkid-nao-esta-sendo-registrada-em-reescrita-ao-traduzir-com-o-grafico-do-catalogo
kiStatus: Backlog
internalReference: 654951
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o gráfico do catálogo e traduzir a URL usando o linkId o reescritor deve armazenar o linkId, mas, isso não está acontecendo: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category

O reescritor está armazenando o nome em vez do linkId



## Simulação



Siga o guia de documentação para traduzir o conteúdo do catálogo: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#mutation

Verifique o reescritor com o linkId que você criou em admin/graphql-ide e escolha o aplicativo reescritor:


    { internal{ get(path: "yourLinkdIdHere"){ id } }}


Isto retornará nulo

Verifique novamente, mas, com o nome de sua categoria traduzida, mas, slugified


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id } }}


Isto retornará resultados



## Workaround



Execute a seguinte consulta sobre reescritor


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id from declarer type query binding origin resolveAs } }}


Salve os valores devolvidos, você precisará usá-los na próxima etapa

Execute a seguinte mutação apenas mudando o parâmetro de parâmetro, os outros devem ser os mesmos que os anteriores:


    mutação salvaInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{"rota": {"de": "seuLinkId", "declarante": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origem": "yourSavedOrigin", "resolveAs": "yourSavedResolveAs" }}}



> Para mais informações sobre esses paramédicos, você pode consultar: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Agora, vamos apagar a rota antiga (aquela que foi salva com o nome)


    mutation saveInternal($route: InternalInput!) { internal { delete(path: "yourTranslatedCategoryNameSlugified") { id } }}

