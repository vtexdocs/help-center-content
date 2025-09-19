---
title: 'Chaves de API'
id: 4bFEmcHXgpNksoePchZyy6
status: PUBLISHED
createdAt: 2024-09-30T18:35:47.348Z
updatedAt: 2025-08-13T14:18:57.598Z
publishedAt: 2025-08-13T14:18:57.598Z
firstPublishedAt: 2024-10-08T18:26:20.965Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys
legacySlug: chaves-de-api-beta
locale: pt
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

Para cada integração via API utilizada para conectar sua conta VTEX com sistemas externos, será necessária a criação de uma **chave de API**, também conhecida em inglês como *API key*. Para cada chave, existe um **token de API** (ou *API token*), que funciona como uma senha para uso daquela credencial.

Estas credenciais de [autenticação](https://developers.vtex.com/docs/guides/authentication) são usadas para garantir o acesso seguro aos dados que você deseja compartilhar com as integrações, sem expor sua conta a aplicações ou usuários não autorizados.

Para que uma chave de API faça solicitações de API à sua conta com sucesso, ela precisa estar ativa e ter [perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) especificando os recursos da conta que tem permissão para acessar.

## Tipos de chaves de API

Existem dois tipos de chaves de API: [internas](#chaves-internas) ou [externas](#chaves-externas). Essa definição depende de qual conta cria, gerencia e utiliza a credencial.

### Chaves internas

As [chaves de API internas](/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc) são credenciais geradas e administradas por sua conta VTEX. Isso significa que você deve ter acesso a todos os pares de chaves e tokens de API — o equivalente a nomes de usuário e senhas para integrações de API.

### Chaves externas

As [chaves de API externas](/pt/tutorial/chaves-externas--1isU0HfKkeg0atlxRha14Q) são credenciais geradas e administradas por outras contas VTEX. Ao adicionar [perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) às chaves de API — o equivalente a nomes de usuário — fornecidas por terceiros, você pode permitir que eles acessem recursos específicos na sua conta.

## Gerenciar chaves de API

A página **Chaves de API** no Admin VTEX permite gerenciar as chaves de API com acesso à sua loja. Confira nos guias a seguir mais detalhes sobre as informações e ações disponíveis a partir desta página:

* [Exportar chaves de API](/pt/tutorial/exportar-chaves-de-api--1p4eYJWD26gOdicUdiiGC5): fazer download de uma planilha com informações sobre as chaves de API geradas e externas.

* [Configurações](/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ): definir o período para recomendação de renovação dos tokens. Quando um token atingir o limite estabelecido, a interface alertará sobre a necessidade de renovação. Essa configuração se aplica a todos os tokens de chave.

   > ℹ️ O token não expira após o prazo definido. A configuração determina apenas quando a interface vai recomendar a renovação.

   ![token-renewal-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/chaves-de-api/chaves-de-api_1.png)

* [Chaves geradas](/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc): permite gerenciar chaves de API criadas e administradas por sua conta VTEX.

   ![generated-keys-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/chaves-de-api/chaves-de-api_2.png)

* [Chaves externas](/pt/tutorial/chaves-externas--1isU0HfKkeg0atlxRha14Q): permite gerenciar chaves de API criadas e administradas por outras contas VTEX, com acesso a recursos específicos na sua conta.

   ![apikeys-external-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/chaves-de-api/chaves-de-api_3.png)

## Requisitos para gerenciar chaves de API

Para gerenciar chaves de API, é obrigatório ter o perfil de acesso  [User Administrator - RESTRICTED](/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) ou um perfil [customizado](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) com os recursos a seguir:

* *View API Keys* (visualizar, filtrar, buscar, ordenar e exportar chaves de API geradas e externas)  
* *Edit API Keys* (criar, excluir, mudar o status e adicionar ou remover permissões de chaves de API)  
* *Renew API Token* (visualizar e renovar tokens de chaves geradas)  
* *Edit API Keys settings* (editar configuração da duração de tokens de chaves geradas)

Saiba mais sobre cada recurso em [Recursos do License Manager](/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).

## Saiba mais

* [Configurar alerta para renovar tokens de API](/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Chaves externas](/pt/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q)  
* [Chaves geradas](/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Renovar token de API](/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3)
