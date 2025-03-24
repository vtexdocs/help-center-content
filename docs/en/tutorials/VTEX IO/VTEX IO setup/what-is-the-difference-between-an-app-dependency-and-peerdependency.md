---
title: 'What is the difference between an app dependency and peerDependency?  '
id: 13co2PvHHnsDNBNyrWXXvM
status: ARCHIVED
createdAt: 2019-04-01T21:52:38.336Z
updatedAt: 2020-03-13T21:25:01.650Z
publishedAt: 
firstPublishedAt: 2019-04-01T22:00:09.913Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slugEN: what-is-the-difference-between-an-app-dependency-and-peerdependency
locale: en
legacySlug: what-is-the-difference-between-an-app-dependency-and-peerdependency
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

Although we treat them similarly, the difference is mostly in semantics depending on what happens when you try to install an app that depends or "peer depends" on another.

## App Dependency

Assuming app A depends on app B and the user installs app A, this means that by inference, app B is required for app A to work correctly. In this case, when the user installs app A into a workspace, app B will **automatically** be added to the dependency tree of that workspace.

In essence when an app depends on another, you're saying that want to use it's API, or some component that the dependency exports. An example of this is when you import some styleguide component.

For example:

`import { Button }  from 'vtex.styleguide'`


## Peer Dependency

In the case of a peer dependency, we can configure app A to be peer dependant on on app B, this means that IO will undestand that app B is required for app A to work as well. It also infers that app B must already be installed in the workspace before A can be installed.

The peer dependency concept is strongly related to the powers of a directly installed app (which we call root apps because they are the roots of the dependency tree) and the powers of a mere dependency. Only root apps are allowed to declare a `myvtex.com` route and only root apps are billable. This means that if you depend on a paid app, you must use a peer dependency. 

A peer dependecy app declares that the app can't be installed without an aditional dependency being installed.

An example would be the Pages admin where the user can't install it without first installing `vtex.store` 
```

{
  ...
  "peerDependencies": {
      "vtex.store": "2.x"
  },
  "dependencies": {
      "vtex.styleguide": "9.x"
  }
}
  ```


