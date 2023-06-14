---
title: 'Informações de categoria de produto da dataLayer com uma classificação errada'
id: 5M84UlbbxXG6msTBUYiksT
status: PUBLISHED
createdAt: 2022-12-13T18:02:07.567Z
updatedAt: 2023-02-27T21:49:22.058Z
publishedAt: 2023-02-27T21:49:22.058Z
firstPublishedAt: 2022-12-13T18:02:08.275Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: informacoes-de-categoria-de-produto-da-datalayer-com-uma-classificacao-errada
locale: pt
kiStatus: Fixed
internalReference: 328415
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As informações sobre a categoria do produto na dataLayer nas páginas de checkout são mostradas na ordenação errada. Isto é representado pela propriedade "categoryTree".

Eles seguirão suas identificações, classificadas de baixo para alto, o que pode não representar a hierarquia esperada para esta informação.


##

## Simulação


Adicione um produto ao carrinho e compare as propriedades "productCategoryIds" e "productCategories" do pedidoFormulário com a propriedade "categoryTree" do DataLayer.


##

## Workaround


As mesmas informações podem ser recuperadas do OrderForm API em vez do DataLayer.




