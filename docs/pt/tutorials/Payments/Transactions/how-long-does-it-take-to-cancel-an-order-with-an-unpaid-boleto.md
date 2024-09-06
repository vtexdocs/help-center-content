---
title: 'Em quanto tempo um pedido de boleto sem pagamento é cancelado?'
id: frequentlyAskedQuestions_300
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.983Z
updatedAt: 2024-06-11T21:26:30.893Z
publishedAt: 2024-06-11T21:26:30.893Z
firstPublishedAt: 2019-01-24T22:03:31.971Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado
locale: pt
legacySlug: em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Quando um boleto emitido referente a uma ordem não é pago, o pedido pode ser cancelado. Para calcular o tempo total necessário para realizar o cancelamento desse pedido é necessário considerar os seguintes prazos:

- [Prazo de validade do boleto](#prazo-de-validade-do-boleto)
- [Prazo para cancelamento da reserva dos produtos](#prazo-para-cancelamento-da-reserva-dos-produtos)
- [Prazo para cancelamento do pedido](#prazo-para-cancelamento-do-pedido)

## Prazo de validade do boleto

A validade de um boleto é o período estabelecido (em dias) para que um cliente realize o pagamento de uma compra após ele ter sido emitido. Uma vez ultrapassado este período de tempo, o boleto é considerado expirado e não pode mais ser pago.

Alguns provedores de pagamento permitem que a validade de um boleto seja configurado no Admin VTEX. Para verificar se o seu provedor de pagamento disponibiliza esta opção, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, digite o nome do provedor desejado e clique sobre ele.
3. Na tela de configuração do provedor, verifique se existe algum campo disponível para configurar a validade do boleto e preencha com o valor desejado (em dias) .
4. Clique em `Salvar`.

>⚠️ Caso o seu provedor de pagamento não permita modificar a validade de boleto no Admin VTEX, é necessário entrar em contato com o suporte técnico do provedor e verificar os procedimentos necessários para a configuração de validade do boleto.

## Prazo para cancelamento da reserva dos produtos

Mesmo que o pedido continue como pagamento pendente, a reserva dos produtos comprados é liberada, para que esse fluxo não influencie a operação da loja.
Para isso, o prazo para a liberação da reserva é calculado da seguinte forma:

O prazo de vencimento da reserva do estoque é o **prazo de expiração do boleto +  quatro, cinco ou seis dias corridos**, seguindo as regras abaixo:

- **Quatro dias corridos**: quando a data de expiração do boleto for domingo, segunda ou terça.
- **Cinco dias corridos**: quando a data de expiração do boleto for quarta, quinta ou sexta.
- **Seis dias corridos**: quando a data de expiração do boleto for sábado.

Para mais informações sobre a reserva de produtos, acesse [Como a reserva funciona](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92).

## Prazo para cancelamento do pedido

O cancelamento do pedido é realizado 20 dias após a reserva ser cancelada, ou seja, **20 dias + prazo de cancelamento da reserva**.

Por exemplo, um pedido realizado em uma quinta-feira e não pago, seria cancelado 30 dias após a data de finalização:

- Prazo de cancelamento do boleto = 5 dias.
- Prazo de expiração da reserva = 5 + 5 = 10 dias.
- Prazo para cancelamento do pedido = 20 + 10 = 30 dias.

