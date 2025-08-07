---
title: 'Agregar o editar productos'
id: 29IkdEu6GofCFlltsZh2H8
status: PUBLISHED
createdAt: 2024-08-29T19:11:09.043Z
updatedAt: 2025-05-26T21:45:55.031Z
publishedAt: 2025-05-26T21:45:55.031Z
firstPublishedAt: 2024-08-29T19:14:22.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-or-editing-products
legacySlug: agregar-productos-beta
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

La página [Productos y SKUs](https://help.vtex.com/es/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) permite a los retailers registrar productos y variaciones nuevos o gestionar los existentes. Este artículo describe cómo agregar o editar productos. Para más información sobre SKUs, consulta el artículo [Agregar o editar SKUs](https://help.vtex.com/es/tutorial/agregar-o-editar-skus--4ryZ6J45kwn3jDiQBxGiiN).

<div class = "alert alert-info">
  <p>También es posible registrar productos <a href="https://help.vtex.com/es/tutorial/rellenar-campos-de-la-planilla-de-importacion--4nYhx63Q5yokQWaMguaIgI">importando una planilla de productos</a>, o vía ERP, siguiendo las instrucciones del <a href="https://developers.vtex.com/docs/guides/erp-integration-import-products">Back office integration guide (ERP/PIM/WMS)</a> en nuestro portal para desarrolladores.</p>
</div>

Para agregar un nuevo producto al catálogo de la tienda, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `+ Agregar producto`.
3. En la pestaña **Producto**, rellena los campos de la parte **Predeterminado**, tal y como se describe en las secciones:

    - [Información general](#informacion-general)
    - [SEO](#seo)
    - [Visibilidad](#visibilidad)
    - [Identificadores](#identificadores)

    > Los campos obligatorios están marcados con un asterisco (*).

4. Dependiendo de la categoría del producto, la parte **Atributos de categoría** puede mostrarse e introducir nuevas secciones. Rellena los campos según se indica en [Atributos de categoría](#atributos-de-categoria).
5. Haz clic en `Guardar`.

<div class="alert alert-danger">
Después de crear un producto puedes inactivarlo. Sin embargo, no es posible eliminar un solo producto. La plataforma solo permite eliminar productos y SKUs en masa mediante <a href="https://help.vtex.com/es/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802">Mantenimiento de base de datos (Full Cleanup)</a>.
</div>

<div class = "alert alert-info">
Si un producto no se muestra en la vitrina de la tienda después de crearlo, consulta el artículo <a href="https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382">¿Por qué el producto no aparece en el sitio web? para saber cómo resolver el problema</a>.
</div>

Las próximas secciones describen cómo rellenar los campos de creación de productos.

## Información general

Los campos de esta sección incluyen datos generales sobre el producto:

* <b>Nombre del producto*:</b> ingresa el nombre del producto que se mostrará a los clientes en la experiencia de navegación. El nombre no puede contener más de 150 caracteres. Este campo es muy importante para [SEO](https://help.vtex.com/es/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG) por lo que recomendamos:
  * ✅ Utilizar palabras simples
  * ❌ Evitar otros idiomas
  * ❌ Evitar ortografía compleja
* **Activo:** para activar el producto, habilita el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i> **Activo**. Para mantenerlo inactivo, deja el botón de alternancia deshabilitado <i class="fas fa-toggle-off" aria-hidden="true"></i>. Para más información sobre el status del producto, consulta [Productos y SKUs](https://help.vtex.com/es/tutorial/productos-y-skus--2ig7TmROlirWirZjFWZ3By).
* **Descripción:** ingresa la información general del producto en el cuadro de texto. Ya que este contenido se muestra a los clientes en la vitrina de la tienda, recomendamos crear un resumen simple y fácil de entender.
* **Descripción adicional:** al activar el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i> **Descripción adicional**, se muestra un cuadro de texto en el que puedes ingresar información adicional del producto, como un resumen.
* <b>Marca*:</b> ingresa o busca el nombre de la [marca](https://help.vtex.com/es/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) del producto y selecciona la opción deseada. Debes asegurarte de [registrar la marca](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR) con anterioridad y confirmar que esté activa.
* <b>Categoría*:</b> ingresa o busca el nombre de la [categoría](https://help.vtex.com/es/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) del producto y selecciona la opción deseada utilizando el nivel de categoría más específico. Debes asegurarte de [registrar la categoría](https://help.vtex.com/es/tutorial/cadastrar-uma-categoria--tutorials_206) con anterioridad y confirmar que esté activa.
* **Políticas comerciales:** selecciona si el producto debe estar vinculado a "Todas las [políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)" o a "Políticas comerciales específicas". La segunda opción es la que está marcada de forma predeterminada, pero debes asignarle uno o más valores al campo.

## SEO

La sección [SEO](https://help.vtex.com/es/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG) (Search Engine Optimization) incluye ajustes relacionados con la optimización de motores de búsqueda, para que tu sitio web tenga mayor relevancia en los resultados de búsqueda de Google, Bing y otros.

* **Categoría global:** rellena la [categoría global del producto](https://help.vtex.com/es/tutorial/configurando-a-categoria-global--tutorials_188), es decir, la taxonomía creada por Google para el [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=es-419&sjid=10899816613215196322-NA), que está predefinida como un árbol único en la plataforma VTEX.
* **URL del producto:** ingresa la URL del producto. El link no puede contener espacios y las palabras deben estar separadas por guion (-). Si no ingresas un valor, la plataforma genera una URL automáticamente. Para más información, consulta el artículo [¿Cómo definir la URL de un producto?](https://help.vtex.com/es/tutorial/como-definir-a-url-de-um-produto--frequentlyAskedQuestions_368).

  <div class="alert alert-danger">
  <p>Al rellenar la <b>URL del producto</b>, evita utilizar las siguientes palabras reservadas, ya que esto puede perjudicar el rendimiento de tu tienda e interferir con el funcionamiento de las páginas del Admin VTEX: <code>a</code>, <code>meta</code>, <code>api</code> y <code>admin</code>.</p>
  </div>

* **Título de la página:** ingresa el nombre que deseas que se muestre en la página de detalles del producto (PDP) y en la pestaña del navegador. Este campo es importante para SEO. Evita utilizar más de 60 caracteres.
* **Meta descripción:** rellena una breve descripción de la categoría, preferiblemente utilizando menos de 160 caracteres. Esto permite que los motores de búsqueda presenten la descripción de manera correcta en las páginas de resultados.

<div class = "alert alert-info">
A medida que rellenes los campos de esta sección, la <b>Vista</b> previa de Google muestra la estructura que se reflejará en el sitio web.
</div>

## Visibilidad

Los campos de esta sección definen ajustes del producto en el contexto del [storefront](https://help.vtex.com/es/tutorial/visao-geral-storefront--7cRrL2xtY7HDqiyep1PxIS):

* **Mostrar en el sitio web:** Si deseas que el producto se muestre en la vitrina, activa el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i>. Para ocultarlo, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.
* **Mostrar cuando está sin stock:** si deseas que el producto se muestre en la vitrina aunque no tenga stock, activa el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i>. Esto permite utilizar la opción [Avísame](https://help.vtex.com/es/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e#) para que el cliente ingrese su email y reciba una notificación cuando el producto esté disponible nuevamente. Si prefieres ocultar el producto cuando esté sin stock, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.
* **Fecha de release:** define la fecha en que el producto estará disponible para la venta. Este campo se utiliza para ayudar en la ordenación de los resultados de búsqueda en el sitio web. Puedes utilizar una query string `O=OrderByReleaseDateDESC` para obtener este valor y mostrar el orden de visualización por fecha de release. Además, el valor de este campo influye en la creación de [colecciones automáticas](https://help.vtex.com/es/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye) y determina la fecha de [indexación](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) del producto.
* **Palabras sustitutas:** incluye sinónimos de los nombres del departamento y/o categoría del producto escribiendo el término deseado y presionando `Enter`. Este campo es importante para que las búsquedas del producto sean más amplias. Puedes incluir varias palabras hasta un límite de 8000 caracteres.

  > Ejemplo: para el producto "Televisión", algunas palabras sustitutas podrían ser "TV", "Tele" y "televisor".

* **Categorías similares:** agrega los nombres de las [categorías similares](https://help.vtex.com/es/tutorial/configurando-categoria-similar).
* **Prioridad en el orden de búsqueda:** haz clic en las flechas para definir la prioridad en la página de resultados de búsqueda. No se pueden agregar valores negativos. Para más información, consulta [¿Cómo funciona el campo Puntuación?](https://help.vtex.com/es/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).

## Identificadores

Los campos de esta sección son los códigos que identifican el producto:

* **Código de referencia:** ingresa un código de referencia único para ayudar en la organización del catálogo. Este código es para uso interno de la tienda. Para rellenar este campo, utiliza una combinación única de letras y/o números.
* **Código fiscal:** número de identificación tributaria del producto.

## Atributos de categoría

Para ciertas categorías asignadas a un producto creado, debajo de Predeterminado, se mostrará la sección **Atributos de categoría**. Esta sección incluye campos de información para asignarle características al producto, también conocidas como [especificaciones de producto](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto?locale=pt).

La siguiente tabla muestra ejemplos de especificaciones para productos de diferentes categorías:

| **Categoría** | **Producto** | **Especificación** | **Valoraciones** |
| :---: | :---: | :---: | :---: |
| Ropa | Camisa | Tela | Algodón |
| Electrónicos | Celular | Duración de la batería | 12 horas |
| Bebidas | Vino | País de origen | Chile |

<div class="alert alert-danger">
Puedes crear un producto sin rellenar los campos de especificación de producto marcados como obligatorios. Sin embargo, para activarlo sí es necesario rellenar todos los campos obligatorios.
</div>

## Más información

* [Productos y SKUs](https://help.vtex.com/es/tutorial/productos-y-skus--2ig7TmROlirWirZjFWZ3By)
* [Agregar o editar SKUs](https://help.vtex.com/es/tutorial/agregar-o-editar-skus--4ryZ6J45kwn3jDiQBxGiiN)
* [Catálogo: información general](https://help.vtex.com/es/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe)
* [Catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) (serie de artículos)
