---
title: 'Permissões granulares para Seller Register e Marketplace Network'
status: PUBLISHED
createdAt: 2025-12-23T12:00:00.000Z
updatedAt: 2025-12-23T12:00:00.000Z
publishedAt: 2025-12-23T12:00:00.000Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: granular-permissions-seller-marketplace-network
locale: pt
legacySlug: 
announcementImageID: 
announcementSynopsisPT: 'Novo modelo de permissões granulares para Seller Register e Marketplace Network exige atualização de perfis de acesso.'
---

Implementamos um novo modelo de validação de permissões explícitas para os serviços de Seller e Marketplace Network, oferecendo maior controle e segurança sobre quem pode visualizar e editar dados de sellers na sua operação. Esta mudança está disponível para todos os usuários da plataforma VTEX.

## O que mudou?

Antes, qualquer usuário autenticado com acesso básico à conta possuía permissão implícita para operar os módulos de Seller e Marketplace Network. Agora, o sistema exige que o usuário ou chave de aplicação possua recursos de acesso específicos associados ao seu perfil:

- **Seller Register:** Acesso segregado em "View Seller" (visualizar) e "Save Seller" (criar/editar).
- **Marketplace Network:** Acesso através da permissão "Access the Marketplace Network".

## Por que fizemos essa mudança?

Para elevar o nível de governança e segurança da plataforma, alinhando os módulos ao princípio de segurança do menor privilégio. Confira os principais benefícios:

- **Controle granular de acesso:** Defina exatamente quem pode visualizar e quem pode editar dados de sellers.
- **Maior segurança operacional:** Evite alterações acidentais ou não autorizadas em configurações críticas.
- **Governança aprimorada:** Configure perfis de acesso restritos de acordo com as responsabilidades de cada usuário.

## O que precisa ser feito?

Para garantir que sua operação não seja impactada, atualize os perfis de acesso até **01 de março de 2026** seguindo os passos abaixo:

1. No Admin VTEX, acesse **Configurações da conta > Perfis de acesso**.
2. Identifique quais perfis necessitam interagir com dados de sellers ou acessar o Marketplace Network.
3. Edite o perfil desejado e adicione os recursos necessários:
   - Para Seller: Selecione "View Seller" ou "Save Seller" (em "Seller Register").
   - Para Marketplace Network: Selecione "Access the Marketplace Network" (em "Channels").
4. Salve as alterações e valide se os usuários conseguem acessar os módulos.

>⚠️ Sem a atualização dos perfis, usuários verão telas vazias ou mensagens de erro ao tentar acessar os módulos de Seller e Marketplace Network após a data de corte.

Para mais informações sobre gerenciamento de perfis de acesso, consulte a [documentação de Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).
