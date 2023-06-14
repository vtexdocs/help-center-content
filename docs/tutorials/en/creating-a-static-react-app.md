---
title: Creating a static React app
id: 1obR8EKcuMCqouWMMksIM2
status: DRAFT
createdAt: 2018-02-21T23:03:04.114Z
updatedAt: 2020-03-13T21:24:58.324Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:04:32.427Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: creating-a-static-react-app
legacySlug: creating-a-static-react-app
subcategory: Z46a6rHVAaAucoiW0skQQ
---

The __react__ service in VTEX IO lets you create front-end apps in React.

See the step-by-step guide to creating a first sample app:

1. After using the `vtex init` command, you will have the basic folder and file structure of the app

2. Create a new JS file (for example, _react/home.js_) and build your first React component on it

3. Open the pages.json file and, within the `extensions` object, create a new placeholder (for example, _home_), using the same existing placeholder template (_index_)

4. Define the component name (_/home.js_) and the route that will serve it (for example, _/home_).

After you do that, the structure of pages.json will look like this:

```
{
  "pages": {
    "index": {
      "path": "/index"
    },
    "home": {
      "path": "/home"
    }
  },
  "extensions": {
    "index": {
      "component": "index"
    },
    "home": {
      "component": "home"
    },
  }
}
```

Your workflow for building front-end apps with VTEX IO will always follow this template:

- Create the component in React;
- Within `extensions`, declare the placeholder;
- Within `pages`, define a route to render that placeholder.
