---
title: 'VTEX IO 2018.3 - Migration Guide'
id: 1r3AHYTA6sccE6YGYo4UWc
status: ARCHIVED
createdAt: 2018-03-08T02:24:24.212Z
updatedAt: 2020-03-13T21:24:59.954Z
publishedAt: 
firstPublishedAt: 2018-03-08T04:14:58.939Z
contentType: tutorial
productTeam: VTEX IO
author: 4tz85APeKIwMEk6amWS0ou
slug: vtex-io-2018-3-release-notes-and-migration-guide
locale: en
legacySlug: vtex-io-2018-3-release-notes-and-migration-guide
subcategoryId: 5eBwrcLFVSwYGSOQqGKQYW
---

The updates released by the Developer Experience Area in March 2018 include lots of features that make working with VTEX IO even easier.

# Updated Builders

Almost all builders were updated on this release cycle. These are the currently supported builders as of this publication using `vtex.builder-hub@0.15.2`:

- pages: "0.x"
- react: "2.x"
- graphql: "1.x"
- node: "3.x"

Let's take a look at what's new in each of them and how to migrate your applications.

## Pages 0.x and React 2.x

The React 2.x is an incremental upgrade from 1.x that adds support for the new **Render 7** major, so if you're using it already, simply change the `react` builder to `2.x` in your manifest and `link` your app to make sure everything works.

If you're coming from `0.x`, you can use a new command in your toolbelt: `vtex port react`. This will help convert your `render/` app to the new structure using `react/` and `pages/` folders.

The first release of our `pages` builder marks the beginning of our new CMS, **VTEX Pages**, which is under heavy development in our Rio office! 

VTEX Pages will feature a completely new WYSIWYG interface for editing your components directly in your store and a full-flegded admin to create custom pages. For now, you can define pages for your store directly in an app by creating a `pages/pages.json` file. 

Let's check an example:

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

This pages file declares a page with the name `hello-react` in the public path `/hello` and then configures the `hello-react` extension point with a react component defined in the `react/index.js` file of the same app. Now, when visiting `{{store}}.myvtex.com/hello`, the `index.js` component will be rendered.

## Important! Installing required apps for Render 7
Render 7 has dropped support for the `/_v/assets/` and `/_v/sse/` routes, which are now implemented by specific apps that *need to be installed in your account*.

When upgrading your app to `react@2.x` you'll also need to **install the following required apps:**

- vtex.asset-server
- vtex.sse-server

To install them using the VTEX Toolbelt, simply use the install command:

`vtex install vtex.sse-server vtex.asset-server`

If your account has an older `vtex.colossus-legacy-proxy@0.x`, update it to major `1.x`:

`vtex uninstall vtex.colossus-legacy-proxy@0.x && vtex install vtex.colossus-legacy-proxy@1.x`

### Examples

Some relevant examples apps using react and pages:

- https://github.com/vtex-apps/hello-react
- https://github.com/vtex-apps/render-getting-started
- https://github.com/vtex-apps/catalogue

## GraphQL 1.x and Node 3.x

In GraphQL 0.x, your resolvers used to be defined in a TypeScript file in `graphql/index.ts`. However, since the `dotnet-builder` is almost here and you'll be able to define resolvers using `dotnet-core`, we've decided it didn't make sense for your NodeJS GraphQL resolvers code to live in the `graphql/` directory.

Also, it's a common pattern for the resolvers to share code with the `node` folder, but having two different folders with two different `package.json` made that harder.

From GraphQL 1.x onwards, **only schema resides in the graphql folder**. So you'll continue defining a `graphql/schema.graphql` file with all yours Queries, Mutations and custom types.

However, if you want to use the automatic node resolvers, they should be defined in `node/graphql/index.ts`. They still have the same syntax and must export a `const resolvers` with your queries and mutations. For example:

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

If you're upgrading from 0.x, simply move your resolvers to `node/graphql/index.ts`, update your manifest to add `node: "3.x"` and that's it!

### Examples

Some relevant examples apps with GraphQL resolvers:

- https://github.com/vtex-apps/hello-graphql
- https://github.com/vtex-apps/store-graphql
- https://github.com/vtex-apps/catalogue
