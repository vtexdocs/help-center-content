---
title: 'VTEX IO Cheatsheet'
id: 7CjVGlI1Lqu8M4muAWamQK
status: ARCHIVED
createdAt: 2018-02-22T02:15:58.079Z
updatedAt: 2020-03-06T13:59:38.892Z
publishedAt: 
firstPublishedAt: 2018-02-22T02:18:00.508Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: authors_24
slugEN: vtex-io-cheatsheet
locale: en
legacySlug: vtex-io-cheatsheet
---

### Get a CLI command options help

`vtex` ou `vtex -h` or `vtex --help`

### Show debug information

Add `--verbose` after the command, as in `vtex link --verbose`

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

Defaults to the app in the current directory

### Install an app from a private Registry

`vtex install -r {account}` or `vtex install --registry {account}`

### Uninstall an app

`vtex uninstall {app}`

Defaults to the app in the current directory

### List installed apps in current workspace

`vtex list`

### Sign in to a VTEX account

`vtex  login` or `vtex login -a {account} -w {workspace}`

### Sign out from an account

`vtex  logout`

### Switch to other VTEX account

`vtex switch {account}`

### Check out your user details, the account you're logged into and your current workspace

`vtex whoami`

### Switch to another workspace

`vtex use {workspace}`

### List the account workspaces

`vtex workspace list`

### Create a workspace

`vtex workspace create {name}`

### Delete a workspace

`vtex workspace delete {name}`

### Promote a workspace to master

`vtex promote`

### Set a workspace to production mode

`vtex production`

### Set a workspace to development mode

`vtex production false`

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

### Generate package.json from manifest.json

`vtex local package`

### Generate manifest from package.json

`vtex local manifest`

### Run a Colossus function locally

`vtex local debug`

### Show user's auth token and copy it to clipboard

`vtex local token`

### Create basic files and folders for your VTEX app

`vtex init`


### List installed infra services

`vtex infra list`

### Install infra service

`vtex infra install {name}`

### Update all installed infra services

`vtex infra update`

