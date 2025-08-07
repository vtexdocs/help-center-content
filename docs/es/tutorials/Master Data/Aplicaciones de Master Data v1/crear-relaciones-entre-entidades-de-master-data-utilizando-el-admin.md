---
title: 'Crear relaciones entre entidades en Master Data v1'
id: 1qzbCit8SYXbKwrT5x2FfA
status: PUBLISHED
createdAt: 2020-08-11T13:48:26.272Z
updatedAt: 2024-08-06T18:27:27.318Z
publishedAt: 2024-08-06T18:27:27.318Z
firstPublishedAt: 2020-08-18T19:47:29.772Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-relationships-between-master-data-entities-using-admin
legacySlug: crear-relacion-con-entidades-y-documentos-de-master-data-utilizando-el-admin
locale: es
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

Una relación entre entidades es una referencia entre documentos que pertenecen a dominios diferentes. Esta referencia está definida por un campo de una de estas entidades. En la práctica, este campo se rellenará con el ID de un documento de la entidad relacionada, siendo dicho documento invisible para el usuario.

Por ejemplo, tu tienda tiene una entidad **Cliente** y otra **Lista de compras**, y deseas que cada cliente pueda tener varias listas de compras. Para hacerlo, es necesario crear un campo en la entidad **Lista de compras** e informar a qué cliente pertenece. 

<div class="alert alert-info">
<p>Master Data ya cuenta con algunas relaciones predeterminadas, como Cliente (CL) y Dirección (AD).</p>
</div>

## Crear relación entre entidades de datos

