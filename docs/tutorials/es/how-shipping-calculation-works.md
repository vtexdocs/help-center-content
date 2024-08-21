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
slug: como-funciona-el-calculo-del-envio
locale: es
legacySlug: como-funciona-el-calculo-del-flete
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Cuando, durante una experiencia de compra, el consumidor ingresa su ubicación en el _checkout_, la plataforma VTEX analiza cuáles son las [estrategias de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) que mejor se adaptan al pedido y ofrece al consumidor las opciones disponibles.

<div class = "alert alert-info">
En la etapa de la vitrina del flujo de compra, y cuando el consumidor aún no ingresó su domicilio, los productos que aparecen son los de <i>sellers</i> con la funcionalidad <a href="https://help.vtex.com/es/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc">Región</a> configurada o los <a href="https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI">sellers de extensa cobertura</a>, es decir, <i>sellers</i> que pueden enviar pedidos a todas las regiones cubiertas por la operación del <i>marketplace</i>.
</div>

Este artículo brinda un panorama general sobre cómo se calcula el envío y se divide en tres secciones:

- [Selección de combinaciones de logística](#seleccion-de-combinaciones-de-logistica)
- [Configuraciones de prioridades en la logística](#configuraciones-de-prioridades-en-la-logistica)
- [Estimación del tiempo de envío](#estimacion-del-tiempo-de-envio)

## Selección de combinaciones de logística

Para completar el pedido, la tienda configura combinaciones de logística y, para determinar cuál es la más ventajosa, la plataforma VTEX selecciona diferentes combinaciones para cada tipo de envío:

- **Entrega:** el consumidor recibe el pedido en el domicilio informado.
- **Recogida:** el consumidor retira el pedido en un [punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).

<div class = "alert alert-info">
Los tipos de envío «entrega» y «recogida» siguen los mismos criterios de selección. El envío tipo «recogida» tiene un criterio adicional que mencionaremos más adelante.
</div>

Para su selección, las combinaciones de logística siguen los criterios y el orden de aplicación que se indica a continuación:

1. **Validación de la ruta de logística:** la ruta de logística es el conjunto de la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), el [muelle de carga](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) y el [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) que cumple con los criterios de un pedido, y tiene en cuenta la disponibilidad de ítems y la ubicación del consumidor. En esta primera etapa de validación, la plataforma VTEX analiza cuáles son las rutas de logística que cubren el envío. Se tienen en cuenta los aspectos a continuación:
<ul>
  <li><b>Características de la plantilla de flete:</b>por ejemplo, las dimensiones, el peso, los rangos de código postal y las modalidades. La <a href="https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127">plantilla de flete</a> se rellena con la información del contrato de servicio que proporcionan las <a href="https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE">transportadoras</a>. Cada transportadora debe ser capaz de cumplir con el pedido en cuanto a las características de los ítems y al área de cobertura de la ubicación del consumidor.</li>
  <li><b>Disponibilidad de stock:</b> el almacén es el lugar físico donde se guardan los ítems, mientras que el <a href="https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139">stock</a> es la relación de los SKU de los ítems disponibles para la venta. Este criterio determina si los ítems del pedido están disponibles en un almacén y de si ese almacén tiene, al menos, un muelle de carga disponible.
</li>
</ul>
<br>
  >⚠️ Si se debe enviar un [kit](https://help.vtex.com/es/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28), hay dos condiciones:  
>
> * Los componentes del kit deben tener el mismo[muelle de carga](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).
>
> * Los componentes del kit deben estar disponibles en el [stock](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/2XyUVa0UKMyHTmwqyA5Bx6).
>
> Para más información, consulta el artículo [Cómo se calcula el envío de un kit](https://help.vtex.com/es/tutorial/como-e-calculado-o-frete-do-kit--frequentlyAskedQuestions_154).

2. **Prioridad del stock:** las rutas de logística seleccionadas anteriormente se organizan considerando al [stock](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) como criterio de prioridad. Cuantos menos SKU del pedido haya en stock, más prioridad tendrá la ruta de logística en la selección para evitar que se retenga stock con pocos ítems. A partir de esto, se crea una lista de rutas de logística ordenadas de mayor a menor prioridad, es decir, el ítem con más prioridad ocupa el primer lugar y el ítem con menos prioridad ocupa el último lugar.
3. **Agrupamiento de paquetes:** la plataforma VTEX calcula la separación de los ítems del pedido en paquetes con el fin de estimar las divisiones de paquetes y [grupos de envíos](https://help.vtex.com/es/tutorial/como-funciona-a-remessa--tutorials_118).
4. **Cálculo del precio y plazo de envío:** la plataforma VTEX calcula los plazos y los precios de los paquetes para reordenar la lista de prioridad de las rutas de logística según los criterios y el orden de aplicación a continuación:
<ul>
  <li>Menor costo</li>
  <li>Menor plazo</li>
  <li>Menor división de paquetes</li>
  <li><a href="https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro">Muelles de carga prioritarios</a></li>
</ul>
<br>
  <div class = "alert alert-info">
Cuando hay un empate entre dos muelles de carga, el criterio de desempate es el <i><a href="https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW">overhead</a></i> o sobrecarga, es decir, el valor en días para elegir el muelle que es más beneficioso para un determinado envío. Cuanto menor sea el overhead o sobrecarga, más posibilidades habrá de que se elija ese muelle. Cabe mencionar que el overhead o sobrecarga no se tiene en cuenta al momento de calcular el tiempo de envío.
</div>

5. **Etapa exclusiva para el envío del tipo «recogida»:** existe un paso adicional en la selección para analizar los [puntos de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). La plataforma VTEX crea una lista con los puntos de recogida posibles utilizando el criterio de menor distancia entre el punto de recogida y la ubicación del consumidor.

El resultado final de la selección de las configuraciones de logística es una lista ordenada con las posibles rutas de logística. Sin embargo, en el _checkout_ de la experiencia de compra del consumidor solo se presentan hasta dos opciones de transportadoras para cada tipo de envío:

- **Entrega:** la opción más rápida y más económica.
- **Recogida:** la opción más rápida y más económica.

## Configuraciones de prioridades en la logística

En el Admin VTEX, se pueden configurar criterios y prioridades distintas para las etapas relacionadas con la [logística](https://help.vtex.com/es/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP):

- **Muelles de carga:** las prioridades se configuran en los [campos de registro del muelle de carga](https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
- **Flete:** los precios del flete se configuran en las [tarifas de envío](https://help.vtex.com/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM), excepto la [tarifa del muelle de carga](https://help.vtex.com/es/tutorial/custo-final-do-envio--5bwhIO108VA5Y2YOpef9lV), que es un valor adicional opcional que se configura al agregar el muelle de carga a un almacén.
- **Plazo:** el tiempo para el envío se configura en la [estimación del SLA](#estimacion-del-tiempo-de-envio).
- **División de paquetes:** los criterios adoptados se configuran en el módulo _Checkout_. Obtén más información en [División de pedidos y división de entregas](https://help.vtex.com/es/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV).

## Estimación del tiempo de envío

La sigla SLA proviene de _Service Level Agreement_ (Acuerdo del nivel de servicio) y, en [logística](https://help.vtex.com/es/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP), hace referencia a la estimación del tiempo de envío de un pedido al consumidor, el cual debe corresponderse con las condiciones firmadas en la compra.

Se utilizan los siguientes campos y parámetros para calcular el SLA:

- [Política de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3): `Horario laboral`, `Fines de semana y feriados`, `Entrega programada` y `TimeCost` ([plantilla de flete](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127)).
- [Muelle de carga](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj): `Tiempo de costo`.

Se puede obtener una estimación del tiempo de envío a través del [Simulador de envío](https://help.vtex.com/es/tutorial/simulador-de-envio--tutorials_144), ya que la simulación tiene en cuenta las configuraciones de las [estrategias de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) de la tienda VTEX.

<div class = "alert alert-info">
El resultado obtenido con el <a href="https://help.vtex.com/es/tutorial/simulador-de-envio--tutorials_144">Simulador de envío</a> es solo un aproximado, ya que recién en el checkout se conocen los factores determinantes, por ejemplo, la disponibilidad de la transportadora en el horario de la compra, el tiempo de confirmación del pago y el resultado de la <a href="https://help.vtex.com/es/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">selección de sellers white label</a>.
</div>

## Más información	

- [Estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)
- [Transportadoras en VTEX](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)
- [Cómo se maneja la reserva](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92)
- [Logística](https://help.vtex.com/es/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP)
- [Gestionar almacenes](https://help.vtex.com/es/tutorial/gerenciar-estoque--tutorials_137)
