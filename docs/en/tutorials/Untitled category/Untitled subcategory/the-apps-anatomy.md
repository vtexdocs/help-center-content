---
title: "The app's anatomy"
id: 6vNKv0W0bCMQGYaOK6syWm
status: ARCHIVED
createdAt: 2017-11-21T18:43:50.020Z
updatedAt: 2020-03-06T13:55:14.486Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: VTEX IO
author: 
slug: the-apps-anatomy
locale: en
legacySlug: the-apps-anatomy
subcategoryId: unknown-subcategory
---

The `vtex init` command generates the basic files and folder structure of your app.

Currently, this is the structure created by this command:

.
├── manifest.json
└── react
    ├── index.js
    └── render.json

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
			    "render": "4.x"
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

### render.json

The __render.json__ file declares which components will match which routes in the app.

It is already initially populated with the `/index` route, which serves the component declared in __index.js__.

The render.json file is created with the following structure:

```
{
			  "extensions": {
			    "index": {
			      "component": "./index.js",
			      "route": {
			        "path": "/index"
			      }
			    }
			  }
			}
```
