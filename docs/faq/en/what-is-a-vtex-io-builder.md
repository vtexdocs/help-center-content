---
title: 'What is a VTEX IO Builder?'
id: 5ZqqfbmAuIaKcwaaA2eWoM
status: DRAFT
createdAt: 2018-12-06T12:41:20.098Z
updatedAt: 2020-03-13T21:25:28.345Z
publishedAt: 
firstPublishedAt: 2018-12-06T12:53:56.939Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: 4tz85APeKIwMEk6amWS0ou
slug: what-is-a-vtex-io-builder
locale: en
legacySlug: what-is-a-vtex-io-builder
---

**VTEX IO** is a serverless development environment that allows you to easily build high-quality, ready-for-production web applications. 

One of its main features is the capability to define **builders**, which are apps responsible for transforming other apps code and settings. For example, the **react** builder transforms TypeScript React components' source code into compiled bundles, ready for being imported into Render apps.

## From zero to one

We started out with a few basic builders that gave full access to very low-level abstractions in the platform, including running server-side node services and mounting React components to arbitrary paths.

As the platform evolved, we realized that it's important for builders to:

* Have very well-defined and minimal responsibilities, as opposed to creating lots of unrelated side-effects;
* Be abstract and opinionated, as opposed to being low-level and making the user deal with hard choices;
* Allow for fine-grained permission control, as opposed to being available universally to every account and every user.

As a result, we are currently working on several new builders that will dramatically simplify app development by making each part of the app's responsibilities clear and well-separated. 

By dividing responsibilities into smaller builders, we will be able to evolve them separately - faster and with fewer stop-the-world breaking changes.



