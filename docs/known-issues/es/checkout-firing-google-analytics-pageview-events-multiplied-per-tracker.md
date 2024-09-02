---
title: 'Disparo de eventos de páginas de Google Analytics multiplicados por rastreador'
id: 1XMmCfDdKVLEZ5SFq7TyrO
status: PUBLISHED
createdAt: 2022-05-12T14:51:41.067Z
updatedAt: 2022-11-25T21:49:12.329Z
publishedAt: 2022-11-25T21:49:12.329Z
firstPublishedAt: 2022-05-12T14:51:41.383Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: disparo-de-eventos-de-paginas-de-google-analytics-multiplicados-por-rastreador
locale: es
kiStatus: Fixed
internalReference: 350780
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La implementación de Google Analytics de Checkout dispara el evento pageview una vez por rastreador, incluso si el rastreador no está destinado a rastrear la información de pageview.

Tenga en cuenta que las etiquetas creadas para realizar un seguimiento de otros tipos de información, como una etiqueta de evento, se declaran como rastreadores.
Además, se crea un rastreador cada vez que se dispara el evento - así que si tienes una etiqueta para rastrear los diferentes pasos de compra como eventos, se pueden crear muchos rastreadores a medida que el usuario se mueve a través del flujo de compra.

En nuestra implementación para Checkout v5 / v6, cada paso de compra (declarado en la URL con un #hash diferente) desencadena una pageview a GA. Teniendo en cuenta los distintos rastreadores creados, dispararemos el evento pageview mucho más de lo que debería enviarse en cada cambio de paso en las páginas de carrito / pago.

Efectos secundarios:

Existe la posibilidad de registrar más pageviews de las que realmente se han producido (aunque GA parece deduplicarlas).

Las tiendas que utilizan la solución empresarial Google Analytics 360 están sujetas a limitaciones y reglas de precios basadas en la cantidad de información enviada a GA; los rastreadores acumulados y la información repetida pueden generar realmente un gran volumen de visitas, lo que es definitivamente crítico para estas tiendas.

Es posible recopilar más información sobre este tema analizando otros casos similares.




## Simulación



1- En una tienda, configure Google Tag Manager con un entorno especial que tenga las etiquetas para reproducir el problema.

2- La configuración debe consistir en una etiqueta de visualización de página GA común (versión UA) y una etiqueta de evento que se disparará en cada cambio de paso de compra.


3- Habilita el entorno junto con la vista de Tag Assistant.

4-Instalar la extensión de Chrome de Google Analytics Debugger ya que ayudará a mostrar los rastreadores creados y los eventos pageview que se envían a GA.

5-En la URL especial de arriba, activa la extensión, añade un artículo al carrito;

6- Navegue entre los pasos de la compra para ver los eventos multiplicados.







## Workaround



Es posible poner el fragmento `window.vtex.gtmId = ""`; en el archivo checkout6-custom.js y esto posiblemente evitará que los eventos de visualización de la página nativa sean rastreados evitando así la duplicación de información.

Esta solución puede tener efectos secundarios inesperados en otros eventos que también son activados por el checkout, como el enriquecimiento de dataLayer, y también en el hecho de que los eventos de visualización de página deben ser recogidos a su manera en una implementación GTM / creada a medida de GA.

