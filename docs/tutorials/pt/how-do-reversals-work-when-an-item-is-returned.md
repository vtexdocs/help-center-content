---
title: 'Funcionamento do estorno quando há devolução do item'
id: frequentlyAskedQuestions_298
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.904Z
updatedAt: 2024-02-28T17:25:13.906Z
publishedAt: 2024-02-28T17:25:13.906Z
firstPublishedAt: 2019-01-24T21:55:16.859Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-funciona-estorno-quando-ha-devolucao-do-item
locale: pt
legacySlug: como-funciona-estorno-quando-ha-devolucao-do-item
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Quando é solicitada a [devolução parcial ou total dos itens](/pt/tutorial/como-fazer-a-devolucao-de-itens) no pedido que foi pago com cartão de crédito ou demais pagamentos **exceto boleto**, o Gerenciamento de pedidos se comunica com Pagamentos pedindo para estornar o valor daqueles itens a serem devolvidos.

Nesse caso, a VTEX realiza sim o estorno no adquirente quando o valor já foi capturado (status `Faturado`). Funciona da seguinte forma: a VTEX entra em contato com o adquirente e tenta realizar o estorno online o quanto antes. 

Contudo, caso essa operação não seja bem sucedida, será enviado [uma notificação via e-mail](https://help.vtex.com/pt/tutorial/como-configurar-notificacoes?locale=pt "uma notificação via e-mail") informando ao lojista que será preciso contatar o adquirente para efetivar o estorno automático. 

Para saber mais, [clique aqui](https://help.vtex.com/pt/faq/por-que-meu-pedido-cancelado-foi-cobrado-na-fatura-do-cliente?locale=pt "clique aqui").

## A exceção do boleto

Quando o pagamento for feito por boleto, se faz necessário gerar um vale manualmente ou, se o cliente preferir, transferir o respectivo valor para a conta do cliente, pois não é possível fazer o estorno de boleto. 

O ideal é entrar em contato com o consumidor para alinhar a melhor forma de operar a devolução do valor pago.

_Quando a devolução é feita antes do [reconhecimento da reserva](/pt/tutorial/como-a-reserva-funciona), o item volta para seu estoque de origem ficando disponível para uma nova venda, sem a necessidade do lojista inserir essa unidade manualmente, por planilha ou através de API. Caso a devolução for feita após a reserva ser reconhecida, é necessário retornar a unidade para o estoque, atualizando essa informação manualmente, por planilha ou através de API._
