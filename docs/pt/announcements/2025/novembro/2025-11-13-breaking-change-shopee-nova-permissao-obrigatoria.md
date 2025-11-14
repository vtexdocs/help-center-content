---
title: 'Breaking change Shopee: Nova permissão de acesso obrigatória'
status: PUBLISHED
createdAt: 2025-11-13T16:08:37.645Z
updatedAt: 2025-11-13T16:08:37.645Z
publishedAt: 2025-11-13T16:08:37.645Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: 2025-11-13-breaking-change-shopee-new-mandatory-access-permission
locale: pt
legacySlug: 
announcementImageID: 
announcementSynopsisPT: 'Nova permissão obrigatória para acessar o app da Shopee na versão 3.x do conector.'
---

Para melhorar a segurança de acessos e fortalecer os controles de permissão, implementamos uma atualização no conector da Shopee. A partir da versão 3.x do conector, foi implementada uma nova permissão de acesso obrigatória.

Caso o acesso **Access the Marketplace Network** não esteja ativo, sempre que o usuário acessar a integração da Shopee será apresentada uma mensagem de erro conforme imagem abaixo:

![breaking-change-shopee-nova-permissao-de-acesso-obrigatoria-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/novembro/025-11-13-breaking-change-shopee-new-mandatory-access-permission_1.png)

## O que precisa ser feito?

A atualiação está disponível para todas as contas que utilizam a integração com a Shopee desde xx de novembro de 2025, e é necessário que a permissão de acesso seja ativada.

Para adicionar o acesso a um usuário, siga os passos abaixo:

1. No Admin VTEX, clique no avatar do seu nome e acesse **Configurações de conta > Perfis de acesso**.
2. Selecione o perfil **Produto**.
3. Na seção **UI resources**, localize e marque a opção **Access the Marketplace Network**.
4. Clique em **Salvar** para aplicar as alterações.

![breaking-change-shopee-nova-permissao-de-acesso-obrigatoria-2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/novembro/025-11-13-breaking-change-shopee-new-mandatory-access-permission_2.png)