---
title: 'Headless CMS: nova solicitação de autorização'
id: 7G056zzZmGFBztkRqhpUgj
status: PUBLISHED
createdAt: 2024-02-02T12:34:37.766Z
updatedAt: 2025-07-24T19:23:33.225Z
publishedAt: 2025-07-24T19:23:33.225Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-02-02-headless-cms-new-authorization-requirement
locale: pt
legacySlug: headless-cms-nova-solicitacao-de-autorizacao
announcementImageID: 'undefined'
announcementSynopsisPT: 'Usuários agora precisam do recurso CMS GraphQL API para gerenciar conteúdo. Atualize os perfis de acesso de acordo.'
---

A partir de 15 de Fevereiro, todos os [usuários](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) e [chaves de aplicação](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) que precisarem acessar o Headless CMS deverão ter os [recursos](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `See CMS menu on the top-bar` e `Settings` do License Manager adicionados aos seus [perfis de acesso](/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). Para o gerenciamento de conteúdo no Headless CMS, também é necessário ter o [recurso](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `CMS GraphQL API`. Esse requisito se aplica à API do Headless CMS e ao Admin VTEX.

## O que mudou?
Antes, o gerenciamento de conteúdo da loja no Headless CMS podia ser feito por usuários e chaves de aplicação
sem ter um recurso específico do License Manager associado ao seu perfil de acesso.

Agora, qualquer solicitação via API do Headless CMS ou Admin VTEX autenticará o usuário e verificará se ele tem os recursos necessários associados ao seu perfil de acesso.
Os recursos `See CMS menu on the top-bar` e `Settings` concedem acesso ao Headless CMS. Para o gerenciamento de conteúdo, os usuários também precisam do recurso `CMS GraphQL API`. Sem este recurso, não será possível gerenciar o conteúdo no Headless CMS.

## Por que fizemos esta mudança?
Essa alteração visa aumentar a segurança e simplificar o acesso do usuário ao Headless CMS, proporcionando aos usuários um ambiente mais controlado e seguro para gerenciar o conteúdo da loja.

## O que precisa ser feito?
Certifique-se de que os usuários do Headless CMS estejam associados aos recursos `CMS GraphQL API`, `See CMS menu on the top-bar` e `Settings` em seus perfis de acesso, seja [criando um novo perfil de acesso](#criar-um-novo-perfil-de-acesso) ou [editando um existente](#editar-um-perfil-de-acesso).

<div style="background-color:#FFF3CD; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 35px">
  Para gerenciar usuários e perfis de acesso, é necessário ter o recurso `Save access profile` do produto **License Manager** associado ao perfil de acesso do usuário. Por exemplo, o [User Administrator - RESTRICTED](/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) é um perfil de acesso predefinido que tem o recurso `Save access profile` associado a ele.

</div>

### Criar um novo perfil de acesso

Se você ainda não criou um perfil de acesso específico para os usuários do Headless CMS e deseja criar um, acesse o guia [Criando um perfil de acesso](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete#creating-a-role). Não deixe de associar o perfil de acesso aos recursos `CMS GraphQL API`, `See CMS menu on the top-bar` e `Settings` na seção **Produtos e recursos**.

### Editar um perfil de acesso

Para editar um perfil de acesso já existente para usuários do Headless CMS, siga os passos abaixo:

1. Acesse o Admin VTEX.
2. Clique no avatar do seu perfil na barra superior do VTEX Admin, representado pela inicial do seu email, e clique em **Configurações da conta > Perfis de acesso**.
3. Clique no **nome do perfil** atribuído aos usuários do Headless CMS.

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  A opção de criar perfis de acesso personalizados pode variar de acordo com a configuração da loja, e cada loja pode definir um perfil específico para os usuários do Headless CMS.
</div>

4. Na página **Editar perfil de acesso**, vá até a seção **Produtos e recursos**.
5. Procure pelo produto **CMS** e clique nele.
6. Selecione os recursos `CMS GraphQL API`, `See CMS menu on the top-bar` e `Settings`.
7. Clique em `Salvar`.

