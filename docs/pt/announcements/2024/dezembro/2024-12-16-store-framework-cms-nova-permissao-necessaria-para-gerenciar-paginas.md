---
title: 'Store Framework CMS: Nova permissão necessária para gerenciar páginas'
id: cmXeUFIT80GmIW6mRuFRu
status: PUBLISHED
createdAt: 2024-12-16T22:39:00.938Z
updatedAt: 2024-12-17T14:49:26.018Z
publishedAt: 2024-12-17T14:49:26.018Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-12-16-store-framework-cms-new-permission-required-to-manage-pages
locale: pt
legacySlug: store-framework-cms-nova-permissao-necessaria-para-gerenciar-paginas
announcementImageID: 'undefined'
announcementSynopsisPT: 'Gerenciar páginas no Store Framework CMS exige acesso ao recurso "CMS Settings".'
---

[Páginas](/pt/tutorial/paginas-visao-geral--5iBUUJbK5NqG6OxlDrGNzc) é uma funcionalidade do Store Framework CMS que gerencia todas as rotas de URL e os modelos de página correspondentes do site da sua loja, como a página inicial, de produto e de login. Por motivos de segurança, estamos exigindo que usuários do Admin possuam uma permissão específica para gerenciar as rotas e páginas de template dessa funcionalidade.

> ⚠️ Conforme [anunciado anteriormente](/pt/announcements/store-framework-cms-nova-permissao-para-gerenciar-redirecionamentos--1GcT48ML2w6TZQxQyGbD6W), o recurso `CMS Settings` já era necessário para gerenciar redirecionamentos no Store Framework CMS.

## O que mudou?

Para que usuários do Admin possam criar, editar e remover rotas de URL e os modelos de página correspondentes, agora é necessário possuir um perfil de acesso com o [recurso do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) **CMS Settings**.

## Por que fizemos essa mudança?

Adicionamos esse requisito de permissão por motivos de segurança. Dessa forma, apenas usuários do Admin que foram explicitamente autorizados terão acesso à funcionalidade **Páginas**. Isso impede que usuários não autorizados possam criar, editar e apagar rotas de URL e os modelos de página correspondentes.

## O que precisa ser feito?

Para que um usuário existente do Admin possa gerenciar rotas de URL e páginas no Store Framework CMS, é necessário atribuir ao usuário um perfil de acesso que inclua o recurso **CMS Settings**. Verifique as instruções para editar os perfis de acesso de um usuário no artigo [Gerenciando Usuários](/pt/tutorial/gerenciando-usuarios--tutorials_512#editar-usuarios).

Caso você queira utilizar um perfil de acesso personalizado, você pode criar um novo perfil de acesso ou editar um já existente para incluir o recurso **CMS Settings**. Verifique as instruções para criar e editar perfis de acesso no artigo [Perfis de Acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

