---
title: 'As promoções de reembolso não consideram os itens removidos dos pedidos'
id: lm9v37jvUSCeh9FVFHjsr
status: PUBLISHED
createdAt: 2024-04-19T13:50:10.264Z
updatedAt: 2024-04-19T13:50:11.130Z
publishedAt: 2024-04-19T13:50:11.130Z
firstPublishedAt: 2024-04-19T13:50:11.130Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cashback-promotions-do-not-consider-items-removed-from-orders
locale: pt
kiStatus: Backlog
internalReference: 1019864
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, ao usar promoções de cashback, os cálculos são totalmente realizados no momento em que os itens são inseridos no carrinho.

Portanto, quaisquer alterações nos pedidos feitas depois disso não são consideradas. Consequentemente, os pedidos que removeram itens e só consideram a aplicação do cashback após uma fatura, o principal caso para esse problema, ainda levarão em conta o cashback do item removido, mesmo que ele tenha sido removido.

## Simulação


1 - Crie uma promoção de cashback de 10%, restrita apenas a você (para evitar aplicações incorretas) e com a condição de faturamento para aplicar os créditos.

2 - Feche um pedido de US$ 100 composto por 2 itens: um que custa US$ 80 e o outro US$ 20.

3 - Os créditos aplicados devem ser de US$ 10. Remova o item de US$ 8 do pedido e fature-o.

4 - Você ainda receberá o crédito de $10 como cashback, apesar de o valor esperado agora ser de $2, o que acontece porque os cálculos da promoção são feitos durante a simulação do checkout, antes de o pedido ser fechado.



## Workaround


Não há solução alternativa.





