---
title: 'As promoções por ordem de pagamento não aparecem na página do produto'
id: HZ5IoCFFOhuxU0jQWkMPp
status: PUBLISHED
createdAt: 2019-08-13T20:45:50.232Z
updatedAt: 2023-03-31T15:44:56.958Z
publishedAt: 2023-03-31T15:44:56.958Z
firstPublishedAt: 2019-08-13T21:10:58.244Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: as-promocoes-por-ordem-de-pagamento-nao-aparecem-na-pagina-do-produto
locale: pt
kiStatus: Backlog
internalReference: 781523
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A página do produto mostra o preço do SKU apenas com algumas promoções, que não inclui as condições específicas para as formas de pagamento nem o número de parcelas. Estas só são aplicadas durante o checkout, após o usuário ter optado explicitamente pelo uso de uma determinada condição de pagamento.



##

## Simulação




1. Criar uma promoção que concede um desconto de 5% para pagamento por "boleto" (popular método de pagamento offline brasileiro)
2. Acesse a página de produtos
3. Observe que o valor exibido não leva em conta o desconto definido. O desconto aparecerá após a escolha do "boleto" como forma de pagamento no checkout.



##

## Workaround



Este cenário pode ser facilmente resolvido implementando um Javascript front-end que calcula o preço e inclui o percentual de desconto devido, depois exibindo um elemento com este preço adicional na página do produto.








