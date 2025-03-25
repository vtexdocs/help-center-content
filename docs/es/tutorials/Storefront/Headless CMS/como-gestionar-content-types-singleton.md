---
title: 'Cómo gestionar content types Singleton'
id: VBibMN1BqV2OFmavUFCdo
status: PUBLISHED
createdAt: 2023-04-05T17:55:26.748Z
updatedAt: 2024-06-05T19:07:02.549Z
publishedAt: 2024-06-05T19:07:02.549Z
firstPublishedAt: 2023-04-06T19:11:57.614Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: managing-singleton-content-types
locale: es
legacySlug: como-gestionar-content-types-singleton
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

El content type de tipo Singleton permite la creación y gestión de una única página garantizando que en el Headless CMS solo exista una página de dicho content type.

Su uso evita conflictos e incoherencias que pueden ocurrir cuando se crean varias páginas del mismo content type. Por ejemplo, puedes utilizar Singleton para la página de inicio (Home) de tu tienda, asegurándote de que solo haya una página de inicio y todas las actualizaciones y solicitudes realizadas en ella siempre devuelvan el mismo resultado.
![singleton-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Headless%20CMS/como-gestionar-content-types-singleton_1.gif)

>⚠️ Para crear un content type Singleton, verifica con tu equipo de desarrolladores que la propiedad <i>isSingleton</i> ya esté implementada o solicita que sigan las instrucciones en [Using isSingleton in a content type](https://v1.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type) para agregarla al content type deseado.

## Crear el Singleton
1. Accede a **Admin > Storefront > Headless CMS**.
2. Selecciona `CREAR NUEVO` y elige el nombre del content type singleton, por ejemplo **Home**.
3. Edita la página y agrega nuevas secciones según tu preferencia.

>⚠️ Solamente se puede crear el Singleton una vez. Si creaste la página Singleton, esta ya no aparecerá en la lista de content types.

Cuando hayas terminado de editar la página, puedes publicar el contenido seleccionando `Publicar` o guardar la página como borrador.

Para editar o eliminar contenido, consulta las secciones a continuación:

## Editar el Singleton
1. Accede a **Admin > Storefront > Headless CMS**.
2. Haz clic en el proyecto donde se creó el Singleton.
3. Selecciona el Singleton creado, por ejemplo **Home**.
4. Ya puedes editar la página de inicio **Home** agregando nuevas secciones.

##Despublicar el Singleton
1. Accede a **Admin > Storefront > Headless CMS**.
2. Haz clic en el proyecto en que se creó el Singleton.
3. Haz clic en `Despublicar` > `Despublicar ahora`.

>⚠️ Antes de despublicar, asegúrate de que no haya ningún borrador o no podrás continuar. Si hay alguno, puedes eliminarlo o programarlo para publicación.

4. Se mostrará una ventana emergente para que confirmes la acción de despublicar la página.
5. Haz clic y mantén presionado el botón `DESPUBLICAR` para despublicar el contenido.

## Eliminar el Singleton
1. En la página del Singleton, selecciona `Más` (menu kebab) y haz clic en `Eliminar`.
2. Después haz clic en `VOLVER A LAS PÁGINAS`.

>⚠️ Si quieres restaurar la página y su contenido, haz clic en `RESTAURAR`.
