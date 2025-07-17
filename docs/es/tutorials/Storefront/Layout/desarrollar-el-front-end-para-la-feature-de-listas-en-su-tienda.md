---
title: 'Desarrollar el front-end para la feature de listas en su tienda'
id: iBCiwkxH8cmk6AcGoYMW0
status: PUBLISHED
createdAt: 2018-08-01T14:38:57.550Z
updatedAt: 2023-03-29T11:56:42.668Z
publishedAt: 2023-03-29T11:56:42.668Z
firstPublishedAt: 2018-08-06T17:06:46.166Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: develop-the-front-end-for-the-list-feature-in-your-store
locale: es
legacySlug: desarrollar-el-front-end-para-la feature-de-listas-en-su-tienda
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

## Crear enlace para acceder a la sección de listas en su tienda
Las siguientes configuraciones deben realizarse a través de Admin VTEX, accediendo a **Storefront > Layout** y haga clic en **CMS**.

Para crear el elemento html que da al cliente el acceso a las listas en la casilla de su tienda, usted debe incluir el código abajo en su template.

```html
<a href=“/giftlist”>Listas</a>
```

La ruta `/giftlist` funciona como la casilla de las listas para cada cliente.

## Editar template de la home de listas

En el template `new-Giftlist`, encontrado en el CMS de tu tienda, ya hemos incluido el control `<vtex.cmc:GiftListSearchV2 /> `. Este control __renderiza la búsqueda de las listas__ creadas por sus clientes. A continuación se muestra el código representado por esta plantilla.

```html
<div class="giftlist giftlist-search">
    <h2 class="glsearch-title">Search List</h2>
    <fieldset class="glsearch">
        <form name="giftlistsearchform" id="giftlistsearchform" enctype="multipart/form-data">
            <ul class="giftlistsearchul glsearch-ul">
                <li class="glsearch-type">
                    <span>
                        <label for="giftlistsearchtype">List type</label>
                    </span>
                    <select name="giftlistsearchtype" id="giftlistsearchtype">
                        <!-- Serão adicionadas novas options para cada tipo de lista criado no admin-->
                        <option value="x">All/Wish list</option>
                    </select>

                </li>
                <li class="glsearch-id">
                    <span>
                        <label for="giftlistsearchid">Reference</label>
                    </span>
                    <input type="text" id="giftlistsearchid" name="giftlistsearchid" placeholder="reference">
                </li>
                <li class="glsearch-name">
                    <span>
                        <label for="giftlistsearchname">Name</label>
                    </span>
                    <input type="text" id="giftlistsearchname" name="giftlistsearchname" placeholder="name">
                </li>
                <li class="glsearch-surname">
                    <span>
                        <label for="giftlistsearchsurname">Last name</label>
                    </span>
                    <input type="text" id="giftlistsearchsurname" name="giftlistsearchsurname" placeholder="last name">
                </li>
                <li class="glsearch-eventlocation">
                    <span>
                        <label for="giftlistsearcheventlocation">Place</label>
                    </span>
                    <input type="text" id="giftlistsearcheventlocation" name="giftlistsearcheventlocation" placeholder="place">
                </li>
                <li class="glsearch-eventcity optional">
                    <span>
                        <label for="giftlistsearcheventcity">City Event</label>
                    </span>
                    <input type="text" id="giftlistsearcheventcity" name="giftlistsearcheventcity" placeholder="city event">
                </li>
                <li class="glsearch-eventdate optional">
                    <span>
                        <label for="giftlistsearcheventdate">Date</label>
                    </span>
                    <input type="text" id="giftlistsearcheventdate" name="giftlistsearcheventdate" placeholder="date">
                </li>

                <li class="glsearch-find">
                    <span>
                        <input type="button" name="giftlistsearchfind" id="giftlistsearchfind" value="Search" class="btn">
                    </span>
                </li>
            </ul>
            <input type="hidden" id="giftlistsearchimagetypeid" name="giftlistsearchimagetypeid" value="3">
        </form>
    </fieldset>
    <div class="glsearch-result"></div>
</div>
```

