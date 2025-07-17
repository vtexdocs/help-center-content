---
title: 'Anuncios de VTEX Sales App'
id: 3UtOFwbwD4muz3p72RBPmC
status: PUBLISHED
createdAt: 2023-05-25T17:16:06.902Z
updatedAt: 2024-06-26T18:31:53.389Z
publishedAt: 2024-06-26T18:31:53.389Z
firstPublishedAt: 2023-05-26T22:11:51.769Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: ads-from-vtex-sales-app
locale: es
legacySlug: anuncios-de-vtex-sales-app
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

La nueva funcionalidad de anuncios de VTEX Sales App tiene dos tipos principales de anuncios: productos específicos y resultados de búsqueda. Esta flexibilidad permite que los administradores de la tienda adapten las estrategias de marketing a sus necesidades y objetivos específicos y puedan promover productos individuales o grupos de productos relacionados.

Para personalizar la vitrina de una tienda, los retailers pueden agregar una página de `Anuncio por tienda` especificando el ID de la tienda a la que se asociará el anuncio en [Master Data](https://developers.vtex.com/docs/guides/master-data-introduction), lo que permite crear vitrinas personalizadas para cada tienda.

En este documento, se presentan las instrucciones detalladas para instalar, configurar y utilizar la nueva funcionalidad de anuncios. Sigue los pasos a continuación para configurar esta herramienta e impulsar tus ventas online.

* [Instalar las dependencias de VTEX](#instalar-las-dependencias-de-vtex)
* [Configurar la aplicación Headless CMS](#configurar-la-aplicacion-headless-cms)
* [Crear la página de anuncios](#crear-la-pagina-de-anuncios)
* [Activar el menú de anuncios en VTEX Sales App](#activar-el-menu-de-anuncios-en-vtex-sales-app)
* [Acceder a los anuncios en VTEX Sales App](#acceder-a-los-anuncios-en-vtex-sales-app)

## Instalar las dependencias de VTEX

Antes de instalar las dependencias, debes tener la [CLI de VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install) instalada. Después de tener la CLI de VTEX IO instalada, ejecuta los siguientes comandos en el terminal para instalar las dependencias necesarias:

1.
    ```
    vtex login {account}  
    ```
2.
    ```
    vtex install vtex.admin-cms@1.x vtex.admin-cms-graphql@0.x vtex.admin-cms-graphql-rc@1.x vtex.admin-releases@0.x vtex.cms-builder-sf-jamstack@1.x
    ```

## Configurar la aplicación Headless CMS

1. En el Admin VTEX, accede a **Apps > Mis Apps** o escribe **Mis Apps** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Configuración` en la tarjeta de **CMS (alpha)**.
3. Haz clic en `Add More`.
4. En el campo **Project ID**, ingresa `assisted-sales-app`.
5. En el campo **Sections URL**, ingresa[ https://instore--instore.vtex.app/assisted-sales/cms/sections.json](https://instore--instore.vtex.app/assisted-sales/cms/sections.json).
6. En el campo **Content types URL**, ingresa[ https://instore--instore.vtex.app/assisted-sales/cms/content-types.json](https://instore--instore.vtex.app/assisted-sales/cms/content-types.json).
7. Haz clic en `Guardar`.

## Crear la página de anuncios

Para crear una página de anuncios para VTEX Sales App, sigue los pasos a continuación:

1. Accede a la URL del Admin VTEX: `https://{account}.myvtex.com/admin//admin/new-cms/assisted-sales-app`.
2. Haz clic en **Crear nuevo** y selecciona **Anuncios**.
3. Haz clic en **Untitled** para editar e incluir el nombre que desees. Recomendamos el nombre **Anuncios**.
4. En la pestaña **Secciones** haz clic en el botón `+` para agregar una nueva sección. Cada sección es una colección de productos o términos de búsqueda. Cada sección se mostrará como una vitrina en formato de carrusel. Puedes ordenar las vitrinas haciendo clic en los botones `Mover hacia abajo` o `Mover hacia arriba`.
5. Selecciona un tipo de anuncio, productos o resultados de búsqueda.
  - **Vitrina de productos:** mostrará cada producto y SKU (opcional) que determines. Rellena la siguiente información:
    - **Título de la vitrina:** nombre de la vitrina que se mostrará en la página.
    - **ID del producto:** número identificador del producto que deseas mostrar. Campo obligatorio.
    - **ID del SKU del producto:** número identificador del SKU del producto que deseas mostrar. Campo opcional.
![vitrine-produto-es](https://images.ctfassets.net/alneenqid6w5/6SREOFdog1AfNXqyhH0I5Z/99d80481198a5789b864e7b3cc621c9f/image.png)
Después de rellenar los campos, se mostrará la imagen del producto con precio "a partir de". Si incluyes el SKU, se mostrará el precio y la promoción del SKU indicado. Puedes incluir más productos al hacer clic en `+ NUEVO PRODUCTO`. Puedes agregar hasta 10 productos en cada vitrina.
El resultado de la vitrina de productos se mostrará como en la siguiente imagen.
![vitrine-produto-2-es](https://images.ctfassets.net/alneenqid6w5/3SY8POqXIAK0Qi2lWax8qq/2b1605234e989064a7c188b6f3ce31a8/image.png)
  - **Vitrina de resultados de búsqueda:** mostrará los productos de resultados de búsqueda que determines. Rellena la siguiente información:
    - **Título de la vitrina:** nombre de la vitrina que se mostrará en la página.
    - **Imagen de búsqueda:** imagen que mostrará la selección de productos en la vitrina.
    - **Nombre de la búsqueda:** nombre de la búsqueda que se mostrará en la página.
    - **Término de búsqueda:** término de búsqueda que servirá de referencia para los productos.
![vitrine-busca-es](https://images.ctfassets.net/alneenqid6w5/2nOoe8dF1IaF1YPIr3N3dV/832a5b243a2a82f170eebb8d77574009/image.png)
Cuando el vendedor haga clic en el término de búsqueda, se le redirigirá a los resultados de búsqueda que se hayan establecido en **Término de búsqueda**. Puedes incluir hasta 10 búsquedas en cada vitrina. El resultado del ejemplo se muestra en la siguiente imagen:
![vitrine-busca-2-es](https://images.ctfassets.net/alneenqid6w5/s6MJ80nGy16Ex39NnPwnT/2381c9859c4adeaec5953b0ac87d7b42/image.png)
<ol start="6">
  <li>Después de crear las secciones, haz clic en <code>Guardar</code> y, luego, haz clic en <code>Publicar</code> y <code>Publicar ahora</code> para finalizar.</li>
</ol> 

La publicación de la vitrina se añadirá a la fila de indexación y se publicará en unos segundos.
- **Vitrina de colección:** mostrará los productos de la colección que definas. Rellena la siguiente información: 
  - **Título de la vitrina:** nombre de la vitrina que se mostrará en la página.   - **ID de la colección:** número del identificador de la colección que se mostrará en la página.

![Vitrine - ES](https://images.ctfassets.net/alneenqid6w5/4hppMA8Zky77l93af8W6ks/b512969705a8d78857febbdbbc892fc8/Vitrine_-_ES.png)

## Activar el menú de anuncios en VTEX Sales App

1. Accede a la configuración técnica de VTEX Sales App en:
```
https://{account}.myvtex.com/admin/portal/#/sites
```
2. Haz clic en el botón del engranaje <i class="fas fa-cog"></i>.
3. Selecciona la pestaña **Código**.
4. En la pestaña lateral, selecciona `checkout-instore-custom-js`.
![checkout-instore-custom-js-file](https://images.ctfassets.net/alneenqid6w5/6JgOUD4YUDyArNzUkgzIVJ/a09ddfdf23851e0ada81931af2ed5b19/image.png)
5. En el objeto `window.INSTORE_CONFIG`, agrega la flag `enableExplore: true,`.
![window.INSTORE_CONFIG](https://images.ctfassets.net/alneenqid6w5/6kpTp7g4zRuIsyYGdo5Bio/c0003c9637209f503401fea07db839cb/image.png)
6. Haz clic en <i class="fas fa-save"></i> `Guardar`. 
7. Opcionalmente, puedes determinar que la página de inicio del vendedor sea la página de anuncios. Para lograrlo, agrega la flag `initialPage : 'advertisements',` en el objeto `window.INSTORE_CONFIG`.
![initialPage : advertisements](https://images.ctfassets.net/alneenqid6w5/1zS4dgPnw7Q0ZP2w0thQdt/88e4f64f2707fd1dbbe95d6b9861e712/image.png)

## Acceder a los anuncios en VTEX Sales App

En VTEX Sales App, el vendedor podrá acceder a la página de anuncios de dos maneras:

* **Página de inicio:** si el administrador de la tienda previamente registró la página de anuncios como la página de inicio del vendedor, al iniciar sesión en la plataforma, se redirigirá al vendedor directamente a la página de anuncios. Esta configuración garantiza que los vendedores siempre estén al día sobre los anuncios y promociones relevantes, de manera inmediata y en cuanto acceden al sistema.
* **Menú Explorar:** si la página de anuncios no es la página de inicio, el vendedor puede acceder a ella fácilmente desde el menú **Explorar**. Para acceder a la página de anuncios, el vendedor debe hacer clic en el menú **Explorar**. Luego, se redirigirá al vendedor a la página de anuncios, donde podrá ver e interactuar con los productos y promociones disponibles.

![vitrine-sale-app-es](https://images.ctfassets.net/alneenqid6w5/3YddBVVXNGJiVWfDK1xUrg/ffca39f0f0a2b0bdc59c39ebd88ddc71/image.png)
