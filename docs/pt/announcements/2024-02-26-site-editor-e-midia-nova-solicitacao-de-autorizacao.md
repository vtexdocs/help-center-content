---
title: 'Site Editor e Mídia: nova solicitação de autorização'
id: 7tO32uRxIUK8lOp8AvWs2L
status: PUBLISHED
createdAt: 2024-02-26T12:35:10.352Z
updatedAt: 2024-02-26T18:06:13.754Z
publishedAt: 2024-02-26T18:06:13.754Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-02-26-site-editor-and-media-new-authorization-requirement
locale: pt
legacySlug: site-editor-e-midia-nova-solicitacao-de-autorizacao
announcementImageID: ''
announcementSynopsisPT: 'Usuários agora precisam do recurso CMS GraphQL API para gerenciar conteúdo. Atualize os perfis de acesso de acordo.'
---

A partir de segunda-feira, 18 de março de 2024, todos os[ usuários](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) e [chaves de aplicação](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) que precisarem acessar o [Site Editor](/pt/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) e o [Mídia](/pt/tutorial/media-overview--31fhjHTt4TBoo50AmGQ9b2) deverão ter o[ recurso](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `CMS GraphQL API` do License Manager adicionados aos seus[ perfis de acesso](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) para o gerenciamento de conteúdo.

## O que mudou?
Como [anunciado anteriormente para os usuários do Headless CMS](/pt/announcements/headless-cms-new-authorization-requirement--7G056zzZmGFBztkRqhpUgj), os usuários e as chaves de aplicação devem ter o recurso `CMS GraphQL API` associado aos seus perfis de acesso para gerenciar conteúdo.

Agora, estamos estendendo esse requisito para o Site Editor e o Mídia, o que significa que o recurso `CMS GraphQL API` é necessário para gerenciar conteúdo usando essas ferramentas.

## Por que fizemos esta mudança?
Essa alteração visa aumentar a segurança e simplificar o acesso do usuário ao Site Editor e ao Mídia, proporcionando aos usuários um ambiente mais controlado e seguro para gerenciar o conteúdo da loja.

## O que precisa ser feito?
Certifique-se de que os usuários do Site Editor e do Mídia estejam associados ao recurso `CMS GraphQL API` em seus perfis de acesso, seja [criando um novo perfil de acesso](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete#creating-a-role) ou editando um existente.

<div class="alert alert-warning">
  <p> Para gerenciar usuários e perfis de acesso, é necessário ter o recurso <code>Save access profile</code> do produto <bold>License Manager</bold> associado ao perfil de acesso do usuário. Por exemplo, o <a href="https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted">User Administrator - RESTRICTED</a> é um perfil de acesso predefinido que tem o recurso <code>Save access profile</code> associado a ele.</p>
</div>

