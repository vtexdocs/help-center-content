---
title: 'Novos appKeys serão criados sem um perfil de acesso predefinido'
id: tOWdNXkLWdW9hRdGhJw0R
status: PUBLISHED
createdAt: 2021-01-06T19:24:51.000Z
updatedAt: 2021-12-10T02:40:06.394Z
publishedAt: 2021-12-10T02:40:06.394Z
contentType: updates
productTeam: Identity
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2021-01-06-new-appkeys-will-not-have-a-predefined-role
locale: pt
legacySlug: novos-appkeys-serao-criados-sem-um-perfil-de-acesso-predefinido
announcementImageID: 'undefined'
announcementSynopsisPT: 'AppKeys não receberão mais o perfil de acesso Owner por padrão'
---

A plataforma VTEX possui uma série de APIs REST, normalmente utilizadas para integrar soluções de terceiros, cujo acesso é dado através de credenciais específicas.

AppKeys e appTokens são os elementos que compõem as credenciais de acesso às APIs REST. Um par de appKey e appToken pode ser considerado como o ID (utilizado para identificar quem está acessando a plataforma) e a senha do usuário. 

Este par só pode ser criado pelo usuário Titular da conta, por questões de segurança.

## O que mudou?

Antes, quando as credenciais eram criadas, o perfil de acesso Owner (Admin Super) era atribuído automaticamente. A partir de agora, os novos appKeys criados não terão nenhum perfil de acesso atribuído a eles, sendo necessário realizar a atribuição da mesma forma que ela é feita atualmente para usuários (veja a seção Editando usuários do artigo [Gerenciar usuários](/pt/docs/tutorials/gerenciar-usuarios-administrativos#editando-usuarios) para instruções).

Informações adicionais sobre appKeys e appTokens podem ser encontradas no artigo [Authentication](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication).

## Por que fizemos esta mudança?

Esta mudança foi implementada por questões de segurança visto que uma aplicação que possui mais permissões do que deveria tem o risco de causar danos não previstos à loja, seja por um erro, por uso mal-intencionado ou qualquer outro motivo.

Uma aplicação que utiliza um appKey deveria receber acesso apenas às funcionalidades para qual ela foi desenvolvida. Porém, o perfil de acesso Owner, sendo o mais elevado de todos, permite praticamente qualquer ação dentro da loja. 

Com a mudança, o perfil de acesso deverá ser determinado manualmente conforme a necessidade e as permissões são delimitadas de acordo com o perfil selecionado.

Mais informações podem ser encontradas no artigo [Perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).
