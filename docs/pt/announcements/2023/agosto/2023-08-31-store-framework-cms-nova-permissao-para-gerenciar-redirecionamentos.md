---
title: 'Store Framework CMS: Nova permissão necessária para gerenciar redirecionamentos'
id: 1GcT48ML2w6TZQxQyGbD6W
status: PUBLISHED
createdAt: 2023-08-31T18:10:04.246Z
updatedAt: 2023-09-05T16:32:32.516Z
publishedAt: 2023-09-05T16:32:32.516Z
contentType: updates
productTeam: VTEX IO
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2023-08-31-new-permission-required-to-manage-redirects-in-store-framework-cms
locale: pt
legacySlug: store-framework-cms-nova-permissao-para-gerenciar-redirecionamentos
announcementImageID: 'undefined'
announcementSynopsisPT: 'Fazer redirecionamentos no Store Framework CMS exige acesso ao recurso “CMS Settings”.'
---

**Redirecionamentos** é uma funcionalidade do Store Framework CMS que faz com que um usuário da loja, ao entrar em uma página específica, seja redirecionado a outra página automaticamente, seja ela interna ou externa à loja. Por motivos de segurança, estamos exigindo que usuários do Admin possuam uma permissão específica para fazer redirecionamentos.

## O que mudou?

Para que usuários do Admin possam criar, editar e apagar redirecionamentos no CMS, agora é necessário possuir um perfil de acesso com o [recurso do License Manager](/pt/docs/tutorials/recursos-do-license-manager) **CMS Settings**.

## Por que fizemos essa mudança?

Adicionamos esse requisito de permissão por motivos de segurança. Dessa forma, apenas usuários do Admin que foram explicitamente autorizados terão acesso à funcionalidade **Redirecionamentos**. Isso impede que usuários não autorizados possam criar, editar e apagar redirecionamentos de forma indesejada.

## O que precisa ser feito?

Para que um usuário existente do Admin possa gerenciar redirecionamentos no Store Framework CMS, é necessário atribuir ao usuário um perfil de acesso que inclua o recurso **CMS Settings**. Verifique as instruções para editar os perfis de acesso de um usuário no artigo [Gerenciando Usuários](/pt/docs/tutorials/gerenciar-usuarios-administrativos#editar-usuarios).

Caso você queira utilizar um perfil de acesso personalizado, você pode criar um novo perfil de acesso ou editar um já existente para incluir o recurso **CMS Settings**. Verifique as instruções para criar e editar perfis de acesso no artigo [Perfis de Acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

Mais informações sobre redirecionamentos podem ser vistas no artigo [Gerenciando redirecionamentos de URL](/pt/docs/tutorials/gerenciando-redirecionamentos-de-url).
