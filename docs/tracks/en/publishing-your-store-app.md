---
title: 'Publishing your store app'
id: 6NTZJvsxz9qLwO6XCoxgQb
status: DRAFT
createdAt: 2019-03-07T18:21:25.255Z
updatedAt: 2020-03-13T21:24:46.397Z
publishedAt: 
firstPublishedAt: 2019-03-07T18:22:31.278Z
contentType: trackArticle
productTeam: VTEX IO
slug: publishing-your-store-app
locale: en
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugEN: build-a-store-using-vtex-io
---

By now you have structured your store's pages, stylized it's components and even customized it a bit with your own CSS.  It's time to learn how to showcase our work to the world.

## Using `vtex release` to bump version

We’ll be using `vtex release` to automate a few tasks, namely bumping the version inside your manifest.json according to semantic versioning nomeclature, updating your CHANGELOG.md, commits tags and finally pushing your changes to a remote repository.

For the sake of this tutorial let’s automatically bump it to stable by opening your terminal and running  `vtex release major stable`.

Alternatively you can just use `vtex release <major|minor|patch> <stable|beta>` to adjust your release differently.

## Publishing the app to your registry

The registry is where all VTEX.IO apps are stored. To get your app to be listed on the registry you’ll be required to run `vtex publish`.

Alternatively you can have  ‘vtex release’  do this automatically for you by adding  ‘postrelease’ to your app’s manifest.json.

Example:

```
//manifest.json
  "scripts": {
    "postrelease": "vtex publish"
  }
```

## Reset your workspace

Now you've just added your app to the registry.  We’re now on the final stretch as we begin the process to make your app installable.

Let’s reset your workspace, since we cannot promote our app while there are linked apps.  This is extremely important since linking (like unlinking) has our workspace mimic the master workspace.

Run:

`vtex workspace reset workspace name`

## Install your app

While we were developing our apps, we created several links (which were just now removed).  We now move towards making our app installable, which means it will deliver the same experience to the end user regardless of links and configurations.

This stage is important since we’re transforming our app into a bundle.

Think of links as temporary (constantly updating) and installing(bundling your app) as permanent.

## Promote your workspace to master

We now have to promote the workspace to master.  This tells VTEX.IO that the selected workspace is the production ready and will be receiving traffic.

```
vtex promote
```

## Switching DNS

Open a ticket and let us know it’s time to point our DNS towards your app. We’ll be happy to do it quickly and efficiently.
