---
title: 'Advanced concepts'
id: 6a4cJHg8fVgDNDEdcq9S9Q
status: PUBLISHED
createdAt: 2022-12-22T19:24:34.808Z
updatedAt: 2022-12-22T19:57:22.738Z
publishedAt: 2022-12-22T19:57:22.738Z
firstPublishedAt: 2022-12-22T19:57:22.738Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: conceitos-avancados
locale: en
trackId: 3fHF3GIjK8UugnQKIakpl9
trackSlugEN: store-development
order: 4
---

Now that you know a bit about the main aspects and technologies used for store development on VTEX, we will explore some advanced concepts that can help you in your daily life as a developer.

## Infrastructure abstraction

VTEX IO is a proprietary VTEX technology, but it supports the use of different frameworks and programming languages already familiar to developers, such as:

- TypeScript. 
- React. 
- GraphQL. 
- .NET.
- Node.

By abstracting several software development layers, when using VTEX IO, the developer does not need to deal with servers, infrastructure issues, and scalability.

Another advantage of the platform is that all development is automatically synced with VTEX servers. This means that no code is held locally, enabling updates and avoiding problems such as caching. 

## Safe development environments

Aimed to be a one-stop-shop for the whole of VTEX, VTEX IO supports the development of all systems and offers a secure way to change the functioning and appearance of a store without affecting what is in production. The key concept to make this possible is workspaces.

### Workspaces

VTEX IO allows you to develop applications in several environments called workspaces. Workspaces are development and testing environments independent of each other and work as different versions of the same VTEX account. 

This way, development and production environments are separate, enhancing the store's security using VTEX IO. 

There are three main types of workspaces:
- **Development workspace**: Mainly used by software developers to work in draft mode, building or expanding backend and frontend applications. 
- **Production workspace**: Mainly used by development and quality assurance teams to validate VTEX IO applications. They can receive production traffic when used in A/B testing.
- **Main workspace**: A single production workspace that mirrors the content delivered to a store's end consumers.

The main way to set up a workspace is to install or uninstall apps. This creates a plug-and-play system for modifying the store's behavior, which is one of the biggest advantages of VTEX IO.

