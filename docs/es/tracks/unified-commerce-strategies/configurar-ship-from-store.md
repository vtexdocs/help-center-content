---
title: 'Ship From Store'
id: 50GAmxxFsJoLWqcnMysWdl
status: PUBLISHED
createdAt: 2020-06-30T21:36:43.926Z
updatedAt: 2023-07-26T18:44:48.356Z
publishedAt: 2023-07-26T18:44:48.356Z
firstPublishedAt: 2020-06-30T21:45:36.187Z
contentType: trackArticle
productTeam: Shopping
slugEN: configuring-ship-from-store
locale: es
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugES: estrategias-de-comercio-unificado
---

La estrategia de **Ship From Store** se produce cuando el cliente desea recibir los productos en su casa y estos productos provienen del almacén de una tienda física. En otras palabras, en este escenario, la tienda funciona como un mini centro de distribución.

![35. Setting up Shipping From Store - 1](//images.ctfassets.net/alneenqid6w5/7uHIuX10TvTGJS1kkwPmBb/6847796e390c9d18123eea24f87469c4/35._Setting_up_Shipping_From_Store_-_1.png)

Este tipo de logística ayuda a su operación a reducir costos y tiempo de envío. Esto se debe a que, en lugar de tener solo los almacenes principales, generalmente lejos de las áreas centrales de las ciudades, ahora usted tiene una red de entrega más capilar.

Considere este ejemplo: un cliente que se encuentra en su casa hace un pedido en el e-commerce y desea recibir productos en su hogar. Digamos que usted tiene una tienda física en el mismo vecindario, a 500 metros de la casa de ese cliente. Si el stock de la tienda incluye los productos que el cliente ordenó, la estrategia de Shipping From Store permite que se le envíen estos productos desde esa tienda, a un costo menor para usted y con un tiempo de entrega más ventajoso para el cliente.

## Prerrequisitos

En primer lugar, consideremos los requisitos previos que su tienda necesita para asegurarse de comenzar a implementar una estrategia de Ship From Store. Consulte nuestro artículo sobre [Requisitos previos para utilizar VTEX Sales App](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Requisitos previos para utilizar VTEX Sales App").

## Cómo implementar el Ship From Store

>ℹ️ Aunque es posible implementar el Ship From Store de otras maneras, en este artículo explicaremos cómo hacerlo utilizando las features de cuenta franquicia Seller White Label. Esto se debe a que esta es la arquitectura más recomendada por VTEX para este tipo de proyecto.

Estos son los pasos para implementar el __Ship From Store__:

1. [Crear cuentas franquicia](#crear-cuentas-franquicia).
2. [Configurar la logística](#configurar-la-logistica).

### Crear cuentas franquicia

Recomendamos utilizar la función [cuentas franquicias](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd) para implementar el Ship From Store. Con ellas, cada una de sus tiendas físicas tendrá un ambiente separado, con su propia logística, pero todas heredarán el catálogo del ambiente principal.

### Configurar la logística

Con __Ship From Store__, sus tiendas físicas podrán realizar entregas desde su inventario local. Para permitir esto, es necesario habilitar la entrega de productos desde estas tiendas. Vea cómo en los pasos a continuación.

#### Agregar operadores a las cuentas franquicia

Crearemos un transportista para entregar desde el stock local de una de sus tiendas físicas.

1. En el Admin VTEX de la cuenta franquicia deseada, accede a **Envío** > __Estrategia de envío__, o escribe __Estrategia de envío__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón `Crear política de envío`.
3. Complete los datos del transportista de acuerdo con el artículo [Registrar transportista](https://help.vtex.com/es/tutorial/cadastrar-transportadora--tutorials_140).

#### Conecte los transportistas al inventario de la tienda física

Ahora es necesario informar al sistema VTEX cuál es el almacén del que los productos se irán para ser entregados por el transportista registrado en el paso anterior.

1. Cree un muelle, como se describe [en este artículo](https://help.vtex.com/es/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW). En el campo __Políticas de envío asociadas__, añada el transportista que creó en la sección anterior de esta guía.
2. Cree un almacén, siguiendo los pasos del artículo [Registrar inventario](https://help.vtex.com/es/tutorial/gerenciar-estoque--tutorials_137). En el campo __Origen__, añada el muelle que creó en el paso anterior.
