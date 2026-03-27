---
title: 'Crear o editar categorías, atributos y variaciones (Beta)'
id: 1lzs3fHjM9N7CKFOxCCYQi
status: PUBLISHED
createdAt: 2025-07-09T19:53:44.834Z
updatedAt: 2025-07-14T20:16:34.071Z
publishedAt: 2025-07-14T20:16:34.071Z
firstPublishedAt: 2025-07-14T18:56:57.453Z
contentType: tutorial
productTeam: Management
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: creating-or-editing-categories-attributes-and-variations-beta
legacySlug: crear-o-editar-categorias-atributos-y-variaciones-beta
locale: es
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Esta funcionalidad se encuentra en fase beta, lo que significa que estamos trabajando para optimizarla. Si tienes alguna duda ponte en contacto con nuestro equipo de [Soporte](https://supporticket.vtex.com/support).

La página **Catálogo > Categorías** del Admin VTEX te permite gestionar el árbol de categorías de tu tienda. Este artículo describe cómo crear y configurar categorías, [atributos y variaciones](#terminologia) y se divide en las siguientes secciones:

* [Terminología](#terminologia)
* [Interfaz de categorías, atributos y variaciones](#interfaz-de-categorias-atributos-y-variaciones)
* [Acciones en categorías](#acciones-en-categorias)
    * [Agregar categorías](#agregar-categorias)
    * [Editar categorías](#editar-categorias)
    * [Buscar categorías por nombre](#buscar-categorias-por-nombre)
    * [Ocultar categorías](#ocultar-categorias)
* [Acciones en grupos de atributos o variaciones](#acciones-en-grupos-de-atributos-o-variaciones)
    * [Agregar grupo](#agregar-grupo)
    * [Editar grupo](#editar-grupo)
    * [Identificar grupos y atributos heredados](#identificar-grupos-y-atributos-heredados)
* [Acciones en atributos](#acciones-en-atributos)
    * [Agregar atributos](#agregar-atributos)
    * [Editar atributos](#editar-atributos)
    * [Ver status de activación de atributos y sus valores](#ver-status-de-activacion-de-atributos-y-sus-valores)
    * [Ocultar atributos inactivos](#ocultar-atributos-inactivos)
* [Acciones en variaciones](#acciones-en-variaciones)
    * [Agregar variaciones](#agregar-variaciones)
    * [Editar variaciones](#editar-variaciones)
    * [Ver status de activación de variaciones y sus valores](#ver-status-de-activacion-de-variaciones-y-sus-valores)
    * [Ocultar variaciones inactivas](#ocultar-variaciones-inactivas)

> ❗ Las categorías (atributos o variaciones) no se pueden editar después de creadas; solo se pueden editar, desactivar u ocultar en la interfaz.

## Terminología 

En la fase beta utilizaremos una nueva nomenclatura para los siguientes términos:

| **Nombre actual** | **Nombre en beta** |
| --- | --- |
| [Especificaciones de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacion-de-producto) | Atributos |
| [Especificaciones de SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-sku) | Variaciones |
| [Grupos de especificaciones de productos o de SKUs](/es/docs/tutorials/crear-grupo-de-especificaciones-en-una-categoria) | Grupos de atributos o de variaciones |

## Interfaz de categorías, atributos y variaciones

Al acceder a **Catálogo > Categorías** en el Admin VTEX, la vista predeterminada muestra la interfaz **Categorías** y **Atributos**, según se ilustra a continuación:

![category_attributes_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/crear-o-editar-categorias-atributos-y-variaciones-beta_1.png)

A continuación se describe la información que se muestra y las acciones que se pueden realizar en esta página:

* **A - Buscar categoría:** después de [agregar categorías](#agregar-categorias), puedes [utilizar la barra de búsqueda](#buscar-categorias-por-nombre) para buscar la opción deseada por nombre.
* **B / C - Crear categoría:** hay dos formas de [agregar una nueva categoría](#agregar-categorias): haciendo clic en el ícono + que se muestra junto a la barra de búsqueda o colocando el mouse sobre **Todos los productos** y haciendo clic en el ícono + mostrado.
* **D - Ocultar categorías:** al hacer clic en el ícono en la parte superior de la página junto al nombre de la categoría, puedes [ocultar la lista de categorías](#ocultar-categorias).
* **E - Crear subcategoría:** al situar el mouse sobre el nombre de una categoría, se muestra el ícono +, que permite crear una categoría anidada, es decir, una subcategoría.
* **F - Editar categoría:** al situar el mouse sobre el nombre de una categoría, se muestra el menú de tres puntos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>, que permite [editar la categoría](#editar-categorias).
* **G - Atributo heredado:** si se muestra el ícono de compartir al lado de un atributo [significa que se hereda](#identificar-grupos-y-atributos-heredados) como una configuración de la categoría aplicada a **Todos los productos**. Las subcategorías tienen todos los atributos que están configurados en la categoría principal, en otras palabras, "heredan" la configuración.
* **H - Status del atributo:** el [atributo puede tener status activo](#ver-status-de-activacion-de-atributos-y-sus-valores) y mostrar un círculo verde, lo que significa que ha sido activado y puede reflejarse en el storefront. Si está inactivo, se mostrará con un círculo blanco.
* **I - Tipo de atributo:** el ícono al lado del nombre del atributo representa el tipo del atributo, que puede ser "Texto Libre", "Texto grande", "Selección única" o "Selección múltiple". 
* **J - Editar atributo:** después de agregar un atributo puedes [editarlo](#editar-atributos) haciendo clic en el ícono de lápiz <i class="fas fa-pencil-alt" aria-hidden="true"></i> en la fila del atributo deseado.
* **K - Agregar atributo:** al hacer clic en el ícono + junto al nombre del grupo de atributos, puedes [agregar un atributo](#agregar-atributos). 
* **L - Ocultar atributos inactivos:** [puedes ocultar los atributos inactivos](#ocultar-atributos-inactivos) en la interfaz haciendo clic en el ícono de ojo <i class="fas fa-eye" aria-hidden="true"></i>.
* **M - Agregar grupo de atributos:** al hacer clic en el ícono + en la parte superior derecha de la página, puedes [crear un grupo de atributos](#agregar-grupo).
* **N - Editar categoría:** al hacer clic en el menú de tres puntos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> en la parte superior derecha de la página, puedes [editar la categoría](#editar-categorias) seleccionada.
* **O - Seleccionar opción:** al acceder a la página de **Categorías**, puedes elegir entre la vista de `Atributos` (relacionados con productos) o la vista de `Variaciones` (relacionadas con SKUs).

Al seleccionar la vista de **Variaciones** se muestra la siguiente interfaz:

![category_variations_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/crear-o-editar-categorias-atributos-y-variaciones-beta_2.png)

A continuación se describe la información que se muestra y las acciones que se pueden realizar en esta página:

* **P - Status de la variación:** la [variación puede tener status activo](#ver-status-de-activacion-de-variaciones-y-sus-valores) y mostrar un círculo verde, lo que significa que ha sido activada para aparecer en el storefront. Si está inactivo, se mostrará con un círculo blanco.
* **Q - Tipo de la variación:** el ícono junto al nombre del atributo representa el tipo de la variación, que puede ser "Selección única" o "Selección múltiple".
* **R - Agregar variación:** al hacer clic en el ícono + junto al nombre del grupo, puedes [agregar una variación](#agregar-variaciones) a ese grupo.
* **S - Ocultar variaciones inactivas:** [puedes ocultar las variaciones inactivas](#ocultar-variaciones-inactivas) en la interfaz haciendo clic en el ícono de ojo <i class="fas fa-eye" aria-hidden="true"></i>.
* **T - Agregar grupo de variaciones:** al hacer clic en el ícono + en la parte superior derecha de la página, puedes [crear un grupo de variaciones](#agregar-grupo).
* **U - Editar categoría:** al hacer clic en el menú de tres puntos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> en la parte superior derecha de la página, puedes [editar la categoría](#editar-categorias) seleccionada.
* **V - Editar variación:** después de agregar una variación, puedes [editarla](#editar-variaciones) haciendo clic en el ícono de lápiz <i class="fas fa-pencil-alt" aria-hidden="true"></i> en la fila correspondiente a la variación deseada.

## Acciones en categorías

En el Admin VTEX, accede a **Catálogo > Categorías** o ingresa **Categorías** en la barra de búsqueda en la parte superior de la página. La interfaz de edición de categorías siempre se muestra a la izquierda, sin importar si seleccionas `Atributos` o `Variaciones`. 

Puedes realizar las siguientes acciones en las categorías:

* [Agregar categorías](#agregar-categorias)
* [Editar categorías](#editar-categorias)
* [Buscar categorías por nombre](#buscar-categorias-por-nombre)
* [Ocultar categorías](#ocultar-categorias)

> ⚠️ No puedes eliminar categorías después de agregarlas, solo las puedes [editar](#editar-categorias) o desactivar.

### Agregar categorías

Para crear una categoría sigue los pasos a continuación:

> ❗ Si creas una categoría como categoría principal, no la puedes cambiar a subcategoría. La misma regla se aplica a las subcategorías. No las puedes cambiar a categorías ni modificar su asociación a la categoría principal.

1. En la esquina izquierda de la página, junto a la barra de búsqueda, haz clic en el ícono + o coloca el mouse en **Todos los productos** y haz clic en el + que se muestra. También puedes hacer clic en el ícono + junto al nombre de una categoría.
2. Ingresa el nombre de la categoría en la ventana modal que se abre. Este es el único campo obligatorio.

  > ⚠️ El nombre de la categoría es importante para [SEO](/es/docs/tutorials/mejorar-el-seo-de-las-paginas-de-lista-de-productos) (optimización para buscadores) y recomendamos:<ul><li>Utilizar palabras simples.</li><li>Evitar otros idiomas.</li><li>Evitar ortografía compleja.</li><li>Utilizar un máximo de 150 caracteres.</li></ul>

3. Si deseas activar la categoría que estás creando en la tienda, marca la casilla **Activar**. Para mantenerla desactivada, deja la casilla sin marcar.
4. En la sección **Información general**, puedes llenar los siguientes campos:
    * **Categoría principal:** si la categoría que estás creando es una subcategoría (está anidada dentro de otra), ingresa el código numérico de la categoría principal en este campo.
    * **Categoría global VTEX:** la [categoría global](/es/docs/tutorials/configurando-a-categoria-global) es una taxonomía creada por Google para [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=es-419&sjid=16171769990677583671-NA), predefinida como un árbol único en la plataforma VTEX.
5. En la sección **Storefront y SEO** puedes llenar los siguientes campos:
    * **Palabras sustitutas:** sinónimos de los nombres de la categoría. Este campo es importante para que las búsquedas sean más amplias. Puedes incluir varias palabras, separadas por coma, hasta un límite de 200 caracteres.
    * **Título de la página:** texto que se muestra en la pestaña del navegador y que se corresponde con el título de la página de la categoría en el sitio web. Este campo es muy importante para SEO. No admite el uso de etiquetas HTML y debe contener 150 caracteres o menos.
    * **Descripción:** breve resumen de la categoría. Recomendamos utilizar 200 caracteres o menos para que los mecanismos de búsqueda muestren la descripción correctamente en las páginas de resultados. El campo solo admite texto simple. No se pueden utilizar tags de HTML.
    * **Prioridad en la búsqueda de la tienda:** números enteros utilizados para definir la prioridad de la categoría en los resultados de búsqueda en el sitio web. Un valor más alto significa mayor prioridad en los resultados y 0 o dejar el campo en blanco significa ninguna prioridad. Para más información, consulta el artículo [¿Cómo funciona el campo Puntuación?](/es/docs/tutorials/como-funciona-el-campo-puntuacion).
6. En la sección **Storefront**, puedes marcar las siguientes opciones si lo deseas:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Mostrar en el menú:** hace que la categoría o departamento sea visible en el menú superior y en el menú lateral de la tienda.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Menú con link activo:** determina si se puede hacer clic en la categoría visible en la tienda para redirigir a la página de la categoría.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Filtro de marca:** define si la página de la categoría o departamento debe mostrar la opción de filtrar por [marcas](/es/docs/tracks/marcas-definicion-de-concepto).
7. En **Modo de visualización de productos**, determinas cómo se mostrarán los SKUs de los productos de la categoría en la vitrina de la tienda mediante las siguientes opciones:
    * **Lista de SKUs:** ítems organizados en formato de lista. Esta es la visualización predeterminada si no cambias la selección.
    * **Cuadros de selección (combo box):** los ítems se seleccionan mediante casillas.
    * **Íconos de selección con botones de opción:** los ítems se seleccionan mediante una lista en la que solo puedes escoger un solo ítem por vez.
    * **Seguir definición de la variación:** la visualización del producto depende de la configuración del SKU, es decir, está determinada por la variación.
8. Haz clic en `Crear`.

Se mostrará un mensaje de confirmación *Categoría creada con éxito*.

### Editar categorías

Para editar una categoría sigue los pasos a continuación:

1. Coloca el mouse sobre la categoría deseada y haz clic en el menú de tres puntos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
2. Haz clic en <i class="fas fa-pencil-alt" aria-hidden="true"></i> **Editar categoría**.
3. Edita los datos deseados. 

  > ❗ No se pueden editar los siguientes ajustes:<ul><li>Nivel de jerarquía de la categoría (categoría principal o subcategoría).</li><li>Asociaciones entre las categorías y subcategorías.</li></ul>

4. Haz clic en `Aplicar`.

Se mostrará un mensaje de confirmación *Categoría actualizada*.

### Buscar categorías por nombre

Después de crear las categorías, puedes encontrarlas utilizando la barra de búsqueda indicada por el ícono lupa <i class="fas fa-search" aria-hidden="true"></i>. La búsqueda solo tiene en cuenta el nombre de las categorías y subcategorías.

> ℹ️ Puedes utilizar el acceso rápido de teclado para buscar presionando la tecla `/`. El cursor se colocará en la barra de búsqueda automáticamente donde puedes ingresar el nombre de la categoría deseada.

### Ocultar categorías

La página **Categorías** te permite ocultar las listas de categorías haciendo clic en el ícono al lado del nombre de la categoría en la parte superior de la página. Para volver a mostrar la lista de categorías, haz clic en el mismo ícono.

## Acciones en grupos de atributos o variaciones

En **Catálogo**, un grupo es un conjunto de atributos o variaciones relacionados entre sí. Para gestionar los grupos, accede a **Catálogo > Categorías** y selecciona `Atributos` o `Variaciones`. Las acciones disponibles para los grupos son:

* [Agregar grupo](#agregar-grupo)
* [Editar grupo](#editar-grupo)
* [Identificar grupos y atributos heredados](#identificar-grupos-y-atributos-heredados)

Todo grupo creado en la página **Atributos** se refleja en la página de **Variaciones**, y viceversa. Sin embargo, cada grupo solo muestra los atributos o variaciones configurados y se muestran según la página seleccionada. 

### Agregar grupo

Para crear un grupo sigue los pasos a continuación:

1. En la parte superior de la página **Atributos** o **Variaciones**, haz clic en el ícono + .
2. Ingresa el nombre del grupo. El límite es de 100 caracteres.
3. Haz clic fuera del campo para que se muestre la opción de guardar.
4. Haz clic en `Guardar`.

Se mostrará un mensaje de confirmación *Grupo de la categoría guardado con éxito*. El grupo agregado automáticamente se mostrará en orden alfabético.

> ℹ️ Para más detalles sobre cómo incluir atributos en un grupo, consulta la sección [Agregar atributos](#agregar-atributos) y para incluir variaciones, consulta [Agregar variaciones](#agregar-variaciones).

### Editar grupo

Puedes editar un grupo cambiando su nombre, [incluyendo atributos](#agregar-atributos) o [incluyendo variaciones](#agregar-variaciones), según se describe en las próximas secciones.

Para cambiar el nombre de un grupo sigue los pasos a continuación:

1. En la página de **Atributos** o **Variaciones**, haz doble clic sobre el nombre del grupo deseado.
2. Cambia el nombre.
3. Haz clic fuera del campo para que se muestre la opción de guardar.
4. Haz clic en `Guardar`.

Se mostrará un mensaje de confirmación *Grupo de la categoría guardado con éxito*.

### Identificar grupos y atributos heredados

Un grupo de atributos creado en la categoría principal es obligatorio en todas las subcategorías, por eso se dice que es "heredado".

En la interfaz **Atributos**, los grupos y atributos heredados se indican mediante un ícono de compartir a la izquierda del nombre, como se ilustra a continuación:

![inherited_atribute_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/crear-o-editar-categorias-atributos-y-variaciones-beta_3.png)

> ℹ️ Para más información sobre status de los atributos, consulta la sección [Ver status de activación de atributos y sus valores](#ver-status-de-activacion-de-atributos-y-sus-valores).

## Acciones en atributos

En la fase beta, estamos utilizando el término *atributos* en vez de [especificaciones de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacion-de-producto), que son las propiedades informativas que pueden registrarse en los productos. En **Catálogo > Categorías**, la página **Atributos** permite realizar las siguientes acciones:

* [Agregar atributos](#agregar-atributos)
* [Editar atributos](#editar-atributos)
* [Ver status de activación de atributos y sus valores](#ver-status-de-activacion-de-atributos-y-sus-valores)
* [Ocultar atributos inactivos](#ocultar-atributos-inactivos)

Para más detalles sobre la interfaz, consulta la sección [Interfaz de categorías, atributos y variaciones](#interfaz-de-categorias-atributos-y-variaciones).

### Agregar atributos

Para registrar un atributo sigue los pasos a continuación:

> ❗ No se puede remover un atributo después de agregarlo a un grupo, solo se puede editar, desactivar u ocultar. No puedes editar el tipo de atributo.

1. Después de [agregar un grupo](#agregar-grupo) en la página **Atributos**, haz clic en el ícono + al lado del nombre del grupo deseado o haz clic en la flecha hacia abajo al lado del nombre del grupo y luego en `Agregar primer atributo`.
2. Haz clic sobre el tipo de atributo deseado:
    - **Texto libre:** permite ingresar caracteres libremente, recomendado para textos cortos. No admite el uso de etiquetas HTML. Ejemplo: descripción de ingredientes.
    - **Texto grande:** permite ingresar caracteres libremente, recomendado para textos grandes. No admite el uso de etiquetas HTML. Ejemplo: tablas de medidas de tiendas de moda.
    - **Selección única:** presenta dos o más valores predefinidos, pero solo se puede seleccionar una única opción. Ejemplo: tamaños de zapatos con valores como 34, 35, 36, etc.
    - **Selección múltiple:** presenta por lo menos dos valores predefinidos y permite seleccionar más de una opción. Ejemplo: género objetivo de un producto, que puede ser una combinación de Masculino, Femenino y Unisex.
3. En el panel lateral que se abre, ingresa el nombre del atributo en el campo título. Este es el único campo obligatorio.
4. Si deseas activar el atributo que estás creando, marca la casilla **Activar**. Para mantenerlo desactivado, deja la casilla sin marcar.
5. En **Configuración**, llena los siguientes campos:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Obligatorio:** marca esta casilla para que sea obligatorio llenar este atributo. Para que sea opcional, deja la casilla sin marcar. Si el atributo es obligatorio, el producto solo podrá ser activado después de completarlo.
    * **Valor predeterminado:** valor común para el atributo. Ejemplo: una tienda de camisas puede utilizar "Algodón" como valor predeterminado del atributo "Material" porque es el tipo de material que más se usa. 
    * **Descripción:** descripción del significado del atributo y sus valores.
6. En **Storefront**, todos los campos se refieren a la experiencia de compra de los clientes y puedes marcar los siguientes ajustes opcionales:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Mostrar especificación:** determina si el atributo se muestra en el storefront.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Usar como filtro:** define si el atributo puede ser utilizado como filtro en la búsqueda de productos.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link en el menú superior:** define si el atributo se muestra como un link para hacer clic en el menú superior del sitio web.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link en el menú lateral:** define si el atributo se muestra como un link para hacer clic en el menú lateral del sitio web.
7. Haz clic en `Crear`.

Se mostrará un mensaje de confirmación *Atributo creado*.

### Editar atributos

Para editar un atributo sigue los pasos a continuación:

1. En la página **Atributos**, sitúa el mouse sobre el nombre del atributo que deseas editar y haz clic en el <i class="fas fa-pencil-alt" aria-hidden="true"></i> ícono de lápiz que se muestra.
2. En el panel lateral que se abre, realiza los cambios de deseados. Para más información sobre **Configuración** o **Storefront**, consulta la sección [Agregar atributos](#agregar-atributos).

  > ⚠️ El tipo de atributo es el único ajuste que no se puede cambiar.

3. (Opcional). Este paso no se aplica a los atributos de tipo **Texto libre** y **Texto grande**, a diferencia de los tipos **Selección única** y **Selección múltiple** que tienen la sección **Valores**, en que puedes agregar los valores exactos del atributo. 
    * 3.1 Para crear un valor, haz clic en el ícono + o haz clic en la flecha hacia abajo junto a **Valores** y selecciona `Agregar primer valor`.
    * 3.2 Ingresa el texto del valor y luego haz clic en algún punto de la pantalla fuera de la fila del valor.
    * 3.3 El valor se crea ya activado, indicado por el ícono verde al lado del nombre. Para desactivarlo, deselecciona la casilla **Activar**.
    * 3.4 Los valores se listan por orden de creación. Para cambiar la posición de un valor en la lista, haz clic en el ícono a la izquierda del nombre del valor del atributo y arrástralo a la posición deseada.

4. Haz clic en `Aplicar`.

Se mostrará un mensaje de confirmación *Atributo actualizado*.

### Ver status de activación de atributos y sus valores

Los atributos y sus valores pueden tener dos status de activación según se describe en la siguiente tabla:

| **Status** | **Atributo** | **Atributo** | **Color de ícono** |
| :---: | :--- | :--- | :---: |
| Activo | El atributo puede reflejarse en el storefront y muestra únicamente los valores activados. | El valor del atributo puede reflejarse en el storefront desde el momento en que se active el atributo. | 🟢 Verde |
| Inactivo | El atributo no se refleja en el storefront, independientemente del status de los valores. | El valor del atributo no se refleja en el storefront, independientemente del status del atributo. | ⚪ Blanco |

Para activar o desactivar atributos o sus valores, consulta la sección [Editar atributos](#editar-atributos).

> ℹ️ Si deseas saber el significado del ícono que a veces se muestra al lado del status del atributo, consulta la sección [Identificar grupos y atributos heredados](#identificar-grupos-y-atributos-heredados).

### Ocultar atributos inactivos

No puedes eliminar un atributo del catálogo después de crearlo. Sin embargo, sí puedes ocultarlo en la interfaz si lo [desactivas](#ver-status-de-activacion-de-atributos-y-sus-valores).

En la parte superior derecha de la página **Atributos**, haz clic en el ícono de ojo <i class="fas fa-eye" aria-hidden="true"></i> para **Ocultar atributos inactivos**. Para volver a mostrarlos, haz clic en el ícono de nuevo.

## Acciones en variaciones

En la fase beta, estamos utilizando el término *variaciones* en vez de [especificaciones de SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacion-de-sku), que son las opciones de SKUs que los clientes pueden comprar. En **Catálogo > Categorías**, la página **Variaciones** permite realizar las siguientes acciones:

* [Agregar variaciones](#agregar-variaciones)
* [Editar variaciones](#editar-variaciones)
* [Ver status de activación de variaciones y sus valores](#ver-status-de-activacion-de-variaciones-y-sus-valores)
* [Ocultar variaciones inactivas](#ocultar-variaciones-inactivas)

Para más detalles sobre la interfaz, consulta la sección [Interfaz de categorías, atributos y variaciones](#interfaz-de-categorias-atributos-y-variaciones).

### Agregar variaciones

Para crear una variación sigue los pasos a continuación:

> ❗ No se puede remover una variación después de agregarla a un grupo, solo se puede editar, desactivar u ocultar en la interfaz. No puedes editar el tipo de la variación.

1. Después de [agregar un grupo](#agregar-grupo) en la página **Variaciones**, haz clic en el ícono + al lado del nombre del grupo deseado o haz clic en la flecha hacia abajo al lado del nombre del grupo y luego en `Crear primera variación`.
2. Haz clic sobre el tipo de variación deseada:
    - **Selección única:** presenta dos o más valores predefinidos, pero el cliente solo puede seleccionar una opción. Ejemplo: voltaje del electrodoméstico de 110v o 220v.
    - **Selección múltiple:** presenta dos o más valores predefinidos y el cliente puede elegir más de una opción. Ejemplo: definición de los colores de un producto (rojo, amarillo, azul y/o negro).
3. En el panel lateral que se abre, completa el campo título con el nombre de la variación. Este es el único campo obligatorio.
4. Si deseas activar la variación que estás creando, marca la casilla **Activar**. Para mantenerla desactivada, deja la casilla sin marcar.
5. En **Configuración**, llena los siguientes campos:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Obligatorio:** marca esta casilla para que sea obligatorio llenar esta variación. Para que sea opcional, deja la casilla sin marcar. Si la variación es obligatoria, el SKU solo podrá activarse después de completarla.
    * **Valor predeterminado:** valor común para el tipo de variación seleccionada.
    * **Descripción:** descripción del significado de la variación y sus valores.
6. En **Storefront**, todos los campos se refieren a la experiencia de compra de los clientes y puedes marcar los siguientes ajustes opcionales:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Mostrar especificación:** determina si la variación se muestra en el storefront.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Usar como filtro:** define si la variación puede ser utilizada como filtro en la búsqueda de productos.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link en el menú superior:** define si la variación se muestra como un link para hacer clic en el menú superior del sitio web.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link en el menú lateral:** define si la variación se muestra como un link para hacer clic en el menú lateral del sitio web.
7. Haz clic en `Crear`.

Se mostrará un mensaje de confirmación *Variación creada con éxito*.

### Editar variaciones

Para editar una variación, sigue los pasos a continuación:

1. En la página **Variaciones**, coloca el mouse sobre el nombre de la variación que deseas editar y haz clic en el <i class="fas fa-pencil-alt" aria-hidden="true"></i> ícono de lápiz que se muestra.
2. En el panel lateral que se abre, realiza los cambios de configuración de la variación como desees. Para más información sobre **Configuración** o **Storefront**, consulta la sección [Agregar variaciones](#agregar-variaciones).

  > ⚠️ El tipo de variación es el único ajuste que no se puede cambiar.

3. El panel de edición muestra la sección **Valores** donde puedes modificar los valores predefinidos de la variación.
    * 3.1 Para crear un valor, haz clic en el ícono + o haz clic en la flecha hacia abajo junto a **Valores** y selecciona `Agregar primer valor`.
    * 3.2 Ingresa el texto del valor y luego haz clic en algún punto de la pantalla fuera de la fila del valor.
    * 3.3 El valor se crea ya activado, indicado por el ícono verde al lado del nombre. Para desactivarlo, deselecciona la casilla `Activar`.
    * 3.4 Los valores se listan por orden de creación, lo que también se refleja en el storefront. Para cambiar la posición de un valor de la lista, haz clic en el ícono a la izquierda del nombre y arrástralo a la posición deseada.

4. Haz clic en `Aplicar`.

Se mostrará un mensaje de confirmación *Variación actualizada*.

### Ver status de activación de variaciones y sus valores

Los atributos de activación y sus valores de variación pueden tener dos status según se describe en la siguiente tabla:

| **Status** | **Variación** | **Valor de la variación** | **Color de ícono** |
| :---: | :--- | :--- | :---: |
| Activo | La variación se refleja en el storefront y muestra únicamente los valores activados. | El valor de la variación puede reflejarse en el storefront desde el momento en que se active la variación. | 🟢 Verde |
| Inactivo | La variación no se refleja en el storefront, independientemente del status de los valores. | El valor de la variación no se refleja en el storefront, independientemente del status de la variación. | ⚪ Blanco |

> ℹ️ Para activar o desactivar una variación o sus valores, consulta la sección [Editar variaciones](#editar-variaciones).

### Ocultar variaciones inactivas

No puedes eliminar una variación del catálogo después de crearla. Sin embargo, sí puedes ocultarla en la interfaz si la [desactivas](#ver-status-de-activacion-de-variaciones-y-sus-valores).

En la parte superior derecha de la página **Variaciones**, haz clic en el ícono de ojo <i class="fas fa-eye" aria-hidden="true"></i> para **Ocultar variaciones inactivas**. Para volver a mostrarlas, haz clic en el mismo ícono.

