---
title: "Política de envío no priorizada por 'Motivo: Descartado con carácter prioritario' incluso con mejor coste"
id: p1oTHG7CuYITViV4uFZEQ
status: PUBLISHED
createdAt: 2022-05-10T18:05:57.097Z
updatedAt: 2022-11-25T22:00:01.499Z
publishedAt: 2022-11-25T22:00:01.499Z
firstPublishedAt: 2022-05-10T18:05:57.473Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: politica-de-envio-no-priorizada-por-motivo-descartado-con-caracter-prioritario-incluso-con-mejor-coste
locale: es
kiStatus: Backlog
internalReference: 379685
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el cliente establece un coste desde el almacén hasta el muelle en la tarifa de envío, puede afectar a la selección de la política de envío. Esto puede ocurrir porque el coste del muelle no se incluye en la priorización de las pólizas de envío. Por lo tanto, se puede priorizar una política de envío que sea más cara para el consumidor, ya que el cálculo del valor del flete no tuvo en cuenta el coste del muelle.



## Simulación


No es sencillo simular este comportamiento. He aquí un ejemplo:

Tenemos dos políticas de envío diferentes con el mismo método de envío: **X** y **Y**. La política de envío **Y** tiene prioridad sobre la **X**, aunque sea más cara para el consumidor.


- **X**: 7,00 dólares de envío + 0,00 dólares de muelle = **7,00 dólares <-- MÁS BARATO**
- **Y**: $6.00 envío +$2.00 muelle = **$8,00 <-- SELECCIONADO**

En este caso, se ha seleccionado la política de envío **Y**, que según los cálculos no tendría ningún sentido, ya que el coste final es superior a **X**. Pero como los cálculos no consideran el coste del muelle, pues:

- **X**: 7,00 dólares de envío
- **Y**: $6.00 de envío **<-- MÁS BARATO Y SELECCIONADO**



## Workaround



No hay solución disponible para este problema.

