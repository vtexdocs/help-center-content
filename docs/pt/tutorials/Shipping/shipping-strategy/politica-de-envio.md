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

O conjunto de configurações [logísticas](https://help.vtex.com/pt/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) essenciais de uma loja VTEX recebe o nome de [estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), que é a relação entre os seguintes aspectos:

* Política de envio
* [Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)
* [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)

A imagem abaixo mostra como esses conceitos se relacionam entre si:

![shipping_strategy_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/shipping-strategy/politica-de-envio_1.png)

**Política de envio** é um conjunto de regras e configurações que definem quais opções de envio serão apresentadas aos clientes no checkout. Quando a plataforma VTEX [calcula o tempo de envio](https://help.vtex.com/pt/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) do pedido, as configurações das políticas de envio são consideradas, e algumas das principais são:

* [Transportadora](https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)
* [Horário de funcionamento da transportadora](https://help.vtex.com/pt/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS)
* [Feriados](https://help.vtex.com/pt/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk)
* [Adicionais de frete](https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV)
* [Entrega agendada](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)
* [Pontos de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R)

Para saber como criar uma política de envio, veja o artigo [Criar uma política de envio](https://help.vtex.com/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT). Para informações sobre gerenciamento, confira o artigo [Gerenciar políticas de envio](https://help.vtex.com/pt/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE).

## Política de envio e planilha de frete

Toda política de envio está associada a uma [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127), que é onde você cadastra informações como:

* Identificação da transportadora
* Valor de envio cobrado pela transportadora
* Intervalos de código postal ou [polígonos](https://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao--tutorials_138) válidos para envios

Uma vez que a planilha de frete é associada à política de envio, essas informações passam a fazer parte da sua operação logística na VTEX.

## Primeiras configurações logísticas

As configurações podem ser realizadas pelo Admin VTEX ou por API. Se você está começando a configurar sua [estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), a ordem de cadastro sugerida é a seguinte:

| **Assunto** | **Configuração via Admin VTEX** | **Configuração via API** |
| :--- | :--- | :--- |
| 1. Política de envio | [Criar uma política de envio](https://help.vtex.com/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) | [Gerenciar doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) | [Gerenciar estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |

