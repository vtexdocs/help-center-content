---
title: 'VTEX IO 2018.3 - Guía de migración'
id: 1r3AHYTA6sccE6YGYo4UWc
status: ARCHIVED
createdAt: 2018-03-08T02:24:24.212Z
updatedAt: 2020-03-13T21:24:59.954Z
publishedAt: 
firstPublishedAt: 2018-03-08T04:14:58.939Z
contentType: tutorial
productTeam: VTEX IO
author: 4tz85APeKIwMEk6amWS0ou
slug: vtex-io-2018-3-guia-de-migracion
locale: es
legacySlug: vtex-io-2018-3-guia-de-migracion
subcategoryId: 5eBwrcLFVSwYGSOQqGKQYW
---

Las actualizaciones lanzadas por la area de Developer Experience en marzo de 2018 incluyen muchas features que hacen que trabajar con VTEX IO sea aún más fácil.

# Builders actualizados

Casi todos los builders fueron actualizados en este ciclo de lanzamiento. Estos son los builders admitidos actualmente a partir de esta publicación que utilizan `vtex.builder-hub @ 0.15.2`:

- pages: "0.x"
- react: "2.x"
- graphql: "1.x"
- node: "3.x"

Echemos un vistazo a las novedades en cada uno de ellos y a cómo migrar sus aplicaciones.

## Pages 0.x y React 2.x

El React 2.x es una actualización incremental de 1.x que agrega soporte para el nuevo **Render 7**, por lo que si ya lo está utilizando, simplemente cambie el builder `react` a `2.x` en su archivo manifiest y haga el `link` de su app para asegurarse de que todo funciona bien.

Si viene de `0.x`, usted puede usar un nuevo comando en tu toolbelt: `vtex port react`. Esto ayudará a convertir su aplicación `render/` a la nueva estructura usando las carpetas `react/` y `pages/`.

¡El primer lanzamiento de nuestro creador de `pages` marca el comienzo de nuestro nuevo CMS, **VTEX Pages**, que se encuentra en fase de desarrollo en nuestra oficina de Rio!

Las páginas VTEX contarán con una interfaz WYSIWYG completamente nueva para editar sus componentes directamente en su tienda y un administrador completo para crear páginas personalizadas. Por ahora, usted puede definir páginas para su tienda directamente en una aplicación creando un archivo `pages/pages.json`.

Veamos un ejemplo:

```
// pages/pages.json
{
  "pages": {
    "hello-react": {
      "path": "/hello"
    }
  },
  "extensions": {
    "hello-react": {
      "component": "index"
    }
  }
}
```

Este archivo de páginas declara una página con el nombre `hello-react` en la ruta pública `/hello` y luego configura el punto de extensión `hello-react` con un componente react definido en el archivo `react/index.js` de la misma app. Ahora, al visitar `{{tienda}}.myvtex.com/hello`, se renderizará el componente `index.js`.

## ¡Importante! Instalación de las apps requeridas para Render 7

Render 7 ha dejado de admitir las rutas `/_v/assets/` y `/_v/sse/`, que ahora están implementadas por aplicaciones específicas que *deben instalarse en su cuenta*.

Al actualizar su aplicación a `react@2.x`, usted también deberá **instalar las siguientes aplicaciones requeridas:**

- vtex.asset-server
- vtex.sse-server

Para instalarlas usando el VTEX Toolbelt, basta con usar el comando de instalación:

`vtex install vtex.sse-server vtex.asset-server`

Si su cuenta tiene un `vtex.colossus-legacy-proxy@0.x` anterior, actualícela a `1.x` principal:

`vtex uninstall vtex.colossus-legacy-proxy@0.x && vtex install vtex.colossus-legacy-proxy@1.x`

### Ejemplos

Algunos ejemplos relevantes de aplicaciones que usan react y pages:

- https://github.com/vtex-apps/hello-react
- https://github.com/vtex-apps/render-getting-started
- https://github.com/vtex-apps/catalogue

## GraphQL 1.x y Node 3.x

En GraphQL 0.x, sus resolvers solían definirse en un archivo de TypeScript en `graphql/index.ts`. Sin embargo, dado que el `dotnet-builder` está casi listo y usted podrá definir resolvers usando `dotnet-core`, hemos decidido que no tiene sentido que el código de resolvers NodeJS GraphQL funcione en el directorio `graphql/`.

Además, es un patrón común para los resolvers compartir código con la carpeta `node`, pero tener dos carpetas diferentes con dos `package.json` diferentes lo hizo más difícil.

Desde GraphQL 1.x en adelante, **solo el schema reside en la carpeta graphql**. Por lo tanto, usted continuará definiendo un archivo `graphql/schema.graphql` con todas sus Queries, Mutations y custom types.

Sin embargo, si desea utilizar los resolvers node automáticos, deberían definirse en `node/graphql/index.ts`. Todavía tienen la misma sintaxis y deben exportar un `const resolvers` con sus queries y mutations. Por ejemplo:

```
// graphql/schema.graphql
type Query {
  myQueryDefinedInSchema: String
}

// node/graphql/index.ts
export const resolvers = {
  Query: {
    myQueryDefinedInSchema: async (root, args, ctx) => {...},
  },
}
```

Si usted viene del 0.x, simplemente mueva sus resolvers a `node/graphql/index.ts` y actualice su archivo manifiest para agregar `node: "3.x"`.

### Ejemplos

Algunos ejemplos relevantes de aplicaciones con resolvers GraphQL:

- https://github.com/vtex-apps/hello-graphql
- https://github.com/vtex-apps/store-graphql
- https://github.com/vtex-apps/catalogue
