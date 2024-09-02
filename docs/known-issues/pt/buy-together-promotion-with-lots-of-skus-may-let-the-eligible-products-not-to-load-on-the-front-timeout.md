---
title: 'A promoção Buy Together com muitos SKUs pode fazer com que os produtos qualificados não sejam carregados na frente (tempo limite)'
id: e1OJuUhZhYidnoRaDoDRc
status: PUBLISHED
createdAt: 2022-01-21T17:36:41.181Z
updatedAt: 2024-02-16T20:29:59.287Z
publishedAt: 2024-02-16T20:29:59.287Z
firstPublishedAt: 2024-01-23T15:09:22.474Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: a-promocao-buy-together-com-muitos-skus-pode-fazer-com-que-os-produtos-qualificados-nao-sejam-carregados-na-frente-tempo-limite
locale: pt
kiStatus: No Fix
internalReference: 301463
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A promoção Buy Together com muitos SKUs pode fazer com que os produtos qualificados não sejam carregados na frente devido ao tempo limite. As páginas de produto usam o controle de produto `<vtex.cmc:BuyTogether/>`. Esse controle é responsável por trazer informações de todos os SKUs qualificados definidos na promoção para a página do produto.

O problema é que, se o cliente definir muitos SKUs nessa promoção, o Portal terá que trazer essas informações (preço, estoque etc.) de todos os produtos desses SKUs para a página do produto. E o Portal faz isso simulando seus produtos com o checkout. Se tivermos uma promoção que foi definida, por exemplo, com 50 SKUs, e esses SKUs são de produtos que têm pelo menos 5 SKUs por produto) e estão disponíveis, por exemplo, em 3 Canais de Vendas, o Portal terá que simular com o checkout cada SKU para cada SC de cada produto elegível nessa promoção apenas para mostrar essa página de produto específica. Nesse exemplo, o Portal terá que fazer 750 simulações com o checkout (50 SKUs definidos na promoção, assumindo que esses SKus são de produtos que têm 5 SKUs, são 250 SKUs, e todos devem ser simulados para cada SC, o que nos dá 750 simulações).

ps: não temos um número correto para definir na lista de SKUs, pois isso dependerá de cada cliente. Se o cliente tiver produtos com poucos SKUs e apenas um SC disponível, ele poderá usar mais SKUs nesse tipo de promoção.

## Simulação


- Criar uma promoção Buy Together
- Coloque na lista de SKUs 1 ou na lista de SKUs 2 muitos SKUs, como mais de 50.
- Tente carregar a página do produto que usa o controle `<vtex.cmc:BuyTogether/>`, a página não deve ser carregada devido a um tempo limite

## Workaround


Há duas maneiras de "resolver" esse problema:
- Remover o controle do modelo <vtex.cmc:BuyTogether/>, isso fará com que a página do produto não carregue as informações sobre esse produto disponíveis nessa promoção;
- Usar menos SKUs na lista da promoção Buy Together. Mais uma vez, infelizmente, não temos um número específico que funcione. Aconselho o cliente a tentar com algo como 10 e começar a aumentar e testar.


