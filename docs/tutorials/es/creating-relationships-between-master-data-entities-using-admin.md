---
title: 'Crear relaciones entre entidades de Master Data utilizando el Admin'
id: 1qzbCit8SYXbKwrT5x2FfA
status: CHANGED
createdAt: 2020-08-11T13:48:26.272Z
updatedAt: 2024-06-06T19:36:29.525Z
publishedAt: 2022-10-17T19:11:39.513Z
firstPublishedAt: 2020-08-18T19:47:29.772Z
contentType: tutorial
productTeam: Master Data
author: 1ofpAV0ehUdsaOloLrmD40
slug: crear-relaciones-entre-entidades-de-master-data-utilizando-el-admin
locale: es
legacySlug: crear-relacion-con-entidades-y-documentos-de-master-data-utilizando-el-admin
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

## ¿Qué es una relación entre entidades del Master Data?
Una relación entre entidades es una referencia entre documentos que pertenecen a dominios diferentes. Esa referencia es definida por un campo de una de estas entidades. En la práctica, este campo se rellenará con el ID de un documento de la entidad relacionada, que es invisible para el usuario.

Por ejemplo, vamos a suponer que usted tiene una entidad Clientes y otra Lista de Compras, y quiere que cada cliente pueda tener varias listas de compras. En ese caso, solo necesita crear un campo en la entidad Lista de Compras para informar a qué cliente esta pertenece. 