Para crear una relación se necesitan dos entidades de datos. Si solo hubiera una, puedes crear otra siguiendo las instrucciones a continuación. Para más información sobre entidades de datos, consulta la guía [Entidad de datos](https://help.vtex.com/es/tutorial/entidad-de-datos--tutorials_1265).

Retomando el ejemplo mencionado en la introducción: se debe crear una entidad llamada **Lista de compras** para relacionarla con **Cliente**. Esta relación permitiría a un cliente tener varias listas de la compra; sin embargo, una lista de compras solo puede pertenecer a un único cliente.

Ilustramos a continuación los pasos a seguir con este mismo ejemplo:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Haz clic en `Configuración avanzada`.  
3. Haz clic en **Estructura de datos**. Accederás a una nueva página.
4. Haz clic en la pestaña **Entidades de datos**.
5. Si deseas crear una relación en una nueva entidad, haz clic en el botón `Agregar` para crear una nueva entidad de datos.

   Si deseas crear una relación en una entidad existente, selecciónala haciendo clic en el botón de editar <i class="fas fa-edit"></i> y procede al paso 7.  

6. Configura la nueva entidad rellenando los campos **Acrónimo** y **Nombre** y añadiendo los campos deseados. Aprende más sobre campos en la guía [Crear un campo en Master Data](https://help.vtex.com/es/tutorial/como-crear-un-campo-en-master-data--frequentlyAskedQuestions_1829).

   En este ejemplo, la entidad utilizará el nombre `Lista de compras`, el acrónimo `LC` e, inicialmente, el campo `compras` de tipo `Varchar 750`.

   Para más información sobre cómo rellenar los campos, consulta la guía [Entidad de datos](https://help.vtex.com/es/tutorial/entidad-de-datos--tutorials_1265). 
7. Agrega un campo de tipo **Relationship** y define su nombre. En este ejemplo, se llamará `Cliente`.
8. Haz clic en el ícono de engranaje <i class="fas fa-cog"></i> situado al lado del campo **Relationship** para configurarlo.
9. En **Configuración de campo personalizado**, selecciona la entidad a la que deseas hacer referencia y el campo que se mostrará en la relación. En este ejemplo, la relación se realizará con la entidad **Cliente** y se mostrará el campo **email**.

   ![Relación entidad Lista de Compras](//images.ctfassets.net/alneenqid6w5/3YjtdLHluQz9ve11TkmylY/e93299cbfa8d2f570345af87a0b783a9/Lista_Compras_Relacionamento_ES.png)

10. Haz clic en el botón `Guardar` para guardar la configuración.
11. Haz clic en el ícono de publicación <i class="fas fa-save"></i> para publicar la entidad.
12. También puede ser necesario actualizar las aplicaciones para implementar los cambios. Para hacerlo, accede a **Configuración de la tienda** > **Storefront* > **Master Data** y haz clic en el botón `Volver a cargar aplicaciones`.

## Crear relación entre documentos

Las relaciones también pueden aplicarse a documentos, siempre que exista una [relación entre entidades de datos](#crear-relacion-entre-entidades-de-datos). Para proceder, es necesario modificar el [formulario](https://help.vtex.com/es/tutorial/creando-formulario-en-master-data--tutorials_1047) de una entidad de datos, como se ilustra a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Haz clic en el ícono de engranaje <i class="fas fa-cog"></i> junto al nombre de la aplicación.

   Serás redirigido a la lista de formularios de esa aplicación.

3. Para crear un nuevo formulario, haz clic en `+ Nuevo`.
4. Rellena el **Nombre** del formulario.
5. Selecciona la **Entidad de datos** a la que se vinculará el formulario. En estas instrucciones, utilizaremos la entidad Lista de compras como ejemplo.

   Los campos de la entidad se mostrarán en una lista en la pestaña **Campos de la lista** y podrán seleccionarse para componer el formulario.

6. Selecciona el campo de relación y cualquier otro que desees incluir en el formulario. Siguiendo el ejemplo, incluiremos el campo **Cliente** (relación) y los campos **Nro. de documento** y **Compras**.
7. Haz clic en la pestaña **Esquemas de layout** para configurar el diseño del formulario.
8. Haz clic en `Agregar nueva sección` para crear una sección en el formulario.
9. Nombra la sección.
10. Arrastra el campo de relación (en este caso, **Cliente**) a la sección y los otros campos que desees incluir en el formulario.
11. Haz clic en `Guardar`. Accederás a la lista de formularios de la aplicación, incluido el nuevo formulario.
12. En la fila del nuevo formulario haz clic en el ícono de editar <i class="fas fa-edit"></i>.
13. Haz clic en la pestaña **Esquemas de layout**.
14. Haz clic en el ícono de editar <i class="fas fa-edit"></i> situado junto al campo de relación (en el ejemplo, **Cliente**).
15. Selecciona la opción **Cuadro combinado** y haz clic en `OK`. Esta opción permitirá seleccionar valores existentes del campo que están almacenados en la entidad relacionada al rellenar el formulario.
16. Haz clic en `Guardar`.
17. Haz clic en la pestaña **Aplicaciones**.
18. Haz clic en el botón `Volver a cargar aplicaciones`.

Ahora, al crear un nuevo documento a partir del formulario, podrás seleccionar el valor deseado (en este ejemplo, el Cliente preexistente que se relacionará con la Lista de compras).

Además de la relación, también es posible ver los registros relacionados al consultar cada registro de una entidad. Por ejemplo, se pueden ver las ‘Listas de compras’ creadas por un ‘Cliente’ al consultar el registro del cliente correspondiente.

Para hacerlo, es necesario agregar al formulario de la entidad el valor `{acronimo_de_la_entidad_relacionada}.{nombre_campo_relacion}` en el campo **Consultas de visualización**. Ejemplo de cómo rellenar: `LC.cliente`.

## Agregar filtros a los campos de relación

Las relaciones se mantienen a través de los ID de los documentos. Así, cuando intentemos ingresar el valor del campo de relación como filtro en el formulario, solamente obtendremos los valores de los ID de los documentos referidos, y no los valores del campo seleccionado para cada documento. La imágen siguiente ilustra este resultado. Aprende más en el artículo [Filtrar datos en Master Data](https://help.vtex.com/es/tutorial/filtrar-datos-en-el-master-data--tutorials_778).

![Filtro relacionamento ID](//images.ctfassets.net/alneenqid6w5/4O1qpGWOrnnM3Zzmyqzymu/a9e179027658143481e6a6f3444e24cd/Filtro_relacionamento_ID.png)

