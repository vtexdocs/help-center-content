---
title: 'O que é Order Configuration'
id: 2t6UQoFrFSSGW8CGEbA0r5
status: PUBLISHED
createdAt: 2020-08-20T16:17:38.285Z
updatedAt: 2020-09-04T16:29:27.110Z
publishedAt: 2020-09-04T16:29:27.110Z
firstPublishedAt: 2020-09-04T16:23:11.568Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: what-is-order-configuration
legacySlug: o-que-e-order-configuration
locale: pt
subcategoryId: 1GujN7Pa7NESCz0sB8srX4
order: 1
---

O cenário B2B demanda configurações diferentes do B2C. Dentro desse contexto, os pedidos são direcionados para fins diversos, como revenda e consumo próprio. Assim, é desejado ter preços diferenciados para cada caso de compra.

Order Configuration é a funcionalidade que proporciona uma experiência mais customizável para a loja B2B. Ela é responsável pela personalização de preços para cada circunstância em que o pedido será faturado. É possível definir quaisquer critérios para determinar os perfis de consumo dentro da loja.

Caso você ainda não saiba quais critérios configurar, recomendamos usar o default:

- __Tipo de pedido:__ qual o tipo de consumo do pedido.
- __Estado:__ no caso do Brasil, os estados apresentam impostos diferentes para os produtos. Isso permite a aplicação diferenciada de tabelas de preço para cada estado.

### Como funciona?

Para instalar o aplicativo do Order Configuration no seu Admin, acesse a [nossa documentação do VTEX IO](https://vtex.io/docs/components/content-blocks/vtex.order-configuration/readme/).

Depois de instalado, as configurações de uso do Order Configuration são definidos na [API Price Simulations](https://developers.vtex.com/reference/price-simulations-api-overview).

Por API, você deve associar uma [tabela de preços](/pt/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) a cada cenário, criando uma correlação entre os dois. Dessa forma, quando o usuário for configurar suas condições de compra, ele receberá os preços referentes àquela regra.

Caso o usuário configure um cenário que não apresente nenhuma tabela de preços associada, será usada uma tabela de preços default.

> ℹ️ É importante destacar que o usuário precisa estar logado para usar o Order Configuration e, assim, visualizar os diferentes preços baseado na sua configuração

