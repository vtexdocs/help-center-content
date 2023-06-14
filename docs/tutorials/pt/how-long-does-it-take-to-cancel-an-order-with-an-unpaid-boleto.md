---
title: 'Em quanto tempo um pedido de boleto sem pagamento é cancelado?'
id: frequentlyAskedQuestions_300
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.983Z
updatedAt: 2021-10-28T11:55:41.026Z
publishedAt: 2021-10-28T11:55:41.026Z
firstPublishedAt: 2019-01-24T22:03:31.971Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado
legacySlug: em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

O pedido com boleto envolve o cancelamento de três itens, que podem gerar dúvidas. Por isso, antes vamos separar essas três definições para seguirmos com os prazos de cada uma delas.

## Prazo de validade do boleto

A validade do boleto é o prazo para o boleto não ser mais aceito para realizar o pagamento. Esse prazo sempre será configurado na aba de Pagamentos no Admin, na configuração da afiliação, conforme imagem abaixo.

![PT - Prazo de validade do boleto](//images.ctfassets.net/alneenqid6w5/40DsZm4Pg4syu00CI2WykQ/8553e08e76e0f4fd511d30c8e7e47ab9/Prazo_de_validade_do_boleto_PT.png)

## Prazo para cancelamento da reserva dos produtos

Mesmo que o pedido continue como pagamento pendente, a reserva dos produtos comprados é liberada, para que esse fluxo não influencie a operação da loja.
Para isso, o prazo para a liberação da reserva é calculado da seguinte forma:

O prazo de vencimento da reserva do estoque é o **prazo de expiração do boleto +  quatro, cinco ou seis dias corridos**, seguindo as regras abaixo:

- Quatro dias para quando a data de expiração do boleto for domingo, segunda ou terça;
- Cinco dias para quando a data de expiração do boleto for quarta, quinta ou sexta;
- Seis dias para quando a data de expiração do boleto for sábado.

Para mais informações sobre como funciona a reserva, [clique aqui](/pt/tutorial/como-a-reserva-funciona).

## Prazo para cancelamento do pedido

O cancelamento do pedido é realizado 20 dias após o prazo acima, ou seja, **20 dias + prazo de cancelamento da reserva**.
Tomando como exemplo a imagem acima, o pedido feito em uma quinta-feira e não pago seria cancelado 30 dias após a data de finalização:
Prazo de cancelamento do boleto = **5** dias.
Prazo de expiração da reserva = **5** + **5** = **10** dias.
Prazo para cancelamento do pedido = **20 + 10 = 30 dias**.
Esse tempo, de aproximadamente um mês, permite que a compra seja recuperada junto ao cliente e se utilize o mesmo pedido para finalizar este processo caso o mesmo deseje.

## Prazo para cancelamento de boleto registrado

Existem dois tipos de boletos: aqueles cujo status de pagamento a VTEX consegue verificar por meio de uma URL e aqueles em que essa verificação não é realizada. 

Essa diferença acontece por conta do posicionamento de cada banco. Existem algumas instituições financeiras que cedem à VTEX o endpoint necessário para essa verificação, enquanto outras ainda não implementaram esse tipo de solução. 

Atualmente, apenas o __Itaú Shopline__ e o __Bradesco__ disponibilizam esse tipo de integração.

Desse modo, para esses dois bancos o cancelamento é feito da seguinte forma: existe uma janela de tempo entre o momento em que o cliente finaliza a compra e o momento em que, de fato, paga o boleto. Durante esse período, a VTEX realiza múltiplas chamadas de verificação junto ao banco. Esse processo dura, em média, sete dias corridos.

Se o cliente não realizar o pagamento durante esse período, o boleto é cancelado. 

Caso você utilize outros adquirentes para processar os pagamentos via boleto, recomendamos que entre em contato com eles para informações a respeito do prazo para cancelamento do boleto.

## Para saber mais

[Entenda como configurar boleto registrado](/pt/faq/como-configurar-boleto-registrado/).
