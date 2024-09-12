---
title: 'Compreenda o valor da receita aprovada'
id: tutorials_4322
status: PUBLISHED
createdAt: 2017-04-27T21:51:05.741Z
updatedAt: 2023-05-31T16:14:13.332Z
publishedAt: 2023-05-31T16:14:13.332Z
firstPublishedAt: 2017-04-27T23:11:15.957Z
contentType: tutorial
productTeam: Billing
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: compreenda-o-valor-da-receita-aprovada
locale: pt
legacySlug: compreenda-o-valor-da-receita-aprovada
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Para a VTEX, receita é o valor total do consumo de pedidos que passaram pelo status **Financeiramente Aprovado** no módulo **Pedidos**. Saiba mais no artigo [O que a VTEX considera como receita no cálculo da fatura?](https://help.vtex.com/pt/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq)

## Relatório Financeiro

No Relatório Financeiro, o cliente encontra uma listagem dos pedidos financeiramente aprovados com a devida marcação do canal de vendas - se B2C, B2B, Call Center, VTEX Sales App, Marketplace certificado, Seller certificado, e outros canais. 

Para acessar o relatório financeiro da fatura, siga os passos abaixo: 

1. No Admin VTEX, acesse **Applicativos > Customer Credit > Títulos**, ou digite **Títulos** na barra de busca no topo da página.
2. Selecione a fatura desejada.
3. Clique em `Relatório Financeiro`.

Feito isso, você verá uma mensagem avisando que o Relatório Financeiro solicitado será enviado para o seu email de usuário no Admin VTEX.

## Detalhamento de faturas

Para que nossos clientes possam compreender suas faturas, a VTEX disponibiliza o detalhamento de cada fatura com a relação dos valores cobrados.

Nela, constam dados descritivos sobre o _Gross Merchandise Value_ (GMV), que é a soma dos pedidos financeiramente aprovados no mês, detalhado no relatório financeiro. 

Além da Taxa Fixa Mensal (Monthly Fixed Fee), e Take Rate aplicada, que pode variar de acordo com o plano que foi contratado. 

Para visualizar o detalhamento da sua fatura, siga o passos a passo abaixo:

1. No Admin VTEX, acesse **Applicativos > Customer Credit > Títulos**, ou digite **Títulos** na barra de busca no topo da página.
2. Selecione a fatura desejada.
3. Clique em `Detalhes`.
4. Clique na seta para baixo, ao lado dos valores descritos na fatura.

## Valores da receita aprovada

A soma do valor total dos pedidos financeiramente aprovados listados no relatório financeiro é chamado de _Gross Merchandise Value_ (GMV). Para obter o valor total do GMV, você deve somar todos os valores contidos em _Total Value String_. 

O _Take Rate_ é o porcentual mensal que é cobrado sobre o valor total dos pedidos financeiramente aprovados. Apuramos o porcentual sobre o __total dos pedidos financeiramente aprovados__, já que esse é o estágio em que o cliente conclui todo o processo de compra, consumindo os recursos de Busca, Infra, Hosting etc.

Diferentes canais de venda (B2C, B2B, Call Center..) possuem Take Rate diferentes. Para entender o porcentual que está sendo cobrado, consulte as condições no seu contrato.

Para acessar o valor dos pedidos financeiramente aprovados por cada canal de vendas, é necessário filtrar pela coluna **Type**.

