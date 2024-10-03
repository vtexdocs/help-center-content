---
title: 'VTEX App submission guidelines - Technical requirements for a successful app submission'
id: Y87JaGVk2qOYiiouMSU4G
status: ARCHIVED
createdAt: 2018-10-23T22:18:45.145Z
updatedAt: 2020-03-13T21:24:57.581Z
publishedAt: 
firstPublishedAt: 2018-10-24T22:16:38.366Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slugEN: vtex-app-submission-guidelines-technical-requirements-for-a-successful-app
locale: en
legacySlug: vtex-app-submission-guidelines-technical-requirements-for-a-successful-app
subcategoryId: 3e2VLdLao8GGk4sAmMmwmi
---

In order to successfully submit your VTEX IO App to the AppStore we've developed a series of guidelines that will make your first submission a breeze.

__Permissions__ 
Inform and list VTEX APIs and external links that your app will need to access.

The link to your app permissions must be registered inside the file manifest.json, nested inside the field:  “policies”    


__Terms of use__
Your apps terms of use must be registered inside *manifest.json*, located under:  *"billingOptions"  →  "termsURL"*

__Support__ 
It is mandatory to inform at least one support contact.  It can be an email or a link to your company's support page.

The link must be registered inside the manifest.json, no campo:  *"billingOptions" →  "support"*


### 2. Technical quality assurance
To have your app go through the mandatory quality assurance stage you must send us a link to your GitHub repo as well as the URL of a partner store interested in using your app.__  The partner store must be successfully running the app.__  It's ok if the app is running on a beta workspace.

Where do I send my links to have my apps tested? [Here](https://goo.gl/forms/RO39RytBDJFRdRbR2)

Before requesting that your app be verified, please make sure it follows the guidelines below:

### Lint
It is required from all developers that their projects be appropriately linted, using VTEX's best practices.  You'll need the following files: .eslintrc, tslint.json & tsconfig.json. Feel free to use this  repository as an example.
To configure your local environment you will need:
- Copy over the file .eslintrc into /react
- Place tslint.json and tsconfig.json inside /node
- Add tslint and tslint-config-vtex to /node/package.json. Run `yarn` or `npm` inside /node
- Add the following packages inside  /react/package.json:

```
      "devDependencies": {
       "babel-eslint": "^8.2.2",
       "eslint": "^5.2.0",
       "eslint-config-vtex": "^8.0.0",
       "eslint-config-vtex-react": "^3.0.1",
       "eslint-plugin-import": "^2.2.0",
       "eslint-plugin-react": "^7.0.0",
       "prop-types": "^15.5.10",
       "react": "^16.2.0"
     }

```


- Run `yarn` or `npm` inside /react
- If you use VSCode as your IDE of choice, we recommend you install "ESLint" and "TSLint"
- If you prefer, you can deactivate key ordering in objects by editing the following JSON:

```

    //tslint.json
    {
      "extends": "tslint-config-vtex",
      "rules": {
        "object-literal-sort-keys": false
       }
     }
    
```    
    
### Manifest.json
Dependencies:
- Make sure there are no repeat or out of use dependencies.
- Make sure you're running the latest versions.

Policies
- Try to make your path as granular as possible.  Avoid "/*". [More information](http://help.vtex.com/pt/tutorial/autorizando-sua-app)


Incorrect:
```
   {
  "name": "outbound-access",
  "attrs": {
    "host": "{{account}}.vtexcommercestable.com.br",
    "path": "/*"
  }
},
```

 Correct:

   ```
    {
  "name": "outbound-access",
  "attrs": {
    "host": "{{account}}.vtexcommercestable.com.br",
    "path": "/api/license-manager/users"
  }
},
    
    
  ```
    
Do not set your host as `vtexcommercebeta`


__Backend__
Remove anything that won't be necessary:  imports, paths, etc.
Use GraphQl. [Further information](https://github.com/vtex/graphql-server/wiki)

__Frontend__
- Use the VTEX [Styleguide](https://vtex.github.io/styleguide/) components.  They've been designed to make design and development a breeze.  Your app must be translated and available in portuguese, english and spanish.  [Example](https://github.com/vtex-apps/dreamstore/tree/master/react/locales)
- Use [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) - [Example](https://github.com/vtex-apps/landing-pages/blob/4be8354f3384ad75439caeaf0b0a2b446cdbcad8/react/components/Footer/FooterLink.js)
- For admin apps use the appropriate [loading animation](http://help.vtex.com/pt/tutorial/admin-app-loading-animacao)
- Avoid building apps that use 100% of the screen's width. Make sure your content is centred.
- Avoid continuous data "polling".  Fetch only when new data is available.
- Avoid forcing unnecessary page refreshes.  If a page refresh is necessary do not use absolute paths or window.location.  This is incorrect: `window.location.href="/admin/myapp"`.
- Remember that an app with a great user experience is crucial for your app's success.
