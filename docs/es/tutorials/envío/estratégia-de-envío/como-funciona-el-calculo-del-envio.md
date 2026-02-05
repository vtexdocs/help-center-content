---
title: 'Cómo funciona el cálculo del envío'
id: tutorials_116
status: PUBLISHED
createdAt: 2017-04-27T22:18:59.694Z
updatedAt: 2023-07-25T19:55:42.137Z
publishedAt: 2023-07-25T19:55:42.137Z
firstPublishedAt: 2017-04-27T23:00:43.230Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-shipping-calculation-works
legacySlug: como-funciona-el-calculo-del-flete
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Cuando, durante una experiencia de compra, el consumidor ingresa su ubicación en el _checkout_, la plataforma VTEX analiza cuáles son las [estrategias de envío](/es/docs/tutorials/estrategia-de-envio) que mejor se adaptan al pedido y ofrece al consumidor las opciones disponibles.

> ℹ️ En la etapa de la vitrina del flujo de compra, y cuando el consumidor aún no ingresó su domicilio, los productos que aparecen son los de *sellers* con la funcionalidad [Región](/es/docs/tutorials/configurar-el-precio-y-la-disponibilidad-de-skus-por-region) configurada o los [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura), es decir, *sellers* que pueden enviar pedidos a todas las regiones cubiertas por la operación del *marketplace*.

Este artículo brinda un panorama general sobre cómo se calcula el envío y se divide en tres secciones:

