---
title: 'Novo atributo obrigatório para produtos enviados ao Mercado Livre'
id: 5nr8nGhCLFNtIP5tFkNEpJ
status: PUBLISHED
createdAt: 2022-02-25T18:35:17.032Z
updatedAt: 2022-03-03T20:38:16.318Z
publishedAt: 2022-03-03T20:38:16.318Z
contentType: updates
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: 2022-02-25-new-mandatory-attribute-for-products-sent-to-mercado-libre
locale: pt
legacySlug: novo-atributo-obrigatorio-para-produtos-enviados-ao-mercado-livre
announcementImageID: 'undefined'
announcementSynopsisPT: 'Devido à determinação da Anatel, produtos da categoria Celulares no Mercado Livre terão um novo atributo obrigatório'
---

Quando uma loja VTEX integrada ao Mercado Livre deseja [enviar seus produtos](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA) para o catálogo do marketplace, é necessário realizar o mapeamento das categorias e atributos desses produtos.

Devido à [determinação da Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/anatel-alerta-marketplaces-sobre-venda-de-produtos-nao-homologados), produtos da categoria Celulares no Mercado Livre terão um novo atributo obrigatório chamado `ANATEL_HOMOLOGATION_NUMBER` para serem comercializados em marketplaces.
## O que mudou?

A partir de agora, produtos da categoria Celulares precisam ter o atributo obrigatório `ANATEL_HOMOLOGATION_NUMBER` cadastrado e mapeado para serem enviados à plataforma do Mercado Livre. 

Esse atributo corresponde ao código de homologação do aparelho eletrônico junto à Anatel que garante ao consumidor que o produto comercializado respeita padrões de qualidade,  de segurança e de funcionalidades técnicas regulamentadas.

## Por que realizamos esta mudança?

Essa mudança foi realizada porque a [nova determinação da Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/marketplaces-adotam-medidas-para-coibir-venda-de-produtos-nao-homologados) solicita aos marketplaces os códigos de homologação de produtos eletrônicos da categoria Celulares.

## O que precisa ser feito?

Primeiramente, siga os passos do artigo [Cadastrar especificações de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) para criar, na plataforma VTEX, a especificação de produto chamada `ANATEL_HOMOLOGATION_NUMBER` nos produtos da categoria Celulares.

Após cadastrar o novo atributo, faça o mapeamento da categoria e do atributo para enviar o produto ao Mercado Livre. Para mais informações sobre esse procedimento, leia o guia [Enviar produtos para o Mercado Livre](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA).
