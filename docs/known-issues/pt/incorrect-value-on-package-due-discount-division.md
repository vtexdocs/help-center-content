---
title: 'Valor Incorreto no Pacote devido Divisão de Descontos'
id: f27JxOqSf3sAKeHkQlHUa
status: PUBLISHED
createdAt: 2022-06-27T14:28:29.925Z
updatedAt: 2022-11-25T22:02:11.129Z
publishedAt: 2022-11-25T22:02:11.129Z
firstPublishedAt: 2022-06-27T14:28:30.303Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: valor-incorreto-no-pacote-devido-divisao-de-descontos
locale: pt
kiStatus: Backlog
internalReference: 605517
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O pacote tem um valor diferente do valor total do pedido sem valor de envio. Isso acontece por causa dos descontos que não têm divisão adequada com quantidade de itens do pedido.



## Simulação


Como exemplo, se o pedido tiver 4 itens e o preço de cada iten for 17 centavos, total 68 centavos. E se o desconto for de 3 centavos, então o valor deve ser de 65 centavos mas não é possível dar um centavo a cada iten como desconto porque o cálculo da divisão não é correto. Portanto, a IU mostrará 64 centavos como total do valor do pacote uma vez que o valor correto seja 65 centavos.

Em UI você verá como 16 centavos (preço de venda calculado) e UnitMultiplier como 4, igual a 64 centavos como valor.

Mas a forma correta é 1 iten como 17 centavos e 3 itens como 16 centavos, igual a 65 centavos como valor.





## Workaround


Ainda não há solução.

