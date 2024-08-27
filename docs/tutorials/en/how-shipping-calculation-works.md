---
title: 'How shipping calculation works'
id: tutorials_116
status: PUBLISHED
createdAt: 2017-04-27T22:18:59.694Z
updatedAt: 2023-07-25T19:55:42.137Z
publishedAt: 2023-07-25T19:55:42.137Z
firstPublishedAt: 2017-04-27T23:00:43.230Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: how-shipping-calculation-works
locale: en
legacySlug: understanding-the-rule-of-priority-on-freight-calculation
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

During the shopping experience, when the customer enters their location at checkout, the VTEX platform analyzes the [shipping strategies](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) suitable for the order and displays the available shipping options to the customer.

>ℹ️ In the window display stage of the shopping flow, when the customer has not yet informed their address, the products displayed belong to the sellers already configured as [comprehensive sellers](https://help.vtex.com/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI) or using the [Region](https://help.vtex.com/en/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc) feature. These sellers are able to ship orders to all regions covered by the marketplace operation.

This article presents a general overview of the shipping calculation and is divided into the following sections:

- [Selecting logistics combinations](#selecting-logistics-combinations)
- [Configuring logistics priorities](#configuring-logistics-priorities)
- [Shipping time estimate](#shipping-time-estimate)

## Selecting logistics combinations

To determine which combination of logistics steps configured by the store is the best option for order fulfillment, the VTEX platform makes a selection of logistics combinations for each shipping method:

- **Delivery:** The customer receives the order at their address. 
- **Pickup:** The customer picks up the order from a [pickup point](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).

>ℹ️ Both delivery and pickup have the same selection criteria. However, the pickup option has one additional criterion, described further on in this article.

The selection of logistics combinations is made according to the criteria below, applied in the following order:

1. **Logistics route validation:** The logistics route combines the [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140), [loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) and [warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) able to cover the order criteria, including item availability and customer location. The VTEX platform analyzes which logistics routes cover the shipping in this first validation step. The following aspects are taken into account:
<ul>
  <li><b>Shipping rate template attributes:</b>i.e., size, weight, ZIP code range and modal. The <a href="https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127">shipping rate template</a> is filled out according to the <a href="https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE">carrier’s</a> service-providing contract. The carrier must fulfill the order per item features and customer location coverage.</li>
  <li><b>Inventory availability:</b> The stock is the physical location where items are stored, while <a href="https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139">inventory</a> is the list of SKUs of available stocks for sale. This criterion confirms the order items are available in a stock, and that the stock has at least one loading dock available.</li>
</ul>
<br>
  >⚠️ In case of a [kit](https://help.vtex.com/en/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28) shipment, there are two conditions:
>
> * The kit components must have the same [loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).
>
> * The kit components must be available in the [inventory](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/2XyUVa0UKMyHTmwqyA5Bx6).
>
> For more information, please see the article [How to calculate the kit shipping rate](https://help.vtex.com/en/tutorial/como-e-calculado-o-frete-do-kit--frequentlyAskedQuestions_154).

2. **Inventory prioritization:** The previously selected logistics routes are organized with the [inventory](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) as a priority criterion. The lower the order of SKU quantity in stock, the higher the priority of the logistics route selection. So inventories with small item quantities are not blocked out. The logistics routes are listed in order, placing the top priority item in the first place and the lowest priority item in the last place.
3. **Package grouping:** The VTEX platform calculates how the item orders may be split into packages to estimate the division into packages and [consignments](https://help.vtex.com/en/tutorial/como-funciona-a-remessa--tutorials_118).
4. **Calculating price and shipping time:** The VTEX platform calculates the package price and shipping time, reordering the priority list of logistics routes according to the criteria below, in the following order:
<ul>
  <li>Lowest price</li>
  <li>Shortest time</li>
  <li>Lowest package split</li>
  <li><a href="https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro">Priority loading docks</a></li>
</ul>
<br>
  >ℹ️ When there is a tie between loading docks, the tiebreak criterion is the [overhead](https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW), which represents a value in number of days that will determine the most advantageous loading dock for a given shipment. The lower the overhead, the higher the chances for a loading dock to be selected. Please note that the overhead is not considered when calculating the shipping time.

5. **Exclusive criterion for the pickup option:** There is an additional step in the selection when analyzing [pickup points](https://help.vtex.com/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). The VTEX platform creates a list of eligible pickup points, using as criterion the shortest distance between the pickup point and the customer's location.

The final result of the logistics configuration selection is an ordered list of eligible logistics routes. During checkout, however, the customer will be able to choose from up to two carrier options for each shipping method:

- **Delivery:** The fastest and cheapest option.
- **Pickup:** The fastest and cheapest option.

## Configuring logistics priorities

You can configure different priorities and criteria for [logistics](https://help.vtex.com/en/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP)-related steps in the VTEX Admin:

- **Loading docks:** Priorities are configured when [adding a new loading dock](https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
- **Shipping rates:** The shipping rate prices are configured in the [shipping rates](https://help.vtex.com/en/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM), except for the [loading dock rate](https://help.vtex.com/en/tutorial/custo-final-do-envio--5bwhIO108VA5Y2YOpef9lV), which is an optional value, configured when adding a new loading dock to a warehouse.
- **Delivery time:** The shipping time is configured in the [SLA estimate](#shipping-time-estimate).
- **Package splitting:** The adopted criteria are configured in the Checkout module. Learn more in [package splitting](https://help.vtex.com/en/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV).

## Shipping time estimate

SLA stands for _Service Level Agreement_, and in [logistics](https://help.vtex.com/en/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP) it refers to the shipping time estimate for a customer's order, which must agree with the terms established during purchase.

The SLA is calculated using the following fields and parameters:

- [Shipping policy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3): `Business hours`, `Weekends and Holidays`, `Scheduled delivery` and `TimeCost` ([shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127)).
- [Loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj): `TimeCost`.

A shipping time estimate can be obtained using the [Shipping simulator](https://help.vtex.com/en/tutorial/simulador-de-envio--tutorials_144), which considers the VTEX store [shipping strategies](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3).

>ℹ️ The [Shipping simulator](https://help.vtex.com/en/tutorial/simulador-de-envio--tutorials_144) result is only an approximation since the determining factors are only provided at checkout, such as carrier availability at the time of purchase, payment confirmation time and [white label sellers' selection](https://help.vtex.com/en/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) result.

## Learn more	

- [Shipping strategy](https://help.vtex.com/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
- [Carriers on VTEX ](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)
- [How the reservation works](https://help.vtex.com/en/tutorial/como-a-reserva-funciona--tutorials_92)
- [Logistics](https://help.vtex.com/en/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP)
- [Managing warehouses](https://help.vtex.com/en/tutorial/gerenciar-estoque--tutorials_137)
