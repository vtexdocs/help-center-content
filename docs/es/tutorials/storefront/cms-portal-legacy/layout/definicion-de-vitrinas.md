---
title: 'Definición de Vitrinas'
id: tutorials_561
status: PUBLISHED
createdAt: 2017-04-27T22:00:48.932Z
updatedAt: 2023-03-29T18:03:26.896Z
publishedAt: 2023-03-29T18:03:26.896Z
firstPublishedAt: 2017-04-27T23:03:38.784Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: defining-window-displays
legacySlug: definicion-de-vitrinas
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a [la configuración de colecciones mediante el CMS](/es/docs/tutorials/registrar-una-coleccion-cms).

Las vitrinas se usan en el destaque de productos en diversas páginas, se pueden usar también para recomendaciones, en la página del producto.

Primero, antes de definir una vitrina, se debe crear una colección (ver instrucciones [aquí](/es/tutorial/criando-colecao-de-produtos)) con los productos que se exhibirán en ella. También es necesario que las páginas estén debidamente estructuradas, con los debidos controles insertados en sus templates.

Realizadas las debidas definiciones, el vínculo de la colección con la vitrina se hace en **Storefront > Layout**.

En el ejemplo abajo, vamos a definir la vitrina presentada en la Home, siendo así, se debe realizar la modificación en el siguiente layout:

![cms_layout_home ](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/definicion-de-vitrinas_1.png)

En el layout seleccionado, agregue el control correspondiente a la vitrina en la que desea exhibir la colección haciendo clic en **Add object**.

Después de seleccionar el tipo de control deseado, defina su nombre y haga clic en **Adicionar** (Agregar).

**No olvide guardar las configuraciones hechas en "Save Settings" para que pueda editar el control creado.**

![ed](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/definicion-de-vitrinas_2.png)

### Edición del control

Para editar sus controles, haga clic en el **símbolo de lápiz**, como se muestra en la siguiente imagen de ejemplo:

![banner_edit_cms](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/definicion-de-vitrinas_3.png)

Al editar el control es necesario agregar sus contenidos, que representan cada conjunto de ítems que será exhibido.
Para eso, haga clic en **Add content**

![cadastro_conteudo_cms ](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/definicion-de-vitrinas_4.png)
![cadastro_conteudo_cms 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/definicion-de-vitrinas_5.png)

- **"Adicionar arquivo" (Agregar archivo):** para seleccionar la colección que aparecerá en ese contenido.
- **Partner / Campaign / Source:** define la visualización de ese contenido si el visitante tiene alguna UTM correspondiente en su URL de origen.
- **Keywords:** vincula la visualización del contenido a una búsqueda por término(s) específico(s).
- **Categoría / Brand:** vincula la visualización del contenido en una página de categoría / marca específica.
- **From / To:** define el período en que el contenido se activará.

Se debe marcar la opción **Active Content** y hacer clic en **Add content list**, guardando todos los ajustes (**Save Settings**) posteriormente.

**Atención!** Siempre que utilice más de un contenido activo en el mismo control, se deben ordenarlos (haciendo clic y arrastrando sus contenidos) de forma que el contenido sin condiciones de visualización siempre quede en la última posición.

### Edición del contenido creado

si el contenido necesita ser editado, basta con hacer clic en el segundo símbolo de lápiz como se muestra en la siguiente imagen:

![edit_content_cms](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/definicion-de-vitrinas_6.png)

Al realizar los cambios deseados, haga clic en **Update Content List** y guarda todas las configuraciones hechas haciendo clic en **Save Settings** después.

**Atención!** Siempre que se haga algún cambio, es indispensable hacer clic en **Save Settings** para que no se pierda ningún cambio.
