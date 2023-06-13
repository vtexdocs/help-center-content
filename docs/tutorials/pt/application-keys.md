---
title: Chaves de aplicação
id: 2iffYzlvvz4BDMr6WGUtet
status: PUBLISHED
createdAt: 2021-08-19T17:45:31.084Z
updatedAt: 2022-11-25T18:39:48.683Z
publishedAt: 2022-11-25T18:39:48.683Z
firstPublishedAt: 2021-08-19T18:08:07.096Z
contentType: tutorial
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slug: chaves-de-aplicacao
legacySlug: chaves-de-aplicacao
subcategory: 5GYFjiMQg0qIKpnnQY2qjh
---

Para cada integração via API utilizada para conectar sua conta VTEX com sistemas externos, será necessária a criação de uma chave de aplicação (também conhecida em inglês como _application key_ ou _app key_). Estas credenciais de [autenticação](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication) são usadas para garantir o acesso seguro aos dados que você deseja compartilhar com as integrações, sem expor sua conta a aplicações ou usuários não autorizados.

Na página  **Chaves de aplicação** você pode gerenciar as chaves de aplicação [internas](#chaves-de-aplicacao-internas) e [externas](#chaves-de-aplicacao-externas) que têm acesso à sua conta, inclusive:

- [Gerar chaves de aplicação na sua conta](#gerar-chaves-de-aplicacao-na-sua-conta)
- [Gerenciar permissões das chaves de aplicação](#gerenciar-permissoes-de-chaves-de-aplicacao)
- [Ativar ou desativar chaves de aplicação](#ativar-ou-desativar-chaves-de-aplicacao)
- [Exportar chaves de aplicação com acesso à sua conta](#exportar-chaves-de-aplicacao-com-acesso-a-sua-conta)

Para visualizar essa página, acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_.

<div class = "alert alert-info">
  Saiba mais sobre <a href="https://help.vtex.com/pt/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm">Boas práticas na utilização de chaves de aplicação</a>.
</div>

## Tipos de chaves de aplicação

### Chaves de aplicação internas

As chaves de aplicação internas são credenciais geradas e administradas por sua conta VTEX. Isso significa que você deve ter acesso a todos os pares de chaves e tokens de aplicação — o equivalente a nomes de usuário e senhas para integrações de API.

### Chaves de aplicação externas

As chaves de aplicação externas são credenciais geradas e administradas por outras contas VTEX. Ao adicionar [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) às chaves de aplicação — o equivalente a nomes de usuário — fornecidas por terceiros, você pode permitir que eles acessem recursos específicos na sua conta.

## Gerar chaves de aplicação na sua conta

Para criar chaves de aplicação na sua conta, acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_ e clique no botão **Gerenciar minhas chaves**. Você será redirecionado para a página **Minhas chaves**, que lista todas as [chaves de aplicação internas](#chaves-de-aplicacao-internas).

![My Keys](//images.contentful.com/alneenqid6w5/1pSqVIzYaiCJO3RkJUoXZQ/1c98224b6f50673c4567f21e22de4978/image3.png)

Estes são os campos visíveis na página **Minhas chaves**:

- **Rótulo:** campo de texto que descreve a finalidade da chave de aplicação.
- **Chave:** campo de texto que contém o identificador único para a chave de aplicação.
- **Status:** campo booleano que indica se a chave de aplicação está ativa ou inativa.

Como as chaves de aplicação permitem que sistemas externos acessem sua conta, elas só podem ser criadas por usuários que tenham o recurso `License Manager / Services access control / Save user` em seus [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

Para gerar uma nova chave de aplicação, siga os passos abaixo:

1. Clique no botão **⊕ Gerar chave**.
2. (Opcional) Preencha o **Rótulo** com uma descrição da finalidade da chave de aplicação. Este campo é imutável e só pode ser definido quando a chave de aplicação estiver sendo gerada. Se ficar vazio, será automaticamente preenchido com o valor do campo **Chave** da chave de aplicação.
3. (Opcional) Clique em **+ Adicionar perfis** para [gerenciar as permissões da chave de aplicação](#gerenciar-permissoes-das-chaves-de-aplicacao).
4. Clique no botão **Gerar**.
5. Clique em <img src="https://images.contentful.com/alneenqid6w5/3OX5lRYiaSEtQUDXoYJD32/6628b57d4ec1651bcb184ab31c4acd72/image1.png" alt="copy-button"/> para copiar o **Token de aplicação** _Esse segredo será exibido apenas uma vez. Salve-o em um local seguro._

<div class="alert alert-warning">Proteja os seus pares de chaves e tokens de aplicação do mesmo modo que faria com outras credenciais, como nomes de usuário e senhas. Se você suspeitar que uma chave de aplicação esteja comprometida, desative imediatamente a chave em sua conta. Para mais detalhes, confira a seção <a href="#ativar-ou-desativar-chaves-de-aplicacao">Ativar ou desativar chaves de aplicação</a> deste artigo.</div>

## Gerenciar permissões de chaves de aplicação

Para que uma chave de aplicação faça solicitações de API à sua conta com sucesso, ela precisa estar ativa e ter [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) especificando os recursos da conta que tem permissão para acessar. 

<div class="alert alert-danger">
<b>Atenção!</b> O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas por vazamento de credenciais de login.
</div>

As chaves de aplicação são criadas, por padrão, sem permissão de acesso a quaisquer recursos da conta.

Há três caminhos para chegar à página de edição dos perfis de acesso de uma chave de aplicação:

- Usar o botão **+ Adicionar perfis** ao [gerar chaves de aplicação](#gerar-chaves-de-aplicacao-na-sua-conta) na sua conta.
- Usar o botão **⊕ Adicionar** na página **Chaves de aplicação**.
- Usar o botão **፧** e selecionar a opção **Editar** nas páginas **Chaves de aplicação** ou **Minhas chaves**.

Ao editar uma chave de aplicação, você pode: 

- Adicionar perfis de acesso clicando no botão **+ Adicionar perfis**, selecionando um ou mais perfis de acesso e clicando no botão **Adicionar perfis**. 
- Remover perfis de acesso usando as caixas de seleção e clicando no botão **Remover perfis**.
- Salvar clicando no botão **Salvar**.

Após ter adicionado perfis de acesso à chave de aplicação, ela será exibida na página **Chaves de aplicação**.

![Application Keys](//images.contentful.com/alneenqid6w5/2wGtLJjEnzTf1VJmkFcRhm/da66ebc249dd18cbc709d872ce78719c/image2.png)

Estes são os campos visíveis na página **Chaves de aplicação**:

- **Chave:** campo de texto que contém o identificador único para a chave de aplicação.
- **Conta:** campo de texto que indica a conta VTEX responsável por gerenciar a chave de aplicação.
- **Status:** campo booleano que indica se a chave de aplicação está ativa ou inativa.

<div class="alert alert-info">Observe que o campo <strong>Rótulo</strong> não é exibido na página <strong>Chaves de aplicação</strong>. Para ver a descrição da finalidade de uma chave de aplicação interna, use o valor da <strong>Chave</strong> e busque por ela na página <strong>Minhas chaves</strong>. Não é possível adicionar rótulos a chaves de aplicação externas.</div>

## Ativar ou desativar chaves de aplicação

Se uma chave de aplicação que tenha acesso à sua conta for comprometida, você deve revogar imediatamente o acesso dela à sua conta. Caso cometa algum erro, é possível reabilitá-la para restabelecer a integração impactada. O modo como você fará isso dependerá do [tipo de chave de aplicação](#tipos-de-chaves-de-aplicacao).

<div class="alert alert-warning">Apenas reative a chave de aplicação se tiver certeza de que ela não foi comprometida. Qualquer pessoa com o token de aplicação associado recuperará o acesso privilegiado à sua conta.</div>

Para desativar uma chave de aplicação interna, siga os passos abaixo: 

1. Acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_.
2. Clique no botão **Gerenciar minhas chaves**.
3. Encontre a chave de aplicação que você deseja desativar na lista e clique no botão **፧**.
4. Selecione a opção **Desativar**.

Para desativar uma chave de aplicação externa, siga os passos abaixo: 

1. Acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_.
2. Encontre a chave de aplicação que você deseja desativar na lista e clique no botão **፧**.
3. Selecione a opção **Remover**.

Para reativar chaves de aplicação internas que tenham sido desativadas anteriormente, siga os passos abaixo:

1. Acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_.
2. Clique no botão **Gerenciar minhas chaves**.
3. Encontre a chave de aplicação que você deseja reativar na lista e clique no botão **፧**.
4. Selecione a opção **Ativar**.

Para reativar chaves de aplicação externas que tenham sido desativadas anteriormente, siga os passos abaixo:

1. Acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_.
2. Clique no botão **⊕ Adicionar**.
3. Preencha o campo **Chave** com a chave de aplicação fornecida pelo terceiro.
4. Adicione perfis de acesso para que eles tenham acesso aos recursos que você deseja.

## Exportar chaves de aplicação com acesso à sua conta

Se necessário para uma auditoria de segurança, você pode exportar um arquivo CSV contendo os valores da **Chave** para todas as chaves de aplicação internas e externas que atualmente têm acesso à sua conta — ou seja, que têm perfis de acesso associadas a elas. Para exportar as chaves, acesse _Configurações da conta > Gerenciamento da conta > Chaves de aplicação_ e clique no botão <span style="display: inline-block;"><img src="//images.contentful.com/alneenqid6w5/25JqGWNUZPZattDX6ORXX6/742e99e17042024b9cae641564909171/image4.png" alt="export-button"/> <strong>Exportar</strong></span>.
