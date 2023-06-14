---
title: 'Selección de sellers white label'
id: 3MemNQ4pKkWCpMdzI27AHa
status: PUBLISHED
createdAt: 2021-03-05T12:15:19.533Z
updatedAt: 2022-06-17T16:05:08.344Z
publishedAt: 2022-06-17T16:05:08.344Z
firstPublishedAt: 2021-03-05T13:12:55.997Z
contentType: tutorial
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
slug: seleccion-de-sellers-white-label
locale: es
legacySlug: algoritmo-de-selecao-de-white-label-sellers
subcategory: 3vhg10rO4MSmy06KeIYMIa
---

Dada su arquitectura, las tiendas VTEX pueden actuar indistintamente como [_marketplaces_](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) o _sellers_. El _marketplace_ es el entorno en el que se vende el producto, también llamado vitrina; el _seller_ es el dueño del _stock_ y el responsable del envío del pedido.

Existen dos tipos de _sellers_ en VTEX:

- **Seller común:** el _seller_ está visible en la vitrina del _marketplace_ y el consumidor puede elegirlo durante su experiencia de compra.
- **[Seller white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa):** el _seller_ permanece oculto durante la experiencia de compra del consumidor y la plataforma VTEX lo selecciona automáticamente para realizar el envío del pedido.

<div class = "alert alert-info">
En VTEX, la cuenta franquicia es un tipo de cuenta que no solo se crea y asocia a una cuenta principal, sino que también tiene la característica de ser un <i>seller white label</i> de la cuenta principal. Este modelo de negocio resulta estratégico para los <i>retailers</i> que desean conectar las tiendas físicas con su canal de venta digital. Obtén más información en <a href="https://help.vtex.com/es/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl">¿Qué es una cuenta franquicia?</a>.
</div>

Cuando el consumidor navega por el _marketplace_, ya sea mientras mira la vitrina o cuando está en el carrito, la información sobre la disponibilidad de los _ítems_ y las opciones de envío de los _sellers_ que se le presentan al consumidor pueden variar y dependerá si el _marketplace_ conoce o no la ubicación del comprador. En tal sentido, este artículo se divide en:

