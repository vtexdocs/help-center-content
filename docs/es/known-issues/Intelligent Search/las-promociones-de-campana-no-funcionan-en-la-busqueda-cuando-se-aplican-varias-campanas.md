---
title: "Las promociones de campaña no funcionan en la Búsqueda cuando se aplican varias campañas"
id: 6IAkiAoVsWqB7m3lzKlin8
status: PUBLISHED
createdAt: 2025-04-08T19:07:00.428Z
updatedAt: 2025-04-08T19:07:01.316Z
publishedAt: 2025-04-08T19:07:01.316Z
firstPublishedAt: 2025-04-08T19:07:01.316Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: las-promociones-de-campana-no-funcionan-en-la-busqueda-cuando-se-aplican-varias-campanas
locale: es
kiStatus: Backlog
internalReference: 1207746
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando más de un valor de campaña está presente en la sesión/segmento, las promociones no se activan correctamente. No se tendrá en cuenta ninguna de las campañas.


##

## Simulación



- Cree dos campañas para un contexto determinado;
- Cree una promoción con un porcentaje de descuento para cualquiera de estas campañas;
- Inicie sesión con un cliente que pueda recibir ambas campañas;
- Observar la cookie Segmento con dos campañas, siguiendo el patrón `"aaaaaaaa-aaaa-aaaa-aaaaaaaaaaaa,bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbbbb"` para su cadena;
- Observe que la promoción no se aplicará a los productos esperados.



## Workaround


No hay solución disponible, pero la promoción funcionará correctamente si sólo se aplica una única campaña al contexto.





