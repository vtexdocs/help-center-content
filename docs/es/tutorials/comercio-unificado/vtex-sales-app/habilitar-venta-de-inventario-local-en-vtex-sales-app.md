---
title: "Habilitar Venta de inventario local en VTEX Sales App"
id: 54eQN4rOH5yBYPGG2w8v9q
status: PUBLISHED
createdAt: 2023-05-19T17:30:02.393Z
updatedAt: 2024-11-04T21:09:14.115Z
publishedAt: 2024-11-04T21:09:14.115Z
firstPublishedAt: 2023-05-22T23:31:37.597Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: enabling-local-stock-sale-in-vtex-sales-app
legacySlug: habilitar-venta-en-mano-en-vtex-sales-app
locale: es
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

Venta de inventario local permite al vendedor de una tienda física realizar ventas desde la aplicación de Sales App utilizando un smartphone o tablet, sin tener que ir a la caja. Para activar Venta de inventario local en tu tienda, debes:

1. [Crear una cuenta franquicia](#crear-una-cuenta-franquicia)
2. [Crear un seller](#crear-un-seller)
3. [Configurar un punto de recogida](#configurar-un-punto-de-recogida)
4. [Crear un almacén](#crear-un-almacen)
5. [Actualizar el stock](#actualizar-el-stock)
6. [Conectar la cuenta franquicia a la tienda física](#conectar-la-cuenta-franquicia-a-la-tienda-fisica)
7. [Integrar el punto de ventas](#integrar-el-punto-de-ventas)

> ℹ️ Venta de inventario local solo puede configurarse en tiendas que ya utilicen Sales App. Para más información sobre cómo solicitar y configurar Sales App, consulta [Sales App - Primeros pasos y configuración](/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc).

## Crear una cuenta franquicia

El primer paso es [solicitar la creación de una cuenta de franquicia](/es/docs/tracks/crear-cuentas-franquicia) para tu tienda física. La cuenta franquicia estará asociada a la cuenta principal de tu tienda y heredará su catálogo. Si ya tienes una cuenta franquicia, ve al paso siguiente.

## Crear un seller

Tras crear una cuenta franquicia, debes [crear un seller](/es/docs/tutorials/agregar-seller) para que represente a la tienda física en la cuenta principal asociada a la cuenta franquicia. Para comprobar si tu tienda utiliza la recogida en tienda o los sellers para representar a las tiendas físicas, ve a la página **[Gestión de sellers](/es/docs/tutorials/gestion-de-sellers)** de tu Admin VTEX y busca el nombre de la tienda física.

## Configurar un punto de recogida

Tras crear la cuenta franquicia, debes insertar tanto la dirección de la tienda física como un [punto de recogida](/es/docs/tutorials/puntos-de-recogida) disponible. Para ello, sigue las instrucciones en el artículo [Cómo configurar puntos de recogida](/es/docs/tutorials/puntos-de-recogida#como-configurar-pontos-de-retirada).

Al punto de recogida creado se le asignará un ID que necesitarás al [Crear un almacén](crear-un-almacen). Si pierdes el ID, puedes verlo en la pantalla **Puntos de recogida** del Admin VTEX, en la columna **ID**.

## Crear un almacén

Con el punto de recogida registrado, debes introducir el [almacén](/es/docs/tutorials/almacen) disponible para tu tienda física en cada seller. Puedes compartir un almacén existente en tu tienda online con tu operación física o puedes crear un almacén exclusivo para las ventas de la tienda física. Para que un almacén esté disponible para Sales App, sigue los pasos a continuación:

1. En el Admin VTEX, ve a **Envío > Estrategia de envío** > **Almacenes**, o escribe **Estrategia de envío** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en `+ Crear almacén`.
3. Rellena los [campos del formulario](/es/docs/tutorials/gestionar-almacenes#campos-de-cadastro) y selecciona el punto de recogida configurado en el paso anterior.
4. Cambia <i class="fas fa-toggle-on"></i> a `Activo` para vincular el almacén de la tienda física con Sales App.
5. Haz clic en `Guardar`.

## Actualizar el stock

Después de configurar el almacén y el punto de recogida, se recomienda comprobar los ítems disponibles en el [stock](/es/docs/tutorials/gestionar-items-en-inventario) y actualizarlo. Puedes comprobar el stock de tu tienda de dos formas:

- **Manualmente**: en la página **[Gestión de stock](/es/docs/tutorials/gestionar-items-en-inventario)** en el Admin VTEX de la cuenta franquicia.
- **Integración ERP**: a través de la [integración ERP](https://developers.vtex.com/docs/guides/erp-integration-guide), agregando las cuentas franquicia a tu integración para que el [almacén se actualice automáticamente](https://developers.vtex.com/docs/guides/erp-integration-import-inventory#update-sku-inventory) por el ERP.

Si todos tus productos se muestran sin cantidad, tendrás que agregar las cantidades de esta tienda manualmente o a través de la API.

Puedes [habilitar la venta de un ítem sin stock](#habilitar-la-venta-de-un-item-sin-stock-opcional) si quieres asegurarte de que el ítem esté siempre disponible para los clientes en la tienda.

> ℹ️ Si has creado dos almacenes diferentes, uno para la tienda online y otro para Sales App, es importante gestionar correctamente la cantidad de ítems de cada uno.

## Conectar la cuenta franquicia a la tienda física

Para asegurarte de que los vendedores de tu tienda física tienen el acceso adecuado al almacén de la tienda en la que trabajan, es importante conectar la cuenta franquicia al perfil de los vendedores. Para ello, crea un [registro de tienda física](/es/tutorial/loja-fisica-instore-beta--N4M9njT9xomdWD7mQyPt7) en Sales App.

Deberás seleccionar un vendedor de la tienda en la que quieras probar Venta en mano y seguir los pasos que se indican a continuación.

1. Tras [seleccionar un vendedor](/es/tutorial/vendedores-instore-beta--4rzit1pzp28km4HSDEdrEC), accede a Sales App e inicia sesión.
2. Busca un ítem que exista en el almacén de la cuenta franquicia registrada. Este ítem debe mostrar la cantidad disponible correspondiente en el stock del seller.

![instore-pdp-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/comercio-unificado/vtex-sales-app/habilitar-venta-de-inventario-local-en-vtex-sales-app_1.png)

> ℹ️ Si has habilitado el stock ilimitado, el número mostrado será superior a 1 millón de ítems y no cambiará cuando se complete una venta.

### Habilitar la venta de un ítem sin stock (opcional)

También puedes configurar la Venta en mano para ignorar la cantidad de ítems en stock y forzar la disponibilidad de los ítems sin necesidad de activar el stock ilimitado. Para ello, sigue las instrucciones a continuación:

1. Ve a la configuración técnica de Sales App utilizando la siguiente URL. Sustituye `cuenta_principal` por el nombre de la cuenta principal de tu tienda en el Admin VTEX:
   ```
   https://{cuenta_principal}.myvtex.com/admin/portal/#/sites
   ```
2. Haz clic en el botón del engranaje <i class="fas fa-cog"></i> para editar.
3. Selecciona la pestaña **Código**.
4. En la pestaña lateral, selecciona `checkout-instore-custom-js`.
   ![instore-custom-js-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/comercio-unificado/vtex-sales-app/habilitar-venta-de-inventario-local-en-vtex-sales-app_2.png)
5. En la clave `window.INSTORE_CONFIG`, agrega la flag `venderSinStockEnMano: true`.
   ![sellWithoutStockInHands-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/comercio-unificado/vtex-sales-app/habilitar-venta-de-inventario-local-en-vtex-sales-app_3.png)
6. Haz clic en <i class="fas fa-save"></i> `Guardar`.

### Habilitar la venta con carrito mixto (opcional)

Una venta con carrito mixto es una venta que contiene ítems que el cliente recogerá en la tienda en el momento de la compra e ítems que se le entregarán en su domicilio. Esta funcionalidad está configurada por defecto en las tiendas VTEX. Para obtener más información sobre la funcionalidad, consulta nuestro artículo [División de pedidos y división de envíos](/es/docs/tutorials/division-de-pedidos-y-division-de-entregas).

## Integrar el punto de ventas

Por último, para completar una venta en mano, debes emitir una factura. Es posible que el vendedor quiera actualizar el stock local del punto de ventas con la información de esta venta. Para hacerlo, es necesario integrar tu punto de ventas. Puedes obtener más información en nuestro artículo [Integración de Venta de inventario local](https://developers.vtex.com/docs/guides/integration-vtex-sales-app-local-stock-sale).
