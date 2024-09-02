---
title: 'FetchMore aporta valores repetidos entre el origen y el destino'
id: 1Vx0YekKCDaf8t6hocU1iv
status: PUBLISHED
createdAt: 2023-05-31T16:39:58.224Z
updatedAt: 2023-05-31T16:39:58.728Z
publishedAt: 2023-05-31T16:39:58.728Z
firstPublishedAt: 2023-05-31T16:39:58.728Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: fetchmore-aporta-valores-repetidos-entre-el-origen-y-el-destino
locale: es
kiStatus: Scheduled
internalReference: 835396
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La función fetchMore está trayendo entre la primera y la segunda página algunos valores duplicados y esto hace que la página muestre repetidamente algunos de los productos.


##

## Simulación



En algunas cuentas el Botón que Obtiene más productos está trayendo valores repetidos, esto sucede porque el componente pasa 12 ítems (0 a 11) y la consulta realizada en GraphQL considera 18 productos por lo que 6 productos pueden mostrarse repetidamente.

El botón mostrar más está utilizando diferentes infos para traer el número de productos a la pantalla.



## Workaround


¿Existe alguna solución para este error? En caso afirmativo, descríbala aquí. En caso negativo, escriba "N/A" o "No hay solución disponible". No elimine esta sección si no hay solución, por favor.





