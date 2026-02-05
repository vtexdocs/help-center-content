---
title: 'El producto no se muestra en la búsqueda del sitio web'
id: 2Ry55Fh6JW8v7oKBiB2pH3
status: PUBLISHED
createdAt: 2024-07-24T16:39:50.379Z
updatedAt: 2025-08-14T22:44:25.091Z
publishedAt: 2025-08-14T22:44:25.091Z
firstPublishedAt: 2024-07-24T18:55:15.925Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-view-the-product-in-the-search-results
legacySlug: nao-consigo-visualizar-o-produto-na-busca-do-site
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Producto
  - Búsqueda
  - Catálogo
  - Intelligent search
  - Rewriter
---

Cuando el usuario realiza una búsqueda en una tienda VTEX utilizando [Intelligent Search](/es/docs/tracks/vision-general-intelligent-search), es posible que no se muestre el producto deseado, aunque el término utilizado en la búsqueda esté presente en la información registrada del ítem.

Ejemplo: al buscar en el sitio web de la tienda productos que contengan el término "Pendleton", los resultados de la búsqueda muestran 6 productos. Sin embargo, cuando accedemos al Admin VTEX (__Storefront > Intelligent Search > Explicación de la búsqueda__) e ingresamos el mismo término, se muestran 9 productos.

![Filter_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/operaciones-de-la-tienda/el-producto-no-se-muestra-en-la-busqueda-del-sitio-web_1.png)

![Filter_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/operaciones-de-la-tienda/el-producto-no-se-muestra-en-la-busqueda-del-sitio-web_2.png)

Este comportamiento puede ocurrir debido a los siguientes escenarios:

1. Registro incorrecto del producto en el catálogo.

