---
title: 'Cómo crear un plan de suscripción'
id: 1qGRoFczm98Wgt81f9mUqC
status: PUBLISHED
createdAt: 2021-07-06T14:35:00.792Z
updatedAt: 2022-12-22T20:39:08.965Z
publishedAt: 2022-12-22T20:39:08.965Z
firstPublishedAt: 2021-07-06T17:39:43.728Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-a-subscription-plan
locale: es
legacySlug: como-crear-un-plan-de-suscripcion-beta
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Para que los planes de **Suscripción** estén disponibles, primero debe instalar la aplicación Suscripciones y configurar los ajustes necesarios. Lea el artículo [Cómo configurar Suscripciones en su tienda](https://help.vtex.com/es/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj) para más información sobre este proceso.

Después de configurar los ajustes, debe crear planes de suscripción para ponerlos a disposición de sus clientes y asociar los productos a los planes. Los planes sirven para indicar que la funcionalidad Suscripciones está activa para determinados productos y mostrar las frecuencias de suscripción disponibles.

Hay dos formas de crear un plan de suscripción. Lo más recomendable es crear un [nuevo plan directamente en el módulo Suscripciones](#nuevo-plan-en-el-modulo-de-suscripciones).

La otra manera es crear un [Anexo de SKU que haga referencia a la suscripción en el Catálogo](#anexo-de-sku-en-el-catalogo). El anexo de SKU equivale al plan.

>⚠️ No debe realizar ambas configuraciones, basta elegir una de ellas. Solo tiene que crear el nuevo plan en el módulo **Suscripciones** o el anexo de SKU en **Catálogo**. De lo contrario, el plan se duplicará.

## Nuevo plan en el módulo Suscripciones

La creación de un nuevo plan desde el módulo **Suscripciones** es la forma más recomendable, ya que centraliza la experiencia en un único módulo de la plataforma VTEX. Siga los pasos a continuación para realizar este procedimiento.

1. Acceda a la página **Planes** en el módulo **Suscripciones**.
2. Haga clic en el botón `Nuevo plan`.
3. Rellene la información que aparece a continuación en la pestaña [Configuraciones](#configuraciones).
4. Haga clic en la pestaña [Productos asociados](#productos-asociados) y seleccione los productos que desea asociar a los planes de suscripción.
5. Haga clic en `Salvar` para guardar los cambios.

>⚠️ Todos los planes se guardan como activos, aunque no tengan ningún producto asociado. Los planes que no tienen productos asociados no aparecen como opción para el cliente en el momento de la compra.

### Configuraciones

En la pestaña **Configuraciones**, rellene los campos a continuación.

#### Identificación

* **Nombre:** ingrese un nombre para el nuevo plan de suscripción.
* **ID:** este campo se rellena automáticamente con un identificador del plan de suscripción con el formato `vtex.subscription.{nombre}`. El sistema rellena el `{nombre}` con el nombre del plan ingresado en el campo anterior.

#### Frecuencias permitidas

En esta sección, haga clic en el botón `Agregar frecuencia` para crear una periodicidad permitida para la suscripción. Este valor se mostrará para que el cliente de la tienda elija la frecuencia con la que quiere repetir un pedido.

Puede ofrecer la opción de crear pedidos diarios, semanales, mensuales o anuales, dependiendo de su estrategia de negocio.

Rellene los campos a continuación para establecer la frecuencia deseada.

* **Seleccione una frecuencia:** escoja una de las opciones de la lista, entre `Día`, `Semana`, `Mes` o `Año`.
* **Ejecutar cada:** escoja un número de días, semanas, meses o años que corresponda al ciclo de creación de los pedidos.

**Ejemplo:** si desea ofrecer la opción de suscribirse a un producto diariamente, puede seleccionar la frecuencia **Día** y elegir la opción **1 día**. Si desea ofrecer la opción de suscribirse a un producto cada 2 semanas, puede seleccionar la frecuencia **Semana** y elegir la opción **2 semanas**.

Para guardar la frecuencia creada, haga clic en el botón `Añadir`.

Para eliminar una frecuencia previamente creada, debe hacer clic en el botón de papelera (<i class="far fa-trash-alt"></i>).

Si desea, puede ofrecer varias opciones de frecuencia en el mismo plan. En este caso, debe hacer clic de nuevo en el botón `Agregar frecuencia` y repetir el proceso de rellenar  la configuración con las otras frecuencias deseadas. De este modo, el cliente puede elegir la frecuencia que prefiera de entre las opciones.

>⚠️ No es posible asignar un periodo de caducidad al plan de suscripción desde el módulo **Suscripciones**. Solo los planes de suscripción configurados como Anexos de SKU en **Catálogo** pueden tener periodos de caducidad configurados.

### Productos asociados

La pestaña de **Productos asociados** muestra la lista de productos y SKU registrados en su tienda y le permite seleccionar productos o SKU para asociarlos a su plan de suscripción. En esta pestaña puede navegar entre la lista **Todos** y la lista **Asociados**.

En la lista **Todos**, puede acceder a todos los productos y SKU del catálogo de su tienda. Para realizar una búsqueda, puede ingresar el ID del producto o el SKU en la barra de búsqueda.

La lista de productos y SKU tiene las siguientes columnas.

* **Imagen:** es la imagen registrada del producto o SKU.
* **Producto:** es el nombre del producto.
    * **Id:** es el número de ID del producto.
    * **SkuId:** es el número de ID del SKU.
* **Marca:** es el nombre de la marca del producto.
* **Categoría:** es el nombre de la categoría del producto.

En esta pantalla, puede realizar las siguientes acciones:

* **Seleccionar:** al hacer clic en la casilla (<i class="far fa-square"></i>) en la fila de cada producto, puede seleccionar productos o SKU individualmente. Otra opción es hacer clic en la primera casilla (<i class="far fa-square"></i>) y seleccionar todos los productos y SKU que aparecen en la página para añadirlos al plan, según se ilustra en la siguiente imagen.

![selecionarskus ES](https://images.ctfassets.net/alneenqid6w5/3nBgV1SCLFqG92L1rOBXOX/9786f043859be876f63855568e6d00d3/selecionarskus_ES.gif)

* __Botón de flecha__ (<i class="fas fa-chevron-down"></i>): muestra los SKU, es decir, las variaciones del producto.
* **Añadir:** al hacer clic en este botón, se añaden los productos o SKU al plan de suscripción.
* **Eliminar:** al hacer clic en este botón, se eliminan los productos o SKU del plan de suscripción.

Los productos añadidos a su plan de suscripción aparecen en la lista **Asociados**, donde puede elegir eliminarlos del plan individualmente o por selección.

Para navegar entre las páginas de ambas listas, utilice las flechas <i class="fas fa-chevron-left"></i> y <i class="fas fa-chevron-right"></i> en la esquina inferior derecha de la pantalla.

## Modo alterno: anexo de SKU en el Catálogo

La creación de un anexo SKU es un modo **alterno** que tiene una función equivalente al plan de suscripción. El anexo indica que la funcionalidad de suscripción está activa para un determinado SKU, y también qué frecuencias tiene disponibles.

Recomendamos utilizar el método descrito anteriormente para crear un plan directamente en el módulo **Suscripciones**. Sin embargo, si desea utilizar el anexo de SKU, siga los pasos indicados en el artículo [Cómo crear un anexo de suscripción](https://help.vtex.com/es/tutorial/como-crear-un-anexo-de-suscripcion--2bUuKyPflA8cOGLv8OvaKK).

## Más información

* [Planes de suscripción (Beta)](https://help.vtex.com/es/tutorial/planos-de-assinatura-beta--5kczKRqHEsrs1tYtRcY8wR)
