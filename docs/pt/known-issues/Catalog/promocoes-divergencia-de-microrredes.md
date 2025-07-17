---
title: "Promoções divergência de microrredes"
id: 603ZTMtdgi9olc6UiWLfmX
status: PUBLISHED
createdAt: 2023-12-22T18:48:32.438Z
updatedAt: 2023-12-22T18:48:33.176Z
publishedAt: 2023-12-22T18:48:33.176Z
firstPublishedAt: 2023-12-22T18:48:33.176Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promocoes-divergencia-de-microrredes
locale: pt
kiStatus: Backlog
internalReference: 957369
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O módulo de promoções arredonda os descontos em até 3 dígitos significativos, o que pode, em cenários muito específicos, resultar em pequenas divergências no preço final de um carrinho.

Por exemplo, digamos que temos o seguinte cenário de exemplo:

Item 1 - $10
Item 2 - US$ 20
Item 3 - $32
____________
Total - US$ 62

E 2 promoções são aplicadas em todos eles:

Promoção A - $15 OFF
Promoção B - 10% de desconto.


Normalmente, o desconto a ser calculado é sequencial, com o valor nominal de desconto vindo primeiro:

$62 - $15 = $47
Em seguida
$47 * 0.9 = $42.3


No entanto, os descontos são distribuídos, mesmo para o desconto nominal, proporcionalmente no carrinho, portanto, o que realmente acontece é:

`item 1`:
Valor original = $10
Desconto nominal (15 * 10/62 do carrinho) = -$2,41935484
Desconto percentual esperado (12,5806452 * 0,9) = -$1,25806452
Desconto real percentual = -$1,258

`item 2`:
Valor original = US$ 20
Desconto nominal (15 * 20/62 do carrinho) = -$4,83870968
Desconto percentual esperado (15,1612903 * 0,9) = -$1,51612903
Desconto real percentual = -$1,516

`item 3`:
Valor original = US$ 32
Desconto nominal (15 * 32/62 do carrinho) = -$7,74193548
Desconto percentual esperado (24,2580645 * 0,9) = -$2,42580645
Desconto real percentual = -$2,426


🔎 diferença total: 0.00006452 + 0.000012903 + 0.000019355 = 0.0000270973

Podemos ver, acima, que foi criada uma "micro" diferença.

Se vários itens fossem adicionados, com preços distintos, a esse carrinho de exemplo, essa diferença poderia chegar a 1 centavo (0,01) ou mais.


## Simulação


Há várias maneiras de recriar o caso. Felizmente, todas elas são extremamente específicas.

Por isso, é difícil replicar o problema, mas, na maioria das vezes, é necessário criar um carrinho com vários (~10+) itens diferentes e todos eles com mais de duas promoções, sendo que o ideal é que uma delas seja um desconto nominal e a outra, um desconto percentual.

## Workaround


n/a






