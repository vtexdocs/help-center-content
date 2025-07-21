---
title: "Divergencia en el peso del kit tras los cálculos con decimales en el peso"
id: 4wWyTmTAd2h2oxw5HtGn6V
status: PUBLISHED
createdAt: 2022-09-13T19:31:43.534Z
updatedAt: 2022-11-25T21:58:57.873Z
publishedAt: 2022-11-25T21:58:57.873Z
firstPublishedAt: 2022-09-13T19:31:44.068Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: divergencia-en-el-peso-del-kit-tras-los-calculos-con-decimales-en-el-peso
locale: es
kiStatus: Backlog
internalReference: 657186
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En ciertos casos de kits, la política de envío puede no estar disponible, esto puede suceder debido a la lógica utilizada para los cálculos que involucran el peso.
Inicialmente dividimos el peso total del kit por la cantidad de artículos, el resultado se toma como el peso unitario de cada artículo, y este valor se presenta con 7 decimales después de la coma. En un segundo momento, hacemos el cálculo inverso, multiplicando el peso unitario por la cantidad de artículos, pero utilizando sólo 4 decimales, lo que genera un resultado diferente al del primer cálculo, y puede llevar al sistema a considerar un valor diferente al real del peso del kit.



## Simulación


Añada el SKU de un kit a la simulación,
Divida el valor del peso total por cada artículo, considere utilizar aquí 7 decimales;
Ahora con el valor resultante de la cuenta anterior haga el siguiente cálculo; multiplique el peso unitario por la cantidad de artículos, considere aquí 4 decimales;
Tenga en cuenta que el valor del peso considerado por el sistema será diferente;



## Workaround


No tiene solución

P.D.: Añade imágenes y archivos adjuntos para reforzar tu descripción

