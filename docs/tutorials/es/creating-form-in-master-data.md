---
title: 'Crear formulario en Master Data'
id: tutorials_1047
status: PUBLISHED
createdAt: 2017-04-27T21:57:35.614Z
updatedAt: 2023-03-28T23:49:11.948Z
publishedAt: 2023-03-28T23:49:11.948Z
firstPublishedAt: 2017-04-27T23:03:43.083Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: creando-formulario-en-master-data
locale: es
legacySlug: creando-formulario-en-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

El formulario es una forma de exhibición y manipulación de una entidad de datos. El formulario es un agrupador de campos que a pesar de siempre estar ligado a una entidad no precisamente muestra todos los campos que la entidad tiene. Puede ser ajustado de acuerdo a las necesidades del cliente, inclusive una entidad puede tener diferentes formularios.

## Como crear

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Haga click en **Aplicações.**
3. En la aplicación que desea crear un formulario, haga click en el símbolo del engrane.
4. Haga click en **Novo.**
5. Complete los campos según se detalla a continuación.
6. Haga click en el botón **Salvar.**

## Entendiendo los campos

- **Nome: **Nombre del formulario.
- **Filtros: **Campos marcados como filtro de la entidad, esos campos forman los filtros laterales del formulario. Este debe ser creado en el nombre interno del campo. Para más de un campo lo puede separar por comas. Ej.: campo1,campo2.
- **Entidade de dados: **La entidad de datos para la cual el formulario va a ser creado.
- **Destaques de busca: **Los campos que serán mostrados los resultados de la búsqueda. Este debe de ser registrado en el nombre del campo interno. Para más de un campo, debe de ser separado por “,”. Ejemplo: Si busco por cliente, quiero que la lista de resultados aparezca el CPF del cliente o el nombre, entonces, es necesario hacer la búsqueda de la siguiente manera: CPF, Nombre.
- **Consultas na visualização**: Activa una nueva sección en el formulario de visualización, con registros de una entidad relacionada con la entidad del formulario. Las informaciones mostradas serán relacionadas con el registro que está sendo visualizado. Ejemplo: en la entidad Atendimiento hay un campo relacionado con la entidad Cliente. Así, en el formulario Cliente, en el campo Consultas na visualização, inserte este campo de atendimiento que se refiere a Cliente. Si el acrónimo de la entidad Atendimiento es AT y el nombre del campo es Cliente, se debe insertar: &#8220;AT.Cliente&#8221;. Así serán cargados los atendimientos del cliente que se está visualizando en el formulario. ![registrosRelacionados2](//images.contentful.com/alneenqid6w5/2NrlYdzzR66Og4waCIekGe/e4d47ef3e257c749c09c0c9151383c45/registrosRelacionados2.png)![registrosRelacionados](//images.contentful.com/alneenqid6w5/3j6iBpbL7ao6soYaME4e2a/d80177bdf01586c97f1321c74c881ac3/registrosRelacionados-1.png)

Después de llenar los campos requeridos, aparecerán las fichas disponibles para configuración. Los siguientes son los campos para cada una de ellas.

- **Campos da listagem: **Aquí deben ser seleccionados los campos que aparecerán en la lista de registros, cuando se dá click para visualizar el formulario. Para eso, basta seleccionar las cajas de selección al lado de los campos que usted desea incluir. También es posible seleccionar la largura del campo de lista, el orden de exhibición y la organización. El orden de exhibición de los campos sigue el orden de esta pantalla, es decir, para un campo que aparezca en la primera columna, haga click en la flecha hacia arriba hasta que él sea el primer campo. La organización es definida por un campo. Usted debe seleccionarlo y elijir entre orden ascendente (Asc) o descendente (Desc).
- **Schemas de Layout: **En los Schemas de layout, será hecha la definición de como los campos realmente serán exhibidos en el formulario, tanto para visualización como para la edición y creación. Es decir, en esta parte realamente será configurado donde quedará cada campo en el formulario. Todo puede ser divido por secciones.

1. Haga click en el botón **Incluir nova seção**;
2. Ingrese el campo **Nome**;
3. Arrastre un campo de la lista de campos disponibles (**Campos disponíveis)** para la columna **Campos da coluna 1**. Lo mismo puede ser hecho para la columna** Campos da coluna 2**.

Estos trés pasos pueden ser repetidos hasta que se tenga el formulario en el formato que se desea. Es posible registrar varios campos en la misma columna así cómo es posible crear varias secciones. 

- **Consultas: **Sirve solamente para exhibir las [consultas creadas en la lista](/es/tutorial/creando-una-cconsulta-customizada-en-el-vtex-master-data).
- **Folha de estilo: **Es la sección para registrar los estilos (CSS) para la edición del front-end del formulario.

<video class="wp-video-shortcode" id="video-1047-3" width="840" height="411" preload="metadata" controls="controls"><source type="video/mp4" src="//assets.contentful.com/alneenqid6w5/7oRARnBsVamuk8iQ0mogQa/438e55214f38f7f16634da4fbc238d68/CriandoFormulario-1.mp4?_=3" /></video>
