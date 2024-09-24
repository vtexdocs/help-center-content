---
title: 'Inventario & envío - Visión General'
id: tutorials_143
status: ARCHIVED
createdAt: 2017-04-27T22:16:45.667Z
updatedAt: 2023-03-20T17:44:01.731Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:45.469Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: logistics-module-overview
locale: es
legacySlug: overview
subcategoryId: 3RSSKdmS4MY2ycsu8WoyC2
---

El módulo **Inventario y envío** atiende a todo el control y monitoreo de disponibilidad de los ítems en inventario, además de la estructura para la entrega de los pedidos, que atiende a las distintas necesidades de acuerdo con la lógica de entrega de la tienda.

Dentro del módulo tendremos los departamentos de **Estratégia de Envío**, **Tarifas de envío**, **Simulador de envío**, **Inventario**, **Envío por geolocalización**, **Puntos de recogida**, **Festivos** e **Configuración**, cada uno con su respectiva función dentro de ese segmento. Para cada uno tenemos:

## Estratégia de Envío

Aquí podremos registrar la relación de **[Almacén](https://help.vtex.com/es/tutorial/almacen--6oIxvsVDTtGpO7y6zwhGpb)**, **[Muelle](https://help.vtex.com/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj)** y **[Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)** que se comunicarán entre sí para definir la estructura de entrega de los Pedidos y combinar la mejor estructura de entrega para los Pedidos de la Tienda. 

## Tarifas de envío

Aquí conseguiremos levantar la definición de valores de precio y tiempo de entrega para una determinada rango de código ZIP con relación al peso cúbico del producto, dimensiones, entre otros factores. 

![tarifas-envioES](//images.ctfassets.net/alneenqid6w5/6BuxCyz2bujSpqx9Mq0CcZ/c390be3b109d17a73293fc3e7b3a9105/tarifas_envioES.png)

- [Tarifas de envío](https://help.vtex.com/es/tutorial/shipping-rates--1Balpg3rv0854udEPedvMM)

## Simulador de envío

Aquí será posible reproducir diversos escenarios para la entrega del producto, posibilitándose variar cuál canal será utilizado como referencia (La Tienda Principal o un Marketplace, por ejemplo), los ítems, la cantidad, su valor (caso haya adicional por el tipo del producto, por ejemplo, químicos) y el código ZIP y la dirección, de la entrega. 

Éste regresará los valores a los Transportistas que atienden a la entrega, las dimensiones y pesos de los productos, el precio de la entrega y el tiempo estimado para que se lleve a cabo. Además de los detalles adicionales sobre los valores del rango del código ZIP, porcentuales que varían de acuerdo con el rango de peso del Producto, volumen, valores adicionales por gramo excedente, costo para la Muelle, factor cúbico y Peso cubado.

![simulador envioES](//images.ctfassets.net/alneenqid6w5/5Chp5OU2vGVkHDXtQEayoL/6cc66af540be3895ae3af7c9c842dde7/simulador_envioES.png)
- [Simulador de Envío](/es/tutorial/simulacion-de-flete)

## Inventario

Aquí es posible gestionar y acompañar el movimiento de inventario realizada en los productos de la Tienda. Tanto cuánto las reservas que el producto posee en aquel momento y si ya fueron confirmadas o no.

![gerenciar inventarioES](//images.ctfassets.net/alneenqid6w5/7DXfGBySZsZmejB31WQBRK/7e629760904e66633a91146d74539a2c/gerenciar_inventarioES.png)
- [Gestionar Inventario](/es/tutorial/gestionar-items-en-inventario)

## Envío por Geolocalización

Aquí podremos montar “polígonos” para una atención logística específica, normalmente utilizado en zonas rurales e industriales, donde si hay la división por lotes, por ejemplo, o en áreas de riesgo, se hace necesario excluir determinados lugares dentro de una misma región. Su estructuración es dinámica, puede ser fácilmente y literalmente diseñada en el mapa la región a delimitarse. 

![geolocalizaçaoE](//images.ctfassets.net/alneenqid6w5/4UrlnVmhHGhR2XEWU8bOwx/9e7f47a52db4e4234728b526cebdda4f/geolocaliza__aoES.png)
- [Geolocalización](/es/tutorial/gestionar-geolocalizacion)

## Puntos de recogida

En Puntos de recogira es posible eliminar, editar y agregar un *Pickup Point*. La feature de Puntos de Rcogida agrega mayor flexibilidad y mejor experiencia de compra para el cliente al permitirle la retirada del pedido en un punto físico.

![pontos retiradaES](//images.ctfassets.net/alneenqid6w5/t58ChaH55346tKGLDD1wu/87f4cf5a13e62bccf5980e93e4f440ee/pontos_retiradaES.png)
- [Configurar Puntos de Recogida](http://help.vtex.com/es/tutorial/configurar-puntos-de-recogida-pickup-points)

## Festivos

Aquí es posible registrar los días que **no** se considerarán útiles para su tienda. El módulo considerará los días festivos registrados en esta sección y estos días no se contabilizarán en el plazo de entrega.

![feriadoES](//images.ctfassets.net/alneenqid6w5/naLgWqy2UVusNnzG9FdUc/8de4f976d60f5668a12c8537cff0b9d8/feriadoES.png)
- [Registrar Feriados](http://help.vtex.com/es/tutorial/registrar-feriados)

## Configuraciones Generales

Aquí podremos aplicar configuraciones generales que actuarán en la construcción tanto en los valores como en la estructura de la entrega para que pudiese atender hasta el más específico tipo de entrega que el cliente demande. 
Los items disponibles para configuración son:

- [Adicional en el flete](https://help.vtex.com/es/tutorial/adicionales-de-flete--2vqGwMn0LabkOHY6zSHYNV)
- [Envío](https://help.vtex.com/es/tutorial/configurar-grupos-de-envio--tutorials_118)
- [Modal](/es/tutorial/como-se-maneja-el-modal)
- [División de Carga](/es/tutorial/como-se-maneja-el-reparto-de-carga)
- [Alerta de Inventario Crítico](http://help.vtex.com/es/tutorial/configurar-la-alerta%20de%20Stock%20Cr%C3%ADtico)
- [Confguración de Puntos de Recogida](http://help.vtex.com/es/tutorial/configurar-puntos-de-recogida-pickup-points)

