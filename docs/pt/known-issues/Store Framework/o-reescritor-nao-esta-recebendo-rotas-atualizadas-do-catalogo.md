---
title: "O reescritor não está recebendo rotas atualizadas do catálogo"
id: 48eSYkPCRaaYJZESFdob8M
status: PUBLISHED
createdAt: 2025-01-31T13:38:40.156Z
updatedAt: 2025-01-31T13:38:41.017Z
publishedAt: 2025-01-31T13:38:41.017Z
firstPublishedAt: 2025-01-31T13:38:41.017Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-reescritor-nao-esta-recebendo-rotas-atualizadas-do-catalogo
locale: pt
kiStatus: Backlog
internalReference: 1172080
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Algumas atualizações de catálogo relacionadas a rotas não estão chegando ao reescritor. Isso pode acontecer com categorias, marcas, subcategorias ou departamentos. Quando você cria uma nova rota ou edita uma existente, a consulta bootstrap seria suficiente para atualizar essas rotas no reescritor, mas ela não funcionará em casos específicos. O reescritor não receberá a rota e, se você tentar acessá-la na loja, a rota não terá produtos ou o erro "something exploded" (algo explodiu) poderá aparecer na tela.

## Simulação


Se você tiver uma rota sem produtos ou com um erro, tente executar a consulta de bootstrap primeiro:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Store%20Framework/o-reescritor-nao-esta-recebendo-rotas-atualizadas-do-catalogo_1.png)

    {bootstrap{brandscategories}}


Se isso não funcionar, verifique se o reescritor está recebendo a rota; se a resposta for nula, o reescritor não recebeu a atualização:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Store%20Framework/o-reescritor-nao-esta-recebendo-rotas-atualizadas-do-catalogo_2.png)

    {internal{get(path:"/test"){fromdeclarerid}}}

## Workaround


Você pode tentar adicionar a rota manualmente com a seguinte mutação:

    mutation saveInternal($route: InternalInput!) {internal {save(route: $route) {fromdeclarertypeidqueryendDatebindingresolveAsorigindisableSitemapEntry}}}



    {"route": {"from": "", "query": {"map": "" //pode ser "b" para marcas, por exemplo}, "declarer": "vtex.store@2.x", "binding": "", "type": "", "id": "U050MLNQDL2","origin": "vtex.routes-bootstrap@0.4.3:brand-bootstrap"}}






