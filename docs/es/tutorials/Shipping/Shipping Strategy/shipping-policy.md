---
title: 'Shipping policy '
id: tutorials_140
status: PUBLISHED
createdAt: 2017-04-27T22:17:12.502Z
updatedAt: 2024-01-31T01:24:50.628Z
publishedAt: 2024-01-31T01:24:50.628Z
firstPublishedAt: 2017-04-27T23:00:45.247Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-policy
locale: en
legacySlug: adding-a-carrier, manage-carrier
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

[Shipping strategy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) is a set of essential [logistics](https://help.vtex.com/en/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) settings in a VTEX store, which refers to the combination of the following aspects:

1. Shipping policy
2. [Warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
3. [Loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)

The image below shows how these concepts relate to each other:

![shipping_strategy_EN](https://images.ctfassets.net/alneenqid6w5/1LdEuL3gjF12uwFj4ya6OL/9f3db7829e85f1c910daf1b81bacd127/shipping_strategy_EN.png)

**Shipping policy** is a set of rules and settings that specify the shipping options that will be displayed to customers at checkout. When calculating the [shipping time for an order](https://help.vtex.com/en/tutorial/como-funciona-o-calculo-de-envio--tutorials_116), the VTEX platform takes into account several settings from the shipping policy, including:

* [Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)
* [Carrier business hours](https://help.vtex.com/en/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS)
* [Holidays](https://help.vtex.com/en/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk)
* [Additional shipping costs](https://help.vtex.com/en/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV)
* [Scheduled delivery](https://help.vtex.com/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)
* [Pickup points](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R)

To learn how to create a shipping policy, check the [Creating a shipping policy](https://help.vtex.com/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) article. For information on management, read the [Managing shipping policies](https://help.vtex.com/en/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE) article.

## Shipping policy and shipping rate template

Every shipping policy is associated with a [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127), where you enter information such as:

* Carrier identification
* Carrier shipping cost
* Postal code ranges or [polygons](https://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao--tutorials_138) valid for shipping

Once the shipping rate template is associated with the shipping policy, this information becomes part of your VTEX logistics operation.

## Initial logistics settings

You can configure initial settings through the VTEX Admin or via API. If you are starting to configure your [shipping strategy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), we recommend the following order:

| **Topic** | **Configuration via VTEX Admin** | **Configuration via API** |
| :--- | :--- | :--- |
| 1. Shipping policy | [Creating a shipping policy](https://help.vtex.com/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) | [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) |
| 2. [Warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) | [Managing warehouses](https://help.vtex.com/en/tutorial/gerenciar-estoque--tutorials_137) | [Create/update warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/warehouses) |
| 3. [Loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) | [Managing loading docks](https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) | [Create/update dock](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/configuration/docks) |

