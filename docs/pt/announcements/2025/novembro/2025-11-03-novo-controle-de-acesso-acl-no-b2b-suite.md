---
title: 'Novo controle de acesso (ACL) no B2B Suite'
id: 2X2FQV6w21L2EkmGEgGGh9
status: PUBLISHED
createdAt: 2025-11-03T17:30:37.645Z
updatedAt: 2025-11-04T12:34:24.479Z
publishedAt: 2025-11-04T12:34:24.479Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-11-03-new-access-control-acl-in-b2b-suite
locale: pt
legacySlug: novo-controle-de-acesso-acl-no-b2b-suite
announcementImageID: 'undefined'
announcementSynopsisPT: 'Implementação de controle de acesso (ACL) no B2B Suite, com novas permissões para gerenciamento de usuários.'
---

A partir de 04/11/2025, o **B2B Suite** passa a contar com um novo controle de acesso baseado em permissões (ACL Access Control List). Essa atualização tem como objetivo reforçar a segurança e a gestão de usuários e organizações compradoras, garantindo que apenas [perfis](/pt/docs/tutorials/perfis-de-acesso) autorizados possam visualizar ou editar informações da loja.

Com o novo modelo, o acesso às **organizações compradoras**, **centros de custo** e **usuários** no Admin VTEX passa a depender de permissões específicas. 

## O que mudou?
Antes, qualquer usuário com acesso ao Admin VTEX podia visualizar e editar dados de organizações compradoras.

Agora, com a nova **Lista de Controle de Acesso (ACL)**, apenas usuários com as permissões do [Licence Manager](/pt/docs/tutorials/recursos-do-license-manager) apropriadas podem executar essas ações.

As permissões disponíveis são:

- **buyer_organization_view**: permite visualizar organizações, centros de custo e usuários.
- **buyer_organization_edit**: permite criar, editar e excluir organizações, centros de custo e usuários.

Ambas as permissões podem ser configuradas em **Buyer Organizations > Management**, ao editar **User Roles** no Admin VTEX.

## O que precisa ser feito?
Para habilitar o novo controle de acesso, atualize os **apps do B2B Suite** para as versões compatíveis.  

Para mais detalhes, consulte a documentação [Habilitar controle de acesso (ACL) no B2B Suite](https://developers.vtex.com/docs/guides/enabling-an-access-control-list-acl-in-b2b-suite).

