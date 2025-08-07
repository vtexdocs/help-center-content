---
title: 'Aplicación Assembly Options'
id: 54mWg37mojrqOgCA79iqqk
status: PUBLISHED
createdAt: 2022-06-14T10:43:51.397Z
updatedAt: 2023-03-29T14:51:54.670Z
publishedAt: 2023-03-29T14:51:54.670Z
firstPublishedAt: 2022-06-22T19:48:18.050Z
contentType: tutorial
productTeam: Apps
author: 1malnhMX0vPThsaJaZMYm2
slugEN: assembly-options-app
legacySlug: aplicacion-assembly-options
locale: es
subcategoryId: 3xpuy7xGlzKKg6vxqiExZ2
---

<div class="alert alert-warning">
<p>Esta aplicación solo está disponible para las tiendas que usan<a href="https://vtex.com/br-pt/store-framework/"> VTEX IO</a>. Antes de continuar, debes <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-customizer">instalar y configurar Product Customizer</a> en tu tienda.</p>
</div>

En VTEX, puedes tener opciones de personalización de productos disponibles cuando usas [Assembly Options](https://help.vtex.com/es/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) (opciones de ensamblaje). Esta solución consiste en crear [anexos](https://help.vtex.com/es/tutorial/que-es-un-anexo--aGICk0RVbqKg6GYmQcWUm) para escenarios complejos en los cuales es necesario gestionar distintas combinaciones de productos, cantidades, ítems adicionales y costos.

La [aplicación Assembly Options](https://apps.vtex.com/vtex-admin-assembly-options/p) proporciona una interfaz para configurar y gestionar las opciones de personalización en tiendas que usan [VTEX IO](https://vtex.com/es-es/store-framework/) en lugar de implementar las opciones de ensamblaje a través de los anexos del Catálogo.

## Instalación 

La aplicación puede instalarse de forma gratuita a través de [VTEX App Store](https://apps.vtex.com/vtex-admin-assembly-options/p) o a través de [VTEX IO CLI](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-installation-and-command-reference), siguiendo los pasos de la [guía para desarrolladores Assembly Options](https://developers.vtex.com/vtex-developer-docs/docs/assembly-options-app).

<div class="alert alert-warning">
<p>Cuando la aplicación Assembly Options se instala en una <a href="https://help.vtex.com/es/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w">cuenta de seller</a>, los clientes de tu tienda pueden ver las opciones de personalización del producto en el <em>checkout</em>. Para que las opciones se muestren en la página del producto, debes instalar la aplicación en una <a href="https://help.vtex.com/es/tutorial/que-es-un-marketplace--680lLJTnmEAmekcC0MIea8">cuenta de marketplace</a>.</p>
</div>

Una vez instalada, la página **Catálogo > Opciones de ensamblaje** estará disponible en el Admin VTEX. A continuación, puedes ver las funcionalidades que estarán disponibles tras la instalación.

## Lista de Opciones de ensamblaje

En el Admin VTEX, en **Catálogo > Opciones de ensamblaje**, tendrás acceso a una lista con todas las Opciones de ensamblaje registradas en tu tienda cuando uses la aplicación.

![assembly-options-app-es](//images.ctfassets.net/alneenqid6w5/7AoMYLduvKisAxKMho64m0/322bc4f9209983c3fc2f5c7bc85321d6/assembly-options-app-es.PNG)

La información que aparecerá en la lista será:

* **ID:** muestra el ID de la opción de ensamblaje, la cual equivale al ID del [anexo](https://help.vtex.com/es/tutorial/que-es-un-anexo--aGICk0RVbqKg6GYmQcWUm) en el **Catálogo**.
* **Nombre:** muestra el nombre del anexo de la opción de ensamblaje.
* **Obligatorio:** cuando tiene un <i class="far fa-check-circle"></i>, esta columna indica que el anexo de opción de ensamblaje es obligatorio. Si el campo está vacío, significa que no es obligatorio.
* **Status:** indica el status de la opción de ensamblaje, la cual puede ser:
    * **Activa**: significa que las opciones de personalización están activadas y se mostrarán en tu tienda en caso de que [se asocien a un SKU]().
    * **Inactiva**: significa que las opciones de personalización están desactivadas, por lo tanto, no estarán disponibles para su selección.
* **Menú** <i class="fas fa-ellipsis-v"></i>: muestra las siguientes opciones:
    * <i class="far fa-pencil"></i> **Editar**: permite acceder a la página de edición de la Opción de ensamblaje.
    * <i class="far fa-trash-alt"></i> **Eliminar**: permite eliminar una opción de ensamblaje.

Puedes buscar una opción de ensamblaje por nombre utilizando la barra de búsqueda. También puedes filtrar los resultados que se muestran en la lista según su **Status** (**Activa** o **Inactiva**).

Para configurar una nueva opción de ensamblaje, debes hacer clic en el botón `Crear opción de ensamblaje`, que está en el extremo superior derecho de la página.

## Crear o editar Opción de ensamblaje

La página **Productos > Opciones de ensamblaje > Nuevas opciones de ensamblaje** contiene un formulario con la información necesaria para crear o editar una opción de ensamblaje. Sigue los pasos a continuación para crear una opción de ensamblaje.

1. Completa los campos de **Información básica**:
    * **Nombre:** nombre de la opción de ensamblaje. Por ejemplo: Ingredientes.
    * <i class="fas fa-toggle-on"></i> **Activa:** establece si la opción de ensamblaje estará activa, es decir, si estará disponible para usarse en la tienda.
    * <i class="far fa-square"></i> **Obligatorio:** establece si es obligatorio que tus clientes seleccionen una de las opciones disponibles a través de opciones de ensamblaje o no.
2. En **Grupos de SKU**, haz clic en `Agregar nuevo grupo`.
    Se creará un grupo sin nombre. Cada grupo reunirá las opciones de SKU disponibles para que escojan los clientes.
3. Rellena la información del grupo creado:
    * **Nombre**: nombre del grupo que se mostrará en la página del producto. Por ejemplo: Ingredientes extras.
    * **Cantidad mínima:** establece la cantidad mínima de ítems del grupo que podrá seleccionar el cliente de tu tienda.
    * **Cantidad máxima:** establece la cantidad máxima de ítems del grupo que podrá seleccionar el cliente de tu tienda.
4. Haz clic en `Agregar SKU` para incluir un SKU existente en el grupo.
5. Rellena la siguiente información respecto del SKU:
    * **ID del SKU:** identificador del SKU.
    * **Nombre de la tabla de precios asociada:** nombre de la tabla de precios a considerar para el SKU seleccionado. Cuando ese campo quede vacío, el SKU asumirá el precio de la política comercial registrada.
    * **Cantidad mínima:** cantidad mínima del ítem que podrá seleccionar el cliente de tu tienda.
    * **Cantidad máxima:** cantidad máxima del ítem que podrá seleccionar el cliente de tu tienda.
    * **Cantidad inicial:** cantidad del ítem que se seleccionará de forma predeterminada.
6. Haz clic en `Agregar`.
    La información del SKU que se agregó se mostrará en una tabla en la que luego podrás editar la información o eliminar el SKU del grupo.
    Si quieres, agrega otros SKU al grupo repitiendo desde el paso 4 en adelante. También puedes crear otros grupos repitiendo desde el paso 2 en adelante.
7. Una vez configurados todos los grupos, haz clic en `Guardar`.

Al guardar la opción de ensamblaje, se creará un anexo automáticamente en **Catálogo > Anexos**, con el prefijo `vtex.assembly-option.` en el nombre de la opción de ensamblaje creada. Ejemplo: `vtex.assembly-option.Ingredientes`.

<div class="alert alert-warning">
<p>Para que las opciones de personalización registradas en la opción de ensamblaje aparezcan en el <em>storefront</em>, debes asociar el anexo creado a un SKU en <strong>Catálogo > Productos y SKU > Configuraciones avanzadas > Anexos</strong>. Para hacerlo, sigue los pasos descriptos en <a href="https://help.vtex.com/es/tutorial/registrar-un-anexo--7zHMUpuoQE4cAskqEUWScU#asociar-el-anexo-a-un-sku">Asociar el anexo a un SKU</a>.</p>
</div>

## Más información

* [Opciones de ensamblaje](https://help.vtex.com/es/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH)
* [¿Qué es un anexo?](https://help.vtex.com/es/tutorial/que-es-un-anexo--aGICk0RVbqKg6GYmQcWUm)
