---
title: 'Opciones de envío (Beta)'
id: 1fRDJFcHCtpTnk7GNyaRDY
status: PUBLISHED
createdAt: 2025-08-22T17:00:47.486Z
updatedAt: 2025-10-08T20:13:21.470Z
publishedAt: 2025-10-08T20:13:21.470Z
firstPublishedAt: 2025-08-22T20:33:50.257Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: delivery-options-beta
legacySlug: opciones-de-envio-beta
locale: es
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con [nuestro Soporte](https://supporticket.vtex.com/support).

La página **Opciones de envío** del Admin VTEX permite configurar ofertas de envío flexibles y precisas durante la jornada de compra, tales como diferentes tipos de disponibilidad de entrega y zonas geográficas, y también cómo se muestran a los clientes.

Esto proporciona a los retailers autonomía para crear, configurar y gestionar las opciones de envío como contenido estratégico dentro de la plataforma VTEX y mayor flexibilidad para alinear la capacidad logística con los objetivos comerciales, optimizando la experiencia de compra de los clientes.

Las opciones de envío utilizan la información registrada en las [políticas de envío](/es/tutorial/politica-de-envio--tutorials_140) de la tienda. Si no tienes estos ajustes configurados o ninguno cumple con las metas de las opciones de envío, consulta el artículo [Crear una política de envío](/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT).

La página Opciones de envío te permite realizar las siguientes acciones:

- [Crear](#crear-opcion-de-envio)
- [Editar](#editar-una-opcion-de-envio)
- [Desactivar](#desactivar-una-opcion-de-envio)
- [Activar](#activar-una-opcion-de-envio)
- [Eliminar](#eliminar-una-opcion-de-envio)
- [Buscar](#buscar-una-opcion-de-envio)
- [Filtrar](#filtrar-una-opcion-de-envio)
- [Configurar preferencias](#preferencias-de-opcion-de-envio)

![delivery-options-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/opciones-de-envio-beta_1.png)

La página presenta la siguiente información en forma de tabla:

| Columna | Descripción |
|---|---|
| Nombre | Nombre que identifica la opción de envío que se mostrará en el storefront. |
| Meta de entrega | Duración del plazo de entrega de la opción de envío. |
| Zona de entrega | Lugares en que la opción de envío estará disponible. |
| Status | Status de la opción de envío, que puede ser:<br><ul><li>Activa: la opción de envío está disponible para el cliente.</li><li>Inactiva: la opción de envío no está disponible para el cliente.</li></ul> |

## Crear opción de envío

Para crear una nueva opción de envío sigue los pasos a continuación.

1. En el Admin VTEX, accede a **Envío > Opciones de envío** o ingresa **Opciones de envío** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Crear opción de envío`.
3. Llena los campos del formulario:
  ![delivery-options-form-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/opciones-de-envio-beta_2.png)
   - **Método de envío:** selecciona el tipo de método de envío (**Envío**, **Entrega programada**, **Recogida**, **Recogida programada**).
   - **Nombre de la opción:** ingresa el nombre de la opción que se mostrará al cliente durante la compra.
   - **Usar opción como filtro en la vitrina de la tienda**: marca la casilla para permitir que los clientes utilicen esta opción para filtrar los productos con los [filtros de Intelligent Search](/es/tutorial/filtros--k24mQQa9SjmhNWSwdqIMB).

   > ⚠️ Los filtros de métodos de envío solo se mostrarán en la lista de productos para el cliente si esta opción está activada. Si está desactivada, los filtros no se mostrarán.

   - **Formato de la meta**: selecciona la unidad de tiempo (**Días** u **Horas**) que se debe utilizar para la entrega.
   - **Condición**: define la condición (**Listo en**, **En hasta**, **Entre**) del plazo de la opción de envío.
   - **Meta mínima:** cantidad mínima de horas o días para el plazo de la opción de envío.
   - **Meta máxima:** cantidad máxima de horas o días para el plazo de la opción de envío.
   - **Zonas de envío**: haz clic en el botón `+ Agregar zonas` y selecciona las zonas de envío en que deseas que la opción de envío funcione. Puedes buscar por zona de envío utilizando la barra de búsqueda. Haz clic en `Guardar` para cerrar la ventana.
4. Haz clic en `Crear opción de envío`.

La opción de envío estará activa y disponible para los clientes de la tienda.

## Editar una opción de envío

Para editar una opción de envío sigue los pasos a continuación.

1. En el Admin VTEX, accede a **Envío > Opciones de envío** o ingresa **Opciones de envío** en la barra de búsqueda en la parte superior de la página.
2. En la opción de envío que deseas editar, haz clic en los tres puntos verticales <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en <i class="fas fa-pencil-alt"></i> `Editar opción de envío`.
4. Edita la información de la opción de envío que deseas modificar.
5. Haz clic en `Guardar opción de envío`.

La opción de envío estará activa y actualizada.

## Desactivar una opción de envío

Para desactivar una opción de envío sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Opciones de envío** o ingresa **Opciones de envío** en la barra de búsqueda en la parte superior de la página.
2. En la opción de envío que deseas desactivar, haz clic en los tres puntos verticales <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en <i class="fas fa-pause-circle"></i> `Desactivar opción de envío`.
4. Haz clic en `Desactivar opción de envío`.

La opción de envío estará desactivada.

## Activar una opción de envío

Para activar una opción de envío que está desactivada sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Opciones de envío** o ingresa **Opciones de envío** en la barra de búsqueda en la parte superior de la página.
2. En la opción de envío que deseas activar, haz clic en los tres puntos verticales <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en <i class="fas fa-play-circle"></i> `Activar opción de envío`.
4. Haz clic en `Activar opción`.

La opción de envío estará activa y disponible para los clientes de la tienda.

## Eliminar una opción de envío

Para eliminar una opción de envío sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Opciones de envío** o ingresa **Opciones de envío** en la barra de búsqueda en la parte superior de la página.
2. En la opción de envío que deseas eliminar, haz clic en los tres puntos verticales <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en <i class="fas fa-trash-alt"></i> `Eliminar opción de envío`.
4. Haz clic en `Eliminar opción`. Recuerda que la acción de eliminar no se puede deshacer y puede alterar la experiencia de compra si la opción de envío estaba activa.

La opción de envío se eliminará.

## Buscar una opción de envío

Para buscar una opción de envío, haz clic en la barra de búsqueda y escribe el nombre de la opción de envío que deseas encontrar.

## Filtrar una opción de envío

Para filtrar la lista de opciones de envío, haz clic en uno de los filtros descritos a continuación y selecciona las opciones deseadas.

- **Método de envío:** filtra utilizando los métodos de envío de las opciones de envío, que son **Envío**, **Entrega programada, Recogida** y **Recogida programada**.
- **Zona de entrega:** filtra por las zonas de entrega configuradas en las opciones de envío. Puedes buscar por el nombre de una zona de entrega en la barra de búsqueda.
- **Status:** filtra por el status de las opciones de envío, **Activa** o **Inactiva**.
- **Exhibición en la vitrina**: filtra las opciones de envío configuradas como [filtro en la vitrina de la tienda](#crear-opcion-de-envio), **Habilitadas** o **No habilitadas**.

Haz clic en `Aplicar` para guardar el filtro seleccionado. Para remover la selección de filtros, haz clic en `Limpiar` en cada filtro aplicado.

## Preferencias de opción de envío

Configura las opciones de envío en el storefront para personalizar la experiencia del cliente y optimizar la presentación. Sigue los pasos de configuración para aplicar tus preferencias:

1. En el Admin VTEX, accede a **Envío > Opciones de envío** o ingresa **Opciones de envío** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Preferencias`.
3. Selecciona la forma en que deseas mostrar tus opciones de envío en la tienda.
![delivery-options-preferencias-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/envío-beta/opciones-de-envio-beta_3.png)
   - **Mostrar siempre todas las opciones disponibles para el producto:** todas las opciones de envío que están disponibles en las condiciones de envío se mostrarán en la página del producto y en el checkout de la tienda.
   - **Mostrar solo la opción de menor costo y la de menor plazo:** solo se mostrarán las opciones de envío con el menor costo o el menor plazo en la página de producto y en el checkout de la tienda.
4. Haz clic en `Guardar` para finalizar.
