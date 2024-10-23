---
title: 'Transação não encontrada/existente no PCI Gateway'
id: 6MIUWUwj9CeY6oGy20aWQi
status: ARCHIVED
createdAt: 2017-06-16T12:20:33.097Z
updatedAt: 2019-12-31T15:18:17.075Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Financial
author: authors_35
tag: PCI Gateway
slugEN: untitled
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Em algumas ocasiões o link existente dentro do pedido que leva à transação do PCI não funciona corretamente. 

![detalhe pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Financial/transacao-nao-encontrada-existente-no-pci-gateway_1.png) 

Esse erro, apesar de raro, ocorre com mais frequência quando um pedido foi cancelado. Apesar da transação existir no PCI Gateway, o link entre ele e o OMS não consegue mostrar a transação: 

![TID undefined PCI](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Financial/transacao-nao-encontrada-existente-no-pci-gateway_2.png)

Contudo, todo pedido possui pelo menos uma transação, mesmo que o pedido já tenha sido criado com erro, como uma tentativa de fechar pedido com dados incompletos no checkout. Essa transação também é salva no PCI. Se você procurar pelo número da transação diretamente no módulo PCI, irá encontrar a info que deseja.

Para saber como buscar uma transação no PCI:
http://help.vtex.com/pt/tutorial/transacoes-como-buscar


## Simulação


1. Entrar em um Pedido no OMS
2. Clicar no número da transação que é um link. Está no topo à direita.


## Workaround

A transação existe, o erro aqui é apenas um erro de busca, onde o PCI não encontra na listagem pois a informação contida no link está errada.

A melhor forma de entrar nessa transação é buscando diretamente no PCI Gateway. Procurando diretamente pelo número da transação, por email, TID, ou CPF do comprador.

http://help.vtex.com/pt/tutorial/transacoes-como-buscar

