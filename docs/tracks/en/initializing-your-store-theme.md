---
title: 'Initializing your store theme'
id: 7cL3Qt4Aavm7RWr1UiTlPS
status: DRAFT
createdAt: 2019-02-19T19:50:26.133Z
updatedAt: 2020-03-13T21:24:47.109Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:50:29.572Z
contentType: trackArticle
productTeam: VTEX IO
slug: initializing-your-store-theme
locale: en
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugEN: build-a-store-using-vtex-io
---

Our toolbelt offers an `init` command that can quickly clone the default [store theme repository](https://github.com/vtex-apps/store-theme) to your computer and initialize some options.

First, using your terminal, navigate to a directory where you want your theme project to be created. Then, use the `init` command.

```
$ cd Projects
$ vtex init
```

Select `store-theme` and confirm that you would like to download the template project into the destination folder.

You will then be asked important app meta information like this app's vendor, name, title, and description. Use the __account name__ you're developing in as the __vendor__. This is important so you can correctly publish this app in this account later. You can use the default values by pressing enter.

![store-theme](https://images.ctfassets.net/alneenqid6w5/6FEPaKbOMqkndELmvd0u6z/f47d4a3a04b5cf270372b5dbc72940a9/store-theme.svg)

## Understanding the app structure

Let’s take a look at the generated files to understand this app’s structure. You can browse your code with any editor, but we strongly recommend using [Visual Studio Code (VSCode)](https://code.visualstudio.com/).

If you have VSCode installed, simply use the command `code .` to open it on your current folder. (If this doesn’t work, [follow the steps in VSCode setup guide](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) to add this command to your PATH environment variable.)

The main file of any app is the `manifest.json`. It has important metadata about your apps, such as its vendor, name, version (we use [strict semantic versioning](https://semver.org/)), app dependencies, builders and policies.

Let's take a look at an example manifest file and all its properties:

```json
{
 "vendor": "storecomponents",
 "name": "store-theme",
 "version": "0.1.0",
 "title": "Store Components",
 "description": "Demo for store theme init",
 "builders": {
   "styles": "1.x",
   "store": "0.x"
 },
 "dependencies": {
   "vtex.store": "2.x",
   "vtex.store-header": "2.x",
   "vtex.store-footer": "2.x",
   "vtex.carousel": "2.x",
   "vtex.shelf": "1.x",
   "vtex.product-details": "1.x",
   "vtex.product-kit": "1.x",
   "vtex.search-result": "3.x",
   "vtex.login": "2.x",
   "vtex.my-account": "1.x"
 }
}
```

- __Vendor, Name, and Version__: These three properties compose your __App Id__. Upon publishing an app, this is the immutable identifier to install and uninstall an app. For example, we could reference this app as `storecomponents.store-theme@0.1.0`.
- __Title and Description__: These will be used by administration interfaces such as My Apps admin.
- __Builders__: Builders define which type of code or configuration you wish to export on this app. This app is using the Styles and Store builders, which affect, respectively, the visual theme and the layout structure of a store. There are multiple other builders for specific use cases, such as `react`, `messages`, `node`, `graphql`, etc. You can [read more about builders](https://help.vtex.com/en/faq/what-is-a-vtex-io-builder), but for now, let's focus on these two.
- __Dependencies__: Your app may depend on other apps so you can leverage existing functionality provided by them. Dependencies can either be *called at runtime* by your app, e.g. by depending on an app that exports a GraphQL schema, or they can be used to __dynamically import code__ from another app. More on this later.

The store-theme init also created two different folders, named after the builders defined on the manifest: __store/__ and __styles/__. These will be processed by their respective builders in order to have the desired effects on your store.

<div class="alert alert-info">
Aside: Note that the <code>store-theme</code> depends on the <code>vtex.store</code> <a href="https://github.com/vtex-apps/store">app</a>. This app declares the basic configurations in order to have a functioning store, such as interfaces, routes, store settings, and more. You can think of it as part of the VTEX Store Framework. This app comes pre-installed with every VTEX account and cannot be uninstalled.
</div>

We will start editing these files soon. First, let's link this app and see it working.

## Linking your local code to VTEX IO

Linking your code is the process of syncing the local files in your computer with the VTEX IO platform and creating a *soft installation*. This is not the same as installing an app, because __you may only install published apps with a fixed version__. During development, your version number does not reflect the code in your app. This is why you __can not promote workspaces with linked apps!__

During a `link`, any changes you make to your code are automatically uploaded and reflect near-instantly. If a change fails to happen, you can try exiting the command (`CTRL-C`) and linking again.

Run `vtex link`  and watch your template app be compiled and published to the account and workspace you just created.

![vtex-link](https://images.ctfassets.net/alneenqid6w5/1peFxCLM0kF9JvC8AmPeFi/9cef3e4e5e5877a744c15ca3f6e8db18/vtex-link.svg)

<div class="alert alert-info">
Remember: run <code>vtex whoami</code> to make sure you are in the correct account and in a test workspace, otherwise <code>VTEX Toolbelt</code> will complain about linking directly to master.
</div>

## Visiting our newly generated store

Open your browser and navigate to: 

`https://{{workspace}}--{{account}}.myvtex.com`

Where workspace name is the workspace you just created, and account is the store's account name.

The `{{account}}.myvtex.com` is your private domain for testing new workspaces, so it will ask for your login information. After logging in, you should see our default store theme. 

Congratulations on linking your first VTEX IO App!

![dreamstore](https://images.ctfassets.net/alneenqid6w5/7G77GAWEmdysNJ2JBYaAI8/6b2bc7f47f994242c8a853e84e3f0b67/dreamstore.svg)
