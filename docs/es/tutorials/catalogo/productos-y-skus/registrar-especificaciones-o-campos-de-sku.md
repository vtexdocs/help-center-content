---
title: 'Registrar especificaciones o campos de SKU'
id: tutorials_119
status: PUBLISHED
createdAt: 2017-04-27T22:18:08.662Z
updatedAt: 2025-05-20T20:29:30.252Z
publishedAt: 2025-05-20T20:29:30.252Z
firstPublishedAt: 2017-04-27T23:00:44.181Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: adding-sku-specifications-or-fields
legacySlug: criando-campo-de-sku
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

La especificación de SKU es un campo obligatorio en el registro del SKU en el cual se ingresan las características específicas para cada variación de un producto.

En VTEX, una especificación siempre forma parte de un [grupo de especificaciones](/es/tutorial/criando-grupo-de-categoria--tutorials_246) que está asociado a una [categoría](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf). Es precisamente por esto que, para crear una especificación (campo) del SKU, debe existir, al menos, el registro de una categoría y de un grupo de especificaciones.

Por ejemplo: una tienda del sector de la moda quiere vender el producto **Camisa polo** en los tamaños P, M o G. En la categoría **Camisetas**, el grupo de especificaciones puede denominarse **Características**. En ese caso, el tamaño es la característica que diferenciará a cada SKU. Por consiguiente, el administrador de la tienda debe crear un campo de SKU llamado **Tamaño** con **P**, **M** y **G** como opciones de valor.

En este artículo, explicamos cómo funciona la herencia de especificaciones que se registrarán y describimos cómo crear un campo de SKU, cómo atribuir valores a ese campo y cómo completar las especificaciones en el registro del SKU en el Admin de VTEX. Revisa las siguientes secciones:

