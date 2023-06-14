---
title: 'Desactivar y reorganizar categorías'
id: tutorials_264
status: PUBLISHED
createdAt: 2017-04-27T22:11:16.693Z
updatedAt: 2023-03-28T17:39:10.218Z
publishedAt: 2023-03-28T17:39:10.218Z
firstPublishedAt: 2017-04-27T23:03:12.416Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: desactivar-y-reorganizar-categorias
legacySlug: desactivando-y-reorganizando-categorias
subcategory: 1E7tziZCkY4w8i4EmUuwec
---

En la página **Catálogo > Categorías** del Admin VTEX, puedes realizar acciones relacionadas con las [categorías](https://help.vtex.com/pt/tutorial/cadastrando-categoria) configuradas en tu tienda. Consulta las secciones a continuación para saber cómo realizar cada acción.

- [Desactivar una categoría](#desactivar-una-categoria)
- [Cambiar el orden de las subcategorías](#cambiar-el-orden-de-las-subcategorias)
- [Editar el árbol de categorías](#editar-el-arbol-de-categorias)

## Desactivar una categoría

Para desactivar una categoría en tu tienda, sigue los siguientes pasos.

1.	En el Admin VTEX, ve a **Catálogo**.
2.	Haz clic en **Categorías**.
3.	Selecciona la categoría o el departamento que deseas desactivar.
4.	Haz clic en **Acciones** y elige la opción **Editar**.
5.	Desmarca las opciones **Menú** y **Activo**.
    - **Menú:** define si la categoría aparece o no en el menú superior y el menú lateral del sitio web, aunque la categoría sigue existiendo dentro del entorno.
    - **Activo:** define si la categoría está activa o inactiva en el sitio web.
6.	Haz clic en `Guardar`.

## Cambiar el orden de las subcategorías

En el árbol de categorías que se muestra en **Catálogo > Categorías** del Admin VTEX, si la categoría en cuestión tiene subcategorías, estas se muestran justo debajo de la categoría principal. Para cambiar el orden de las subcategorías, sigue los pasos a continuación.

1.	Haz clic en la categoría principal deseada.
2.	Haz clic en **Acciones** y en **Editar**.
3.	En la sección **Categorías secundarias**, encontrarás las subcategorías. En la columna **Posición**, haz clic en el botón azul y arrastralo hasta la posición deseada.
4.	Haz clic en `Guardar` para guardar los cambios.

## Editar el árbol de categorias

<div class="alert alert-warning">
  <p>Mover las categorías directamente a través del árbol de categorías puede generar errores inesperados en tu catálogo. Por lo tanto, te recomendamos seguir las instrucciones a continuación para realizar cualquier cambio en los niveles de las categorías. Consulta el<a href="https://help.vtex.com/es/known-issues/mover-categorias-genera-comportamientos-inesperados-en-el-arbol-de--6JSa9nnYoAAUQO1zPtzfZD"> problema conocido</a> relacionado con este escenario para obtener más información.</p>
</div>

Hay escenarios en los que es necesario cambiar el nivel jerárquico de una categoría. Por ejemplo, imagina que una tienda tiene una categoría principal llamada **Accesorios** y una categoría secundaria (subcategoría) llamada **Zapatos**, pero quiere hacer de la subcategoría **Zapatos** una categoría principal independiente.

Para mover una categoría sin causar errores ni perder información, sigue las instrucciones a continuación.

1.	Crea un clon de la categoría que se va a migrar, pero en el nivel que debe estar.

    Ejemplo:

    * 1 - Accesorios
        * 2 - Zapatos
    * 3 - Zapatos clon

2.	Transfiere todos los productos de la categoría antigua a la categoría clonada.
3.	Desactiva la categoría antigua.

    Ejemplo:

    * 1 - Accesorios
        * 2 - Zapatos (inactiva)
    * 3 - Zapatos clon (activa y con los productos)

## Más información

- [Categorías - Definición del concepto](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
- [Registrar una categoría](https://help.vtex.com/es/tutorial/registrar-categoria--tutorials_206)

