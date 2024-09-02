---
title: 'Crear formulario en Master Data'
id: tutorials_1047
status: PUBLISHED
createdAt: 2017-04-27T21:57:35.614Z
updatedAt: 2024-06-19T15:04:30.932Z
publishedAt: 2024-06-19T15:04:30.932Z
firstPublishedAt: 2017-04-27T23:03:43.083Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: creando-formulario-en-master-data
locale: es
legacySlug: creando-formulario-en-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Un formulario sirve como interfaz para la visualización y manipulación de una entidad de datos. En esencia, actúa como un agrupador de campos.

Aunque siempre está asociado a una entidad de datos, no es obligatorio que contenga todos los campos relacionados con ella; puede ser personalizado según la demanda. De esta manera, es posible crear diferentes formularios para una misma entidad, adaptándose a diversas necesidades. Por ejemplo, un formulario de compra puede incluir campos como ID, cliente y fecha.

Para crear un formulario, sigue los pasos a continuación:

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Asegúrate de que se encuentra en la pestaña __Aplicaciones__.
3. En la aplicación que desea crear un formulario, haz clic en el símbolo del engrane.
4. Haz clic en `Nuevo`.
5. Completa los campos según se detalla en [Campos para el nuevo formulario](#campos-para-el-nuevo-formulario).
6. Haz clic en el botón `Guardar`.

## Campos para el nuevo formulario

- **Nombre:** Nombre del formulario.
- **Filtros:** Campos marcados como filtro de la entidad, esos campos forman los filtros laterales del formulario. Este debe ser creado en el nombre interno del campo. Para más de un campo lo puede separar por comas. Ej.: campo1,campo2.
- **Entidad de datos:** La entidad de datos para la cual el formulario va a ser creado.
- **Buscar destacados:** Los campos que serán mostrados los resultados de la búsqueda. Este debe de ser registrado en el nombre del campo interno. Para más de un campo, debe de ser separado por “,”. Ejemplo: Si busco por cliente, quiero que la lista de resultados aparezca el CPF del cliente o el nombre, entonces, es necesario hacer la búsqueda de la siguiente manera: CPF, Nombre.
- **Consultas de visualización**: Activa una nueva sección en el formulario de visualización, con registros de una entidad relacionada con la entidad del formulario. Las informaciones mostradas serán relacionadas con el registro que está sendo visualizado.

   Ejemplo: en la entidad __Lista de compras__ hay un campo de tipo __Relationship__ relacionado con la entidad __Cliente__. Así, en el formulario __Cliente__, en el campo __Consultas de visualización__, inserte este campo de atendimiento que se refiere a __Cliente__.

   Si el acrónimo de la entidad __Lista de compras__ es __LC__ y el nombre del campo es __Cliente__, se debe insertar: `LC.Cliente`. Así serán cargados los atendimientos del cliente que se está visualizando en el formulario:

   ![registrosRelacionados-es](https://images.ctfassets.net/alneenqid6w5/3j6iBpbL7ao6soYaME4e2a/e5f7e4a9c173af6654b4e7123d3c79c2/Untitled.png)

Después de llenar los campos requeridos, aparecerán las fichas disponibles para configuración. Los siguientes son los campos para cada una de ellas.

- **Campos de la lista:** Aquí deben ser seleccionados los campos que aparecerán en la lista de registros, cuando se dá click para visualizar el formulario. Para eso, basta seleccionar las cajas de selección al lado de los campos que usted desea incluir. También es posible seleccionar la largura del campo de lista, el orden de exhibición y la organización.

   El orden de exhibición de los campos sigue el orden de esta pantalla, es decir, para un campo que aparezca en la primera columna, haga click en la flecha hacia arriba hasta que él sea el primer campo. La organización es definida por un campo. Usted debe seleccionarlo y elijir entre orden ascendente (Asc) o descendente (Desc).
- **Esquemas de layout:** Aquí será hecha la definición de como los campos realmente serán exhibidos en el formulario, tanto para visualización como para la edición y creación. Es decir, en esta parte realamente será configurado donde quedará cada campo en el formulario. Todo puede ser divido por secciones.

   1. Haz clic en el botón `Agregar nueva sección`.
   2. Ingresa el campo **Nombre** para nombrar la sección.
   3. Arrastra un campo de la lista de **Campos disponibles** para la columna **Campos de la columna 1**. Lo mismo puede ser hecho para la columna **Campos de la columna 2**.

   Estos trés pasos pueden ser repetidos hasta que se tenga el formulario en el formato que se desea. Es posible registrar varios campos en la misma columna así cómo es posible crear varias secciones. 

- **Consultas:** Sirve solamente para exhibir las [consultas creadas en la lista](https://help.vtex.com/es/tutorial/creando-una-cconsulta-customizada-en-el-vtex-master-data--tutorials_799).
- **Hoja de estilo:** La sección para registrar los estilos (CSS) para la edición del frontend del formulario.
