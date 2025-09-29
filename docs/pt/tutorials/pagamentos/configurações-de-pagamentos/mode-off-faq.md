---
title: 'Mode-Off: FAQ'
id: 6hbd7PuvoxuRbPCvTqjxeB
status: PUBLISHED
createdAt: 2021-01-21T17:29:10.793Z
updatedAt: 2024-04-11T19:26:47.407Z
publishedAt: 2024-04-11T19:22:34.569Z
firstPublishedAt: 2021-01-21T17:54:12.941Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: mode-off-faq
legacySlug: mode-off-faq
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O mode-off é um recurso do [Payment Provider Protocol](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-payment-provider-protocol "Payment Provider Protocol"), o protocolo de integração para pagamentos da VTEX. 

Essa funcionalidade permite que a VTEX acompanhe a saúde e a estabilidade dos seus parceiros de pagamentos, garantindo que pedidos não sejam cancelados por conta de instabilidades. 

O mode-off funciona da seguinte forma: quando a VTEX identifica algum tipo de erro consecutivo nas integrações dos parceiros de pagamento, o status mode-off é ativado para represar as transações de cartão de crédito. 

Assim que a integração ou o parceiro apresentarem estabilidade novamente, o status mode-off é desativado e o nosso sistema começa a fazer as retentativas de processamento das transações que foram represadas.

Neste artigo, reunimos as principais dúvidas sobre o funcionamento do mode-off. 

Confiras as questões a seguir.

## Todos os parceiros têm essa funcionalidade habilitada?

Sim, todos os parceiros de pagamentos da VTEX têm o mode-off habilitado.

## O mode-off funciona para quais meios de pagamento?

Apenas para os meios de pagamento que podem ser processados de forma assíncrona. Ou seja, cartão de crédito.

## O mode-off funciona para os meios de pagamento boleto, QR code ou redirect?

Não, esses meios de pagamento demandam uma resposta on-line e não podem ser processados de forma assíncrona. 

Desse modo, para esses meios de pagamento, as transações não serão reprocessadas.

## Qual a regra atual para ligar o mode-off?

O mode-off é ligado quando o parceiro ou a integração apresentam instabilidade identificada a partir do retorno de mensagens de erro do tipo: 500, 408 ou timeout maior que 30 segundos nos últimos cinco minutos. Essa regra é válida para todos os meios de pagamento que ele processa.

> ⚠️ Vale lembrar que os meios de pagamento síncronos **não** poderão ser reprocessados. Porém, entram na contagem de erros para identificarmos se um parceiro está instável ou não.

## Qual a regra para o mode-off ser desligado?

As transações serão liberadas normalmente quando o parceiro parar de apresentar a mesma taxa de cinco erros nos últimos cinco minutos. 

## Por quanto tempo a VTEX faz a retentativa de processamento das transações represadas?

O tempo entre retentativas de processamento da transação (_retries_) pode ser definido pelo parceiro no momento do envio das informações de pagamento. Ao configurar o tempo para cancelamento do pagamento (campo `delayToCancel`) para um período menor que 1 dia, as retentativas serão realizadas a cada 1 hora. Se o tempo para cancelar o pagamento for definido como igual ou maior que 1 dia, as retentativas serão realizadas a cada 4 horas. Para mais informações, acesse [Create Payment endpoint](https://developers.vtex.com/docs/api-reference/payment-provider-protocol?endpoint=post-/payments).

> ℹ️ Caso o pagamento seja realizado por [PIX](/pt/tutorial/configurar-pix-como-meio-de-pagamento--5sbNavMSJY4jyLmLKRHiOf) ou o tempo para cancelamento do pagamento seja configurado entre 5 minutos e 1 hora, as chamadas de retry ocorrerão a cada 5 minutos.

## Como identificar o mode-off e o que fazer quando ele estiver ligado?

O parceiro de pagamentos passa a enxergar uma alta taxa de erros e redução no volume de pagamentos feitos com cartão. 

Nesse momento, é importante trabalhar para corrigir a instabilidade e tranquilizar os clientes de que os pagamentos serão processados assim que o sistema recuperar sua estabilidade. 

## Como o lojista identifica esse comportamento de instabilidade e o que ele precisa fazer?

O lojista vai notar diversos pagamentos no cartão de crédito com o status de pendente, não processados. 

O log da transação retornará o label "mode-off".

## Uma vez que o mode-off for ligado, o lojista precisa fazer algo? 

Do lado da VTEX, não, apenas aguardar o retry. 

Caso deseje, o lojista pode também entrar em contato com seu parceiro de pagamentos para entender o cenário de instabilidade.

## Onde consigo mais detalhes técnicos sobre o funcionamento do mode-off?

Para obter informações técnicas sobre o funcionamento do mode-off, confira nossa documentação no [Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows#mode-off "").  

