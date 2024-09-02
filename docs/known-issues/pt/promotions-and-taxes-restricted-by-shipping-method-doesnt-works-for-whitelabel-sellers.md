---
title: 'As promoções e os impostos restritos por método de envio não funcionam para os vendedores Whitelabel'
id: 3ue1kZdbX1mMFqPCkl0tC4
status: PUBLISHED
createdAt: 2023-08-09T13:25:02.168Z
updatedAt: 2023-08-09T13:26:13.874Z
publishedAt: 2023-08-09T13:26:13.874Z
firstPublishedAt: 2023-08-09T13:25:02.698Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: as-promocoes-e-os-impostos-restritos-por-metodo-de-envio-nao-funcionam-para-os-vendedores-whitelabel
locale: pt
kiStatus: Backlog
internalReference: 315485
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As promoções e os impostos restritos por métodos de envio não funcionam para os vendedores Whitelabel. Eles não serão aplicados na solicitação de simulação (usada para o carrinho e o checkout) porque a solicitação do marketplace não especifica o `selectedSla` e, portanto, seus valores não serão apresentados ao usuário.

Mas o processo de criação do pedido enviará esse `selectedSla`, onde a promoção/imposto será calculada e os valores serão alterados. Mas a divergência entre a simulação e o processo de criação do pedido pode impedir que a compra seja concluída, pois o cliente pagará um valor, calculado na solicitação de simulação, diferente do valor calculado na criação do pedido.

## Simulação


- criar um imposto no Whitelabel Seller que seja restrito a algum método de envio
- crie um carrinho no marketplace que usará esse vendedor e selecione o método de envio especificado anteriormente

O valor não será apresentado e o pedido não poderá ser criado.



## Workaround


Não há nenhuma solução alternativa conhecida para restringir um imposto ou uma promoção por método de envio em um vendedor Whitelabel.

