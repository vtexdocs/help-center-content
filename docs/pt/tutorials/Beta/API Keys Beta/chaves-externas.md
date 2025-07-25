---
title: 'Chaves externas (Beta)'
id: 1isU0HfKkeg0atlxRha14Q
status: PUBLISHED
createdAt: 2024-09-30T18:40:42.116Z
updatedAt: 2025-06-04T21:31:47.252Z
publishedAt: 2025-06-04T21:31:47.252Z
firstPublishedAt: 2024-10-08T20:11:36.474Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: external-keys
locale: pt
legacySlug: chaves-terceiras
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>Esta funcionalidade está na fase Beta fechada, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com <a href="https://support.vtex.com/hc/pt-br">nosso Suporte</a>.</p>
</div>

As chaves de API externas são credenciais geradas e administradas por outras contas VTEX. Ao adicionar [perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) às chaves de API — o equivalente a nomes de usuário — fornecidas por terceiros, você pode permitir que eles acessem recursos específicos na sua conta.

A aba **Externas** apresenta a listagem de chaves de API de terceiros adicionadas à sua conta.

![apikeys-external-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Beta/API%20Keys%20Beta/chaves-externas_1.png)

A página apresenta as seguintes informações em uma tabela:

| Coluna | Descrição |
| :---- | :---- |
| **Chave/Proprietário** | Chave de API, seguida pelo nome da conta terceira proprietária da chave. |
| **Perfil de acesso** | Perfis de acesso associados à chave de API de terceiros. |
| **Data de adição** | Data de adição da chave de API de terceiros. |
| **Status** | Status da chave de API de terceiros, que pode ser **Ativo** ou **Inativo**. |

Esta página permite que você realize as seguintes ações: 

* [Adicionar chave externa](#adicionar-chave-externa)  
* [Editar chave externa](#editar-chave-externa)  
* [Remover chave externa](#remover-chave-externa)

## Adicionar chave externa

Para adicionar uma chave de terceiros à sua conta, siga os passos abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta \> Chaves de API*.  
2. Clique na aba **Externas**.  
3. Clique em `+ Adicionar chave`.  
4. Preencha o campo **Identificação da chave** com o nome para identificar a chave de API.   
5. Selecione os [perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) que serão associados à chave. Por padrão, nenhum perfil de acesso é pré-selecionado.

   <div class="alert alert-danger">
     <p>Marque apenas os perfis de acesso necessários para a integração que utilizará a chave de API. O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas por vazamento de credenciais de login.</p>
   </div>

6. Clique em `Adicionar`.

## Editar chave externa

Siga o passo a passo abaixo para realizar alterações em uma chave de API de terceiros:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Clique na aba **Externas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="fas fa-pencil-alt"></i> `Editar`.  
4. Modifique a seleção de perfis de acesso associados à chave de API conforme desejado.  
5. Clique em `Salvar`.

## Remover chave externa

Para remover uma chave de API de terceiros, siga as instruções abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Clique na aba **Externas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="fas fa-times"></i> `Remover.`  
4. Para confirmar, clique em `Remover`.

## Saiba mais

* [Chaves de API (Beta)](/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Configurar a duração de chaves de API (Beta)](/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)
* [Chaves geradas (Beta)](/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)