Si usted está familiarizado con SQL, puede considerar una relación con una [foreign key](https://www.sqltutorial.org/sql-foreign-key/).

Master Data ya tiene algunas relaciones predeterminadas por estándar, como la de Cliente (CL) y Dirección (AD). 

## ¿Cómo crear una relación entre entidades?
Para crear una relación primero se necesitan dos entidades. Para saber cómo crearlas consulte la guía [Crear entidad de datos](https://help.vtex.com/es/tutorial/entidades-de-datos-creacion-y-mantenimiento--tutorials_1265). También se necesitará crear al menos un campo en una entidad de datos y agregarlo en el formulario, como se puede observar en el artículo [Crear un campo en el Master Data](https://help.vtex.com/es/tutorial/como-crear-un-campo-en-master-data--frequentlyAskedQuestions_1829).

En este ejemplo se crea una entidad denominada `Lista de Compras` que se relacionará con la entidad `Cliente`. Esa relación permitirá que un cliente pueda tener varias listas de compras; sin embargo, una lista de compras solo puede pertenecer a un único cliente.

1. Haga clic en la pestaña **Aplicações**.
2. Después, haga clic en el botón **Advanced settings**.  
![Configuraciones Avanzadas](https://images.ctfassets.net/alneenqid6w5/6wFQw4Qk1qjan3kff0slhB/f35565fd34625205f1e28006292fc110/Advanced_settings.png)
3. Haga clic en la opción **Estrutura de dados**. Eso abrirá una nueva pestaña a Dynamic Storage (DS).  
![Estructura de datos](https://images.ctfassets.net/alneenqid6w5/24pLSQHFkz2TnB0VMU6yKk/04a32ffbeeedc0f615b2adb42038e676/Estrutura_de_dados.png)
4. En Dynamic Storage, haga clic en la pestaña **Data Entities**.
5. Si desea crear una relación en una nueva entidad, haga clic en el botón **Add new** para crear una nueva entidad de datos. _En caso de que quiera crear una relación en una entidad existente, haga clic en el botón **Edit** de dicha entidad, y continue a partir del paso 7_.  
![Agregar nueva entidad de datos](https://images.ctfassets.net/alneenqid6w5/6RnSgkbz7LF0S8kwMHBReK/7895df7b2ac14d5fea332040a40977d8/Adicionar_nova_entidade_dados.png)  
![Editar entidad Lista de Compras](https://images.ctfassets.net/alneenqid6w5/1NMNJbWq3qnVjc0nt4x8ok/4a9f852803c1c3cc391c572bd61ba8a9/Editar_entidade_Lista_de_Compras.png)
6. Configure la entidad que será creada completando los campos **Acronym** y **Name** y agregando los campos deseados. En este ejemplo, la entidad utilizará el nombre `Lista de compras`, acrónimo `LC` y campo `compras` de tipo `Varchar 750`.
7. Agregue un campo de tipo `Relationship` y defina su nombre. En el ejemplo, este se denominará `Cliente`.
8. Luego, haga clic en el botón **Edit** (ícono de engranaje) del campo de relación para configurarlo.
9. En la configuración **Custom field type settings** seleccione la entidad a la que desea hacer referencia y el campo que se mostrará en esa relación. En este ejemplo, la relación se hará en la entidad "Cliente" y se mostrará el campo "email".  
![Relación entidad Lista de Compras](https://images.ctfassets.net/alneenqid6w5/3YjtdLHluQz9ve11TkmylY/41cb881fc6bfe93744e4a68cca8ea43a/Lista_Compras_Relacionamento.png)
10. Haga clic en **Save** para guardar los ajustes.  
![Guardar entidad de datos](https://images.ctfassets.net/alneenqid6w5/3HaACxzYeRsUE5i8jLRGf/c96ed109ce54f70138489cf25cb87cd8/Salvar_entidade_de_dados.png)
11. Vuelva a la lista de entidades. Recuerde que tiene que publicar la nueva entidad haciendo clic en el botón **Publish** (ícono de disquete) de la misma. También puede ser necesario actualizar las aplicaciones para que se implementen las alteraciones, para eso vaya a **Aplicações** y haga clic en el botón **Reload applications**.  
![Publicar entidad Lista de Compras](https://images.ctfassets.net/alneenqid6w5/4R9mLqBcx8Vq2JaurbmLkG/6ace79062a37f8a0ecd24f95a6ec2c2d/Publicar_entidade_Lista_de_Compras.png)  
![Master Data Reload applications](https://images.ctfassets.net/alneenqid6w5/6gud9kq3gpHbU9a23xzzSZ/e3e9f10a22b7567b1698342374f10bb6/Master_Data_Reload_applications.png)

## ¿Cómo crear una relación entre documentos?

Las relaciones también se pueden aplicar a documentos específicos de las entidades de datos. Se utilizará nuevamente la entidad de relación `Lista de Compras` como ejemplo y, además, se considerará que se crearon algunos documentos en esta. Así mismo, se necesitará modificar el formulario de la entidad de datos, como se explica en el artículo [Crear un campo en Master Data](https://help.vtex.com/es/tutorial/como-crear-un-campo-en-master-data--frequentlyAskedQuestions_1829).

1. Para relacionar los documentos agregue el campo de relación en el formulario de la entidad que contiene la referencia. Para facilitar eso, puede definir el campo como un cuadro combinado para mostrar todos los valores disponibles. Puede ver más detalles en el artículo [Crear un campo en Master Data](https://help.vtex.com/es/tutorial/como-crear-un-campo-en-master-data--frequentlyAskedQuestions_1829#crm).
2. Seleccione el valor deseado (en este caso, el cliente al que se relacionará la lista de compras).  
![Seleccionar relación de documento Master Data](https://images.ctfassets.net/alneenqid6w5/6Ss4S4Be4qRqNKLWBz51KF/0db9c1fe76beb2a136ed446e72982438/Selecionar_relacionamento_de_documento_Master_Data.png)
3. Haga clic en **Salvar** para guardar la configuración.

Cuando agregue el campo en la tabla, verifique los valores que se definieron.
![Tabla de relaciones de documentos Master Data](https://images.ctfassets.net/alneenqid6w5/43607tgaCHpBOeKQ3w9VUd/d120164f9a1d553be92eb2eefb6cf251/Tabela_de_relacionamento_de_documentos_Master_Data.png)

## ¿Cómo agregar filtros a los campos de relación?

Las relaciones se mantienen a través de los IDs de los documentos. Por tanto, cuando intente ingresar el valor del campo de relación como filtro en el formulario solo obtendrá los valores de los IDs de los documentos referenciados, y no los valores del campo elegido para cada documento. Las siguientes imágenes muestran ese resultado. Puede encontrar más información sobre filtros en el artículo [Filtrar datos en Master Data](https://help.vtex.com/es/tutorial/filtrando-dados-no-master-data--tutorials_778)

![Seleccionar filtro de relación](https://images.ctfassets.net/alneenqid6w5/Kh7PNTktepTfJn4s5AQlI/715c368b1c0d3ed81a5eb25f06bb3bcc/Selecionar_filtro_relacionamento.png)

![Filtro de relación ID](https://images.ctfassets.net/alneenqid6w5/4O1qpGWOrnnM3Zzmyqzymu/1218b7078443c3666502a20333970467/Filtro_relacionamento_ID.png)

En caso de que desee ver los valores de los campos, y no sus IDs, se puede filtrar estos mediante un campo automático. Para eso: 

1. En el Master Data, vaya a **Aplicações** > **Advanced settings** > **Estrutura de dados** para acceder a Dynamic Storage.
2. Luego, acceda a las entidades de datos en **Data Entities**.
3. En la entidad que contiene la relación (en este caso `Lista de Compras`), haga clic en el botón **Editar**.  
![Editar entidad Lista de Compras](https://images.ctfassets.net/alneenqid6w5/1NMNJbWq3qnVjc0nt4x8ok/4a9f852803c1c3cc391c572bd61ba8a9/Editar_entidade_Lista_de_Compras.png)
4. Haga clic en la pestaña **Automatic fields**.
5. Luego, clic en el botón **New Calculated field**.  
![Relacionamento automatic fields](https://images.ctfassets.net/alneenqid6w5/5StRAtwfrzUWnSzOLrHJqM/603a35102ef272d3c5b633eaa3e757e7/Relacionamento_automatic_fields.png)
6. Complete los campos **Name**, **Display Name** y **Type** según lo deseado. En este ejemplo se utilizarán `emailCliente`, `E-mail cliente` y Varchar 50.
7. Haga clic en el ícono de engranaje para realizar una configuración adicional.  
![Nombre automatic field](https://images.ctfassets.net/alneenqid6w5/4lAatUDVlXMOpNLKX1kx0J/38f68d5ee8cc3d06b6e26cc571f047f0/Nome_automatic_field.png)
8. Realice los ajustes que desea y utilice la fórmula para elegir el campo de la entidad relacionada que desea mostrar en el fitro. En este ejemplo, se utilizará el correo electrónico del cliente.

![Configurar relación automatic fields](https://images.ctfassets.net/alneenqid6w5/1cmXmQDZaepVddzoExEl1r/79d487b39c0ca6abdc98826232dc17d0/Configurar_relacionamento_automatic_fields.png)
9. Haga clic en el botón **Validate**.
10. En la ventana que se abrirá, ingrese un email genérico y haga clic en **Ok**.  
![Validar automatic field](https://images.ctfassets.net/alneenqid6w5/5nLfBVHL6YfedIALJsf6QX/127bfc77d276c61ccd0346bcb8d6e6e2/Validar_automatic_field.png)
11. Luego, aparecerá un aviso indicando que la fórmula es válida, como se muestra en la siguiente imagen. Haga clic en **Ok**.  
![Fórmula válida automatic field](https://images.ctfassets.net/alneenqid6w5/79A6B2D9TMjkpkj6gkez9Y/ee9e905339c9cbb8343a8809fb38a9e6/F__rmula_v__lida_automatic_field.png)
12. Para finalizar, guarde los ajustes haciendo clic en **Save**.

Luego de los anteriores pasos el filtro se aplica a la relación. En el formulario de la entidad (`Lista de Compras`), agregue el campo al filtro después de actualizar los registros.
![Seleccionar filtro de relación valor](https://images.ctfassets.net/alneenqid6w5/6KQwyXBZ0VaK2srXFiupmv/17f4b5b4e9a5a67c197f9351501a8598/Selecionar_filtro_relacionamento_valor.png)

De esta forma podemos ver el filtro con los valores en vez de los IDs.
![Filtro relación valor](https://images.ctfassets.net/alneenqid6w5/2mcBmzqxJLm7L3GrZuFeVa/2c5f45e9e00c7a9c37cec54dea7c35eb/Filtro_relacionamento_valor.png)

