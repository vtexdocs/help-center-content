---
title: 'Incluir un registro en un formulario del Master Data'
id: tutorials_6264
status: PUBLISHED
createdAt: 2017-04-27T21:48:37.277Z
updatedAt: 2023-03-28T23:17:17.849Z
publishedAt: 2023-03-28T23:17:17.849Z
firstPublishedAt: 2017-04-27T23:11:18.994Z
contentType: tutorial
productTeam: Master Data
author: authors_35
slug: como-incluir-un-registro-en-un-formulario-del-master-data
legacySlug: como-incluir-un-registro-en-un-formulario-del-master-data
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

Para incluir un registro, basta acceder al módulo Master Data y elegir la aplicación que usted desea visualizar.

Digamos, por ejemplo, que usted desee editar la información de un cliente de su tienda.

<div class="alert alert-warning">
Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso.
 <ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Características de las versiones de Master Data
 </a>
</li>
<li>
<a href=”https://developers.vtex.com/vtex-rest-api/docs/getting-started-1”>
Master Data v2
 </a>
</li>
</ul>
</div>

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En Master Data, haz clic en **Aplicações**.
2. Dentro de la aplicación **Profile System**, elija el formulario **Clientes**.![2 - ES](//images.ctfassets.net/alneenqid6w5/7kSQ92eShaouWUwCA0imYs/a3cfe64fe48033ae60e68fc15dbe2ae3/2_-_ES.png)
3. Busque el usuario por el campo **E-mail** (u otro campo definido en la entidad de datos como buscable).
4. Haga clic en **Editar** una vez dentro del registro del usuario.![2.1 - ES](//images.ctfassets.net/alneenqid6w5/hFSdqx1G2k4gMC8iY2goW/fcaa9acb89874cb847ed8acfc24d7504/2.1_-_ES.png)
5. Haga la edición deseada y haga clic en **Salvar**.

La información presentada en este ejemplo viene de la entidad de datos **CL**, y sus campos pueden configurarse como editables o no directamente en la entidad de datos.

Para acceder a esa área, es necesario ingresar en el **Dynamic Storage**, que se ubica en la siguiente dirección: https://_NOMBREDELATIENDA_.ds.vtexcrm.com.br
