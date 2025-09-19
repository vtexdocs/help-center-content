---
title: 'La búsqueda de redirecciones en el Admin no devuelve resultados'
id: 2u5cJhUSVM6bbEAFkgUww7
status: PUBLISHED
createdAt: 2024-07-24T13:41:02.016Z
updatedAt: 2024-11-08T19:06:54.349Z
publishedAt: 2024-11-08T19:06:54.349Z
firstPublishedAt: 2024-07-24T14:13:11.586Z
contentType: tutorial
productTeam: Others
author: 4ubliktPJIsvyl1hq91RdK
slugEN: admin-redirect-search-returns-no-results
legacySlug: la-busqueda-de-redirecciones-en-el-admin-no-devuelve-resultados
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Redirecciones
---

Cuando hay un número excesivo de redirecciones, la página Redirecciones del Admin no puede procesar la búsqueda. Por lo tanto, al intentar realizarla, no se obtiene ningún resultado. Para más información sobre la página Redirecciones, consulta el artículo [Gestionar redirecciones según el binding](/es/tutorial/administrando-redireccionamientos-de-url-por-binding--67GAK2TCQgjvmtPXxAqREb).

## Solución

Sigue los pasos a continuación para obtener las redirecciones:

1. Accede a la página de **IDE de GraphQL** desde `{nombre_de_la_cuenta}.myvtex.com/admin/graphql-ide`. Sustituye `{nombre_de_la_cuenta}` por el nombre de tu cuenta VTEX.
2. Selecciona la aplicación `vtex.rewriter@x`. donde `x` es la versión de la aplicación. Por ejemplo, `vtex.rewriter@1.62.0`.
3. Utiliza la siguiente consulta GraphQL para listar las redirecciones de la tienda:

  ```
  query {
    redirect{
      listRedirects{
        routes{
          from
          to
          endDate
          type
          binding
        }
      }
    }
  }
  ```

  El resultado esperado se mostrará en el siguiente formato:

  ```json
  {
    "data": {
      "redirect": {
        "listRedirects": {
          "routes": [
            {
              "from": "/hello",
              "to": "hola",
              "endDate": null,
              "type": "PERMANENT",
              "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
            },
            {
              "from": "/v/*",
              "to": "https://masrefacciones.backend.verbolia.com",
              "endDate": null,
              "type": "PERMANENT",
              "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
            }
          ]
        }
      }
    }
  }
  ```

4. Alternativamente, si la ruta de la redirección que deseas encontrar es conocida, utiliza la siguiente consulta GraphQL sustituyendo `/hello` por la ruta de la redirección deseada:

  ```
  query {
    redirect{
      get(path:"/hello"){
        from
        to
        endDate
        type
        binding
      }
    }
  }
  ```

  El resultado esperado se mostrará en el siguiente formato:
  ```json
  {
    "data": {
      "redirect": {
        "get": {
          "from": "/hello",
          "to": "hola",
          "endDate": null,
          "type": "PERMANENT",
          "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
        }
      }
    }
  }
  ```

Si las redirecciones no son las esperadas, la aplicación Rewriter permite realizar otras operaciones con las redirecciones, como eliminar las existentes y crear nuevas. Para más información sobre estas operaciones, consulta la guía [Rewriter GraphQL API](https://developers.vtex.com/docs/apps/vtex.rewriter/rewriter-graphql-api).

También puedes exportar e importar redirecciones con `archivos.csv` utilizando la página Redirecciones o el [plugin](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-plugins) `redirects` de VTEX IO CLI. Para más información sobre la importación y exportación de redirecciones, consulta el artículo [Gestionar redirecciones según el binding](/es/tutorial/administrando-redireccionamientos-de-url-por-binding--67GAK2TCQgjvmtPXxAqREb#importar-y-exportar-redirecciones) y la [referencia de comandos de VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference#redirects-delete).
