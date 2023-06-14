---
title: 'Filtrar datos en el Master Data'
id: tutorials_778
status: PUBLISHED
createdAt: 2017-04-27T21:58:11.041Z
updatedAt: 2023-03-28T23:42:30.477Z
publishedAt: 2023-03-28T23:42:30.477Z
firstPublishedAt: 2017-04-27T23:03:42.905Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: filtrar-datos-en-el-master-data
locale: es
legacySlug: filtrar-datos-en-el-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

En el Master Data, es posible crear filtros tanto para acceso por API como para la visualización en los formularios. La creación de filtros facilita la búsqueda y la consulta de datos, posibilitando un mayor control sobre sus datos. La creación de filtro debe configurarse primero en la entidad de datos y posteriormente en el formulario deseado. El requisito para que un campo sea configurado como filtro es que no se utilicen los tipos CEP, Text y File. Además, es una buena práctica poner como filtro un campo que contenga pocas opciones en su llenado, como “Categoria”, por ejemplo.

## Cómo configurar filtro en la Entidad de Datos

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. En Master Data, haz clic en **Aplicações** > **Estrutura de dados.**
2. Acceda a la pestaña **Entidade de Dados.**
3. Haga clic en el botón **editar** en la entidad en la que desea configurar el filtro.
4. Abrirá el listado de campos.
5. Haga clic en el botón con símbolo de engranaje en el campo que desea configurar.
6. Marque la opción **É filtro.**
7. Haga clic en el botón **Salvar.**
8. En el listado de entidades, haga clic en el botón **Publicar**, con símbolo de diskette.
9. Espere la publicación y la reindexación de los datos para visualizar el filtro.

## Cómo configurar filtro en el formulario

1. Acceda al módulo **Master Data**;
2. Haga clic en la pestaña **Aplicações**;
3. En la aplicación en que está el formulario en el que desea crear el filtro, haga clic en el símbolo de engranaje;
4. Se abrirá el listado de formularios, haga clic en el símbolo lápiz en el formulario que desea editar;
5. Complete el campo **Filtros** con el nombre interno del campo marcado como Filtro. Se entiende nombre interno como la primera columna en la creación y edición de entidad de datos, el nombre que no es posible modificar. Para insertar más de un valor, basta separarlos por coma, sin espacio;
6. Haga clic en el botón **Salvar**.

## Cómo filtrar

Tras la creación del filtro es posible utilizarlo en el formulario. Para ello, siga el paso a paso siguiente.

1. Acceda al módulo **Master Data**;
2. Haga clic en la pestaña **Aplicações**;
3. En la aplicación deseada, identifique el formulario que desea visualizar;
4. En el formulario deseado, haga clic en el icono de listado;
5. Se abrirá la página con el listado de registros de ese formulario. En la lateral, usted verá los filtros configurados. 
6. Para filtrar, basta hacer clic en el nombre del filtro y en su valor. 
7. Para verificar el resultado en el filtro, haga rodar la página hacia abajo y haga clic en el botón **Filtrar**.
8. Es posible filtrar por varios campos al mismo tiempo y varios valores en el mismo campo. Para retirar un filtro, basta hacer clic símbolo **x** al lado do valor.

