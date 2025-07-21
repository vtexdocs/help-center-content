---
title: "Catálogo Myvtex Iframe HTML Select Breaking para Cromo 108"
id: 7kax7PbhijSluYJETvOe92
status: PUBLISHED
createdAt: 2022-12-06T18:58:36.011Z
updatedAt: 2022-12-06T18:58:36.578Z
publishedAt: 2022-12-06T18:58:36.578Z
firstPublishedAt: 2022-12-06T18:58:36.578Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogo-myvtex-iframe-html-select-breaking-para-cromo-108
locale: pt
kiStatus: Backlog
internalReference: 711637
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Este é um efeito colateral de uma atualização cromada que foi agendada para uma correção, pela equipe do google na próxima semana, 12/12/2022: https://bugs.chromium.org/p/chromium/issues/detail?id=1395079&q=dropdown&can=2

O efeito sentido sobre o administrador da VTEX é que os usuários do cromado v108 estão tendo dificuldade em selecionar a partir dos menus suspensos, por exemplo, na aba de configuração do SKU, ao tentar selecionar um valor no menu suspenso, nenhuma ação é gerada (toda a lista de valores possíveis deve ser mostrada):

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/catalogo-myvtex-iframe-html-select-breaking-para-cromo-108_1.png)




##

## Simulação


Usando a última versão do cromo, v 108.0.5359.95, tente entrar em um menu suspenso usando a versão admin do myvtex.


##

## Workaround


Há uma infinidade de soluções, como por exemplo:

1) Usando outros navegadores
2) Acessando a mesma IU via vtexcommercestable.com.br
3) Cahnging the value via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-specification

