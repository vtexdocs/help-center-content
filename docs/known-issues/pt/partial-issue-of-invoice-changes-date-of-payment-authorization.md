---
title: Emissão parcial de Nota Fiscal altera data de autorização do pagamento
id: 3kjzXJNFj2miIeIMAW6uW2
status: PUBLISHED
createdAt: 2017-04-06T17:10:46.252Z
updatedAt: 2022-12-22T14:50:45.991Z
publishedAt: 2022-12-22T14:50:45.991Z
firstPublishedAt: 2017-05-26T19:37:55.792Z
contentType: knownIssue
productTeam: Post-purchase
author: D0eIlynYFqaWQOMM6mmY6
tag: Order Management
slug: emissao-parcial-de-nota-fiscal-altera-data-de-autorizacao-do-pagamento
kiStatus: Backlog
internalReference: 
---

## Sumário

Nosso sistema de Workflow atualmente é usado por ele mesmo mas também pelo Checkout. Isso gera uma concorrência dentro do sistema e em algumas situações - estamos falando de pouquíssimas - algum dado do pedido não fica registrado. Não é que ele não exista, mas ao longo do fluxo ele foi ignorado e/ou substituido. No caso estamos falando do status: "payment-approved"

Com a emissão da Nota parcial, o OMS precisa consultar o Workflow para saber se o valor total da nota foi atingido. Nesse momento o pedido volta ao status de "payment-approved" mas o Workflow perdeu o primeiro status - aquele gerado na data de aprovação do pagamento no PCI (você pode consultar na transação). Logo é inserido essa última data, mudando assim o campo data da aprovação do pagamento.

No caso dessa alteração ser feita após o mês em que o pagamento foi originalmente aprovado, o pedido passa a constar dentro do período de autorização do novo mês, a nível de cobrança. O cliente acaba sendo cobrado novamente por esse pedido, já que a receita considerada para apuração do valor da fatura depende da Data de Autorização dos pedidos.

## Simulação

- Acessar o módulo OMS
- Colocar o filtro de Data de Autorização do mês que deseja consultar (em que ocorreu a emissão parcial de nota)
- Buscar pelo código do pedido e anotar o valor (1)
- Encontrá-lo
- Colocar o filtro de Data de Autorização do mês em que o pedido realmente foi aprovado
- Conferir o valor de receita apurada (2)
- Acessar o módulo Billing
- Entrar em detalhes da fatura do mês que o pedido realmente foi aprovado
- Conferir o valor de receita considerado como consumo (3)
- Tirar a diferença entre os valores 2 e 3 (4)
- Conferir se o valor (1) e o valor (4) são iguais
- Caso positivo, o pedido está sendo cobrado em duplicidade

## Workaround

O ideal é que essa emissão parcial de nota não seja realizada no mês seguinte a aprovação do pagamento. Caso ocorra, é necessário entrar em contato com nosso time financeiro, para que o problema seja verificado e seja concedido um desconto no mesmo valor que foi cobrado em duplicidade pelo pedido.