- [Selección de combinaciones de logística](#seleccion-de-combinaciones-de-logistica)
- [Configuraciones de prioridades en la logística](#configuraciones-de-prioridades-en-la-logistica)
- [Estimación del tiempo de envío](#estimacion-del-tiempo-de-envio)

## Selección de combinaciones de logística

Para completar el pedido, la tienda configura combinaciones de logística y, para determinar cuál es la más ventajosa, la plataforma VTEX selecciona diferentes combinaciones para cada tipo de envío:

- **Entrega:** el consumidor recibe el pedido en el domicilio informado.
- **Recogida:** el consumidor retira el pedido en un [punto de recogida](/es/docs/tutorials/puntos-de-recogida).

> ℹ️ Los tipos de envío «entrega» y «recogida» siguen los mismos criterios de selección. El envío tipo «recogida» tiene un criterio adicional que mencionaremos más adelante.

Para su selección, las combinaciones de logística siguen los criterios y el orden de aplicación que se indica a continuación:

1. **Validación de la ruta de logística:** la ruta de logística es el conjunto de la [política de envío](/es/docs/tutorials/politica-de-envio), el [muelle de carga](/es/docs/tutorials/muelles) y el [almacén](/es/docs/tutorials/almacen) que cumple con los criterios de un pedido, y tiene en cuenta la disponibilidad de ítems y la ubicación del consumidor. En esta primera etapa de validación, la plataforma VTEX analiza cuáles son las rutas de logística que cubren el envío. Se tienen en cuenta los aspectos a continuación:
<ul>
  <li>**Características de la plantilla de flete:**por ejemplo, las dimensiones, el peso, los rangos de código postal y las modalidades. La [plantilla de flete](/es/docs/tutorials/plantilla-de-flete) se rellena con la información del contrato de servicio que proporcionan las [transportadoras](/es/docs/tutorials/transportadoras-en-vtex). Cada transportadora debe ser capaz de cumplir con el pedido en cuanto a las características de los ítems y al área de cobertura de la ubicación del consumidor.</li>
  <li>**Disponibilidad de stock:** el almacén es el lugar físico donde se guardan los ítems, mientras que el [stock](/es/docs/tutorials/gestionar-items-en-inventario) es la relación de los SKU de los ítems disponibles para la venta. Este criterio determina si los ítems del pedido están disponibles en un almacén y de si ese almacén tiene, al menos, un muelle de carga disponible.
</li>
</ul>
<br>
  > ⚠️ Si se debe enviar un [kit](/es/docs/tutorials/que-es-un-kit), hay dos condiciones: <ul> <li>Los componentes del kit deben tener el mismo[muelle de carga](/es/docs/tutorials/muelles).</li> <li>Los componentes del kit deben estar disponibles en el [stock](/es/docs/tracks/stock).</li> </ul> Para más información, consulta el artículo [Cómo se calcula el envío de un kit](/es/docs/tutorials/como-se-calcula-el-envio-de-un-kit).

2. **Prioridad del stock:** las rutas de logística seleccionadas anteriormente se organizan considerando al [stock](/es/docs/tutorials/gestionar-items-en-inventario) como criterio de prioridad. Cuantos menos SKU del pedido haya en stock, más prioridad tendrá la ruta de logística en la selección para evitar que se retenga stock con pocos ítems. A partir de esto, se crea una lista de rutas de logística ordenadas de mayor a menor prioridad, es decir, el ítem con más prioridad ocupa el primer lugar y el ítem con menos prioridad ocupa el último lugar.
3. **Agrupamiento de paquetes:** la plataforma VTEX calcula la separación de los ítems del pedido en paquetes con el fin de estimar las divisiones de paquetes y [grupos de envíos](/es/docs/tutorials/configurar-grupos-de-envio).
4. **Cálculo del precio y plazo de envío:** la plataforma VTEX calcula los plazos y los precios de los paquetes para reordenar la lista de prioridad de las rutas de logística según los criterios y el orden de aplicación a continuación:
<ul>
  <li>Menor costo</li>
  <li>Menor plazo</li>
  <li>Menor división de paquetes</li>
  <li>[Muelles de carga prioritarios](/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro)</li>
</ul>
<br>
  > ℹ️ Cuando hay un empate entre dos muelles de carga, el criterio de desempate es el *[overhead](/es/docs/tutorials/gestionar-el-muelle)* o sobrecarga, es decir, el valor en días para elegir el muelle que es más beneficioso para un determinado envío. Cuanto menor sea el overhead o sobrecarga, más posibilidades habrá de que se elija ese muelle. Cabe mencionar que el overhead o sobrecarga no se tiene en cuenta al momento de calcular el tiempo de envío.

5. **Etapa exclusiva para el envío del tipo «recogida»:** existe un paso adicional en la selección para analizar los [puntos de recogida](/es/docs/tutorials/puntos-de-recogida). La plataforma VTEX crea una lista con los puntos de recogida posibles utilizando el criterio de menor distancia entre el punto de recogida y la ubicación del consumidor.

El resultado final de la selección de las configuraciones de logística es una lista ordenada con las posibles rutas de logística. Sin embargo, en el _checkout_ de la experiencia de compra del consumidor solo se presentan hasta dos opciones de transportadoras para cada tipo de envío:

- **Entrega:** la opción más rápida y más económica.
- **Recogida:** la opción más rápida y más económica.

## Configuraciones de prioridades en la logística

En el Admin VTEX, se pueden configurar criterios y prioridades distintas para las etapas relacionadas con la [logística](/es/docs/tutorials/fulfillment-logistica-vtex):

- **Muelles de carga:** las prioridades se configuran en los [campos de registro del muelle de carga](/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
- **Flete:** los precios del flete se configuran en las [tarifas de envío](/es/docs/tutorials/tarifas-de-envio), excepto la [tarifa del muelle de carga](/es/docs/tutorials/costo-final-del-envio), que es un valor adicional opcional que se configura al agregar el muelle de carga a un almacén.
- **Plazo:** el tiempo para el envío se configura en la [estimación del SLA](#estimacion-del-tiempo-de-envio).
- **División de paquetes:** los criterios adoptados se configuran en el módulo _Checkout_. Obtén más información en [División de pedidos y división de entregas](/es/docs/tutorials/division-de-pedidos-y-division-de-entregas).

## Estimación del tiempo de envío

La sigla SLA proviene de _Service Level Agreement_ (Acuerdo del nivel de servicio) y, en [logística](/es/docs/tutorials/fulfillment-logistica-vtex), hace referencia a la estimación del tiempo de envío de un pedido al consumidor, el cual debe corresponderse con las condiciones firmadas en la compra.

Se utilizan los siguientes campos y parámetros para calcular el SLA:

- [Política de envío](/es/docs/tutorials/estrategia-de-envio): `Horario laboral`, `Fines de semana y feriados`, `Entrega programada` y `TimeCost` ([plantilla de flete](/es/docs/tutorials/plantilla-de-flete)).
- [Muelle de carga](/es/docs/tutorials/muelles): `Tiempo de costo`.

Se puede obtener una estimación del tiempo de envío a través del [Simulador de envío](/es/docs/tutorials/simulador-de-envio), ya que la simulación tiene en cuenta las configuraciones de las [estrategias de envío](/es/docs/tutorials/estrategia-de-envio) de la tienda VTEX.

> ℹ️ El resultado obtenido con el [Simulador de envío](/es/docs/tutorials/simulador-de-envio) es solo un aproximado, ya que recién en el checkout se conocen los factores determinantes, por ejemplo, la disponibilidad de la transportadora en el horario de la compra, el tiempo de confirmación del pago y el resultado de la [selección de sellers white label](/es/docs/tutorials/seleccion-de-sellers-white-label).

## Más información	

- [Estrategia de envío](/es/docs/tutorials/estrategia-de-envio)
- [Transportadoras en VTEX](/es/docs/tutorials/transportadoras-en-vtex)
- [Cómo se maneja la reserva](/es/docs/tutorials/como-se-maneja-la-reserva)
- [Logística](/es/docs/tutorials/fulfillment-logistica-vtex)
- [Gestionar almacenes](/es/docs/tutorials/gestionar-almacenes)
