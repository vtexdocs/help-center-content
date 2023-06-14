---
title: 'Pickup point disregarded based on priority'
id: 3bbsm8TELPBa0DpFtnlAGz
status: PUBLISHED
createdAt: 2021-09-29T14:38:08.930Z
updatedAt: 2022-12-22T20:41:01.800Z
publishedAt: 2022-12-22T20:41:01.800Z
firstPublishedAt: 2021-09-29T14:49:34.443Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: pickup-point-disregarded-based-on-priority
kiStatus: Backlog
internalReference: 
---

## Summary

When a customer is completing a purchase, the system calculates the available delivery options for the chosen location and displays them at checkout. For example, suppose that for a location there are two pickup points named with the same[ shipping method](https://help.vtex.com/en/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126), but associated with different [shipping policies](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140). When calculating which pickup points will be available to the customer, the platform only displays one of them.

In this case, the logistics module has disregarded the other pickup point using its prioritization algorithm. During this process, only one of the shipping methods with the same name is displayed to the customer. Learn more in the article about [shipping policy divergence](https://help.vtex.com/en/faq/por-que-minha-transportadora-nao-aparece-no-checkout--frequentlyAskedQuestions_165#carrier-type-conflict).

When [simulating a delivery](https://help.vtex.com/en/tutorial/simulador-de-envio--tutorials_144) for which there are shipping methods with the same name for pickup points in different shipping policies, only one will be available. The other pickup points will be disregarded and will not be displayed by the interface, or will be displayed along with the message: Disregarded based on priority".


## Simulation


To simulate the described scenario, at least two shipping policies serving the same delivery region must have been previously registered. These shipping policies must have shipping methods with the same name, and at least one pickup point must be associated with each one.

1. Open the [shipping simulator;](https://help.vtex.com/en/tutorial/simulador-de-envio--tutorials_144)
2. Select a SKU available at pickup points compatible with the scenario described above;
3. Run the simulation;
4. See which pickup point has been selected;
5. Check which pickup points were disregarded and note the message displayed.

![KIpontoderetirada EN](//images.ctfassets.net/alneenqid6w5/6TLSPTSA7E5EG2sevnDYXf/097a4d4b13f79150adf8f2eda2e7a888/KIpontoderetirada_EN.png)

The pickup point was disregarded because there was another shipping method already named as **SCS Mall**.


## Workaround


There are two possible workarounds:

- Avoiding using the same name for the shipping methods of two pickup points that operate in the same region. For example, in the case of the simulation described, the solution would be to rename one of the shipping methods.
- Registering a single shipping policy for both pickup points. In this way, there would be two pickup points with shipping methods with the same name. We would not fall into the scenario described above, as both pickup points would be associated with the same shipping policy.


