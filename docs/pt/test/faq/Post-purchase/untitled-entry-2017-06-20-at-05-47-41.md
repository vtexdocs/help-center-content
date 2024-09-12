---
title: 'Pedido recorrente não criado'
id: 4n6o8yuEqkyG44ei20IWSm
status: ARCHIVED
createdAt: 2017-06-20T17:47:41.946Z
updatedAt: 2020-03-05T18:42:03.076Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_35
slug: pedido-recorrente-nao-criado
locale: pt
legacySlug: pedido-recorrente-nao-criado
---

Pedidos feitos no sistema de recorrência estão sujeitos ao mesmo procedimento de um novo pedido. Ou seja, quando chegou o dia de fazer um novo pedido dentro da assinatura de um cliente, é necessário criar um novo pedido no OMS que deverá rodar uma nova transação no PCI.

Caso o PCI Gateway receba mensagem de erro, por exemplo por saldo insuficiente do cartão, a transação não é feita com sucesso e o pedido não pode ser finalizado. Em todo cenário de erro na criação do pedido é enviado um email ao cliente informando que o pedido não pode ser feito. O template desse email está no MessageCenter e como os outros, pode ser customizado.

Quando um pedido dentro da recorrence falha em ser criado por algum problema relativo a pagamento a recorrência __NÃO__ é cancelada. Apenas o pedido desse ciclo não é gerado.

Falhas na geração de pedidos recorrentes geram um DO ([VTEX DO](http://help.vtex.com/pt/tutorial/vtex-do "VTEX DO")). Um aviso também é feito quado a recorrência não for gerada por conta de indisponibilidade de itens.

![recorrencia erro vtexdo](https://images.contentful.com/alneenqid6w5/5bW2FX0E24yeiEkWKUimsI/44121ea3f5f90edb0991cab05c54f23f/recorrencia_erro_vtexdo.png)