Dentro del template `new-GiftList`, hay un subtemplate con el nombre` new-GiftList-Sidebar-nav`. Este subtemplate contiene el fragmento de código a continuación y se puede encontrar en la sección de plantillas de plantillas dentro de HTML Templates en su CMS:

```html
<ul class="nav nav-list bs-docs-sidenav giftlist-sidenav">
    <li><a href="/giftlist/"><i class="icon-chevron-right"></i>Buscar una Lista</a></li>
    <li><a href="/giftlist/create/"><i class="icon-chevron-right"></i>Crear nueva Lista</a></li>
    <li><a href="/giftlist/manage/"><i class="icon-chevron-right"></i>Gestionar mis Listas</a></li>
</ul>
```

Este código representa una lista con __tres links__:

1. __Buscar una Lista__: Este enlace lleva al cliente a la ruta `/giflist`, que es la casilla de las listas y donde se realizan las búsquedas por las listas
2. __Crear nueva Lista__: Este enlace lleva al cliente a la ruta `/giftlist/create`, donde el cliente crea sus listas. En los próximos pasos, vamos a explicar cómo se hace la creación de listas.
3. __Generación de mis Listas__: Este enlace lleva al cliente a la ruta `/giftlist/manage`, donde el cliente puede administrar sus listas. En los próximos pasos, vamos a explicar cómo se gestiona la lista.

<div class="alert alert-danger">
No desactive la bandera <strong>Authentication Required</strong> ya seleccionada por defecto en las carpetas siguientes. La identificación es necesaria para que las listas se muestren para cada usuario específico.
</div>

## Editar el template de creación de listas

<div class="alert alert-info">
Antes de editar esta plantilla, es necesario <a href="http://help.vtex.com/es/tutorial/criando-tipo-de-lista">crear el tipo de lista</a> que se ofrecerá en su lista tienda. <!--Reescrever o artigo de tipo de lista -->
</div>

La plantilla para crear listas se encuentra en la ruta `giftlist/create`. La plantilla por defecto de esta ruta es el `new-GiftList-Create`, ubicado en la sección `HTML Templates` de su CMS.

La plantilla de creación de listas viene con el control `<vtex.cmc:GiftListFormV2 />` por defecto. Este control representará la información de creación de lista de acuerdo con el tipo de lista que se creó.

La carpeta `giftlist/create`, por defecto, ya viene con la bandera marcada de `Authentication Required`. Por este motivo, se le pedirá un login cuando se accede a esta sección.

## Editar el template de administración de listas

La plantilla de gestión de listas se encuentra en la ruta `giftlist/manage`. La plantilla por defecto de esta ruta es el `new-GiftList-manage`, ubicado en la sección `HTML Templates` de su CMS.

La plantilla de administración de listas viene con el control `<vtex.cmc:GiftListManagerV2 />` por defecto. Este control representará las listas que fueron creadas por el cliente en la ruta `giftlist / create`.

La carpeta `giftlist/manage`, por defecto, ya viene con la bandera marcada de` Authentication Required`. Por este motivo, se le pedirá un login cuando se accede a esta sección.

## Editar el template de edición de listas

En el control `<vtex.cmc:GiftListManagerV2 />`, ubicado en la plantilla `new-GiftList-manage`, se representa un botón `Edit` que lleva al cliente a la ruta `giftlist/edit`. Esta ruta lee la plantilla `new-GiftList-Edit`, donde el cliente puede editar sus listas.

La plantilla de edición de listas viene con el control `<vtex.cmc: GiftListFormV2 />` por defecto. Este control es el mismo del template de la ruta `giftlist/create`. Sin embargo, no rendirá un formulario de creación de lista. En vista del contexto de edición, el control rendirá la información de la lista elegida para que el cliente pueda editar.
