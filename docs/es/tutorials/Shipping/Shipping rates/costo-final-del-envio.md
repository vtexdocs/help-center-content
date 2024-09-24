---
title: 'Costo final del envío'
id: 5bwhIO108VA5Y2YOpef9lV
status: PUBLISHED
createdAt: 2021-08-25T12:30:32.699Z
updatedAt: 2021-08-25T14:39:54.346Z
publishedAt: 2021-08-25T14:39:54.346Z
firstPublishedAt: 2021-08-25T13:08:08.704Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: total-shipping-cost
locale: es
legacySlug: costo-final-del-envio
subcategoryId: 7uJcyu0VawEm8ggqKu404u
---


El costo final del envío es el precio total que se cobrará al cliente final por la entrega del pedido. Esta cifra es la suma de la tarifa de envío y los costos de manipulación entre el almacén y el muelle. 

Vea cómo se calcula cada tarifa:

* **[Tarifa de envío](https://help.vtex.com/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM)**: es la tarifa registrada con la política de envío, y corresponde a la tarifa de la transportadora o de un punto de recogida. No tiene en cuenta los costos de muelle y almacén. Esta tarifa considera:
    * Un costo fijo de flete.
    * [Adicionales de flete](https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV): adicional de peso, adicional de precio, adicional de seguro y adicional de flete. 

    La tarifa de envío se calcula mediante la suma del costo fijo y los adicionales de flete registrados. 

* **Tarifa del muelle:** al vincular un almacén a un muelle, es posible añadir una tarifa para esta integración.
    * Después de agregar un muelle, indique el valor deseado en el campo `Tarifa adicional`.

Así que, en general, el costo final del envío puede calcularse así:

![Custo-final-envio-ES](//images.ctfassets.net/alneenqid6w5/5qeoN5AQPvoWyOPcNW3J6q/48b3d941065ab47cb55c7b4590b993bd/Custo-final-envio-ES.svg)

>❗ Si el **adicional de precio** es inferior al **adicional de seguro,** la tarifa considerada es el adicional de seguro. El adicional de precio no se tomará en cuenta en el cálculo de la tarifa final.<p>
> La elección de la transportadora para el envío de los ítems considera únicamente el precio de la Tarifa de envío, sin tener en cuenta los costos del muelle y del almacén (si existen). Para simular el escenario de entrega para el cliente utilice el[Simulador de envío](https://help.vtex.com/pt/tutorial/simulacao-de-frete--tutorials_144).
