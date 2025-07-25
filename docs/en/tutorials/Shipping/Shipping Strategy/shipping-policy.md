---
title: 'Shipping policy '
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
locale: en
legacySlug: adding-a-carrier, manage-carrier
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

[Shipping strategy](/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) is a set of essential [logistics](/en/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) settings in a VTEX store, which refers to the combination of the following aspects:

* Shipping policy
* [Loading dock](/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)
* [Warehouse](/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)

The image below shows how these concepts relate to each other:

![shipping_strategy_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Shipping/Shipping%20Strategy/shipping-policy_1.png)

**Shipping policy** is a set of rules and settings that specify the shipping options that will be displayed to customers at checkout. When calculating the [shipping time for an order](/en/tutorial/como-funciona-o-calculo-de-envio--tutorials_116), the VTEX platform takes into account several settings from the shipping policy, including:

* [Carrier](/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)
* [Carrier business hours](/en/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS)
* [Holidays](/en/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk)
* [Additional shipping costs](/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV)
* [Scheduled delivery](/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)
* [Pickup points](/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R)

To learn how to create a shipping policy, check the [Creating a shipping policy](/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) article. For information on management, read the [Managing shipping policies](/en/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE) article.

## Shipping policy and shipping rate template

Every shipping policy is associated with a [shipping rate template](/en/tutorial/planilha-de-frete--tutorials_127), where you enter information such as:

* Carrier identification
* Carrier shipping cost
* Postal code ranges or [polygons](/pt/tutorial/gerenciar-geolocalizacao--tutorials_138) valid for shipping

Once the shipping rate template is associated with the shipping policy, this information becomes part of your VTEX logistics operation.

## Initial logistics settings

You can configure initial settings through the VTEX Admin or via API. If you are starting to configure your [shipping strategy](/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), we recommend the following order:

| **Topic** | **Configuration via VTEX Admin** | **Configuration via API** |
| :--- | :--- | :--- |
| 1. Shipping policy | [Creating a shipping policy](/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Loading dock](/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) | [Managing loading docks](/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |
| 3. [Warehouse](/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) | [Managing warehouses](/en/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |

