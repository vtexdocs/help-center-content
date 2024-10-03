---
title: 'Registrar especificaciones o campos de producto'
id: tutorials_106
status: PUBLISHED
createdAt: 2017-04-27T22:19:08.184Z
updatedAt: 2023-03-29T17:43:57.193Z
publishedAt: 2023-03-29T17:43:57.193Z
firstPublishedAt: 2017-04-27T23:00:43.197Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: adding-specifications-or-product-fields
locale: es
legacySlug: creando-un-campo-de-producto
subcategoryId: pwxWmUu7T222QyuGogs68
---

La [especificación](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) de producto es un campo en el registro de un producto donde se incluyen las características válidas de todas sus variaciones (SKU).

En VTEX, una especificación siempre forma parte de un [grupo de especificaciones](https://help.vtex.com/es/tutorial/criando-grupo-de-categoria--tutorials_246) que está asociado a una [categoría](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf). Es precisamente por esto que, para crear una especificación (campo) de producto, se debe tener registrada al menos una categoría y un grupo de especificaciones.

Ejemplo: una tienda del sector de la moda. En la categoría **Camisetas**, el grupo de especificaciones puede tener el nombre **Características**, el campo **Composición** y sus valores **Algodón** y **Poliéster**.

En este artículo, te explicamos cómo funciona la herencia de las especificaciones que registres, detallaremos el proceso de registro del campo de producto y cómo rellenar las especificaciones de producto. Lee las siguientes secciones:

* [Herencia de especificaciones de producto](#herencia-de-especificaciones-de-producto)
* [Paso a paso en el Admin VTEX](#paso-a-paso-en-el-admin-vtex)
    1. [Crear un campo de producto](#crear-un-campo-de-producto)
        * [Tipos de campo de producto](#tipos-de-campo-de-producto)
    2. [Registrar valores en el campo de producto](#registrar-valores-en-el-campo-de-producto)
        * [Obtener o editar valores registrados](#obtener-o-editar-valores-registrados)
    3. [Completar las especificaciones del producto](#completar-las-especificaciones-del-producto)
        * [Registro de producto](#registro-de-producto)
        * [Plantilla](#plantilla)

>ℹ️ Para crear una especificación de producto con la **API Catálogo**, sigue la guía para desarrolladores [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) (Cómo crear una especificación).

## Herencia de especificaciones de producto

Antes de crear especificaciones, es importante entender que las especificaciones siguen una lógica de «herencia», es decir que, al crear una especificación en un nivel de categoría superior, la especificación aparecerá en todos los niveles de categoría inferiores. Por lo tanto, si necesitas crear una especificación de producto que se aplique solo a una categoría, debes crearla en el nivel de esa categoría.

Tomemos como ejemplo el producto **Televisor**. En __Catálogo > Productos y SKU > Modificar > Especificaciones__, en la imagen que vemos a continuación, se puede ver que el grupo de especificaciones llamado **Características** está asociado a la categoría de televisor. Ese grupo incluye un campo llamado **Pulgadas** y un campo llamado **Rango etario** que son obligatorios.

![especificaciones-es](https://images.ctfassets.net/alneenqid6w5/3ZMzwADYCl7QnNomdpGnoH/1dba4d4f967811f7b3f0a22872a2734d/especificaciones-es.PNG)

Como se trata de una especificación de producto, la información seleccionada en esa página será válida para todas las variaciones del producto **Televisor**. Estas especificaciones también deben haber sido rellenadas en todos los productos registrados en la misma categoría de televisor porque son campos obligatorios.

## Paso a paso en el Admin VTEX

Para que las especificaciones aparezcan en el registro de los productos, además de haber creado previamente un [grupo de especificaciones](https://help.vtex.com/es/tutorial/criando-grupo-de-categoria--tutorials_246) asociado a una [categoría](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), también se deben crear los campos y registrar sus valores. Luego, podrás rellenar esas especificaciones en tus productos.

En las secciones a continuación, podrás ver el paso a paso completo.

### Crear un campo de producto

Para crear un campo de producto, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Categorías**.
3. Haz clic en la categoría asociada al grupo de especificaciones en el que deseas crear un campo.

    Verás que, al crear un campo en un nivel de categoría superior, la especificación aparecerá en todos los niveles de categoría inferiores.

3. Haz clic en `Acciones` <i class="fas fa-angle-down"></i>.
4. Haz clic en `Campo (Producto)`.
5. Haz clic en `Nuevo campo`.
6. Completa la información del campo que estás creando:
    * **Nombre**: nombre de la especificación (campo) de producto.
    * **Texto**: descripción del campo.
    * **Tipo**: tipo de campo, el cual puede variar entre **Texto**, **Texto grande**, **Número**, **Combo**, **Radio**, **Checkbox**, **Texto indexado** y **Texto grande indexado**. Consulta la sección [Tipos de campo de producto](#tipos-de-campo-de-producto) para obtener más información sobre cada opción.
    * **Valor predeterminado**: valor de llenado ya definido en la creación del campo.
    * **Grupo**: nombre del [grupo de especificaciones](https://help.vtex.com/pt/tutorial/criando-grupo-de-categoria) creado previamente y del cual formará parte ese campo.
    * **Filtro**: define si la especificación se usará como filtro en la navegación del sitio web.
    * **Obligatorio**: define si el valor se debe completar obligatoriamente en el registro del producto o no. Si el campo es obligatorio, el producto solo podrá activarse luego de rellenar la información de esta especificación.
    * **Muestra especificación**: define si el campo se muestra en la página de detalles del producto, en la pestaña **Especificaciones**.
    * **Link en el menú superior**: define si el link para los valores del campo se muestra en el menú principal del sitio web.
    * **Link en el menú lateral**: define si el link para los valores del campo se muestra en el menú lateral del sitio web.
    * **Activo**: inserta o elimina este campo en el registro del producto (pestaña **Especificaciones**).
7. Haz clic en `Guardar`.

![product-spec-1](//images.ctfassets.net/alneenqid6w5/5Y8LnWHVXSvRbqtMNBLSRq/26805d3f463bbfeb47e8cbcb7a023005/ES_ProdutoGif_1_Alterado.gif)

#### Tipos de campo de producto

Consulta la tabla a continuación para obtener información detallada sobre los tipos de campo de producto que puedes seleccionar en la opción **Tipo**:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Tipo de campo</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descripción</th>
  </tr>
</thead>
<tbody>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Texto</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Rellenar el contenido del campo con texto libre; indicado para textos pequeños y con formato simple. No está indicado para grandes estructuras de HTML.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Texto Grande</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Rellenar el contenido del campo con texto libre; indicado para grandes estructuras de HTML. Ejemplo: tablas de medidas que, con frecuencia, se usan en el segmento de la moda.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Número</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Rellenar el contenido del campo solo con números enteros. Ejemplo: especificar el número de un calzado (39, 41, 42...).</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Combo</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Contenido con dos o más valores predefinidos para seleccionarlos en una lista desplegable (dropdown). Ejemplo: el voltaje de un electrodoméstico que puede ser 110v o 220v.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Radio</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Contenido con dos o más valores predefinidos para seleccionar una opción de una escala de valores. Ejemplo: definición del color de los componentes de un producto (rojo, amarillo, azul, negro...).</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>CheckBox</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Opción que solo tiene valores equivalentes a <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">verdadero</span> (seleccionado) o <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">falso</span> (no seleccionado). Ejemplo: un campo llamado <strong>Outlet</strong> se seleccionará solo cuando el producto sea parte de la selección de la tienda para <em>outlet</em> (liquidación de stock). Si el producto no forma parte de esa selección, el campo debe quedar sin seleccionar.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Texto Indexado<br> <br>Texto Grande Indexado</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Técnicamente, siguen la misma regla que los campos de <strong>texto</strong>, pero con una diferencia: el <a href="https://help.vtex.com/es/tutorial/entendiendo-el-funcionamento-de-la-indexacion--tutorials_256"  rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">indexador</a> del <strong>Catálogo</strong> interpretará sus valores e influirá en los resultados de búsqueda de los clientes de la tienda. Puedes ver más detalles en <a href="https://help.vtex.com/es/tutorial/como-funciona-la-busqueda-de-vtex--tutorials_542" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Cómo funciona la búsqueda de VTEX</a>.</td>
  </tr>
</tbody>
</table>

### Registrar valores en el campo de producto

Los valores de los campos de producto variarán según el tipo de campo. No se crearán valores predefinidos para los campos **Texto** y **Número**. Estos se rellenarán libremente durante el registro del producto en la pestaña **Especificaciones**.

Sin embargo, para los campos **Combo**, **Radio** y **Checkbox** es necesario registrar valores predefinidos para seleccionarlos durante el registro del producto. Sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Categorías**.
2. Haz clic en la categoría en la que está guardado el campo de producto.
3. Haz clic en el botón **Acciones** <i class="fas fa-angle-down"></i>.
4. Haz clic en **Campo (Producto)**.
5. Haz clic en la flecha hacia abajo <i class="fas fa-angle-down"></i>.
6. Haz clic en **Valores**.

    Si ya hay valores registrados, deberás hacer clic también en `Nuevo valor`.

7. Rellena el campo **Nombre** con los valores que desees crear para ese campo. Ingresa un valor por línea y presiona la tecla `Enter` entre cada valor.
8. Haz clic en `Guardar`.

    Los valores creados se mostrarán en la pestaña **Especificaciones** en el registro de Producto.

![product-spec-2](//images.ctfassets.net/alneenqid6w5/5F0K7fQTFOf2b7opIrgpP6/35fc1b6e4edc189e4d4195d35f777514/ES_ProdutoGif_2_Alterado.gif)

>ℹ️ Si estás registrando los primeros valores de un campo, deberás regresar al formulario de ese campo específico y seleccionar la opción **Activo**.

#### Obtener o editar valores registrados

Para obtener o editar los valores registrados de un campo de producto, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Categorías**.
2. Haz clic en la categoría en la que está guardado el campo de producto.
3. Haz clic en el botón **Acciones** <i class="fas fa-angle-down"></i>.
4. Haz clic en **Campo (Producto)**.
5. Haz clic en la flecha hacia abajo <i class="fas fa-angle-down"></i>.
6. Haz clic en **Valores**.

    En esta página, puedes ver los valores registrados y elegir entre las siguientes opciones:
      * **Ordenar alfabéticamente:** organizar la lista de valores por orden alfabético.
      * **Nuevo valor**: crear un nuevo valor.
      * **Editar**: permite modificar el texto del valor y optar por activarlo o desactivarlo.
      * <i class="fas fa-angle-down"></i> > **Eliminar**: eliminar un valor.

### Completar las especificaciones del producto

Por último, debe rellenar las especificaciones de cada producto a partir de los campos y valores que ha creado. Puede hacerlo de forma individual por la [página de registro de producto](#registro-de-producto) o de forma masiva por [plantilla](#plantilla).

#### Registro de producto

Para rellenar las especificaciones de cada producto individualmente, siga las  instrucciones:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Ingresa a **Todos los productos**.
3. En la línea del producto, haz clic en `Modificar`.
4. Accede a la pestaña **Especificaciones**.
5. Completa los [campos que ha creado](#crear-un-campo-de-producto) con los [valores](#registrar-valores-en-el-campo-de-producto) deseados.

    Los campos obligatorios estarán marcados con `*`.

6. Haz clic en `Guardar`.

![product-spec-3](//images.ctfassets.net/alneenqid6w5/7B2L2oEoPQkPU2EJDowsxx/2f3c1e78b21f035b190aa3adcc55c8c2/ES_ProdutoGif_3_Alterado.gif)

#### Plantilla

Para rellenar las especificaciones de los productos de forma masiva mediante una plantilla, es necesario exportar la plantilla de VTEX, rellenarla e importarla a la plataforma. Para ello, siga las siguientes instrucciones:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en **Importar y Exportar**.
3. Haz clic en la pestaña **Especificaciones del producto**.
4. Haz clic con el botón derecho en la categoría deseada.
5. Haz clic en **Exportar...**.

    Aparecerá un rectángulo verde en la pantalla.

6. Haz clic en **Haga clic aquí para descargar el archivo** para exportar la plantilla.
7. Abre el archivo de la plantilla y rellena las líneas con los datos de las especificaciones del producto.

    Sólo hay que cambiar la columna `SpecificationValue` de la plantilla con el valor a rellenar para el campo que aparece en cada fila. Las demás columnas deben permanecer sin cambios porque sus valores se utilizarán para validar los datos.

8. En VTEX Admin, todavía en **Catálogo** > **Importación y Exportación** > **Especificaciones de producto**, desplácese hacia abajo en la página hasta **Cargar archivo para importar**.
9. Haz clic en **Seleccionar** para seleccionar el archivo con la plantilla completada en su ordenador.
10. Haz clic en `Importar`.

![product-spec-4](//images.ctfassets.net/alneenqid6w5/747pr0ISwE9GrNBjC4kKjL/fbb88c9ededec1bef032d9276837059e/ES_ProdutoGif_4_Alterado.gif)

## Más información
- [Registrar especificaciones o campos de SKU](https://help.vtex.com/es/tutorial/registrar-especificaciones-o-campos-de-sku--tutorials_119)
- [Especificaciones de producto e de SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
