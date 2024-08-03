---
title: 'El producto no se muestra en la búsqueda del sitio web'
id: 2Ry55Fh6JW8v7oKBiB2pH3
status: PUBLISHED
createdAt: 2024-07-24T16:39:50.379Z
updatedAt: 2024-07-25T15:47:00.673Z
publishedAt: 2024-07-25T15:47:00.673Z
firstPublishedAt: 2024-07-24T18:55:15.925Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slug: el-producto-no-se-muestra-en-la-busqueda-del-sitio-web
locale: es
legacySlug: nao-consigo-visualizar-o-produto-na-busca-do-site
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

__Tags/Palavras clave__: *producto, búsqueda, catálogo, intelligent search, apps, rewriter, graphql, vtex io, redirect.*

Cuando el usuario realiza una búsqueda en una tienda VTEX utilizando [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), es posible que no se muestre el producto deseado, aunque el término utilizado en la búsqueda esté presente en la información registrada del ítem.

Ejemplo: al buscar en el sitio web de la tienda productos que contengan el término "Pendleton", los resultados de la búsqueda muestran 6 productos. Sin embargo, cuando accedemos al Admin VTEX (__Storefront > Intelligent Search > Explicación de la búsqueda__) e ingresamos el mismo término, se muestran 9 productos.

![Filter_1](https://images.ctfassets.net/alneenqid6w5/1bMAcWQEyVXBsUBZQp8H0K/fd5b87b16752fbec8cfaec8258bf22d4/Filter_1.png)

![Filter_2](https://images.ctfassets.net/alneenqid6w5/5TL7uaMv37zf7AGwohmAKu/d06e5b6d2114ea99424449d66eb3b887/Filter_2.png)

Este comportamiento puede ocurrir debido a los siguientes escenarios:

1. Registro incorrecto del producto en el catálogo.

2. El término utilizado no está presente en uno de los campos buscables del producto. Más información en [Configuración del comportamiento de la búsqueda](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/23mytRDsEduqLO0Lo7yufy#configuracion-del-comportamiento-de-la-busqueda) y [Configuración de la búsqueda](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5t75L6lYNwix93l41s1Yrx).

3. Rota interna redirecionando o resultado da pesquisa para uma página de marca (brand).

## Soluciones

Para que los productos buscados se muestren correctamente en los resultados de búsqueda del sitio web, consulta las siguientes soluciones:

- [Verificar campos de registro del producto](#verificar-campos-de-registro-del-producto)
- [Modificar filtro de búsqueda en Rewriter](#modificar-filtro-de-busqueda-en-rewriter)
- [Remover ruta interna de búsqueda en Rewriter](#remover-ruta-interna-de-busqueda-en-rewriter)

### Verificar campos de registro del producto

La ausencia del producto en un resultado de búsqueda puede atribuirse a que algunos campos se rellenaron incorrectamente durante el proceso de [registro del producto](https://help.vtex.com/es/tutorial/campos-de-registro-de-producto--4dYXWIK3zyS8IceKkQseke). Sigue los pasos a continuación para comprobar los campos __Marca__, __Mostrar en el sitio web__ y __Mostrar producto agotado__:

<blockquote><ui>1. En el Admin VTEX, accede a </b>Catálogo > Todos los productos</b>.</ui>

<blockquote><ui><div class ="alert alert-warning">
  Las tiendas que utilizan la página <b>Productos y SKUs (beta)</b> deben verificar los campos de registro de productos accediendo a <b>Catálogo >  Productos y SKUs</b> en el Admin VTEX. Más información en <a href="https://help.vtex.com/es/tutorial/productos-y-skus-beta--2ig7TmROlirWirZjFWZ3By">Productos y SKUs (beta)</a>.
</div></blockquote>

<blockquote><ui>2. Haz clic en sobre el producto que deseas <b>EDITAR</b>.</ui>

<blockquote><ui>3. Comprueba que la información contenida en el campo <b>Marca</b> es correcta. Si es necesario, agrega la marca del producto. Solo se pueden agregar marcas que hayan sido previamente <a href="https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR">registradas en la tienda</a>.</ui>

<blockquote><ui>4. Confirma que la casilla correspondiente a la opción <b>Mostrar en el sitio web</b> está seleccionada.</ui>

<blockquote><ui>5. Confirma que la casilla correspondiente a la opción <b>Mostrar producto agotado</b> está seleccionadao.</ui>

<blockquote><ui>6. Haz clic en <i>Guardar</i>.</ui>

<blockquote><ui>7. Accede al sitio web de la tienda, ingresa el término deseado y verifica que los productos que se muestran en los resultados de la búsqueda coinciden con los productos disponibles en la <b>Explicación de la búsqueda</b> de Intelligent Search (<b>Storefront > Intelligent Search > Explicación de la búsqueda</b>).</ui>

<blockquote><ui><div class ="alert alert-warning">
  Si el término buscado está presente en el nombre o la descripción del producto, pero el producto pertenece a una marca diferente a la especificada en la búsqueda, procede con los pasos a continuación para solucionar el problema.
</div></blockquote>

### Modificar filtro de búsqueda en Rewriter

Otro factor que puede contribuir a que un producto no se muestre en un resultado de búsqueda es el comportamiento predeterminado que la aplicación [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) presenta al mostrar productos.

Si un término está registrado en Rewriter como marca, [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4uSFqyJVCMVMIvVrtz3lxZ) recibirá la información de que dicho término solo debe mostrarse cuando esté asociado a una marca específica.

Para remover la restricción de búsqueda por marca (brand) y permitir que los productos también se muestren en los resultados de la búsqueda si contienen términos presentes en el nombre o la descripción (full text), sigue los pasos que se indican a continuación:

<blockquote><ui>1. En el Admin VTEX, accede a <b>Storefront > Intelligent Search > Explicación de la búsqueda</b> e ingresa el término deseado para comprobar cuántos productos esta búsqueda devuelve.</ui>

<blockquote><ui>2. Configure la aplicación <a href="https://developers.vtex.com/docs/apps/vtex.rewriter">Rewriter</a>. Si la aplicación aún no está instalada en tu tienda, accede a <a href="https://help.vtex.com/es/tracks/hub-de-extensiones--AW7klkYMh557y5IUOgzco/2LDRvGujYsumxi7IlE7CEJ">App Store</a> para instalarla.</ui>

<blockquote><ui>3. En <b>Configuración de la tienda > Storefront</b>, accede a <a href="https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics">GraphQL IDE</a>.</ui>

<blockquote><ui>4. En <b>Selecciona una aplicación</b>, chaz clic en la opción de Rewriter (<b>vtex.rewriter@{app-version-number}</b>).</ui>

![Graphql_ide_es](https://images.ctfassets.net/alneenqid6w5/1IBr0HvF5xxf2nfxIwW4YC/2751cf7c83a8d37216f82a532d77c3a7/Graphql_ide_es.png)

<blockquote><ui>5. En el campo de entrada de datos de la consulta (debajo de <b>GraphiQL</b>), ingresa los datos de la función mutación <i>saveInternal</i>.<ui>

```
mutation saverInternal($route: InternalInput!) {
internal {
 save(route: $route) {
   from
   declarer
   type
   id
   query
   endDate
   binding
   resolveAs
   origin
   disableSitemapEntry
 }
}
}
```

<blockquote><ui>6. En <b>Query Variables</b>, ingresa la información sobre la ruta. Debes sustituir el valor <i>Pendleton</i> por el término deseado y el valor del campo <i>id</i> por el ID del producto.<ui>

```
{
"route": {
 "from": "/Pendleton",
 "declarer": "vtex.store@2.x",
 "type": "fullText",
 "id": "2000307",
 "query": {
     "map": "ft"
 },
   "origin": "user-canonical"
 }
}
```

<blockquote><ui><div class ="alert alert-warning">
  El valor <i>ft</i> (full text) en lugar de <i>b</i> (brand) en el parámetro <i>map</i> indica que los productos en los que el término <i>Pendleton</i> esté presente en el nombre o la descripción también se mostrarán en la búsqueda.
</div></blockquote>

<blockquote><ui>7. Haz clic en la flecha de IDE de GraphiQL (a la derecha de <b>GraphiQL</b>) para actualizar el filtro de búsqueda. El nuevo valor predeterminado de filtro de búsqueda para el término será confirmado mostrando el siguiente mensaje en el campo de resultados de IDE de GraphiQL.</ui>

```
{
  "data": {
    "internal": {
      "save": {
        "from": "/Pendleton",
        "declarer": "vtex.store@2.x",
        "type": "fullText",
        "id": "2000307",
        "query": {
          "map": "ft"
        },
        "endDate": null,
        "binding": "0be568e5-52f5-44f0-9308-3ea701a9f847",
        "resolveAs": null,
        "origin": "user-canonical",
        "disableSitemapEntry": null
      }
    }
  }
}
```

<blockquote><ui>8. Accede al sitio web de la tienda, ingresa el término deseado y verifica que los productos que se muestran en los resultados de la búsqueda coinciden con los productos disponibles en la <b>Explicación de la búsqueda</b> de Intelligent Search (<b>Storefront > Intelligent Search > Explicación de la búsqueda</b>).</ui>

<blockquote><ui><div class ="alert alert-warning">
  Si el término de búsqueda está relacionado con una marca que ya no existe en su sitio web, deberá eliminar la ruta de búsqueda interna dentro de la aplicación Rewriter como se describe en la solución a continuación.</div></blockquote>

### Remoção da rota interna de busca no Rewriter

Las [rutas internas](https://developers.vtex.com/docs/guides/vtex-io-documentation-routes#routes-in-rewriter) de búsqueda en la aplicación [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) pueden evitar que un producto se muestre en la búsqueda si se ha registrado con una marca que ya no está disponible en la tienda.

Para volver a mostrar productos que contengan los términos buscados únicamente en el nombre o la descripción es necesario eliminar la ruta de búsqueda correspondiente. 

Para remover una ruta de búsqueda interna del término, sigue los pasos a continuación:

<blockquote><ui>1. En el Admin VTEX, accede a <a href="https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics">GraphQL IDE</a> en <b>Configuración de la tienda > Storefront > IDE de GraphQL</b>.</ui>

<blockquote><ui>2. En <b>Selecciona una aplicación</b>, haz clic en la opción Rewriter (<b>vtex.rewriter@{app-version-number}</b>).</ui>

<blockquote><ui>3. En el campo de entrada de datos de la consulta (debajo de <b>GraphiQL</b>), ingresa los datos de la función <i>internal get</i>, sustituyendo <i>pendleton</i> por el término deseado.</ui> 

```
{
  internal {
    get(path: "/Pendleton") {
      from
      resolveAs
      type
    }
  }
}
```

<blockquote><ui>4. Haz clic en la flecha de IDE de GraphiQL (a la derecha de <b>GraphiQL</b>) y verifica en el campo de resultados si la ruta interna está descrita como <i>brand</i>.</ui>

```
{
  "data": {
    "internal": {
      "get": {
        "from": "/Pendleton",
        "resolveAs": "/Pendleton",
        "type": "brand"
      }
    }
  }
}
```

<blockquote><ui>5. En el campo de entrada de datos de la consulta (debajo de <b>GraphiQL</b>), ingresa los datos de la función <i>mutation</i>, sustituyendo <i>pendleton</i> por el término deseado.</ui> 

```
mutation {
  internal {
    delete(path: "/Pendleton"){
      type
    }
  }
}
```

<blockquote><ui>6. Haz clic en la flecha de IDE de GraphiQL (a la derecha de <b>GraphiQL</b>) para remover la ruta interna de filtro por <i>brand</i> y confirmar que la información a continuación aparece en el campo de resultados de IDE de GraphiQL.</ui>

```
{
  "data": {
    "internal": {
      "delete": {
        "type": "brand"
      }
    }
  }
}
```

<blockquote><ui>7. Repite los pasos 3 y 4 para confirmar que la ruta interna de redirección del término hacia brand ha sido eliminada. Puedes confirmarlo observando que el campo de resultados en el IDE de GraphQL muestre <i>"get": null</i>.</ui>

```
{
  "data": {
    "internal": {
      "get": null
    }
  }
}
```

<blockquote><ui>8. Accede al sitio web de la tienda, ingresa el término deseado y verifica que los productos que se muestran en los resultados de la búsqueda coinciden con los productos disponibles en la <b>Explicación de la búsqueda</b> de Intelligent Search (<b>Storefront > Intelligent Search > Explicación de la búsqueda</b>).</ui>
