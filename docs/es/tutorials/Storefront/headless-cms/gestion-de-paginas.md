---
title: 'Gestión de Páginas en el Headless CMS'
id: 3DO6rBhZ1p3zndnFu5BgRt
status: PUBLISHED
createdAt: 2023-03-23T19:46:08.568Z
updatedAt: 2024-06-17T12:55:20.070Z
publishedAt: 2024-06-17T12:55:20.070Z
firstPublishedAt: 2023-03-23T20:06:47.380Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: managing-pages
legacySlug: gestion-de-paginas-beta
locale: es
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

En **Headless CMS**, puedes gestionar todas las rutas de URL y los modelos de página de tu tienda en línea, incluyendo las páginas `Global Alert Page` `Page`,`Product Page`. También puedes crear y asociar páginas personalizadas a plantillas predefinidas y gestionar páginas creadas directamente en el código fuente de tu proyecto de storefront.

## Visión general

![New pages - es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/headless-cms/gestion-de-paginas_1.png)

| Opção               | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| Crear documento   | Crea una nueva página basada en las opciones disponibles, por ejemplo, `Product Page` o `Home`.  |
| Configuraciones (⚙️) | Abre un modal con las configuraciones del proyecto divididas en tres pestañas: <ul><li>**General:** permite editar el ID del proyecto y las configuraciones de API o archivar el proyecto.</li> <li>**Content-Types:** Guarda los content types creados en el código de la tienda.</li><li>**Compilación:** permite conectar el proyecto CMS al código fuente mediante webhooks, configurando los tipos de contenido y las secciones.</li></ul> |
| Buscar      | Busca páginas específicas dentro del proyecto. |
| Status      | Filtra las páginas según su estado: <ul><li>`Published`: Páginas publicadas y ya disponibles en la tienda.</li> <li>`Draft`: Páginas que están en borrador, en desarrollo, y aún no han sido publicadas.</li></ul>|
| Tipo      | Filtra las páginas según el tipo de contenido (content types). Los tipos de contenido son definidos en el código de su tienda. Para obtener más información, consulte [Adding Content Types to the Headless CMS](https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections#step-2-adding-content-types-to-the-headless-cms). |

## Crear una nueva página

Para crear y gestionar una página, sigue estos pasos:

1. En el Admin VTEX, accede a **Headless CMS**.
> ⚠️ Asegúrate de estar en el proyecto correcto. De lo contrario, ve al menú **Proyecto** en la esquina superior izquierda, selecciona el nombre del proyecto en el que deseas crear la página y continúa en el paso 2.
2. Haz clic en `Crear documento` y selecciona el tipo de página deseado.
3. En `Untitled`, nombra la página.
4. Haz clic en `Secciones` y selecciona la sección deseada.
![Gif - Páginas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/headless-cms/gestion-de-paginas_2.gif)
5. Agrega más secciones si es necesario y llénalas.
6. Haz clic en `Publicar`.

Para duplicar o eliminar la página, haz clic en el menú **Más acciones** (`⋮`) de la página.