- [Selección de sellers en la vitrina](#seleccion-de-sellers-en-la-vitrina)
- [Selección de sellers en el carrito](#seleccion-de-sellers-en-el-carrito)
- [Experiencia del cliente en el checkout](#experiencia-del-cliente-en-el-checkout)

## Selección de sellers en la vitrina

Al navegar por el _marketplace_, los clientes esperan ver productos que se puedan entregar en su localidad. Con el fin de garantizar que los _ítems_ presentados en la vitrina estén disponibles, la plataforma VTEX realiza una selección de los _sellers_ vinculados al _marketplace_. Dado que, durante la navegación, no siempre es posible identificar cuál es la región donde se encuentra el cliente, existen dos escenarios posibles:

- [Vitrina sin localización del cliente](#vitrina-sin-localizacion-del-cliente)
- [Vitrina con localización del cliente](#vitrina-con-localizacion-del-cliente)

<div class = "alert alert-info">
En la etapa de la vitrina, la plataforma VTEX no toma en cuenta las opciones de envío de los <i>sellers</i>. Esto recién se hace cuando el cliente ingresa su dirección en el <i>checkout</i>. Por lo tanto, es posible que el precio y la disponibilidad mostrados en la vitrina sean distintos al cerrar la compra.
</div>

### Vitrina sin localización del cliente

Cuando un cliente navega por el _marketplace_ y se desconoce su ubicación, los productos que se muestran son solo los productos en el _stock_ del _seller_ principal, también llamado _seller_ 1, y los productos en el _stock_ de los [_sellers_ de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). Un _seller_ se debe configurar como de extensa cobertura cuando puede enviar pedidos a todas las regiones que cubre la operación del _marketplace_. En los casos de más de un *seller* de extensa cobertura registrado, el *checkout* selecciona el que tiene mayor saldo en stock para el artículo en cuestión, entre todos los *seller* de extensa cobertura. 

### Vitrina con localización del cliente

Cuando el _marketplace_ conoce la ubicación del cliente, ya sea por medio de geocoordenadas captadas o mediante datos que brindó el cliente, la plataforma VTEX puede consultar a todos los _sellers_ que cubren dicha región a fin de mostrar el precio y la disponibilidad de los productos en la vitrina. Obtén más información en [Configurar el precio y la disponibilidad de los SKU por región](https://help.vtex.com/es/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc).

<div class="alert alert-warning">
Cuando se conoce la ubicación del cliente, la plataforma VTEX consulta a todos los <i>sellers</i> de manera predeterminada, de acuerdo con la funcionalidad <a href="https://developers.vtex.com/vtex-developer-docs/changelog/region-v2-release">Región v2</a>. Sin embargo, es posible que algunas tiendas VTEX aún operen con Región v1, la cual tiene limitaciones en cuanto a la selección de <i>sellers</i> para la vitrina.
</div>

## Selección de sellers en el carrito

Cuando el cliente agrega _ítems_ al carrito, el _marketplace_ puede o no conocer la ubicación de ese cliente. La selección de _sellers_ será distinta en cada caso, y existen dos escenarios posibles:

- [Carrito sin dirección del cliente](#carrito-sin-direccion-del-cliente)
- [Carrito con dirección del cliente](#carrito-con-direccion-del-cliente)

### Carrito sin dirección del cliente

Mientras el _marketplace_ no conozca cuál es la ubicación del cliente, la disponibilidad y el precio de los productos corresponderán únicamente a los que ofrece el _seller_ principal y los [_sellers_ de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). Un _seller_ se debe configurar como de extensa cobertura cuando puede enviar pedidos a todas las regiones que abarca la operación del _marketplace_. En los casos de más de un *seller* de extensa cobertura registrado, el *checkout* selecciona el que tiene mayor saldo en stock para el artículo en cuestión, entre todos los *seller* de extensa cobertura. 

### Carrito con dirección del cliente

Cuando un cliente ingresa su dirección en el carrito, la plataforma VTEX hace una selección de _sellers_ para garantizar las mejores condiciones de costo y plazo en el envío de los _ítems_. Con el propósito de mantener el buen desempeño de la plataforma VTEX, esta selección incluye un máximo de doce _sellers_, es decir, un máximo de seis _sellers_ para el envío de los _ítems_ en la modalidad de entrega, y un máximo de seis _sellers_ para el envío de los _ítems_ en la modalidad de retiro en los puntos de recogida.

Los primeros criterios de selección de _sellers white label_ son:

- Menor costo en la [plantilla de flete](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127) de acuerdo con la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) del _seller_.
- Menor tiempo en la plantilla de flete de acuerdo con la política de envío del _seller_.
- Tener [inventario](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque) disponible.

Luego de filtrar a los _sellers_ según los criterios mencionados, se seleccionan hasta seis _sellers_ para cada modalidad de envío:

- [Entrega](#modalidad-de-envio-entrega): el cliente recibe el pedido en su dirección.
- [Recogida](#modalidad-de-envio-retiro-en-un-punto-de-recogida): el cliente recoge el pedido en un [punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R). 

<div class = "alert alert-info">
  De manera predeterminada, del total máximo de doce <i>sellers</i>, hasta seis realizan entregas y hasta seis ofrecen la opción de retirar el pedido en un punto de recogida. Sin embargo, si menos de seis <i>sellers</i> cumplen con los criterios de una modalidad de envío, es posible que la lista de <i>sellers</i> de la otra modalidad de envío incluya más de seis. Por ejemplo, si solo cinco <i>sellers</i> entregan el pedido, la lista de <i>sellers</i> que ofrezcan la opción de recogida del pedido podrá estar integrada por siete <i>sellers</i>, de manera tal que haya un total de doce <i>sellers</i>.
</div>

#### Modalidad de envío: entrega

La selección de hasta seis _sellers white label_ para el envío en la modalidad de entrega se realiza de la siguiente manera:

1. La plataforma VTEX considera la lista de todos los SKU que el cliente agregó al carrito.
2. Se realiza una selección de los _sellers_ que entregan al menos un SKU de la lista en la región del cliente. No se tienen en cuenta los _sellers_ que, en su [inventario](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139), no tienen todas las unidades de, por lo menos, uno de los SKU pedidos.
  > Ejemplo: en un pedido de cinco camisas rojas y tres camisas blancas, el _seller _debe poder entregar, como mínimo, las cinco camisas rojas o las tres camisas blancas.
3. La plataforma VTEX selecciona al _seller_ que cubre más SKU de la lista. 
4. Se realiza una nueva etapa de selección en la que no se tienen en cuenta los SKU que entrega el _seller_ ya elegido.
5. Se selecciona el siguiente _seller_ que cubre más SKU, y así sucesivamente hasta cubrir todos los SKU del carrito.
6. Sobre la base de los _sellers_ seleccionados para cubrir el carrito, la plataforma VTEX calcula las combinaciones que incluyen menos _sellers_.
7. De todas esas combinaciones, surge una lista de –como máximo– seis _sellers_ para el envío en la modalidad de entrega.

<div class = "alert alert-info">
Es posible que, en alguna etapa de la selección, haya un empate de sellers. Cuando esto ocurre, la selección se divide en dos frentes para así seleccionar:i
<ul>
  <li>Hasta tres sellers que ofrezcan el menor costo.</li>
  <li>Hasta tres sellers que ofrezcan el mejor plazo.</li>
</ul>
</div>

Si hay un empate entre los _sellers_ con los criterios de menor costo o mejor plazo, el criterio de desempate será el del _seller_ que tenga el mayor número de SKU en su _stock_.

#### Ejemplo 1 para envío en la modalidad de entrega

Un cliente agregó cinco SKU al carrito. Cada uno de los _sellers_ que ofrece la opción de entrega en su región (_sellers_ A, B, C y D) tiene en su [inventario](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) solo una parte de los _ítems_, tal como se muestra en la imagen a continuación:

![print_selecao_seller_white_label_1](https://images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/4fdb2ed25e8d3d52eef96e5c0e2fd908/print_selecao_seller_white_label_1.png)

La plataforma VTEX selecciona al _seller_ que tiene disponible en su _stock_ el número máximo de SKU del carrito. En este caso, el _seller_ B es el único que entrega tres SKU. 

Luego de seleccionar al _seller_ B, aún quedan dos SKU sin entregar. Si un único _seller_ enviara ambos, ese sería el factor decisivo para la selección, ya que el objetivo es reunir la menor cantidad de _sellers_ para cubrir el carrito. Sin embargo, y de acuerdo con la imagen a continuación, se necesitan a los _sellers_ A y C para entregar los SKU 1 y 4:

![print_selecao_seller_white_label_2](https://images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/3f7b71abf734ae7c55d8b40d3a76f3c0/print_selecao_seller_white_label_2.png)

En la primera imagen, el _seller_ C podía entregar los SKU 3 y 4, y el _seller_ D entregaría el SKU 5. No obstante, se seleccionó al _seller_ B para entregar esos _ítems_, entonces, no se tienen en cuenta esos SKU en las otras etapas de selección. Esto se representó eliminando la flecha del _seller_ C hacia el SKU 3, y la flecha del _seller_ D hacia el SKU 5.

El resultado de la selección para la entrega es una combinación entre los _sellers_ A, B y C.

#### Ejemplo 2 para envío en la modalidad de entrega

Un cliente agregó cinco SKU al carrito y hay cuatro _sellers_ (A, B, C y D) que entregan los pedidos en su región. Ninguno de ellos tiene en su [inventario](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) todos los _ítems_, tal como se muestra en la imagen a continuación:

![print_selecao_seller_white_label_3](https://images.ctfassets.net/alneenqid6w5/23CWM1CDejDvKqF31O2DH9/26cd86b37e5e47ada6f15cc08acfbfbc/print_selecao_seller_white_label_3.png)

La plataforma VTEX selecciona al _seller_ que tiene disponible en su _stock_ el mayor número de los SKU del carrito. Tanto el _seller_ B como el _seller_ D pueden entregar tres _ítems_, y como ambos entregan el SKU 3, compiten entre ellos.

En los casos en los que hay un empate en el criterio de cobertura del carrito, la selección se divide en dos frentes paralelos:

- Entrega más rápida
- Entrega más económica

Supongamos que el _seller_ B tiene la entrega más económica, y que el _seller_ D tiene la entrega más rápida. Para cada situación, se hará una combinación de _sellers_ que cubran todos los _ítems_ del carrito.

- **Entrega más rápida:** cuando se selecciona al _seller_ D, quedan sin entregar los SKU 3 y 4. El _seller_ C puede entregar ambos, por lo que resulta elegido y el resultado de la selección es la combinación de los _sellers_ D y C.

![print_selecao_seller_white_label_4](https://images.ctfassets.net/alneenqid6w5/5OVQXuRwsEWGUxy3hocfOF/4751f13e35a8187655c04b11c67f6079/print_selecao_seller_white_label_4.png)

- **Entrega más económica:** cuando se selecciona al _seller_ B, quedan sin entregar los SKU 1 y 4. Como solo el _seller_ A entrega el SKU 1, y solo el _seller_ C entrega el SKU 4, el resultado de la selección es una combinación de los _sellers_ A, B y C. 

![print_selecao_seller_white_label_5](https://images.ctfassets.net/alneenqid6w5/2zLEDj7yHw54HufNUeC8OT/d69cee9bb79c876adb571e98ccd0060c/print_selecao_seller_white_label_5.png)

Las flechas repetidas de los _sellers_ que entregaban los SKU ya cubiertos por los _sellers_ B y D se eliminaron de las imágenes que contemplaban las opciones de entrega más económica y más rápida. Esto se debe a que en las etapas de selección sucesivas, los SKU ya cubiertos no se tienen en cuenta.

El resultado de la selección de _sellers_ para el envío en la modalidad de entrega son los _sellers_ D y C para la entrega más rápida, y los _sellers_ A, B y C para la más económica. Es posible que un _seller_ sea parte de ambas selecciones, como es el caso del _seller_ C.

#### Modalidad de envío: retiro en un punto de recogida

De manera predeterminada, la selección de la lista de _sellers_ cuya modalidad de envío es el retiro en un punto de recogida excluye a los _sellers_ elegidos cuya modalidad de envío es la entrega. El objetivo es que ambos análisis no compitan entre sí.

La selección de un máximo de seis _sellers_ para la modalidad de envío en un punto de recogida se planifica de forma tal que el cliente recoja todos los _ítems_ del carrito en un único [punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R), y se realiza tal como se indica a continuación:

1. La plataforma VTEX considera la lista de todos los SKU que el cliente agregó al carrito.
2. Se realiza una selección de los _sellers_ que entregan al menos un SKU de la lista en la región del cliente. Se desestiman los _sellers_ que, en su inventario, no tienen todas las unidades de, por lo menos, un SKU.
  > Ejemplo: en un pedido de cinco camisas rojas y tres camisas blancas, el _seller _debe poder enviar, como mínimo, las cinco camisas rojas o las tres camisas blancas.
3. La plataforma VTEX selecciona a los _sellers_ que cubren la mayoría de los _ítems_ de la lista, garantizando así la mayor cobertura del carrito.
4. De ese total, se selecciona a los _sellers_ con los puntos de recogida más cercanos a la dirección del cliente.
5. Por ende, la selección se divide en dos frentes paralelos:
  - **Retiro del pedido en el punto de recogida con el menor costo:** se seleccionan hasta tres _sellers_ en base a los siguientes criterios y en el orden de relevancia a continuación:
    - **Menor costo:** _sellers_ que ofrecen menores precios para el retiro del pedido en el punto de recogida.
    - **Mejor plazo:** _sellers_ que preparan los productos para su retiro en el punto de recogida en menos tiempo.
  - **Retiro del pedido en el punto de recogida en el mejor plazo:** se seleccionan hasta tres _sellers_ en base a los siguientes criterios y en el orden de relevancia a continuación:
    - **Mejor plazo:** _sellers_ que preparan los productos para su retiro en el punto de recogida en menos tiempo.
    - **Menor costo:** _sellers_ que ofrecen menores precios para el retiro del pedido en el punto de recogida.

<div class = "alert alert-info">
Cuando hay un empate entre los criterios de menor costo o mejor plazo, el factor de desempate es el <i>seller</i> con el número más alto de SKU en su <i>stock</i>.
</div>

##### Ejemplo para envío en la modalidad de retiro en un punto de recogida

Un cliente agrega seis SKU al carrito y hay ocho _sellers_ que pueden entregar al menos uno de estos SKU a través del envío en la modalidad de retiro en el punto de recogida. Para calcular el envío, se debe tener en cuenta:

- La disponibilidad de SKU en el _stock_ de los _sellers_.
- La distancia entre el punto de recogida del pedido y la dirección del cliente.
- El costo para el envío en la modalidad de retiro en el punto de recogida.
- El tiempo de preparación del pedido para su retiro en el punto de recogida.

Los valores de cada _seller_ se compararon en esta tabla:

| **Sellers** | **Disponibilidad de SKU del total de 6 ítems**  | **Distancia entre la dirección del cliente y el punto de recogida** | **Costo para el envío en la modalidad de retiro en el punto de recogida** | **Tiempo de preparación del pedido para su retiro en el punto de recogida** |
| ---------- | ---------- | ---------- | ---------- | ---------- |
|  Seller 1 | 5 | 1 km | 10 dólares | 1 día |
|  Seller 2 | 4 | 1 km | 0 | 1 día |
|  Seller 3 | 2 | 1 km | 0 | 1 día |
|  Seller 4 | 5 | 5 km | 0 | 0 |
|  Seller 5 | 3 | 5 km | 0 | 0 |
|  Seller 6 | 4 | 1 km | 10 dólares | 0 |
|  Seller 7 | 1 | 10 km | 0 | 0 |
|  Seller 8 | 2 | 5 km | 0 | 0 |

La selección de _sellers_ para el envío en la modalidad de retiro en el punto de recogida definirá una lista de hasta seis _sellers_, de los cuales hasta tres priorizarán la opción más económica, y hasta tres, la más rápida.

Para definir los _sellers_ con la opción más económica para el envío en la modalidad de retiro en el punto de recogida se tienen en cuenta los siguientes criterios, en el orden de aplicación a continuación:

1. _Seller_ con más SKU disponibles en su _stock_.
2. Menor distancia entre la dirección del cliente y el punto de recogida.
3. Menor costo de envío.
4. Menor tiempo de preparación del pedido para su retiro en el punto de recogida.

En la siguiente tabla se muestra el resultado de la selección de hasta tres _sellers_ para la opción más económica de envío en la modalidad de retiro en el punto de recogida:

|**Posición en la selección** | **Sellers** | **Disponibilidad de SKU del total de 6 ítems** | **Distancia entre la dirección del cliente y el punto de recogida** | **Costo para el envío en la modalidad de retiro en el punto de recogida** | **Tiempo de preparación del pedido para su retiro en el punto de recogida** |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 1º |  Seller 1 | 5 | 1 km | 10 dólares | 1 día |
| 2º |  Seller 4 | 5 | 5 km | 0 | 0 |
| 3º |  Seller 2 | 4 | 1 km | 0 | 1 día |
| 4º |  Seller 6 | 4 | 1 km | 10 dólares | 0 |
| 5º |  Seller 5 | 3 | 5 km | 0 | 0 |
| 6º |  Seller 3 | 2 | 1 km | 0 | 1 |
| 7º |  Seller 8 | 2 | 5 km | 0 | 0 |
| 8º |  Seller 7 | 1 | 10 km | 0 | 0 |

- **_Seller_ 1 en primer lugar:** tiene cinco de los seis SKU en su _stock _y la menor distancia entre el punto de recogida y la dirección del cliente.
- **_Seller_ 4 en segundo lugar:** al igual que el _seller_ 1, tiene cinco SKU en su _stock_, pero la distancia es mayor.
- **_Seller_ 2 en tercer lugar:** a pesar de empatar con el _seller_ 6 en los dos criterios principales, su costo es menor.

En paralelo, la plataforma VTEX selecciona a los _sellers_ con la opción más rápida para el envío en la modalidad de retiro en el punto de recogida. Para hacerlo, se toman en cuenta los siguientes criterios, en el orden de relevancia a continuación:

1. _Seller_ con más SKU del pedido disponibles en su _stock_.
2. Menor distancia entre la dirección del cliente y el punto de recogida.
3. Menor tiempo de preparación del pedido para su retiro en el punto de recogida.
4. Menor costo de envío.

En la tabla a continuación, se muestra el resultado de la selección de hasta tres _sellers_ para la opción más rápida de envío en la modalidad de retiro en el punto de recogida:

| **Posición en la selección** | **Sellers** | **Disponibilidad de SKU del total de 6 ítems** | **Distancia entre la dirección del cliente y el punto de recogida** | **Tiempo de preparación del pedido para su retiro en el punto de recogida** | **Costo para el envío en la modalidad de retiro en el punto de recogida** |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 1º |  Seller 1 | 5 | 1 km | 1 día | 10 dólares |
| 2º |  Seller 4 | 5 | 5 km | 0 | 0 |
| 3º |  Seller 6 | 4 | 1 km | 0 | 10 dólares |
| 4º |  Seller 2 | 4 | 1 km | 1 día | 0 |
| 5º |  Seller 5 | 3 | 5 km | 0 | 0 |
| 6º |  Seller 3 | 2 | 1 km | 1 día | 0 |
| 7º |  Seller 8 | 2 | 5 km | 0 | 0 |
| 8º |  Seller 7 | 1 | 10 km | 0 | 0 |

- **_Seller_ 1 en primer lugar:** tiene cinco de los seis SKU en su _stock_ y la menor distancia entre el punto de recogida y la dirección del cliente.
- **_Seller_ 4 en segundo lugar:** al igual que el _seller_ 1, tiene cinco SKU en su _stock_, pero la distancia es mayor.
- **_Seller_ 6 en tercer lugar:** a pesar de empatar con el _seller_ 2 en los dos criterios principales, el tiempo de preparación del pedido para su retiro en el punto de recogida es menor.

Como los _sellers_ 1 y 4 se incluyeron tanto en la lista de selección de la opción más rápida como de la opción más económica para el envío en la modalidad de retiro en el punto de recogida, el resultado final de la selección para esta modalidad de envío son los _sellers_ 1, 2, 4 y 6. Esto significa que se eligieron solo cuatro _sellers_, cuando la lista podría tener hasta seis. Las dos vacantes restantes pueden completarse con _sellers_ para el envío en la modalidad de entrega, de manera tal que habrá cuatro _sellers_ para el envío en la modalidad de retiro en el punto de recogida y ocho para entrega, manteniendo así el total de doce _sellers_.

## Experiencia del cliente en el checkout

Tras la selección de los doce _sellers_, la plataforma VTEX calcula opciones para los envíos en las modalidades de entrega y retiro en el punto de recogida para optimizar el costo y el plazo de envío del pedido.

En el _checkout_, el cliente puede:

- Definir la modalidad de envío: entrega, retiro en un punto de recogida o una combinación de ambas.
- Elegir un [punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R), en caso de optar por recoger el pedido.
- Evaluar y seleccionar las condiciones de costo y plazo de envío del pedido.

Como se trata de una selección de _sellers white label_, el cliente no puede identificar quiénes son los _sellers_ responsables del envío del pedido. En la experiencia de compra del consumidor aparecerán las opciones de envío normal, económica o _express_, por ejemplo.
