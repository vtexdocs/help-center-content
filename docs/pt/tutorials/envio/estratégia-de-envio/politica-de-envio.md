---
title: 'Política de envio'
id: tutorials_140
status: PUBLISHED
createdAt: 2017-04-27T22:17:12.502Z
updatedAt: 2024-11-05T18:11:45.931Z
publishedAt: 2024-11-05T18:11:45.931Z
firstPublishedAt: 2017-04-27T23:00:45.247Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-policy
legacySlug: cadastrar-transportadora, gerenciar-transportadora
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

O conjunto de configurações [logísticas](/pt/docs/tutorials/fulfillment-logistica-vtex) essenciais de uma loja VTEX recebe o nome de [estratégia de envio](/pt/docs/tutorials/estrategia-de-envio), que é a relação entre os seguintes aspectos:

* Política de envio
* [Doca](/pt/docs/tutorials/doca)
* [Estoque](/pt/docs/tutorials/estoque)

A imagem abaixo mostra como esses conceitos se relacionam entre si:

![shipping_strategy_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estratégia-de-envio/politica-de-envio_1.png)

**Política de envio** é um conjunto de regras e configurações que definem quais opções de envio serão apresentadas aos clientes no checkout. Quando a plataforma VTEX [calcula o tempo de envio](/pt/docs/tutorials/como-funciona-o-calculo-de-envio) do pedido, as configurações das políticas de envio são consideradas, e algumas das principais são:

* [Transportadora](/pt/docs/tutorials/transportadoras-na-vtex)
* [Horário de funcionamento da transportadora](/pt/docs/tutorials/horario-de-funcionamento-das-transportadoras)
* [Feriados](/pt/docs/tutorials/cadastrar-feriados)
* [Adicionais de frete](/pt/docs/tutorials/adicionais-de-frete)
* [Entrega agendada](/pt/docs/tutorials/entrega-agendada)
* [Pontos de retirada](/pt/docs/tutorials/pontos-de-retirada)

Para saber como criar uma política de envio, veja o artigo [Criar uma política de envio](/pt/docs/tutorials/criar-uma-politica-de-envio). Para informações sobre gerenciamento, confira o artigo [Gerenciar políticas de envio](/pt/docs/tutorials/gerenciar-politicas-de-envio).

## Política de envio e planilha de frete

Toda política de envio está associada a uma [planilha de frete](/pt/docs/tutorials/planilha-de-frete), que é onde você cadastra informações como:

* Identificação da transportadora
* Valor de envio cobrado pela transportadora
* Intervalos de código postal ou [polígonos](/pt/docs/tutorials/gerenciar-geolocalizacao) válidos para envios

Uma vez que a planilha de frete é associada à política de envio, essas informações passam a fazer parte da sua operação logística na VTEX.

## Primeiras configurações logísticas

As configurações podem ser realizadas pelo Admin VTEX ou por API. Se você está começando a configurar sua [estratégia de envio](/pt/docs/tutorials/estrategia-de-envio), a ordem de cadastro sugerida é a seguinte:

| **Assunto** | **Configuração via Admin VTEX** | **Configuração via API** |
| :--- | :--- | :--- |
| 1. Política de envio | [Criar uma política de envio](/pt/docs/tutorials/criar-uma-politica-de-envio) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Doca](/pt/docs/tutorials/doca) | [Gerenciar doca](/pt/docs/tutorials/gerenciar-doca) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Estoque](/pt/docs/tutorials/estoque) | [Gerenciar estoque](/pt/docs/tutorials/gerenciar-estoque) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |

