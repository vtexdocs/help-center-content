---
title: 'Não consigo visualizar uma página no Admin'
id: 3U8TJMlAqHIM5Qs8rLwkwQ
status: PUBLISHED
createdAt: 2024-11-28T14:27:44.578Z
updatedAt: 2025-08-14T15:09:37.454Z
publishedAt: 2025-08-14T15:09:37.454Z
firstPublishedAt: 2024-11-28T14:46:25.398Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: i-cant-view-a-page-in-the-admin
legacySlug: nao-consigo-visualizar-uma-pagina-no-admin
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Perfis de acesso
  - Recursos do License Manager
  - License Manager
  - Admin
---

Ao utilizar o Admin, alguns usuários podem ter problemas como o *Erro 403 - Desculpe, você não tem acesso a essa página* ou o carregamento contínuo de uma página.

Esses problemas geralmente ocorrem devido a conflitos entre [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) dos usuários administrativos ou configurações específicas do navegador.  

## Solução

Para resolver esses problemas, há algumas soluções que você pode considerar:

* [Revise os perfis de acesso:](#revise-os-perfis-de-acesso) confira se o usuário tem os perfis de acesso necessários e se existe algum conflito de perfis.
* [Revise as configurações do navegador](#revise-as-configuracoes-do-navegador): verifique as extensões utilizadas e limpe o cache do navegador.

### Revise os perfis de acesso

Siga os passos abaixo para solucionar o problema:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta > Usuários**.
2. Clique no usuário desejado.
3. Verifique os perfis de acesso do usuário:

   * Se o perfil de acesso não for compatível com a página que o usuário está tentando acessar, o comportamento esperado é o *Erro 403*.
   * Se houver uma combinação do perfil **Call center operator** ou **OMS- Full access** com o perfil **Owner (Admin Super)**, é possível que ocorra um conflito no acesso a algumas páginas.
4. Remova perfis de acesso conflitantes e conceda somente os perfis necessários para as operações que o usuário realiza na loja, seguindo as instruções para [Gerenciar usuários](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512#editar-usuarios).

> ⚠️ Somente o **Owner (Admin Super)** da conta ou um usuário com o perfil **User Administrator - RESTRICTED** possuem as permissões necessárias para realizar esta etapa.

### Revise as configurações do navegador

Caso o problema não seja o perfil de acesso do seu usuário, outros testes são recomendados:

* **Revise as extensões:** desative todas as extensões do navegador e teste o acesso usando uma janela de navegação anônima.
* **Limpe o cache:** no navegador que você utiliza para acessar o Admin, acesse as configurações e limpe os dados de navegação, incluindo o cache.
