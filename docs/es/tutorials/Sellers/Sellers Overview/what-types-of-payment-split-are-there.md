---
title: '¿Cuáles son los tipos de split de pago?'
id: frequentlyAskedQuestions_5174
status: ARCHIVED
createdAt: 2019-01-24T20:46:02.419Z
updatedAt: 2021-09-09T21:57:07.118Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:12:12.544Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: cuales-son-los-tipos-de-split-de-pago
locale: es
legacySlug: cuales-son-los-tipos-de-split-de-pago
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

En este artículo, explicamos los tipos de split de pago entre sellers en VTEX. Hay tres escenarios posibles:

## Modelo Convencional con marketplace responsable del pago

En un escenario en el que el marketplace es el responsable del pago, ningún split es realizado. Los pagos se realizan directamente para el gateway del marketplace, que tiene la responsabilidad de retransmitir los valores debidos a cada uno de los sellers involucrados en la transacción.

## Modelo Split con Sellers responsables del pago

En un escenario en el que los sellers son responsables del pago, pueden ocurrir dos casos:

- En el primer caso, tenemos productos de solamente un seller en el carrito. Con esto, los pagos se realizan directamente al gateway del seller, que tiene la responsabilidad de retransmitir los valores debidos a su marketplace.
- En el segundo caso, tenemos productos de distintos sellers en el carrito. Cuando esto ocurre, el checkout realiza el split de los pagos para los respectivos sellers. En el caso de que los sellers tengan distintas condiciones de pago entre sí, se exhibirán en el Checkout las condiciones de pago que existan en común entre ambos.

## Modelo Split Híbrido: Convencional + Split

Combina las dos modalidades expuestas arriba. En este modelo, parte del pago se queda en el marketplace y la otra parte es enviada directamente a los sellers. 

Esta modalidad ocurre cuando es utilizado un vale del marketplace como medio de pago y cuando tenemos solamente un seller en el carrito. 

Para que esto ocurra, es necesario que el marketplace rellene la opción "Desejo incluir mis formas de pago" en el momento del registro del seller en el admin de VTEX. Para configurar este feature, el comerciante debe:

1. Acceda al __Admin_ de VTEX
2. Acceda al módulo __Marketplace__
3. Haga click en __Gestión__
4. Para modificar la configuración de un seller ya existente, haga clic en **Cambiar/Visualizar**. Si va a crear un nuevo seller, basta hacer clic en el botón **Nuevo Seller**.
5. Seleccione la opción **Deseo incluir mis formas de pago*.
