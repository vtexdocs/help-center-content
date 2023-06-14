---
title: 'How to make your app multilingual'
id: 7kxGvpbS8MkaMAS4UqIoKs
status: DRAFT
createdAt: 2018-03-06T15:12:14.213Z
updatedAt: 2020-03-13T21:24:57.355Z
publishedAt: 
firstPublishedAt: 2018-03-06T15:46:31.018Z
contentType: tutorial
productTeam: VTEX IO
author: 1iryp847AQgmKGKIASeW8Y
slug: how-to-make-your-app-multilingual
legacySlug: how-to-make-your-app-multilingual
subcategory: Z46a6rHVAaAucoiW0skQQ
---

All the VTEX apps should be prepared for multiple languages, meaning that every string written on the screen, including possible error messages, should be built according to the VTEX IO localization feature.
We recommend building apps in English, Portuguese and Spanish to take advantage of most of VTEX range. 

Here’s a brief description on how to enable it:

1. In the folder `/react` create a folder named `/locales` (if it still doesn’t exist). This folder should contain files with the strings used by your React code

2. Create a file named after the IETF code for your language. For example: `pt-BR.json`, `en-US.json`, `es-ES.json`, etc. This file should just contain an object with key-value pairs as below:

``` 
{ 
"getting-started.greeting": "Bem-vindo ao seu primeiro App VTEX!",
...
}
```

The key is the universal name of your message therefore you may insert in the code the proper message by using the `FormattedMessage` handle:

```
...
<h1>
  <FormattedMessage id="getting-started.greeting"/>
</h1>
...
```

The App environment selects the proper language automatically based on the store running it.

Please refer to [Render Getting Started](https://github.com/vtex-apps/render-getting-started) App to see this feature in action.

