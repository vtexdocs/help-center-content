---
title: 'Crear un campo en Master Data'
id: frequentlyAskedQuestions_1829
status: PUBLISHED
createdAt: 2019-01-24T20:45:59.042Z
updatedAt: 2023-03-28T23:46:05.723Z
publishedAt: 2023-03-28T23:46:05.723Z
firstPublishedAt: 2019-01-24T22:09:07.683Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slugEN: how-can-i-create-a-field-in-master-data
legacySlug: como-crear-un-campo-en-master-data
locale: es
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

Los campos son atributos de un documento. Para crearlos, es necesario acceder a una [entidad de datos](/es/tutorial/creando-entidad-de-datos--tutorials_1265 "entidad de datos") específica y editarla.

Este proceso se realiza en dos áreas del módulo. Dynamic Storage es el ambiente en el que se crean los campos. Y CRM, en el que se visualizan estas informaciones.  

## Dynamic Storage

Dynamic Storage es el ambiente en el que es posible configurar las estructuras de datos.

En este ambiente, usted creará un campo de manera semejante al proceso en una base de datos, pero con una interfaz mucho más amigable y clara (sin necesidad de script, por ejemplo).

Para tener acceso, es posible hacer la ruta tradicional hasta el Master Data por el Admin de VTEX.

Verifique el procedimiento:

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Haga clic en __Create applications.__
3. Abajo de Configuraciones, haga clic en __Estructura de datos.__
4. En la página haga clic en la pestaña __Entidad de datos.__
5. Encuentre la __entidad__ en la que desea crear el campo.
6. Haga clic sobre el ícono __lápiz__ para editar.
7. Haga clic en uno de los botones __Nuevo campo.__
8. Rellene los valores __Nombre__ —sin caracteres especiales ni espacio—, __Nombre de exhibición__ y __Tipo.__
9. Haga clic en el ícono __engranaje__ para configurar las demás opciones del campo.
10.  Si es necesario, marque las alternativas deseadas en __Configuraciones generales__, __Configuraciones de búsqueda y filtro__, __Configuraciones específicas de este tipo de campo.__
11. Si es necesario, rellene el campo __Descripción.__
12. Haga clic en el botón rojo __Ok.__
13. Haga clic en el botón gris __Ok.__

> ℹ️ Puede encontrar más información sobre **Configuraciones generales** y **Configuraciones de búsqueda y filtro** en la sesión **Cómo configurar** del artículo [Crear entidad de datos](/es/tutorial/criando-entidade-de-dados--tutorials_1265#como-configurar).

![crear campo master data ds](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/configuraci%C3%B3n-de-master-data-v1/como-crear-un-campo-en-master-data_1.gif)

De este modo, volverá a la página principal de la pestaña Entidad de Datos. Para finalizar, es necesario publicar el campo. Basta localizar la línea de la entidad en la que se agregó el campo y hacer clic en el ícono de disquete.

A continuación, aparecerá en la pantalla el siguiente mensaje:

*"Publicación realizada con éxito. Si hay campos configurados como Filtro o que se puedan buscar es necesario hacer clic en el botón de reindexación”.*

Si este es el caso, en la línea de la entidad alterada, haga clic en el ícono de las flechas para reindexar la entidad. Así, la creación del campo se completará.

## CRM

En caso de que desee que los campos recién creados aparezcan en el formulario, acceda al CRM —ambiente en el que se muestran estas informaciones—.

Dicho esto, prosiga con las instrucciones:

1. En la parte superior de la página, haga clic en __Master Data__.
2. Seleccione la opción Master Data.
3. Al lado de Profile System, haga clic en el símbolo de engranaje.
4. En el formulario deseado, haga clic en el ícono de lápiz para editar.
5. En la pestaña Campos de la Lista, seleccione los campos que desea mostrar en la lista de la pestaña.
6. Haga clic en la pestaña Schemas de Layout.
7. Arrastre el campo de la lista Campos disponibles para las columnas Campos de la columna 1 o Campos de la columna 2.
8. En la esquina inferior derecha de la pantalla, haga clic en el botón azul Guardar.

![criar campo master data CRM](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/master-data/configuraci%C3%B3n-de-master-data-v1/como-crear-un-campo-en-master-data_2.gif)

¡Listo! Así, los campos se mostrarán en el formulario.
