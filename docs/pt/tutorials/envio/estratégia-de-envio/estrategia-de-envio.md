---
title: 'Estratégia de envio'
id: 58vLBDbjYVQzJ6rRc5QNz3
status: PUBLISHED
createdAt: 2021-07-15T17:04:23.563Z
updatedAt: 2024-11-05T17:35:31.468Z
publishedAt: 2024-11-05T17:35:31.468Z
firstPublishedAt: 2021-07-15T17:27:37.590Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-strategy
legacySlug: estrategia-de-envio, qual-a-diferenca-entre-estoque-e-doca
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Estratégia de envio é a relação entre estoque, doca e política de envio. A forma que   estoque, doca e política de envio se comunicam definirá a combinação de estrutura para entrega dos pedidos da loja.

![shipping_strategy_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estratégia-de-envio/estrategia-de-envio_1.png)

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                **[Estoque](/pt/docs/tutorials/estoque)**
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Porção de mercadorias armazenadas num depósito ou numa loja. Funciona como ferramenta de controle de disponibilidade de produtos.
            </td>
    </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                **[Doca**](/pt/docs/tutorials/doca)
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Local de distribuição do estoque. Funciona como uma área de armazenamento de produtos para entrega.
            </td>
    </tr>
    <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                **[Política de Envio](/pt/docs/tutorials/politica-de-envio)**
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">Conjunto de regras que definem as opções e condições de frete que serão apresentadas ao consumidor no momento da finalização da compra. 
            </td>
    </tr>
</table>

## Primeiras configurações logísticas

As configurações podem ser realizadas pelo Admin VTEX ou por API. Se você está começando a configurar sua estratégia de envio, a ordem de cadastro sugerida é a seguinte:

| **Assunto** | **Configuração via Admin VTEX** | **Configuração via API** |
| :--- | :--- | :--- |
| 1. [Política de envio](/pt/docs/tutorials/politica-de-envio) | [Criar uma política de envio](/pt/docs/tutorials/criar-uma-politica-de-envio) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Doca](/pt/docs/tutorials/doca) | [Gerenciar doca](/pt/docs/tutorials/gerenciar-doca) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Estoque](/pt/docs/tutorials/estoque) | [Gerenciar estoque](/pt/docs/tutorials/gerenciar-estoque) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |

