---
title: 'Nova página de cobranças não carregadas'
id: 4sANd9Oah8a90vkgGmCddj
status: PUBLISHED
createdAt: 2022-11-01T09:33:20.028Z
updatedAt: 2022-11-25T21:42:19.038Z
publishedAt: 2022-11-25T21:42:19.038Z
firstPublishedAt: 2022-11-01T09:33:20.722Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: nova-pagina-de-cobrancas-nao-carregadas
locale: pt
kiStatus: Backlog
internalReference: 419729
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A conta não poderia ser capaz de carregar a página de aplicativo de coleta, o pedido `api/catalog_system/pvt/collection/search/?an=&page=1&pageSize=10&orderByAsc=false` poderia retornar 500, devido ao timeout:


    "Expirou o prazo de execução. O tempo de expiração transcorreu antes da conclusão da operação ou o servidor não está respondendo".




## Simulação


- Ir para `/admin/collections'.



## Workaround


- Gerenciar coleções usando CMS legado ou usando API.

