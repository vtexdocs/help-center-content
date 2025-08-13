---
title: 'Chaves de API (Beta)'
id: 4bFEmcHXgpNksoePchZyy6
status: PUBLISHED
createdAt: 2024-09-30T18:35:47.348Z
updatedAt: 2025-02-05T19:46:51.454Z
publishedAt: 2025-02-05T19:46:51.454Z
firstPublishedAt: 2024-10-08T18:26:20.965Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys
legacySlug: chaves-de-api-beta
locale: pt
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidade está na fase Beta fechada, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com <a href="https://support.vtex.com/hc/pt-br">nosso Suporte</a>.</p>
</div>

Para cada integração via API utilizada para conectar sua conta VTEX com sistemas externos, será necessária a criação de uma **chave de API**, também conhecida em inglês como *API key*. Para cada chave, existe um **token de API** (ou *API token*), que funciona como uma senha para uso daquela credencial.

Estas credenciais de [autenticação](https://developers.vtex.com/docs/guides/authentication) são usadas para garantir o acesso seguro aos dados que você deseja compartilhar com as integrações, sem expor sua conta a aplicações ou usuários não autorizados.

Para que uma chave de API faça solicitações de API à sua conta com sucesso, ela precisa estar ativa e ter [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) especificando os recursos da conta que tem permissão para acessar.

A página **Chaves de API** no Admin VTEX permite gerenciar as chaves de API com acesso à sua loja. Confira nos guias a seguir mais detalhes sobre as informações e ações disponíveis a partir desta página:

* [Configurações](https://help.vtex.com/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ): permite definir o prazo de duração padrão de chaves de API geradas na sua conta.

  ![apikeys-settings-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/api-keys-beta/chaves-de-api_1.png)

* [Chaves geradas](https://help.vtex.com/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc): permite gerenciar chaves de API criadas e administradas por sua conta VTEX.

  ![apikeys-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/api-keys-beta/chaves-de-api_2.png)

* [Chaves terceiras](https://help.vtex.com/pt/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q): permite gerenciar chaves de API criadas e administradas por outras contas VTEX, com acesso a recursos específicos na sua conta.

   ![apikeys-external-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/api-keys-beta/chaves-de-api_3.png)

## Requisitos para gerenciar chaves de API

Para gerenciar chaves de API, é obrigatório ter o perfil de acesso  [User Administrator - RESTRICTED](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) ou um perfil [customizado](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) com os recursos a seguir:

* *View API Keys* (visualizar, filtrar, buscar e ordenar chaves de API geradas e terceiras)  
* *Edit API Keys* (criar, excluir, mudar o status e adicionar ou remover permissões de chaves de API)  
* *Renew API Token* (visualizar e renovar tokens de chaves geradas)  
* *Edit API Keys settings* (editar configuração da duração de tokens de chaves geradas)

Saiba mais sobre cada recurso em [Recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).  
