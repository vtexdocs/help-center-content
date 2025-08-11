---
title: 'Melhorias na gestão de chaves de aplicação'
id: 6DsPdiQ65RKNUNl7p93zHJ
status: PUBLISHED
createdAt: 2021-08-19T14:45:15.177Z
updatedAt: 2021-12-10T02:40:04.550Z
publishedAt: 2021-12-10T02:40:04.550Z
contentType: updates
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: 2021-08-19-improvements-in-application-key-management
locale: pt
legacySlug: melhorias-na-gestao-de-chaves-de-aplicacao
announcementImageID: 'undefined'
announcementSynopsisPT: 'Gerencie suas credenciais de autenticação em um único lugar e delegue essa responsabilidade conforme necessário.'
---

Muitos de nossos clientes aproveitam as integrações de API para conectar sua conta VTEX a sistemas externos. Credenciais de [autenticação](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication) são usadas para fornecer acesso seguro aos dados que essas integrações exigem, sem expor sua conta a usuários ou aplicações não autorizadas. 

Chaves de aplicação (também conhecidas como _app keys_) são o tipo mais comum de credenciais de autenticação, mas seu gerenciamento estava espalhado por várias telas do Admin da VTEX e restrito a um único usuário. Agora você pode gerenciar suas credenciais de autenticação em um único lugar e delegar essa responsabilidade conforme necessário.

## O que mudou?

### Nova interface de usuário para gestão de Chaves de Aplicativo

Antes, o gerenciamento de [Chaves de Aplicação](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) exigia a navegação por várias telas. Agora você pode gerar, adicionar/remover, ativar/desativar, exportar e editar permissões para seus pares appKey e appToken em um único lugar.

### Permissões para criar Chaves de Aplicativo agora são baseadas em recursos

Antes, apenas o [usuário Titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) podia criar e gerenciar Chaves de Aplicativo. Agora, qualquer usuário com o recurso `License Manager / Services access control / Save user` configurado nos seus [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) pode criar essas credenciais e compartilhar as mesmas permissões com outros usuários, permitindo que o usuário Titular delegue essa responsabilidade conforme necessário.

## Por que fizemos essas mudanças?

Ao simplificar o gerenciamento de credenciais de autenticação, ajudamos nossos clientes a compreender melhor suas integrações ativas e os recursos de conta aos quais elas têm acesso, permitindo que melhorem a segurança de suas contas.

## O que precisa ser feito?

Confira o artigo [Chaves de Aplicação](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) para mais informações.
