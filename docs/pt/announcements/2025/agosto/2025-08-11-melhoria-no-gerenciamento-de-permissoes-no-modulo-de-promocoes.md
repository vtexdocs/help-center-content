---
title: 'Melhoria no gerenciamento de permissões no módulo de promoções'
id: 4SS5gsIGGYiABjWdjL0uPO
status: PUBLISHED
createdAt: 2025-08-11T11:55:15.551Z
updatedAt: 2025-08-11T15:54:22.969Z
publishedAt: 2025-08-11T15:54:22.969Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-08-11-improved-permission-management-in-the-promotions-module
locale: pt
legacySlug: melhoria-no-gerenciamento-de-permissoes-no-modulo-de-promocoes
announcementImageID: 'undefined'
announcementSynopsisPT: 'Mudança nas permissões do Admin para editar promoções com métodos de envio e pagamento.'
---

Para reforçar a segurança da plataforma e garantir uma gestão adequada de acessos, fizemos mudanças nas permissões necessárias para editar determinadas condições de promoções. A partir de agora, determinadas ações no formulário de promoções exigem [recursos adicionais no License Manager](/pt/docs/tutorials/recursos-do-license-manager).

## O que mudou?

Usuários agora precisam de permissões específicas para **adicionar ou editar condições de promoções** relacionadas a **métodos de envio** e **meios de pagamento**. Veja abaixo os requisitos:

- **Métodos de Envio**: exige um [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) com o [recurso](/pt/docs/tutorials/recursos-do-license-manager) **LogisticsInternal,** referente ao produto **Logistics.**
- **Meios de Pagamento**: exige um [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) com o [recurso](/pt/docs/tutorials/recursos-do-license-manager) **View Payment Data,** referente ao produto **PCI Gateway.**

> ⚠️ Estes recursos são novos requisitos, em adição aos recursos necessários para editar condições de promoções anteriormente.

Usuários sem essas permissões ainda poderão visualizar as configurações já aplicadas por outros usuários, mas não conseguirão modificá-las.

## O que precisa ser feito?

Recomendamos revisar os perfis de acesso da sua loja e garantir que os usuários responsáveis pela configuração de promoções tenham os recursos mencionados acima além dos recursos exigidos previamente para estas operações.

A ausência dessas permissões impedirá que o usuário altere as condições de métodos de envio e de pagamento das promoções no Admin VTEX.

Para mais detalhes sobre gerenciamento de permissões, acesse:

- [Recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager)
- [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso)

