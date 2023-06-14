---
title: 'Comportamiento inesperado en el diseño del deslizador cuando se utilizan los accesorios infinite=true y navigationStep=1'
id: 2uSG9sqj32yL3wHt0SUnOO
status: PUBLISHED
createdAt: 2022-02-01T19:49:07.658Z
updatedAt: 2022-11-25T22:13:51.355Z
publishedAt: 2022-11-25T22:13:51.355Z
firstPublishedAt: 2022-02-01T21:08:05.816Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: comportamiento-inesperado-en-el-diseno-del-deslizador-cuando-se-utilizan-los-accesorios-infinitetrue-y-navigationstep1
locale: es
kiStatus: Backlog
internalReference: 462895
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se produce un comportamiento inesperado cuando se utiliza vtex.slider-layout, si estos dos props se establecen juntos:


- infinite: true
- navigationStep: 1

En este caso, cuando el deslizador se desplaza usando la flecha derecha, muestra la siguiente tarjeta, de una en una, como era de esperar debido al parámetro navigationStep=1. Pero cuando llega a la última tarjeta, muestra la primera, y después la segunda pasa a ser la primera de la lista, y va hacia atrás y hacia delante al pulsar la flecha derecha.

El comportamiento esperado sería hacer retroceder el deslizador hasta la primera tarjeta cuando llega a la última, y comenzar el paso uno a uno de nuevo.



## Simulación


Cree un diseño deslizante utilizando los dos valores prop mencionados anteriormente y compruebe su comportamiento en el sitio web.



## Workaround


Evite utilizar ambas propiedades con esos valores específicos juntos.

Si el comportamiento esperado es finalmente necesario para la página, es posible crear un componente personalizado para lograr este resultado.

