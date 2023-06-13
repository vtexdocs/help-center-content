---
title: Introduction to VTEX IO
id: 1LSy4Gkvo4saEQa2OMqC4q
status: DRAFT
createdAt: 2018-04-26T18:29:11.973Z
updatedAt: 2020-03-13T21:24:44.470Z
publishedAt: 
firstPublishedAt: 2018-04-26T20:34:35.807Z
contentType: trackArticle
productTeam: VTEX IO
slug: introduction-to-vtex-io
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugEN: vtex-io-getting-started
---

__VTEX IO__ is VTEX's web application development platform.

In this track, we will teach you step by step how to develop an app using VTEX IO.

## Basic Structure

See in the image below the hierarchical structure of VTEX IO:

![VTEX IO Hierarchy](//images.ctfassets.net/alneenqid6w5/44SdYX37X2WKa6gicUKQWS/4b699f3355a2d9d70126354578d285cd/VTEX_IO_-_track_img.png)

- __Account__: To develop an app, you need to have a VTEX account.
- __Workspaces__: These are the environments where the apps will be developed. These environments are linked to the account. You may have multiple workspaces for a single account.
- __App__: it's the application itself. Apps are developed within workspaces. Multiple apps can be developed within a single workspace.

## VTEX CLI

To get started, fist install the [VTEX CLI](https://help.vtex.com/tutorial/vtex-io-toolbelt--sq7pQ21bqKa8QeQmmUKyG) using the package manager of your choice:

`npm i -g vtex`

or

`yarn global add vtex`

You can run `vtex -v` to check if it was successfully installed.

## Login

You can run `vtex login` or `vtex login -a {accountName}` to login to your VTEX [account](http://help.vtex.com/en/faq/what-is-an-account-for-vtex-io).

If you still don't have an account, please head to http://www.vtex.com/partner/
