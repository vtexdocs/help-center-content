---
title: 'Mastering VTEX IO commands'
id: 2KumEHSnWwgyA0E0qwmIE0
status: DRAFT
createdAt: 2017-11-22T18:13:42.437Z
updatedAt: 2020-03-05T17:59:10.331Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: VTEX IO
author: 
slug: mastering-vtex-io-commands
legacySlug: mastering-vtex-io-commands
subcategory: 
---

### See the CLI command options

`vtex` ou `vtex -h` ou `vtex --help`

### Link an app

`vtex link`

### Unlink an app

`vtex unlink {app}`

### Publish an app to the current account Registry

`vtex publish`

### Publish an app to a public Registry

`vtex publish --public` ou `vtex publish -p`

### Publish a path containing an app

`vtex publish {path}`

### Install an app

`vtex install {app}`

O padrão (sem o argumento `{app}`) é instalar a app da pasta atual.

### Install an app from a private Registry

`vtex install -r {account}` ou `vtex install --registry {account}`

### Uninstall an app

`vtex uninstall {app}`

O padrão (sem o argumento `{app}`) é desinstalar a app da pasta atual.

### List apps installed in the account

`vtex list`

### Sign in to a VTEX account

`vtex  login`

### Sign out from an account

`vtex  logout`

### Switch to other VTEX account

`vtex switch {account}`

### Check out your user details, the account where you're logged in and your current workspace

`vtex whoami`

### Switch to other workspace

`vtex use {workspace}`

### List the account workspaces

`vtex workspace list`

### Create a workspace

`vtex workspace create {name}`

### Delete a workspace

`vtex workspace delete {name}`

### Promote a workspace to master

`vtex workspace promote`

### Move a workspace to production mode

`vtex workspace production true`

### Remove a workspace from production mode

`vtex workspace production false`

### Reset a workspace

`vtex workspace reset {name}`

### List workspace dependencies

`vtex deps list`

### Update workspace dependencies

`vtex deps update`

### Update a specific app@version

`vtex deps update {app}`

### Setup a local eslint environment

`vtex local eslint`

### Generate package.json from manifest

`vtex local package`

### Generate manifest from package.json

`vtex local manifest`

### Run a Colossus function locally

`vtex local debug`

### Show user's auth token and copy it to clipboard

`vtex local token`

### Create basic files and folders for your VTEX app

`vtex init`

### Create a new render project

`vtex init render`

### List installed infra services

`vtex infra list`

### Install infra service

`vtex infra install {name}`

### Update all installed infra services

`vtex infra update`

### List available VTEX IO versions

`vtex io list`

### Install VTEX IO version

`vtex io install {version}`
