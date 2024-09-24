---
title: 'Chaves de aplicação'
id: 2iffYzlvvz4BDMr6WGUtet
status: PUBLISHED
createdAt: 2021-08-19T17:45:31.084Z
updatedAt: 2023-10-17T20:17:39.441Z
publishedAt: 2023-10-17T20:17:39.441Z
firstPublishedAt: 2021-08-19T18:08:07.096Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: application-keys
locale: pt
legacySlug: chaves-de-aplicacao
subcategoryId: 5GYFjiMQg0qIKpnnQY2qjh
---

Para cada integração via API utilizada para conectar sua conta VTEX com sistemas externos, será necessária a criação de uma chave de aplicação (também conhecida em inglês como _application key_ ou _app key_).

Estas credenciais de [autenticação](https://developers.vtex.com/docs/guides/authentication) são usadas para garantir o acesso seguro aos dados que você deseja compartilhar com as integrações, sem expor sua conta a aplicações ou usuários não autorizados.

## Tipos de chaves de aplicação

Existem dois tipos de chaves de aplicação: [internas](#chaves-de-aplicacao-internas) ou [externas](#chaves-de-aplicacao-externas). Essa definição depende de qual conta cria, gerencia e utiliza a credencial.

### Chaves de aplicação internas

As chaves de aplicação internas são credenciais geradas e administradas por sua conta VTEX. Isso significa que você deve ter acesso a todos os pares de chaves e tokens de aplicação — o equivalente a nomes de usuário e senhas para integrações de API.

### Chaves de aplicação externas

As chaves de aplicação externas são credenciais geradas e administradas por outras contas VTEX. Ao adicionar [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) às chaves de aplicação — o equivalente a nomes de usuário — fornecidas por terceiros, você pode permitir que eles acessem recursos específicos na sua conta.

## Gerenciar chaves de aplicação

>⚠️ É necessário ter um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) com o [recurso](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) **Save User** para gerenciar usuários e chaves de aplicação. O perfil predefinido para essa finalidade é o [User Administrator - RESTRICTED](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted), mas também é possível [criar um perfil de acesso customizado](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) com esse recurso.

Na página **Chaves de aplicação**, você pode gerenciar as chaves de aplicação [internas](#chaves-de-aplicacao-internas) e [externas](#chaves-de-aplicacao-externas) que têm acesso à sua conta, inclusive:

- [Gerar chaves de aplicação internas](#gerar-chaves-de-aplicacao-internas)
- [Adicionar chaves de aplicação externas](#adicionar-chaves-de-aplicacao-externas)
- [Gerenciar permissões das chaves de aplicação](#gerenciar-permissoes-de-chaves-de-aplicacao)
- [Ativar ou desativar chaves de aplicação](#ativar-ou-desativar-chaves-de-aplicacao)
- [Exportar chaves de aplicação com acesso à sua conta](#exportar-chaves-de-aplicacao-com-acesso-a-sua-conta)

Para visualizar essa página, na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Chaves de aplicação**.

>ℹ️ Saiba mais sobre [Boas práticas na utilização de chaves de aplicação](https://help.vtex.com/pt/tutorial/boas-praticas-chaves-de-aplicacao--7b6nD1VMHa49aI5brlOvJm).

## Gerar chaves de aplicação internas

Como as chaves de aplicação permitem que sistemas externos acessem sua conta, elas só podem ser criadas por usuários que tenham o recurso `License Manager / Services access control / Save user` em seus [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

Para criar chaves de aplicação internas na sua conta, siga os passos abaixo.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Chaves de aplicação**.
2. Clique no botão `Gerenciar minhas chaves`.

    Você será redirecionado(a) para a página **Minhas chaves**, ilustrada abaixo. Essa página lista todas as [chaves de aplicação internas](#chaves-de-aplicacao-internas).

    ![Minhas chaves](//images.ctfassets.net/alneenqid6w5/1pSqVIzYaiCJO3RkJUoXZQ/56384e78cd25d545b8bfb8ee603a4c59/minhas-chaves-pt.png)

    Estes são os campos visíveis na página **Minhas chaves**:

    - **Rótulo:** texto que descreve a finalidade da chave de aplicação.
    - **Chave:** identificador único para a chave de aplicação.
    - **Status:** estado atual da chave de aplicação, que pode estar ativa ou inativa.

3. Clique no botão `+ Gerar chave`.
2. (Opcional) Preencha o **Rótulo** com uma descrição da finalidade da chave de aplicação. Este campo é imutável e só pode ser definido durante a criação da chave de aplicação. Se ficar vazio, será automaticamente preenchido com o valor do campo **Chave** da chave de aplicação.
3. (Opcional) Clique em `+ Adicionar perfis` para [gerenciar as permissões da chave de aplicação](#gerenciar-permissoes-das-chaves-de-aplicacao).
4. Clique no botão `Gerar`.
5. Clique em <img src="https://images.contentful.com/alneenqid6w5/3OX5lRYiaSEtQUDXoYJD32/6628b57d4ec1651bcb184ab31c4acd72/image1.png" alt="copy-button"/> para copiar o **Token de aplicação**. _Esse segredo será exibido apenas uma vez. Salve-o em um local seguro._

>⚠️ Proteja os seus pares de chaves e tokens de aplicação do mesmo modo que faria com outras credenciais, como nomes de usuário e senhas. Se você suspeitar que uma chave de aplicação esteja comprometida, desative imediatamente a chave em sua conta. Para mais detalhes, confira a seção [Ativar ou desativar chaves de aplicação](#ativar-ou-desativar-chaves-de-aplicacao) deste artigo.

## Adicionar chaves de aplicação externas

Para adicionar chaves de aplicação de terceiros, siga os passos abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Chaves de aplicação**.
2. Clique no botão `+ Adicionar chave de terceiros`.
3. Preencha o campo **Chave** com a chave de aplicação fornecida pelo terceiro.
4. Clique em `+ Adicionar perfis` para [gerenciar as permissões da chave de aplicação](#gerenciar-permissoes-das-chaves-de-aplicacao). Adicione perfis de acesso para que eles tenham acesso aos recursos que você deseja.
5. Clique em `Salvar`.

## Gerenciar permissões de chaves de aplicação

Para que uma chave de aplicação faça solicitações de API à sua conta com sucesso, ela precisa estar ativa e ter [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) especificando os recursos da conta que tem permissão para acessar. 

>❗ O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas por vazamento de credenciais de login.

As chaves de aplicação são criadas, por padrão, sem permissão de acesso a quaisquer recursos da conta.

Há três caminhos para chegar à página de edição dos perfis de acesso de uma chave de aplicação:

- Usar o botão `+ Adicionar perfis` ao [gerar chaves de aplicação](#gerar-chaves-de-aplicacao-na-sua-conta) na sua conta.
- Usar o botão `+ Adicionar chave de terceiros` na página **Chaves de aplicação**.
- Usar o botão `፧` e selecionar a opção **Editar** nas páginas **Chaves de aplicação** ou **Minhas chaves**.

Ao editar uma chave de aplicação, você pode: 

- Adicionar perfis de acesso clicando no botão `+ Adicionar perfis`, selecionando um ou mais perfis de acesso e clicando no botão `Adicionar perfis`. 
- Remover perfis de acesso usando as caixas de seleção e clicando no botão `Remover perfis`.
- Salvar as alterações clicando no botão `Salvar`.

Após ter adicionado perfis de acesso à chave de aplicação, ela será exibida na página **Chaves de aplicação**.

![Chaves de aplicação](//images.ctfassets.net/alneenqid6w5/2wGtLJjEnzTf1VJmkFcRhm/b21ce0058da588e889f23ef46582b91c/appkeys-pt.png)

Estes são os campos visíveis na página **Chaves de aplicação**:

- **Chave:** identificador único para a chave de aplicação.
- **Conta:** conta VTEX responsável por gerenciar a chave de aplicação.
- **Status:** estado atual da chave de aplicação, que pode estar ativa ou inativa.

>ℹ️ Observe que o campo **Rótulo** não é exibido na página **Chaves de aplicação**. Para ver a descrição da finalidade de uma chave de aplicação interna, use o valor da **Chave** e busque por ela na página **Minhas chaves**. Não é possível adicionar rótulos a chaves de aplicação externas.

## Ativar ou desativar chaves de aplicação

Se uma chave de aplicação que tenha acesso à sua conta for comprometida, você deve revogar imediatamente o acesso dela à sua conta. Caso cometa algum erro, é possível reabilitá-la para restabelecer a integração impactada. O modo como você fará isso dependerá do [tipo de chave de aplicação](#tipos-de-chaves-de-aplicacao).

>⚠️ Apenas reative a chave de aplicação se tiver certeza de que ela não foi comprometida. Qualquer pessoa com o token de aplicação associado recuperará o acesso privilegiado à sua conta.

### Desativar chave de aplicação interna

Para desativar uma chave de aplicação interna, siga os passos abaixo: 

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Chaves de aplicação**.
2. Clique no botão `Gerenciar minhas chaves`.
3. Encontre a chave de aplicação que você deseja desativar na lista e clique no botão `፧`.
4. Clique na opção **Desativar**.

### Desativar chave de aplicação externa

Para desativar uma chave de aplicação externa, siga os passos abaixo: 

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Chaves de aplicação**.
2. Encontre a chave de aplicação que você deseja desativar na lista e clique no botão `፧`.
3. Clique na opção **Remover**.

### Ativar chave de aplicação interna

Para reativar chaves de aplicação internas que tenham sido desativadas anteriormente, siga os passos abaixo:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Chaves de aplicação**.
2. Clique no botão `Gerenciar minhas chaves`.
3. Encontre a chave de aplicação que você deseja reativar na lista e clique no botão `፧`.
4. Clique na opção **Ativar**.

### Ativar chave de aplicação externa

Para reativar chaves de aplicação externas que tenham sido desativadas anteriormente, será necessário refazer as instruções descritas para [adicionar chaves de aplicação externas](#adicionar-chaves-de-aplicacao-externas).

## Exportar chaves de aplicação com acesso à sua conta

Se necessário para uma auditoria de segurança, você pode exportar um arquivo CSV contendo os valores da **Chave** para todas as chaves de aplicação internas e externas que atualmente têm acesso à sua conta — ou seja, que têm perfis de acesso associadas a elas.

Para exportar as chaves, acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_ e clique no botão <span style="display: inline-block;"><img src="//images.contentful.com/alneenqid6w5/25JqGWNUZPZattDX6ORXX6/742e99e17042024b9cae641564909171/image4.png" alt="export-button"/> <strong>Exportar</strong></span>.
