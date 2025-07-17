---
title: 'Melhorias no matcher da VTEX'
id: 13KA505i1EQT24u7CPIPrP
status: PUBLISHED
createdAt: 2021-06-10T12:17:25.857Z
updatedAt: 2021-07-19T13:01:43.550Z
publishedAt: 2021-07-19T13:01:43.550Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2021-06-10-improvements-in-vtex-matcher
locale: pt
legacySlug: melhorias-no-matcher-da-vtex
announcementImageID: ''
announcementSynopsisPT: 'Reformulamos o matcher da VTEX para aprimorar a catalogação de SKUs do seller, no marketplace'
---

O [VTEX Matcher](/pt/tutorial/understanding-vtex-matcher-scoring--tutorials_424) é uma ferramenta presente em marketplaces que avalia produtos e SKUs enviados por sellers para acelerar sua [catalogação](/pt/tutorial/sugerindo-e-aprovando-skus/). O VTEX Matcher avalia os itens recebidos e busca correspondências no catálogo do marketplace, podendo associar esse item a um SKU, ou a um produto existente, e até, caso não houver correspondência, criar um produto novo.

Até então, o sistema do matcher tinha algumas limitações para fazer essa associação de produtos, levando em consideração critérios que não otimizavam o processo. Alteramos a sua configuração, aprimorando as regras aplicadas à avaliação e catalogação de SKUs recebidos.

## O que mudou?

Acrescentamos as seguintes melhorias no sistema do VTEX Matcher: 

| Antes                                                                                                                                                                                                                                  | Agora                                                                                                                                                                                                                                |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| O VTEX Matcher só levava em consideração o nome do SKU recebido para fazer a correspondência com o catálogo do marketplace.                                                                                                                 | __Mais critérios para avaliação:__ o VTEX Matcher agora avalia os itens do catálogo do marketplace levando em conta nome, EAN e Ref ID. Para que um item seja associado, deve haver uma correspondência em pelo menos dois desses critérios.  |
| O VTEX Matcher não reconhecia caracteres especiais no nome do SKU.                                                                                                                                                                          | __Caracteres especiais:__ o VTEX Matcher agora lê caracteres especiais presentes no nome do SKU, para melhor identificá-los.                                                                                                                  |
| O VTEX Matcher descartava especificações de SKU que vinham em formato de texto, portanto elas não eram adicionadas ao produto associado.                                                                                                    | __Especificações de SKU em formato de texto:__ o VTEX Matcher passou a transformar especificações de SKU que vinham em formato de texto em dados não estruturados, tornando-os aptos a virarem de fato uma variação no produto associado.     |
| SKUs pertencentes ao mesmo produto, que eram enviados ao mesmo tempo, eram avaliados individualmente, o que fazia com que o VTEX Matcher criasse produtos novos para cada SKU, ao invés de associá-los ao produto único ao qual pertenciam. | __Tratamento de concorrência:__ SKUs pertencentes ao mesmo produto agora tem um critério de priorização. O SKU que chegar primeiro tem prioridade na avaliação, para evitar que o VTEX Matcher crie produtos separados para cada SKU.         |
| Somente os SKUs que foram recebidos a partir da ativação do autoapprove eram tratados sob a sua regra.                                                                                                                                 | __Autoapprove__: Quando o usuário ativa o autoapprove, agora tratamos os SKUs que já estavam pendentes.                                                                                                                                  |

## Por que fizemos essa mudança?
Essa melhoria faz com que a correspondência feita pelo VTEX Matcher ocorra com mais precisão, aprimorando a forma com que produtos do seller são associados ao catálogo do marketplace. As novas regras aplicadas ao matcher evitam a criação de produtos equivocadamente, além de trazerem mais segurança e agilidade para a catalogação. 

## O que precisa ser feito?
Nenhuma ação é necessária, a melhoria é automática para todos os marketplaces que utilizam o VTEX Matcher.

Para saber mais, confira nossa documentação sobre o [VTEX matcher](/pt/tutorial/understanding-vtex-matcher-scoring--tutorials_424), configuração de [autoapprove](https://developers.vtex.com/vtex-rest-api/reference/sku-approval-settings#activate-autoapprove-for-account) e a [catalogação de SKUs Recebidos](/pt/tutorial/sugerindo-e-aprovando-skus/).

