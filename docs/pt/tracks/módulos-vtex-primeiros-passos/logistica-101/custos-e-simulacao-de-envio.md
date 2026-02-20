---
title: 'Custos e simulação de envio'
id: 3by48jFhzpZEseYFpH9uVt
status: PUBLISHED
createdAt: 2022-03-08T15:06:14.717Z
updatedAt: 2022-03-10T16:31:46.970Z
publishedAt: 2022-03-10T16:31:46.970Z
firstPublishedAt: 2022-03-08T18:28:59.554Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: shipping-costs-and-simulation
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistica-101
order: 4
---


## Custo final de envio

A soma de todas as tarifas necessárias para realizar o envio dos pedidos é chamada [custo final de envio](/pt/docs/tutorials/custo-final-do-envio). O custo reúne as [tarifas de envio](/pt/docs/tutorials/tarifas-de-envio) das políticas de envio e os custos de doca. 

Esses custos são cadastrados para serem utilizados no checkout. Ao final da experiência de compra, o cliente informa os dados de entrega; a plataforma calcula as opções de envio e as apresenta para o cliente com seus respectivos custos. 

É possível cadastrar os custos de envio via:

* **Admin:**
    * Na seção `Estratégia de envio`: utilizando a [planilha de frete](/pt/docs/tutorials/planilha-de-frete) da Política de envio para o cadastro de custos em massa.
    * Na seção `Tarifas de envio`: para cadastrar tarifas individualmente e conferir as tarifas existentes. Saiba como utilizar a seção no artigo [Gerenciar Tarifas de envio](/pt/docs/tutorials/gerenciar-tarifas-de-envio).
* **API:** utilizando a [API de valores de frete](https://developers.vtex.com/vtex-rest-api/reference/createupdatefreightvalues).

Recomendamos que, após cadastrar as tarifas na plataforma, o lojista confira se elas foram cadastradas corretamente utilizando o [Simulador de envio](/pt/docs/tutorials/simulador-de-envio).

## Simulador de envio

Com as [estratégias de envio](/pt/docs/tutorials/estrategia-de-envio) da loja configuradas e os itens para venda no inventário, é importante validar se essas configurações estão refletindo o desejado, ou seja, se realmente os produtos cadastrados no inventário fornecem opções de envio para os clientes. 

Essa validação é feita pelo [Simulador de envio](/pt/docs/tutorials/simulador-de-envio). Essa ferramenta permite ao lojista ver quais os cenários de entrega disponíveis para o produto em uma localidade específica. Dessa forma, o lojista pode conferir:

* Se o produto está disponível para entrega em determinada região.
* Quais as formas de envio para o produto.
* As transportadoras que podem realizar a entrega e os motivos pelos quais outras foram desconsideradas.
* As tarifas de envio existentes.
* Se há pontos de retirada para o produto.
* Qual [seller white label](/pt/docs/tutorials/seller-white-label) realizará a entrega do produto. 

> ℹ️ Simule também o envio via API, utilizando a [API de cálculo de SLA](https://developers.vtex.com/vtex-rest-api/reference/calculatesla).
