---
title: 'How is the structure of an app?'
id: 3K38eTAV8kK0goaUycoiey
status: ARCHIVED
createdAt: 2018-02-21T22:54:14.001Z
updatedAt: 2020-03-06T13:59:38.902Z
publishedAt: 
firstPublishedAt: 2018-02-21T22:55:21.295Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: authors_24
slugEN: how-is-the-structure-of-an-app
locale: en
legacySlug: how-is-the-structure-of-an-app
---

The `vtex init` command generates the basic files and folder structure of your app.

Currently, this is the structure created by this command:

```Shell
.
├── manifest.json
├── pages
│   └── pages.json
└── react
    └── index.js
```

That is, the basic structure consists of the __manifest.json__ file and the react folder, which contains the __index.js__ and the __render.js__ files.

### manifest.json

The __manifest.json__ file has information about your app, such as name, version, and description.

It has the following structure:

```
{
  "name": "{appName}",
  "vendor": "{vendorName}",
  "version": "0.1.0",
  "title": "{appTitle}",
  "description": "test",
  "mustUpdateAt": "2018-11-28",
  "categories": [],
  "registries": [
    "smartcheckout"
  ],
  "settingsSchema": {},
  "dependencies": {},
  "builders": {
    "react": "1.x",
    "pages": "0.x"
  }
}
```

### index.js

The __index.js__ file is the minimum React component that, by default, is initially created in your stub.

It has the following structure:

```
export default function HelloWorld () {
  return (
    <div>
	    <h1>Hello world!</h1>
		</div>
	)
}
```

### pages.json

The __pages.json__ file declares which components will match which routes in the app.

It is already initially populated with the `/index` route, which serves the component declared in __index.js__.

The pages.json file is created with the following structure:

```
{
  "pages": {
    "index": {
      "path": "/index"
    }
  },
  "extensions": {
    "index": {
      "component": "index"
    }
  }
}
```
