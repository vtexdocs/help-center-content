---
title: 'Tiendas físicas como puntos de recogida'
id: 4hXfgqXxS1lwAfnxgja3xW
status: PUBLISHED
createdAt: 2021-08-23T17:04:37.282Z
updatedAt: 2024-11-13T18:16:43.930Z
publishedAt: 2024-11-13T18:16:43.930Z
firstPublishedAt: 2021-08-23T17:12:50.884Z
contentType: trackArticle
productTeam: Shopping
slugEN: configuring-physical-stores-as-pickup-points
locale: es
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugES: estrategias-de-comercio-unificado
---

Un punto de recogida es un lugar físico en el que el cliente tiene la opción de recoger él mismo su pedido. Por lo tanto, se trata de una etapa opcional con la que se concluye la ruta logística.

Puedes utilizar las tiendas físicas de tu marca como puntos de recogida, para que tus clientes tengan la opción de ir a una tienda a recoger los pedidos. Así, en el momento en que el cliente final rellena su dirección durante la compra, se mostrarán las posibilidades de entrega a esa dirección, incluyendo los puntos de recogida disponibles.

Es el cliente quien decide si desea que su pedido sea entregado en su domicilio o si prefiere recogerlo en un punto de recogida, y cuál de los puntos de recogida disponibles es la mejor opción.

## Requisitos previos - VTEX Sales App

Comprueba los requisitos para empezar a utilizar las tiendas físicas como puntos de recogida de los pedidos realizados en [VTEX Sales App](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) . Para ello, consulte el artículo [Requisitos previos para usar VTEX Sales App](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u).

## Configurar tiendas físicas como puntos de recogida

En la plataforma VTEX, las tiendas físicas se configuran como cuentas franquicia, que a su vez funcionan como Sellers White Label de la cuenta principal de la marca. Lee el artículo [¿Qué es una cuenta franquicia?](https://help.vtex.com/es/tutorial/que-es-una-cuenta-franquicia--kWQC6RkFSCUFGgY5gSjdl) para obtener más información sobre este tipo de cuenta.

Por lo tanto, en cada cuenta franquicia que vaya a servir de punto de recogida, hay que configurar un punto de recogida y relacionarlo con las demás configuraciones logísticas de la cuenta. Consulta el paso a paso completo que se muestra a continuación.

### Crear cuentas franquicia

Para más información sobre la creación de cuentas franquicia, lea nuestro artículo [Crear cuentas franquicia](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd).

### Crear puntos de recogida

Para que tu cliente pueda comprar (en la tienda o a través de otro canal) y recoger los productos en la tienda, debes configurar las tiendas físicas como puntos de recogida. Para ello, sigue los pasos a continuación.

1. En el Admin VTEX de la cuenta franquicia deseada, accede a **Envío** > __Estrategia de envío__, o escribe __Puntos de recogida__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón `Añadir`.
3. Rellena la información solicitada. Para obtener más información sobre cada campo, lee el artículo [Configurar puntos de recogida (pickup points)](https://help.vtex.com/es/tutorial/configurar-puntos-de-recogida-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).
4. Haz clic en `Guardar`.

### Asociar un punto de recogida a una política de envío

A continuación, debes asociar los nuevos puntos de recogida con una política de envío para que funcionen correctamente. Para obtener más información sobre este proceso, consulta la sección [Asociar punto de recogida con una política de envío](https://help.vtex.com/es/tutorial/configurar-puntos-de-recogida-pickup-points--2R5ClQiwe4KoSQgsuiOw4E#2-asociar-punto-de-recogida-con-una-politica-de-envio) del artículo [Configurar puntos de recogida](https://help.vtex.com/es/tutorial/configurar-puntos-de-recogida-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).

### Asociar un punto de recogida al almacén de una tienda física

Ahora, debes conectar el punto de recogida con el almacén local de la tienda física. O sea, es necesario informar al sistema de que los productos que se van a recoger en este punto de recogida (la tienda física) saldrán del almacén local, es decir, del almacén de la tienda. Para ello, sigue los pasos a continuación.

1. En el Admin VTEX de la cuenta franquicia deseada, accede a **Envío** > __Estrategia de envío__ > __Almacenes__, o escribe __Puntos de recogida__ en la barra de búsqueda en la parte superior de la página. En el menú lateral del Admin, haz clic en __Inventario y envío__.
2. Selecciona el almacén local de la tienda física o crea uno, si aún no existe. Si es necesario, consulta el artículo [Gestionar almacenes](https://help.vtex.com/es/tutorial/gestionar-almacenes--tutorials_137#registrar-almacen) para saber cómo registrar un nuevo almacén.
3. Activa la opción __Almacén VTEX Sales App__ haciendo clic el botón <i class="fas fa-toggle-on"></i>.
4. En el menú, selecciona los puntos de recogida que utilizarán el almacén de la tienda física.

Con esto, tu almacén estará conectado con el punto de recogida, y los clientes podrán recoger sus productos en esa tienda física. Cuando se activa esta opción, la __Logística__ no observa la política comercial del muelle vinculado al almacén en cuestión. 

>ℹ️ Al asociar el punto de recogida con el stock de la tienda física, esta configuración se aplica al stock de todas las políticas comerciales activas.

## Más información
- [Configurar seller white label como punto de recogida (pickup point)](https://help.vtex.com/es/tutorial/configurar-seller-white-label-como-punto-de-retirada-pickup-point--6fSUE2O0taaoKieAaiuc4e).

