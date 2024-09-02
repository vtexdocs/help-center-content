---
title: 'Usando slider-layout con el prop navigationStep a 1 causa que los últimos puntos estén vacíos'
id: 28hbmflHNhAQmHN51Y6abX
status: PUBLISHED
createdAt: 2023-09-29T14:41:34.387Z
updatedAt: 2023-09-29T14:57:48.863Z
publishedAt: 2023-09-29T14:57:48.863Z
firstPublishedAt: 2023-09-29T14:41:35.227Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: usando-sliderlayout-con-el-prop-navigationstep-a-1-causa-que-los-ultimos-puntos-esten-vacios
locale: es
kiStatus: Backlog
internalReference: 910125
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando tenemos un bloque slider-layout con la prop `navigationStep` puesta a 1 y el `itemsPerPage` diferente de 1 el último punto estará vacío y no es posible borrarlo.


##

## Simulación



- Crear un nuevo bloque deslizante
- Establece el `navigationStep` en 1
- Establece `itemsPerPage` en un valor diferente a 1
- Utilizando las flechas del deslizador, intenta navegar hasta el último punto del deslizador
- Verás que el último punto está vacío



## Workaround


N/A





