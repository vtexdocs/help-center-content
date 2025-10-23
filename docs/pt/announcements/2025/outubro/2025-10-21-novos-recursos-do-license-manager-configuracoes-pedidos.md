---
title: 'Novas permissões para acesso a configurações de pedidos'
id: UyJ0JRWiP9biWoAMR0ODF
status: PUBLISHED
createdAt: 2025-10-21T14:17:33.120Z
updatedAt: 2025-10-22T13:00:10.895Z
publishedAt: 2025-10-22T13:00:10.895Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2025-10-21-new-license-manager-resources-order-configurations
locale: pt
legacySlug: novos-recursos-do-license-manager-configuracoes-pedidos
announcementImageID: 'undefined'
announcementSynopsisPT: 'Novas permissões exigidos para acessar configurações de pedidos no Admin VTEX'
---

Para garantir uma autenticação mais segura e controlada, atualizamos a forma como o [License Manager](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) valida o acesso a configurações de pedidos da loja. Agora, os novos recursos passam a ser necessários para que usuários possam acessar determinadas páginas do Admin VTEX. 

## O que mudou?

Atualizamos quais [recursos do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) serão utilizados para a validação de autenticação de um usuário para acessar algumas páginas do Admin VTEX. Agora é necessário ter os recursos `Save Order Configuration` e `Save OrderForm Configuration` configurados para o usuário ter acesso às páginas de [configurações gerais dos pedidos](/pt/tutorial/configuracoes-gerais--tutorials_194) e de [gerenciamento de afiliados](/pt/tutorial/como-configurar-afiliado--tutorials_187).

## O que precisa ser feito?

Para garantir que seus usuários consigam acessar às páginas citadas acima, é necessário [criar um perfil de acesso personalizado](/pt/tutorial/criar-perfil-de-acesso--qGtNQpKSSAduX94l2WZBW#criar-perfil-de-acesso-personalizado) ou [editar o perfil existente](/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/6Ymo5bNMyEYBGsTmbTC3H9#editar-perfil-de-acesso) adicionando os recursos `Save Order Configuration` e `Save OrderForm Configuration` ao perfil.

Uma vez que os recursos foram adicionados, o usuário conseguirá acessar as páginas do Admin VTEX.