2. El término utilizado no está presente en uno de los campos buscables del producto. Más información en [Configuración del comportamiento de la búsqueda](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/23mytRDsEduqLO0Lo7yufy#configuracion-del-comportamiento-de-la-busqueda) y [Configuración de la búsqueda](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5t75L6lYNwix93l41s1Yrx).

3. Rota interna redirecionando o resultado da pesquisa para uma página de marca (brand).

## Soluciones

Para que los productos buscados se muestren correctamente en los resultados de búsqueda del sitio web, consulta las siguientes soluciones:

- [Verificar campos de registro del producto](#verificar-campos-de-registro-del-producto)
- [Modificar filtro de búsqueda en Rewriter](#modificar-filtro-de-busqueda-en-rewriter)
- [Remover ruta interna de búsqueda en Rewriter](#remover-ruta-interna-de-busqueda-en-rewriter)

### Verificar campos de registro del producto

La ausencia del producto en un resultado de búsqueda puede atribuirse a que algunos campos se rellenaron incorrectamente durante el proceso de [registro del producto](/es/tutorial/campos-de-registro-de-producto--4dYXWIK3zyS8IceKkQseke). Sigue los pasos a continuación para comprobar los campos __Marca__, __Mostrar en el sitio web__ y __Mostrar cuando no tenga stock__:

1. En el Admin VTEX, accede a **Catálogo > Todos los productos**.

> ⚠️ Las tiendas que utilizan la página **Productos y SKUs (beta)** deben verificar los campos de registro de productos accediendo a **Catálogo > Productos y SKUs** en el Admin VTEX. Más información en [Productos y SKUs (beta)](/es/docs/tutorials/productos-y-skus).

2. Haz clic en sobre el producto que deseas **EDITAR**.

3. Comprueba que la información contenida en el campo **Marca** es correcta. Si es necesario, agrega la marca del producto. Solo se pueden agregar marcas que hayan sido previamente [registradas en la tienda](/es/docs/tracks/registrar-marcas).

4. Confirma que la casilla correspondiente a la opción **Mostrar en el sitio web** está seleccionada.

5. Confirma que la casilla correspondiente a la opción **Mostrar cuando no tenga stock** está seleccionadao.

6. Haz clic en *Guardar*.

7. Accede al sitio web de la tienda, ingresa el término deseado y verifica que los productos que se muestran en los resultados de la búsqueda coinciden con los productos disponibles en la **Explicación de la búsqueda** de Intelligent Search (**Storefront > Intelligent Search > Explicación de la búsqueda**).

> ⚠️ Si el término buscado está presente en el nombre o la descripción del producto, pero el producto pertenece a una marca diferente a la especificada en la búsqueda, procede con los pasos a continuación para solucionar el problema.

### Modificar filtro de búsqueda en Rewriter

Otro factor que puede contribuir a que un producto no se muestre en un resultado de búsqueda es el comportamiento predeterminado que la aplicación [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) presenta al mostrar productos.

Si un término está registrado en Rewriter como marca, [Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4uSFqyJVCMVMIvVrtz3lxZ) recibirá la información de que dicho término solo debe mostrarse cuando esté asociado a una marca específica.

Para remover la restricción de búsqueda por marca (brand) y permitir que los productos también se muestren en los resultados de la búsqueda si contienen términos presentes en el nombre o la descripción (full text), sigue los pasos que se indican a continuación:

1. En el Admin VTEX, accede a **Storefront > Intelligent Search > Explicación de la búsqueda** e ingresa el término deseado para comprobar cuántos productos esta búsqueda devuelve.

2. Configure la aplicación [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter). Si la aplicación aún no está instalada en tu tienda, accede a [App Store](/es/docs/tracks/hub-de-extensiones-app-store) para instalarla.

3. En **Configuración de la tienda > Storefront**, accede a [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics).

4. En **Selecciona una aplicación**, chaz clic en la opción de Rewriter (**vtex.rewriter@{app-version-number}**).

![Graphql_ide_es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/operaciones-de-la-tienda/el-producto-no-se-muestra-en-la-busqueda-del-sitio-web_3.png)

5. En el campo de entrada de datos de la consulta (debajo de **GraphiQL**), ingresa los datos de la función mutación *saveInternal*:

    ```graphql
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

6. En **Query Variables**, ingresa la información sobre la ruta. Debes sustituir el valor *Pendleton* por el término deseado y el valor del campo *id* por el ID del producto:

    ```graphql
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

   > ⚠️ El valor *ft* (full text) en lugar de *b* (brand) en el parámetro *map* indica que los productos en los que el término *Pendleton* esté presente en el nombre o la descripción también se mostrarán en la búsqueda.

7. Haz clic en la flecha de IDE de GraphiQL (a la derecha de **GraphiQL**) para actualizar el filtro de búsqueda. El nuevo valor predeterminado de filtro de búsqueda para el término será confirmado mostrando el siguiente mensaje en el campo de resultados de IDE de GraphiQL:

    ```graphql
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

8. Accede al sitio web de la tienda, ingresa el término deseado y verifica que los productos que se muestran en los resultados de la búsqueda coinciden con los productos disponibles en la **Explicación de la búsqueda** de Intelligent Search (**Storefront > Intelligent Search > Explicación de la búsqueda**).

> ⚠️ Si el término de búsqueda está relacionado con una marca que ya no existe en su sitio web, deberá eliminar la ruta de búsqueda interna dentro de la aplicación Rewriter como se describe en la solución a continuación.

### Remoção da rota interna de busca no Rewriter

Las [rutas internas](https://developers.vtex.com/docs/guides/vtex-io-documentation-routes#routes-in-rewriter) de búsqueda en la aplicación [Rewriter](https://developers.vtex.com/docs/apps/vtex.rewriter) pueden evitar que un producto se muestre en la búsqueda si se ha registrado con una marca que ya no está disponible en la tienda.

Para volver a mostrar productos que contengan los términos buscados únicamente en el nombre o la descripción es necesario eliminar la ruta de búsqueda correspondiente. 

Para remover una ruta de búsqueda interna del término, sigue los pasos a continuación:

1. En el Admin VTEX, accede a [GraphQL IDE](https://developers.vtex.com/docs/guides/graphql-ide#graphql-basics) en **Configuración de la tienda > Storefront > IDE de GraphQL**.

2. En **Selecciona una aplicación**, haz clic en la opción Rewriter (**vtex.rewriter@{app-version-number}**).

3. En el campo de entrada de datos de la consulta (debajo de **GraphiQL**), ingresa los datos de la función _internal get_, sustituyendo _pendleton_ por el término deseado. 

    ```graphql
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

4. Haz clic en la flecha de IDE de GraphiQL (a la derecha de **GraphiQL**) y verifica en el campo de resultados si la ruta interna está descrita como _brand_.

    ```graphql
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

5. En el campo de entrada de datos de la consulta (debajo de **GraphiQL**), ingresa los datos de la función _mutation_, sustituyendo _pendleton_ por el término deseado. 

    ```graphql
    mutation {
      internal {
        delete(path: "/Pendleton"){
          type
        }
      }
    }
    ```

6. Haz clic en la flecha de IDE de GraphiQL (a la derecha de **GraphiQL**) para remover la ruta interna de filtro por _brand_ y confirmar que la información a continuación aparece en el campo de resultados de IDE de GraphiQL.

    ```graphql
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

7. Repite los pasos 3 y 4 para confirmar que la ruta interna de redirección del término hacia brand ha sido eliminada. Puedes confirmarlo observando que el campo de resultados en el IDE de GraphQL muestre _"get": null_.

    ```graphql
    {
      "data": {
        "internal": {
          "get": null
        }
      }
    }
    ```

8. Accede al sitio web de la tienda, ingresa el término deseado y verifica que los productos que se muestran en los resultados de la búsqueda coinciden con los productos disponibles en la **Explicación de la búsqueda** de Intelligent Search (**Storefront > Intelligent Search > Explicación de la búsqueda**).
