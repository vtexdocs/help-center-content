---
title: 'Registrar categoría'
id: tutorials_206
status: PUBLISHED
createdAt: 2017-04-27T22:15:39.383Z
updatedAt: 2024-12-26T16:55:30.530Z
publishedAt: 2024-12-26T16:55:30.530Z
firstPublishedAt: 2017-04-27T23:00:46.516Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: registering-a-category
legacySlug: registrando-categoria
locale: es
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

> ℹ️ En la plataforma VTEX, la estructura Departamento, Categoría y subcategoría no está predefinida. Se varía de acuerdo con la estructura de su tienda, no siendo obligatoria la creación de estos 3 niveles jerárquicos.

El registro de una Categoría ocurre dentro del Catálogo, en el Admin VTEX.

Siga el paso a paso abajo para configurar una categoría:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Categorías__.
4. Haga clic en el primer nivel de categoría.
5. Haga clic en `Acciones`.
6. Haga clic en `Crear`.
7. Llene los campos, que se describen a continuación.
8. Haga clic em `Guardar`.

## Llenar campos de registro de categoría

Para entender mejor el significado de cada campo del registro de categoría, vea la descripción completa abajo.

- __Nombre:__ nombre que quiere dar al departamento o categoría. Utilice palabras sencillas y evite otros idiomas o escritura compleja. Este campo es importante para SEO y debe respetar el límite de 150 caracteres.

  > ❗ Al rellenar el **Nombre** de la categoría, evita utilizar las siguientes palabras reservadas, ya que esto puede perjudicar el rendimiento de tu tienda e interferir con el funcionamiento de las páginas del Admin VTEX. Consulta la lista de palabras reservadas a continuación. <ul> <li>`a`</li> <li>`meta`</li> <li>`api`</li> <li>`admin`</li> </ul>

- __Palabras sustitutas:__ sinónimos o términos relacionados al nombre dado para su departamento o categoría. "Televisión", por ejemplo, puede tener "TV" como palabra sustituta. Este campo es importante para hacer sus búsquedas más amplias y debe respetar el límite de 200 caracteres.
- __Título de la Página de la categoría (Tag Title):__ texto que queda en la pestaña del navegador y corresponde al título de la página de la categoría, importante para los motores de búsqueda y SEO. Este campo sólo admite texto plano y no puede contener etiquetas HTML.
- __Descripción de la categoría (Meta Tag Description):__ breve descripción de la categoría. Es recomendable no sobrepasar 150 caracteres para que los motores de búsqueda puedan mostrarlo correctamente en las páginas de resultados. Este campo sólo admite texto plano y no puede contener etiquetas HTML.
- __AdWords Remarketing Code:__ código utilizado por campañas de Google Adwords.
- __Lomadee Campaign Code:__ código utilizado por campañas de Buscapé.
- __Categoría Padre:__ si la categoría registrada es una categoría hija, es decir, una subcategoría o categoría de un departamento, ese campo debe informar la categoría padre a la que pertenece.
- __Categoría Global VTEX:__ pertenece a un árbol de categorías único, ya definido por el sistema, que será utilizado en la integración de los productos con Google Shopping, Buscapé y marketplaces. Una buena asignación hace que los productos de su tienda también se encuentren en los socios de forma más eficaz.
- __Menú:__ al seleccionar ese ítem, la categoría o el departamento aparecerá en el menú superior y en el menú lateral de su tienda.
- __Ativo:__ al seleccionar ese ítem, la categoría o el departamento se activa o desactiva en su tienda.
- __Menu con enlace activo:__ al seleccionar ese ítem, la categoría o departamento queda activa y clicable en el sitio para que el cliente navegue a través de ella.
- __Filtro de marca:__ al seleccionar ese ítem, la categoría o el departamento pasa a tener un filtro para marca en la página.
- __Score (utilizado para ordenación de búsqueda):__ valor utilizado para definir la prioridad en la página de resultados de búsqueda. Para entender más sobre Score, accede a nuestro artículo [¿Cómo funciona el campo Score?](https://help.vtex.com/es/tutorial/como-funciona-el-campo-score--1BUZC0mBYEEIUgeQYAKcae).
- __Modo de visualización de los productos:__ define cómo se mostrarán los SKUs en la página del producto. Vea abajo las opciones de relleno de este campo:
  - __Lista de SKUs:__ todos los SKUs del departamento o categoría en cuestión se mostrarán en el formato de lista. Cada uno con su botón de Comprar al lado.
  ![1Lista.es](//images.ctfassets.net/alneenqid6w5/37tngqcxF8hJTzWqxUG8jA/1c5f90c33525bfaf34b6ab729a9d02b5/Lista.es.png)
  - __Ingeles de selección de radio (radioBox):__ todos los SKUs de ese departamento/categoría necesitarán ser seleccionados a través de selección de radio.
  ![RadioBox.es](//images.ctfassets.net/alneenqid6w5/F33F8dSkcV2SePNONlGb2/d0029323d5f7f07f2d1c53fb5d784ccc/RadioBox.es.png)
  - __Sigue la definición de la especificación SKU:__ todos los SKUs de ese departamento/categoría serán seleccionados de acuerdo con la pestaña Especificación, en el formulario de registro de SKU. Las opciones preconfiguradas son Combo o Radio.
  ![Campos.es](//images.ctfassets.net/alneenqid6w5/17S7QKJpvr31r3LGRRCSSn/c3350ddfca051df6be8592fad107410f/Campos.es.png)

## Más información

- [¿Qué es una Categoría?](https://help.vtex.com/es/tutorial/que-es-una-categoria--6HV4Q3E2FauUoOQoiCCgCg)
- [¿Qué es un Departamento?](https://help.vtex.com/es/tutorial/que-es-un-departamento--22rKjmYWVmmKAK8CWa8yKw)
- [¿Qué es una Subcategoría?](https://help.vtex.com/es/tutorial/que-es-una-subcategoria--2cb0aRkG3i6AeiAMM24iwY)
- [Limpiar base de datos de la tienda](/es/tutorial/limpiar-base-de-datos-de-la-tienda)
- [Registrar un producto](https://help.vtex.com/es/tutorial/cadastrando-produtos--tutorials_2567)
- [Registrar un SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ)
