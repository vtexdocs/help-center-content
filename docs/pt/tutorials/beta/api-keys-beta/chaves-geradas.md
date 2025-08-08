---
title: 'Chaves geradas (Beta)'
id: 7fnU4iZdvZKbxCaT3Ymdjc
status: PUBLISHED
createdAt: 2024-09-30T18:39:21.339Z
updatedAt: 2025-02-05T19:20:40.887Z
publishedAt: 2025-02-05T19:20:40.887Z
firstPublishedAt: 2024-10-08T19:18:05.329Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: generated-keys
legacySlug: chaves-geradas-beta
locale: pt
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidade está na fase Beta fechada, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com <a href="https://support.vtex.com/hc/pt-br">nosso Suporte</a>.</p>
</div>

As chaves de API internas são credenciais internas, geradas e administradas por sua conta VTEX. Isso significa que você deve ter acesso a todos os pares de chaves e tokens de API — o equivalente a nomes de usuário e senhas para integrações de API.

A aba **Geradas** apresenta a listagem de chaves de API criadas pela sua conta.

![apikeys-pt](//images.ctfassets.net/alneenqid6w5/i11jP2Y0BPyf9wp8A1joi/d331b579a3fcec095ee4048eae3498f5/apikeys-pt.png)

A página apresenta as informações a seguir em uma tabela: 

| Coluna | Descrição |
| ---- | ---- |
| **Chave/Nome** | Chave de API, seguida pelo nome definido durante a criação da chave. |
| **Duração do token** | Prazo de duração do token de API. |
| **Perfil de acesso** | Perfis de acesso associados à chave de API. |
| **Data de criação** | Data de criação da chave de API. |
| **Status** | Status da chave de API, que pode ser **Ativo** ou **Inativo**. |

Esta página permite que você realize as seguintes ações:

* [Gerar chave](#gerar-chave)  
* [Editar chave gerada](#editar-chave-gerada)  
* [Inativar ou ativar chave gerada](#inativar-ou-ativar-chave-gerada)  
* [Renovar token](#renovar-token)  
* [Excluir chave](#excluir-chave)

## Gerar chave

Siga as instruções abaixo para criar uma nova chave de API:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta \> Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Clique em `+ Gerar chave`.  
4. Preencha o campo **Identificação da chave** com o nome para identificar a chave de API. Este campo é obrigatório.  
5. Selecione os [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) que serão associados à chave. Por padrão, nenhum perfil de acesso é pré-selecionado.

   <div class="alert alert-error">
     <p>Marque apenas os perfis de acesso necessários para a integração que utilizará a chave de API. O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas por vazamento de credenciais de login.</p>
   </div>

6. Clique em `Gerar`.  
7. Clique em <i class="far fa-clone"></i> `Copiar` para copiar o token da API para a área de transferência. Esse segredo será exibido apenas uma vez. Salve-o em um local seguro. Nesta etapa, a chave já está ativa e disponível para uso.  
8. Clique em <i class="fas fa-times"></i> `Encerrar`.

## Editar chave gerada

Siga o passo a passo abaixo para realizar alterações em uma chave de API:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="fas fa-pencil-alt"></i> `Editar`.  
4. Aplique as modificações desejadas, entre as opções abaixo:  
   * Modificar a seleção de perfis de acesso associados à chave de API.  
   * Desmarcar ou marcar a opção **Ativa** para [inativar ou ativar a chave gerada](#inativar-ou-ativar-chave-gerada).  
5. Clique em `Salvar`.

## Inativar ou ativar chave gerada

Se uma chave de API que tenha acesso à sua conta for comprometida, você deve inativá-la imediatamente para revogar o acesso à sua conta. Se necessário, você pode gerar uma nova chave para substituir a anterior.

Caso cometa algum erro, é possível reativar a chave de API para restabelecer a integração impactada.

Siga o passo a passo abaixo para inativar ou ativar uma chave de API:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e prossiga para uma das ações a seguir:  
   * **Inativar:** se a chave estiver **ativa**, clique em <i class="far fa-pause-circle"></i> `Inativar` para desabilitá-la. Essa ação vai interromper integrações que utilizem a chave, então utilize-a com cautela. É necessário clicar em `Inativar` mais uma vez para confirmar a ação.  
   * **Ativar:** se a chave estiver **inativa**, clique em <i class="far fa-play-circle"></i> `Ativar` para disponibilizá-la para uso.

<div class="alert alert-error">
  <p>Apenas reative a chave de API se tiver certeza de que ela não foi comprometida. Quando a chave está ativa, qualquer pessoa com o token de API associado pode ter acesso à sua conta.</p>
</div>

## Renovar token

O token correspondente a uma chave de API é válido apenas durante o período definido ao [configurar a duração de chaves de API](https://help.vtex.com/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ). É necessário renovar o token de API antes da duração expirar para manter o acesso contínuo aos recursos e garantir a segurança.

Para isso, siga as instruções descritas em [Renovar token de API](https://help.vtex.com/pt/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3).

## Excluir chave

Chaves de API que não serão mais utilizadas podem ser excluídas. Ao excluir essas chaves, é possível manter a listagem organizada e facilitar o gerenciamento das chaves em uso.  

<div class="alert alert-warning">
  <p>Certifique-se de que a chave de API não está mais em uso por nenhuma integração antes de excluí-la. Este procedimento não pode ser desfeito.</p>
</div>

Para excluir uma chave de API de forma definitiva, siga os passos abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="far fa-trash-alt"></i> `Excluir chave`.  
4. Marque a opção *Entendo que essa ação não pode ser desfeita*.  
5. Para confirmar, clique em `Excluir`.

## Saiba mais

* [Chaves de API (Beta)](https://help.vtex.com/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)  
* [Configurações de chaves de API (Beta)](https://help.vtex.com/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Chaves terceiras (Beta)](https://help.vtex.com/pt/tutorial/chaves-terceiras--1isU0HfKkeg0atlxRha14Q)