* [Herencia de especificaciones de SKU](#herencia-de-especificaciones-de-sku)
* [Paso a paso en el Admin de VTEX](#paso-a-paso-en-el-admin-de-vtex)
    1. [Crear un campo de SKU](#crear-un-campo-de-sku)
        * [Tipos de campo de SKU](#tipos-de-campo-de-sku)
    2. [Registrar valores para el campo de SKU](#registrar-valores-para-el-campo-de-sku)
        * [Obtener o editar valores registrados](#obtener-o-editar-valores-registrados)
    3. [Completar especificaciones de SKU](#completar-especificaciones-de-sku)
        * [Registro del SKU](#registro-del-sku)
        * [Plantilla](#plantilla)

> ℹ️ Para crear una especificación de SKU con la **API Catálogo**, sigue la guía para desarrolladores [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) (Cómo crear una especificación).

## Herencia de especificaciones de SKU

Antes de crear especificaciones, es importante entender que las especificaciones siguen una lógica de «herencia», es decir que, al crear una especificación en un nivel de categoría superior, la especificación aparecerá en todos los niveles de categoría inferiores. Por lo tanto, si necesitas crear una especificación del SKU que se aplique solo a los SKU de una categoría, debes crearla en el nivel de esa categoría.

Por ejemplo: tomemos el producto **Camisa masculina**. En __Catálogo > Productos y SKU > SKU > Especificaciones__ (en la imagen a continuación), se puede ver que el grupo de especificaciones llamado **Características** está asociado a la categoría de la camisa. Ese grupo incluye un campo llamado **Color** y un campo llamado **Tamaño**.

![heranca-especificacoes-sku-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/registrar-especificaciones-o-campos-de-sku_1.PNG)

Como se trata de una especificación del SKU, la información seleccionada en esa página se validará únicamente para esa variación del producto **Camisa masculina**. Se deben haber ingresado esas especificaciones de todos los SKU registrados en el producto **Camisa masculina** y todos los SKU de productos de la misma categoría.

## Paso a paso en el Admin de VTEX

Para que las especificaciones aparezcan en el registro del SKU, además de haber creado previamente un [grupo de especificaciones](/es/tutorial/criando-grupo-de-categoria--tutorials_246) asociado a una [categoría](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), también se deben crear los campos del SKU y registrar sus valores. Luego, podrás completar esas especificaciones en el registro del SKU.

En las secciones a continuación, podrás ver el paso a paso completo.

### Crear un campo de SKU

> ⚠️ Una vez creados, los campos del SKU no pueden borrarse. Si se inactiva un campo, todos los SKU que están en la categoría quedarán inactivos hasta que el campo vuelva a reactivarse. Una de las causas por las que el SKU no aparece en el sitio web puede ser que no se haya rellenado una especificación en el registro, ya que esto deja al SKU inactivo.

Para crear un campo del SKU, sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Categorías**.
3. Haz clic en la categoría asociada al grupo de especificaciones en el que deseas crear un campo del SKU.

  > ⚠️ Verás que, al crear un campo en un nivel de categoría superior, la especificación aparecerá en todos los niveles de categoría inferiores.

4. Haz clic en `Acciones` <i class="fas fa-angle-down"></i>.
5. Haz clic en `Campo (SKU)`.
6. Haz clic en `Nuevo campo`.
7. Rellena la información del campo que estás creando:

    > ℹ️ Es obligatorio rellenar los campos marcados con un asterisco ( * ). No es posible cambiar la configuración sobre qué campos son obligatorios o no.

    * **Nombre** *: nombre de la especificación (campo) del SKU.
    * **Texto** *: descripción del campo.
    * **Tipo**: tipo de campo, que puede variar entre **Combo** o **Radio**. Consulta la sección [Tipos de campo de SKU](#tipos-de-campo-de-sku) para obtener más información sobre cada opción.
    * **Grupo**: nombre del [grupo de especificaciones](/es/tutorial/criando-grupo-de-categoria--tutorials_246) del cual formará parte ese campo.
    * **Filtro**: define si la especificación se usará como filtro en la navegación del sitio web.
    * **Obligatorio**: define si el valor se debe rellenar obligatoriamente en el registro del SKU o no. Si el campo es obligatorio, el SKU solo podrá activarse luego de rellenar la información de esta especificación.
    * **Muestra especificación**: define si el campo se muestra en la página de registro del SKU, en la pestaña **Especificaciones**.
    * **_Link_ en el menú superior**: define si el _link_ para los valores del campo se muestra en el menú principal del sitio web.
    * **_Link_ en el menú lateral**: define si el _link_ para los valores del campo se muestra en el menú lateral del sitio web.
    * **Activo**: activa el campo.
8. Haz clic en `Guardar`.

![sku-spec-1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/registrar-especificaciones-o-campos-de-sku_2.gif)

#### Tipos de campo de SKU

Existen dos tipos de campo del SKU: **Combo** y **Radio**. Las especificaciones del SKU tienen como objetivo diferenciar las variaciones de un mismo producto a partir de características objetivas y predefinidas para la selección, como tamaño y color, entre otras. Para mostrar campos de texto y estructuras HTML más complejas, como descripciones o tablas de medidas, se necesita usar la funcionalidad [campo de producto](/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106).

Consulta la tabla a continuación para obtener información detallada sobre los tipos de campo del SKU que puedes seleccionar en la opción **Tipo** al [crear un campo de SKU](#crear-un-campo-de-sku):

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Tipo de campo</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descripción</th>
  </tr>
</thead>
<tbody>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">**Combo**</td>
    <td class="t-body pa5" style="min-width: 15rem;">Contenido con dos o más valores predefinidos para seleccionar opciones en una lista desplegable (dropdown). Ejemplo: el voltaje de un electrodoméstico, que puede ser 110 o 220 voltios.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">**Radio**</td>
    <td class="t-body pa5" style="min-width: 15rem;">Contenido con dos o más valores predefinidos para elegir una opción de una escala de valores. Por ejemplo: definición del color de los componentes de un producto (rojo, amarillo, azul, negro...).</td>
  </tr>
</tbody>
</table>

### Registrar valores para el campo de SKU

Los **valores** de los campos del SKU variarán según el tipo de campo elegido: **Combo** o **Radio**. Sigue los pasos a continuación para registrar valores predefinidos: 

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Categorías**.
3. Haz clic en la categoría en la que está guardado el campo del producto.
4. Haz clic en `Acciones` <i class="fas fa-angle-down"></i>.
5. Haz clic en `Campo (SKU)`.
6. Haz clic en la flecha hacia abajo <i class="fas fa-angle-down"></i>.
7. Haz clic en **Valores**.

    En esta página, se puede crear un **Nuevo valor** o **Editar** los valores ya establecidos. 

7. Rellena el campo **Nombre** con los valores que desees crear para ese campo.

    Inserta un valor por línea y haz clic en la tecla `Enter` entre un valor y otro, tal como se muestra en la imagen a continuación.

    ![valores-campo-sku-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/registrar-especificaciones-o-campos-de-sku_3.PNG)

8. Haz clic en `Guardar`.

    Los valores registrados se mostrarán en la [interfaz del registro del SKU](#registro-del-sku).

![sku-spec-2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/registrar-especificaciones-o-campos-de-sku_4.gif)

> ℹ️ Si estás registrando los primeros valores de un campo, deberás regresar al formulario de ese campo específico y seleccionar la opción **Activo**.

#### Obtener o editar valores registrados

Para obtener o editar los valores registrados de un campo de SKU, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Categorías**.
3. Haz clic en la categoría en la que está guardado el campo del SKU.
4. Haz clic en el botón **Acciones** <i class="fas fa-angle-down"></i>.
5. Haz clic en **Campo (SKU)**.
6. Haz clic en la flecha hacia abajo <i class="fas fa-angle-down"></i>.
7. Haz clic en **Valores**.

    En esta página, puedes ver los valores registrados y elegir entre las siguientes opciones:

      * **Ordenar alfabéticamente:** organizar la lista de valores por orden alfabético.
      * **Nuevo valor**: crear un nuevo valor.
      * **Editar**: permite modificar el texto del valor y optar por activarlo o desactivarlo.
      * <i class="fas fa-angle-down"></i> > **Eliminar**: eliminar un valor.

### Completar especificaciones de SKU

Luego de crear un campo de SKU y registrar valores, es necesario completar las especificaciones de cada SKU a partir de los campos y valores creados. Puedes hacerlo de manera individual en la página de [registro del SKU](#registro-del-sku) o de manera masiva en [plantilla](#plantilla).

#### Registro del SKU

Para completar las especificaciones de cada SKU de forma individual, sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Ingresa a **Todos los productos**.
3. En la línea del producto donde está el SKU buscado, haz clic en la flecha hacia abajo <i class="fas fa-angle-down"></i>.
4. Haz clic en **SKU**.
5. En el SKU elegido, haz clic en `Modificar`.
6. Dirígete a la pestaña **Especificaciones**.
7. Rellena los [campos que creaste](#crear-un-campo-de-sku) con los [valores](#registrar-valores-para-el-campo-de-sku) deseados.

    Los campos obligatorios estarán marcados con `*`.

8. Haz clic en `Guardar`.

![sku-spec-3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/registrar-especificaciones-o-campos-de-sku_5.gif)

#### Plantilla

Para rellenar las especificaciones del SKU de forma masiva por plantilla, debes exportar la plantilla estándar de VTEX, rellenarla e importarla en la plataforma. Para ello, sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Importación y exportación**.
3. Haz clic en la pestaña **Especificaciones del SKU**.
4. Haz clic con el botón derecho en la categoría deseada.
5. Haz clic en **Exportar.**

    Aparecerá un rectángulo verde en pantalla.

6. Haz clic en **Haz clic aquí para descargar el archivo** para exportar la plantilla.
7. Abre el archivo de la plantilla y rellena las líneas con los datos de la especificación del SKU.

    Solamente modifica la columna `SpecificationValue` de la plantilla con el valor que debes rellenar en el campo de cada línea. No debes modificar el resto de las columnas, ya que sus valores se utilizarán para validar los datos.

8. En el Admin de VTEX, en **Catálogo** > **Importación y Exportación** > **Especificaciones del SKU**, baja la página hasta **Cargar archivo para importación**.
9. Haz clic en **Seleccionar** para seleccionar el archivo con la plantilla completa en la computadora.
10.  Haz clic en `Importar`.

![sku-spec-4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/registrar-especificaciones-o-campos-de-sku_6.gif)

## Más información
- [Registrar especificaciones o campos de producto](/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106)
- [Especificaciones de producto e de SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
